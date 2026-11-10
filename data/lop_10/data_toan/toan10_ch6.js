/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương VI: Hàm số và Đồ thị
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
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

### 2. 💎 Chuyên đề Master: Cực trị trên đoạn & Đồ thị Trị tuyệt đối (VDC)
📌 **1. Kỹ thuật Min/Max trên đoạn $[\alpha; \beta]$:**
- Bước 1: Tính hoành độ đỉnh $x_I = -\frac{b}{2a}$. 
- Bước 2: Kiểm tra $x_I$ có thuộc đoạn $[\alpha; \beta]$ hay không.
- Bước 3: Tính các giá trị $y(\alpha), y(\beta)$ và $y(x_I)$ (nếu $x_I$ thuộc đoạn). 
- Kết luận: Số lớn nhất là Max, số nhỏ nhất là Min.

📌 **2. Đồ thị hàm chứa dấu giá trị tuyệt đối:**
- Dạng $y = |f(x)|$: Giữ nguyên phần đồ thị $y = f(x)$ nằm trên trục $Ox$. Lấy đối xứng phần đồ thị nằm dưới $Ox$ qua trục $Ox$. Xóa bỏ phần dưới $Ox$.
- Dạng $y = f(|x|)$: Giữ nguyên phần đồ thị nằm bên phải trục $Oy$. Lấy đối xứng phần giữ lại này qua trục $Oy$. Xóa bỏ phần bên trái $Oy$.
        `,
        tips: `
- 💡 **Mẹo tính tung độ đỉnh nhanh:** Thay trực tiếp hoành độ $x_I = -\frac{b}{2a}$ vào hàm số $y$ để tìm $y_I$ thay vì phải tính $-\frac{\Delta}{4a}$ dễ nhầm dấu.
- 💡 **Mẹo giải Min/Max chứa tham số:** Nếu $a > 0$, Max trên đoạn $[\alpha; \beta]$ luôn đạt được tại 1 trong 2 đầu mút $\alpha$ hoặc $\beta$ (điểm nào xa trục đối xứng hơn thì $y$ lớn hơn).
- 🚀 **Thủ thuật Master:** Khi gặp bài toán biện luận giao điểm $y = |ax^2 + bx + c| = m$, hãy lật đồ thị và kẻ đường thẳng $y=m$ nằm ngang. Số nghiệm bằng số giao điểm. Số cực trị của hàm $y=|f(x)|$ bằng số cực trị của $f(x)$ cộng số giao điểm với trục hoành.
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Tìm tọa độ đỉnh, trục đối xứng và giao điểm với các trục tọa độ của Parabol $(P): y = -x^2 + 4x - 3$.
* **Lời giải:**
  - Hoành độ đỉnh: $x_I = -\frac{4}{2(-1)} = 2$.
  - Tung độ đỉnh: $y_I = -(2)^2 + 4(2) - 3 = 1$. Đỉnh $I(2; 1)$.
  - Trục đối xứng: $x = 2$.
  - Giao $Oy$: Cho $x = 0 \Rightarrow y = -3 \Rightarrow A(0; -3)$.
  - Giao $Ox$: Cho $y = 0 \Rightarrow -x^2 + 4x - 3 = 0 \Leftrightarrow x = 1$ hoặc $x = 3 \Rightarrow B(1; 0), C(3; 0)$.

**Bài 2 (Cơ bản):** Xác định các hệ số $a, b, c$ của Parabol $(P): y = ax^2 + bx + c$, biết $(P)$ có đỉnh $I(1; -4)$ và đi qua điểm $A(0; -3)$.
* **Lời giải:**
  - Qua $A(0; -3) \Rightarrow a(0)^2 + b(0) + c = -3 \Rightarrow c = -3$.
  - Đỉnh $I(1; -4) \Rightarrow \begin{cases} -\frac{b}{2a} = 1 \\ y(1) = -4 \end{cases} \Rightarrow \begin{cases} b = -2a \\ a + b - 3 = -4 \end{cases}$
  - Thay $b = -2a$ vào PT dưới: $a - 2a = -1 \Rightarrow a = 1$. Suy ra $b = -2$.
  - Vậy $(P): y = x^2 - 2x - 3$.

