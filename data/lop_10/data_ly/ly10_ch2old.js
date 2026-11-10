/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU VẬT LÝ 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Chẩn hóa theo chương trình GDPT Mới (KNTT / CTST / CD)
   Chương II: Động học
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
   ========================================================================== */

const DATA_LY10_CH2 = {
    "PHY10-CH2-01": {
         grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương II: Động học",
        title: "Bài 4: Độ dịch chuyển và quãng đường đi được",
        theory: String.raw`
### 1. Vị trí, Hệ quy chiếu & Các đại lượng cơ bản
- **Hệ quy chiếu:** Gồm vật làm mốc, hệ tọa độ (trục Ox, Oxy), mốc thời gian ($t=0$) và đồng hồ.
- **Quãng đường ($s$):** Là độ dài quỹ đạo chuyển động. Đại lượng vô hướng, luôn luôn $s \ge 0$.
- **Độ dịch chuyển ($\vec{d}$):** Là vectơ nối từ vị trí đầu đến vị trí cuối. 
  + Độ lớn của độ dịch chuyển là $|\vec{d}|$.
  + Trên trục tọa độ Ox: Độ dịch chuyển $\Delta x = d = x_2 - x_1$. Có thể dương, âm hoặc bằng 0.
  + **Lưu ý:** Chỉ khi vật chuyển động thẳng, KHÔNG đổi chiều thì Quãng đường = Độ lớn độ dịch chuyển ($s = |\vec{d}|$).

### 2. Tốc độ và Vận tốc
- **Tốc độ trung bình:** $v_{tb} = \frac{s}{\Delta t}$ (Phản ánh mức độ nhanh chậm dọc theo quỹ đạo).
- **Vận tốc trung bình:** $\vec{v} = \frac{\Delta \vec{d}}{\Delta t}$ (Phản ánh mức độ nhanh chậm và HƯỚNG của sự thay đổi vị trí).
- **Tốc độ tức thời / Vận tốc tức thời:** Là tốc độ / vận tốc xét trong một khoảng thời gian $\Delta t$ rất nhỏ (ngay tại 1 thời điểm). Tốc kế trên xe máy chỉ Tốc độ tức thời.

### 3. Đồ thị Độ dịch chuyển - Thời gian ($d-t$)
- Dùng để mô tả chuyển động của vật trên một đường thẳng. Trục tung là độ dịch chuyển $d$, trục hoành là thời gian $t$.
- **Độ dốc của đồ thị:** Chuyển động thẳng đều có đồ thị $d-t$ là một đường thẳng. Vận tốc chính là độ dốc (hệ số góc) của đường thẳng đó: $v = \frac{\Delta d}{\Delta t}$.
- Đồ thị dốc lên $\Rightarrow v > 0$ (Vật đi theo chiều dương). Đồ thị dốc xuống $\Rightarrow v < 0$ (Vật đi theo chiều âm). Đồ thị nằm ngang $\Rightarrow v = 0$ (Vật đứng yên).

---

### 4. 💎 Chuyên đề Master: Công thức cộng vận tốc & Bài toán 2 vật (VDC)
📌 **Công thức cộng vận tốc (Biến đổi Galile):**
- $\vec{v}_{13} = \vec{v}_{12} + \vec{v}_{23}$.
  + (1): Vật chuyển động; (2): Hệ quy chiếu chuyển động; (3): Hệ quy chiếu đứng yên.
  + $\vec{v}_{13}$: Vận tốc tuyệt đối (vật so với bờ/đất).
  + $\vec{v}_{12}$: Vận tốc tương đối (vật so với xe/nước).
  + $\vec{v}_{23}$: Vận tốc kéo theo (xe/nước so với bờ/đất).
- **Các trường hợp đặc biệt:**
  + **Cùng chiều:** $v_{13} = v_{12} + v_{23}$.
  + **Ngược chiều:** $v_{13} = |v_{12} - v_{23}|$.
  + **Vuông góc:** $v_{13} = \sqrt{v_{12}^2 + v_{23}^2}$.

📌 **Kỹ thuật Khoảng cách Cực tiểu (Bài toán 2 vật chuyển động vuông góc):**
- Khi 2 tàu chuyển động trên 2 quỹ đạo vuông góc (hướng về ngã tư), để tìm khoảng cách nhỏ nhất, ta đưa về bài toán Động học Tương đối. Xét tàu A đứng yên, tìm vectơ vận tốc tương đối của B so với A ($\vec{v}_{BA} = \vec{v}_B - \vec{v}_A$). Kẻ đường cao từ A xuống quỹ đạo tương đối của B chính là $d_{min}$.
        `,
        tips: `
- ⚠️ **Bẫy Dấu & Hướng:** Khi áp dụng phương trình $x = x_0 + vt$ hoặc tính độ dịch chuyển, ĐỌC KỸ chiều dương đề bài cho. Vật chạy ngược chiều dương thì vận tốc $v$ phải MANG DẤU ÂM.
- 💡 **Mẹo đổi đơn vị:** $1 \text{ m/s} = 3.6 \text{ km/h}$. Nhớ nhanh: $10 \text{ m/s} = 36 \text{ km/h}$; $15 \text{ m/s} = 54 \text{ km/h}$; $20 \text{ m/s} = 72 \text{ km/h}$.
- ⚠️ **Phân biệt Tốc độ và Vận tốc:** Tốc độ không bao giờ âm. Vận tốc có thể âm. Khi hỏi "Tìm Vận Tốc", bạn phải trả lời cả Độ Lớn và Dấu (hoặc Hướng).
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Một con kiến bò từ điểm A đến điểm B cách nhau 3m, sau đó lại bò ngược từ B về điểm C cách B 1m (C nằm giữa A và B). Tính quãng đường và độ dịch chuyển của con kiến. Chọn chiều dương là từ A đến B.
* **Lời giải:**
  - Quãng đường: $s = AB + BC = 3 + 1 = 4$ (m).
  - Độ dịch chuyển: Điểm đầu là A, điểm cuối là C. $\vec{d} = \vec{AC}$. 
  - Độ lớn $d = AB - BC = 3 - 1 = 2$ (m). Vì C nằm trên nửa trục dương Ox so với A nên $d = +2$ (m).

**Bài 2 (Cơ bản):** Một ôtô chạy từ A đến B với tốc độ 60 km/h trong 2 giờ, sau đó từ B về A với tốc độ 40 km/h. Tính tốc độ trung bình của ôtô trên cả quãng đường khứ hồi.
* **Lời giải:**
  - Độ dài quãng đường $AB = v_1 \cdot t_1 = 60 \times 2 = 120$ (km).
  - Thời gian đi từ B về A là: $t_2 = \frac{AB}{v_2} = \frac{120}{40} = 3$ (giờ).
  - Tổng quãng đường $s = 120 + 120 = 240$ (km).
  - Tổng thời gian $t = 2 + 3 = 5$ (giờ).
  - Tốc độ trung bình $v_{tb} = \frac{s}{t} = \frac{240}{5} = 48$ (km/h).
  *(Lưu ý: Không được lấy trung bình cộng $(60+40)/2 = 50$, đây là lỗi sai cực kỳ phổ biến).*

**Bài 3 (Vận dụng):** Ở bài tập 2, hãy tính vận tốc trung bình của ôtô trong cả chuyến đi khứ hồi.
* **Lời giải:**
  - Vận tốc trung bình $v = \frac{\Delta d}{\Delta t}$.
  - Xe đi từ A rồi lại về đúng điểm A. Do đó, điểm đầu và điểm cuối trùng nhau.
  - Độ dịch chuyển $\Delta d = 0$.
  - Vận tốc trung bình $v = \frac{0}{5} = 0$ (km/h).

**Bài 4 (Vận dụng):** Hai bến sông A và B cách nhau 36 km. Một ca nô xuôi dòng từ A đến B mất 2 giờ và ngược dòng từ B về A mất 3 giờ. Tính vận tốc của ca nô so với mặt nước yên lặng và vận tốc của dòng nước.
* **Lời giải:**
  - Vận tốc xuôi dòng: $v_x = \frac{36}{2} = 18$ (km/h).
  - Vận tốc ngược dòng: $v_n = \frac{36}{3} = 12$ (km/h).
  - Gọi $v_c$ là vận tốc ca nô so với nước, $v_n$ là vận tốc nước so với bờ.
  - Ta có hệ: $\begin{cases} v_c + v_{nước} = 18 \\ v_c - v_{nước} = 12 \end{cases}$
  - Cộng vế theo vế: $2v_c = 30 \Rightarrow v_c = 15$ (km/h).
  - Vận tốc dòng nước: $v_{nước} = 18 - 15 = 3$ (km/h).

**Bài 5 (Vận dụng):** Một người lái đò bơi chèo ngang một con sông rộng 400m với vận tốc so với nước là 3 m/s. Vận tốc dòng nước chảy là 4 m/s. Do nước chảy, thuyền không đến đúng bờ đối diện mà bị trôi dạt. Tính thời gian qua sông và độ dời của thuyền.
* **Lời giải:**
  - Vectơ vận tốc tuyệt đối $\vec{v}_{t/b} = \vec{v}_{t/n} + \vec{v}_{n/b}$. Vì $\vec{v}_{t/n} \perp \vec{v}_{n/b}$ (lái chèo vuông góc bờ).
  - Vận tốc tuyệt đối: $v = \sqrt{3^2 + 4^2} = 5$ (m/s).
  - Thời gian qua sông chỉ phụ thuộc vào vận tốc hướng vuông góc bờ (3 m/s):
    $t = \frac{\text{Độ rộng sông}}{v_{t/n}} = \frac{400}{3} \approx 133.3$ (s).
  - Độ dời của thuyền (Quãng đường thực tế đi được dọc theo hướng chéo):
    $d = v_{t/b} \times t = 5 \times \frac{400}{3} = \frac{2000}{3} \approx 666.7$ (m).

**Bài 6 (Vận dụng cao):** Lúc 7h sáng, hai xe máy xuất phát cùng lúc từ A và B cách nhau 100km, đi ngược chiều nhau. Xe từ A đi với tốc độ 40 km/h, xe từ B đi với tốc độ 60 km/h. Viết phương trình độ dịch chuyển của 2 xe và tìm thời điểm, vị trí 2 xe gặp nhau.
* **Lời giải:**
  - Chọn trục Ox trùng với đường thẳng AB, gốc O tại A, chiều dương từ A đến B. Mốc thời gian $t=0$ lúc 7h.
  - PT xe A: $d_A(t) = d_{0A} + v_A t = 0 + 40t = 40t$.
  - PT xe B: Xe B đi ngược chiều dương nên $v_B = -60$ km/h. Vị trí đầu $d_{0B} = 100$.
    $d_B(t) = 100 - 60t$.
  - Khi hai xe gặp nhau: $d_A(t) = d_B(t) \Leftrightarrow 40t = 100 - 60t \Leftrightarrow 100t = 100 \Rightarrow t = 1$ (giờ).
  - Thời điểm gặp nhau: $7h + 1h = 8h$ sáng.
  - Vị trí gặp nhau: Cách A $d = 40 \times 1 = 40$ (km).

**Bài 7 (Vận dụng cao):** Một hành khách đang ngồi trên một đoàn tàu chuyển động đều với vận tốc 54 km/h thì nhìn thấy một đoàn tàu chở hàng dài 150m chạy song song ngược chiều vượt qua mắt mình trong thời gian 5 giây. Tính vận tốc của đoàn tàu chở hàng.
* **Lời giải:**
  - Đổi $54 \text{ km/h} = 15 \text{ m/s}$. Gọi $v_1$ là vận tốc tàu khách (15 m/s), $v_2$ là vận tốc tàu hàng.
  - Xét hệ quy chiếu gắn với tàu khách (tàu khách đứng yên). 
  - Vì 2 tàu chạy ngược chiều, vận tốc tương đối của tàu hàng so với người quan sát là: $v_{tương đối} = v_1 + v_2$.
  - Tàu hàng vượt qua trong 5s, nghĩa là nó đi được quãng đường bằng chính chiều dài của nó (150m) so với người.
  - $v_{tương đối} = \frac{150}{5} = 30 \text{ m/s}$.
  - $15 + v_2 = 30 \Rightarrow v_2 = 15 \text{ m/s}$. (tức là $54 \text{ km/h}$).

**Bài 8 (Vận dụng cao):** Đồ thị độ dịch chuyển - thời gian của một chất điểm gồm 2 đoạn. Đoạn 1 từ gốc O(0,0) đến điểm A(2h, 40km). Đoạn 2 từ A đến điểm B(5h, 40km). Đoạn 3 từ B đến C(6h, 0). Tính vận tốc trên từng đoạn và tốc độ trung bình toàn hành trình.
* **Lời giải:**
  - Vận tốc đoạn 1: Độ dốc $v_1 = \frac{40 - 0}{2 - 0} = 20$ (km/h).
  - Vận tốc đoạn 2: Đồ thị nằm ngang, độ dốc $v_2 = 0$. Vật dừng lại nghỉ 3 tiếng.
  - Vận tốc đoạn 3: Độ dốc $v_3 = \frac{0 - 40}{6 - 5} = -40$ (km/h). (Vật quay ngược về điểm xuất phát).
  - Tổng quãng đường $s = 40 \text{ (đi)} + 40 \text{ (về)} = 80$ km. Tổng thời gian $t = 6$h.
  - Tốc độ trung bình: $v_{tb} = \frac{80}{6} = 13.33$ (km/h).

**Bài 9 (Vận dụng cao):** Hai tàu thủy chạy dọc theo 2 đường thẳng vuông góc với nhau với vận tốc $v_1 = 30 \text{ km/h}$ và $v_2 = 40 \text{ km/h}$ hướng về ngã tư O. Lúc đầu tàu 1 cách O 50km, tàu 2 cách O 60km. Tìm khoảng cách ngắn nhất giữa hai tàu.
* **Lời giải:**
  - Gọi 2 tàu là A và B. Gắn hệ quy chiếu tại O, trục Ox chứa tàu A, Oy chứa tàu B.
  - Tọa độ tàu A: $x_A(t) = -50 + 30t$; $y_A(t) = 0$.
  - Tọa độ tàu B: $x_B(t) = 0$; $y_B(t) = -60 + 40t$.
  - Khoảng cách bình phương giữa 2 tàu:
    $d^2 = (-50 + 30t)^2 + (-60 + 40t)^2$
    $= 2500 - 3000t + 900t^2 + 3600 - 4800t + 1600t^2$
    $= 2500t^2 - 7800t + 6100$.
  - Đây là tam thức bậc hai theo t. Đạt cực tiểu tại đỉnh Parabol:
    $t = -\frac{b}{2a} = \frac{7800}{2 \times 2500} = 1.56$ (giờ).
  - Thay $t = 1.56$ vào tính $d^2_{min} = 2500(1.56)^2 - 7800(1.56) + 6100 = 16$.
  - Khoảng cách ngắn nhất $d_{min} = \sqrt{16} = 4$ (km).

**Bài 10 (Nâng cao):** Một máy bay đang bay theo hướng Bắc với vận tốc 150 m/s. Một luồng gió thổi từ hướng Tây sang Đông với vận tốc 50 m/s. Một phi công cần bay đến một sân bay cách điểm hiện tại 200km theo đúng hướng Bắc. Hỏi máy bay phải bẻ lái lệch một góc bao nhiêu độ so với hướng Bắc để giữ đúng đường bay thẳng, và thời gian bay là bao nhiêu?
* **Lời giải:**
  - $\vec{v}_{maybay/đất} = \vec{v}_{maybay/gió} + \vec{v}_{gió/đất}$.
  - Hướng quỹ đạo yêu cầu ($\vec{v}_{maybay/đất}$) là hướng Bắc. 
  - Gió thổi sang Đông (vuông góc hướng Bắc).
  - Để tổng hợp ra hướng Bắc, máy bay phải chĩa đầu về hướng Tây Bắc.
  - Ta có tam giác vuông vận tốc: cạnh huyền là $v_{mb/gió} = 150$, cạnh góc vuông $v_{gió} = 50$.
  - Góc lệch $\alpha$: $\sin \alpha = \frac{v_{gió}}{v_{mb/gió}} = \frac{50}{150} = \frac{1}{3} \Rightarrow \alpha \approx 19.47^\circ$.
  - Vận tốc thực tế của máy bay so với mặt đất (cạnh góc vuông còn lại):
    $v_{thực} = \sqrt{150^2 - 50^2} = \sqrt{20000} \approx 141.4$ (m/s).
  - Thời gian bay $t = \frac{s}{v_{thực}} = \frac{200000}{141.4} \approx 1414$ (s) $\approx 23.57$ (phút).
        `
    },
    
    "PHY10-CH2-02": {
        grade: "10", subject: "PHYSICS", subjectName: "Vật lý 10",
        chapter: "Chương II: Động học",
        title: "Bài 2: Chuyển động biến đổi, Rơi tự do & Ném xiên",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương II", "Bài 2"],
        theory: `
### 1. Gia tốc & Chuyển động thẳng biến đổi đều (CĐT BĐĐ)
- **Gia tốc ($\vec{a}$):** Là đại lượng đặc trưng cho tốc độ thay đổi của vận tốc. $a = \frac{\Delta v}{\Delta t}$. Đơn vị: $m/s^2$.
- **CĐT nhanh dần đều (NDĐ):** Độ lớn vận tốc tăng đều. Vectơ $\vec{a}$ cùng chiều $\vec{v}$ $\Rightarrow a \cdot v > 0$.
- **CĐT chậm dần đều (CDĐ):** Độ lớn vận tốc giảm đều. Vectơ $\vec{a}$ ngược chiều $\vec{v}$ $\Rightarrow a \cdot v < 0$.
- **4 Phương trình cốt lõi:**
  1. Phương trình vận tốc: $v = v_0 + at$.
  2. Phương trình độ dịch chuyển: $d = v_0 t + \frac{1}{2}at^2$.
  3. Phương trình tọa độ: $x = x_0 + v_0 t + \frac{1}{2}at^2$.
  4. Hệ thức độc lập thời gian: $v^2 - v_0^2 = 2ad$.

### 2. Sự rơi tự do
- Là sự rơi chỉ dưới tác dụng của trọng lực (bỏ qua lực cản không khí).
- Bản chất là CĐT Nhanh dần đều với vận tốc ban đầu $v_0 = 0$, gia tốc $a = g \approx 9.8 \text{ hoặc } 10 \text{ } m/s^2$.
- Các công thức rút gọn: $v = gt$; $h = \frac{1}{2}gt^2$; $v^2 = 2gh$; $t_{rơi} = \sqrt{\frac{2h}{g}}$.

### 3. Chuyển động Ném ngang và Ném xiên
- Được phân tích thành 2 chuyển động độc lập trên 2 trục tọa độ (Gia tốc $\vec{g}$ chỉ hướng xuống theo trục Oy).
- **Trên trục Ox:** Vật không chịu lực tác dụng $\Rightarrow$ Chuyển động thẳng đều. ($a_x = 0; v_x = v_{0x} = v_0 \cos \alpha$).
- **Trên trục Oy:** Vật chịu trọng lực $\Rightarrow$ Chuyển động biến đổi đều. ($a_y = -g; v_{0y} = v_0 \sin \alpha$).
- Quỹ đạo của vật ném ngang và ném xiên luôn là đường Parabol.

---

### 4. 💎 Chuyên đề Master: Đồ thị $v-t$ và Cực trị Ném xiên (VDC)
📌 **Phân tích Đồ thị Vận tốc - Thời gian ($v-t$):**
- **Độ dốc của đồ thị $v-t$:** Chính là Gia Tốc $a$.
- **Diện tích dưới đồ thị $v-t$:** Bằng CHÍNH XÁC Độ dịch chuyển ($\Delta d$). (Nếu phần đồ thị nằm dưới trục Ox thì diện tích mang giá trị âm). Kỹ thuật này giúp giải BÀI TẬP VDC mà không cần nhớ một đống công thức phức tạp.

📌 **Tối ưu hóa bài toán Ném xiên:**
- **Phương trình quỹ đạo:** $y = \left(\frac{-g}{2v_0^2 \cos^2 \alpha}\right) x^2 + x \tan \alpha$.
- **Thời gian bay lên cực đại:** $t = \frac{v_0 \sin \alpha}{g}$. Tổng thời gian bay: $t_{total} = \frac{2v_0 \sin \alpha}{g}$.
- **Tầm cao cực đại:** $H_{max} = \frac{v_0^2 \sin^2 \alpha}{2g}$.
- **Tầm xa (Tầm ném xa):** $L = \frac{v_0^2 \sin 2\alpha}{g}$. 
- **Lưu ý VDC:** Tầm xa L đạt giá trị cực đại (L_{max}) khi và chỉ khi $\sin 2\alpha = 1 \Leftrightarrow \alpha = 45^\circ$. Góc ném $45^\circ$ là góc ném cho tầm xa lớn nhất!
        `,
        tips: `
- ⚠️ **Lỗi sai Gia tốc ÂM:** Nhiều bạn mặc định Chậm dần đều thì $a$ mang dấu âm. SAI! Dấu của $a$ phụ thuộc vào dấu của $v$ (chiều dương chọn). Nếu vật đi ngược chiều dương ($v<0$) và chậm dần đều thì $a$ phải mang dấu DƯƠNG! Luôn dùng tích $a \cdot v < 0$ để kiểm tra.
- 💡 **Mẹo tính quãng đường giây thứ $n$:** Quãng đường vật đi được TRONG giây thứ $n$ bằng quãng đường đi trong $n$ giây trừ đi quãng đường đi trong $(n-1)$ giây. ($s_n = S_n - S_{n-1}$).
- ⚠️ **Rơi tự do chạm đất:** Lúc vật vừa chạm đất thì $v = \sqrt{2gh}$, tức là nó đang lao xuống với vận tốc cực lớn. Đừng gán $v=0$ lúc chạm đất nhé! Vật chỉ bằng 0 SAU KHI chạm đất.
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Một ôtô đang chạy với tốc độ 36 km/h thì tăng tốc, chuyển động nhanh dần đều. Sau 5 giây, tốc độ đạt 54 km/h. Tính gia tốc của ôtô và quãng đường đi được trong 5s đó.
* **Lời giải:**
  - Đổi đơn vị: $v_0 = 36 \text{ km/h} = 10 \text{ m/s}$; $v = 54 \text{ km/h} = 15 \text{ m/s}$.
  - Gia tốc $a = \frac{v - v_0}{t} = \frac{15 - 10}{5} = 1 \text{ m/s}^2$.
  - Quãng đường $s = v_0 t + \frac{1}{2}at^2 = 10(5) + \frac{1}{2}(1)(5)^2 = 50 + 12.5 = 62.5 \text{ (m)}$.

**Bài 2 (Cơ bản):** Một viên bi được thả rơi tự do từ độ cao 20m xuống đất. Lấy $g = 10 \text{ m/s}^2$. Tính thời gian rơi và vận tốc của viên bi ngay trước khi chạm đất.
* **Lời giải:**
  - Thời gian rơi $t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \times 20}{10}} = \sqrt{4} = 2 \text{ (s)}$.
  - Vận tốc chạm đất $v = gt = 10 \times 2 = 20 \text{ (m/s)}$. (Hoặc dùng $v = \sqrt{2gh}$).

**Bài 3 (Vận dụng):** Một đoàn tàu đang chạy với tốc độ 72 km/h thì hãm phanh chuyển động chậm dần đều. Sau khi đi được 100m thì tàu dừng hẳn. Tính gia tốc của tàu và thời gian từ lúc hãm phanh đến khi dừng lại.
* **Lời giải:**
  - Đổi $v_0 = 72 \text{ km/h} = 20 \text{ m/s}$. Tàu dừng hẳn $\Rightarrow v = 0$.
  - Dùng hệ thức độc lập thời gian: $v^2 - v_0^2 = 2as \Rightarrow 0 - 20^2 = 2a(100) \Rightarrow 200a = -400 \Rightarrow a = -2 \text{ m/s}^2$.
  - Thời gian hãm phanh: $t = \frac{v - v_0}{a} = \frac{0 - 20}{-2} = 10 \text{ (s)}$.

**Bài 4 (Vận dụng):** Một vật bắt đầu chuyển động nhanh dần đều từ trạng thái đứng yên. Trong giây thứ 4, vật đi được quãng đường 14m. Tính gia tốc của vật.
* **Lời giải:**
  - $v_0 = 0$. Quãng đường đi trong $t$ giây: $S_t = \frac{1}{2}at^2$.
  - Quãng đường đi trong giây thứ 4: $s_4 = S_4 - S_3$.
  - $s_4 = \frac{1}{2}a(4^2) - \frac{1}{2}a(3^2) = 8a - 4.5a = 3.5a$.
  - Theo đề bài: $3.5a = 14 \Rightarrow a = \frac{14}{3.5} = 4 \text{ m/s}^2$.

**Bài 5 (Vận dụng):** Một hòn đá được thả rơi xuống một giếng cạn. Sau 3 giây kể từ lúc thả, người ta nghe thấy tiếng hòn đá đập vào đáy giếng. Biết vận tốc truyền âm trong không khí là 340 m/s, $g=10 \text{ m/s}^2$. Tính độ sâu của giếng (Làm tròn 1 chữ số thập phân).
* **Lời giải:**
  - Tổng thời gian 3s gồm: thời gian đá rơi xuống ($t_1$) và thời gian âm thanh vọng lên ($t_2$). $\Rightarrow t_1 + t_2 = 3$.
  - Độ sâu giếng là $h$. 
  - Khi đá rơi tự do: $h = \frac{1}{2}gt_1^2 = 5t_1^2$.
  - Khi âm truyền đều lên: $h = 340t_2 = 340(3 - t_1)$.
  - Ta có PT: $5t_1^2 = 340(3 - t_1) \Leftrightarrow 5t_1^2 + 340t_1 - 1020 = 0 \Leftrightarrow t_1^2 + 68t_1 - 204 = 0$.
  - Giải PT bậc 2 (nhận nghiệm dương): $t_1 \approx 2.87 \text{ (s)}$.
  - Độ sâu giếng: $h = 5(2.87)^2 \approx 41.2 \text{ (m)}$.

**Bài 6 (Vận dụng cao):** Đồ thị $v-t$ của một ôtô là một đường thẳng đi từ điểm $A(t=0, v=10)$ đến $B(t=10, v=30)$ trên mặt phẳng tọa độ $(t, v)$. Sử dụng phương pháp diện tích, tính quãng đường xe đi được trong 10s đó và kiểm tra lại bằng công thức động học.
* **Lời giải:**
  - **Cách 1 (Diện tích):** Hình phẳng giới hạn bởi đồ thị $v-t$ từ 0 đến 10 là một hình thang vuông.
    Đáy nhỏ = 10, Đáy lớn = 30, Chiều cao = 10.
    Quãng đường $s = S_{hìnhthang} = \frac{(10 + 30) \times 10}{2} = 200 \text{ (m)}$.
  - **Cách 2 (Công thức):** 
    Gia tốc $a = \frac{30 - 10}{10} = 2 \text{ m/s}^2$.
    $s = v_0t + \frac{1}{2}at^2 = 10(10) + \frac{1}{2}(2)(10)^2 = 100 + 100 = 200 \text{ (m)}$. (Trùng khớp).

**Bài 7 (Vận dụng cao):** Một máy bay ném bom bay ngang với vận tốc 720 km/h ở độ cao 2000m. Để bom rơi trúng một mục tiêu trên mặt đất, phi công phải cắt bom khi máy bay cách mục tiêu theo phương ngang một khoảng là bao nhiêu? Lấy $g = 10 \text{ m/s}^2$.
* **Lời giải:**
  - Đây là bài toán Ném ngang. Đổi $v_0 = 720 \text{ km/h} = 200 \text{ m/s}$.
  - Thời gian bom rơi đến khi chạm đất chỉ phụ thuộc độ cao (như rơi tự do):
    $t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \times 2000}{10}} = \sqrt{400} = 20 \text{ (s)}$.
  - Trong thời gian rơi, quả bom bay tới theo phương ngang với vận tốc không đổi $v_0$.
  - Tầm xa (khoảng cách phương ngang) $L = v_0 t = 200 \times 20 = 4000 \text{ (m)} = 4 \text{ km}$.
  - Vậy phải cắt bom khi cách mục tiêu theo phương ngang 4 km.

**Bài 8 (Vận dụng cao):** Một cầu thủ sút phạt trực tiếp cách khung thành 25m. Bóng được sút đi với vận tốc ban đầu 20 m/s, góc sút $30^\circ$ so với mặt sân. Chiều cao xà ngang là 2.44m. Bỏ qua cản không khí, $g=10$. Bóng có bay trúng vào cầu môn không (biết bóng đi thẳng hướng gôn)?
* **Lời giải:**
  - Viết phương trình quỹ đạo ném xiên: $y = \frac{-g}{2v_0^2 \cos^2 \alpha}x^2 + x \tan \alpha$.
  - Thay $v_0 = 20$, $\alpha = 30^\circ$, $g = 10$. $\cos 30^\circ = \frac{\sqrt{3}}{2} \Rightarrow \cos^2 30^\circ = \frac{3}{4}$.
  - $y = \frac{-10}{2(400)(3/4)}x^2 + x \frac{1}{\sqrt{3}} = -\frac{1}{60}x^2 + \frac{\sqrt{3}}{3}x$.
  - Khung thành nằm ở tọa độ $x = 25$m. Cao độ của quả bóng khi đến khung thành:
    $y(25) = -\frac{1}{60}(25)^2 + \frac{\sqrt{3}}{3}(25) = -\frac{625}{60} + \frac{25\sqrt{3}}{3} \approx -10.42 + 14.43 = 4.01 \text{ (m)}$.
  - So sánh: $4.01 \text{m} > 2.44 \text{m}$.
  - Quả bóng bay vọt xà ngang! (Không vào gôn).

**Bài 9 (Vận dụng cao):** Một người ném một quả bóng lên từ mặt đất. Tìm góc ném $\alpha$ để tầm bay xa của quả bóng gấp đôi độ cao cực đại mà nó đạt được.
* **Lời giải:**
  - Tầm xa: $L = \frac{v_0^2 \sin 2\alpha}{g} = \frac{v_0^2 (2\sin \alpha \cos \alpha)}{g}$.
  - Tầm cao cực đại: $H = \frac{v_0^2 \sin^2 \alpha}{2g}$.
  - Đề bài yêu cầu: $L = 2H$.
  - $\frac{v_0^2 (2\sin \alpha \cos \alpha)}{g} = 2 \left( \frac{v_0^2 \sin^2 \alpha}{2g} \right)$.
  - Đơn giản $v_0^2/g$ ở hai vế, giả sử bóng ném lên nên $\sin \alpha \neq 0$:
    $2\sin \alpha \cos \alpha = \sin^2 \alpha \Leftrightarrow 2\cos \alpha = \sin \alpha \Leftrightarrow \frac{\sin \alpha}{\cos \alpha} = 2$.
  - Suy ra $\tan \alpha = 2 \Rightarrow \alpha \approx 63.43^\circ$.

**Bài 10 (Nâng cao):** Hai xe A và B bắt đầu chuyển động cùng lúc từ cùng một vạch xuất phát. Xe A chạy với vận tốc không đổi $v_A = 10 \text{ m/s}$. Xe B đứng yên nhưng bắt đầu tăng tốc với gia tốc không đổi $a = 2 \text{ m/s}^2$. 
a) Tìm khoảng cách lớn nhất giữa hai xe trước khi xe B đuổi kịp xe A.
b) Sau bao lâu thì B đuổi kịp A?
* **Lời giải:**
  - Phương trình tọa độ xe A: $x_A = 10t$.
  - Phương trình tọa độ xe B: $x_B = \frac{1}{2}at^2 = t^2$.
  - b) B đuổi kịp A khi $x_A = x_B \Leftrightarrow 10t = t^2 \Rightarrow t = 10$ (giây). (Loại $t=0$).
  - a) Khoảng cách giữa 2 xe khi A dẫn trước: $\Delta x = x_A - x_B = 10t - t^2$.
  - Đây là hàm số Parabol úp ngược. Giá trị Max đạt tại đỉnh: $t = -\frac{b}{2a} = -\frac{10}{2(-1)} = 5$ (giây).
  - Khoảng cách lớn nhất: $\Delta x_{max} = 10(5) - 5^2 = 50 - 25 = 25$ (m).
  - *(Góc nhìn Vật lý Master: Hai xe xa nhau nhất khi vận tốc của chúng BẰNG NHAU. $v_B = at = 2t$. Cho $v_B = v_A \Rightarrow 2t = 10 \Rightarrow t=5s$. Vô cùng chính xác!).*
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_VATLY10_CH2;
}
const DATA_LY10_CH2 = {
    "PHY10-CH2-04": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương II: Động học",
        title: "Bài 4: Độ dịch chuyển và quãng đường đi được",
        theory: String.raw`
### 1. Hệ quy chiếu và Xác định vị trí của vật
📌 **Hệ quy chiếu bao gồm:**
- **Vật làm mốc**, hệ trục tọa độ gắn với vật làm mốc.
- **Mốc thời gian** và đồng hồ đo thời gian.
- Để xác định vị trí của một vật trên một đường thẳng, ta chỉ cần chọn 1 trục tọa độ $Ox$. Vị trí của vật được xác định bởi tọa độ $x$.

---

### 2. Quãng đường ($s$)
- **Định nghĩa:** Quãng đường là chiều dài quỹ đạo mà vật đã đi được trong suốt quá trình chuyển động.
- **Tính chất:** Quãng đường là một đại lượng vô hướng và luôn không âm ($s \ge 0$).

---

### 3. Độ dịch chuyển ($\vec{d}$)
- **Định nghĩa:** Độ dịch chuyển là một đại lượng vectơ nối vị trí đầu và vị trí cuối của chuyển động, cho biết hướng và độ dài của sự thay đổi vị trí.
- **Ký hiệu:** $\vec{d}$ hoặc $\Delta \vec{x}$.
- **Trong chuyển động thẳng:** Nếu gọi $x_1$ là tọa độ ban đầu, $x_2$ là tọa độ lúc sau thì giá trị đại số của độ dịch chuyển là:
  $$d = \Delta x = x_2 - x_1$$
- **Tính chất:** Độ dịch chuyển có thể dương, âm hoặc bằng 0 tùy thuộc vào chiều chuyển động và vị trí đầu/cuối.

---

### 4. Phân biệt Quãng đường và Độ dịch chuyển
- Khi vật chuyển động thẳng và **không đổi chiều**, độ lớn của độ dịch chuyển bằng quãng đường đi được: $|d| = s$.
- Khi vật chuyển động **có đổi chiều** hoặc quỹ đạo không phải đường thẳng, độ lớn độ dịch chuyển luôn nhỏ hơn quãng đường: $|\vec{d}| < s$.
        `,
        tips: String.raw`
- 💡 **Mẹo làm bài:**
  - Nếu đề bài hỏi **"Vị trí"**, ta phải trả lời bằng tọa độ ($x$).
  - Nếu đề bài hỏi **"Độ dịch chuyển"**, phải quan tâm đến dấu (chiều). Đi theo chiều dương thì $d > 0$, đi ngược chiều dương thì $d < 0$.
  - Tính độ dịch chuyển trong mặt phẳng $Oxy$ bằng định lý Pytago khi biết độ dịch chuyển thành phần vuông góc: $d = \sqrt{d_x^2 + d_y^2}$.
- ⚠️ **Sai lầm thường gặp:** Đồng nhất độ dịch chuyển và quãng đường khi vật quay lại vị trí xuất phát. (Khi đó $d = 0$ nhưng $s > 0$).
        `,
        practice: String.raw`
### Dạng 1: Tính quãng đường và độ dịch chuyển trong chuyển động thẳng
**Bài 1:** Một ô tô xuất phát từ điểm $A$ đi thẳng đến điểm $B$ cách $A$ 40 km. Sau đó ô tô quay ngược lại và dừng ở điểm $C$ cách $B$ 10 km. Tính quãng đường và độ dịch chuyển của ô tô. Chọn chiều dương là chiều từ $A$ đến $B$, gốc tọa độ tại $A$.
[GIAI]
**Lời giải chi tiết:**
- Quãng đường xe đi được là tổng chiều dài các đoạn đường:
  $$s = AB + BC = 40 + 10 = 50 \text{ (km)}$$
- Độ dịch chuyển của ô tô là khoảng cách từ điểm đầu đến điểm cuối kèm theo hướng. 
  Vị trí đầu là $A$ ($x_1 = 0$), vị trí cuối là $C$. 
  Vì $C$ nằm giữa $A$ và $B$ và cách $B$ 10 km $\Rightarrow$ tọa độ của $C$ là $x_2 = 40 - 10 = 30 \text{ (km)}$.
  Độ dịch chuyển:
  $$d = x_2 - x_1 = 30 - 0 = 30 \text{ (km)}$$
- Vậy quãng đường là 50 km, độ dịch chuyển là 30 km.
[/GIAI]

### Dạng 2: Độ dịch chuyển tổng hợp trong mặt phẳng
**Bài 2:** Một người đi xe đạp đi về hướng Bắc 3 km, sau đó rẽ sang hướng Đông đi tiếp 4 km. Tính quãng đường và độ lớn độ dịch chuyển của người đó.
[GIAI]
**Lời giải chi tiết:**
- Quãng đường người đó đi được là:
  $$s = s_1 + s_2 = 3 + 4 = 7 \text{ (km)}$$
- Độ dịch chuyển được biểu diễn bằng một vectơ nối từ điểm xuất phát đến điểm kết thúc. Vì hướng Bắc và hướng Đông vuông góc với nhau, độ lớn độ dịch chuyển được tính bằng định lý Pytago:
  $$d = \sqrt{s_1^2 + s_2^2} = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5 \text{ (km)}$$
- Vậy quãng đường là 7 km, độ lớn độ dịch chuyển là 5 km.
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 1: Câu nào sau đây là đúng khi nói về độ dịch chuyển?
[A] Độ dịch chuyển luôn bằng quãng đường đi được.
[*B] Độ dịch chuyển là một đại lượng vectơ nối vị trí đầu và vị trí cuối.
[C] Độ dịch chuyển không thể có giá trị âm.
[D] Độ dịch chuyển luôn lớn hơn hoặc bằng quãng đường đi được.
[/QUIZ]

[QUIZ]
Câu 2: Một học sinh bơi từ mép hồ này sang mép hồ kia (chiều dài 50m) rồi bơi ngược lại về vị trí cũ. Quãng đường và độ dịch chuyển của học sinh lần lượt là:
[A] 50 m và 50 m.
[B] 100 m và 100 m.
[*C] 100 m và 0 m.
[D] 0 m và 100 m.
[/QUIZ]
        `
    },

    "PHY10-CH2-05": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương II: Động học",
        title: "Bài 5: Tốc độ và vận tốc",
        theory: String.raw`
### 1. Tốc độ
📌 **Tốc độ trung bình:**
- Là đại lượng đặc trưng cho sự nhanh chậm của chuyển động trên cả quãng đường.
- Công thức: 
  $$v = \frac{s}{\Delta t}$$
- Trong đó: $s$ là quãng đường đi được, $\Delta t$ là thời gian đi hết quãng đường đó.

📌 **Tốc độ tức thời:**
- Là tốc độ của vật tại một thời điểm (đọc trên tốc kế của xe).

---

### 2. Vận tốc
📌 **Vận tốc trung bình:**
- Vận tốc là đại lượng vectơ đặc trưng cho sự thay đổi vị trí của vật, tính bằng thương số giữa độ dịch chuyển và thời gian dịch chuyển.
- Công thức:
  $$\vec{v} = \frac{\Delta \vec{d}}{\Delta t}$$
- Giá trị đại số trên một trục tọa độ: 
  $$v = \frac{\Delta x}{\Delta t} = \frac{x_2 - x_1}{t_2 - t_1}$$

📌 **Vận tốc tức thời:**
- Là vận tốc tại một thời điểm hoặc một vị trí xác định trên quỹ đạo. Nó là một vectơ có phương tiếp tuyến với quỹ đạo và có chiều là chiều chuyển động.

---

### 3. Tính tương đối của chuyển động. Công thức cộng vận tốc
- Vận tốc của vật mang tính tương đối, phụ thuộc vào hệ quy chiếu.
- **Công thức cộng vận tốc:**
  $$\vec{v}_{13} = \vec{v}_{12} + \vec{v}_{23}$$
- Trong đó:
  - Vận tốc tuyệt đối ($\vec{v}_{13}$): Vận tốc của vật so với HQC đứng yên.
  - Vận tốc tương đối ($\vec{v}_{12}$): Vận tốc của vật so với HQC chuyển động.
  - Vận tốc kéo theo ($\vec{v}_{23}$): Vận tốc của HQC chuyển động so với HQC đứng yên.
        `,
        tips: String.raw`
- 💡 **Mẹo nhớ chiều:**
  - Nếu hai xe đi cùng chiều: $v_{12} = |v_1 - v_2|$ (vận tốc tương đối bằng hiệu độ lớn).
  - Nếu hai xe đi ngược chiều: $v_{12} = v_1 + v_2$ (vận tốc tương đối bằng tổng độ lớn).
- ⚠️ **Lỗi sai:** Tốc độ trung bình không phải là trung bình cộng của các tốc độ. $v_{tb} \neq \frac{v_1 + v_2}{2}$ mà phải dùng công thức $v = \frac{s_1 + s_2}{t_1 + t_2}$.
        `,
        practice: String.raw`
### Dạng 1: Tính tốc độ trung bình trên nhiều giai đoạn
**Bài 1:** Một người đi xe máy từ $A$ đến $B$. Nửa đoạn đường đầu đi với tốc độ 40 km/h, nửa đoạn đường sau đi với tốc độ 60 km/h. Tính tốc độ trung bình của người đó trên cả quãng đường.
[GIAI]
**Lời giải chi tiết:**
- Gọi $s$ là toàn bộ chiều dài quãng đường. 
- Thời gian đi nửa đường đầu là: $t_1 = \frac{s/2}{40} = \frac{s}{80}$.
- Thời gian đi nửa đường sau là: $t_2 = \frac{s/2}{60} = \frac{s}{120}$.
- Tổng thời gian là: $t = t_1 + t_2 = \frac{s}{80} + \frac{s}{120} = s \left( \frac{3 + 2}{240} \right) = \frac{5s}{240} = \frac{s}{48}$.
- Tốc độ trung bình trên cả quãng đường:
  $$v_{tb} = \frac{s}{t} = \frac{s}{s/48} = 48 \text{ (km/h)}$$
- *Lưu ý: Tốc độ trung bình không bằng $(40+60)/2 = 50$ km/h.*
[/GIAI]

### Dạng 2: Vận tốc tương đối (Cộng vận tốc)
**Bài 2:** Một chiếc thuyền chạy xuôi dòng từ bến A đến bến B. Biết tốc độ của thuyền so với nước yên lặng là 15 km/h, tốc độ của dòng nước so với bờ là 3 km/h. Tính thời gian thuyền đi từ A đến B biết khoảng cách AB là 36 km.
[GIAI]
**Lời giải chi tiết:**
- Gọi:
  - Vật 1 là thuyền.
  - Vật 2 là nước.
  - Vật 3 là bờ.
- Ta có $\vec{v}_{13} = \vec{v}_{12} + \vec{v}_{23}$.
- Vì thuyền đi xuôi dòng nên vận tốc của thuyền và nước cùng chiều:
  $$v_{13} = v_{12} + v_{23} = 15 + 3 = 18 \text{ (km/h)}$$
- Thời gian thuyền đi từ bến A đến bến B là:
  $$t = \frac{AB}{v_{13}} = \frac{36}{18} = 2 \text{ (giờ)}$$
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 1: Biểu thức nào sau đây xác định giá trị vận tốc trung bình?
[A] $v = \frac{s}{t}$
[*B] $v = \frac{\Delta x}{\Delta t}$
[C] $v = s \cdot t$
[D] $v = \Delta x \cdot \Delta t$
[/QUIZ]

[QUIZ]
Câu 2: Hai ô tô chạy trên cùng một đường thẳng với cùng tốc độ 50 km/h nhưng ngược chiều nhau. Vận tốc của ô tô thứ nhất so với ô tô thứ hai có độ lớn là:
[A] 0 km/h
[B] 50 km/h
[*C] 100 km/h
[D] 25 km/h
[/QUIZ]
        `
    },

    "PHY10-CH2-07": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương II: Động học",
        title: "Bài 7: Đồ thị độ dịch chuyển – thời gian",
        theory: String.raw`
### 1. Đồ thị độ dịch chuyển – thời gian ($d-t$)
📌 **Định nghĩa:** Đồ thị biểu diễn sự phụ thuộc của độ dịch chuyển $d$ vào thời gian $t$.
- Trục tung ($Od$): Biểu diễn độ dịch chuyển $d$.
- Trục hoành ($Ot$): Biểu diễn thời gian $t$.

📌 **Tính chất của đồ thị $d-t$ trong chuyển động thẳng đều:**
- Vì phương trình độ dịch chuyển có dạng $d = v \cdot t$ (nếu tính từ gốc) hoặc $x = x_0 + v \cdot t$, đồ thị là một **đường thẳng**.
- **Độ dốc (Hệ số góc) của đồ thị:**
  $$v = \frac{\Delta d}{\Delta t}$$
  - Giá trị vận tốc $v$ bằng độ dốc của đường thẳng.
  - Đồ thị dốc lên ($v > 0$): Vật chuyển động theo chiều dương.
  - Đồ thị dốc xuống ($v < 0$): Vật chuyển động theo chiều âm.
  - Đồ thị nằm ngang ($v = 0$): Vật đứng yên.

---

### 2. Xác định vận tốc từ đồ thị $d-t$
- Chọn hai điểm bất kỳ trên đồ thị: $M_1(t_1; d_1)$ và $M_2(t_2; d_2)$.
- Vận tốc được tính bằng công thức:
  $$v = \frac{d_2 - d_1}{t_2 - t_1}$$
        `,
        tips: String.raw`
- 💡 **Mẹo:** 
  - Đường đồ thị càng dốc thì độ lớn vận tốc (tốc độ) càng lớn. Vật đi càng nhanh.
  - Hai đồ thị $d-t$ song song nhau nghĩa là hai vật chuyển động cùng vận tốc.
  - Giao điểm của hai đường đồ thị $d-t$ chính là thời điểm và vị trí hai vật gặp nhau.
        `,
        practice: String.raw`
### Dạng 1: Viết phương trình, tính vận tốc từ đồ thị
**Bài 1:** Một vật chuyển động thẳng có đồ thị $d-t$ là một đường thẳng đi qua gốc tọa độ. Tại thời điểm $t = 2$ s, độ dịch chuyển của vật là $10$ m. Tính vận tốc của vật và viết phương trình độ dịch chuyển.
[GIAI]
**Lời giải chi tiết:**
- Đồ thị đi qua gốc tọa độ nên tại $t_0 = 0 \Rightarrow d_0 = 0$.
- Tại $t = 2$ s $\Rightarrow d = 10$ m.
- Vận tốc của vật là độ dốc của đồ thị:
  $$v = \frac{\Delta d}{\Delta t} = \frac{10 - 0}{2 - 0} = 5 \text{ (m/s)}$$
- Phương trình độ dịch chuyển:
  $$d = v \cdot t = 5t \text{ (m)}$$
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 1: Đồ thị độ dịch chuyển - thời gian của một vật chuyển động thẳng đều là:
[A] Đường parabol.
[*B] Đường thẳng xiên góc.
[C] Đường thẳng vuông góc với trục thời gian.
[D] Đường hyperbol.
[/QUIZ]

[QUIZ]
Câu 2: Trên đồ thị $d-t$, nếu một đoạn thẳng nằm ngang song song với trục thời gian $Ot$ thì:
[A] Vật đang chuyển động đều.
[B] Vật đang chuyển động biến đổi.
[*C] Vật đang đứng yên.
[D] Vật đổi chiều chuyển động.
[/QUIZ]
        `
    },

    "PHY10-CH2-09": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương II: Động học",
        title: "Bài 8 & 9: Chuyển động thẳng biến đổi đều & Gia tốc",
        theory: String.raw`
### 1. Gia tốc ($a$)
📌 **Định nghĩa:** Là đại lượng đặc trưng cho độ biến thiên nhanh hay chậm của vận tốc.
- Công thức vectơ: 
  $$\vec{a} = \frac{\Delta \vec{v}}{\Delta t} = \frac{\vec{v} - \vec{v}_0}{t - t_0}$$
- Đơn vị: m/s².

---

### 2. Chuyển động thẳng biến đổi đều
📌 **Khái niệm:** Là chuyển động thẳng mà vận tốc thay đổi (tăng hoặc giảm) đều đặn theo thời gian. Quỹ đạo là đường thẳng, gia tốc $\vec{a}$ là không đổi.
- **Nhanh dần đều:** Vận tốc tăng dần đều, vectơ gia tốc cùng chiều với vectơ vận tốc ($a \cdot v > 0$).
- **Chậm dần đều:** Vận tốc giảm dần đều, vectơ gia tốc ngược chiều với vectơ vận tốc ($a \cdot v < 0$).

---

### 3. Các phương trình động học cơ bản
1. **Phương trình vận tốc:** 
   $$v = v_0 + at$$
2. **Phương trình độ dịch chuyển (và quãng đường nếu đi một chiều):**
   $$d = v_0t + \frac{1}{2}at^2$$
3. **Phương trình tọa độ:**
   $$x = x_0 + v_0t + \frac{1}{2}at^2$$
4. **Hệ thức độc lập với thời gian:**
   $$v^2 - v_0^2 = 2ad$$
*(Trong đó: $v_0$ là vận tốc ban đầu, $v$ là vận tốc lúc sau, $a$ là gia tốc, $t$ là thời gian)*
        `,
        tips: String.raw`
- 💡 **Mẹo xử lý bài toán CĐ biến đổi đều:**
  - Nếu xe **bắt đầu khởi hành**: $v_0 = 0$.
  - Nếu xe **hãm phanh đến khi dừng lại**: $v = 0$.
  - Khi xét bài toán va chạm / hãm phanh, luôn ưu tiên dùng công thức $v^2 - v_0^2 = 2ad$ để tính gia tốc trước nếu đề không cho thời gian.
- ⚠️ **Sai lầm thường gặp:** Tính sai dấu của gia tốc trong chuyển động chậm dần đều. Hãy chọn chiều dương là chiều chuyển động, lúc này $v > 0$, nếu chậm dần đều thì phải lấy $a < 0$.
        `,
        practice: String.raw`
### Dạng 1: Áp dụng phương trình động học tính $a, v, t, d$
**Bài 1:** Một ô tô đang chạy với vận tốc 10 m/s thì tăng tốc chuyển động thẳng nhanh dần đều. Sau 20 giây, ô tô đạt vận tốc 20 m/s. 
a) Tính gia tốc của ô tô.
b) Tính quãng đường ô tô đi được trong 20 giây đó.
[GIAI]
**Lời giải chi tiết:**
a) Gia tốc của ô tô là:
   Áp dụng công thức $v = v_0 + at \Rightarrow a = \frac{v - v_0}{t}$
   $$a = \frac{20 - 10}{20} = 0.5 \text{ (m/s}^2)$$
