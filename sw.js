// Đổi tên phiên bản này mỗi khi bạn cập nhật code (VD: v2, v3, v1.1...)
// Việc đổi tên này sẽ kích hoạt cơ chế xóa toàn bộ cache cũ trên máy học sinh.
const CACHE_NAME = 'edumaster-cache-v1.0';

// Danh sách các file khung giao diện cần lưu cache (App Shell)
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './arena.html',
    './exam.html',
    './admin.html',
    './snote.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
    // Lưu ý: KHÔNG đưa các file trong data_arena/ hay data/ vào đây 
    // để chúng luôn được tải mới mỗi khi có đề thi mới.
];

// Sự kiện INSTALL: Cài đặt Service Worker và nạp cache ban đầu
self.addEventListener('install', (event) => {
    // Ép buộc trình duyệt cài đặt và kích hoạt SW mới ngay lập tức 
    // mà không cần chờ người dùng đóng tab cũ.
    self.skipWaiting();
    
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Đang nạp cache bộ nhớ cục bộ...');
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

// Sự kiện ACTIVATE: Kích hoạt SW mới và DỌN DẸP CACHE CŨ
self.addEventListener('activate', (event) => {
    // Chiếm quyền điều khiển trang ngay lập tức
    event.waitUntil(self.clients.claim());

    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    // Nếu tên cache trong máy KHÁC với CACHE_NAME hiện tại -> Xóa
                    if (cacheName !== CACHE_NAME) {
                        console.log('[Service Worker] Đã dọn dẹp cache phiên bản cũ:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Sự kiện FETCH: Chiến lược "Network First, Fallback to Cache"
self.addEventListener('fetch', (event) => {
    // Bỏ qua các request gọi ra API bên ngoài (Firebase, Google Script, CDN)
    // Tránh việc Service Worker vô tình chặn hay lưu cache sai dữ liệu động.
    if (
        event.request.url.includes('firestore') || 
        event.request.url.includes('firebaseio') || 
        event.request.url.includes('script.google.com') ||
        event.request.url.includes('cdn.jsdelivr.net') ||
        event.request.url.includes('cdn.tailwindcss.com')
    ) {
        return;
    }

    event.respondWith(
        fetch(event.request)
            .then((networkResponse) => {
                // NẾU CÓ MẠNG: Tải file mới nhất từ Server về
                // Sau đó copy file mới này vào cache để dành cho lúc mất mạng
                if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
                    const responseToCache = networkResponse.clone();
                    caches.open(CACHE_NAME).then((cache) => {
                        cache.put(event.request, responseToCache);
                    });
                }
                return networkResponse;
            })
            .catch(() => {
                // NẾU MẤT MẠNG (Offline) hoặc lỗi server: Lấy file dự phòng từ Cache ra hiển thị
                return caches.match(event.request);
            })
    );
});