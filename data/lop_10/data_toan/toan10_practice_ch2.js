/* ==========================================================================
   S-NOTE 2026 - HỆ THỐNG BÀI TẬP ÔN LUYỆN TOÁN 10 MASTER
   Chương II: Bất phương trình và hệ BPT bậc nhất hai ẩn
   Cấu trúc: 5 Vận dụng (VD) + 5 Vận dụng cao (VDC)
   (Định dạng backtick chuẩn hóa, an toàn cho render MathJax)
   ========================================================================== */

const DATA_PRACTICE_TOAN10_CH2 = {
    "MATH10-PRAC-CH2-01": {
        level: `Vận dụng`,
        topic: `Điểm thuộc miền nghiệm`,
        question: `Cho bất phương trình $2x - 3y + 5 < 0$. Trong các cặp số $A(1; -2)$, $B(-2; 1)$, $C(0; 3)$, có bao nhiêu cặp số là nghiệm của bất phương trình?`,
        hint: `Chìa khóa tư duy: Lần lượt thay tọa độ $(x; y)$ của từng điểm vào vế trái của bất phương trình. Nếu kết quả $< 0$ thì là mệnh đề đúng (là nghiệm).`,
        solution: `
- Thay tọa độ điểm $A(1; -2)$: $2(1) - 3(-2) + 5 = 2 + 6 + 5 = 13$. Vì $13 < 0$ sai nên $A$ không là nghiệm.
- Thay tọa độ điểm $B(-2; 1)$: $2(-2) - 3(1) + 5 = -4 - 3 + 5 = -2$. Vì $-2 < 0$ đúng nên $B$ là nghiệm.
- Thay tọa độ điểm $C(0; 3)$: $2(0) - 3(3) + 5 = -9 + 5 = -4$. Vì $-4 < 0$ đúng nên $C$ là nghiệm.
- Kết luận: Có 2 cặp số là nghiệm của bất phương trình là $B(-2; 1)$ và $C(0; 3)$.
        `
    },
    "MATH10-PRAC-CH2-02": {
        level: `Vận dụng`,
        topic: `Điểm thuộc miền nghiệm chứa tham số`,
        question: `Tìm tất cả các giá trị của tham số $m$ để điểm $M(m; m-1)$ thuộc miền nghiệm của bất phương trình $3x - 2y + 4 \ge 0$.`,
        hint: `Chìa khóa tư duy: Thay $x = m$ và $y = m-1$ vào bất phương trình, sau đó giải bất phương trình bậc nhất một ẩn theo $m$.`,
        solution: `
- Điểm $M(m; m-1)$ thuộc miền nghiệm khi và chỉ khi tọa độ của nó thỏa mãn bất phương trình.
- Thay $x = m, y = m-1$ vào $3x - 2y + 4 \ge 0$, ta được:
  $3(m) - 2(m-1) + 4 \ge 0$
  $\Leftrightarrow 3m - 2m + 2 + 4 \ge 0$
  $\Leftrightarrow m + 6 \ge 0$
  $\Leftrightarrow m \ge -6$.
- Kết luận: Vậy $m \in [-6; +\infty)$ thì điểm $M$ thuộc miền nghiệm của bất phương trình.
        `
    },
    "MATH10-PRAC-CH2-03": {
        level: `Vận dụng`,
        topic: `Đa giác miền nghiệm`,
        question: `Xác định tọa độ các đỉnh của đa giác là miền nghiệm của hệ bất phương trình: 
$\begin{cases} x - y \le 2 \\ 2x + y \le 4 \\ x \ge 0 \\ y \ge 0 \end{cases}$`,
        hint: `Chìa khóa tư duy: Vẽ các đường thẳng biên. Tọa độ các đỉnh là nghiệm của hệ tạo bởi các phương trình biên giao nhau và thỏa mãn các điều kiện còn lại.`,
        solution: `
- Các đường thẳng biên:
  $(d_1): x - y = 2$
  $(d_2): 2x + y = 4$
  $(d_3): x = 0$ (trục tung)
  $(d_4): y = 0$ (trục hoành)
- Tìm các giao điểm của các cặp đường thẳng và đối chiếu điều kiện $x \ge 0, y \ge 0$:
  + Giao của $(d_3)$ và $(d_4)$ là gốc tọa độ $O(0; 0)$. Thỏa mãn tất cả BPT.
  + Giao của $(d_2)$ và trục $Oy$ $(d_3)$: Cho $x=0 \Rightarrow y=4 \Rightarrow A(0; 4)$. Thỏa mãn $0 - 4 \le 2$ (Đúng).
  + Giao của $(d_1)$ và trục $Oy$ $(d_3)$: Cho $x=0 \Rightarrow y=-2$. Bị loại vì $y \ge 0$.
  + Giao của $(d_2)$ và trục $Ox$ $(d_4)$: Cho $y=0 \Rightarrow 2x = 4 \Rightarrow x=2 \Rightarrow B(2; 0)$. Thỏa mãn $2 - 0 \le 2$ (Đúng).
  + Giao của $(d_1)$ và $(d_2)$: Giải hệ $x-y=2$ và $2x+y=4 \Rightarrow x=2, y=0$. Trùng với điểm $B$.
- Kết luận: Miền nghiệm của hệ là một tam giác với 3 đỉnh có tọa độ là: $O(0; 0)$, $A(0; 4)$ và $B(2; 0)$.
        `
    },
    "MATH10-PRAC-CH2-04": {
        level: `Vận dụng`,
        topic: `Thiết lập Hàm mục tiêu`,
        question: `Một xưởng sản xuất hai loại sản phẩm $A$ và $B$. Để sản xuất 1 kg sản phẩm $A$ cần 2 giờ máy và 3 kg nguyên liệu. Để sản xuất 1 kg sản phẩm $B$ cần 4 giờ máy và 2 kg nguyên liệu. Xưởng có tối đa 40 giờ máy và 45 kg nguyên liệu. Lợi nhuận khi bán 1 kg $A$ là 500 nghìn đồng, 1 kg $B$ là 400 nghìn đồng. Gọi $x, y$ lần lượt là số kg sản phẩm $A$ và $B$ cần sản xuất. Hãy thiết lập hệ bất phương trình ràng buộc và hàm mục tiêu lợi nhuận.`,
        hint: `Chìa khóa tư duy: Lập bảng tóm tắt nguyên liệu và thời gian. Chú ý các điều kiện tự nhiên $x \ge 0, y \ge 0$.`,
        solution: `
**Bước 1: Điều kiện tự nhiên**
- Vì $x, y$ là số lượng sản phẩm nên $x \ge 0, y \ge 0$.

**Bước 2: Thiết lập các ràng buộc (Hệ BPT)**
- Ràng buộc về thời gian máy: Sản xuất $x$ kg A cần $2x$ giờ, $y$ kg B cần $4y$ giờ. Tổng thời gian máy không vượt quá 40 giờ: $2x + 4y \le 40 \Leftrightarrow x + 2y \le 20$.
- Ràng buộc về nguyên liệu: Sản xuất $x$ kg A cần $3x$ kg, $y$ kg B cần $2y$ kg. Tổng nguyên liệu không vượt quá 45 kg: $3x + 2y \le 45$.
- Vậy ta có hệ BPT ràng buộc:
  $\begin{cases} x + 2y \le 20 \\ 3x + 2y \le 45 \\ x \ge 0 \\ y \ge 0 \end{cases}$

**Bước 3: Thiết lập hàm mục tiêu**
- Lợi nhuận thu được là hàm số: $F(x, y) = 500x + 400y$ (nghìn đồng).
- Bài toán tối ưu là tìm $(x; y)$ thỏa mãn hệ trên để $F(x, y)$ đạt giá trị lớn nhất.
        `
    },
    "MATH10-PRAC-CH2-05": {
        level: `Vận dụng`,
        topic: `Tính cực trị hàm mục tiêu`,
        question: `Tìm giá trị lớn nhất và giá trị nhỏ nhất của biểu thức $F(x, y) = 2x - 3y$ trên miền đa giác có các đỉnh là $A(0; 0)$, $B(5; 0)$, $C(4; 3)$ và $D(1; 4)$.`,
        hint: `Chìa khóa tư duy: Theo Định lý Quy hoạch tuyến tính, Max và Min của $F(x,y)$ trên đa giác lồi luôn đạt được tại một trong các đỉnh của đa giác. Chỉ cần tính và so sánh $F$ tại 4 đỉnh.`,
        solution: `
- Biểu thức hàm mục tiêu là $F(x, y) = 2x - 3y$.
- Ta tính giá trị của $F$ tại 4 đỉnh của đa giác:
  + Tại $A(0; 0)$: $F(0, 0) = 2(0) - 3(0) = 0$.
  + Tại $B(5; 0)$: $F(5, 0) = 2(5) - 3(0) = 10$.
  + Tại $C(4; 3)$: $F(4, 3) = 2(4) - 3(3) = 8 - 9 = -1$.
  + Tại $D(1; 4)$: $F(1, 4) = 2(1) - 3(4) = 2 - 12 = -10$.
- So sánh các kết quả tính được: $-10 < -1 < 0 < 10$.
- Kết luận: 
  + Giá trị lớn nhất của biểu thức là $\max F = 10$ (đạt được tại đỉnh $B(5; 0)$).
  + Giá trị nhỏ nhất của biểu thức là $\min F = -10$ (đạt được tại đỉnh $D(1; 4)$).
        `
    },
    "MATH10-PRAC-CH2-06": {
        level: `Vận dụng cao`,
        topic: `Giải hệ BPT chứa tham số`,
        question: `Tìm tham số $m$ để điểm $M(m; m^2)$ nằm trong miền nghiệm của hệ bất phương trình:
$\begin{cases} 2x + y - 3 \le 0 \\ x - y + 1 > 0 \end{cases}$`,
        hint: `Chìa khóa tư duy: Thay tọa độ $(m; m^2)$ vào hệ, giải hệ bất phương trình bậc hai một ẩn $m$ và lấy giao của hai tập nghiệm.`,
        solution: `
- Điểm $M(m; m^2)$ thuộc miền nghiệm khi và chỉ khi:
  $\begin{cases} 2m + m^2 - 3 \le 0 \quad (1) \\ m - m^2 + 1 > 0 \quad (2) \end{cases}$
- **Giải BPT (1):** $m^2 + 2m - 3 \le 0$.
  Tam thức có 2 nghiệm là $m=1, m=-3$. Xét dấu "Trong trái ngoài cùng" (vì $a=1>0$, lấy $\le 0$ là lấy khoảng giữa).
  $\Rightarrow -3 \le m \le 1$.
- **Giải BPT (2):** $-m^2 + m + 1 > 0 \Leftrightarrow m^2 - m - 1 < 0$.
  Tam thức có 2 nghiệm là $m = \frac{1 \pm \sqrt{5}}{2}$.
  Lấy khoảng giữa: $\frac{1 - \sqrt{5}}{2} < m < \frac{1 + \sqrt{5}}{2}$.
  *(Ghi chú: $\frac{1 - \sqrt{5}}{2} \approx -0.618$ và $\frac{1 + \sqrt{5}}{2} \approx 1.618$)*.
- **Lấy giao 2 tập nghiệm:**
  Ta có $[-3; 1] \cap \left(\frac{1 - \sqrt{5}}{2}; \frac{1 + \sqrt{5}}{2}\right)$.
  Vì $-3 < \frac{1 - \sqrt{5}}{2} \approx -0.618$ và $1 < \frac{1 + \sqrt{5}}{2} \approx 1.618$.
  Phần chung là: $\frac{1 - \sqrt{5}}{2} < m \le 1$.
- Kết luận: Giá trị $m$ cần tìm là $m \in \left( \frac{1 - \sqrt{5}}{2}; 1 \right]$.
        `
    },
    "MATH10-PRAC-CH2-07": {
        level: `Vận dụng cao`,
        topic: `Bài toán Quy hoạch tuyến tính (Min)`,
        question: `Tìm giá trị nhỏ nhất của biểu thức $F(x, y) = 3x + y$ trên miền nghiệm của hệ bất phương trình:
$\begin{cases} x + y \ge 4 \\ x + 3y \ge 6 \\ x \ge 0 \\ y \ge 0 \end{cases}$`,
        hint: `Chìa khóa tư duy: Đây là miền đa giác KHÔNG bị chặn. Tìm tọa độ các đỉnh của miền. Min chắc chắn đạt được tại một trong các đỉnh, nhưng hàm số không có Max.`,
        solution: `
- Các đường thẳng biên:
  $(d_1): x + y = 4$
  $(d_2): x + 3y = 6$
  $(d_3): x = 0$ và $(d_4): y = 0$
- Miền nghiệm là miền hở nằm phía trên các đường biên. Ta xác định các đỉnh:
  + Giao của $(d_1)$ và $(d_3)$ ($x=0$): $0 + y = 4 \Rightarrow y=4 \Rightarrow A(0; 4)$. Kiểm tra BPT2: $0+12 \ge 6$ (Thỏa).
  + Giao của $(d_2)$ và $(d_4)$ ($y=0$): $x + 0 = 6 \Rightarrow x=6 \Rightarrow B(6; 0)$. Kiểm tra BPT1: $6+0 \ge 4$ (Thỏa).
  + Giao của $(d_1)$ và $(d_2)$: $\begin{cases} x + y = 4 \\ x + 3y = 6 \end{cases} \Rightarrow \begin{cases} 2y = 2 \\ x = 4 - y \end{cases} \Rightarrow C(3; 1)$. Thỏa $x, y \ge 0$.
- Các đỉnh của miền đa giác hở là: $A(0; 4), B(6; 0), C(3; 1)$.
- Tính giá trị $F(x, y) = 3x + y$ tại các đỉnh:
  $F(A) = 3(0) + 4 = 4$.
  $F(B) = 3(6) + 0 = 18$.
  $F(C) = 3(3) + 1 = 10$.
- Kết luận: Giá trị nhỏ nhất của $F(x,y)$ là 4, đạt được tại $x=0, y=4$.
        `
    },
    "MATH10-PRAC-CH2-08": {
        level: `Vận dụng cao`,
        topic: `Tối ưu hóa thực tế`,
        question: `Một xưởng may sản xuất 2 loại áo: Loại I và Loại II. Để sản xuất 1 áo loại I cần 1 giờ cắt và 2 giờ may. Sản xuất 1 áo loại II cần 1 giờ cắt và 1 giờ may. Mỗi ngày xưởng có tối đa 8 giờ cắt và 12 giờ may. Tiền lãi 1 áo loại I là 500k, 1 áo loại II là 400k. Xưởng nên may bao nhiêu áo mỗi loại để tổng tiền lãi lớn nhất? (Biết số áo phải là số nguyên).`,
        hint: `Chìa khóa tư duy: Lập hệ BPT, vẽ miền nghiệm, tìm các đỉnh. Tính lợi nhuận tại các đỉnh và chọn GTLN. Nếu tọa độ đỉnh không nguyên, phải xét các điểm nguyên lân cận trong miền.`,
        solution: `
**Bước 1: Lập mô hình**
- Gọi $x, y$ (nguyên không âm) là số áo loại I và loại II cần sản xuất mỗi ngày.
- Ràng buộc thời gian cắt: $x + y \le 8$.
- Ràng buộc thời gian may: $2x + y \le 12$.
- Lợi nhuận: $F(x, y) = 500x + 400y$ (nghìn đồng).
- Hệ BPT: $\begin{cases} x + y \le 8 \\ 2x + y \le 12 \\ x \ge 0 \\ y \ge 0 \end{cases}$

**Bước 2: Tìm các đỉnh của miền đa giác**
- Giao $(x+y=8)$ và $(2x+y=12)$: Giải hệ ta được $x=4, y=4 \Rightarrow A(4; 4)$.
- Giao $(x+y=8)$ và trục Oy $(x=0)$: $y=8 \Rightarrow B(0; 8)$. Kiểm tra: $2(0)+8 \le 12$ (Thỏa mãn).
- Giao $(2x+y=12)$ và trục Ox $(y=0)$: $x=6 \Rightarrow C(6; 0)$. Kiểm tra: $6+0 \le 8$ (Thỏa mãn).
- Gốc tọa độ $O(0; 0)$.

**Bước 3: Tính lợi nhuận**
- $F(O) = 0$.
- $F(B) = 500(0) + 400(8) = 3200$ (k).
- $F(C) = 500(6) + 400(0) = 3000$ (k).
- $F(A) = 500(4) + 400(4) = 3600$ (k).
- Kết luận: Tổng tiền lãi lớn nhất là 3.600.000 đồng khi sản xuất 4 áo loại I và 4 áo loại II. Tọa độ đỉnh nguyên nên không cần hiệu chỉnh.
        `
    },
    "MATH10-PRAC-CH2-09": {
        level: `Vận dụng cao`,
        topic: `Diện tích miền nghiệm`,
        question: `Tính diện tích của đa giác là miền nghiệm của hệ bất phương trình:
$\begin{cases} 0 \le y \le 3 \\ x - y \ge -1 \\ x + y \le 5 \end{cases}$`,
        hint: `Chìa khóa tư duy: Vẽ chính xác đa giác trên mặt phẳng tọa độ (tìm các đỉnh). Sau đó có thể chia đa giác thành các tam giác, hình thang vuông để tính, hoặc dùng công thức diện tích dây giày (Shoelace).`,
        solution: `
**Bước 1: Tìm tọa độ các đỉnh của miền đa giác**
- Giới hạn bởi 4 đường thẳng: $(d_1): y=0$; $(d_2): y=3$; $(d_3): x-y=-1$; $(d_4): x+y=5$.
- Giao $(d_1): y=0$ với $(d_3): x-0=-1 \Rightarrow x=-1 \Rightarrow A(-1; 0)$.
- Giao $(d_1): y=0$ với $(d_4): x+0=5 \Rightarrow x=5 \Rightarrow B(5; 0)$.
- Giao $(d_2): y=3$ với $(d_4): x+3=5 \Rightarrow x=2 \Rightarrow C(2; 3)$.
- Giao $(d_2): y=3$ với $(d_3): x-3=-1 \Rightarrow x=2 \Rightarrow D(2; 3)$.
  *(Đợi đã, giao điểm của $(d_3)$ và $(d_4)$ là $x-y=-1$ và $x+y=5$. Cộng 2 vế $\Rightarrow 2x = 4 \Rightarrow x=2, y=3$. Giao điểm này lại trùng đúng vào đường $y=3$!)*
- Đa giác miền nghiệm thực chất là một **Tam giác** với 3 đỉnh: $A(-1; 0)$, $B(5; 0)$ và $C(2; 3)$.
  Đường $y=3$ chỉ là đường đi qua đỉnh trên cùng của tam giác, kết hợp $y \le 3$ là hiển nhiên thỏa mãn cho toàn bộ tam giác này (vì tung độ cao nhất là 3). Điều kiện $y \ge 0$ chính là đáy AB nằm trên trục Ox.

**Bước 2: Tính diện tích**
- Đáy của tam giác nằm trên trục Ox là đoạn $AB$.
- Độ dài $AB = x_B - x_A = 5 - (-1) = 6$.
- Chiều cao $h$ hạ từ đỉnh $C(2; 3)$ xuống trục Ox là $h = |y_C| = 3$.
- Diện tích tam giác: $S = \frac{1}{2} \cdot AB \cdot h = \frac{1}{2} \cdot 6 \cdot 3 = 9$.
- Kết luận: Diện tích miền đa giác là 9.
        `
    },
    "MATH10-PRAC-CH2-10": {
        level: `Vận dụng cao`,
        topic: `Biện luận Min/Max chứa tham số`,
        question: `Tìm tham số $m > 0$ để giá trị lớn nhất của biểu thức $F(x, y) = x + 2y$ trên miền đa giác $D$: $\begin{cases} x \ge 0 \\ y \ge 0 \\ 2x + y \le m \end{cases}$ bằng 12.`,
        hint: `Chìa khóa tư duy: Miền D (với $m>0$) luôn là một tam giác vuông. Biểu diễn tọa độ các đỉnh theo $m$. Tính F theo $m$ tại các đỉnh để tìm hàm Max(m), ép nó bằng 12.`,
        solution: `
**Bước 1: Xác định tọa độ các đỉnh của miền D**
- Miền D được giới hạn bởi $x=0$, $y=0$ và đường thẳng $(d): 2x + y = m$.
- Tìm các giao điểm:
  + Giao của $x=0$ và $y=0$ là gốc tọa độ $O(0; 0)$.
  + Giao của $(d)$ và trục Oy ($x=0$): $2(0) + y = m \Rightarrow y = m \Rightarrow A(0; m)$.
  + Giao của $(d)$ và trục Ox ($y=0$): $2x + 0 = m \Rightarrow x = \frac{m}{2} \Rightarrow B\left(\frac{m}{2}; 0\right)$.
- Vì $m > 0$ nên các đỉnh đều nằm trên phần dương của các trục. Đa giác D là tam giác $OAB$.

**Bước 2: Tìm Max của F(x,y)**
- Tính $F(x, y) = x + 2y$ tại 3 đỉnh:
  + $F(O) = 0 + 2(0) = 0$.
  + $F(A) = 0 + 2(m) = 2m$.
  + $F(B) = \frac{m}{2} + 2(0) = \frac{m}{2}$.
- Vì $m > 0$ nên rõ ràng $2m > \frac{m}{2} > 0$.
- Vậy giá trị lớn nhất của $F(x, y)$ trên miền D là $2m$ (đạt được tại đỉnh $A$).

**Bước 3: Giải phương trình tham số**
- Theo yêu cầu bài toán, GTLN bằng 12.
  $\Rightarrow 2m = 12 \Leftrightarrow m = 6$.
- Giá trị $m = 6$ thỏa mãn điều kiện $m > 0$.
- Kết luận: $m = 6$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_PRACTICE_CH2;
}