b) Quãng đường ô tô đi được:
   Vì xe không đổi chiều nên $s = d$. Áp dụng công thức:
   $$s = v_0t + \frac{1}{2}at^2 = 10(20) + \frac{1}{2}(0.5)(20)^2 = 200 + \frac{1}{2}(0.5)(400) = 200 + 100 = 300 \text{ (m)}$$
   (Hoặc dùng: $v^2 - v_0^2 = 2as \Rightarrow s = \frac{400 - 100}{2(0.5)} = 300 \text{ m}$)
[/GIAI]

**Bài 2 (Hãm phanh):** Một đoàn tàu đang chạy với vận tốc 72 km/h thì hãm phanh, chạy chậm dần đều và sau 10s thì dừng hẳn. Tính quãng đường tàu đi được từ lúc hãm phanh đến khi dừng lại.
[GIAI]
**Lời giải chi tiết:**
- Đổi đơn vị: $v_0 = 72 \text{ km/h} = \frac{72}{3.6} = 20 \text{ m/s}$.
- Khi dừng hẳn thì $v = 0$. Thời gian $t = 10$ s.
- Gia tốc của tàu:
  $$a = \frac{v - v_0}{t} = \frac{0 - 20}{10} = -2 \text{ (m/s}^2)$$
- Quãng đường tàu đi được:
  $$s = \frac{v^2 - v_0^2}{2a} = \frac{0^2 - 20^2}{2 \cdot (-2)} = \frac{-400}{-4} = 100 \text{ (m)}$$
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 1: Chuyển động thẳng chậm dần đều có đặc điểm nào sau đây?
[A] Gia tốc luôn có giá trị âm.
[B] Vectơ gia tốc cùng chiều với vectơ vận tốc.
[*C] Vectơ gia tốc ngược chiều với vectơ vận tốc.
[D] Vận tốc luôn có giá trị dương.
[/QUIZ]

