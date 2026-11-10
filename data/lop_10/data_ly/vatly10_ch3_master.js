/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU VẬT LÝ 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Chuẩn hóa theo chương trình GDPT Mới (KNTT / CTST / CD)
   Chương III: Động lực học
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
   ========================================================================== */

const DATA_LY10_CH3 = {
    "PHY10-CH3-01": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương III: Động lực học",
        title: "Bài 1: Tổng hợp lực & Ba định luật Newton",
        theory: String.raw`
### 1. Lực, Tổng hợp và Phân tích lực
- **Khái niệm:** Lực là đại lượng vectơ đặc trưng cho tác dụng của vật này lên vật khác, kết quả gây ra gia tốc cho vật hoặc làm vật biến dạng. Đơn vị: Newton (N).
- **Tổng hợp lực:** Quy tắc hình bình hành. Độ lớn hợp lực của 2 lực đồng quy $F_1, F_2$ hợp nhau góc $\alpha$: 
  $F = \sqrt{F_1^2 + F_2^2 + 2F_1F_2 \cos \alpha}$. 
  Luôn có: $|F_1 - F_2| \le F \le F_1 + F_2$.
- **Phân tích lực:** Là thay thế 1 lực thành 2 lực thành phần có tác dụng giống hệt lực đó. Phân tích lực trên mặt phẳng nghiêng góc $\alpha$: 
  + Thành phần song song mặt phẳng nghiêng (kéo vật trượt): $P_x = P \sin \alpha$.
  + Thành phần vuông góc mặt phẳng nghiêng (ép vật vào mặt phẳng): $P_y = P \cos \alpha$.

### 2. Ba định luật Newton
- **Định luật I Newton (Định luật quán tính):** Nếu một vật không chịu tác dụng của lực nào hoặc chịu tác dụng của các lực có hợp lực bằng không, thì vật đang đứng yên sẽ tiếp tục đứng yên, đang chuyển động sẽ tiếp tục chuyển động thẳng đều.
- **Định luật II Newton:** Gia tốc của một vật cùng hướng với lực tác dụng lên vật. Độ lớn gia tốc tỉ lệ thuận với độ lớn của lực và tỉ lệ nghịch với khối lượng của vật.
  $\vec{a} = \frac{\vec{F}_{hl}}{m} \Leftrightarrow \vec{F}_{hl} = m\vec{a}$.
- **Định luật III Newton:** Trong mọi trường hợp, khi vật A tác dụng lên vật B một lực, thì vật B cũng tác dụng lại vật A một lực. Hai lực này là hai lực trực đối (cùng giá, cùng độ lớn, ngược chiều).
  $\vec{F}_{AB} = -\vec{F}_{BA}$.

---

### 3. 💎 Chuyên đề Master: Phương pháp Động lực học & Hệ vật (VDC)
📌 **Phương pháp Động lực học (Giải bài toán bằng phương pháp chiếu):**
- **Bước 1:** Vẽ hình, phân tích TẤT CẢ các lực tác dụng lên vật (Trọng lực $\vec{P}$, Phản lực $\vec{N}$, Lực kéo $\vec{F}$, Lực ma sát $\vec{F}_{ms}$...).
- **Bước 2:** Chọn hệ trục tọa độ vuông góc $Oxy$ (Thường chọn trục $Ox$ TRÙNG VỚI HƯỚNG CHUYỂN ĐỘNG của vật, trục $Oy$ vuông góc với hướng chuyển động).
- **Bước 3:** Viết phương trình Định luật II Newton dạng vectơ: $\vec{F}_1 + \vec{F}_2 + ... + \vec{F}_n = m\vec{a}$ (*).
- **Bước 4:** Chiếu (*) lên 2 trục $Ox, Oy$:
  + Lên $Oy$ (vật không nhảy lên hay lún xuống): $\sum F_y = 0 \Rightarrow$ Suy ra phản lực $N$.
  + Lên $Ox$ (vật trượt): $\sum F_x = ma \Rightarrow$ Suy ra gia tốc $a$ hoặc lực kéo.

📌 **Bài toán hệ vật (Nhiều vật nối với nhau bằng dây):**
- Coi hệ như MỘT vật duy nhất có khối lượng $m_{hệ} = m_1 + m_2 +...$ để tìm gia tốc chung (nếu dây không dãn). Lực căng dây lúc này là nội lực, triệt tiêu nhau.
- $a = \frac{\sum F_{ngoại\_lực}}{m_1 + m_2}$.
- Để tìm lực căng dây $T$, ta bắt buộc phải tách riêng một vật ra để xét.
        `,
        tips: `
- ⚠️ **Sai lầm thường gặp về Định luật III:** Lực và phản lực cùng độ lớn, ngược chiều, NHƯNG TÁC DỤNG VÀO 2 VẬT KHÁC NHAU. Do đó chúng KHÔNG BAO GIỜ TRIỆT TIÊU NHAU (không phải là 2 lực cân bằng).
- 💡 **Khối lượng và Trọng lượng:** Khối lượng ($m$, đơn vị kg) là lượng chất tạo thành vật, đại lượng vô hướng, KHÔNG ĐỔI dù vật ở đâu. Trọng lượng ($P$, đơn vị N) là độ lớn của trọng lực, thay đổi theo gia tốc trọng trường $g$. ($P = mg$).
- 💡 **Mẹo chiếu lực:** Khi chiếu lực $\vec{F}$ lên trục $Ox$: Nếu lực cùng chiều trục thì mang dấu $+$; ngược chiều mang dấu $-$; vuông góc với trục thì hình chiếu bằng $0$. Nếu tạo góc $\alpha$ với trục thì chiếu vào bằng $F \cos \alpha$ hoặc $F \sin \alpha$.
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Hai lực đồng quy $\vec{F_1}$ và $\vec{F_2}$ có độ lớn lần lượt là 6 N và 8 N. Hợp lực của chúng có độ lớn là 10 N. Hỏi góc hợp bởi hai lực $\vec{F_1}$ và $\vec{F_2}$ là bao nhiêu?
* **Lời giải:**
  - Ta thấy $6^2 + 8^2 = 36 + 64 = 100 = 10^2$. 
  - Nghĩa là $F_1^2 + F_2^2 = F^2$.
  - Suy ra hai lực $\vec{F_1}$ và $\vec{F_2}$ phải vuông góc với nhau. Góc hợp bởi chúng là $\alpha = 90^\circ$.

**Bài 2 (Cơ bản):** Một vật khối lượng 2 kg đang đứng yên trên mặt phẳng ngang không ma sát. Tác dụng vào vật một lực đẩy theo phương ngang có độ lớn 10 N. Tính gia tốc của vật và quãng đường vật đi được sau 3 giây.
* **Lời giải:**
  - Áp dụng Định luật II Newton: $a = \frac{F}{m} = \frac{10}{2} = 5 \text{ m/s}^2$.
  - Vật bắt đầu cđ $\Rightarrow v_0 = 0$.
  - Quãng đường sau 3s: $s = \frac{1}{2}at^2 = \frac{1}{2}(5)(3)^2 = 22.5 \text{ m}$.

**Bài 3 (Vận dụng):** Một ôtô có khối lượng 1.5 tấn đang chạy với tốc độ 72 km/h thì hãm phanh. Ôtô dừng lại sau khi đi thêm được 50m. Tính độ lớn lực hãm phanh tác dụng lên ôtô.
* **Lời giải:**
  - Đổi $m = 1500 \text{ kg}$; $v_0 = 72 \text{ km/h} = 20 \text{ m/s}$. Dừng lại $\Rightarrow v = 0$.
  - Gia tốc của ôtô: $v^2 - v_0^2 = 2as \Rightarrow 0 - 20^2 = 2 \cdot a \cdot 50 \Rightarrow 100a = -400 \Rightarrow a = -4 \text{ m/s}^2$.
  - Theo ĐL II Newton, lực hãm phanh (ngược chiều cđ nên có giá trị đại số âm): $F = ma = 1500 \times (-4) = -6000 \text{ N}$.
  - Độ lớn lực hãm phanh là $6000 \text{ N}$.

**Bài 4 (Vận dụng):** Quả bóng tennis khối lượng 60g bay với vận tốc 30 m/s đập vuông góc vào bức tường rồi bật ngược trở lại theo phương cũ với vận tốc 20 m/s. Thời gian va chạm là 0.05s. Tính lực trung bình do tường tác dụng lên quả bóng.
* **Lời giải:**
  - Đổi $m = 60\text{g} = 0.06\text{kg}$. Chọn chiều dương là chiều bóng bật ra (sau va chạm).
  - Vận tốc ban đầu (lao vào tường): $v_0 = -30 \text{ m/s}$.
  - Vận tốc lúc sau (bật ra): $v = +20 \text{ m/s}$.
  - Gia tốc của bóng: $a = \frac{v - v_0}{t} = \frac{20 - (-30)}{0.05} = \frac{50}{0.05} = 1000 \text{ m/s}^2$.
  - Lực trung bình: $F = ma = 0.06 \times 1000 = 60 \text{ N}$.
  - *(Lực này hướng ra ngoài tường, cùng chiều dương đã chọn).*

**Bài 5 (Vận dụng):** Một vật trượt không ma sát từ đỉnh một mặt phẳng nghiêng dài 10m, góc nghiêng $30^\circ$ so với mặt phẳng ngang. Tính thời gian vật trượt hết mặt phẳng nghiêng. Lấy $g = 10 \text{ m/s}^2$.
* **Lời giải:**
  - Lực tác dụng lên vật: Trọng lực $\vec{P}$, phản lực $\vec{N}$.
  - Phân tích $\vec{P}$ thành $\vec{P}_x$ (song song mp nghiêng) và $\vec{P}_y$ (vuông góc mp nghiêng).
  - Phương trình Động lực học trục Ox (hướng dọc xuống dốc): 
    $P_x = ma \Leftrightarrow mg \sin \alpha = ma \Rightarrow a = g \sin \alpha = 10 \sin 30^\circ = 5 \text{ m/s}^2$.
  - Vật trượt xuống từ trạng thái nghỉ ($v_0=0$): $s = \frac{1}{2}at^2 \Rightarrow 10 = \frac{1}{2}(5)t^2 \Rightarrow t^2 = 4 \Rightarrow t = 2 \text{ (s)}$.

**Bài 6 (Vận dụng cao):** Một xe goòng khối lượng $m_1 = 10 \text{ kg}$ chuyển động với vận tốc 5 m/s thì va chạm vào một xe goòng khác có khối lượng $m_2 = 5 \text{ kg}$ đang đứng yên. Sau va chạm, hai xe dính vào nhau và cùng chuyển động. Áp dụng các định luật Newton, bỏ qua ma sát, tính vận tốc của hệ sau va chạm.
* **Lời giải:**
  - Bài toán va chạm (Định luật III Newton): Trong quá trình va chạm, lực xe 1 tác dụng lên xe 2 và xe 2 tác dụng lên xe 1 là 2 lực trực đối: $\vec{F}_{12} = -\vec{F}_{21}$.
  - Ta có: $m_2 \vec{a}_2 = -m_1 \vec{a}_1 \Leftrightarrow m_2 \frac{\vec{v} - \vec{v}_{02}}{\Delta t} = -m_1 \frac{\vec{v} - \vec{v}_{01}}{\Delta t}$.
  - Vì hai xe dính vào nhau nên có cùng vận tốc cuối $\vec{v}$. $\vec{v}_{02} = 0$, $\vec{v}_{01} = 5$.
  - Suy ra: $m_2 v = -m_1 (v - v_{01}) \Leftrightarrow 5v = -10(v - 5) \Leftrightarrow 5v = -10v + 50 \Leftrightarrow 15v = 50 \Rightarrow v = \frac{10}{3} \approx 3.33 \text{ m/s}$.
  - *(Đây chính là cơ sở cho Định luật bảo toàn động lượng ở chương sau).*

**Bài 7 (Vận dụng cao):** Một người kéo một vật khối lượng 50kg trượt trên mặt sàn ngang (bỏ qua ma sát) bằng một sợi dây hợp với phương ngang một góc $60^\circ$. Lực kéo dây là 200 N. Tính gia tốc của vật và áp lực vật nén lên mặt sàn. Lấy $g = 10 \text{ m/s}^2$.
* **Lời giải:**
  - Chọn hệ trục Oxy (Ox nằm ngang, Oy thẳng đứng hướng lên). Các lực: $\vec{P}, \vec{N}, \vec{F}_{kéo}$.
  - Chiếu lên Ox: $F_x = ma \Leftrightarrow F \cos 60^\circ = ma \Rightarrow 200 \times \frac{1}{2} = 50a \Rightarrow 100 = 50a \Rightarrow a = 2 \text{ m/s}^2$.
  - Chiếu lên Oy (vật không bay lên): $N + F_y - P = 0 \Leftrightarrow N + F \sin 60^\circ - mg = 0$.
  - $N = mg - F \sin 60^\circ = 50(10) - 200\frac{\sqrt{3}}{2} = 500 - 100\sqrt{3} \approx 326.8 \text{ (N)}$.
  - Áp lực vật ép lên sàn có độ lớn bằng độ lớn phản lực N. Vậy áp lực $\approx 326.8 \text{ N}$. (Nhỏ hơn trọng lượng vật do lực kéo xiên đã "nhấc" vật lên một phần).

**Bài 8 (Vận dụng cao):** Hai vật $m_1 = 3 \text{ kg}, m_2 = 2 \text{ kg}$ được nối với nhau bằng một sợi dây nhẹ, không dãn. Hệ được đặt trên mặt phẳng ngang nhẵn (không ma sát). Tác dụng một lực $F = 15 \text{ N}$ theo phương ngang kéo vật $m_2$. Tính gia tốc của hệ và lực căng của sợi dây.
* **Lời giải:**
  - **Tính gia tốc hệ:** Coi hệ là 1 vật duy nhất $m = m_1 + m_2 = 5 \text{ kg}$. Lực kéo $F$ tác dụng lên cả hệ.
    $a = \frac{F}{m_1 + m_2} = \frac{15}{3 + 2} = 3 \text{ m/s}^2$.
  - **Tính lực căng dây T:** Tách riêng vật $m_1$. Vật $m_1$ chuyển động được chỉ nhờ vào lực căng dây T kéo nó theo phương ngang.
    Áp dụng ĐL II Newton cho $m_1$: $T = m_1 \cdot a = 3 \times 3 = 9 \text{ (N)}$.
  - *(Có thể thử lại với $m_2$: $F - T = m_2 \cdot a \Leftrightarrow 15 - 9 = 2 \times 3 \Leftrightarrow 6 = 6$ (Đúng)).*

**Bài 9 (Vận dụng cao):** Hệ ròng rọc Atwood cơ bản: Một ròng rọc cố định, sợi dây vắt qua ròng rọc nối hai vật $m_1 = 3 \text{ kg}, m_2 = 2 \text{ kg}$. Ban đầu giữ hệ đứng yên rồi buông tay. Bỏ qua khối lượng dây, ròng rọc và ma sát. Tính gia tốc chuyển động của mỗi vật và lực căng dây. ($g = 10 \text{ m/s}^2$).
* **Lời giải:**
  - Trọng lượng 2 vật: $P_1 = 30 \text{N}, P_2 = 20 \text{N}$. Vì $P_1 > P_2$ nên vật 1 đi xuống, vật 2 đi lên.
  - Áp dụng ĐL II Newton cho từng vật (chiều dương theo chiều chuyển động của từng vật):
    + Vật 1 (xuống): $P_1 - T = m_1 a \Leftrightarrow 30 - T = 3a$ (1).
    + Vật 2 (lên): $T - P_2 = m_2 a \Leftrightarrow T - 20 = 2a$ (2).
  - Cộng vế (1) và (2): $(30 - T) + (T - 20) = 5a \Rightarrow 10 = 5a \Rightarrow a = 2 \text{ m/s}^2$.
  - Thay $a=2$ vào (2): $T - 20 = 2(2) \Rightarrow T = 24 \text{ N}$.

**Bài 10 (Nâng cao):** Một xe tải khối lượng 3 tấn đang kéo một xe moóc khối lượng 2 tấn. Trong quá trình khởi hành, xe tải có gia tốc $0.5 \text{ m/s}^2$. Dây cáp nối 2 xe chịu được lực căng tối đa là 1200 N. Hỏi xe tải có bị đứt dây cáp không? Bỏ qua mọi ma sát. 
Nếu có ma sát với hệ số ma sát giữa cả 2 xe và mặt đường là $\mu = 0.01$, dây cáp có đứt không?
* **Lời giải:**
  - **Trường hợp 1 (Không ma sát):** Xe moóc (vật 2) cđ được chỉ nhờ lực căng dây T. 
    $T = m_2 a = 2000 \times 0.5 = 1000 \text{ (N)}$.
    Vì $T = 1000 \text{ N} < 1200 \text{ N}$ nên dây **không đứt**.
  - **Trường hợp 2 (Có ma sát $\mu = 0.01$):**
    Lực ma sát tác dụng lên moóc: $F_{ms2} = \mu \cdot m_2 g = 0.01 \times 2000 \times 10 = 200 \text{ (N)}$.
    Áp dụng ĐL II Newton cho xe moóc: Lực kéo T phải thắng lực ma sát để tạo ra gia tốc.
    $T - F_{ms2} = m_2 a \Leftrightarrow T - 200 = 2000 \times 0.5 = 1000$.
    $\Rightarrow T = 1200 \text{ (N)}$.
  - Lực căng đạt đúng giới hạn tối đa 1200 N. Dây ở trạng thái giới hạn (chưa đứt nhưng cực kỳ nguy hiểm, thực tế không an toàn).
        `
    },

    "PHY10-CH3-02": {
        grade: "10", subject: "PHYSICS", subjectName: "Vật lý 10",
        chapter: "Chương III: Động lực học",
        title: "Bài 2: Các lực cơ học, Lực cản và Lực hướng tâm",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương III", "Bài 2"],
        theory: `
### 1. Trọng lực & Phản lực
- **Trọng lực:** Là lực hấp dẫn do Trái Đất tác dụng lên vật. Công thức $\vec{P} = m\vec{g}$. Phương thẳng đứng, chiều từ trên xuống, điểm đặt tại trọng tâm vật.
- **Phản lực (Lực pháp tuyến) $\vec{N}$:** Lực do mặt tiếp xúc tác dụng lên vật, hướng vuông góc với mặt tiếp xúc và đi ra khỏi mặt tiếp xúc đó.

### 2. Lực Ma sát
- **Lực ma sát trượt:** Xuất hiện khi một vật trượt trên bề mặt vật khác, cản trở chuyển động trượt.
  + Công thức độ lớn: $F_{ms} = \mu \cdot N$ (trong đó $\mu$ là hệ số ma sát trượt, phụ thuộc vật liệu bề mặt; $N$ là áp lực/phản lực pháp tuyến).
- **Lực ma sát nghỉ:** Giữ cho vật không trượt khi bị tác dụng bởi lực kéo.
  + Lực ma sát nghỉ luôn có độ lớn bằng với lực kéo song song với mặt tiếp xúc (để hợp lực bằng 0).
  + Nó có giá trị cực đại. Khi lực kéo lớn hơn giá trị cực đại này, vật bắt đầu trượt. $F_{msn(max)} = \mu_s \cdot N$ ($\mu_s$ là hệ số ma sát nghỉ, thường $\mu_s > \mu_{trượt}$).

### 3. Lực Cản và Lực Nâng của chất lưu
- Mọi vật chuyển động trong không khí/nước đều chịu lực cản ngược chiều chuyển động.
- Đặc điểm: Vận tốc càng lớn, lực cản càng mạnh. Khi lực cản cân bằng với trọng lực, vật sẽ rơi đều (vận tốc giới hạn).
- Lực nâng chất lưu (áp suất động học, nguyên lý Bernoulli) giúp máy bay bay được.

### 4. Lực Hướng tâm
- Không phải là một loại lực mới. Nó là **Hợp lực** của tất cả các lực tác dụng lên vật chuyển động tròn đều, hướng vào tâm quỹ đạo để gây ra gia tốc hướng tâm.
- Công thức: $F_{ht} = m \cdot a_{ht} = m \frac{v^2}{R} = m \omega^2 R$.
- (Trong đó: $v$ là tốc độ dài, $\omega$ là tốc độ góc, $R$ là bán kính quỹ đạo).

---

### 5. 💎 Chuyên đề Master: Các mô hình Lực Hướng Tâm thường gặp (VDC)
📌 **Khúc cua ô tô (Mặt đường phẳng ngang):**
- Lực đóng vai trò lực hướng tâm giúp ô tô ôm cua mà không bị văng ra lề là **Lực ma sát nghỉ** hướng vào tâm khúc cua.
- Điều kiện ôm cua an toàn: $F_{ht} \le F_{msn(max)} \Leftrightarrow m\frac{v^2}{R} \le \mu mg \Rightarrow v \le \sqrt{\mu g R}$.

📌 **Mặt đường nghiêng (Lòng chảo đua xe):**
- Tại các góc cua gấp, mặt đường làm nghiêng góc $\alpha$ để Hợp lực của phản lực $\vec{N}$ và trọng lực $\vec{P}$ tạo ra lực hướng tâm, giúp giảm bớt sự phụ thuộc vào ma sát.

📌 **Con lắc nón (Quả nặng treo vào dây, quay tròn mặt phẳng ngang):**
- Lực tác dụng: Trọng lực $\vec{P}$ (xuống), lực căng $\vec{T}$ (chéo lên).
- Hợp lực của $\vec{T}$ và $\vec{P}$ hướng vào tâm vòng tròn.
- $T \cos \alpha = mg$; $T \sin \alpha = F_{ht} = m \omega^2 R$. $\Rightarrow \tan \alpha = \frac{\omega^2 R}{g}$.
        `,
        tips: `
- ⚠️ **Sai lầm cực lớn về Lực hướng tâm:** Khi liệt kê các lực tác dụng lên vật chuyển động tròn, HỌC SINH HAY VẼ THÊM "LỰC HƯỚNG TÂM". Điều này hoàn toàn sai bản chất! Lực hướng tâm chỉ là TÊN GỌI của Hợp Lực. Bạn chỉ được vẽ $\vec{P}, \vec{N}, \vec{F}_{ms}...$ rồi kết luận hợp của chúng là Lực hướng tâm.
- 💡 **Ma sát trên mặt phẳng nghiêng:** Đừng nhắm mắt viết $F_{ms} = \mu mg$. Trên mặt phẳng nghiêng góc $\alpha$, phản lực $N = mg \cos \alpha$. Do đó $F_{ms} = \mu mg \cos \alpha$.
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Một khối gỗ 2kg đang trượt đều trên mặt bàn nằm ngang dưới tác dụng của lực kéo ngang 5N. Lấy $g=10 \text{ m/s}^2$. Tính hệ số ma sát trượt giữa khối gỗ và mặt bàn.
* **Lời giải:**
  - Khối gỗ trượt đều $\Rightarrow a = 0 \Rightarrow$ Các lực cân bằng nhau.
  - Lực kéo bằng lực ma sát trượt: $F_{kéo} = F_{ms} = 5 \text{ N}$.
  - Phản lực $N = P = mg = 2 \times 10 = 20 \text{ N}$.
  - Ta có $F_{ms} = \mu \cdot N \Rightarrow \mu = \frac{F_{ms}}{N} = \frac{5}{20} = 0.25$.

**Bài 2 (Cơ bản):** Một vệ tinh khối lượng 100 kg chuyển động tròn đều quanh Trái Đất với tốc độ 8 km/s ở khoảng cách $R = 6400$ km từ tâm Trái Đất. Tính lực hướng tâm tác dụng lên vệ tinh. Lực nào đóng vai trò là lực hướng tâm?
* **Lời giải:**
  - Đổi $v = 8 \text{ km/s} = 8000 \text{ m/s}$; $R = 6400 \text{ km} = 6400000 \text{ m}$.
  - $F_{ht} = m\frac{v^2}{R} = 100 \frac{(8000)^2}{6.4 \times 10^6} = 100 \frac{64 \times 10^6}{6.4 \times 10^6} = 100 \times 10 = 1000 \text{ N}$.
  - Lực đóng vai trò lực hướng tâm chính là Lực hấp dẫn của Trái Đất tác dụng lên vệ tinh.

**Bài 3 (Vận dụng):** Một người cố đẩy một cái tủ 50kg trên sàn nhà bằng một lực ngang 100N nhưng tủ không nhúc nhích. Hỏi lực ma sát tác dụng lên tủ lúc này là bao nhiêu? Lực ma sát này gọi là lực ma sát gì?
* **Lời giải:**
  - Vì tủ "không nhúc nhích" (đứng yên), nên tổng các lực tác dụng theo phương ngang bằng 0.
  - Lực đẩy bị cân bằng bởi lực ma sát $\Rightarrow F_{ms} = F_{đẩy} = 100 \text{ N}$.
  - Đây là Lực ma sát nghỉ. (Chú ý: Nhiều bạn lấy $\mu mg$ tính là sai, vì vật chưa trượt).

**Bài 4 (Vận dụng):** Một chiếc hộp 5kg đang trượt với vận tốc ban đầu 10 m/s trên sàn nhà thì bị tắt máy, trượt chậm dần đều rồi dừng lại sau 20m. Lấy $g=10 \text{ m/s}^2$. Tính hệ số ma sát trượt giữa hộp và sàn.
* **Lời giải:**
  - Gia tốc của hộp: $v^2 - v_0^2 = 2as \Rightarrow 0 - 10^2 = 2a(20) \Rightarrow 40a = -100 \Rightarrow a = -2.5 \text{ m/s}^2$.
  - Áp dụng ĐL II Newton theo trục Ox (chỉ có lực ma sát cản trở cđ):
    $-F_{ms} = ma \Leftrightarrow -\mu \cdot mg = ma \Leftrightarrow -\mu \cdot g = a$.
  - Thay số: $-\mu \times 10 = -2.5 \Rightarrow \mu = 0.25$.

**Bài 5 (Vận dụng):** Một vật khối lượng $m = 1 \text{ kg}$ được kéo trượt trên mặt phẳng ngang bởi lực $F$ hợp với phương ngang góc $30^\circ$, hướng lên. Biết $F = 4\text{N}$, hệ số ma sát $\mu = 0.1$, $g = 10 \text{ m/s}^2$. Tính lực ma sát.
* **Lời giải:**
  - Phân tích F thành $F_x = F\cos 30^\circ$ và $F_y = F\sin 30^\circ$ (hướng lên).
  - Phương trình phương thẳng đứng (Oy): $N + F_y - P = 0 \Rightarrow N = P - F_y = mg - F\sin 30^\circ$.
  - $N = 1(10) - 4(0.5) = 10 - 2 = 8 \text{ (N)}$.
  - Tính lực ma sát: $F_{ms} = \mu \cdot N = 0.1 \times 8 = 0.8 \text{ (N)}$.
  - *(Lưu ý: N ở đây không bằng mg, mà nhỏ hơn do có lực F nhấc lên).*

**Bài 6 (Vận dụng cao):** Một ô tô khối lượng 1 tấn chạy qua một khúc cua dạng cung tròn bán kính 50m trên mặt đường phẳng ngang. Hệ số ma sát nghỉ cực đại giữa lốp xe và mặt đường là 0.5. Lấy $g=10 \text{ m/s}^2$. Ô tô có thể chạy qua khúc cua này với tốc độ lớn nhất là bao nhiêu (tính bằng km/h) để không bị văng ra khỏi đường?
* **Lời giải:**
  - Khi xe cua, lực ma sát nghỉ đóng vai trò lực hướng tâm: $F_{ht} = F_{msn}$.
  - Để xe không bị trượt (văng), lực hướng tâm cần thiết không được vượt quá lực ma sát nghỉ cực đại:
    $F_{ht} \le F_{msn(max)} \Leftrightarrow m\frac{v^2}{R} \le \mu mg$.
  - $\Rightarrow \frac{v^2}{R} \le \mu g \Rightarrow v \le \sqrt{\mu g R}$.
  - Tính toán: $v \le \sqrt{0.5 \times 10 \times 50} = \sqrt{250} \approx 15.81 \text{ m/s}$.
  - Đổi ra km/h: $15.81 \times 3.6 \approx 56.9 \text{ km/h}$.
  - Tốc độ tối đa là $56.9 \text{ km/h}$.

**Bài 7 (Vận dụng cao):** Một vật khối lượng 0.5kg được buộc vào một sợi dây dài 1m, quay tròn đều trong mặt phẳng thẳng đứng. Lấy $g=10 \text{ m/s}^2$. Vận tốc của vật tại điểm thấp nhất của quỹ đạo là 6 m/s. Tính lực căng dây tại vị trí điểm thấp nhất đó.
* **Lời giải:**
  - Tại điểm thấp nhất, các lực tác dụng: $\vec{P}$ hướng xuống, $\vec{T}$ hướng lên tâm O.
  - Hợp lực hướng vào tâm O (lực hướng tâm): $\vec{F}_{ht} = \vec{T} + \vec{P}$.
  - Chiếu lên chiều dương hướng vào tâm: $F_{ht} = T - P \Leftrightarrow m\frac{v^2}{R} = T - mg$.
  - Suy ra lực căng dây $T = mg + m\frac{v^2}{R}$.
  - $T = 0.5 \times 10 + 0.5 \times \frac{6^2}{1} = 5 + 0.5 \times 36 = 5 + 18 = 23 \text{ N}$.
  - *(Lưu ý: Tại điểm cao nhất thì $F_{ht} = T + P \Rightarrow T = m\frac{v^2}{R} - mg$).*

**Bài 8 (Vận dụng cao):** Người ta thả một quả bóng bàn và một hòn sỏi từ cùng một độ cao lớn xuống đất. Quả nào chạm đất trước? Tại sao lực cản không khí lại khiến 2 vật rơi khác nhau?
* **Lời giải:**
  - Hòn sỏi sẽ chạm đất trước.
  - Giải thích theo định luật II Newton: Vật chịu $P$ (trọng lực, hướng xuống) và $F_c$ (lực cản, hướng lên).
  - Gia tốc rơi thực tế: $ma = P - F_c \Rightarrow a = g - \frac{F_c}{m}$.
  - Quả bóng bàn có khối lượng rất nhỏ so với thể tích (tiết diện hứng gió) của nó, nên tỉ số $\frac{F_c}{m}$ của bóng bàn rất lớn $\Rightarrow$ gia tốc $a$ của bóng bàn bị giảm mạnh đi nhiều so với $g$.
  - Hòn sỏi có khối lượng lớn, đặc, tỉ số $\frac{F_c}{m}$ rất bé $\Rightarrow a \approx g$.
  - Gia tốc của sỏi lớn hơn nên rơi nhanh hơn.

**Bài 9 (Vận dụng cao):** Khảo sát con lắc nón: Một quả nặng 200g treo vào sợi dây dài $l=50\text{cm}$. Cho quả nặng chuyển động tròn đều trong mặt phẳng nằm ngang sao cho dây treo hợp với phương thẳng đứng góc $30^\circ$. Tính lực căng dây và tốc độ quay (m/s) của quả nặng. Lấy $g = 10 \text{ m/s}^2$.
* **Lời giải:**
  - $m = 0.2 \text{ kg}$, $l = 0.5 \text{ m}$. Bán kính quỹ đạo tròn: $R = l \sin 30^\circ = 0.5 \times 0.5 = 0.25 \text{ m}$.
  - Vật chịu tác dụng của Trọng lực $\vec{P}$ (thẳng đứng xuống) và lực căng $\vec{T}$ (chéo lên dọc theo dây).
  - Phân tích $\vec{T}$ thành $T_y$ (thẳng đứng) và $T_x$ (nằm ngang hướng vào tâm).
  - Vật không di chuyển theo phương đứng: $T_y = P \Leftrightarrow T \cos 30^\circ = mg \Rightarrow T = \frac{mg}{\cos 30^\circ} = \frac{0.2 \times 10}{\sqrt{3}/2} = \frac{4}{\sqrt{3}} \approx 2.31 \text{ (N)}$.
  - Thành phần $T_x$ đóng vai trò lực hướng tâm: $T_x = F_{ht} \Leftrightarrow T \sin 30^\circ = m\frac{v^2}{R}$.
  - (Từ 2 phương trình, chia vế theo vế $\Rightarrow \tan 30^\circ = \frac{v^2}{Rg}$).
  - Tính tốc độ $v$: $v = \sqrt{Rg \tan 30^\circ} = \sqrt{0.25 \times 10 \times \frac{1}{\sqrt{3}}} = \sqrt{\frac{2.5}{\sqrt{3}}} \approx 1.2 \text{ (m/s)}$.

**Bài 10 (Nâng cao):** Cho hệ gồm 2 khối gỗ xếp chồng lên nhau, $m_1 = 1\text{kg}$ nằm trên $m_2 = 2\text{kg}$. Cả hệ nằm trên mặt sàn không ma sát. Hệ số ma sát tĩnh và trượt giữa $m_1$ và $m_2$ đều là $\mu = 0.3$. Tác dụng lực kéo ngang $F$ vào vật $m_2$. Lấy $g = 10 \text{ m/s}^2$. Tìm giá trị lớn nhất của $F$ để $m_1$ KHÔNG trượt trên $m_2$ (tức là 2 vật di chuyển cùng nhau).
* **Lời giải:**
  - Lực duy nhất kéo $m_1$ di chuyển tiến về trước cùng $m_2$ chính là **Lực ma sát nghỉ** do $m_2$ tác dụng lên $m_1$.
  - Phương trình cho $m_1$: $F_{msn} = m_1 a$.
  - Để $m_1$ không trượt trên $m_2$, lực ma sát nghỉ không vượt quá giá trị cực đại:
    $F_{msn} \le \mu m_1 g = 0.3 \times 1 \times 10 = 3 \text{ N}$.
  - Suy ra: $m_1 a \le 3 \Rightarrow 1 \times a \le 3 \Rightarrow a \le 3 \text{ m/s}^2$. (Gia tốc chung của cả hệ không được vượt quá 3).
  - Gia tốc của hệ được sinh ra bởi lực F: $a = \frac{F}{m_1 + m_2}$.
  - Để $a \le 3 \Rightarrow \frac{F}{1 + 2} \le 3 \Rightarrow F \le 9 \text{ N}$.
  - Vậy lực F tối đa là 9 N. Nếu F > 9 N, vật $m_2$ sẽ giật mạnh về trước khiến $m_1$ trượt lùi lại và rớt xuống.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_VATLY10_CH3;
}