**Bài 3 (Vận dụng):** Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = x^2 - 2x + 5$ trên đoạn $[0; 3]$.
* **Lời giải:**
  - Hoành độ đỉnh: $x_I = -\frac{-2}{2} = 1 \in [0; 3]$.
  - Tính các giá trị: $y(0) = 5$; $y(1) = 4$; $y(3) = 8$.
  - So sánh: $\max = 8$ (tại $x=3$), $\min = 4$ (tại $x=1$).

**Bài 4 (Vận dụng):** Một quả bóng được đá lên với độ cao $h(t) = -5t^2 + 20t$ (m). Sau bao lâu quả bóng đạt độ cao lớn nhất và độ cao đó là bao nhiêu?
* **Lời giải:**
  - $h(t)$ là parabol úp xuống ($a=-5$). Đạt Max tại đỉnh.
  - $t = -\frac{20}{2(-5)} = 2$ (giây).
  - Độ cao lớn nhất: $h(2) = -5(2)^2 + 20(2) = 20$ (mét).

**Bài 5 (Vận dụng cao):** Tìm $m$ để giá trị lớn nhất của hàm số $y = -x^2 + 4x + m$ trên đoạn $[0; 3]$ bằng 12.
* **Lời giải:**
  - Đỉnh $x_I = -\frac{4}{2(-1)} = 2 \in [0; 3]$.
  - Bề lõm quay xuống ($a=-1<0$), hàm đạt Max tại đỉnh $x = 2$.
  - $\max y = y(2) = -(2)^2 + 4(2) + m = m + 4$.
  - Để $\max = 12 \Leftrightarrow m + 4 = 12 \Leftrightarrow m = 8$.

**Bài 6 (Vận dụng cao):** Tìm tham số $m$ để hàm số $y = x^2 - 2mx + m^2 + m - 1$ đạt giá trị nhỏ nhất trên $\mathbb{R}$ bằng 5.
* **Lời giải:**
  - Hàm đạt Min trên $\mathbb{R}$ tại đỉnh. $x_I = m$.
  - $\min y = y(m) = m^2 - 2m(m) + m^2 + m - 1 = m - 1$.
  - Yêu cầu $\min = 5 \Leftrightarrow m - 1 = 5 \Leftrightarrow m = 6$.

**Bài 7 (Vận dụng cao):** Dựa vào đồ thị, biện luận theo $m$ số nghiệm của phương trình $|-x^2 + 4x - 3| = m$.
* **Lời giải:**
  - Đồ thị $y = |-x^2 + 4x - 3|$ gồm 2 phần: Giữ phần trên $Ox$ của parabol úp (bướu cao nhất = 1), lật phần dưới $Ox$ lên trên thành 2 nhánh hướng lên $+\infty$. (Hình chữ W uốn cong).
  - Tương giao với $y=m$:
    + $m < 0$: 0 nghiệm.
    + $m = 0$: 2 nghiệm.
    + $0 < m < 1$: 4 nghiệm.
    + $m = 1$: 3 nghiệm.
    + $m > 1$: 2 nghiệm.

**Bài 8 (Vận dụng cao):** Có bao nhiêu giá trị nguyên của $m$ để đường thẳng $y = m$ cắt đồ thị hàm số $y = x^2 - 2|x| - 3$ tại 4 điểm phân biệt?
* **Lời giải:**
  - Đồ thị $y = f(|x|) = |x|^2 - 2|x| - 3$: Lấy phần bên phải $Oy$ của $y=x^2-2x-3$, lật sang trái.
  - Điểm cắt $Oy$ là $(0; -3)$. Đỉnh bên phải là $I(1; -4)$, đỉnh bên trái lật sang là $I'(-1; -4)$.
  - Đồ thị hình chữ W có 2 đáy tại $y=-4$ và 1 đỉnh giữa tại $y=-3$.
  - Để có 4 nghiệm: $-4 < m < -3$. Không có số nguyên nào trong khoảng này. (Kết luận 0 giá trị nguyên).