[QUIZ]
Câu 2: Công thức liên hệ giữa vận tốc, gia tốc và độ dịch chuyển là:
[A] $v + v_0 = 2ad$
[B] $v^2 - v_0^2 = ad$
[*C] $v^2 - v_0^2 = 2ad$
[D] $v - v_0 = 2ad$
[/QUIZ]
        `
    },

    "PHY10-CH2-10": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương II: Động học",
        title: "Bài 10: Sự rơi tự do",
        theory: String.raw`
### 1. Định nghĩa và Đặc điểm của sự rơi tự do
📌 **Sự rơi tự do:** 
- Là sự rơi chỉ dưới tác dụng của trọng lực.
- Nếu sức cản của không khí rất nhỏ so với trọng lượng của vật, sự rơi của vật cũng có thể coi là rơi tự do (ví dụ vật nặng, hòn đá thả ở tầm thấp).

📌 **Đặc điểm động học:**
- **Phương:** Thẳng đứng.
- **Chiều:** Từ trên xuống dưới.
- **Tính chất chuyển động:** Là chuyển động thẳng nhanh dần đều không có vận tốc đầu ($v_0 = 0$).

---

### 2. Gia tốc rơi tự do ($g$)
- Tại một nơi nhất định trên Trái Đất và ở gần mặt đất, mọi vật đều rơi tự do với cùng một gia tốc $g$.
- Thông thường lấy $g \approx 9.8 \text{ m/s}^2$ hoặc $g = 10 \text{ m/s}^2$ để tính toán đơn giản.

