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