**Bài 9 (Vận dụng cao):** Một mảnh vườn hình chữ nhật có chu vi 40m, một cạnh giáp tường không cần rào. Kích thước vườn là bao nhiêu để diện tích lớn nhất?
* **Lời giải:**
  - Gọi rộng $x$, dài $y$ (giáp tường). Ta có $2x + y = 40 \Rightarrow y = 40 - 2x$.
  - Diện tích $S(x) = x(40 - 2x) = -2x^2 + 40x$.
  - Parabol đạt Max tại $x = -\frac{40}{2(-2)} = 10$. Khi đó $y = 20$. Diện tích Max = 200.

**Bài 10 (Vận dụng cao):** Tìm tọa độ điểm $M$ thuộc parabol $(P): y = x^2$ sao cho khoảng cách từ $M$ đến điểm $A(0; 1.5)$ là ngắn nhất.
* **Lời giải:**
  - $M(x; x^2) \in (P)$. 
  - $MA^2 = x^2 + (x^2 - 1.5)^2 = x^2 + x^4 - 3x^2 + 2.25 = x^4 - 2x^2 + 2.25$.
  - Đặt $t = x^2 \ge 0$, hàm số là $f(t) = t^2 - 2t + 2.25$.
  - $f(t)$ là parabol theo $t$, đạt Min tại $t = 1 \ge 0$. (Khi đó $f(1) = 1.25$).
  - Với $t = 1 \Rightarrow x^2 = 1 \Rightarrow x = \pm 1$. Khoảng cách ngắn nhất là $\sqrt{1.25}$.
  - Tọa độ $M(1; 1)$ hoặc $M(-1; 1)$.
        `
    },

    "MATH10-CH6-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương VI: Hàm số và Đồ thị",
        title: "Bài 2: Dấu của Tam thức bậc hai & Phương trình chứa căn",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương VI", "Bài 2"],
        theory: `
### 1. Định lý về Dấu của Tam thức bậc hai
- **Nếu $\Delta < 0$:** $f(x)$ **cùng dấu** với hệ số $a$ với mọi $x \in \mathbb{R}$. (Vô nghiệm $\rightarrow$ Cùng dấu $a$).
- **Nếu $\Delta = 0$:** $f(x)$ **cùng dấu** với hệ số $a$ với mọi $x \neq -\frac{b}{2a}$, và $f(x)=0$ tại $x=-\frac{b}{2a}$.
- **Nếu $\Delta > 0$:** $f(x)$ có 2 nghiệm phân biệt $x_1 < x_2$.
  - Trong khoảng $(x_1; x_2)$: $f(x)$ **trái dấu** với $a$.
  - Ngoài khoảng $(x_1; x_2)$: $f(x)$ **cùng dấu** với $a$.
  - *Thần chú:* **"Trong trái, Ngoài cùng"**.

---

### 2. Phương trình quy về phương trình bậc hai (Phương trình chứa căn)
📌 **Dạng 1: $\sqrt{f(x)} = \sqrt{g(x)}$**
- Phương pháp: Bình phương 2 vế.
- Điều kiện: Cần đặt $f(x) \ge 0$ HOẶC $g(x) \ge 0$ (chọn cái nào đơn giản hơn để giải).
- $\Rightarrow \begin{cases} g(x) \ge 0 \\ f(x) = g(x) \end{cases}$.

📌 **Dạng 2: $\sqrt{f(x)} = g(x)$**
- Cực kỳ chú ý điều kiện của vế phải $g(x)$.
- $\sqrt{f(x)} = g(x) \Leftrightarrow \begin{cases} g(x) \ge 0 \\ f(x) = [g(x)]^2 \end{cases}$.

---

### 3. 💎 Chuyên đề Master: Biện luận nghiệm Phương trình chứa tham số (VDC)
- **Phương pháp Cô lập m:** Đưa PT hoặc BPT về dạng $m \ge f(x)$ hoặc $m = f(x)$. 
  + Để PT có nghiệm: $m$ phải cắt phần đồ thị của $f(x)$.
  + Để $m \ge f(x) \forall x \in D \Leftrightarrow m \ge \max_D f(x)$.
- **Điều kiện tam thức không đổi dấu:**
  + $f(x) > 0, \forall x \in \mathbb{R} \Leftrightarrow \begin{cases} a > 0 \\ \Delta < 0 \end{cases}$.
  + $f(x) \ge 0, \forall x \in \mathbb{R} \Leftrightarrow \begin{cases} a > 0 \\ \Delta \le 0 \end{cases}$.
  + *(Luôn nhớ xét riêng TH $a = 0$ nếu a chứa tham số).*
        `,
        tips: `
