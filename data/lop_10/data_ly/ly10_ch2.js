/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU VẬT LÝ 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Chương II: Động học (Bản Nâng Cấp Master - 10 Bài tập/Bài học)
   Bộ sách: Kết nối tri thức / Chân trời sáng tạo / Cánh diều
   ========================================================================== */

const DATA_LY10_CH2 = {
    "PHY10-CH2-01": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương II: Động học",
        title: "Bài 1: Độ dịch chuyển, Vận tốc và Tính tương đối của chuyển động",
        theory: String.raw`
### 1. Phân biệt Quãng đường và Độ dịch chuyển
- **Quãng đường ($s$):** Là chiều dài thực tế quỹ đạo vật đi được, đại lượng vô hướng, luôn $s \ge 0$.
- **Độ dịch chuyển ($\vec{d}$):** Là đại lượng vectơ nối vị trí đầu và cuối. Độ lớn $|\vec{d}|$ chỉ bằng quãng đường $s$ khi vật chuyển động **thẳng và không đổi chiều**.

### 2. Tốc độ và Vận tốc
- **Tốc độ trung bình:** Đặc trưng cho độ nhanh chậm trên CẢ quãng đường. 
  $$v_{tb} = \frac{s_1 + s_2 + ...}{t_1 + t_2 + ...}$$
- **Vận tốc trung bình:** Là đại lượng vectơ.
  $$\vec{v}_{tb} = \frac{\Delta \vec{d}}{\Delta t} = \frac{\vec{d}_2 - \vec{d}_1}{t_2 - t_1}$$

### 3. Tính tương đối của chuyển động. Công thức cộng vận tốc
- Quỹ đạo và vận tốc của vật có tính tương đối, phụ thuộc vào hệ quy chiếu.
- **Công thức cộng vận tốc:**
  $$\vec{v}_{13} = \vec{v}_{12} + \vec{v}_{23}$$
- Trong đó:
  + $\vec{v}_{13}$: Vận tốc tuyệt đối (Vật so với HQC đứng yên).
  + $\vec{v}_{12}$: Vận tốc tương đối (Vật so với HQC chuyển động).
  + $\vec{v}_{23}$: Vận tốc kéo theo (HQC chuyển động so với HQC đứng yên).

---
### 4. 💎 Chuyên đề Master: Bài toán tương đối 2D (Thuyền qua sông, Hạt mưa)
📌 **Bài toán thuyền qua sông:**
- Khi thuyền luôn hướng mũi vuông góc với bờ: $\vec{v}_{thuyền/nước} \perp \vec{v}_{nước/bờ}$. 
  + Vận tốc thực của thuyền: $v = \sqrt{v_{t/n}^2 + v_{n/b}^2}$.
  + Thời gian qua sông ngắn nhất: $t = \frac{d}{v_{t/n}}$ (với $d$ là bề rộng sông).
- Khi muốn thuyền sang sông theo đường vuông góc với bờ (đến điểm đối diện):
  + Phải lái chếch mũi thuyền lên thượng nguồn một góc $\alpha$. Khi đó: $v_{thực} = \sqrt{v_{t/n}^2 - v_{n/b}^2}$.

📌 **Bài toán hạt mưa rơi:**
- Khi trời mưa không gió, mưa rơi thẳng đứng ($\vec{v}_{mưa/đất}$). Người ngồi trên xe chạy ngang ($\vec{v}_{xe/đất}$) sẽ thấy mưa bay xiên góc.
- Áp dụng công thức: $\vec{v}_{m/x} = \vec{v}_{m/đ} - \vec{v}_{x/đ}$. Góc xiên của mưa trên cửa kính: $\tan \alpha = \frac{v_{xe}}{v_{mưa}}$.
        `,
        tips: String.raw`
- 💡 **Mẹo tốc độ trung bình:** Nếu chia quãng đường thành 2 nửa bằng nhau ($s_1 = s_2$), tốc độ trung bình KHÔNG PHẢI là trung bình cộng. Công thức tính nhanh: $v_{tb} = \frac{2v_1v_2}{v_1 + v_2}$.
- ⚠️ **Lỗi sai:** Khi xét hai vật chuyển động, học sinh hay quên hệ quy chiếu. Nếu hai xe A, B đi ngược chiều thì vận tốc xe A so với B là $v_{AB} = v_A + v_B$. Nếu đi cùng chiều thì $v_{AB} = |v_A - v_B|$.
        `,
        practice: String.raw`
### Dạng 1: Quãng đường, Độ dịch chuyển và Tốc độ trung bình
**Bài 1 (Cơ bản):** Một người đi bộ $4 \text{ km}$ về hướng Đông, sau đó rẽ sang hướng Bắc đi tiếp $3 \text{ km}$. Quá trình đi mất $2 \text{ giờ}$. Tính quãng đường, độ lớn độ dịch chuyển, tốc độ trung bình và độ lớn vận tốc trung bình của người đó.
[GIAI]
**Lời giải chi tiết:**
- Quãng đường: $s = 4 + 3 = 7 \text{ (km)}$.
- Độ dịch chuyển (áp dụng Pytago do hướng Đông $\perp$ hướng Bắc): $d = \sqrt{4^2 + 3^2} = 5 \text{ (km)}$.
- Tốc độ trung bình: $v = \frac{s}{t} = \frac{7}{2} = 3.5 \text{ (km/h)}$.
- Độ lớn vận tốc trung bình: $v_{tb} = \frac{d}{t} = \frac{5}{2} = 2.5 \text{ (km/h)}$.
[/GIAI]

**Bài 2 (Vận dụng):** Một ô tô đi từ A đến B. Nửa thời gian đầu đi với tốc độ $40 \text{ km/h}$, nửa thời gian sau đi với tốc độ $60 \text{ km/h}$. Tính tốc độ trung bình của ô tô trên cả quãng đường.
[GIAI]
**Lời giải chi tiết:**
- Gọi tổng thời gian là $t$. Thời gian mỗi nửa là $\frac{t}{2}$.
- Quãng đường đi được nửa đầu: $s_1 = v_1 \cdot \frac{t}{2} = 40 \cdot \frac{t}{2} = 20t$.
- Quãng đường đi được nửa sau: $s_2 = v_2 \cdot \frac{t}{2} = 60 \cdot \frac{t}{2} = 30t$.
- Tốc độ trung bình: 
  $$v_{tb} = \frac{s_1 + s_2}{t} = \frac{20t + 30t}{t} = 50 \text{ (km/h)}$$
[/GIAI]

**Bài 3 (Vận dụng cao):** Một xe đạp đi nửa quãng đường đầu với tốc độ $20 \text{ km/h}$ và nửa quãng đường sau với tốc độ $30 \text{ km/h}$. Tính tốc độ trung bình.
[GIAI]
**Lời giải chi tiết:**
- Gọi $s$ là tổng quãng đường.
- Thời gian đi nửa đường đầu: $t_1 = \frac{s/2}{20} = \frac{s}{40}$.
- Thời gian đi nửa đường sau: $t_2 = \frac{s/2}{30} = \frac{s}{60}$.
- Tổng thời gian: $t = t_1 + t_2 = \frac{s}{40} + \frac{s}{60} = \frac{5s}{120} = \frac{s}{24}$.
- Tốc độ trung bình: $v_{tb} = \frac{s}{t} = \frac{s}{s/24} = 24 \text{ (km/h)}$. 
*(Chú ý: Khác hoàn toàn với bài 2, kết quả không phải là $25 \text{ km/h}$)*.
[/GIAI]

### Dạng 2: Cộng vận tốc (Cùng phương)
**Bài 4 (Cơ bản):** Hai ô tô A và B chạy trên cùng một đường thẳng. Vận tốc của xe A so với mặt đường là $60 \text{ km/h}$, xe B là $40 \text{ km/h}$. Tính vận tốc của xe A so với xe B trong hai trường hợp: a) Hai xe chạy cùng chiều; b) Hai xe chạy ngược chiều.
[GIAI]
**Lời giải chi tiết:**
- Gọi $1$ là xe A, $2$ là xe B, $3$ là mặt đường. Ta cần tính $v_{12}$.
- Theo công thức: $\vec{v}_{13} = \vec{v}_{12} + \vec{v}_{23} \Rightarrow \vec{v}_{12} = \vec{v}_{13} - \vec{v}_{23}$.
a) Hai xe cùng chiều: Chọn chiều dương cùng chiều chuyển động.
   $$v_{12} = v_{13} - v_{23} = 60 - 40 = 20 \text{ (km/h)}$$
b) Hai xe ngược chiều: Xe B ngược chiều xe A nên $v_{23} = -40$.
   $$v_{12} = v_{13} - v_{23} = 60 - (-40) = 100 \text{ (km/h)}$$
[/GIAI]

**Bài 5 (Vận dụng):** Một đoàn tàu dài $200 \text{ m}$ chạy với vận tốc $36 \text{ km/h}$. Một người đi bộ trên tàu cùng chiều với tàu với tốc độ $1 \text{ m/s}$. Tính thời gian để người đó đi hết chiều dài đoàn tàu và quãng đường người đó đi được đối với mặt đất trong khoảng thời gian đó.
[GIAI]
**Lời giải chi tiết:**
- Đổi $v_{tàu} = 36 \text{ km/h} = 10 \text{ m/s}$.
- Vận tốc người so với tàu: $v_{n/t} = 1 \text{ m/s}$.
- Thời gian người đi hết chiều dài tàu: $t = \frac{L}{v_{n/t}} = \frac{200}{1} = 200 \text{ (s)}$.
- Vận tốc người so với đất: $v_{n/đ} = v_{n/t} + v_{t/đ} = 1 + 10 = 11 \text{ m/s}$.
- Quãng đường người đi được đối với mặt đất: $s_{đất} = v_{n/đ} \cdot t = 11 \cdot 200 = 2200 \text{ (m)}$.
[/GIAI]

### Dạng 3: Bài toán Tương đối 2D (Nâng cao)
**Bài 6 (Vận dụng cao):** Một chiếc thuyền xuôi dòng từ bến A đến bến B cách nhau $12 \text{ km}$ hết $1 \text{ giờ}$. Sau đó thuyền đi ngược dòng từ B về A hết $1.5 \text{ giờ}$. Tính tốc độ của thuyền so với nước và tốc độ của dòng nước.
[GIAI]
**Lời giải chi tiết:**
- Vận tốc thuyền xuôi dòng: $v_{xuôi} = v_t + v_n = \frac{12}{1} = 12 \text{ (km/h)}$.
- Vận tốc thuyền ngược dòng: $v_{ngược} = v_t - v_n = \frac{12}{1.5} = 8 \text{ (km/h)}$.
- Ta có hệ phương trình:
  $$\begin{cases} v_t + v_n = 12 \\ v_t - v_n = 8 \end{cases} \Rightarrow 2v_t = 20 \Rightarrow v_t = 10 \text{ (km/h)}, \quad v_n = 2 \text{ (km/h)}$$
[/GIAI]

**Bài 7 (Nâng cao):** Bề rộng một con sông là $d = 400 \text{ m}$. Vận tốc dòng nước là $v_n = 3 \text{ m/s}$. Vận tốc của thuyền so với nước là $v_t = 4 \text{ m/s}$. Thuyền luôn giữ mũi vuông góc với bờ. 
a) Thuyền sẽ bị trôi xuôi dòng một đoạn bao xa khi sang đến bờ bên kia?
b) Nếu muốn thuyền sang đến điểm vuông góc ở bờ bên kia, thuyền phải hướng mũi hợp với bờ một góc bao nhiêu?
[GIAI]
**Lời giải chi tiết:**
a) Thời gian qua sông khi mũi vuông góc với bờ:
   $t = \frac{d}{v_t} = \frac{400}{4} = 100 \text{ (s)}$.
   Đoạn bị trôi xuôi dòng (do nước đẩy):
   $s_{trôi} = v_n \cdot t = 3 \cdot 100 = 300 \text{ (m)}$.
b) Để thuyền sang thẳng điểm đối diện, vận tốc tổng hợp $\vec{v}$ phải vuông góc với bờ.
   Từ tam giác vận tốc $\vec{v} = \vec{v}_t + \vec{v}_n$, ta có $\vec{v}_t$ là cạnh huyền.
   $$\sin \alpha = \frac{v_n}{v_t} = \frac{3}{4} = 0.75 \Rightarrow \alpha \approx 48.6^\circ$$
   Vậy thuyền phải hướng mũi lên thượng nguồn tạo một góc $90^\circ - 48.6^\circ = 41.4^\circ$ so với bờ sông.
[/GIAI]

**Bài 8 (Nâng cao):** Trời mưa lặng gió, các giọt mưa rơi thẳng đứng với tốc độ $8 \text{ m/s}$. Một xe lửa chạy ngang với tốc độ $v_x$. Người ngồi trên xe thấy các giọt mưa hợp với phương thẳng đứng một góc $60^\circ$. Tính tốc độ của xe lửa.
[GIAI]
**Lời giải chi tiết:**
- Gọi 1: Mưa, 2: Xe lửa, 3: Đất.
- Ta có $\vec{v}_{13} = \vec{v}_{12} + \vec{v}_{23} \Rightarrow \vec{v}_{12} = \vec{v}_{13} - \vec{v}_{23}$.
- $\vec{v}_{13}$ hướng thẳng đứng xuống ($8 \text{ m/s}$). $-\vec{v}_{23}$ hướng ngược chiều xe chạy nằm ngang.
- Quỹ đạo tương đối $\vec{v}_{12}$ hợp với phương thẳng đứng $\vec{v}_{13}$ góc $60^\circ$.
  $$\tan 60^\circ = \frac{v_{23}}{v_{13}} \Rightarrow v_{23} = v_{13} \cdot \tan 60^\circ = 8 \cdot \sqrt{3} \approx 13.86 \text{ (m/s)}$$
- Tốc độ của xe lửa là $13.86 \text{ m/s}$ (khoảng $50 \text{ km/h}$).
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Khi nào độ lớn của độ dịch chuyển bằng quãng đường đi được của một vật?
[A] Vật chuyển động thẳng đều.
[*B] Vật chuyển động trên một đường thẳng và không đổi chiều.
[C] Vật chuyển động cong bất kỳ không lặp lại quỹ đạo.
[D] Vật chuyển động thẳng nhanh dần đều rồi chậm dần đều tới khi dừng.
[/QUIZ]

[QUIZ]
Câu 10: Hai xe A và B cùng chuyển động đều trên mặt phẳng ngang. $\vec{v}_A$ vuông góc với $\vec{v}_B$. Vận tốc của xe A so với xe B có độ lớn là:
[A] $|v_A - v_B|$
[B] $v_A + v_B$
[*C] $\sqrt{v_A^2 + v_B^2}$
[D] $\sqrt{|v_A^2 - v_B^2|}$
[/QUIZ]
        `
    },

    "PHY10-CH2-02": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương II: Động học",
        title: "Bài 2: Chuyển động thẳng biến đổi đều & Phân tích Đồ thị",
        theory: String.raw`
### 1. Gia tốc và Chuyển động thẳng biến đổi đều
- **Gia tốc ($a$):** Đại lượng cho biết sự biến thiên nhanh hay chậm của vận tốc: $a = \frac{\Delta v}{\Delta t}$.
- **Đặc điểm:** 
  + CĐT nhanh dần đều (NDĐ): $\vec{a}$ và $\vec{v}$ cùng chiều ($a \cdot v > 0$).
  + CĐT chậm dần đều (CDĐ): $\vec{a}$ và $\vec{v}$ ngược chiều ($a \cdot v < 0$).
- **Bộ 3 phương trình cốt lõi:**
  1. $v = v_0 + at$
  2. $d = v_0t + \frac{1}{2}at^2$ (Quãng đường $s = d$ nếu không đổi chiều)
  3. Hệ thức độc lập: $v^2 - v_0^2 = 2ad$

### 2. Đồ thị Động học
- **Đồ thị $(d - t)$:** 
  + CĐT Đều: Là đường thẳng xiên góc. Vận tốc $v$ là độ dốc (hệ số góc) của đường thẳng.
  + CĐT Biến đổi đều: Là một đường Parabol.
- **Đồ thị $(v - t)$:**
  + Là đường thẳng. Gia tốc $a$ là độ dốc của đường thẳng ($a = \frac{\Delta v}{\Delta t}$).
  + **Định lí diện tích:** Diện tích hình phẳng giới hạn bởi đồ thị $v - t$ và trục thời gian $Ot$ chính bằng độ dịch chuyển (hoặc quãng đường nếu $v \ge 0$) mà vật đi được.

---
### 3. 💎 Chuyên đề Master: Bài toán Gặp nhau & Quãng đường giây thứ $n$
📌 **Phương trình chuyển động tổng quát:** $x = x_0 + v_0t + \frac{1}{2}at^2$.
Để tìm thời điểm 2 vật gặp nhau, ta giải phương trình $x_1 = x_2$.
📌 **Quãng đường đi được trong giây thứ $n$:**
- Là hiệu quãng đường đi trong $n$ giây và $(n-1)$ giây.
  $$\Delta s = s_n - s_{n-1} = \left(v_0n + \frac{1}{2}an^2\right) - \left(v_0(n-1) + \frac{1}{2}a(n-1)^2\right)$$
- Đặc biệt với $v_0 = 0$: Quãng đường đi được trong các khoảng thời gian liên tiếp bằng nhau tỉ lệ với các số lẻ $1 : 3 : 5 : 7 : ...$ (Định lí Galileo).
        `,
        tips: String.raw`
- 💡 **Mẹo hãm phanh:** Cụm từ "hãm phanh đến khi dừng hẳn" cho biết dữ kiện ẩn $v_{cuối} = 0$.
- 💡 **Mẹo tính nhanh thời gian dừng:** Nếu xe đang có vận tốc $v_0$, hãm phanh với gia tốc $a$ thì thời gian dừng lại là $t = \frac{-v_0}{a}$ và quãng đường đi được là $s = \frac{-v_0^2}{2a}$.
- ⚠️ **Lỗi sai:** Quên xét chiều dương. Nếu chọn chiều dương là chiều cđ ban đầu thì trong chuyển động chậm dần đều, $a$ PHẢI MANG DẤU ÂM.
        `,
        practice: String.raw`
### Dạng 1: Các đại lượng cơ bản và Phương trình độc lập
**Bài 1 (Cơ bản):** Một máy bay chạy đà trên đường băng để cất cánh. Từ lúc bắt đầu chạy ($v_0 = 0$) đến khi đạt tốc độ cất cánh $80 \text{ m/s}$, máy bay chạy mất $20 \text{ s}$. Tính gia tốc và chiều dài đường băng tối thiểu.
[GIAI]
**Lời giải chi tiết:**
- Gia tốc: $a = \frac{v - v_0}{t} = \frac{80 - 0}{20} = 4 \text{ (m/s}^2\text{)}$.
- Chiều dài đường băng: $s = \frac{1}{2}at^2 = \frac{1}{2} \cdot 4 \cdot 20^2 = 2 \cdot 400 = 800 \text{ (m)}$.
[/GIAI]

**Bài 2 (Vận dụng):** Một ô tô đang chạy với tốc độ $72 \text{ km/h}$ thì phát hiện chướng ngại vật cách đó $45 \text{ m}$. Tài xế đạp phanh với gia tốc không đổi là $-5 \text{ m/s}^2$. Ô tô có đâm vào chướng ngại vật không?
[GIAI]
**Lời giải chi tiết:**
- Đổi: $v_0 = 72 \text{ km/h} = 20 \text{ m/s}$. Gia tốc $a = -5 \text{ m/s}^2$. 
- Tính quãng đường ô tô đi được đến khi dừng ($v = 0$):
  $$v^2 - v_0^2 = 2as \Rightarrow 0 - 20^2 = 2 \cdot (-5) \cdot s$$
  $$-400 = -10s \Rightarrow s = 40 \text{ (m)}$$
- Do $s = 40 \text{ m} < 45 \text{ m}$, ô tô dừng lại trước chướng ngại vật $5 \text{ m}$ nên không đâm.
[/GIAI]

### Dạng 2: Phân tích Đồ thị
**Bài 3 (Vận dụng):** Đồ thị $v-t$ của một vật là một đường thẳng đi qua các điểm $(t=0; v=5)$ và $(t=4; v=25)$ (đơn vị S.I). 
a) Tính gia tốc của vật.
b) Tính quãng đường vật đi được trong $4 \text{ s}$ đó bằng công thức hình học.
[GIAI]
**Lời giải chi tiết:**
a) Gia tốc bằng hệ số góc của đồ thị:
   $$a = \frac{\Delta v}{\Delta t} = \frac{25 - 5}{4 - 0} = \frac{20}{4} = 5 \text{ (m/s}^2\text{)}$$
b) Đồ thị giới hạn tạo thành một hình thang vuông với đáy nhỏ là $5$, đáy lớn là $25$, chiều cao là $4$.
   Quãng đường bằng diện tích hình thang:
   $$S = \frac{(5 + 25) \cdot 4}{2} = 60 \text{ (m)}$$
   *(Thử lại bằng phương trình: $s = v_0t + 0.5at^2 = 5\cdot 4 + 0.5\cdot 5\cdot 16 = 20 + 40 = 60 \text{ m}$).*
[/GIAI]

### Dạng 3: Bài toán Quãng đường trong giây thứ n (Nâng cao)
**Bài 4 (Vận dụng cao):** Một vật chuyển động thẳng nhanh dần đều không vận tốc đầu. Quãng đường vật đi được trong giây thứ 4 là $14 \text{ m}$. Tính gia tốc của vật và quãng đường vật đi được trong $10 \text{ giây}$ đầu tiên.
[GIAI]
**Lời giải chi tiết:**
- Quãng đường đi trong giây thứ 4 ($\Delta s_4$):
  $$\Delta s_4 = s_4 - s_3 = \frac{1}{2}a(4)^2 - \frac{1}{2}a(3)^2 = 8a - 4.5a = 3.5a$$
- Theo đề bài: $3.5a = 14 \Rightarrow a = 4 \text{ (m/s}^2\text{)}$.
- Quãng đường đi trong 10 giây đầu:
  $$s_{10} = \frac{1}{2} \cdot 4 \cdot 10^2 = 200 \text{ (m)}$$
[/GIAI]

**Bài 5 (Nâng cao):** Một đoàn tàu hãm phanh chậm dần đều. Trong giây cuối cùng trước khi dừng hẳn, đoàn tàu đi được đoạn đường $2 \text{ m}$. Tính gia tốc của đoàn tàu.
[GIAI]
**Lời giải chi tiết:**
- Phương pháp đảo thời gian: Sự chuyển động chậm dần đều đến khi dừng lại tương đương với một chuyển động nhanh dần đều từ nghỉ ($v_0=0$) nếu nhìn ngược dòng thời gian.
- "Giây cuối cùng trước khi dừng" tương đương "giây đầu tiên kể từ lúc xuất phát từ nghỉ".
- Quãng đường giây đầu tiên: $s = \frac{1}{2} |a| \cdot 1^2 = 0.5 |a|$.
- Ta có $0.5|a| = 2 \Rightarrow |a| = 4 \text{ m/s}^2$. 
- Tàu hãm phanh nên $a = -4 \text{ m/s}^2$ (nếu chọn chiều dương là chiều chuyển động).
[/GIAI]

### Dạng 4: Bài toán hai vật gặp nhau
**Bài 6 (Vận dụng cao):** Hai điểm A và B cách nhau $100 \text{ m}$. Tại $t = 0$, xe 1 xuất phát từ A chuyển động thẳng nhanh dần đều về B với vận tốc đầu $0$, gia tốc $2 \text{ m/s}^2$. Cùng lúc, xe 2 xuất phát từ B đi về A (ngược chiều) với vận tốc không đổi $15 \text{ m/s}$. 
a) Viết phương trình chuyển động của hai xe.
b) Xác định thời điểm và vị trí hai xe gặp nhau.
[GIAI]
**Lời giải chi tiết:**
a) Chọn gốc tọa độ tại A, chiều dương từ A đến B, mốc thời gian $t=0$ lúc bắt đầu.
   - Xe 1 (tại $x_{01} = 0, v_{01} = 0, a_1 = 2$): 
     $$x_1 = 0 + 0 + \frac{1}{2} \cdot 2 \cdot t^2 = t^2 \text{ (m)}$$
   - Xe 2 (tại $x_{02} = 100, v_2 = -15, a_2 = 0$):
     $$x_2 = 100 - 15t \text{ (m)}$$
b) Hai xe gặp nhau khi $x_1 = x_2$:
   $$t^2 = 100 - 15t \Rightarrow t^2 + 15t - 100 = 0$$
   Giải phương trình bậc 2 ta được: $t = 5 \text{ (s)}$ (nhận) và $t = -20 \text{ (loại)}$.
   Vị trí gặp nhau (cách A): $x = 5^2 = 25 \text{ (m)}$.
[/GIAI]

**Bài 7 (Nâng cao):** Một xe khách đang chạy với tốc độ $20 \text{ m/s}$ thì người lái xe thấy đèn đỏ ở ngã tư phía trước mặt cách $60 \text{ m}$. Anh ta phanh xe với gia tốc $-4 \text{ m/s}^2$. Cùng lúc đó, một người đi xe đạp đang ở vạch ngã tư đi ngược chiều về phía xe khách với tốc độ không đổi $5 \text{ m/s}$. Hỏi hai xe có gặp nhau không? Nếu có thì ở đâu?
[GIAI]
**Lời giải chi tiết:**
- Thời gian và quãng đường xe khách dừng hẳn: 
  $t_{dừng} = \frac{0 - 20}{-4} = 5 \text{ (s)}$.
  $s_{dừng} = \frac{0 - 20^2}{2(-4)} = 50 \text{ (m)}$.
- Nghĩa là xe khách dừng cách ngã tư $60 - 50 = 10 \text{ m}$. Xe khách KHÔNG vượt qua ngã tư.
- Phương trình cđ xe khách: $x_1 = 20t - 2t^2$ (chỉ đúng trong $t \le 5\text{s}$, sau đó $x_1 = 50\text{m}$).
- Phương trình cđ xe đạp (xuất phát từ 60m đi ngược về): $x_2 = 60 - 5t$.
- Xét trong giai đoạn $t \le 5$: Gặp nhau $\Leftrightarrow 20t - 2t^2 = 60 - 5t \Rightarrow 2t^2 - 25t + 60 = 0$.
  Tính $\Delta = 25^2 - 4\cdot 2\cdot 60 = 625 - 480 = 145 > 0$.
  $t = \frac{25 - \sqrt{145}}{4} \approx 3.24 \text{ (s)}$. (Nhận vì $< 5\text{s}$).
- Vị trí gặp nhau: $x_2 = 60 - 5(3.24) = 43.8 \text{ (m)}$ tính từ điểm phanh.
[/GIAI]

**Bài 8 (Nâng cao):** (Bẫy trễ thời gian). Xe A bắt đầu chuyển động nhanh dần đều từ O với gia tốc $2 \text{ m/s}^2$. $2 \text{ giây}$ sau, xe B cũng xuất phát từ O chuyển động nhanh dần đều cùng chiều với gia tốc $4 \text{ m/s}^2$. Tính khoảng cách giữa hai xe khi xe A đi được $5 \text{ giây}$.
[GIAI]
**Lời giải chi tiết:**
- Tại thời điểm $t = 5 \text{ s}$ của xe A:
  Quãng đường xe A: $s_A = \frac{1}{2} a_A t^2 = \frac{1}{2} \cdot 2 \cdot 5^2 = 25 \text{ (m)}$.
- Xe B xuất phát chậm hơn $2 \text{ s}$, nên thời gian xe B đi là $t_B = 5 - 2 = 3 \text{ (s)}$.
  Quãng đường xe B: $s_B = \frac{1}{2} a_B t_B^2 = \frac{1}{2} \cdot 4 \cdot 3^2 = 18 \text{ (m)}$.
- Khoảng cách hai xe: $d = |s_A - s_B| = |25 - 18| = 7 \text{ (m)}$.
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Đồ thị vận tốc – thời gian ($v-t$) của một chuyển động thẳng chậm dần đều (với $v_0 > 0$) có dạng là:
[A] Đường cong Parabol.
[B] Đường thẳng song song với trục hoành.
[*C] Đường thẳng dốc xuống.
[D] Đường thẳng dốc lên.
[/QUIZ]

[QUIZ]
Câu 10: Nếu một vật chuyển động với gia tốc $a = -2 \text{ m/s}^2$ và vận tốc tức thời $v = -10 \text{ m/s}$ thì vật đó đang:
[A] Chuyển động chậm dần đều theo chiều dương.
[B] Chuyển động chậm dần đều theo chiều âm.
[C] Chuyển động nhanh dần đều theo chiều dương.
[*D] Chuyển động nhanh dần đều theo chiều âm.
[/QUIZ]
        `
    },

    "PHY10-CH2-03": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương II: Động học",
        title: "Bài 3: Sự rơi tự do & Chuyển động ném thẳng đứng",
        theory: String.raw`
### 1. Sự rơi tự do
- Là chuyển động rơi CHỈ dưới tác dụng của trọng lực.
- Đặc điểm: Là CĐT Nhanh dần đều từ trạng thái nghỉ ($v_0 = 0$).
- **Gia tốc:** $a = g \approx 9.8 \text{ m/s}^2$ (hướng xuống).
- **Bộ công thức:**
  $$v = gt \quad ; \quad h = \frac{1}{2}gt^2 \quad ; \quad v^2 = 2gh \quad ; \quad t = \sqrt{\frac{2h}{g}}$$

### 2. Định lí tỉ lệ quãng đường Galileo
- Khi rơi tự do ($v_0 = 0$), quãng đường vật rơi trong các khoảng thời gian $\tau$ bằng nhau liên tiếp sẽ lập thành cấp số cộng:
  $h_1 : h_2 : h_3 : ... = 1 : 3 : 5 : ...$
  *(Ứng dụng để nhẩm nhanh quãng đường trong giây thứ n).*

---
### 3. 💎 Chuyên đề Master: Ném thẳng đứng (Lên & Xuống)
📌 **Ném thẳng đứng hướng xuống:**
- Có vận tốc đầu $\vec{v}_0$ cùng hướng với $\vec{g}$.
- Là CĐT Nhanh dần đều: $v = v_0 + gt$ và $h = v_0t + \frac{1}{2}gt^2$.

📌 **Ném thẳng đứng hướng lên:**
- Trọng lực ngược chiều ném. Chọn chiều dương hướng lên $\Rightarrow a = -g$.
- Là CĐT Chậm dần đều khi đi lên: $v = v_0 - gt \quad ; \quad y = v_0t - \frac{1}{2}gt^2$.
- **Độ cao cực đại:** Tại đỉnh, $v=0 \Rightarrow h_{\max} = \frac{v_0^2}{2g}$. Thời gian lên đỉnh: $t_{lên} = \frac{v_0}{g}$.
- **Tính đối xứng:** Thời gian rơi xuống đúng bằng thời gian bay lên. Vận tốc lúc chạm tay lại đúng bằng $v_0$ (ngược chiều). Tổng thời gian bay: $t_{tổng} = \frac{2v_0}{g}$.
        `,
        tips: String.raw`
- 💡 **Mẹo bài toán ném lên cao:** Dù vật đi lên hay rơi xuống, phương trình tọa độ $y = h_0 + v_0t - \frac{1}{2}gt^2$ **luôn đúng** cho cả quá trình nếu chọn gốc ở đất và chiều dương hướng lên. Khi vật chạm đất thì cho $y = 0$.
- ⚠️ **Lỗi sai:** Bài toán hòn đá thả xuống giếng, nghe tiếng vọng. Tổng thời gian $t = t_1 + t_2$, trong đó $t_1$ là thời gian đá rơi nhanh dần đều, $t_2$ là thời gian âm thanh truyền từ đáy giếng lên (CĐT thẳng đều với $v_{âm}$). Học sinh hay gộp chung 2 cái làm 1.
        `,
        practice: String.raw`
### Dạng 1: Công thức Rơi tự do cơ bản
**Bài 1 (Cơ bản):** Thả một hòn đá rơi tự do từ độ cao $80 \text{ m}$. Lấy $g = 10 \text{ m/s}^2$. 
a) Tính thời gian vật chạm đất.
b) Vận tốc ngay trước khi chạm đất.
[GIAI]
**Lời giải chi tiết:**
a) Thời gian rơi: $t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{160}{10}} = \sqrt{16} = 4 \text{ (s)}$.
b) Vận tốc chạm đất: $v = gt = 10 \cdot 4 = 40 \text{ (m/s)}$.
[/GIAI]

**Bài 2 (Vận dụng):** Từ độ cao $h$, thả vật rơi tự do. Sau $2 \text{ s}$ vật đạt vận tốc $20 \text{ m/s}$. Hỏi phải mất bao lâu để vật đạt vận tốc $50 \text{ m/s}$? Quãng đường rơi tương ứng là bao nhiêu? ($g=10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Thời gian để đạt $v = 50 \text{ m/s}$: $t' = \frac{v}{g} = \frac{50}{10} = 5 \text{ (s)}$.
- Quãng đường rơi trong 5s đó: $h' = \frac{1}{2}gt'^2 = 5 \cdot 5^2 = 125 \text{ (m)}$.
[/GIAI]

### Dạng 2: Quãng đường trong n giây cuối (Nâng cao)
**Bài 3 (Vận dụng cao):** Một vật rơi tự do. Trong $2 \text{ giây cuối cùng}$ trước khi chạm đất, nó rơi được đoạn đường $60 \text{ m}$. Tính độ cao thả vật. Lấy $g = 10 \text{ m/s}^2$.
[GIAI]
**Lời giải chi tiết:**
- Gọi $t$ là tổng thời gian rơi.
- Quãng đường đi trong $t$ giây: $h = \frac{1}{2}gt^2 = 5t^2$.
- Quãng đường đi trong $(t-2)$ giây đầu: $h_1 = \frac{1}{2}g(t-2)^2 = 5(t-2)^2$.
- Theo đề bài, đoạn cuối là hiệu hai quãng đường trên:
  $$\Delta h = h - h_1 = 60 \Rightarrow 5t^2 - 5(t-2)^2 = 60$$
  $$t^2 - (t^2 - 4t + 4) = 12 \Rightarrow 4t - 4 = 12 \Rightarrow 4t = 16 \Rightarrow t = 4 \text{ (s)}$$
- Độ cao thả vật: $h = 5 \cdot 4^2 = 80 \text{ (m)}$.
[/GIAI]

**Bài 4 (Nâng cao):** Một vật rơi tự do. Quãng đường vật rơi trong giây thứ 3 bằng một nửa quãng đường vật rơi trong giây cuối cùng. Tính thời gian rơi tổng cộng của vật. ($g=10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Quãng đường rơi trong giây thứ $n$: $\Delta h_n = 5n^2 - 5(n-1)^2 = 5(2n-1)$.
- Quãng đường trong giây thứ 3 ($n=3$): $\Delta h_3 = 5(2\cdot 3 - 1) = 25 \text{ (m)}$.
- Quãng đường trong giây cuối cùng (gọi là giây thứ $t$): $\Delta h_t = 5(2t-1)$.
- Theo đề bài: $\Delta h_3 = 0.5 \cdot \Delta h_t \Rightarrow 25 = 0.5 \cdot 5(2t-1) \Rightarrow 25 = 2.5(2t-1)$.
  $$10 = 2t - 1 \Rightarrow 2t = 11 \Rightarrow t = 5.5 \text{ (s)}$$
[/GIAI]

### Dạng 3: Ném thẳng đứng
**Bài 5 (Vận dụng):** Ném một vật thẳng đứng hướng xuống từ độ cao $20 \text{ m}$ với vận tốc ban đầu $15 \text{ m/s}$. ($g=10 \text{ m/s}^2$). Tính thời gian vật chạm đất.
[GIAI]
**Lời giải chi tiết:**
- Áp dụng phương trình: $h = v_0t + \frac{1}{2}gt^2$.
  $$20 = 15t + 5t^2 \Rightarrow 5t^2 + 15t - 20 = 0 \Rightarrow t^2 + 3t - 4 = 0$$
- Giải ra $t = 1 \text{ (s)}$ (nhận) và $t = -4 \text{ (loại)}$. Vật chạm đất sau 1 giây.
[/GIAI]

**Bài 6 (Vận dụng cao):** Từ mặt đất, bắn một mũi tên thẳng đứng lên cao với tốc độ $30 \text{ m/s}$. Bỏ qua lực cản không khí. $g = 10 \text{ m/s}^2$. 
a) Tính độ cao cực đại.
b) Tại thời điểm nào mũi tên ở độ cao $25 \text{ m}$?
[GIAI]
**Lời giải chi tiết:**
a) Độ cao cực đại: $h_{\max} = \frac{v_0^2}{2g} = \frac{30^2}{20} = 45 \text{ (m)}$.
b) Chọn chiều dương hướng lên, gốc tại đất. Phương trình tọa độ:
   $$y = v_0t - \frac{1}{2}gt^2 = 30t - 5t^2$$
   Khi ở độ cao $25 \text{ m}: 30t - 5t^2 = 25 \Rightarrow t^2 - 6t + 5 = 0$.
   Giải ra $t = 1 \text{ s}$ (lúc đi lên) và $t = 5 \text{ s}$ (lúc rơi xuống). 
[/GIAI]

**Bài 7 (Nâng cao):** Từ tầng 2 cao $10 \text{ m}$ so với mặt đất, một học sinh thả rơi tự do một quả bóng. Đúng lúc đó, học sinh đứng ở mặt đất ném một hòn đá thẳng lên với vận tốc $v_0$. Biết rằng hai vật đụng nhau tại độ cao $5 \text{ m}$. Tính $v_0$.
[GIAI]
**Lời giải chi tiết:**
- Chọn gốc tọa độ ở đất, chiều dương lên trên. 
- Pt tọa độ bóng thả rơi: $y_1 = h - \frac{1}{2}gt^2 = 10 - 5t^2$.
- Pt tọa độ hòn đá ném lên: $y_2 = v_0t - 5t^2$.
- Hai vật đụng nhau ở cao 5m:
  $y_1 = 5 \Rightarrow 10 - 5t^2 = 5 \Rightarrow 5t^2 = 5 \Rightarrow t = 1 \text{ (s)}$.
- Thay $t=1$ vào $y_2$:
  $y_2 = 5 \Rightarrow v_0(1) - 5(1)^2 = 5 \Rightarrow v_0 = 10 \text{ (m/s)}$.
[/GIAI]

### Dạng 4: Bài toán Âm thanh (Vang vọng)
**Bài 8 (Nâng cao):** Một người thả hòn đá xuống một cái giếng sâu cạn nước. Sau $3.13 \text{ s}$, người đó nghe thấy tiếng đá đập vào đáy giếng. Biết tốc độ truyền âm trong không khí là $340 \text{ m/s}$ và $g = 10 \text{ m/s}^2$. Tính độ sâu của giếng.
[GIAI]
**Lời giải chi tiết:**
- Gọi $h$ là độ sâu của giếng.
- Thời gian đá rơi tự do xuống đáy giếng: $t_1 = \sqrt{\frac{2h}{g}} = \sqrt{0.2h}$.
- Thời gian âm thanh từ đáy truyền lên miệng giếng (thẳng đều): $t_2 = \frac{h}{v_{âm}} = \frac{h}{340}$.
- Tổng thời gian: $t_1 + t_2 = 3.13$.
  $$\sqrt{0.2h} + \frac{h}{340} = 3.13$$
- Đặt $x = \sqrt{h} \Rightarrow 0.2h = 0.2x^2$. Ta có phương trình:
  $\frac{1}{340}x^2 + \sqrt{0.2}x - 3.13 = 0$.
  Bấm máy tính, nghiệm hợp lý là $x \approx 6.7 \Rightarrow h = x^2 \approx 45 \text{ (m)}$.
  (Thử lại: Đá rơi 45m mất 3s, âm thanh truyền 45m lên mất 45/340 = 0.13s $\Rightarrow$ Tổng đúng bằng 3.13s).
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Trong sự rơi tự do, điều nào sau đây là đúng?
[A] Vật nặng rơi nhanh hơn vật nhẹ.
[*B] Mọi vật (dù nặng nhẹ) đều rơi với cùng một gia tốc.
[C] Gia tốc rơi tăng dần theo thời gian.
[D] Quãng đường rơi tỉ lệ thuận với thời gian rơi.
[/QUIZ]

[QUIZ]
Câu 10: Thả 2 vật từ cùng một độ cao, vật 1 rơi tự do, vật 2 được ném thẳng đứng xuống dưới. Bỏ qua cản không khí. Nhận định nào sau đây ĐÚNG?
[A] Hai vật chạm đất cùng lúc.
[B] Gia tốc của vật 2 lớn hơn gia tốc của vật 1.
[*C] Vật 2 chạm đất trước và có vận tốc chạm đất lớn hơn.
[D] Hai vật có vận tốc chạm đất bằng nhau.
[/QUIZ]
        `
    },

    "PHY10-CH2-04": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương II: Động học",
        title: "Bài 4: Chuyển động ném ngang & Ném xiên nâng cao",
        theory: String.raw`
### 1. Phân tích nguyên lí độc lập chuyển động
- Bất kì chuyển động cong nào trong trọng trường (ném ngang, ném xiên) đều có thể được phân tích thành 2 chuyển động độc lập chiếu trên hệ trục tọa độ vuông góc $Oxy$:
  + **Trục ngang ($Ox$):** Không có ngoại lực (bỏ qua cản KK) $\Rightarrow$ Gia tốc $a_x = 0$. Chuyển động thẳng đều $v_x = v_{0x} = \text{const}$.
  + **Trục dọc ($Oy$):** Chịu tác dụng trọng lực $\vec{P} \Rightarrow a_y = g$ (rơi tự do hoặc ném lên).

### 2. Chuyển động ném ngang
- $v_{0x} = v_0$; $v_{0y} = 0$.
- **Tọa độ:** $x = v_0t \quad ; \quad y = \frac{1}{2}gt^2$.
- **Phương trình quỹ đạo:** Khử $t \Rightarrow y = \frac{g}{2v_0^2}x^2$ (Parabol).
- **Thời gian bay:** $t = \sqrt{\frac{2h}{g}}$ (Chỉ phụ thuộc $h$, không phụ thuộc $v_0$).
- **Tầm xa:** $L = x_{\max} = v_0\sqrt{\frac{2h}{g}}$.

---
### 3. 💎 Chuyên đề Master: Chuyển động ném xiên góc $\alpha$
- Ném từ mặt đất ($y_0 = 0$) với vận tốc $\vec{v}_0$ hợp với ngang góc $\alpha$.
- **Phân tích:** $v_{0x} = v_0\cos\alpha \quad ; \quad v_{0y} = v_0\sin\alpha$.
- **Phương trình:** 
  + $x = (v_0\cos\alpha)t \Rightarrow t = \frac{x}{v_0\cos\alpha}$.
  + CĐT hướng lên (chiều dương lên trên, $a_y = -g$): $y = (v_0\sin\alpha)t - \frac{1}{2}gt^2$.
- **Phương trình quỹ đạo:** 
  $$y = (\tan\alpha)x - \frac{g}{2v_0^2\cos^2\alpha}x^2$$
- **Độ cao cực đại ($H$):** (Khi $v_y = 0$)
  $$H = \frac{v_{0y}^2}{2g} = \frac{v_0^2\sin^2\alpha}{2g}$$
- **Tầm bay xa ($L$):** (Khi $y = 0$)
  $$L = x_{\max} = \frac{v_0^2\sin(2\alpha)}{g}$$
- **Bí kíp:** Để có tầm xa lớn nhất với cùng một $v_0$, góc ném phải là $\alpha = 45^\circ$ (vì $\sin(90^\circ) = 1$). Hai góc phụ nhau ($\alpha$ và $90^\circ - \alpha$) sẽ cho cùng một tầm xa $L$.
        `,
        tips: String.raw`
- 💡 **Mẹo tính vận tốc chạm đất:** Dù là ném ngang hay ném xiên, thay vì dùng Pytago rất dài $v = \sqrt{v_x^2 + v_y^2}$, hãy dùng Bảo toàn cơ năng: $\frac{1}{2}mv_0^2 + mgh = \frac{1}{2}mv^2 \Rightarrow v = \sqrt{v_0^2 + 2gh}$. Nó cực kỳ nhanh!
- ⚠️ **Lỗi sai:** Khi ném xiên từ độ cao $h$ (không phải từ đất). Công thức $L = \frac{v_0^2\sin 2\alpha}{g}$ KHÔNG CÒN ĐÚNG. Lúc này phải giải phương trình bậc hai $y = h$ (nếu chọn gốc ở đất) hoặc $y = -h$ (nếu chọn gốc ở vị trí ném).
        `,
        practice: String.raw`
### Dạng 1: Chuyển động ném ngang cơ bản
**Bài 1 (Cơ bản):** Từ đỉnh tháp cao $45 \text{ m}$, ném ngang một hòn đá với vận tốc $20 \text{ m/s}$. Bỏ qua lực cản KK, $g=10 \text{ m/s}^2$. Tính tầm xa của hòn đá và vận tốc của nó lúc chạm đất.
[GIAI]
**Lời giải chi tiết:**
- Thời gian chạm đất (như rơi tự do): $t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{90}{10}} = 3 \text{ (s)}$.
- Tầm xa: $L = v_0 \cdot t = 20 \cdot 3 = 60 \text{ (m)}$.
- Vận tốc chạm đất (Dùng công thức cơ năng hoặc tổng hợp vec-tơ):
  $v_x = v_0 = 20 \text{ m/s}$. $v_y = gt = 30 \text{ m/s}$.
  $v = \sqrt{v_x^2 + v_y^2} = \sqrt{400 + 900} = \sqrt{1300} \approx 36 \text{ (m/s)}$.
[/GIAI]

**Bài 2 (Vận dụng):** Một máy bay đang bay ngang với tốc độ $200 \text{ m/s}$ ở độ cao $2000 \text{ m}$ thì thả một thùng hàng cứu trợ. Biết tâm mục tiêu nằm trên mặt đất. Hỏi phi công phải thả hàng khi máy bay cách mục tiêu bao xa theo phương ngang?
[GIAI]
**Lời giải chi tiết:**
- Hàng cứu trợ khi được thả có vận tốc đầu bằng vận tốc máy bay (ném ngang $v_0 = 200$).
- Thời gian rơi: $t = \sqrt{\frac{2h}{g}} = \sqrt{\frac{4000}{10}} = 20 \text{ (s)}$.
- Tầm xa hàng bị trượt đi theo phương ngang: $L = v_0 t = 200 \cdot 20 = 4000 \text{ (m)} = 4 \text{ km}$.
- Phi công phải thả trước khi đến mục tiêu $4 \text{ km}$.
[/GIAI]

### Dạng 2: Góc ném và Quỹ đạo ném ngang
**Bài 3 (Vận dụng cao):** Một vật được ném ngang từ độ cao $h$. Tại thời điểm vật chạm đất, vectơ vận tốc hợp với mặt đất một góc $45^\circ$. Biết tầm xa của vật là $40 \text{ m}$. Tính độ cao $h$. ($g=10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Góc chạm đất $45^\circ \Rightarrow \tan 45^\circ = \frac{v_y}{v_x} \Rightarrow \frac{v_y}{v_x} = 1 \Rightarrow v_y = v_x$.
- Mà $v_x = v_0$ và $v_y = gt$. Suy ra $v_0 = gt$.
- Mặt khác, tầm xa $L = v_0 t = 40 \Rightarrow (gt) \cdot t = 40 \Rightarrow 10t^2 = 40 \Rightarrow t = 2 \text{ (s)}$.
- Độ cao $h = \frac{1}{2}gt^2 = 5 \cdot 2^2 = 20 \text{ (m)}$.
[/GIAI]

**Bài 4 (Nâng cao):** Ném viên bi thứ nhất theo phương ngang. Sau đó $1\text{s}$, ném viên bi thứ hai cũng theo phương ngang với cùng vận tốc $v_0$ từ cùng một vị trí. Hỏi quỹ đạo tương đối của bi 2 so với bi 1 có hình gì?
[GIAI]
**Lời giải chi tiết:**
- Phương trình cđ bi 1: $x_1 = v_0t; y_1 = 0.5gt^2$.
- Phương trình cđ bi 2: $x_2 = v_0(t-1); y_2 = 0.5g(t-1)^2$. (Xét $t > 1$).
- Tọa độ tương đối của bi 2 đối với bi 1:
  $\Delta x = x_2 - x_1 = -v_0 = \text{const}$.
  $\Delta y = y_2 - y_1 = 0.5g(t^2 - 2t + 1) - 0.5gt^2 = 0.5g - gt$.
- Vì $\Delta x$ là hằng số, quỹ đạo tương đối là một đường thẳng đứng trượt xuống dưới với vận tốc $g$.
[/GIAI]

### Dạng 3: Ném xiên từ mặt đất
**Bài 5 (Vận dụng):** Một cầu thủ sút quả bóng với vận tốc ban đầu $25 \text{ m/s}$ hợp với mặt sân một góc $30^\circ$. Tính:
a) Độ cao cực đại mà bóng đạt được.
b) Tầm xa bóng bay được (từ lúc sút đến khi chạm sân).
[GIAI]
**Lời giải chi tiết:**
a) Độ cao cực đại:
   $$H = \frac{v_0^2\sin^2\alpha}{2g} = \frac{25^2 \cdot (\sin 30^\circ)^2}{20} = \frac{625 \cdot 0.25}{20} = 7.8125 \text{ (m)}$$
b) Tầm bay xa:
   $$L = \frac{v_0^2\sin(2\alpha)}{g} = \frac{25^2 \cdot \sin 60^\circ}{10} = 62.5 \cdot \frac{\sqrt{3}}{2} \approx 54.1 \text{ (m)}$$
[/GIAI]

**Bài 6 (Vận dụng cao):** Một khẩu pháo đồ chơi bắn ra viên đạn với $v_0 = 10 \text{ m/s}$. Hỏi phải đặt nghiêng nòng pháo một góc bao nhiêu để đạn trúng hồng tâm cách đó $10 \text{ m}$ (cùng mặt phẳng ngang). Lấy $g = 10 \text{ m/s}^2$.
[GIAI]
**Lời giải chi tiết:**
- Yêu cầu bài toán là Tầm xa $L = 10 \text{ m}$.
- Áp dụng công thức: $L = \frac{v_0^2\sin 2\alpha}{g} \Rightarrow 10 = \frac{100 \cdot \sin 2\alpha}{10}$.
- $\Rightarrow 10 = 10 \cdot \sin 2\alpha \Rightarrow \sin 2\alpha = 1 \Rightarrow 2\alpha = 90^\circ \Rightarrow \alpha = 45^\circ$.
- Vậy phải đặt nòng pháo nghiêng $45^\circ$.
[/GIAI]

### Dạng 4: Ném xiên từ độ cao h (Nâng cao)
**Bài 7 (Nâng cao):** Một vận động viên đẩy tạ đứng trên bục. Tạ rời tay ở độ cao $2 \text{ m}$ so với mặt đất, với vận tốc $10 \text{ m/s}$ theo hướng tạo với phương ngang góc $45^\circ$. Tính tầm xa từ chân bục đến điểm chạm đất. ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Chọn gốc $O$ tại mặt đất dưới bục. Tọa độ đầu: $x_0=0, y_0=2$. Chiều dương hướng lên.
- Phân tích vận tốc: $v_{0x} = 10\cos 45^\circ = 5\sqrt{2}$; $v_{0y} = 10\sin 45^\circ = 5\sqrt{2}$.
- Pt tọa độ: $y = 2 + 5\sqrt{2}t - 5t^2$.
- Chạm đất $\Rightarrow y = 0 \Rightarrow 5t^2 - 5\sqrt{2}t - 2 = 0$.
  Giải phương trình: $\Delta = 50 - 4(5)(-2) = 90$.
  $t = \frac{5\sqrt{2} + \sqrt{90}}{10} = \frac{5\sqrt{2} + 3\sqrt{10}}{10} \approx \frac{7.07 + 9.49}{10} = 1.656 \text{ (s)}$. (Chỉ lấy $t > 0$).
- Tầm xa: $L = x = (5\sqrt{2}) \cdot t \approx 7.07 \cdot 1.656 \approx 11.7 \text{ (m)}$.
[/GIAI]

**Bài 8 (Nâng cao):** Một vòi nước phun xiên góc $60^\circ$ lên không trung. Dòng nước vượt qua được một bức tường cao $3 \text{ m}$ cách vòi $4 \text{ m}$ (sạt qua mép trên bức tường). Bỏ qua sức cản. Tính tốc độ phun nước ban đầu $v_0$.
[GIAI]
**Lời giải chi tiết:**
- Quỹ đạo của dòng nước đi qua điểm $M(x=4, y=3)$.
- Thay vào phương trình quỹ đạo ném xiên:
  $$y = x\tan\alpha - \frac{g}{2v_0^2\cos^2\alpha}x^2$$
  $$3 = 4\tan 60^\circ - \frac{10}{2v_0^2 (\cos 60^\circ)^2} \cdot 4^2$$
  $$3 = 4\sqrt{3} - \frac{10}{2v_0^2 \cdot 0.25} \cdot 16 \Rightarrow 3 = 4\sqrt{3} - \frac{10}{0.5v_0^2} \cdot 16$$
  $$3 \approx 6.928 - \frac{320}{v_0^2} \Rightarrow \frac{320}{v_0^2} = 3.928 \Rightarrow v_0^2 = \frac{320}{3.928} \approx 81.46$$
  $$\Rightarrow v_0 \approx 9.02 \text{ (m/s)}$$
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Trong chuyển động ném ngang, thời gian rơi của vật phụ thuộc vào yếu tố nào?
[A] Vận tốc ném ban đầu.
[*B] Độ cao ban đầu.
[C] Khối lượng của vật.
[D] Góc ném ban đầu.
[/QUIZ]

[QUIZ]
Câu 10: Hai vật được ném xiên từ mặt đất với cùng tốc độ đầu $v_0$. Vật 1 ném góc $30^\circ$, vật 2 ném góc $60^\circ$. Bỏ qua cản không khí. Nhận định nào ĐÚNG?
[A] Vật 1 bay xa hơn vật 2.
[B] Vật 2 bay xa hơn vật 1.
[*C] Cả hai vật bay xa bằng nhau nhưng vật 2 lên cao hơn.
[D] Cả hai vật bay xa bằng nhau và lên cao bằng nhau.
[/QUIZ]
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DB_PHY_10_CH2_MASTER;
}