---

### 3. Các công thức của sự rơi tự do
Sự rơi tự do là trường hợp riêng của CĐTBDĐ với $v_0 = 0$, $a = g$, $d = h$ (độ cao rơi). Ta có:
1. **Vận tốc tại thời điểm t:**
   $$v = gt$$
2. **Quãng đường vật rơi được sau thời gian t:**
   $$h = \frac{1}{2}gt^2$$
3. **Hệ thức độc lập (Vận tốc khi rơi được quãng đường h):**
   $$v^2 = 2gh \Rightarrow v = \sqrt{2gh}$$
4. **Thời gian rơi từ độ cao h xuống đất:**
   $$t = \sqrt{\frac{2h}{g}}$$
        `,
        tips: String.raw`
- 💡 **Mẹo giải bài tập:** 
  - Bài toán rơi tự do không phụ thuộc vào khối lượng của vật (Hai vật nặng nhẹ khác nhau rơi cùng lúc, từ cùng độ cao sẽ chạm đất cùng lúc nếu bỏ qua sức cản).
  - Quãng đường đi được trong giây thứ $n$: $\Delta h = h_n - h_{n-1} = \frac{1}{2}g \cdot n^2 - \frac{1}{2}g \cdot (n-1)^2$.
        `,
        practice: String.raw`