- ⚠️ **Bẫy VDC (Phương trình chứa căn):** Khi giải $\sqrt{f(x)} = g(x)$ chỉ cần đặt $g(x) \ge 0$. Không cần giải bất phương trình cồng kềnh $f(x) \ge 0$ vì khi bình phương lên ta đã có $f(x) = g^2(x) \ge 0$ rồi!
- 💡 **Mẹo xét dấu:** Hãy kiểm tra lại nghiệm bằng cách thay một số bất kỳ (ví dụ $x=0$) vào tam thức xem nó ra âm hay dương để double check quy tắc "Trong trái ngoài cùng".
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Lập bảng xét dấu và giải bất phương trình: $-2x^2 + 5x - 3 \ge 0$.
* **Lời giải:**
  - Xét $f(x) = -2x^2 + 5x - 3$. Giải $f(x)=0 \Rightarrow x=1, x=\frac{3}{2}$.
  - Hệ số $a = -2 < 0$. 
  - Trong trái (mang dấu +) khi $x \in (1; 1.5)$. Lấy $\ge 0$ nên lấy đoạn.
  - Tập nghiệm $S = [1; 1.5]$.

**Bài 2 (Cơ bản):** Giải hệ bất phương trình $\begin{cases} x^2 - 4 > 0 \\ -x^2 + 5x - 6 \ge 0 \end{cases}$.
* **Lời giải:**
  - BPT 1: $x^2 - 4 > 0 \Rightarrow x > 2$ hoặc $x < -2$. Tập $S_1 = (-\infty; -2) \cup (2; +\infty)$.
  - BPT 2: $-x^2 + 5x - 6 \ge 0 \Rightarrow$ Nghiệm $2, 3$. "Trong trái" $\Rightarrow 2 \le x \le 3$. Tập $S_2 = [2; 3]$.
  - Giao $S_1 \cap S_2$: Nửa khoảng $(2; 3]$. 
  - Tập nghiệm $S = (2; 3]$.

**Bài 3 (Vận dụng):** Giải phương trình chứa căn $\sqrt{x^2 - 3x + 2} = \sqrt{2x - 2}$.
* **Lời giải:**
  - ĐK đơn giản: $2x - 2 \ge 0 \Rightarrow x \ge 1$.
  - Bình phương: $x^2 - 3x + 2 = 2x - 2 \Leftrightarrow x^2 - 5x + 4 = 0$.
  - Nghiệm $x=1, x=4$. Đều thỏa mãn $x \ge 1$.
  - Tập nghiệm $S = \{1; 4\}$.

**Bài 4 (Vận dụng):** Giải phương trình chứa căn $\sqrt{2x^2 - 4x + 1} = x - 1$.
* **Lời giải:**
  - ĐK vế phải: $x - 1 \ge 0 \Rightarrow x \ge 1$.
  - Bình phương: $2x^2 - 4x + 1 = (x - 1)^2 \Leftrightarrow 2x^2 - 4x + 1 = x^2 - 2x + 1$.
  - Rút gọn: $x^2 - 2x = 0 \Rightarrow x = 0$ hoặc $x = 2$.
  - Đối chiếu ĐK, loại $x=0$, nhận $x=2$. Tập nghiệm $S = \{2\}$.

**Bài 5 (Vận dụng):** Tìm tập xác định của hàm số $y = \frac{1}{\sqrt{x^2 - 5x + 6}} + \sqrt{4 - x}$.
* **Lời giải:**
  - Hàm số có nghĩa $\Leftrightarrow \begin{cases} x^2 - 5x + 6 > 0 \\ 4 - x \ge 0 \end{cases}$.
  - Giải (1): $x < 2$ hoặc $x > 3$.
  - Giải (2): $x \le 4$.
  - Giao lại: $x \in (-\infty; 2) \cup (3; 4]$.

