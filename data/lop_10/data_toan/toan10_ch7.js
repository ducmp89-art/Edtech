/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương VII: Phương pháp tọa độ trong mặt phẳng
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
   ========================================================================== */

const DATA_TOAN10_CH7 = {
    "MATH10-CH7-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
        title: "Bài 1: Phương trình đường thẳng & Vị trí tương đối",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương VII", "Bài 1"],
        theory: `
### 1. Vectơ chỉ phương (VCP) và Vectơ pháp tuyến (VPT)
- **Vectơ chỉ phương $\vec{u}$:** Là vectơ khác $\vec{0}$, có giá song song hoặc trùng với đường thẳng.
- **Vectơ pháp tuyến $\vec{n}$:** Là vectơ khác $\vec{0}$, có giá vuông góc với đường thẳng.
- Nếu đường thẳng có VCP $\vec{u} = (a; b)$ thì có VPT $\vec{n} = (-b; a)$ hoặc $(b; -a)$.

### 2. Các dạng phương trình đường thẳng
- **Phương trình tham số:** Đi qua $M(x_0; y_0)$ và có VCP $\vec{u} = (a; b)$.
  $\begin{cases} x = x_0 + at \\ y = y_0 + bt \end{cases}$ ($t \in \mathbb{R}$)
- **Phương trình tổng quát:** Đi qua $M(x_0; y_0)$ và có VPT $\vec{n} = (A; B)$.
  $A(x - x_0) + B(y - y_0) = 0 \Leftrightarrow Ax + By + C = 0$.

### 3. Vị trí tương đối, Góc và Khoảng cách
- **Khoảng cách từ $M(x_0; y_0)$ đến $\Delta: Ax+By+C=0$:** $d(M, \Delta) = \frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}$.
- **Góc giữa hai đường thẳng:** Tính thông qua cosin góc giữa 2 VPT (hoặc 2 VCP).
  $\cos \alpha = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}| \cdot |\vec{n_2}|}$. (Lưu ý: Góc giữa 2 đường thẳng luôn $\le 90^\circ$).

---

### 4. 💎 Chuyên đề Master: Cực trị Hình học & Chùm đường thẳng (VDC)
📌 **Bài toán tìm điểm $M \in \Delta$ sao cho $MA + MB$ nhỏ nhất:**
- **Bước 1:** Xét vị trí tương đối của $A, B$ so với đường thẳng $\Delta$. (Thay tọa độ A, B vào phương trình $\Delta$ rồi nhân với nhau. Nếu $> 0$ là cùng phía, $< 0$ là khác phía).
- **Bước 2:** 
  + Nếu $A, B$ **khác phía** so với $\Delta$: $MA + MB \ge AB$. Dấu "=" khi $M$ là giao điểm của $AB$ và $\Delta$.
  + Nếu $A, B$ **cùng phía** so với $\Delta$: Lấy $A'$ đối xứng với $A$ qua $\Delta$. Khi đó $MA + MB = MA' + MB \ge A'B$. Dấu "=" khi $M$ là giao điểm của $A'B$ và $\Delta$.

📌 **Bài toán tìm điểm $M \in \Delta$ sao cho $|MA - MB|$ lớn nhất:**
- **Bước 1:** Xét vị trí tương đối của $A, B$.
- **Bước 2:**
  + Nếu $A, B$ **cùng phía**: $|MA - MB| \le AB$. Dấu "=" khi $M$ là giao của đường thẳng $AB$ và $\Delta$.
  + Nếu $A, B$ **khác phía**: Lấy đối xứng $A'$ qua $\Delta$. Khi đó $|MA - MB| = |MA' - MB| \le A'B$.
        `,
        tips: `
- 💡 **Mẹo tính nhanh hệ số góc:** Đường thẳng $Ax + By + C = 0$ có hệ số góc $k = -\frac{A}{B}$. Hai đường thẳng vuông góc khi $k_1 \cdot k_2 = -1$.
- 💡 **Khoảng cách 2 đường thẳng song song:** $d_1: Ax+By+C_1=0$ và $d_2: Ax+By+C_2=0$ (chú ý A, B phải giống hệt nhau). Công thức nhanh: $d(d_1, d_2) = \frac{|C_1 - C_2|}{\sqrt{A^2 + B^2}}$.
- ⚠️ **Bẫy VDC (Khoảng cách chứa tham số):** Khi giải phương trình khoảng cách chứa dấu giá trị tuyệt đối $|A(m)| = B$, học sinh hay quên xét điều kiện $B \ge 0$ trước khi bung $|A(m)| = \pm B$.
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Viết PT tổng quát của đường thẳng đi qua 2 điểm $A(1; -2)$ và $B(3; 4)$.
* **Lời giải:**
  - $\vec{AB} = (2; 6)$. Chọn VCP $\vec{u} = (1; 3) \Rightarrow$ VPT $\vec{n} = (3; -1)$.
  - PT tổng quát đi qua $A(1; -2)$: $3(x - 1) - 1(y + 2) = 0 \Leftrightarrow 3x - y - 5 = 0$.

**Bài 2 (Cơ bản):** Tính góc giữa hai đường thẳng $d_1: x - 2y + 1 = 0$ và $d_2: 3x - y - 5 = 0$.
* **Lời giải:**
  - $\vec{n_1} = (1; -2), \vec{n_2} = (3; -1)$.
  - $\cos \alpha = \frac{|1(3) + (-2)(-1)|}{\sqrt{1^2+(-2)^2}\sqrt{3^2+(-1)^2}} = \frac{|3+2|}{\sqrt{5}\sqrt{10}} = \frac{5}{\sqrt{50}} = \frac{1}{\sqrt{2}}$.
  - Vậy $\alpha = 45^\circ$.

**Bài 3 (Vận dụng):** Tìm hình chiếu vuông góc $H$ của điểm $M(1; 5)$ lên đường thẳng $d: x - 2y + 4 = 0$.
* **Lời giải:**
  - Viết PT đường thẳng $\Delta$ qua $M$ và vuông góc với $d$. $\Delta$ nhận VCP của $d$ là $\vec{u} = (2; 1)$ làm VPT.
  - PT $\Delta: 2(x - 1) + 1(y - 5) = 0 \Leftrightarrow 2x + y - 7 = 0$.
  - Tọa độ H là nghiệm hệ $\begin{cases} x - 2y = -4 \\ 2x + y = 7 \end{cases} \Rightarrow \begin{cases} x = 2 \\ y = 3 \end{cases}$. Vậy $H(2; 3)$.

**Bài 4 (Vận dụng):** Viết PT đường phân giác của góc tạo bởi hai đường thẳng $d_1: 3x - 4y + 1 = 0$ và $d_2: 4x + 3y - 5 = 0$.
* **Lời giải:**
  - Gọi $M(x;y)$ thuộc đường phân giác $\Rightarrow d(M, d_1) = d(M, d_2)$.
  - $\frac{|3x - 4y + 1|}{\sqrt{3^2 + 4^2}} = \frac{|4x + 3y - 5|}{\sqrt{4^2 + 3^2}}$
  - $\Leftrightarrow |3x - 4y + 1| = |4x + 3y - 5|$.
  - TH1: $3x - 4y + 1 = 4x + 3y - 5 \Leftrightarrow x + 7y - 6 = 0$.
  - TH2: $3x - 4y + 1 = -(4x + 3y - 5) \Leftrightarrow 7x - y - 4 = 0$.

**Bài 5 (Vận dụng cao):** Tìm tọa độ điểm $M \in d: x - y = 0$ sao cho khoảng cách từ $M$ đến $\Delta: 3x - 4y + 1 = 0$ bằng 2.
* **Lời giải:**
  - $M \in d \Rightarrow M(m; m)$.
  - Khoảng cách: $d(M, \Delta) = \frac{|3m - 4m + 1|}{5} = 2$.
  - $\Leftrightarrow |-m + 1| = 10 \Leftrightarrow -m + 1 = 10$ hoặc $-m + 1 = -10$.
  - Suy ra $m = -9$ hoặc $m = 11$. Vậy có 2 điểm: $M_1(-9; -9)$ và $M_2(11; 11)$.

**Bài 6 (Vận dụng cao):** Cho hai điểm $A(1; 2)$ và $B(3; 4)$. Tìm $M$ trên trục $Ox$ để $MA + MB$ nhỏ nhất.
* **Lời giải:**
  - $y_A \cdot y_B = 2 \times 4 = 8 > 0 \Rightarrow A, B$ cùng phía so với $Ox$.
  - Lấy $A'$ đối xứng với $A$ qua $Ox \Rightarrow A'(1; -2)$.
  - Đường thẳng $A'B$ qua $A'(1; -2)$, có VCP $\vec{A'B} = (2; 6) \Rightarrow \vec{n} = (3; -1)$.
  - PT $A'B: 3(x - 1) - (y + 2) = 0 \Leftrightarrow 3x - y - 5 = 0$.
  - $M$ là giao $A'B$ và $Ox (y=0) \Rightarrow 3x - 5 = 0 \Rightarrow x = 5/3$. $M(5/3; 0)$.

**Bài 7 (Vận dụng cao):** Viết PT đường thẳng $d$ đi qua $A(2; 1)$ và tạo với đường thẳng $\Delta: 2x - y + 5 = 0$ một góc $45^\circ$.
* **Lời giải:**
  - Gọi VPT của $d$ là $\vec{n} = (a; b)$ ($a^2+b^2>0$). VPT của $\Delta$ là $\vec{m} = (2; -1)$.
  - $\cos 45^\circ = \frac{|2a - b|}{\sqrt{a^2+b^2}\sqrt{5}} = \frac{1}{\sqrt{2}}$.
  - $\Leftrightarrow \sqrt{2}|2a - b| = \sqrt{5(a^2+b^2)} \Leftrightarrow 2(4a^2 - 4ab + b^2) = 5a^2 + 5b^2$.
  - $\Leftrightarrow 3a^2 - 8ab - 3b^2 = 0$.
  - Chọn $b=1 \Rightarrow 3a^2 - 8a - 3 = 0 \Rightarrow a = 3$ hoặc $a = -1/3$.
  - Có 2 đường thẳng: $3(x-2)+1(y-1)=0$ và $-1(x-2)+3(y-1)=0$.

**Bài 8 (Vận dụng cao):** Tìm $m$ để hai đường thẳng $d_1: (m-1)x + 2y - 3 = 0$ và $d_2: x + (m)y - 2 = 0$ song song.
* **Lời giải:**
  - ĐK song song: $\frac{m-1}{1} = \frac{2}{m} \neq \frac{-3}{-2}$.
  - Từ PT đầu: $m(m-1) = 2 \Leftrightarrow m^2 - m - 2 = 0 \Rightarrow m=2$ hoặc $m=-1$.
  - Kiểm tra điều kiện $\neq \frac{3}{2}$: Cả $m=2$ (tỉ số = 1) và $m=-1$ (tỉ số = -2) đều khác $1.5$.
  - Kết luận: $m=2$ hoặc $m=-1$.

**Bài 9 (Vận dụng cao):** Tìm $M \in d: 2x + y - 4 = 0$ sao cho $|MA - MB|$ lớn nhất, với $A(1; 1), B(4; 5)$.
* **Lời giải:**
  - Thay tọa độ $A, B$ vào $d$: $f(A) = 2+1-4 = -1$. $f(B) = 8+5-4 = 9$.
  - $f(A)f(B) < 0 \Rightarrow A, B$ khác phía so với $d$.
  - Lấy $A'$ đối xứng $A$ qua $d$. $|MA - MB| = |MA' - MB| \le A'B$.
  - Max đạt được khi $A', M, B$ thẳng hàng $\Rightarrow M$ là giao của đường thẳng $AB$ và $d$.
  - PT $AB$: $4x - 3y - 1 = 0$.
  - Tọa độ $M$ là nghiệm hệ $\begin{cases} 2x + y = 4 \\ 4x - 3y = 1 \end{cases} \Rightarrow M(1.3; 1.4)$.

**Bài 10 (Vận dụng cao):** Viết phương trình đường thẳng qua $P(1; 2)$ và cắt các tia $Ox, Oy$ tại $A, B$ sao cho tam giác $OAB$ có diện tích nhỏ nhất.
* **Lời giải:**
  - PT đường thẳng theo đoạn chắn: $\frac{x}{a} + \frac{y}{b} = 1$ ($a, b > 0$).
  - Đi qua $P(1; 2) \Rightarrow \frac{1}{a} + \frac{2}{b} = 1$.
  - Theo BĐT AM-GM: $1 = \frac{1}{a} + \frac{2}{b} \ge 2\sqrt{\frac{2}{ab}} \Rightarrow 1 \ge \frac{8}{ab} \Rightarrow ab \ge 8$.
  - $S_{OAB} = \frac{1}{2}ab \ge 4$.
  - Dấu "=" khi $\frac{1}{a} = \frac{2}{b} = \frac{1}{2} \Rightarrow a = 2, b = 4$.
  - PT cần tìm: $\frac{x}{2} + \frac{y}{4} = 1 \Leftrightarrow 2x + y - 4 = 0$.
        `
    },

    "MATH10-CH7-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
        title: "Bài 2: Đường tròn & Ba đường Conic (Elip, Hipebol, Parabol)",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương VII", "Bài 2"],
        theory: `
### 1. Phương trình Đường tròn & Tiếp tuyến
📌 **Hai dạng PT Đường tròn:**
- Dạng chính tắc (Biết tâm $I(a; b)$ và bán kính $R$): 
  $$(x - a)^2 + (y - b)^2 = R^2$$
- Dạng tổng quát: $x^2 + y^2 - 2ax - 2by + c = 0$. 
  ĐK để là đường tròn: $a^2 + b^2 - c > 0$. Khi đó tâm $I(a; b)$, $R = \sqrt{a^2 + b^2 - c}$.

📌 **Tiếp tuyến của đường tròn:**
- Tiếp tuyến tại điểm $M(x_0; y_0)$ thuộc đường tròn có VPT chính là $\vec{IM}$.
- Điều kiện tiếp xúc: Đường thẳng $\Delta$ là tiếp tuyến của $(C)$ tâm $I$, bán kính $R$ $\Leftrightarrow d(I, \Delta) = R$.

---

### 2. Ba đường Conic
📌 **Elip (E):**
- $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ với $a > b > 0$.
- Hệ thức: **$a^2 = b^2 + c^2$**.
- Tiêu cự: $2c$. Trục lớn: $2a$. Trục nhỏ: $2b$. Tâm sai: $e = \frac{c}{a} < 1$.

📌 **Hipebol (H):**
- $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$ với $a > 0, b > 0$.
- Hệ thức: **$c^2 = a^2 + b^2$**.
- Tâm sai $e = \frac{c}{a} > 1$.

📌 **Parabol (P):**
- Dạng chính tắc: $y^2 = 2px$ ($p > 0$).
- Tiêu điểm $F\left(\frac{p}{2}; 0\right)$. Đường chuẩn $\Delta: x = -\frac{p}{2}$. Tâm sai $e=1$.

---

### 3. 💎 Chuyên đề Master: Tương giao & Tính chất Quang học (VDC)
📌 **Tương giao của đường thẳng và đường tròn:**
- Gọi $d$ là khoảng cách từ tâm $I$ đến đường thẳng $\Delta$.
  - Nếu $d > R$: Không giao nhau.
  - Nếu $d = R$: Tiếp xúc (Đường thẳng là tiếp tuyến).
  - Nếu $d < R$: Cắt tại 2 điểm $A, B$. Khi đó **độ dài dây cung** được tính bằng Pytago: $AB = 2\sqrt{R^2 - d^2}$.
- Để dây cung AB **ngắn nhất**, thì khoảng cách $d$ phải **lớn nhất**.

📌 **Tính chất quang học của Elip & Parabol:**
- Mọi tia sáng phát ra từ tiêu điểm $F_1$ của Elip, sau khi phản xạ tại vành Elip sẽ hội tụ chính xác tại tiêu điểm $F_2$.
- Mọi tia sáng phát ra từ tiêu điểm $F$ của Parabol, sau khi phản xạ sẽ tạo thành chùm tia song song với trục đối xứng. (Ứng dụng: Đèn pha ô tô, chảo ăng-ten).
        `,
        tips: `
- 💡 **Mẹo tính nhanh tiếp tuyến đi qua điểm:** Dùng điều kiện $d(I, \Delta) = R$ để lập phương trình đẳng cấp theo $A, B$ của đường thẳng. Nếu giải chỉ ra 1 nghiệm, coi chừng đường thẳng song song với trục $Oy$ (trường hợp $B=0$).
- ⚠️ **Bẫy VDC (Tâm sai Elip):** Rất dễ nhầm lẫn giữa hệ thức $c^2$ của Elip và Hipebol. Nhớ kỹ: Elip là $a^2 - b^2$, Hipebol là $a^2 + b^2$.
- 🚀 **Thủ thuật Master:** Phương trình tiếp tuyến của $(E)$ tại điểm $M(x_0; y_0)$ thuộc Elip có dạng "phân đôi tọa độ": $\frac{x \cdot x_0}{a^2} + \frac{y \cdot y_0}{b^2} = 1$.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Tìm tâm và bán kính của đường tròn $(C): x^2 + y^2 - 4x + 6y - 3 = 0$.
* **Lời giải:**
  - Ta có: $-2a = -4 \Rightarrow a = 2$.
  - $-2b = 6 \Rightarrow b = -3$.
  - Tâm $I(2; -3)$.
  - Bán kính $R = \sqrt{a^2 + b^2 - c} = \sqrt{2^2 + (-3)^2 - (-3)} = \sqrt{4 + 9 + 3} = \sqrt{16} = 4$.

**Bài 2 (Cơ bản):** Xác định tiêu cự, độ dài các trục và tâm sai của Elip $(E): \frac{x^2}{25} + \frac{y^2}{16} = 1$.
* **Lời giải:**
  - Ta có $a^2 = 25 \Rightarrow a = 5$ (Trục lớn $2a = 10$).
  - $b^2 = 16 \Rightarrow b = 4$ (Trục nhỏ $2b = 8$).
  - $c^2 = a^2 - b^2 = 25 - 16 = 9 \Rightarrow c = 3$. Tiêu cự $2c = 6$.
  - Tâm sai $e = \frac{c}{a} = \frac{3}{5}$.

**Bài 3 (Vận dụng):** Lập phương trình tiếp tuyến của đường tròn $(C): (x-1)^2 + (y+2)^2 = 25$ tại điểm $M(4; 2)$ nằm trên đường tròn.
* **Lời giải:**
  - Tâm đường tròn là $I(1; -2)$.
  - Kiểm tra lại: $(4-1)^2 + (2+2)^2 = 3^2 + 4^2 = 25$. Điểm $M$ đúng là thuộc $(C)$.
  - Tiếp tuyến tại $M$ nhận vectơ $\vec{IM} = (4 - 1; 2 - (-2)) = (3; 4)$ làm vectơ pháp tuyến.
  - Phương trình tiếp tuyến đi qua $M(4; 2)$ có VPT $\vec{n} = (3; 4)$:
    $3(x - 4) + 4(y - 2) = 0 \Leftrightarrow 3x + 4y - 20 = 0$.

**Bài 4 (Vận dụng cao):** Lập phương trình các tiếp tuyến kẻ từ điểm $A(3; 0)$ đến đường tròn $(C): (x-1)^2 + (y-2)^2 = 4$.
* **Lời giải:**
  - Đường tròn $(C)$ có tâm $I(1; 2)$ và bán kính $R = 2$.
  - Gọi $\Delta$ là tiếp tuyến qua $A(3; 0)$, $\Delta$ có dạng: $a(x-3) + b(y-0) = 0 \Leftrightarrow ax + by - 3a = 0$ ($a^2+b^2 > 0$).
  - Vì $\Delta$ tiếp xúc với $(C)$ nên $d(I, \Delta) = R$:
    $\frac{|a(1) + b(2) - 3a|}{\sqrt{a^2 + b^2}} = 2 \Leftrightarrow \frac{|-2a + 2b|}{\sqrt{a^2 + b^2}} = 2$
  - Chia 2 vế cho 2: $\frac{|-a + b|}{\sqrt{a^2 + b^2}} = 1 \Leftrightarrow |-a + b| = \sqrt{a^2 + b^2}$.
  - Bình phương hai vế: $a^2 - 2ab + b^2 = a^2 + b^2 \Leftrightarrow -2ab = 0 \Leftrightarrow a = 0$ hoặc $b = 0$.
  - **TH1:** Nếu $a = 0$, chọn $b = 1 \Rightarrow \Delta_1: y = 0$.
  - **TH2:** Nếu $b = 0$, chọn $a = 1 \Rightarrow \Delta_2: x - 3 = 0$.
  - Vậy có 2 tiếp tuyến là $y = 0$ và $x - 3 = 0$.

**Bài 5 (Nâng cao):** Cho Elip $(E): \frac{x^2}{25} + \frac{y^2}{9} = 1$ với hai tiêu điểm $F_1, F_2$. Tìm tọa độ điểm $M$ thuộc $(E)$ sao cho $\widehat{F_1MF_2} = 90^\circ$.
* **Lời giải:**
  - Từ PT Elip: $a = 5, b = 3 \Rightarrow c = \sqrt{25-9} = 4$. Tiêu cự $F_1 F_2 = 2c = 8$.
  - Gọi $M(x_M; y_M) \in (E)$, theo định nghĩa: $MF_1 + MF_2 = 2a = 10$.
  - Vì $\triangle F_1MF_2$ vuông tại $M$, theo Pytago: $MF_1^2 + MF_2^2 = F_1F_2^2 = 8^2 = 64$.
  - Mặt khác: $(MF_1 + MF_2)^2 = MF_1^2 + MF_2^2 + 2MF_1 \cdot MF_2$.
    $\Rightarrow 10^2 = 64 + 2MF_1 \cdot MF_2 \Rightarrow 2MF_1 \cdot MF_2 = 36 \Rightarrow MF_1 \cdot MF_2 = 18$.
  - Diện tích $\triangle F_1MF_2$ tính theo 2 cách:
    $S = \frac{1}{2} MF_1 \cdot MF_2 = \frac{1}{2}(18) = 9$.
    $S = \frac{1}{2} F_1F_2 \cdot d(M, Ox) = \frac{1}{2} (8) \cdot |y_M| = 4|y_M|$.
  - Suy ra: $4|y_M| = 9 \Rightarrow |y_M| = \frac{9}{4} \Rightarrow y_M = \pm \frac{9}{4}$.
  - Thay $y_M^2 = \frac{81}{16}$ vào PT (E):
    $\frac{x_M^2}{25} + \frac{81/16}{9} = 1 \Leftrightarrow \frac{x_M^2}{25} + \frac{9}{16} = 1 \Leftrightarrow \frac{x_M^2}{25} = \frac{7}{16} \Rightarrow x_M^2 = \frac{175}{16} \Rightarrow x_M = \pm \frac{5\sqrt{7}}{4}$.
  - Vậy có 4 điểm $M$ thỏa mãn: $\left( \pm \frac{5\sqrt{7}}{4}; \pm \frac{9}{4} \right)$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH7;
}