### Dạng 1: Bài toán cơ bản của sự rơi tự do
**Bài 1:** Một hòn đá được thả rơi tự do từ độ cao 45 m xuống đất. Lấy $g = 10 \text{ m/s}^2$. 
a) Tính thời gian hòn đá rơi tới đất.
b) Tính vận tốc của hòn đá ngay trước khi chạm đất.
[GIAI]
**Lời giải chi tiết:**
a) Áp dụng công thức tính thời gian chạm đất:
   $$t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \cdot 45}{10}} = \sqrt{9} = 3 \text{ (s)}$$
b) Vận tốc ngay trước khi chạm đất:
   $$v = gt = 10 \cdot 3 = 30 \text{ (m/s)}$$
   (Hoặc dùng: $v = \sqrt{2gh} = \sqrt{2 \cdot 10 \cdot 45} = \sqrt{900} = 30 \text{ m/s}$)
[/GIAI]

### Dạng 2: Quãng đường rơi trong những giây cuối
**Bài 2:** Một vật rơi tự do, trong giây cuối cùng trước khi chạm đất vật rơi được 25 m. Lấy $g = 10 \text{ m/s}^2$. Tính độ cao thả vật.
[GIAI]
**Lời giải chi tiết:**
- Gọi $t$ là tổng thời gian rơi đến khi chạm đất. Quãng đường vật rơi trong toàn bộ thời gian:
  $$h = \frac{1}{2}gt^2 = 5t^2$$
