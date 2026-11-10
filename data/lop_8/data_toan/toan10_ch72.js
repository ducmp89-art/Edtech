/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương VII: Phương pháp tọa độ trong mặt phẳng
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
   ========================================================================== */

const DATA_TOAN10_CH7 = {
    "MATH10-CH7-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương VII: Tọa độ trong mặt phẳng",
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
        chapter: "Chương VII: Tọa độ trong mặt phẳng",
        title: "Bài 2: Phương trình Đường tròn & Ba đường Conic",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương VII", "Bài 2"],
        theory: `
### 1. Phương trình Đường tròn
- **Dạng chính tắc:** $(x-a)^2 + (y-b)^2 = R^2$ (Tâm $I(a;b)$, bán kính $R$).
- **Dạng tổng quát:** $x^2 + y^2 - 2ax - 2by + c = 0$. 
  - Điều kiện: $a^2 + b^2 - c > 0$.
  - Tâm $I(a; b)$, Bán kính $R = \sqrt{a^2 + b^2 - c}$.
- **Tiếp tuyến tại điểm $M_0(x_0; y_0)$ thuộc đường tròn:**
  Nhận $\vec{IM_0} = (x_0-a; y_0-b)$ làm vectơ pháp tuyến.

### 2. Các đường Conic cơ bản
- **Elip (E):** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \ (a > b > 0)$.
  - Trục lớn $2a$, Trục nhỏ $2b$. Tiêu cự $2c$ với $c = \sqrt{a^2 - b^2}$.
  - Hai tiêu điểm $F_1(-c; 0), F_2(c; 0)$. Tâm sai $e = \frac{c}{a} < 1$.
- **Hipebol (H):** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \ (a, b > 0)$.
  - Trục thực $2a$, Trục ảo $2b$. Tiêu cự $2c$ với $c = \sqrt{a^2 + b^2}$.
  - Hai tiêu điểm $F_1(-c; 0), F_2(c; 0)$. Tâm sai $e = \frac{c}{a} > 1$.
- **Parabol (P):** $y^2 = 2px \ (p > 0)$.
  - Tiêu điểm $F\left(\frac{p}{2}; 0\right)$. Đường chuẩn $\Delta: x = -\frac{p}{2}$. Tâm sai $e = 1$.

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
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Tìm tọa độ tâm và bán kính của đường tròn $(C): x^2 + y^2 - 4x + 6y - 12 = 0$.
* **Lời giải:**
  - $-2a = -4 \Rightarrow a=2$. $-2b = 6 \Rightarrow b=-3$. Tâm $I(2; -3)$.
  - Bán kính $R = \sqrt{2^2 + (-3)^2 - (-12)} = \sqrt{4 + 9 + 12} = 5$.

**Bài 2 (Cơ bản):** Viết phương trình tiếp tuyến của đường tròn $(C): (x-1)^2 + (y+2)^2 = 25$ tại điểm $M(4; 2)$.
* **Lời giải:**
  - Tâm $I(1; -2)$. VPT của tiếp tuyến là $\vec{IM} = (3; 4)$.
  - Phương trình tiếp tuyến qua $M$: $3(x - 4) + 4(y - 2) = 0 \Leftrightarrow 3x + 4y - 20 = 0$.

**Bài 3 (Vận dụng):** Cho Elip $(E): 9x^2 + 25y^2 = 225$. Xác định tọa độ tiêu điểm và tính tâm sai.
* **Lời giải:**
  - Chia 2 vế cho 225: $\frac{x^2}{25} + \frac{y^2}{9} = 1$.
  - $a^2=25 \Rightarrow a=5$; $b^2=9 \Rightarrow b=3$.
  - $c^2 = 25 - 9 = 16 \Rightarrow c=4$.
  - Tiêu điểm: $F_1(-4; 0)$ và $F_2(4; 0)$. Tâm sai $e = c/a = 4/5$.

**Bài 4 (Vận dụng):** Viết phương trình đường tròn có tâm $I(1; 3)$ và tiếp xúc với đường thẳng $\Delta: 3x - 4y + 5 = 0$.
* **Lời giải:**
  - $R = d(I, \Delta) = \frac{|3(1) - 4(3) + 5|}{\sqrt{3^2+(-4)^2}} = \frac{|-4|}{5} = \frac{4}{5}$.
  - PT: $(x - 1)^2 + (y - 3)^2 = \frac{16}{25}$.

**Bài 5 (Vận dụng cao):** Cho đường tròn $(C): x^2 + y^2 = 13$ và điểm $M(1; 5)$. Viết PT đường thẳng $d$ qua $M$, cắt $(C)$ tại 2 điểm $A, B$ sao cho độ dài $AB = 4$.
* **Lời giải:**
  - Tâm $O(0; 0), R = \sqrt{13}$. $M$ nằm ngoài đường tròn.
  - Khoảng cách từ tâm đến dây $AB$: $h = \sqrt{R^2 - \left(\frac{AB}{2}\right)^2} = \sqrt{13 - 2^2} = 3$.
  - Gọi VPT của $d$ là $(a;b)$, PT qua $M$: $a(x-1)+b(y-5)=0$.
  - $d(O, d) = \frac{|-a - 5b|}{\sqrt{a^2+b^2}} = 3 \Leftrightarrow a^2 + 10ab + 25b^2 = 9a^2 + 9b^2$.
  - $\Leftrightarrow 8a^2 - 10ab - 16b^2 = 0$. Chọn $b=1$, giải ra $a$.

**Bài 6 (Vận dụng cao):** Viết phương trình các tiếp tuyến chung của hai đường tròn $(C_1): x^2+y^2=1$ và $(C_2): (x-4)^2+y^2=9$.
* **Lời giải:**
  - Tâm $I_1(0; 0), R_1 = 1$. Tâm $I_2(4; 0), R_2 = 3$.
  - $I_1 I_2 = 4 = R_1 + R_2 \Rightarrow$ Hai đường tròn tiếp xúc ngoài.
  - Có 3 tiếp tuyến chung. Gọi TT là $ax+by+c=0$. 
  - Giải hệ $d(I_1, \Delta) = 1$ và $d(I_2, \Delta) = 3$. 
  - Suy ra các phương trình: $x=1$ (TT chung trong), và $x \pm \sqrt{3}y - 2 = 0$ (TT chung ngoài).

**Bài 7 (Vận dụng cao):** Cho điểm $F(3; 0)$. Tìm phương trình của tập hợp các điểm $M$ luôn cách $F$ một khoảng bằng khoảng cách từ $M$ đến trục tung.
* **Lời giải:**
  - Gọi $M(x; y)$. $MF = \sqrt{(x-3)^2 + y^2}$. Khoảng cách đến $Oy$ là $|x|$.
  - $\sqrt{(x-3)^2 + y^2} = |x| \Leftrightarrow x^2 - 6x + 9 + y^2 = x^2 \Leftrightarrow y^2 = 6x - 9$.
  - Đây là phương trình của một Parabol có đỉnh tại $(1.5; 0)$.

**Bài 8 (Vận dụng cao):** Tìm $m$ để đường thẳng $d: y = x + m$ cắt Elip $(E): x^2 + 4y^2 = 4$ tại 2 điểm phân biệt.
* **Lời giải:**
  - Thay $y = x+m$ vào (E): $x^2 + 4(x^2 + 2mx + m^2) - 4 = 0 \Leftrightarrow 5x^2 + 8mx + 4m^2 - 4 = 0$.
  - Cắt 2 điểm $\Leftrightarrow \Delta' > 0 \Leftrightarrow (4m)^2 - 5(4m^2 - 4) > 0$.
  - $\Leftrightarrow 16m^2 - 20m^2 + 20 > 0 \Leftrightarrow 4m^2 < 20 \Leftrightarrow m^2 < 5$.
  - Kết luận: $-\sqrt{5} < m < \sqrt{5}$.

**Bài 9 (Vận dụng cao):** Viết PT đường thẳng $d$ cắt đường tròn $(C): x^2+y^2-4x-2y-4=0$ tại 2 điểm $A, B$ sao cho tam giác $IAB$ vuông tại tâm $I$. Biết $d$ vuông góc với $\Delta: 3x-y+2=0$.
* **Lời giải:**
  - Tâm $I(2; 1)$, $R = 3$.
  - $d \perp \Delta \Rightarrow$ PT $d: x + 3y + c = 0$.
  - $\triangle IAB$ vuông tại $I \Rightarrow$ Độ dài đường cao từ $I$ (khoảng cách $h$) là $h = \frac{R}{\sqrt{2}} = \frac{3}{\sqrt{2}}$.
  - $d(I, d) = \frac{|2 + 3(1) + c|}{\sqrt{10}} = \frac{3}{\sqrt{2}} \Leftrightarrow |5 + c| = \sqrt{45} = 3\sqrt{5}$.
  - Giải ra 2 giá trị $c = -5 \pm 3\sqrt{5}$.

**Bài 10 (Vận dụng cao):** Một gương parabol có chiều sâu 12cm và bề rộng miệng gương 40cm. Tìm khoảng cách từ đỉnh gương đến tiêu điểm để đặt bóng đèn hội tụ sáng.
* **Lời giải:**
  - Gắn hệ trục, đỉnh $O(0;0)$. Bề rộng 40cm $\Rightarrow x = 12, y = \pm 20$.
  - PT: $y^2 = 2px$. Thay $(12; 20)$ vào: $400 = 2p(12) \Rightarrow 2p = 100/3 \Rightarrow p = 50/3$.
  - Tiêu điểm $F(p/2; 0) = (25/3; 0)$. Khoảng cách là $25/3 \approx 8.33$ cm.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH7;
}
