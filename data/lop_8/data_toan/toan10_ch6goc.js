/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương VI: Hàm số, Đồ thị và Ứng dụng (Giải chi tiết 100%)
   ========================================================================== */

const DATA_TOAN10_CH6 = {
    "MATH10-CH6-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương VI: Hàm số và Đồ thị",
        title: "Bài 1: Hàm số bậc hai & Đồ thị Parabol",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương VI", "Bài 1"],
        theory: `
### 1. Khảo sát Hàm số bậc hai $y = ax^2 + bx + c$ ($a \neq 0$)
📌 **Tọa độ đỉnh và Trục đối xứng:**
- Đỉnh $I\left(-\frac{b}{2a}; -\frac{\Delta}{4a}\right)$.
- Trục đối xứng là đường thẳng $x = -\frac{b}{2a}$.
- Điểm cắt trục tung: $A(0; c)$. Điểm cắt trục hoành: Giải PT $ax^2 + bx + c = 0$.

📌 **Sự biến thiên (Bảng biến thiên):**
- Nếu $a > 0$: Bề lõm quay lên trên. Hàm số nghịch biến trên $(-\infty; -\frac{b}{2a})$, đồng biến trên $(-\frac{b}{2a}; +\infty)$. Đạt Giá trị nhỏ nhất (Min) tại đỉnh.
- Nếu $a < 0$: Bề lõm quay xuống dưới. Hàm số đồng biến trên $(-\infty; -\frac{b}{2a})$, nghịch biến trên $(-\frac{b}{2a}; +\infty)$. Đạt Giá trị lớn nhất (Max) tại đỉnh.

---

### 2. Chuyên đề Nâng cao: Cực trị trên một đoạn & Đồ thị chứa trị tuyệt đối
📌 **1. Min/Max trên đoạn $[\alpha; \beta]$:**
- Kiểm tra xem hoành độ đỉnh $x_I = -\frac{b}{2a}$ có thuộc đoạn $[\alpha; \beta]$ hay không.
- Tính các giá trị $y(\alpha), y(\beta)$ và $y(x_I)$ (nếu $x_I \in [\alpha; \beta]$).
- So sánh các giá trị trên để kết luận Min, Max.

📌 **2. Đồ thị hàm chứa dấu giá trị tuyệt đối:**
- Dạng $y = |f(x)|$: Giữ nguyên phần đồ thị $y = f(x)$ nằm trên trục $Ox$. Lấy đối xứng phần đồ thị nằm dưới $Ox$ qua trục $Ox$. Xóa bỏ phần dưới $Ox$.
- Dạng $y = f(|x|)$: Giữ nguyên phần đồ thị nằm bên phải trục $Oy$. Lấy đối xứng phần giữ lại này qua trục $Oy$. Xóa bỏ phần bên trái $Oy$.
        `,
        tips: `
- 💡 **Mẹo tính tung độ đỉnh nhanh:** Thay trực tiếp hoành độ $x_I = -\frac{b}{2a}$ vào hàm số $y$ để tìm $y_I$ thay vì phải tính $-\frac{\Delta}{4a}$ dễ nhầm dấu.
- 💡 **Mẹo giải Min/Max chứa tham số:** Nếu $a > 0$, Max trên đoạn $[\alpha; \beta]$ luôn đạt được tại 1 trong 2 đầu mút $\alpha$ hoặc $\beta$ (điểm nào xa trục đối xứng hơn thì $y$ lớn hơn).
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Tìm tọa độ đỉnh, trục đối xứng và giao điểm với các trục tọa độ của Parabol $(P): y = x^2 - 4x + 3$.
* **Lời giải:**
  - Hoành độ đỉnh: $x_I = -\frac{-4}{2(1)} = 2$.
  - Tung độ đỉnh: $y_I = 2^2 - 4(2) + 3 = -1$. Đỉnh $I(2; -1)$.
  - Trục đối xứng: $x = 2$.
  - Giao với $Oy$: Cho $x = 0 \Rightarrow y = 3 \Rightarrow A(0; 3)$.
  - Giao với $Ox$: Cho $y = 0 \Rightarrow x^2 - 4x + 3 = 0 \Leftrightarrow x = 1$ hoặc $x = 3 \Rightarrow B(1; 0), C(3; 0)$.

**Bài 2 (Cơ bản):** Tìm giá trị lớn nhất và nhỏ nhất của hàm số $y = -2x^2 + 4x + 1$ trên đoạn $[0; 3]$.
* **Lời giải:**
  - Hoành độ đỉnh $x_I = -\frac{4}{2(-2)} = 1$. Ta thấy $1 \in [0; 3]$.
  - Tính các giá trị: 
    $y(0) = 1$
    $y(1) = -2(1)^2 + 4(1) + 1 = 3$
    $y(3) = -2(3)^2 + 4(3) + 1 = -5$.
  - So sánh: $\max y = 3$ (tại $x=1$), $\min y = -5$ (tại $x=3$).

**Bài 3 (Vận dụng):** Xác định Parabol $(P): y = ax^2 + bx + c$, biết $(P)$ có đỉnh $I(1; 4)$ và đi qua điểm $A(-1; 0)$.
* **Lời giải:**
  - Vì $(P)$ có đỉnh $I(1; 4)$ nên ta có hệ:
    $\begin{cases} -\frac{b}{2a} = 1 \Rightarrow b = -2a \\ y(1) = 4 \Rightarrow a + b + c = 4 \end{cases}$
  - $(P)$ đi qua $A(-1; 0) \Rightarrow a(-1)^2 + b(-1) + c = 0 \Rightarrow a - b + c = 0$.
  - Thay $b = -2a$ vào 2 phương trình dưới:
    $\begin{cases} a - 2a + c = 4 \\ a - (-2a) + c = 0 \end{cases} \Leftrightarrow \begin{cases} -a + c = 4 \\ 3a + c = 0 \end{cases}$
  - Trừ 2 vế: $-4a = 4 \Rightarrow a = -1$. Suy ra $c = 3$ và $b = 2$.
  - Vậy $(P): y = -x^2 + 2x + 3$.

**Bài 4 (Vận dụng cao):** Tìm $m$ để hàm số $y = x^2 - 2x + m$ có giá trị lớn nhất trên đoạn $[0; 3]$ bằng 10.
* **Lời giải:**
  - Hoành độ đỉnh $x_I = -\frac{-2}{2} = 1 \in [0; 3]$.
  - Vì hệ số $a = 1 > 0$, bề lõm quay lên, hàm số đạt Min tại đỉnh, và Max tại một trong hai đầu mút $x=0$ hoặc $x=3$.
  - $y(0) = m$; $y(3) = 3^2 - 2(3) + m = m + 3$.
  - Rõ ràng $m + 3 > m$, nên GTLN trên $[0; 3]$ là $y(3) = m + 3$.
  - Theo đề bài: $\max = 10 \Leftrightarrow m + 3 = 10 \Leftrightarrow m = 7$.

**Bài 5 (Nâng cao):** Dựa vào đồ thị hàm số $y = x^2 - 4x + 3$ (ở Bài 1), tìm số nghiệm của phương trình $|x^2 - 4x + 3| = m$ theo tham số $m$.
* **Lời giải:**
  - Vẽ phác đồ thị $(C): y = |x^2 - 4x + 3|$. Đỉnh cũ $I(2; -1)$ nằm dưới $Ox$, khi lấy trị tuyệt đối sẽ lật ngược lên thành $I'(2; 1)$. Phần parabol từ $x=1$ đến $x=3$ thành một "cái bướu" úp xuống với đỉnh cao nhất là $y=1$. Các nhánh hai bên giữ nguyên hướng lên $+\infty$.
  - Phương trình là sự tương giao của đồ thị $(C)$ và đường thẳng $y=m$ nằm ngang.
  - Từ đồ thị ta có:
    - Nếu $m < 0$: Đường thẳng nằm dưới trục $Ox$ $\Rightarrow$ 0 nghiệm.
    - Nếu $m = 0$: Đường thẳng cắt tại 2 điểm trên $Ox$ $\Rightarrow$ 2 nghiệm ($x=1, x=3$).
    - Nếu $0 < m < 1$: Đường thẳng cắt "bướu" và 2 nhánh $\Rightarrow$ 4 nghiệm phân biệt.
    - Nếu $m = 1$: Đường thẳng đi qua đỉnh "bướu" $\Rightarrow$ 3 nghiệm phân biệt.
    - Nếu $m > 1$: Đường thẳng nằm trên đỉnh "bướu", chỉ cắt 2 nhánh $\Rightarrow$ 2 nghiệm phân biệt.
        `
    },

    "MATH10-CH6-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương VI: Hàm số và Đồ thị",
        title: "Bài 2: Dấu của Tam thức bậc hai & Phương trình chứa căn",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương VI", "Bài 2"],
        theory: `
### 1. Định lý về Dấu của Tam thức bậc hai $f(x) = ax^2 + bx + c$ ($a \neq 0$)
- **Nếu $\Delta < 0$:** $f(x)$ **cùng dấu** với hệ số $a$ với mọi $x \in \mathbb{R}$. (Vô nghiệm $\rightarrow$ Cùng dấu $a$).
- **Nếu $\Delta = 0$:** $f(x)$ **cùng dấu** với hệ số $a$ với mọi $x \neq -\frac{b}{2a}$, và $f(x)=0$ tại $x=-\frac{b}{2a}$.
- **Nếu $\Delta > 0$:** $f(x)$ có 2 nghiệm phân biệt $x_1 < x_2$.
  - Trong khoảng $(x_1; x_2)$: $f(x)$ **trái dấu** với $a$.
  - Ngoài khoảng $(x_1; x_2)$: $f(x)$ **cùng dấu** với $a$.
  - *Thần chú:* **"Trong trái, Ngoài cùng"**.

📌 **Điều kiện Tam thức luôn mang một dấu:**
- $f(x) > 0, \forall x \in \mathbb{R} \Leftrightarrow \begin{cases} a > 0 \\ \Delta < 0 \end{cases}$
- $f(x) \ge 0, \forall x \in \mathbb{R} \Leftrightarrow \begin{cases} a > 0 \\ \Delta \le 0 \end{cases}$ (Tương tự cho dấu $<, \le$).

---

### 2. Phương trình quy về phương trình bậc hai (Phương trình chứa căn)
📌 **Dạng 1: $\sqrt{f(x)} = \sqrt{g(x)}$**
- Phương pháp: Bình phương 2 vế.
- Điều kiện: Cần đặt $f(x) \ge 0$ HOẶC $g(x) \ge 0$ (chọn cái nào đơn giản hơn để giải, không cần đặt cả hai).
- $\Rightarrow \begin{cases} g(x) \ge 0 \\ f(x) = g(x) \end{cases}$.

📌 **Dạng 2: $\sqrt{f(x)} = g(x)$**
- Cực kỳ chú ý điều kiện của vế phải $g(x)$.
- $\sqrt{f(x)} = g(x) \Leftrightarrow \begin{cases} g(x) \ge 0 \\ f(x) = [g(x)]^2 \end{cases}$.
        `,
        tips: `
- 💡 **Cạm bẫy:** Khi giải $\sqrt{f(x)} = g(x)$, học sinh hay đặt điều kiện trong căn $f(x) \ge 0$ mà quên mất vế phải $g(x) \ge 0$. Thực tế, chỉ cần $g(x) \ge 0$ là đủ, vì khi bình phương $f(x) = [g(x)]^2 \ge 0$ hiển nhiên đúng!
- 💡 **Tham số $a$ chứa $m$:** Nếu đề bài cho $(m-1)x^2 + ... > 0$, BẮT BUỘC phải xét riêng trường hợp $a = m-1 = 0$ trước khi dùng Định lý dấu tam thức bậc hai.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Lập bảng xét dấu và giải bất phương trình: $-2x^2 + 5x - 3 \ge 0$.
* **Lời giải:**
  - Tam thức $f(x) = -2x^2 + 5x - 3$ có $a = -2 < 0$.
  - Giải $f(x) = 0 \Leftrightarrow x = 1$ hoặc $x = \frac{3}{2}$.
  - Áp dụng "Trong trái, Ngoài cùng": $f(x)$ trái dấu với $a$ (tức là $f(x) > 0$) trong khoảng $(1; \frac{3}{2})$.
  - Vì BPT có dấu "$\ge$", ta lấy cả 2 đầu mút.
  - Vậy tập nghiệm của BPT là $S = [1; \frac{3}{2}]$.

**Bài 2 (Cơ bản):** Giải phương trình chứa căn: $\sqrt{x^2 - 3x + 2} = \sqrt{2x - 2}$.
* **Lời giải:**
  - Áp dụng công thức Dạng 1 (Chọn $g(x) \ge 0$ cho dễ):
    $\begin{cases} 2x - 2 \ge 0 \\ x^2 - 3x + 2 = 2x - 2 \end{cases} \Leftrightarrow \begin{cases} x \ge 1 \\ x^2 - 5x + 4 = 0 \end{cases}$
  - Phương trình dưới có 2 nghiệm $x = 1, x = 4$.
  - Cả hai nghiệm đều thỏa mãn điều kiện $x \ge 1$.
  - Kết luận: Phương trình có tập nghiệm $S = \{1; 4\}$.

**Bài 3 (Vận dụng):** Giải phương trình chứa căn: $\sqrt{2x^2 - 4x + 1} = x - 1$.
* **Lời giải:**
  - Áp dụng công thức Dạng 2 (Bắt buộc vế phải không âm):
    $\begin{cases} x - 1 \ge 0 \\ 2x^2 - 4x + 1 = (x - 1)^2 \end{cases}$
    $\Leftrightarrow \begin{cases} x \ge 1 \\ 2x^2 - 4x + 1 = x^2 - 2x + 1 \end{cases}$
    $\Leftrightarrow \begin{cases} x \ge 1 \\ x^2 - 2x = 0 \end{cases}$
  - Giải $x^2 - 2x = 0 \Rightarrow x = 0$ hoặc $x = 2$.
  - Đối chiếu điều kiện $x \ge 1$, ta loại $x=0$, nhận $x=2$.
  - Kết luận: Phương trình có 1 nghiệm $x = 2$.

**Bài 4 (Vận dụng cao):** Tìm tất cả các giá trị của tham số $m$ để bất phương trình $(m-1)x^2 - 2(m-1)x + 2 > 0$ nghiệm đúng với mọi $x \in \mathbb{R}$.
* **Lời giải:**
  - **Trường hợp 1: Hệ số $a = 0 \Leftrightarrow m - 1 = 0 \Leftrightarrow m = 1$.**
    Thay $m=1$ vào BPT ta được: $0x^2 - 0x + 2 > 0 \Leftrightarrow 2 > 0$ (luôn đúng với mọi $x$).
    Vậy $m=1$ thỏa mãn.
  - **Trường hợp 2: Hệ số $a \neq 0 \Leftrightarrow m \neq 1$.**
    Để $f(x) > 0, \forall x \in \mathbb{R} \Leftrightarrow \begin{cases} a > 0 \\ \Delta' < 0 \end{cases}$
    $\Leftrightarrow \begin{cases} m - 1 > 0 \\ (m-1)^2 - 2(m-1) < 0 \end{cases}$
    $\Leftrightarrow \begin{cases} m > 1 \\ m^2 - 2m + 1 - 2m + 2 < 0 \end{cases} \Leftrightarrow \begin{cases} m > 1 \\ m^2 - 4m + 3 < 0 \end{cases}$
    $\Leftrightarrow \begin{cases} m > 1 \\ 1 < m < 3 \end{cases} \Leftrightarrow 1 < m < 3$.
  - Kết hợp cả 2 trường hợp, ta được: $1 \le m < 3$.

**Bài 5 (Nâng cao):** Tìm $m$ để phương trình $\sqrt{x^2 - 4x + 3} = x - m$ có đúng 1 nghiệm phân biệt.
* **Lời giải:**
  - Bình phương với điều kiện:
    $\begin{cases} x - m \ge 0 \\ x^2 - 4x + 3 = (x-m)^2 \end{cases} \Leftrightarrow \begin{cases} x \ge m \\ x^2 - 4x + 3 = x^2 - 2mx + m^2 \end{cases}$
    $\Leftrightarrow \begin{cases} x \ge m \\ (2m - 4)x = m^2 - 3 \quad (*) \end{cases}$
  - Xét PT (*):
    + Nếu $2m - 4 = 0 \Leftrightarrow m = 2$: (*) trở thành $0x = 1$ (Vô nghiệm).
    + Nếu $m \neq 2$: (*) có nghiệm duy nhất $x = \frac{m^2 - 3}{2m - 4}$.
  - Để PT ban đầu có đúng 1 nghiệm, thì nghiệm $x$ này phải thỏa mãn điều kiện $x \ge m$:
    $\frac{m^2 - 3}{2m - 4} \ge m \Leftrightarrow \frac{m^2 - 3 - m(2m - 4)}{2m - 4} \ge 0 \Leftrightarrow \frac{-m^2 + 4m - 3}{2m - 4} \ge 0$.
  - Đặt tử $f(m) = -m^2 + 4m - 3 = 0 \Rightarrow m=1, m=3$. Mẫu $g(m) = 2m - 4 = 0 \Rightarrow m=2$.
  - Lập bảng xét dấu vế trái, ta được miền nghiệm là: $m \le 1$ hoặc $2 < m \le 3$.
  - Kết luận: $m \in (-\infty; 1] \cup (2; 3]$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH6;
}