- Quãng đường vật rơi được trong $(t - 1)$ giây đầu là:
  $$h' = \frac{1}{2}g(t - 1)^2 = 5(t - 1)^2$$
- Quãng đường vật rơi trong giây cuối cùng là:
  $$\Delta h = h - h' = 25 \text{ (m)}$$
  $$\Rightarrow 5t^2 - 5(t - 1)^2 = 25$$
  $$\Rightarrow t^2 - (t^2 - 2t + 1) = 5$$
  $$\Rightarrow 2t - 1 = 5 \Rightarrow 2t = 6 \Rightarrow t = 3 \text{ (s)}$$
- Độ cao thả vật:
  $$h = 5t^2 = 5(3^2) = 5 \cdot 9 = 45 \text{ (m)}$$
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 1: Chuyển động rơi tự do là chuyển động:
[A] thẳng đều.
[*B] thẳng nhanh dần đều.
[C] thẳng chậm dần đều.
[D] biến đổi đều.
[/QUIZ]

[QUIZ]
Câu 2: Hai vật có khối lượng $m_1 > m_2$ rơi tự do tại cùng một vị trí với cùng một độ cao ban đầu. Bỏ qua sức cản của không khí. Phát biểu nào sau đây đúng?
[A] Vật $m_1$ chạm đất trước vật $m_2$.
[B] Vật $m_2$ chạm đất trước vật $m_1$.
[*C] Hai vật chạm đất cùng lúc.
[D] Không đủ dữ kiện để kết luận.
[/QUIZ]
        `
    },

    "PHY10-CH2-12": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương II: Động học",
        title: "Bài 12: Chuyển động ném ngang",
        theory: String.raw`
