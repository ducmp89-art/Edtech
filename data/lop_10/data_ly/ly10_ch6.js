/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU VẬT LÝ 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Chương VI: Chuyển động tròn (Bám sát chương trình chuẩn hiện hành & Nâng cao)
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP TỰ LUẬN + TRẮC NGHIỆM)
   ========================================================================== */

const DATA_LY10_CH6 = {
    "PHY10-CH6-01": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương VI: Chuyển động tròn",
        title: "Bài 31: Động học của chuyển động tròn đều",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương VI", "Bài 31"],
        theory: String.raw`
### 1. Khái niệm Chuyển động tròn đều
- **Quỹ đạo:** Là một đường tròn.
- **Tốc độ:** Vật đi được những cung tròn có chiều dài bằng nhau trong những khoảng thời gian bằng nhau bất kì. Tốc độ chuyển động trên quỹ đạo là không đổi.

### 2. Góc quay và Độ dịch chuyển góc
- Chuyển động tròn được mô tả thông qua góc quay của bán kính nối từ tâm đến vật.
- **Radian (rad):** Đơn vị đo góc chuẩn trong vật lí. Góc ở tâm chắn cung có chiều dài $s$ bằng bán kính $r$ được gọi là $1 \text{ rad}$.
- Mối liên hệ: $360^\circ = 2\pi \text{ rad}$. (Ví dụ: $180^\circ = \pi \text{ rad}, 90^\circ = \frac{\pi}{2} \text{ rad}$).
- **Độ dịch chuyển góc ($\theta$):** 
  $$\theta = \frac{s}{r}$$
  Trong đó $s$ là độ dài cung quay được, $r$ là bán kính quỹ đạo.

### 3. Tốc độ góc ($\omega$)
- **Định nghĩa:** Là đại lượng đặc trưng cho sự quay nhanh hay chậm của bán kính quỹ đạo. Được đo bằng góc quay được trong một đơn vị thời gian.
- **Công thức:**
  $$\omega = \frac{\Delta \theta}{\Delta t}$$
- **Đơn vị:** Radian trên giây ($\text{rad/s}$).

### 4. Chu kì và Tần số
- **Chu kì ($T$):** Là thời gian để vật đi được đúng 1 vòng tròn. 
  Đơn vị: giây (s). 
  $$T = \frac{2\pi}{\omega}$$
- **Tần số ($f$):** Là số vòng vật đi được trong 1 giây. 
  Đơn vị: Hertz (Hz) hoặc vòng/s.
  $$f = \frac{1}{T} = \frac{\omega}{2\pi}$$

### 5. Tốc độ dài ($v$)
- Tốc độ dài (hay tốc độ quỹ đạo) là quãng đường đi được trong một đơn vị thời gian: $v = \frac{s}{t}$.
- **Mối liên hệ giữa tốc độ dài và tốc độ góc:**
  $$v = \omega \cdot r$$
  (Trong đó: $v$ tính bằng $\text{m/s}$, $\omega$ tính bằng $\text{rad/s}$, $r$ tính bằng $\text{m}$).
- Trong chuyển động tròn đều, **tốc độ** (độ lớn vận tốc) không đổi, nhưng **vectơ vận tốc** thay đổi liên tục về hướng (luôn tiếp tuyến với quỹ đạo).
        `,
        tips: String.raw`
- 💡 **Mẹo đổi đơn vị vòng/phút (rpm) sang rad/s:** 
  Rất nhiều bài toán cho tốc độ vòng/phút (vd: động cơ quay $600 \text{ vòng/phút}$).
  Cách đổi: $1 \text{ vòng} = 2\pi \text{ rad}$; $1 \text{ phút} = 60 \text{ s}$.
  $$\Rightarrow \omega = \frac{N \cdot 2\pi}{60} \text{ (rad/s)}$$
- ⚠️ **Sai lầm thường gặp:** Cho rằng vận tốc trong chuyển động tròn đều là không đổi. Thực ra chỉ có ĐỘ LỚN vận tốc (tốc độ) là không đổi, còn VECTƠ vận tốc luôn thay đổi hướng.
- 💡 **Mẹo tính Chu kì các kim đồng hồ:**
  - Kim giây: $T_s = 60 \text{ s}$
  - Kim phút: $T_{ph} = 60 \text{ phút} = 3600 \text{ s}$
  - Kim giờ: $T_h = 12 \text{ giờ} = 43200 \text{ s}$
        `,
        practice: String.raw`
### Dạng 1: Tính các đại lượng $\omega, T, f, v$ cơ bản
**Bài 1 (Cơ bản):** Một cái quạt trần đang quay với tốc độ ổn định là $120 \text{ vòng/phút}$. Chiều dài một cánh quạt tính từ trục quay là $80 \text{ cm}$. 
a) Tính tần số, chu kì và tốc độ góc của quạt.
b) Tính tốc độ dài của một điểm ở đầu mút cánh quạt.
[GIAI]
**Lời giải chi tiết:**
a) Tần số của quạt: $f = \frac{120}{60} = 2 \text{ (Hz)}$ (vòng/s).
   Chu kì của quạt: $T = \frac{1}{f} = \frac{1}{2} = 0.5 \text{ (s)}$.
   Tốc độ góc: $\omega = 2\pi f = 2\pi \cdot 2 = 4\pi \text{ (rad/s)} \approx 12.57 \text{ (rad/s)}$.
b) Bán kính quỹ đạo: $r = 80 \text{ cm} = 0.8 \text{ m}$.
   Tốc độ dài ở đầu mút: 
   $$v = \omega \cdot r = 4\pi \cdot 0.8 = 3.2\pi \approx 10.05 \text{ (m/s)}$$
[/GIAI]

**Bài 2 (Cơ bản):** Bán kính Trái Đất là $R = 6400 \text{ km}$. Trái Đất tự quay quanh trục của nó mất $24 \text{ giờ}$. Tính tốc độ góc và tốc độ dài của một điểm nằm trên đường xích đạo.
[GIAI]
**Lời giải chi tiết:**
- Chu kì tự quay của Trái Đất: $T = 24 \text{ h} = 24 \cdot 3600 = 86400 \text{ (s)}$.
- Tốc độ góc:
  $$\omega = \frac{2\pi}{T} = \frac{2\pi}{86400} = \frac{\pi}{43200} \approx 7.27 \cdot 10^{-5} \text{ (rad/s)}$$
- Tốc độ dài của điểm trên xích đạo ($r = R = 6400 \text{ km} = 6.4 \cdot 10^6 \text{ m}$):
  $$v = \omega \cdot r = \frac{\pi}{43200} \cdot 6.4 \cdot 10^6 \approx 465.4 \text{ (m/s)}$$
[/GIAI]

**Bài 3 (Vận dụng):** Kim giây của một chiếc đồng hồ dài $10 \text{ cm}$, kim phút dài $8 \text{ cm}$. Tính tỉ số tốc độ góc và tỉ số tốc độ dài của đầu mút kim giây so với đầu mút kim phút.
[GIAI]
**Lời giải chi tiết:**
- Chu kì kim giây: $T_s = 60 \text{ s}$. 
- Chu kì kim phút: $T_{ph} = 60 \text{ phút} = 3600 \text{ s}$.
- Tỉ số tốc độ góc:
  $$\frac{\omega_s}{\omega_{ph}} = \frac{T_{ph}}{T_s} = \frac{3600}{60} = 60$$
- Tỉ số tốc độ dài ở đầu mút ($r_s = 10 \text{ cm}, r_{ph} = 8 \text{ cm}$):
  $$\frac{v_s}{v_{ph}} = \frac{\omega_s \cdot r_s}{\omega_{ph} \cdot r_{ph}} = 60 \cdot \frac{10}{8} = 75$$
[/GIAI]

**Bài 4 (Vận dụng):** Một đĩa CD quay đều với tốc độ góc $\omega$. Một điểm A trên mép đĩa có tốc độ dài $1.5 \text{ m/s}$. Một điểm B nằm trên đĩa gần trục quay hơn điểm A một đoạn $2 \text{ cm}$ thì có tốc độ dài là $1.2 \text{ m/s}$. Tính bán kính của đĩa CD và tốc độ góc $\omega$.
[GIAI]
**Lời giải chi tiết:**
- Gọi $r$ là bán kính của đĩa (khoảng cách từ A đến tâm). Bán kính quỹ đạo điểm B là $r - 0.02 \text{ (m)}$.
- Mọi điểm trên cùng một vật rắn quay đều có cùng tốc độ góc $\omega$.
- Ta có hệ: 
  $$\begin{cases} v_A = \omega \cdot r = 1.5 \\ v_B = \omega \cdot (r - 0.02) = 1.2 \end{cases}$$
- Lập tỉ số:
  $$\frac{r}{r - 0.02} = \frac{1.5}{1.2} = 1.25 \Rightarrow r = 1.25r - 0.025 \Rightarrow 0.25r = 0.025 \Rightarrow r = 0.1 \text{ (m)} = 10 \text{ (cm)}$$
- Tốc độ góc của đĩa:
  $$\omega = \frac{v_A}{r} = \frac{1.5}{0.1} = 15 \text{ (rad/s)}$$
[/GIAI]

### Dạng 2: Truyền chuyển động quay
**Bài 5 (Vận dụng cao):** Hai bánh xe A và B nối với nhau bằng một dây cưa-roa (không trượt). Bánh xe A có bán kính $r_A = 10 \text{ cm}$, bánh xe B có bán kính $r_B = 20 \text{ cm}$. Bánh xe A quay với tốc độ $300 \text{ vòng/phút}$. Tính chu kì, tần số và tốc độ góc của bánh xe B.
[GIAI]
**Lời giải chi tiết:**
- Vì 2 bánh xe nối bằng dây cưa-roa, tốc độ dài của các điểm trên vành 2 bánh xe là bằng nhau: $v_A = v_B$.
  $$\Rightarrow \omega_A \cdot r_A = \omega_B \cdot r_B \Rightarrow \omega_B = \omega_A \frac{r_A}{r_B}$$
- Tốc độ góc của A:
  $$\omega_A = \frac{300 \cdot 2\pi}{60} = 10\pi \text{ (rad/s)}$$
- Tốc độ góc của B:
  $$\omega_B = 10\pi \cdot \frac{10}{20} = 5\pi \text{ (rad/s)}$$
- Chu kì và tần số của bánh xe B:
  $$f_B = \frac{\omega_B}{2\pi} = \frac{5\pi}{2\pi} = 2.5 \text{ (Hz)}$$
  $$T_B = \frac{1}{f_B} = \frac{1}{2.5} = 0.4 \text{ (s)}$$
[/GIAI]

### Dạng 3: Chuyển động tương đối, sự lặp lại vị trí
**Bài 6 (Vận dụng cao):** Đúng 12 giờ trưa, kim giờ và kim phút của một chiếc đồng hồ chỉ cùng một vạch. Hỏi sau bao lâu kể từ lúc 12 giờ trưa thì kim giờ và kim phút lại chập nhau lần tiếp theo?
[GIAI]
**Lời giải chi tiết:**
- Chọn mốc tọa độ góc tại số 12, chiều dương là chiều quay của kim đồng hồ.
- Tốc độ góc kim phút: $\omega_1 = \frac{2\pi}{1 \text{ h}}$ (quay 1 vòng mất 1 giờ).
- Tốc độ góc kim giờ: $\omega_2 = \frac{2\pi}{12 \text{ h}}$ (quay 1 vòng mất 12 giờ).
- Để 2 kim gặp nhau, kim phút (quay nhanh hơn) phải quay nhiều hơn kim giờ đúng 1 vòng ($2\pi$ rad):
  $$\Delta \theta_1 - \Delta \theta_2 = 2\pi \Rightarrow \omega_1 t - \omega_2 t = 2\pi$$
  $$\left( \frac{2\pi}{1} - \frac{2\pi}{12} \right) t = 2\pi \Rightarrow 2\pi \cdot \frac{11}{12} \cdot t = 2\pi$$
- Thời gian gặp nhau: 
  $$t = \frac{12}{11} \text{ (h)} = 1 \text{ giờ } 5 \text{ phút } 27.27 \text{ giây}$$
[/GIAI]

**Bài 7 (Nâng cao):** Một vệ tinh nhân tạo chuyển động tròn đều quanh Trái Đất ở độ cao $h$ (so với mặt đất). Biết bán kính Trái Đất $R = 6400 \text{ km}$. Vệ tinh này quay hết một vòng mất $2 \text{ giờ}$. Hỏi đối với một người đứng yên trên xích đạo Trái Đất, người đó sẽ thấy vệ tinh đi qua đỉnh đầu mình bao nhiêu lần trong 1 ngày đêm (24h)? Biết quỹ đạo vệ tinh nằm trong mặt phẳng xích đạo và vệ tinh bay cùng chiều tự quay của Trái Đất.
[GIAI]
**Lời giải chi tiết:**
- Tốc độ góc của vệ tinh: $\omega_v = \frac{2\pi}{T_v} = \frac{2\pi}{2} = \pi \text{ (rad/h)}$.
- Tốc độ góc của Trái Đất: $\omega_T = \frac{2\pi}{T_T} = \frac{2\pi}{24} = \frac{\pi}{12} \text{ (rad/h)}$.
- Do vệ tinh và Trái Đất quay cùng chiều, tốc độ góc tương đối của vệ tinh so với một điểm trên mặt đất là:
  $$\Delta \omega = \omega_v - \omega_T = \pi - \frac{\pi}{12} = \frac{11\pi}{12} \text{ (rad/h)}$$
- Thời gian để vệ tinh trở lại vị trí trên đỉnh đầu người đó (đi được 1 vòng tương đối $2\pi$):
  $$\Delta t = \frac{2\pi}{\Delta \omega} = \frac{2\pi}{\frac{11\pi}{12}} = \frac{24}{11} \text{ (h)}$$
- Số lần vệ tinh đi qua đỉnh đầu trong $24 \text{ h}$:
  $$n = \frac{24}{\Delta t} = \frac{24}{24/11} = 11 \text{ (lần)}$$
[/GIAI]

**Bài 8 (Nâng cao):** Một xe đạp có bánh xe bán kính $R = 30 \text{ cm}$, đĩa xích (bánh răng trước) có bán kính $r_1 = 10 \text{ cm}$, líp (bánh răng sau) có bán kính $r_2 = 4 \text{ cm}$. Người đạp xe làm đĩa xích quay với tốc độ $60 \text{ vòng/phút}$. Giả sử bánh xe không trượt trên đường, tính tốc độ chuyển động của xe đạp.
[GIAI]
**Lời giải chi tiết:**
- Tốc độ góc của đĩa xích: $\omega_1 = \frac{60 \cdot 2\pi}{60} = 2\pi \text{ (rad/s)}$.
- Đĩa và líp nối bằng xích nên tốc độ dài ở vành là như nhau:
  $$v_1 = v_2 \Rightarrow \omega_1 r_1 = \omega_2 r_2 \Rightarrow \omega_2 = \omega_1 \cdot \frac{r_1}{r_2} = 2\pi \cdot \frac{10}{4} = 5\pi \text{ (rad/s)}$$
- Bánh xe sau và líp gắn đồng trục nên chúng có cùng tốc độ góc: $\omega_{bx} = \omega_2 = 5\pi \text{ (rad/s)}$.
- Tốc độ tịnh tiến của xe đạp bằng tốc độ dài của một điểm trên vành bánh xe (do không trượt):
  $$V = \omega_{bx} \cdot R = 5\pi \cdot 0.3 = 1.5\pi \approx 4.71 \text{ (m/s)}$$
- Xe đi với tốc độ khoảng $16.96 \text{ km/h}$.
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Chuyển động của vật nào dưới đây được coi là chuyển động tròn đều?
[A] Chuyển động của đầu van xe đạp khi xe đang hãm phanh.
[*B] Chuyển động của một điểm ở đầu kim phút đồng hồ đang hoạt động bình thường.
[C] Chuyển động của một chiếc xích đu.
[D] Chuyển động của quả lắc đồng hồ.
[/QUIZ]

[QUIZ]
Câu 10: Hai điểm A và B nằm trên cùng một bán kính của một đĩa tròn quay đều. Điểm A nằm cách tâm $10 \text{ cm}$, điểm B cách tâm $20 \text{ cm}$. Nhận định nào sau đây là ĐÚNG?
[A] Tốc độ góc của A lớn bằng một nửa tốc độ góc của B.
[*B] Tốc độ dài của B lớn gấp hai lần tốc độ dài của A.
[C] Chu kì của B lớn gấp đôi chu kì của A.
[D] Tần số quay của A lớn gấp đôi tần số quay của B.
[/QUIZ]
        `
    },

    "PHY10-CH6-02": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương VI: Chuyển động tròn",
        title: "Bài 32: Lực hướng tâm và Gia tốc hướng tâm",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương VI", "Bài 32"],
        theory: String.raw`
### 1. Gia tốc hướng tâm ($\vec{a}_{ht}$)
- **Bản chất:** Dù tốc độ của vật không đổi, nhưng hướng chuyển động liên tục thay đổi, do đó vật chuyển động tròn đều luôn có gia tốc. Gia tốc này đặc trưng cho sự thay đổi về **hướng** của vận tốc.
- **Đặc điểm:** 
  + Phương: Dọc theo bán kính.
  + Chiều: Luôn hướng vào tâm quỹ đạo.
- **Công thức:** 
  $$a_{ht} = \frac{v^2}{r} = \omega^2 r$$
  (Trong đó $v$ là tốc độ dài, $\omega$ là tốc độ góc, $r$ là bán kính).

### 2. Lực hướng tâm ($\vec{F}_{ht}$)
- **Định nghĩa:** Lực (hay hợp lực của các lực) tác dụng vào một vật chuyển động tròn đều và gây ra cho vật gia tốc hướng tâm gọi là lực hướng tâm.
- **Bản chất:** Lực hướng tâm **KHÔNG PHẢI LÀ MỘT LOẠI LỰC MỚI** trong tự nhiên (như lực ma sát, lực hấp dẫn...). Nó chỉ là tên gọi vai trò của bất kì lực nào giữ cho vật chuyển động tròn.
  + Vệ tinh quay quanh Trái Đất: Lực hướng tâm là Lực hấp dẫn.
  + Ô tô ôm cua trên đường ngang: Lực hướng tâm là Lực ma sát nghỉ.
  + Quả nặng buộc vào dây quay tròn: Lực hướng tâm là Lực căng dây.
- **Công thức tính độ lớn:** Dựa vào định luật II Newton $\vec{F} = m\vec{a}$:
  $$F_{ht} = m \cdot a_{ht} = m \frac{v^2}{r} = m \omega^2 r$$

---

### 3. 💎 Chuyên đề Master: Các bài toán ứng dụng thực tế (VDC)
📌 **Bài toán xe qua cầu cong (Cầu vồng lên/ Cầu võng xuống):**
- **Cầu vồng (lồi) tại điểm cao nhất:** Hai lực tác dụng là Trọng lực $\vec{P}$ (hướng tâm) và Phản lực $\vec{N}$ (ly tâm).
  $$P - N = m \frac{v^2}{r} \Rightarrow N = m \left( g - \frac{v^2}{r} \right)$$
  (Áp lực giảm. Khi $v$ đủ lớn để $N=0$, xe sẽ bị nhấc khỏi mặt đường).
- **Cầu võng (lõm) tại điểm thấp nhất:**
  $$N - P = m \frac{v^2}{r} \Rightarrow N = m \left( g + \frac{v^2}{r} \right)$$
  (Áp lực xe lên cầu tăng, tài xế cảm thấy bị ép vào ghế).

📌 **Bài toán xe chạy trên đường vòng có độ nghiêng:**
- Tại các khúc cua gắt, mặt đường thường được làm nghiêng vào trong một góc $\alpha$. Khi đó, thành phần hướng vào tâm của phản lực $N\sin\alpha$ đóng vai trò lực hướng tâm, giúp xe qua cua an toàn với tốc độ lớn hơn mà không bị trượt (thậm chí không cần ma sát).
        `,
        tips: String.raw`
- 💡 **Phương pháp giải bài Động lực học chuyển động tròn:**
  1. Xác định vật, quỹ đạo tròn, tâm quỹ đạo và bán kính $r$.
  2. Phân tích TẤT CẢ các lực tác dụng lên vật.
  3. Áp dụng ĐL II Newton chiếu lên **phương bán kính hướng vào tâm**:
     Tổng các lực hướng vào tâm - Tổng các lực hướng ra ngoài = $m \frac{v^2}{r}$.
- ⚠️ **Lưu ý:** Lực li tâm (lực đẩy văng ra ngoài) chỉ tồn tại nếu ta đứng trong hệ quy chiếu quay cùng với vật (HQC phi quán tính). Trong khuôn khổ THPT, ta luôn giải bài trong hệ quy chiếu gắn với mặt đất (đứng yên), nên CHỈ có LỰC HƯỚNG TÂM. Nghiêm cấm vẽ "Lực li tâm" vào sơ đồ lực khi làm bài tự luận!
        `,
        practice: String.raw`
### Dạng 1: Tính toán cơ bản Lực và Gia tốc hướng tâm
**Bài 1 (Cơ bản):** Một vật khối lượng $200 \text{ g}$ được buộc vào đầu một sợi dây dài $50 \text{ cm}$ rồi quay tròn đều trên mặt phẳng ngang. Vật quay với tốc độ $2 \text{ vòng/giây}$. Tính gia tốc hướng tâm và lực căng của sợi dây. (Bỏ qua ma sát của vật với mặt bàn).
[GIAI]
**Lời giải chi tiết:**
- Đổi đơn vị: $m = 0.2 \text{ kg}$, $r = 0.5 \text{ m}$.
- Tần số quay $f = 2 \text{ Hz} \Rightarrow \omega = 2\pi f = 4\pi \text{ (rad/s)}$.
- Gia tốc hướng tâm:
  $$a_{ht} = \omega^2 r = (4\pi)^2 \cdot 0.5 = 16\pi^2 \cdot 0.5 = 8\pi^2 \approx 78.96 \text{ (m/s}^2\text{)}$$
- Lực căng dây đóng vai trò là lực hướng tâm:
  $$T = F_{ht} = m \cdot a_{ht} = 0.2 \cdot 8\pi^2 = 1.6\pi^2 \approx 15.79 \text{ (N)}$$
[/GIAI]

**Bài 2 (Cơ bản):** Một ô tô khối lượng $1000 \text{ kg}$ chuyển động tròn đều quanh một đường đua hình tròn bán kính $50 \text{ m}$ với tốc độ $36 \text{ km/h}$. Tính lực ma sát nghỉ cực đại giữa bánh xe và mặt đường để xe không bị trượt.
[GIAI]
**Lời giải chi tiết:**
- Đổi tốc độ $v = 36 \text{ km/h} = 10 \text{ m/s}$.
- Lực ma sát nghỉ đóng vai trò lực hướng tâm giữ cho xe khỏi bị văng ra khỏi đường đua.
  $$F_{ms} = F_{ht} = m \frac{v^2}{r} = 1000 \cdot \frac{10^2}{50} = 1000 \cdot \frac{100}{50} = 2000 \text{ (N)}$$
- Vậy lực ma sát phải đạt ít nhất $2000 \text{ N}$ để xe an toàn vào cua.
[/GIAI]

### Dạng 2: Bài toán phương thẳng đứng (Cầu cong, Dây quay)
**Bài 3 (Vận dụng):** Một ô tô khối lượng $1.5 \text{ tấn}$ chạy qua một chiếc cầu vồng lồi (có dạng cung tròn) với bán kính cong là $100 \text{ m}$. Tốc độ của ô tô là $54 \text{ km/h}$. Lấy $g = 10 \text{ m/s}^2$. 
a) Tính áp lực của ô tô lên mặt cầu tại điểm cao nhất.
b) Xe phải chạy với tốc độ lớn nhất bằng bao nhiêu để không bị bay khỏi mặt cầu tại điểm cao nhất?
[GIAI]
**Lời giải chi tiết:**
- Đổi đơn vị: $m = 1500 \text{ kg}$, $v = 54 \text{ km/h} = 15 \text{ m/s}$, $r = 100 \text{ m}$.
a) Tại điểm cao nhất, áp dụng phương trình Động lực học hướng vào tâm:
   $$P - N = m \frac{v^2}{r} \Rightarrow N = P - m \frac{v^2}{r} = m \left( g - \frac{v^2}{r} \right)$$
   $$N = 1500 \left( 10 - \frac{15^2}{100} \right) = 1500 (10 - 2.25) = 1500 \cdot 7.75 = 11625 \text{ (N)}$$
   Áp lực của xe lên mặt cầu là $11625 \text{ N}$ (giảm so với trọng lượng $15000 \text{ N}$).
b) Để xe không bị bay khỏi cầu, áp lực $N \ge 0$. Khi xe ở giới hạn bay khỏi cầu thì $N = 0$.
   $$m \left( g - \frac{v_{\max}^2}{r} \right) = 0 \Rightarrow g = \frac{v_{\max}^2}{r} \Rightarrow v_{\max} = \sqrt{gr}$$
   $$v_{\max} = \sqrt{10 \cdot 100} = \sqrt{1000} \approx 31.62 \text{ (m/s)} \approx 113.8 \text{ (km/h)}$$
[/GIAI]

**Bài 4 (Vận dụng cao):** Một xô nước buộc vào một sợi dây dài $1 \text{ m}$ và được quay tròn trong mặt phẳng thẳng đứng. Lấy $g = 10 \text{ m/s}^2$. Tính tốc độ tối thiểu của xô nước tại điểm cao nhất của quỹ đạo để nước không bị đổ ra ngoài.
[GIAI]
**Lời giải chi tiết:**
- Tại điểm cao nhất, cả trọng lực $P$ và lực căng dây $T$ đều hướng thẳng đứng xuống dưới (hướng vào tâm quỹ đạo).
- Phương trình ĐL II Newton: 
  $$P + T = m \frac{v^2}{r}$$
- Để nước không bị đổ, xô phải tác dụng một lực ép lên nước, tức là nước phải bị ép lên đáy xô, hoặc tối thiểu ở trạng thái lơ lửng $N \ge 0$. Tương đương với việc dây luôn căng $T \ge 0$.
- Khi ở giới hạn tối thiểu (nước sắp đổ / dây sắp chùng), ta có $T = 0$.
  $$mg + 0 = m \frac{v_{\min}^2}{r} \Rightarrow v_{\min} = \sqrt{gr}$$
- Thay số:
  $$v_{\min} = \sqrt{10 \cdot 1} = \sqrt{10} \approx 3.16 \text{ (m/s)}$$
- Vậy phải quay với tốc độ ít nhất $3.16 \text{ m/s}$ tại đỉnh thì nước không rớt.
[/GIAI]

### Dạng 3: Con lắc nón, Lực li tâm gián tiếp
**Bài 5 (Vận dụng cao):** Một viên bi nhỏ khối lượng $m$ được treo vào đầu một sợi dây dài $l = 40 \text{ cm}$. Người ta cho viên bi quay tròn đều trong mặt phẳng nằm ngang (con lắc nón). Khi đó sợi dây hợp với phương thẳng đứng một góc $\alpha = 30^\circ$. Lấy $g = 10 \text{ m/s}^2$. Tính tốc độ quay $\omega$ và tốc độ dài $v$ của viên bi.
[GIAI]
**Lời giải chi tiết:**
- Quỹ đạo của bi là đường tròn nằm ngang. Bán kính quỹ đạo: $r = l \sin \alpha = 0.4 \cdot \sin 30^\circ = 0.2 \text{ (m)}$.
- Các lực tác dụng lên bi: Trọng lực $\vec{P}$ (xuống), Lực căng dây $\vec{T}$ (dọc theo dây lên).
- Phân tích $\vec{T}$ thành 2 thành phần:
  + Phương thẳng đứng (cân bằng): $T \cos \alpha = mg \quad (1)$.
  + Phương ngang (hướng tâm): $T \sin \alpha = m \omega^2 r = F_{ht} \quad (2)$.
- Chia vế (2) cho (1):
  $$\tan \alpha = \frac{m \omega^2 r}{mg} = \frac{\omega^2 r}{g}$$
- Thay $r = l \sin \alpha \Rightarrow \tan \alpha = \frac{\omega^2 l \sin \alpha}{g} \Rightarrow \frac{\sin \alpha}{\cos \alpha} = \frac{\omega^2 l \sin \alpha}{g}$.
- Đơn giản hai vế ta được:
  $$\omega^2 = \frac{g}{l \cos \alpha} \Rightarrow \omega = \sqrt{\frac{g}{l \cos \alpha}}$$
  $$\omega = \sqrt{\frac{10}{0.4 \cdot \cos 30^\circ}} = \sqrt{\frac{10}{0.4 \cdot \frac{\sqrt{3}}{2}}} = \sqrt{\frac{10}{0.346}} \approx 5.37 \text{ (rad/s)}$$
- Tốc độ dài của bi:
  $$v = \omega \cdot r = 5.37 \cdot 0.2 \approx 1.07 \text{ (m/s)}$$
[/GIAI]

**Bài 6 (Nâng cao):** Một chiếc xe chạy ôm cua trên một con đường vòng có bán kính $r = 150 \text{ m}$. Mặt đường được thiết kế nghiêng một góc $\alpha = 10^\circ$ so với phương ngang. Biết $g = 9.8 \text{ m/s}^2$. Bỏ qua ma sát. Tính tốc độ thích hợp của xe để qua khúc cua an toàn nhất (không có xu hướng trượt).
[GIAI]
**Lời giải chi tiết:**
- Vì bỏ qua ma sát, xe chỉ chịu tác dụng của 2 lực: Trọng lực $\vec{P}$ và Phản lực $\vec{N}$ (vuông góc với mặt đường nghiêng).
- Hợp lực của $\vec{P}$ và $\vec{N}$ phải nằm ngang và hướng vào tâm quỹ đạo để tạo thành lực hướng tâm.
- Vẽ tam giác lực, ta thấy:
  $$F_{ht} = P \tan \alpha = mg \tan \alpha$$
- Mà $F_{ht} = m \frac{v^2}{r}$. Nên:
  $$m \frac{v^2}{r} = mg \tan \alpha \Rightarrow v = \sqrt{gr \tan \alpha}$$
- Thay số:
  $$v = \sqrt{9.8 \cdot 150 \cdot \tan 10^\circ} \approx \sqrt{1470 \cdot 0.1763} \approx \sqrt{259.2} \approx 16.1 \text{ (m/s)}$$
- Chuyển sang km/h: $16.1 \cdot 3.6 \approx 58 \text{ km/h}$.
[/GIAI]

**Bài 7 (Nâng cao):** Một cái bàn quay nằm ngang quay đều với tốc độ góc $3 \text{ rad/s}$. Đặt một đồng xu nhỏ trên mặt bàn cách trục quay $20 \text{ cm}$. Hệ số ma sát nghỉ giữa đồng xu và mặt bàn tối thiểu bằng bao nhiêu để đồng xu không bị văng ra khỏi bàn? Lấy $g = 10 \text{ m/s}^2$.
[GIAI]
**Lời giải chi tiết:**
- Lực ma sát nghỉ đóng vai trò là lực hướng tâm giữ đồng xu lại.
  $$F_{msn} = F_{ht} = m \omega^2 r$$
- Lực ma sát nghỉ không vượt quá lực ma sát nghỉ cực đại: 
  $$F_{msn} \le F_{ms, \max} = \mu mg$$
- Điều kiện để đồng xu không bị văng:
  $$m \omega^2 r \le \mu mg \Rightarrow \mu \ge \frac{\omega^2 r}{g}$$
- Thay số ($r = 0.2 \text{ m}$):
  $$\mu \ge \frac{3^2 \cdot 0.2}{10} = \frac{1.8}{10} = 0.18$$
- Hệ số ma sát nghỉ tối thiểu phải là $0.18$.
[/GIAI]

**Bài 8 (Nâng cao):** Trong một khu vui chơi có lồng quay hình trụ thẳng đứng bán kính $R = 3 \text{ m}$. Người chơi đứng dựa lưng vào vách trong của trụ. Khi trụ quay quanh trục thẳng đứng tới một tốc độ $\omega$ nào đó, sàn lồng tụt xuống nhưng người vẫn bị "dán" chặt vào vách, không bị rơi. Hệ số ma sát trượt giữa người và vách là $\mu = 0.4$. Lấy $g = 10 \text{ m/s}^2$. Tính tốc độ quay $\omega$ nhỏ nhất của trụ.
[GIAI]
**Lời giải chi tiết:**
- Các lực tác dụng lên người: Trọng lực $\vec{P}$ (xuống), Phản lực của vách $\vec{N}$ (vuông góc với vách, hướng vào tâm trụ), và Lực ma sát $\vec{F}_{ms}$ (hướng thẳng đứng lên trên).
- Phương thẳng đứng (người không bị rơi): 
  $$F_{ms} \ge P \Rightarrow \mu N \ge mg$$
- Phương ngang (hướng tâm): Phản lực $N$ đóng vai trò lực hướng tâm.
  $$N = F_{ht} = m \omega^2 R$$
- Thế vào điều kiện trên:
  $$\mu (m \omega^2 R) \ge mg \Rightarrow \omega^2 \ge \frac{g}{\mu R}$$
  $$\omega \ge \sqrt{\frac{10}{0.4 \cdot 3}} = \sqrt{\frac{10}{1.2}} = \sqrt{8.33} \approx 2.89 \text{ (rad/s)}$$
- Vậy lồng phải quay với tốc độ góc tối thiểu là $2.89 \text{ rad/s}$.
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Phát biểu nào sau đây là MỘT ĐỊNH NGHĨA CHUẨN XÁC VỀ LỰC HƯỚNG TÂM?
[A] Lực hướng tâm là một loại lực hấp dẫn tác dụng lên vật chuyển động tròn.
[B] Lực hướng tâm là lực ly tâm hướng vào tâm quỹ đạo.
[*C] Lực hướng tâm không phải là một lực mới, nó là hợp lực của các lực tác dụng lên vật giữ cho vật chuyển động tròn đều.
[D] Lực hướng tâm là lực sinh ra khi vật có xu hướng chuyển động thẳng đều li tâm.
[/QUIZ]

[QUIZ]
Câu 10: Biểu thức nào sau đây tính Gia tốc hướng tâm là ĐÚNG?
[A] $a = v \cdot r^2$
[B] $a = \frac{v}{\omega^2}$
[*C] $a = \omega^2 \cdot r$
[D] $a = \frac{\omega}{r^2}$
[/QUIZ]
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DB_PHY_10_CH6;
}