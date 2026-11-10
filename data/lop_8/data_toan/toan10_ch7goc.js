/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương VII: Phương pháp tọa độ trong mặt phẳng (Giải chi tiết 100%)
   ========================================================================== */

const DATA_TOAN10_CH7 = {
    "MATH10-CH7-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương VII: Phương pháp tọa độ trong mặt phẳng",
        title: "Bài 1: Phương trình Đường thẳng",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương VII", "Bài 1"],
        theory: `
### 1. Các dạng phương trình Đường thẳng
📌 **Vectơ pháp tuyến (VPT) & Vectơ chỉ phương (VCP):**
- VCP $\vec{u} = (u_1; u_2)$ song song hoặc trùng với đường thẳng.
- VPT $\vec{n} = (a; b)$ vuông góc với đường thẳng.
- Chuyển đổi: $\vec{n} = (a; b) \Leftrightarrow \vec{u} = (-b; a)$ hoặc $(b; -a)$.

📌 **Phương trình Tổng quát (PTTQ):**
- Đi qua $M(x_0; y_0)$, có VPT $\vec{n} = (a; b)$:
  $$a(x - x_0) + b(y - y_0) = 0 \Leftrightarrow ax + by + c = 0$$

📌 **Phương trình Tham số (PTTS):**
- Đi qua $M(x_0; y_0)$, có VCP $\vec{u} = (u_1; u_2)$:
  $$\begin{cases} x = x_0 + u_1 t \\ y = y_0 + u_2 t \end{cases} \quad (t \in \mathbb{R})$$

---

### 2. Góc và Khoảng cách
📌 **Góc giữa hai đường thẳng:**
- $\cos(\Delta_1, \Delta_2) = |\cos(\vec{n_1}, \vec{n_2})| = \frac{|a_1 a_2 + b_1 b_2|}{\sqrt{a_1^2 + b_1^2} \cdot \sqrt{a_2^2 + b_2^2}}$
- *Lưu ý:* Góc giữa hai đường thẳng luôn là góc nhọn hoặc vuông ($\le 90^\circ$), nên phải có trị tuyệt đối ở tử số.

📌 **Khoảng cách từ điểm $M(x_0; y_0)$ đến $\Delta: ax+by+c=0$:**
- $d(M, \Delta) = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$.

---

### 3. Chuyên đề Nâng cao: Bài toán Tối ưu Khoảng cách (VDC)
📌 **Bài toán: Tìm $M \in \Delta$ sao cho $MA + MB$ nhỏ nhất (A, B cùng phía so với $\Delta$)**
- **Bước 1:** Xét vị trí tương đối của $A, B$ so với $\Delta$ bằng cách thay tọa độ vào PTTQ. Nếu cùng dấu là cùng phía.
- **Bước 2:** Tìm điểm $A'$ đối xứng với $A$ qua $\Delta$.
- **Bước 3:** Khi đó $MA + MB = MA' + MB \ge A'B$. Dấu "=" xảy ra khi $A', M, B$ thẳng hàng. Điểm $M$ cần tìm là giao điểm của đường thẳng $A'B$ và $\Delta$.
        `,
        tips: `
- 💡 **Viết PTTQ nhanh đi qua 2 điểm $A(a; 0), B(0; b)$:** Dùng phương trình đoạn chắn $\frac{x}{a} + \frac{y}{b} = 1$.
- 💡 **Mẹo xét vị trí tương đối:** Đặt $f(x,y) = ax+by+c$. Nếu $f(x_A, y_A) \cdot f(x_B, y_B) > 0$ thì $A, B$ nằm CÙNG phía; nếu $< 0$ thì nằm KHÁC phía.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Lập phương trình tổng quát và tham số của đường thẳng $\Delta$ đi qua điểm $A(1; -2)$ và có vectơ pháp tuyến $\vec{n} = (3; 4)$.
* **Lời giải:**
  - PTTQ: $3(x - 1) + 4(y + 2) = 0 \Leftrightarrow 3x + 4y + 5 = 0$.
  - Tìm VCP: Từ VPT $\vec{n} = (3; 4) \Rightarrow$ VCP $\vec{u} = (-4; 3)$.
  - PTTS: $\begin{cases} x = 1 - 4t \\ y = -2 + 3t \end{cases} \quad (t \in \mathbb{R})$.

**Bài 2 (Cơ bản):** Tính góc giữa hai đường thẳng $d_1: x - 2y + 5 = 0$ và $d_2: 3x - y = 0$.
* **Lời giải:**
  - $d_1$ có VPT $\vec{n_1} = (1; -2)$. $d_2$ có VPT $\vec{n_2} = (3; -1)$.
  - $\cos(d_1, d_2) = \frac{|1(3) + (-2)(-1)|}{\sqrt{1^2 + (-2)^2} \cdot \sqrt{3^2 + (-1)^2}} = \frac{|3 + 2|}{\sqrt{5} \cdot \sqrt{10}} = \frac{5}{5\sqrt{2}} = \frac{1}{\sqrt{2}}$.
  - Suy ra góc giữa hai đường thẳng là $45^\circ$.

**Bài 3 (Vận dụng):** Cho tam giác $ABC$ có $A(-1; 2), B(3; 4), C(1; 0)$. Lập phương trình đường cao $AH$ và trung tuyến $AM$ của tam giác.
* **Lời giải:**
  - **Đường cao AH:** 
    - $AH \perp BC \Rightarrow$ AH nhận $\vec{BC} = (1-3; 0-4) = (-2; -4)$ làm VPT. 
    - Chọn VPT gọn hơn: $\vec{n} = (1; 2)$.
    - PTTQ của $AH$ (qua $A(-1; 2)$): $1(x + 1) + 2(y - 2) = 0 \Leftrightarrow x + 2y - 3 = 0$.
  - **Đường trung tuyến AM:**
    - Trung điểm $M$ của $BC$: $M\left(\frac{3+1}{2}; \frac{4+0}{2}\right) = M(2; 2)$.
    - Đường thẳng $AM$ đi qua $A(-1; 2)$ và $M(2; 2)$. 
    - Ta thấy $y_A = y_M = 2$, nên đường thẳng $AM$ nằm ngang, có phương trình là $y = 2$ (hoặc viết theo vectơ: $\vec{AM} = (3; 0) \Rightarrow \vec{n} = (0; 3) \Rightarrow y - 2 = 0$).

**Bài 4 (Vận dụng cao):** Lập phương trình đường thẳng $d$ đi qua $P(2; 5)$ và cách đều hai điểm $A(-1; 2), B(5; 4)$.
* **Lời giải:**
  - **TH1: $d$ song song với $AB$.**
    - $\vec{AB} = (6; 2) \Rightarrow$ Chọn VCP của $d$ là $\vec{u} = (3; 1) \Rightarrow$ VPT $\vec{n} = (1; -3)$.
    - Phương trình $d$ (qua $P$): $1(x - 2) - 3(y - 5) = 0 \Leftrightarrow x - 3y + 13 = 0$.
  - **TH2: $d$ đi qua trung điểm $I$ của $AB$.**
    - Trung điểm $I$ của $AB$: $I\left(\frac{-1+5}{2}; \frac{2+4}{2}\right) = I(2; 3)$.
    - $d$ đi qua $P(2; 5)$ và $I(2; 3)$. 
    - Ta thấy $x_P = x_I = 2$, do đó đường thẳng $d$ là đường thẳng đứng, có phương trình $x = 2$.
  - **Kết luận:** Có 2 đường thẳng thỏa mãn: $x - 3y + 13 = 0$ và $x = 2$.

**Bài 5 (Nâng cao):** Cho hai điểm $A(1; 2), B(4; 5)$ và đường thẳng $d: y = 0$ (trục $Ox$). Tìm tọa độ điểm $M \in d$ sao cho $MA + MB$ đạt giá trị nhỏ nhất.
* **Lời giải:**
  - Ta thấy $y_A = 2 > 0$ và $y_B = 5 > 0$, suy ra $A$ và $B$ nằm CÙNG PHÍA so với trục $Ox$.
  - Lấy điểm $A'$ đối xứng với $A(1; 2)$ qua trục $Ox \Rightarrow A'(1; -2)$.
  - Khi đó $MA + MB = MA' + MB \ge A'B$. $MA+MB$ nhỏ nhất khi $M$ là giao điểm của đường thẳng $A'B$ và trục $Ox$.
  - Lập PT đường thẳng $A'B$:
    $\vec{A'B} = (4 - 1; 5 - (-2)) = (3; 7) \Rightarrow$ VPT $\vec{n} = (7; -3)$.
    PT $A'B$: $7(x - 1) - 3(y + 2) = 0 \Leftrightarrow 7x - 3y - 13 = 0$.
  - Điểm $M$ thuộc trục $Ox \Rightarrow M(x; 0)$. Thay vào PT $A'B$:
    $7x - 3(0) - 13 = 0 \Leftrightarrow 7x = 13 \Leftrightarrow x = \frac{13}{7}$.
  - Vậy điểm cần tìm là $M\left(\frac{13}{7}; 0\right)$.
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
        `,
        tips: `
- 💡 **Mẹo phân biệt Elip và Hipebol:** Elip có dấu "$+$" ở phương trình thì dùng dấu "$-$" ở hệ thức ($c^2 = a^2 - b^2$). Hipebol có dấu "$-$" ở phương trình thì dùng dấu "$+$" ở hệ thức ($c^2 = a^2 + b^2$).
- 💡 **Tiếp tuyến kẻ từ điểm nằm ngoài đường tròn:** BẮT BUỘC phải giả sử phương trình tiếp tuyến dạng $a(x-x_0) + b(y-y_0) = 0$, sau đó dùng điều kiện $d(I, \Delta) = R$ để giải tìm tỉ lệ $a/b$. Nhớ là sẽ luôn có **2 tiếp tuyến**.
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