### 1. Phân tích chuyển động ném ngang
Để khảo sát chuyển động của vật ném ngang với vận tốc ban đầu $\vec{v}_0$ ở độ cao $h$, ta chọn hệ trục tọa độ $Oxy$ với:
- Gốc $O$ tại vị trí ném.
- Trục $Ox$ nằm ngang, cùng chiều với $\vec{v}_0$.
- Trục $Oy$ thẳng đứng, hướng xuống.

Chuyển động được phân tích thành 2 chuyển động thành phần:
📌 **Trên trục $Ox$ (Phương ngang):**
- Không có lực tác dụng $\Rightarrow$ gia tốc $a_x = 0$.
- Vật chuyển động thẳng đều với vận tốc $v_x = v_0$.
- Phương trình chuyển động ngang: 
  $$x = v_0 t$$

📌 **Trên trục $Oy$ (Phương thẳng đứng):**
- Vật chịu tác dụng của trọng lực $\Rightarrow$ gia tốc $a_y = g$.
- Vận tốc ban đầu theo phương y là $v_{0y} = 0$.
- Vật chuyển động rơi tự do:
  $$v_y = gt$$
  $$y = \frac{1}{2}gt^2$$

---

### 2. Quỹ đạo và Các đại lượng đặc trưng
📌 **Phương trình quỹ đạo:**
- Từ $x = v_0 t \Rightarrow t = \frac{x}{v_0}$. 
- Thay $t$ vào phương trình của $y$, ta được:
  $$y = \frac{g}{2v_0^2} \cdot x^2$$