**Bài 6 (Vận dụng cao):** Tìm $m$ để $(m-1)x^2 - 2(m-1)x + 2 > 0$ nghiệm đúng $\forall x \in \mathbb{R}$.
* **Lời giải:**
  - TH1: $m - 1 = 0 \Rightarrow m = 1$. BPT thành $2 > 0$ (Luôn đúng). Nhận $m=1$.
  - TH2: $m \neq 1$. Để $\forall x \in \mathbb{R} \Leftrightarrow \begin{cases} a > 0 \\ \Delta' < 0 \end{cases} \Leftrightarrow \begin{cases} m - 1 > 0 \\ (m-1)^2 - 2(m-1) < 0 \end{cases}$
  - $\Leftrightarrow \begin{cases} m > 1 \\ (m-1)(m-3) < 0 \end{cases} \Leftrightarrow 1 < m < 3$.
  - Gộp lại: $1 \le m < 3$.

**Bài 7 (Vận dụng cao):** Giải phương trình bằng cách đặt ẩn phụ: $x^2 - 3x + \sqrt{x^2 - 3x + 2} = 4$.
* **Lời giải:**
  - Đặt $t = \sqrt{x^2 - 3x + 2}$ ($t \ge 0$). $\Rightarrow x^2 - 3x = t^2 - 2$.
  - PT trở thành: $(t^2 - 2) + t = 4 \Leftrightarrow t^2 + t - 6 = 0$.
  - Nghiệm $t = 2$ (nhận), $t = -3$ (loại).
  - Với $t = 2 \Rightarrow x^2 - 3x + 2 = 4 \Leftrightarrow x^2 - 3x - 2 = 0$.
  - Nghiệm $x = \frac{3 \pm \sqrt{17}}{2}$.

**Bài 8 (Vận dụng cao):** Tìm $m$ để BPT $-x^2 + 4x + m - 1 \ge 0$ có nghiệm đúng với mọi $x \in [1; 3]$.
* **Lời giải:**
  - Cô lập m: $m \ge x^2 - 4x + 1 \ \forall x \in [1; 3]$.
  - Lập BBT của $g(x) = x^2 - 4x + 1$ trên $[1; 3]$. Đỉnh $x = 2 \in [1; 3]$.
  - $g(1) = -2, g(2) = -3, g(3) = -2$. Max của $g(x)$ là $-2$.
  - Vậy $m \ge \max g(x) \Rightarrow m \ge -2$.

**Bài 9 (Vận dụng cao):** Tìm giá trị nguyên của $m$ để phương trình $\sqrt{-x^2 + 6x + m} = x - 2$ có đúng 2 nghiệm phân biệt.
* **Lời giải:**
  - Tương đương hệ: $\begin{cases} x \ge 2 \\ -x^2 + 6x + m = x^2 - 4x + 4 \end{cases} \Leftrightarrow \begin{cases} x \ge 2 \\ 2x^2 - 10x + 4 - m = 0 \ (*) \end{cases}$
  - PT (*) phải có 2 nghiệm $x_2 > x_1 \ge 2$.
  - $\begin{cases} \Delta' = 25 - 2(4-m) > 0 \\ 2 \cdot f(2) \ge 0 \\ S/2 > 2 \end{cases} \Leftrightarrow \begin{cases} 17 + 2m > 0 \Rightarrow m > -8.5 \\ 2[8 - 20 + 4 - m] \ge 0 \Rightarrow m \le -8 \\ 2.5 > 2 \end{cases}$
  - Giao lại: $-8.5 < m \le -8$. Số nguyên là $m = -8$.

**Bài 10 (Vận dụng cao):** Tìm $m$ để đường thẳng $y = m$ cắt phần đồ thị của hàm số $y = x^2 - 4|x|$ tại 4 điểm phân biệt.
* **Lời giải:**
  - Hàm $y = |x|^2 - 4|x|$ là dạng $f(|x|)$ của hàm $f(x) = x^2 - 4x$.
  - Khảo sát $f(x)$ có đỉnh $I(2; -4)$, qua $O(0; 0)$.
  - Đồ thị lật qua $Oy$ tạo thành hình chữ W với 2 đỉnh thấp ở $y = -4$ và 1 đỉnh cao ở $y=0$.
  - Đường thẳng $y = m$ cắt tại 4 điểm $\Leftrightarrow -4 < m < 0$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH6;
}
