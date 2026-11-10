/* ==========================================================================
   S-NOTE 2026 - HỆ THỐNG BÀI TẬP ÔN LUYỆN TOÁN 10 MASTER
   Chương VI: Hàm số, Đồ thị và Ứng dụng
   Cấu trúc: 20 Bài tập (10 Vận dụng + 10 Vận dụng cao)
   (Định dạng backtick chuẩn hóa, an toàn cho render MathJax)
   ========================================================================== */

const DATA_PRACTICE_TOAN10_CH6 = {
    "MATH10-PRAC-CH6-01": {
        level: `Vận dụng`,
        topic: `Tọa độ đỉnh và Trục đối xứng`,
        question: `Tìm tọa độ đỉnh $I$, trục đối xứng và giao điểm với trục tung của Parabol $(P): y = -2x^2 + 4x - 3$.`,
        hint: `Chìa khóa tư duy: Hoành độ đỉnh $x_I = -\frac{b}{2a}$. Thay $x_I$ vào hàm số tìm tung độ $y_I$. Giao trục tung cho $x=0$.`,
        solution: `
- Hoành độ đỉnh: $x_I = -\frac{b}{2a} = -\frac{4}{2(-2)} = 1$.
- Tung độ đỉnh: Thay $x=1$ vào $(P) \Rightarrow y_I = -2(1)^2 + 4(1) - 3 = -1$.
- Tọa độ đỉnh là $I(1; -1)$.
- Trục đối xứng là đường thẳng $x = 1$.
- Giao với trục tung (trục $Oy$): Cho $x = 0 \Rightarrow y = -3$. Điểm giao là $A(0; -3)$.
        `
    },
    "MATH10-PRAC-CH6-02": {
        level: `Vận dụng`,
        topic: `Xác định Parabol`,
        question: `Xác định các hệ số $a, b$ của Parabol $(P): y = ax^2 + bx + 2$, biết $(P)$ đi qua điểm $A(1; 0)$ và có trục đối xứng $x = \frac{3}{2}$.`,
        hint: `Chìa khóa tư duy: Thay tọa độ $A$ vào $(P)$ được 1 phương trình. Trục đối xứng $-\frac{b}{2a} = \frac{3}{2}$ cho phương trình thứ 2. Giải hệ.`,
        solution: `
- Vì $(P)$ đi qua $A(1; 0)$ nên: $a(1)^2 + b(1) + 2 = 0 \Rightarrow a + b = -2 \quad (1)$.
- Vì $(P)$ có trục đối xứng $x = \frac{3}{2}$ nên: $-\frac{b}{2a} = \frac{3}{2} \Rightarrow -2b = 6a \Rightarrow 3a + b = 0 \quad (2)$.
- Từ (1) và (2) ta có hệ phương trình:
  $\begin{cases} a + b = -2 \\ 3a + b = 0 \end{cases} \Leftrightarrow \begin{cases} -2a = -2 \\ b = -2 - a \end{cases} \Leftrightarrow \begin{cases} a = 1 \\ b = -3 \end{cases}$.
- Kết luận: Hệ số $a = 1, b = -3$. Parabol là $y = x^2 - 3x + 2$.
        `
    },
    "MATH10-PRAC-CH6-03": {
        level: `Vận dụng`,
        topic: `Giá trị lớn nhất - nhỏ nhất trên đoạn`,
        question: `Tìm giá trị lớn nhất và giá trị nhỏ nhất của hàm số $y = x^2 - 4x + 5$ trên đoạn $[0; 3]$.`,
        hint: `Chìa khóa tư duy: Tìm hoành độ đỉnh $x_I$. Kiểm tra xem $x_I$ có thuộc đoạn $[0; 3]$ không. Tính $y$ tại 2 đầu mút và tại đỉnh rồi so sánh.`,
        solution: `
- Hoành độ đỉnh: $x_I = -\frac{-4}{2(1)} = 2$. Nhận thấy $2 \in [0; 3]$.
- Tính giá trị hàm số tại các điểm quan trọng:
  + Tại đầu mút $x = 0$: $y(0) = 0^2 - 4(0) + 5 = 5$.
  + Tại đỉnh $x = 2$: $y(2) = 2^2 - 4(2) + 5 = 1$.
  + Tại đầu mút $x = 3$: $y(3) = 3^2 - 4(3) + 5 = 2$.
- So sánh các kết quả: $1 < 2 < 5$.
- Kết luận: Giá trị lớn nhất $\max y = 5$ (tại $x=0$), giá trị nhỏ nhất $\min y = 1$ (tại $x=2$).
        `
    },
    "MATH10-PRAC-CH6-04": {
        level: `Vận dụng`,
        topic: `Ứng dụng thực tế của Parabol`,
        question: `Một quả bóng được đá lên từ mặt đất. Độ cao $h$ (tính bằng mét) của quả bóng phụ thuộc vào thời gian $t$ (tính bằng giây) theo hàm số $h(t) = -5t^2 + 20t + 1$. Hỏi sau bao lâu kể từ khi đá thì quả bóng đạt độ cao lớn nhất? Độ cao lớn nhất đó là bao nhiêu?`,
        hint: `Chìa khóa tư duy: Hàm số có hệ số $a = -5 < 0$, bề lõm quay xuống nên đạt GTLN tại đỉnh Parabol. Tính tọa độ đỉnh.`,
        solution: `
- Hàm số $h(t) = -5t^2 + 20t + 1$ là một Parabol có $a = -5 < 0$, do đó nó đạt giá trị lớn nhất tại đỉnh.
- Thời gian $t$ để quả bóng đạt độ cao lớn nhất chính là hoành độ đỉnh:
  $t = -\frac{b}{2a} = -\frac{20}{2(-5)} = \frac{-20}{-10} = 2$ (giây).
- Độ cao lớn nhất của quả bóng là tung độ đỉnh, thay $t = 2$ vào hàm $h(t)$:
  $h(2) = -5(2)^2 + 20(2) + 1 = -20 + 40 + 1 = 21$ (mét).
- Kết luận: Sau 2 giây quả bóng đạt độ cao lớn nhất là 21 mét.
        `
    },
    "MATH10-PRAC-CH6-05": {
        level: `Vận dụng`,
        topic: `Giải bất phương trình bậc hai`,
        question: `Giải bất phương trình sau: $-3x^2 + 2x + 1 \ge 0$.`,
        hint: `Chìa khóa tư duy: Giải phương trình $-3x^2 + 2x + 1 = 0$ tìm nghiệm. Áp dụng quy tắc "Trong trái, Ngoài cùng" để xét dấu.`,
        solution: `
- Xét tam thức $f(x) = -3x^2 + 2x + 1$ (hệ số $a = -3 < 0$).
- Giải $f(x) = 0 \Leftrightarrow -3x^2 + 2x + 1 = 0$. 
  Nhẩm nghiệm (hoặc bấm máy): $a+b+c = -3+2+1 = 0$ nên có 2 nghiệm là $x_1 = 1, x_2 = -\frac{1}{3}$.
- Theo quy tắc "Trong trái, Ngoài cùng": 
  $f(x)$ trái dấu với $a$ (tức là $f(x) > 0$) khi $x \in \left(-\frac{1}{3}; 1\right)$.
- Bất phương trình yêu cầu $f(x) \ge 0$, do đó ta lấy cả 2 mút.
- Kết luận: Tập nghiệm của bất phương trình là $S = \left[-\frac{1}{3}; 1\right]$.
        `
    },
    "MATH10-PRAC-CH6-06": {
        level: `Vận dụng`,
        topic: `Tìm điều kiện để phương trình có 2 nghiệm phân biệt`,
        question: `Tìm tất cả các giá trị của tham số $m$ để phương trình $x^2 - 2(m+1)x + m^2 - 3 = 0$ có 2 nghiệm phân biệt.`,
        hint: `Chìa khóa tư duy: Phương trình bậc 2 có 2 nghiệm phân biệt khi và chỉ khi $\Delta > 0$ (hoặc $\Delta' > 0$).`,
        solution: `
- Phương trình có $a = 1 \neq 0$ nên luôn là phương trình bậc hai.
- Ta dùng biệt thức thu gọn $\Delta' = b'^2 - ac = [-(m+1)]^2 - 1(m^2 - 3)$.
- Tính $\Delta'$:
  $\Delta' = m^2 + 2m + 1 - m^2 + 3 = 2m + 4$.
- Để phương trình có 2 nghiệm phân biệt, điều kiện là:
  $\Delta' > 0 \Leftrightarrow 2m + 4 > 0 \Leftrightarrow 2m > -4 \Leftrightarrow m > -2$.
- Kết luận: $m \in (-2; +\infty)$.
        `
    },
    "MATH10-PRAC-CH6-07": {
        level: `Vận dụng`,
        topic: `Giải phương trình chứa căn (Dạng cơ bản 1)`,
        question: `Giải phương trình: $\sqrt{x^2 - 4x + 3} = \sqrt{1 - x}$.`,
        hint: `Chìa khóa tư duy: Dạng $\sqrt{A} = \sqrt{B} \Leftrightarrow B \ge 0$ và $A = B$. Đặt điều kiện cho biểu thức đơn giản hơn ($1-x \ge 0$) rồi bình phương 2 vế.`,
        solution: `
- Phương trình tương đương với hệ:
  $\begin{cases} 1 - x \ge 0 \\ x^2 - 4x + 3 = 1 - x \end{cases}$
- Giải hệ:
  $\Leftrightarrow \begin{cases} x \le 1 \\ x^2 - 3x + 2 = 0 \end{cases}$
- Giải phương trình bậc hai: $x^2 - 3x + 2 = 0 \Rightarrow x_1 = 1, x_2 = 2$.
- Đối chiếu với điều kiện $x \le 1$:
  + $x = 1$ (Thỏa mãn).
  + $x = 2$ (Loại).
- Kết luận: Tập nghiệm của phương trình là $S = \{1\}$.
        `
    },
    "MATH10-PRAC-CH6-08": {
        level: `Vận dụng`,
        topic: `Giải phương trình chứa căn (Dạng cơ bản 2)`,
        question: `Giải phương trình: $\sqrt{2x^2 - 5x - 9} = x - 1$.`,
        hint: `Chìa khóa tư duy: Dạng $\sqrt{A} = B \Leftrightarrow B \ge 0$ và $A = B^2$. Bắt buộc phải có điều kiện $x - 1 \ge 0$ trước khi bình phương.`,
        solution: `
- Phương trình tương đương với hệ:
  $\begin{cases} x - 1 \ge 0 \\ 2x^2 - 5x - 9 = (x - 1)^2 \end{cases}$
- Giải hệ:
  $\Leftrightarrow \begin{cases} x \ge 1 \\ 2x^2 - 5x - 9 = x^2 - 2x + 1 \end{cases}$
  $\Leftrightarrow \begin{cases} x \ge 1 \\ x^2 - 3x - 10 = 0 \end{cases}$
- Giải phương trình $x^2 - 3x - 10 = 0 \Rightarrow x = 5$ hoặc $x = -2$.
- Đối chiếu với điều kiện $x \ge 1$:
  + $x = 5$ (Thỏa mãn).
  + $x = -2$ (Loại).
- Kết luận: Tập nghiệm của phương trình là $S = \{5\}$.
        `
    },
    "MATH10-PRAC-CH6-09": {
        level: `Vận dụng`,
        topic: `Ứng dụng Bất phương trình bậc hai`,
        question: `Một mảnh vườn hình chữ nhật có chiều rộng là $x + 2$ (m) và chiều dài là $8 - x$ (m). Tìm khoảng giá trị của $x$ để diện tích mảnh vườn lớn hơn 16 $m^2$.`,
        hint: `Chìa khóa tư duy: Diện tích $S = (x+2)(8-x)$. Lập bất phương trình $S > 16$, khai triển và giải BPT bậc 2. Đừng quên điều kiện chiều dài, chiều rộng phải dương.`,
        solution: `
**Bước 1: Đặt điều kiện tồn tại mảnh vườn**
- Chiều rộng và chiều dài phải dương:
  $\begin{cases} x + 2 > 0 \\ 8 - x > 0 \end{cases} \Leftrightarrow -2 < x < 8 \quad (*)$.

**Bước 2: Giải bất phương trình diện tích**
- Diện tích $S = (x+2)(8-x) = -x^2 + 6x + 16$.
- Theo bài ra: $S > 16 \Leftrightarrow -x^2 + 6x + 16 > 16 \Leftrightarrow -x^2 + 6x > 0$.
- Xét tam thức $f(x) = -x^2 + 6x$. $f(x) = 0 \Rightarrow x=0$ hoặc $x=6$.
- Trong khoảng hai nghiệm, $f(x)$ cùng dấu với $-a$ (nghĩa là dương).
  $\Rightarrow 0 < x < 6$.
- Đối chiếu với điều kiện $(*)$: Khoảng $(0; 6)$ hoàn toàn nằm trong $(-2; 8)$.
- Kết luận: Để diện tích lớn hơn $16 m^2$ thì $x \in (0; 6)$.
        `
    },
    "MATH10-PRAC-CH6-10": {
        level: `Vận dụng`,
        topic: `Tìm tập xác định của hàm số chứa căn`,
        question: `Tìm tập xác định của hàm số $y = \sqrt{-x^2 + 5x - 4} + \frac{1}{\sqrt{x - 2}}$.`,
        hint: `Chìa khóa tư duy: Biểu thức dưới căn $\ge 0$, biểu thức dưới căn ở mẫu $> 0$. Lập hệ bất phương trình và giao 2 tập nghiệm lại.`,
        solution: `
- Hàm số xác định khi và chỉ khi:
  $\begin{cases} -x^2 + 5x - 4 \ge 0 \quad (1) \\ x - 2 > 0 \quad (2) \end{cases}$
- **Giải (1):** Tam thức $-x^2 + 5x - 4 = 0$ có 2 nghiệm $x=1, x=4$. 
  Dấu của $a$ là âm, lấy $\ge 0$ nên lấy khoảng "Trong trái": $1 \le x \le 4$.
- **Giải (2):** $x - 2 > 0 \Leftrightarrow x > 2$.
- **Giao 2 tập nghiệm:** 
  $[1; 4] \cap (2; +\infty) = (2; 4]$.
- Kết luận: Tập xác định của hàm số là $D = (2; 4]$.
        `
    },
    "MATH10-PRAC-CH6-11": {
        level: `Vận dụng cao`,
        topic: `Biện luận Min/Max trên tập R`,
        question: `Tìm tất cả các giá trị của tham số $m$ để hàm số $y = x^2 - 2mx + m^2 + m$ đạt giá trị nhỏ nhất trên $\mathbb{R}$ bằng 3.`,
        hint: `Chìa khóa tư duy: Hàm số $a = 1 > 0$ đạt GTNN tại đỉnh Parabol. Tính hoành độ đỉnh $x_I$ theo $m$, thay vào tìm tung độ $y_I$ (chính là Min), cho nó bằng 3.`,
        solution: `
- Vì hệ số $a = 1 > 0$, Parabol có bề lõm quay lên, hàm số đạt Giá trị nhỏ nhất trên $\mathbb{R}$ tại đỉnh.
- Hoành độ đỉnh: $x_I = -\frac{-2m}{2(1)} = m$.
- Tung độ đỉnh (Giá trị nhỏ nhất):
  $\min y = y_I = y(m) = m^2 - 2m(m) + m^2 + m = m^2 - 2m^2 + m^2 + m = m$.
- Theo giả thiết, GTNN bằng 3, do đó:
  $m = 3$.
- Kết luận: $m = 3$.
        `
    },
    "MATH10-PRAC-CH6-12": {
        level: `Vận dụng cao`,
        topic: `Biện luận Min/Max trên một đoạn`,
        question: `Tìm $m$ để giá trị lớn nhất của hàm số $y = -x^2 + 2x + m$ trên đoạn $[-1; 2]$ bằng 10.`,
        hint: `Chìa khóa tư duy: Tính $x_I$. Xét xem $x_I$ có thuộc đoạn $[-1; 2]$ không. Lập bảng biến thiên trên đoạn đó để xác định Max, ép bằng 10.`,
        solution: `
- Hoành độ đỉnh: $x_I = -\frac{2}{2(-1)} = 1$.
- Nhận thấy $x_I = 1 \in [-1; 2]$.
- Vì hệ số $a = -1 < 0$, bề lõm quay xuống nên hàm số đồng biến trên $(-\infty; 1)$ và nghịch biến trên $(1; +\infty)$.
- Do đó, trên đoạn $[-1; 2]$, hàm số sẽ đạt Giá trị lớn nhất tại đỉnh $x = 1$.
- Tính Max: $y(1) = -(1)^2 + 2(1) + m = m + 1$.
- Yêu cầu bài toán: $\max y = 10 \Leftrightarrow m + 1 = 10 \Leftrightarrow m = 9$.
- *(Nhận xét thêm: Ta có thể tính tại các mút $y(-1) = m-3, y(2) = m$, rõ ràng $m+1$ là lớn nhất).*
- Kết luận: $m = 9$.
        `
    },
    "MATH10-PRAC-CH6-13": {
        level: `Vận dụng cao`,
        topic: `Đồ thị hàm chứa GTTĐ & Biện luận số nghiệm`,
        question: `Cho hàm số $y = -x^2 + 4x - 3$. Dựa vào đồ thị, hãy biện luận theo tham số $m$ số nghiệm của phương trình: $|-x^2 + 4x - 3| = m$.`,
        hint: `Chìa khóa tư duy: Vẽ đồ thị $y = -x^2 + 4x - 3$. Đồ thị $y = |f(x)|$ lật phần dưới $Ox$ lên trên. Xét tương giao với đường nằm ngang $y = m$.`,
        solution: `
**Bước 1: Khảo sát parabol (P)**
- Parabol $(P): y = -x^2 + 4x - 3$ có đỉnh $I(2; 1)$, $a = -1 < 0$ (úp xuống).
- Cắt trục hoành tại $x=1$ và $x=3$. Phần đồ thị nằm trên $Ox$ là bướu từ $x=1$ đến $x=3$ (cao nhất bằng 1). Hai nhánh 2 bên kéo dài xuống $-\infty$.

**Bước 2: Vẽ đồ thị (C) của hàm $y = |-x^2 + 4x - 3|$**
- Giữ nguyên phần bướu nằm trên $Ox$ (từ $x=1$ đến $x=3$, đỉnh cao 1).
- Lấy đối xứng 2 nhánh nằm dưới $Ox$ qua trục $Ox$. Hai nhánh này sẽ lật ngửa lên $+\infty$.
- Hình dáng đồ thị $(C)$ giống chữ "W" nhưng cong đều, chạm $Ox$ tại 2 điểm $x=1$ và $x=3$, có một đỉnh giữa cao 1.

**Bước 3: Biện luận số nghiệm**
- Số nghiệm của phương trình chính là số giao điểm của đồ thị $(C)$ và đường thẳng $y = m$ nằm ngang:
  + Nếu $m < 0$: Đường thẳng nằm dưới trục $Ox$ $\Rightarrow$ 0 nghiệm.
  + Nếu $m = 0$: Đường thẳng chạm trục $Ox$ tại 2 điểm đáy $\Rightarrow$ 2 nghiệm.
  + Nếu $0 < m < 1$: Đường thẳng cắt 2 nhánh ngoài và 2 cạnh của bướu giữa $\Rightarrow$ 4 nghiệm phân biệt.
  + Nếu $m = 1$: Đường thẳng đi qua đỉnh bướu và cắt 2 nhánh ngoài $\Rightarrow$ 3 nghiệm phân biệt.
  + Nếu $m > 1$: Đường thẳng nằm trên đỉnh bướu, chỉ cắt 2 nhánh ngoài $\Rightarrow$ 2 nghiệm phân biệt.
        `
    },
    "MATH10-PRAC-CH6-14": {
        level: `Vận dụng cao`,
        topic: `Điều kiện tam thức luôn dương chứa tham số`,
        question: `Tìm tất cả các giá trị của tham số $m$ để tam thức $f(x) = (m-2)x^2 - 2(m-2)x + 3 > 0$ với mọi $x \in \mathbb{R}$.`,
        hint: `Chìa khóa tư duy: Vì hệ số $a$ chứa tham số $m$, phải xét TH1: $a=0$. TH2: $a \neq 0$ thì giải hệ $a > 0$ và $\Delta' < 0$.`,
        solution: `
- **Trường hợp 1: $a = 0 \Leftrightarrow m - 2 = 0 \Leftrightarrow m = 2$.**
  Thay $m = 2$ vào $f(x)$, ta được:
  $f(x) = 0x^2 - 0x + 3 = 3 > 0, \forall x \in \mathbb{R}$.
  Trường hợp này thỏa mãn. Ta nhận $m = 2$.

- **Trường hợp 2: $a \neq 0 \Leftrightarrow m \neq 2$.**
  Để $f(x) > 0, \forall x \in \mathbb{R}$, điều kiện là:
  $\begin{cases} a > 0 \\ \Delta' < 0 \end{cases} \Leftrightarrow \begin{cases} m - 2 > 0 \\ [-(m-2)]^2 - 3(m-2) < 0 \end{cases}$
  $\Leftrightarrow \begin{cases} m > 2 \\ (m-2)^2 - 3(m-2) < 0 \end{cases}$
  $\Leftrightarrow \begin{cases} m > 2 \\ (m-2)(m-2-3) < 0 \end{cases} \Leftrightarrow \begin{cases} m > 2 \\ (m-2)(m-5) < 0 \end{cases}$
  Bất phương trình $(m-2)(m-5) < 0$ có nghiệm $2 < m < 5$.
  Kết hợp $m > 2$, ta được $2 < m < 5$.

- **Gộp hai trường hợp:** 
  Ta có $m \in [2; 5)$.
- Kết luận: Giá trị của tham số là $2 \le m < 5$.
        `
    },
    "MATH10-PRAC-CH6-15": {
        level: `Vận dụng cao`,
        topic: `Hệ bất phương trình bậc hai`,
        question: `Giải hệ bất phương trình sau: $\begin{cases} x^2 - 5x + 6 \le 0 \\ -x^2 + 3x + 4 > 0 \end{cases}$.`,
        hint: `Chìa khóa tư duy: Giải riêng lẻ từng bất phương trình bậc hai, sau đó lấy giao của 2 tập nghiệm (biểu diễn trên trục số).`,
        solution: `
- **Giải bất phương trình (1): $x^2 - 5x + 6 \le 0$.**
  Tam thức có 2 nghiệm $x=2$ và $x=3$. Hệ số $a=1>0$, lấy $\le 0$ (Trong trái).
  Tập nghiệm $S_1 = [2; 3]$.
- **Giải bất phương trình (2): $-x^2 + 3x + 4 > 0$.**
  Tam thức có 2 nghiệm $x=-1$ và $x=4$. Hệ số $a=-1<0$, lấy $> 0$ (Trong trái).
  Tập nghiệm $S_2 = (-1; 4)$.
- **Giao 2 tập nghiệm:**
  $S = S_1 \cap S_2 = [2; 3] \cap (-1; 4)$.
  Vì khoảng $(-1; 4)$ bao trùm trọn vẹn đoạn $[2; 3]$, nên $S = [2; 3]$.
- Kết luận: Tập nghiệm của hệ bất phương trình là $S = [2; 3]$.
        `
    },
    "MATH10-PRAC-CH6-16": {
        level: `Vận dụng cao`,
        topic: `Phương trình chứa căn (Đặt ẩn phụ)`,
        question: `Giải phương trình: $x^2 - 4x + \sqrt{x^2 - 4x + 5} = 7$.`,
        hint: `Chìa khóa tư duy: Đặt $t = \sqrt{x^2 - 4x + 5}$ ($t \ge 0$). Lúc đó $x^2 - 4x = t^2 - 5$. Giải phương trình bậc 2 theo $t$.`,
        solution: `
- Đặt $t = \sqrt{x^2 - 4x + 5}$. Vì biểu thức dưới căn $\ge 0$, ta có $t \ge 0$.
- Bình phương 2 vế: $t^2 = x^2 - 4x + 5 \Rightarrow x^2 - 4x = t^2 - 5$.
- Thay vào phương trình ban đầu, ta được:
  $(t^2 - 5) + t = 7$
  $\Leftrightarrow t^2 + t - 12 = 0$.
- Giải phương trình bậc 2 theo $t$, ta được $t = 3$ hoặc $t = -4$.
- Đối chiếu điều kiện $t \ge 0$, ta loại $t = -4$, nhận $t = 3$.
- Với $t = 3 \Rightarrow \sqrt{x^2 - 4x + 5} = 3$
  $\Leftrightarrow x^2 - 4x + 5 = 9$
  $\Leftrightarrow x^2 - 4x - 4 = 0$.
- Giải phương trình này, ta được $x = \frac{4 \pm \sqrt{16 - 4(-4)}}{2} = \frac{4 \pm \sqrt{32}}{2} = 2 \pm 2\sqrt{2}$.
- Kết luận: Phương trình có 2 nghiệm $x = 2 + 2\sqrt{2}$ và $x = 2 - 2\sqrt{2}$.
        `
    },
    "MATH10-PRAC-CH6-17": {
        level: `Vận dụng cao`,
        topic: `Phương trình chứa căn chứa tham số`,
        question: `Tìm tất cả các giá trị nguyên của tham số $m$ để phương trình $\sqrt{-x^2 + 6x + m} = x - 2$ có đúng hai nghiệm phân biệt.`,
        hint: `Chìa khóa tư duy: Đưa về hệ $\begin{cases} x - 2 \ge 0 \\ -x^2 + 6x + m = (x-2)^2 \end{cases}$. Biện luận phương trình bậc hai có 2 nghiệm phân biệt $\ge 2$ bằng $\Delta$, Định lý Vi-ét hoặc đồ thị.`,
        solution: `
**Bước 1: Biến đổi tương đương**
- Phương trình tương đương:
  $\begin{cases} x \ge 2 \\ -x^2 + 6x + m = x^2 - 4x + 4 \end{cases}$
  $\Leftrightarrow \begin{cases} x \ge 2 \\ 2x^2 - 10x + 4 - m = 0 \quad (*) \end{cases}$

**Bước 2: Tìm điều kiện để có 2 nghiệm phân biệt $\ge 2$**
- Đặt $f(x) = 2x^2 - 10x + 4 - m$. Để có 2 nghiệm $x_2 > x_1 \ge 2$, ta cần:
  $\begin{cases} \Delta' > 0 \\ af(2) \ge 0 \\ \frac{S}{2} > 2 \end{cases}$
- Tính toán các điều kiện:
  + $\Delta' = (-5)^2 - 2(4-m) = 25 - 8 + 2m = 17 + 2m > 0 \Rightarrow m > -8.5$.
  + $a \cdot f(2) \ge 0 \Rightarrow 2 \cdot [2(2)^2 - 10(2) + 4 - m] \ge 0 \Rightarrow 2(8 - 20 + 4 - m) \ge 0 \Rightarrow -8 - m \ge 0 \Rightarrow m \le -8$.
  + $\frac{S}{2} = \frac{5}{2} = 2.5 > 2$ (Luôn đúng).
- Giao các điều kiện lại: $-8.5 < m \le -8$.

**Bước 3: Kết luận giá trị nguyên**
- Vì $m \in \mathbb{Z}$ và $-8.5 < m \le -8$, nên giá trị nguyên duy nhất là $m = -8$.
        `
    },
    "MATH10-PRAC-CH6-18": {
        level: `Vận dụng cao`,
        topic: `Tối ưu hóa thực tế bằng Parabol`,
        question: `Một bác nông dân có 40m lưới thép dùng để rào một mảnh vườn hình chữ nhật. Một mặt của mảnh vườn tận dụng bức tường đá có sẵn nên không cần rào. Hỏi kích thước mảnh vườn là bao nhiêu để diện tích được rào là lớn nhất?`,
        hint: `Chìa khóa tư duy: Gọi chiều rộng là $x$, chiều dài (song song với tường) là $y$. Chu vi rào là $2x + y = 40 \Rightarrow y = 40 - 2x$. Diện tích $S = x \cdot y$. Lập hàm và tìm Max.`,
        solution: `
- Gọi $x$ (m) là chiều rộng của mảnh vườn ($0 < x < 20$).
- Gọi $y$ (m) là chiều dài của mảnh vườn (mặt song song với bức tường).
- Tổng chiều dài 3 mặt cần rào lưới là $2x + y = 40 \Rightarrow y = 40 - 2x$.
- Diện tích mảnh vườn là hàm số theo $x$:
  $S(x) = x \cdot y = x(40 - 2x) = -2x^2 + 40x$.
- $S(x)$ là một hàm số bậc hai có hệ số $a = -2 < 0$, đạt Giá trị lớn nhất tại hoành độ đỉnh:
  $x = -\frac{b}{2a} = -\frac{40}{2(-2)} = 10$.
- Khi đó chiều rộng là $10$ m, chiều dài là $y = 40 - 2(10) = 20$ m.
- Diện tích lớn nhất đạt được là $S = 10 \times 20 = 200 \ m^2$.
- Kết luận: Kích thước mảnh vườn là 10m x 20m.
        `
    },
    "MATH10-PRAC-CH6-19": {
        level: `Vận dụng cao`,
        topic: `Bất phương trình nghiệm đúng trên một đoạn`,
        question: `Tìm $m$ để bất phương trình $-x^2 + 4x + m - 1 \ge 0$ có nghiệm đúng với mọi $x \in [1; 3]$.`,
        hint: `Chìa khóa tư duy: Cô lập tham số $m$: $m \ge x^2 - 4x + 1, \forall x \in [1; 3]$. Vậy $m$ phải lớn hơn hoặc bằng GTLN của hàm $g(x) = x^2 - 4x + 1$ trên $[1; 3]$.`,
        solution: `
- Bất phương trình tương đương với:
  $m \ge x^2 - 4x + 1 \quad \forall x \in [1; 3]$.
- Đặt $g(x) = x^2 - 4x + 1$. Yêu cầu bài toán trở thành: $m \ge \max_{[1; 3]} g(x)$.
- Khảo sát hàm số $g(x)$ trên đoạn $[1; 3]$:
  + Hoành độ đỉnh: $x_I = -\frac{-4}{2} = 2 \in [1; 3]$.
  + Lập bảng biến thiên của $g(x)$ trên $[1; 3]$, bề lõm quay lên.
  + Tính các giá trị: $g(1) = -2$, $g(2) = -3$ (Min), $g(3) = -2$.
  + Vậy giá trị lớn nhất của $g(x)$ trên đoạn $[1; 3]$ là $-2$.
- Yêu cầu bài toán $m \ge \max g(x) \Rightarrow m \ge -2$.
- Kết luận: $m \in [-2; +\infty)$.
        `
    },
    "MATH10-PRAC-CH6-20": {
        level: `Vận dụng cao`,
        topic: `Tương giao Đồ thị (Nâng cao)`,
        question: `Cho hàm số $y = x^2 - 2|x| - 3$. Tìm tất cả các giá trị của tham số $m$ để đường thẳng $y = m + 1$ cắt đồ thị hàm số tại đúng 4 điểm phân biệt.`,
        hint: `Chìa khóa tư duy: Đồ thị hàm $y = f(|x|)$ được tạo bằng cách giữ bên phải trục $Oy$, bỏ bên trái $Oy$, rồi lấy đối xứng phần giữ lại qua $Oy$. Biện luận giao điểm theo $m+1$.`,
        solution: `
**Bước 1: Vẽ đồ thị $y = x^2 - 2|x| - 3$**
- Nhận xét $x^2 = |x|^2$, nên hàm số có dạng $y = f(|x|)$ với $f(x) = x^2 - 2x - 3$.
- Khảo sát Parabol $f(x) = x^2 - 2x - 3$:
  + Đỉnh $I(1; -4)$.
  + Cắt trục tung tại $A(0; -3)$.
- Cách vẽ đồ thị $y = f(|x|)$:
  + Giữ nguyên phần đồ thị của $f(x)$ nằm bên phải trục tung (tức là nhánh qua $A(0; -3)$ xuống đỉnh $I(1; -4)$ rồi đi lên $+\infty$).
  + Lấy đối xứng phần nhánh vừa giữ qua trục tung, ta được một nhánh khác đi qua $A(0; -3)$, có đỉnh $I'(-1; -4)$ và đi lên $+\infty$.
- Đồ thị thu được giống chữ "W" lõm xuống dưới, có đỉnh giữa tại $(0; -3)$ và 2 đáy thấp nhất tại $y = -4$.

**Bước 2: Biện luận giao điểm**
- Đường thẳng $y = m + 1$ nằm ngang, để cắt đồ thị hình chữ "W" tại đúng 4 điểm phân biệt, đường thẳng phải nằm trên 2 đáy và nằm dưới đỉnh giữa.
- Tức là: $-4 < m + 1 < -3$.
- Giải ra ta được: $-5 < m < -4$.
- Kết luận: $m \in (-5; -4)$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_PRACTICE_CH6;
}