$\Rightarrow$ Quỹ đạo của chuyển động ném ngang là một phần của đường parabol.

📌 **Thời gian bay:** (bằng thời gian rơi tự do từ cùng độ cao)
  $$t = \sqrt{\frac{2h}{g}}$$

📌 **Tầm ném xa ($L$):** (khoảng cách theo phương ngang tính từ điểm ném đến điểm chạm đất)
  $$L = x_{\max} = v_0 \cdot t = v_0 \sqrt{\frac{2h}{g}}$$

📌 **Vận tốc lúc chạm đất ($v$):**
  $$v = \sqrt{v_x^2 + v_y^2} = \sqrt{v_0^2 + (gt)^2} = \sqrt{v_0^2 + 2gh}$$
        `,
        tips: String.raw`
- 💡 **Mẹo:**
  - Thời gian bay của vật ném ngang CHỈ phụ thuộc vào độ cao $h$, KHÔNG phụ thuộc vào vận tốc ném $v_0$. Một viên bi bắn ngang và một viên bi thả rơi thẳng đứng từ cùng độ cao sẽ chạm đất cùng lúc.
  - Tầm xa $L$ thì lại tỉ lệ thuận với vận tốc đầu $v_0$. Ném càng mạnh ($v_0$ lớn) thì vật đi càng xa.
        `,
        practice: String.raw`
### Dạng 1: Các đại lượng trong chuyển động ném ngang
**Bài 1:** Một máy bay đang bay ngang với tốc độ 150 m/s ở độ cao 2000 m thì thả một gói hàng xuống đất. Bỏ qua sức cản không khí, lấy $g = 10 \text{ m/s}^2$. 
a) Tính thời gian gói hàng chạm đất.
b) Tính tầm xa của gói hàng (tính theo phương ngang từ lúc thả đến lúc chạm đất).
c) Tính vận tốc của gói hàng lúc chạm đất.
[GIAI]
**Lời giải chi tiết:**
a) Thời gian chạm đất của gói hàng (giống vật rơi tự do):
   $$t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{2 \cdot 2000}{10}} = \sqrt{400} = 20 \text{ (s)}$$
b) Tầm bay xa của gói hàng:
   $$L = v_0 \cdot t = 150 \cdot 20 = 3000 \text{ (m)}$$
c) Vận tốc thành phần lúc chạm đất:
   - Theo phương $Ox$: $v_x = v_0 = 150 \text{ m/s}$.
   - Theo phương $Oy$: $v_y = gt = 10 \cdot 20 = 200 \text{ m/s}$.
   Vận tốc chạm đất:
   $$v = \sqrt{v_x^2 + v_y^2} = \sqrt{150^2 + 200^2} = \sqrt{22500 + 40000} = \sqrt{62500} = 250 \text{ (m/s)}$$
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 1: Quỹ đạo của vật ném ngang trong chân không là đường gì?
[A] Đường thẳng.
[B] Đường tròn.
[*C] Đường parabol.
[D] Đường hyperbol.
[/QUIZ]

[QUIZ]
Câu 2: Hai vật A và B được ném ngang đồng thời từ cùng một độ cao. Vận tốc ném vật A lớn gấp đôi vận tốc ném vật B. Bỏ qua lực cản không khí. So sánh thời gian bay của 2 vật ($t_A, t_B$) và tầm xa ($L_A, L_B$):
[A] $t_A = t_B$; $L_A = L_B$.
[B] $t_A < t_B$; $L_A > L_B$.
[*C] $t_A = t_B$; $L_A = 2L_B$.
[D] $t_A > t_B$; $L_A = 2L_B$.
[/QUIZ]
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DB_PHY_10_CH2;
}