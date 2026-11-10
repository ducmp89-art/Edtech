/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương II: Bất phương trình và Hệ bất phương trình bậc nhất hai ẩn
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
   ========================================================================== */

const DATA_TOAN10_CH2 = {
    "MATH10-CH2-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương II: Bất phương trình và hệ BPT bậc nhất hai ẩn",
        title: "Bài 1: Bất phương trình bậc nhất hai ẩn",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương II", "Bài 1"],
        theory: `
### 1. Khái niệm cơ bản
- **Bất phương trình bậc nhất hai ẩn** $x, y$ là bất phương trình có một trong các dạng: 
  $ax + by \le c$, $ax + by < c$, $ax + by \ge c$, $ax + by > c$
  (trong đó $a, b, c$ là các số thực, $a$ và $b$ không đồng thời bằng 0).
- **Nghiệm:** Mỗi cặp số $(x_0; y_0)$ sao cho $ax_0 + by_0 < c$ là một mệnh đề đúng được gọi là một nghiệm của bất phương trình.

### 2. Biểu diễn miền nghiệm trên mặt phẳng tọa độ
- **Bước 1:** Vẽ đường thẳng $\Delta: ax + by = c$ trên mặt phẳng tọa độ $Oxy$. (Vẽ nét liền nếu có dấu $\le, \ge$; nét đứt nếu chỉ có dấu $<, >$).
- **Bước 2:** Lấy một điểm $M_0(x_0; y_0)$ không nằm trên $\Delta$ (thường chọn gốc tọa độ $O(0; 0)$ nếu $c \neq 0$).
- **Bước 3:** Tính giá trị $ax_0 + by_0$ và so sánh với $c$.
- **Bước 4:** Kết luận. 
  + Nếu $ax_0 + by_0 < c$ đúng với chiều BPT, miền nghiệm là nửa mặt phẳng bờ $\Delta$ chứa điểm $M_0$.
  + Nếu sai, miền nghiệm là nửa mặt phẳng bờ $\Delta$ KHÔNG chứa điểm $M_0$ (Gạch bỏ phần chứa $M_0$).

---

### 3. 💎 Chuyên đề Master: Vị trí tương đối và BPT chứa Giá trị tuyệt đối (VDC)
📌 **Định lý về vị trí tương đối của hai điểm đối với đường thẳng:**
Cho đường thẳng $\Delta: ax + by + c = 0$ và hai điểm $M(x_M; y_M), N(x_N; y_N)$ không thuộc $\Delta$. Đặt $f(x,y) = ax + by + c$.
- $M, N$ nằm **cùng phía** đối với $\Delta \Leftrightarrow f(x_M, y_M) \cdot f(x_N, y_N) > 0$.
- $M, N$ nằm **khác phía** đối với $\Delta \Leftrightarrow f(x_M, y_M) \cdot f(x_N, y_N) < 0$.

📌 **Biểu diễn miền nghiệm chứa Giá trị tuyệt đối (Ví dụ: $|x| + |y| \le a$ với $a>0$):**
- Đây là bài toán hợp của 4 hệ bất phương trình tương ứng với 4 góc phần tư. 
- Đồ thị (miền nghiệm) của $|x| + |y| \le a$ là một **hình vuông** có các đỉnh nằm trên các trục tọa độ: $(a; 0), (-a; 0), (0; a), (0; -a)$.
- Diện tích miền nghiệm này là $S = \frac{1}{2} \cdot (2a) \cdot (2a) = 2a^2$.
        `,
        tips: `
- ⚠️ **Lỗi nét liền / nét đứt:** Rất nhiều học sinh mất điểm trình bày vì vẽ đường thẳng nét liền cho các bất phương trình KHÔNG CÓ dấu bằng (dấu $<$ hoặc $>$). 
- 💡 **Mẹo thử điểm O(0,0):** Luôn ưu tiên dùng gốc tọa độ $O(0;0)$ để thử vì tính toán cực nhanh. Nhưng nếu đường thẳng $\Delta$ ĐI QUA gốc $O$ (tức là $c = 0$), bạn BẮT BUỘC phải chọn điểm khác như $(1; 0)$ hoặc $(0; 1)$ để thử nhé.
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Kiểm tra xem các cặp số $(1; -1)$ và $(2; 3)$ có phải là nghiệm của bất phương trình $2x - 3y + 1 \ge 0$ không?
* **Lời giải:**
  - Thay $(1; -1)$ vào BPT: $2(1) - 3(-1) + 1 = 2 + 3 + 1 = 6 \ge 0$ (Đúng). Vậy $(1; -1)$ là nghiệm.
  - Thay $(2; 3)$ vào BPT: $2(2) - 3(3) + 1 = 4 - 9 + 1 = -4 \ge 0$ (Sai). Vậy $(2; 3)$ không là nghiệm.

**Bài 2 (Cơ bản):** Biểu diễn miền nghiệm của bất phương trình: $x - 2y \le 4$.
* **Lời giải:**
  - Vẽ đường thẳng $\Delta: x - 2y = 4$ (đi qua $A(4; 0)$ và $B(0; -2)$) bằng nét liền.
  - Chọn điểm $O(0; 0) \notin \Delta$. Thay tọa độ O vào BPT: $0 - 2(0) = 0 \le 4$ (Đúng).
  - Vậy miền nghiệm là nửa mặt phẳng bờ $\Delta$ chứa gốc tọa độ $O$ (kể cả bờ $\Delta$). Ta gạch bỏ phần nửa mặt phẳng không chứa O.

**Bài 3 (Vận dụng):** Biểu diễn miền nghiệm của bất phương trình: $3x + y > 0$.
* **Lời giải:**
  - Vẽ đường thẳng $d: 3x + y = 0$ (đi qua $O(0;0)$ và $M(1; -3)$) bằng nét ĐỨT (do không có dấu =).
  - Vì $d$ đi qua $O(0;0)$ nên ta phải chọn điểm khác để thử, ví dụ $N(1; 1)$.
  - Thay tọa độ N vào BPT: $3(1) + 1 = 4 > 0$ (Đúng).
  - Miền nghiệm là nửa mặt phẳng bờ $d$ chứa điểm $N(1; 1)$ (không kể bờ $d$).

**Bài 4 (Vận dụng):** Một gia đình cần mua thịt lợn và thịt bò cho bữa tiệc. Giá thịt lợn là 100 nghìn đồng/kg, giá thịt bò là 250 nghìn đồng/kg. Gia đình dự định chi tối đa 1 triệu đồng. Gọi $x, y$ lần lượt là số kg thịt lợn và thịt bò cần mua. Lập BPT biểu thị điều kiện của $x, y$ và chỉ ra 1 nghiệm.
* **Lời giải:**
  - Số tiền mua thịt lợn là $100x$, mua thịt bò là $250y$.
  - Tổng chi phí không vượt quá 1 triệu (1000 nghìn): $100x + 250y \le 1000$.
  - Chia 2 vế cho 50, BPT tối giản: $2x + 5y \le 20$ (điều kiện $x \ge 0, y \ge 0$).
  - Một nghiệm ví dụ: $x = 2, y = 2$ (Chi 700 nghìn, thỏa mãn).

**Bài 5 (Vận dụng):** Viết bất phương trình bậc nhất hai ẩn có miền nghiệm là nửa mặt phẳng bờ $\Delta: 2x - y + 3 = 0$ chứa điểm $M(1; 1)$ (không kể bờ).
* **Lời giải:**
  - Đặt $f(x, y) = 2x - y + 3$. BPT sẽ có dấu $<$ hoặc $>$.
  - Thay tọa độ $M(1; 1)$ vào đa thức: $f(1, 1) = 2(1) - 1 + 3 = 4$.
  - Ta thấy $4 > 0$, do đó nửa mặt phẳng chứa M sẽ thỏa mãn BPT $2x - y + 3 > 0$.
  - Vậy BPT cần tìm là: $2x - y + 3 > 0$.

**Bài 6 (Vận dụng cao):** Tính diện tích $S$ của phần mặt phẳng giới hạn bởi các đường $x \ge 0, y \ge 0$ và đường thẳng $3x + 4y = 12$.
* **Lời giải:**
  - Hệ điều kiện $x \ge 0, y \ge 0, 3x + 4y \le 12$ biểu diễn một tam giác vuông $OAB$.
  - Giao của $\Delta: 3x + 4y = 12$ với trục $Ox$ ($y=0$): $3x = 12 \Rightarrow x = 4 \Rightarrow A(4; 0)$.
  - Giao với trục $Oy$ ($x=0$): $4y = 12 \Rightarrow y = 3 \Rightarrow B(0; 3)$.
  - Diện tích tam giác vuông $OAB$ vuông tại O:
    $S = \frac{1}{2} \cdot OA \cdot OB = \frac{1}{2} \cdot 4 \cdot 3 = 6$ (đvdt).

**Bài 7 (Vận dụng cao):** Cho bất phương trình $x - 2y + m \le 0$ (1) (với $m$ là tham số). Tìm $m$ để điểm $A(1; 2)$ thuộc miền nghiệm của (1) và $B(-2; 1)$ KHÔNG thuộc miền nghiệm của (1).
* **Lời giải:**
  - Để $A(1; 2)$ thuộc miền nghiệm: $1 - 2(2) + m \le 0 \Leftrightarrow m - 3 \le 0 \Leftrightarrow m \le 3$.
  - Để $B(-2; 1)$ KHÔNG thuộc miền nghiệm (tức là $B$ làm BPT sai $\Rightarrow B$ thỏa mãn BPT ngược lại $>0$):
    $-2 - 2(1) + m > 0 \Leftrightarrow m - 4 > 0 \Leftrightarrow m > 4$.
  - Giao 2 điều kiện: $\begin{cases} m \le 3 \\ m > 4 \end{cases}$. Hệ này vô nghiệm.
  - Vậy không tồn tại $m$ thỏa mãn.

**Bài 8 (Vận dụng cao):** Cho đường thẳng $\Delta: 3x - y + 2 = 0$. Tìm $m$ để 2 điểm $A(m; 1)$ và $B(2; -m)$ nằm CÙNG PHÍA đối với $\Delta$.
* **Lời giải:**
  - Đặt $f(x, y) = 3x - y + 2$. A, B nằm cùng phía $\Leftrightarrow f(A) \cdot f(B) > 0$.
  - $f(A) = 3m - 1 + 2 = 3m + 1$.
  - $f(B) = 3(2) - (-m) + 2 = m + 8$.
  - Yêu cầu: $(3m + 1)(m + 8) > 0$.
  - Xét dấu tam thức bậc 2 (có 2 nghiệm $-8$ và $-1/3$, a=3>0, lấy dấu dương "cùng dấu a"):
    $\Rightarrow m \in (-\infty; -8) \cup \left(-\frac{1}{3}; +\infty\right)$.

**Bài 9 (Vận dụng cao):** Đếm số điểm có tọa độ nguyên $(x; y)$ thỏa mãn BPT: $|x| + |y| \le 3$.
* **Lời giải:**
  - Miền nghiệm là hình vuông tâm $O(0;0)$, đỉnh tại $(\pm3, 0)$ và $(0, \pm3)$.
  - Các điểm nguyên nằm trong hoặc trên biên của hình vuông này được đếm theo từng cột $x$:
    + $x = 0 \Rightarrow |y| \le 3 \Rightarrow y \in \{-3, -2, -1, 0, 1, 2, 3\}$ (7 điểm).
    + $x = \pm 1 \Rightarrow |y| \le 2 \Rightarrow y \in \{-2, -1, 0, 1, 2\}$ (5 điểm/cột $\times 2 = 10$ điểm).
    + $x = \pm 2 \Rightarrow |y| \le 1 \Rightarrow y \in \{-1, 0, 1\}$ (3 điểm/cột $\times 2 = 6$ điểm).
    + $x = \pm 3 \Rightarrow |y| \le 0 \Rightarrow y = 0$ (1 điểm/cột $\times 2 = 2$ điểm).
  - Tổng số điểm nguyên = $7 + 10 + 6 + 2 = 25$ điểm.
  - *(Mẹo công thức đếm với hình vuông dạng $|x|+|y| \le n$: Tổng số điểm = $2n^2 + 2n + 1$. Thử với $n=3 \Rightarrow 2(9)+6+1 = 25$ điểm).*

**Bài 10 (Nâng cao):** Biểu diễn miền nghiệm và tính diện tích của miền thỏa mãn hệ: $|x - 1| + |y + 2| \le 4$.
* **Lời giải:**
  - Miền nghiệm là hình vuông được suy ra từ hình vuông cơ bản $|X| + |Y| \le 4$ bằng phép tịnh tiến.
  - Tâm hình vuông dời từ $(0; 0)$ sang điểm $I(1; -2)$.
  - Bán kính (nửa đường chéo) của hình vuông là $a = 4$.
  - 4 đỉnh của miền là: $(1+4; -2) = (5; -2)$, $(1-4; -2) = (-3; -2)$, $(1; -2+4) = (1; 2)$, $(1; -2-4) = (1; -6)$.
  - Cạnh hình vuông là $c = \sqrt{4^2 + 4^2} = 4\sqrt{2}$.
  - Diện tích miền nghiệm: $S = c^2 = (4\sqrt{2})^2 = 32$ (đvdt).
  - *(Dùng luôn công thức giải nhanh ở phần Master: $S = 2a^2 = 2(4^2) = 32$).*
        `
    },

    "MATH10-CH2-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương II: Bất phương trình và hệ BPT bậc nhất hai ẩn",
        title: "Bài 2: Hệ Bất phương trình bậc nhất hai ẩn",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương II", "Bài 2"],
        theory: `
### 1. Khái niệm và Biểu diễn miền nghiệm của Hệ
- **Định nghĩa:** Hệ bất phương trình bậc nhất hai ẩn gồm từ hai bất phương trình bậc nhất hai ẩn trở lên.
- **Nghiệm của hệ:** Là cặp số $(x; y)$ đồng thời thỏa mãn tất cả các bất phương trình trong hệ.
- **Biểu diễn miền nghiệm (Giao của các nửa mặt phẳng):**
  - Trong cùng một hệ trục $Oxy$, vẽ đường thẳng bờ của từng BPT.
  - Dùng phép "Gạch bỏ" để loại đi miền KHÔNG chứa nghiệm của từng BPT.
  - Phần mặt phẳng CÒN LẠI KHÔNG BỊ GẠCH (bao gồm cả bờ nếu có) chính là miền nghiệm của hệ.

---

### 2. 💎 Chuyên đề Master: Quy hoạch tuyến tính (Linear Programming)
📌 **Định lí cực trị trên đa giác (Bài toán Tối ưu hóa):**
- Cho miền nghiệm $D$ của một hệ BPT là một **đa giác lồi** (đóng và bị chặn). 
- Biểu thức bậc nhất hai ẩn $F(x, y) = ax + by$ sẽ luôn đạt Giá trị Lớn nhất (Max) và Giá trị Nhỏ nhất (Min) tại **một trong các ĐỈNH của đa giác $D$**.

📌 **4 Bước giải bài toán Tối ưu hóa Thực tế (Kinh tế, Sản xuất):**
- **Bước 1 (Lập mô hình):** Gọi $x, y$ là các đại lượng cần tìm (số lượng SP, diện tích...). Lập hàm mục tiêu $F(x, y) = ax + by$ (lợi nhuận, chi phí) cần tìm Min/Max.
- **Bước 2 (Lập hệ điều kiện):** Dựa vào giả thiết (giới hạn thời gian, vốn, số lượng) lập Hệ BPT. Đừng quên điều kiện thực tế $x \ge 0, y \ge 0$.
- **Bước 3 (Vẽ miền nghiệm):** Vẽ đa giác miền nghiệm và tìm TỌA ĐỘ CÁC ĐỈNH của đa giác đó (bằng cách giải hệ phương trình giao điểm của các đường thẳng).
- **Bước 4 (Tính toán và Kết luận):** Thay tọa độ từng đỉnh vào hàm mục tiêu $F(x, y)$. Chọn giá trị lớn nhất/nhỏ nhất và kết luận.
        `,
        tips: `
- 💡 **Mẹo vẽ hình nhanh, không rối mắt:** Hãy dùng các loại nét gạch khác nhau hoặc các màu bút khác nhau cho từng BPT. Hoặc gạch rất nhạt ở các rìa. Quan trọng nhất là viết TỌA ĐỘ ĐỈNH ngay khi vẽ xong.
- ⚠️ **Lỗi sai thực tế:** Trong các bài toán hỏi sản xuất "Bao nhiêu sản phẩm", nghiệm $x, y$ BẮT BUỘC phải là số NGUYÊN. Nếu tọa độ đỉnh ra số thập phân, bạn phải thử các điểm nguyên nằm lân cận bên trong đa giác để tìm Min/Max đúng thực tế!
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Cho hệ bất phương trình: $\begin{cases} x + y > 3 \\ 2x - y \le 4 \end{cases}$. Điểm nào sau đây thuộc miền nghiệm của hệ: $P(2; 2)$, $Q(1; 1)$?
* **Lời giải:**
  - Thử $P(2; 2)$: $\begin{cases} 2 + 2 = 4 > 3 \\ 2(2) - 2 = 2 \le 4 \end{cases}$ (Cả 2 đều đúng). Vậy $P$ thuộc miền nghiệm.
  - Thử $Q(1; 1)$: $\begin{cases} 1 + 1 = 2 \ngtr 3 \\ 2(1) - 1 = 1 \le 4 \end{cases}$. BPT 1 sai. Vậy $Q$ không thuộc miền nghiệm.

**Bài 2 (Cơ bản):** Biểu diễn miền nghiệm của hệ BPT: $\begin{cases} x \ge 0 \\ y \ge 0 \\ x + y \le 2 \end{cases}$
* **Lời giải:**
  - BPT $x \ge 0$: Nửa mặt phẳng bên phải trục tung (kể cả trục $Oy$). Gạch phần bên trái.
  - BPT $y \ge 0$: Nửa mặt phẳng bên trên trục hoành (kể cả trục $Ox$). Gạch phần bên dưới.
  - BPT $x + y \le 2$: Vẽ đ.thẳng $\Delta: x+y=2$ qua $(2;0)$ và $(0;2)$. Chọn $O(0;0)$, $0+0 \le 2$ (Đúng). Gạch nửa mp không chứa O.
  - Miền nghiệm là Tam giác $OAB$ với $O(0;0), A(2;0), B(0;2)$ (gồm cả biên).

**Bài 3 (Vận dụng):** Từ hình vẽ của bài 2, tìm giá trị lớn nhất của biểu thức $F(x, y) = 3x + 2y$ trên miền nghiệm đó.
* **Lời giải:**
  - Miền nghiệm là đa giác (tam giác) có 3 đỉnh: $O(0; 0), A(2; 0), B(0; 2)$.
  - Thay tọa độ các đỉnh vào hàm $F(x,y)$:
    + Tại $O(0;0): F = 3(0) + 2(0) = 0$.
    + Tại $A(2;0): F = 3(2) + 2(0) = 6$.
    + Tại $B(0;2): F = 3(0) + 2(2) = 4$.
  - So sánh: $F_{max} = 6$. Đạt được khi $x=2, y=0$.

**Bài 4 (Vận dụng):** Tính diện tích miền nghiệm của hệ: $\begin{cases} x - y \le 2 \\ x + y \le 4 \\ x \ge 0 \\ y \ge 0 \end{cases}$.
* **Lời giải:**
  - Các đường bờ: $d_1: x-y=2$, $d_2: x+y=4$, $Ox: y=0$, $Oy: x=0$.
  - Tìm các đỉnh của miền nghiệm (Tứ giác $OABC$):
    + $O(0; 0)$
    + Giao $d_1$ và $Ox$: $y=0 \Rightarrow x=2 \Rightarrow A(2; 0)$.
    + Giao $d_1$ và $d_2$: Giải hệ $\begin{cases} x-y=2 \\ x+y=4 \end{cases} \Rightarrow x=3, y=1 \Rightarrow B(3; 1)$.
    + Giao $d_2$ và $Oy$: $x=0 \Rightarrow y=4 \Rightarrow C(0; 4)$.
  - Miền nghiệm là tứ giác $OABC$. Tách thành 2 tam giác $OAB$ và $OBC$ hoặc vẽ bao hcn.
  - $S_{OABC} = S_{\triangle OAB} + S_{\triangle OBC}$.
    + $S_{OAB} = \frac{1}{2} \cdot OA \cdot y_B = \frac{1}{2} \cdot 2 \cdot 1 = 1$.
    + $S_{OBC} = \frac{1}{2} \cdot OC \cdot x_B = \frac{1}{2} \cdot 4 \cdot 3 = 6$.
  - Tổng $S = 1 + 6 = 7$ (đvdt).

**Bài 5 (Vận dụng cao - Lập mô hình):** Một xưởng sản xuất bàn và ghế. Một cái bàn lãi 500k, một cái ghế lãi 300k. Xưởng có 40 giờ mộc và 20 giờ sơn. Làm một cái bàn cần 4 giờ mộc, 1 giờ sơn. Làm một cái ghế cần 2 giờ mộc, 2 giờ sơn. Hỏi cần làm bao nhiêu bàn, bao nhiêu ghế để lãi cao nhất?
* **Lời giải:**
  - Gọi $x, y \ge 0$ là số bàn và ghế. Lợi nhuận $F(x,y) = 500x + 300y$ (nghìn đồng).
  - Hệ BPT giới hạn thời gian:
    Mộc: $4x + 2y \le 40 \Leftrightarrow 2x + y \le 20$.
    Sơn: $x + 2y \le 20$.
  - Hệ đ.kiện: $\begin{cases} x \ge 0 \\ y \ge 0 \\ 2x+y \le 20 \\ x+2y \le 20 \end{cases}$. Miền nghiệm là tứ giác $OABC$.
  - Tìm đỉnh: $O(0;0)$, $A(10; 0)$ (giao mộc với Ox), $C(0; 10)$ (giao sơn với Oy).
  - Đỉnh B (giao 2 đường chéo): Giải $\begin{cases} 2x+y=20 \\ x+2y=20 \end{cases} \Rightarrow x=20/3, y=20/3$.
  - Do $x,y$ là số sản phẩm nên phải nguyên. Gần B $(6.67; 6.67)$ nhất nằm trong miền là $(6; 6), (7; 6), (6; 7)$.
    Thử lại điều kiện: $(6, 7) \Rightarrow 2(6)+7 = 19 \le 20$ và $6+2(7) = 20 \le 20$ (Thỏa).
    Thử $(7, 6) \Rightarrow 2(7)+6 = 20 \le 20$ và $7+2(6) = 19 \le 20$ (Thỏa).
  - Tính F tại các điểm nguyên:
    $F(10, 0) = 5000$k.
    $F(6, 7) = 500(6) + 300(7) = 5100$k.
    $F(7, 6) = 500(7) + 300(6) = 5300$k.
  - Kết luận: Cần làm 7 bàn, 6 ghế. Lợi nhuận lớn nhất 5,300,000 đ.

**Bài 6 (Vận dụng cao - Lập mô hình):** Một người nông dân có 10 hecta đất để trồng Lúa và Ngô. Trồng 1 ha Lúa cần 20 công và thu lãi 30 triệu. Trồng 1 ha Ngô cần 10 công và thu lãi 20 triệu. Tổng số công không quá 160. Hỏi diện tích mỗi loại cây là bao nhiêu để lãi lớn nhất?
* **Lời giải:**
  - $x, y \ge 0$ là diện tích Lúa, Ngô. $F(x,y) = 30x + 20y$ (triệu).
  - Hệ BPT: $\begin{cases} x \ge 0, y \ge 0 \\ x + y \le 10 \text{ (diện tích)} \\ 20x + 10y \le 160 \Leftrightarrow 2x + y \le 16 \text{ (số công)} \end{cases}$
  - Vẽ miền nghiệm tứ giác $OABC$ với $O(0;0)$.
  - Đỉnh trên các trục: $A(8; 0)$ (giao công với Ox), $C(0; 10)$ (giao diện tích với Oy).
  - Đỉnh B (giao 2 đường): $\begin{cases} x+y=10 \\ 2x+y=16 \end{cases} \Rightarrow x=6, y=4 \Rightarrow B(6; 4)$.
  - Tính lãi tại các đỉnh:
    $F(0, 0) = 0$
    $F(8, 0) = 240$ triệu
    $F(0, 10) = 200$ triệu
    $F(6, 4) = 30(6) + 20(4) = 180 + 80 = 260$ triệu.
  - Trồng 6 ha lúa và 4 ha ngô để lãi max 260 triệu.

**Bài 7 (Vận dụng cao):** Cho hàm $F(x,y) = 2x - y$. Tìm Min, Max của F trên miền $D$ được tạo bởi hệ: $\begin{cases} x - 2y \le 2 \\ x + y \ge -1 \\ y \le 2 \end{cases}$ (Không có điều kiện $x, y \ge 0$).
* **Lời giải:**
  - Vẽ 3 đường thẳng $d_1: x-2y=2$, $d_2: x+y=-1$, $d_3: y=2$.
  - Tìm 3 đỉnh của tam giác giao nhau:
    $A(d_1 \cap d_2)$: $\begin{cases} x-2y=2 \\ x+y=-1 \end{cases} \Rightarrow x=0, y=-1 \Rightarrow A(0; -1)$.
    $B(d_1 \cap d_3)$: $\begin{cases} x-2y=2 \\ y=2 \end{cases} \Rightarrow x=6, y=2 \Rightarrow B(6; 2)$.
    $C(d_2 \cap d_3)$: $\begin{cases} x+y=-1 \\ y=2 \end{cases} \Rightarrow x=-3, y=2 \Rightarrow C(-3; 2)$.
  - Tính $F(x,y) = 2x - y$ tại 3 đỉnh:
    $F(A) = 2(0) - (-1) = 1$.
    $F(B) = 2(6) - 2 = 10$.
    $F(C) = 2(-3) - 2 = -8$.
  - Kết luận: $Min = -8$ tại $C(-3; 2)$; $Max = 10$ tại $B(6; 2)$.

**Bài 8 (Vận dụng cao):** Bài toán pha chế hóa chất: Để sản xuất 1 lít dung dịch A cần 2g chất X và 3g chất Y (lãi 50k). Dung dịch B cần 1g chất X và 4g chất Y (lãi 40k). Có sẵn 10g chất X và 24g chất Y. Nên pha chế mỗi loại bao nhiêu lít để lợi nhuận tối đa?
* **Lời giải:**
  - $x, y \ge 0$ là lít dung dịch A, B. $F(x,y) = 50x + 40y$.
  - Hệ BPT: $\begin{cases} 2x + y \le 10 \text{ (Chất X)} \\ 3x + 4y \le 24 \text{ (Chất Y)} \end{cases}$
  - Các đỉnh của tứ giác miền nghiệm: $O(0;0), M(5; 0), N(0; 6)$.
  - Giao điểm 2 đường: $\begin{cases} 2x+y=10 \\ 3x+4y=24 \end{cases} \Rightarrow 5x = 16 \Rightarrow x = 3.2, y = 3.6$. Đỉnh $P(3.2; 3.6)$.
  - (Bài này là dung dịch nên $x,y$ có thể là số thập phân, không bắt buộc nguyên).
  - Tính F: 
    $F(M) = 50(5) = 250$k.
    $F(N) = 40(6) = 240$k.
    $F(P) = 50(3.2) + 40(3.6) = 160 + 144 = 304$k.
  - Kết luận: Pha 3.2 lít A và 3.6 lít B để Max lợi nhuận 304k.

**Bài 9 (Vận dụng cao - Tham số):** Tìm tham số $m$ để hệ bất phương trình sau có nghiệm: $\begin{cases} x + y - 1 \ge 0 \\ x - y + 2 \le 0 \\ y \le m \end{cases}$
* **Lời giải:**
  - Xét 2 BPT đầu: $\begin{cases} y \ge -x + 1 \\ y \ge x + 2 \end{cases}$.
  - Giao của 2 đường thẳng $y = -x + 1$ và $y = x + 2$:
    $-x + 1 = x + 2 \Leftrightarrow 2x = -1 \Leftrightarrow x = -0.5 \Rightarrow y = 1.5$.
  - Miền nghiệm của 2 BPT đầu là phần hình chữ V mở lên trên, với đỉnh thấp nhất (cực tiểu của $y$) nằm tại điểm giao $I(-0.5; 1.5)$.
  - Tức là mọi điểm trong miền này đều có tung độ $y \ge 1.5$.
  - BPT thứ 3 yêu cầu $y \le m$. Nghĩa là cần cắt lấy phần miền nằm dưới đường ngang $y = m$.
  - Để hệ 3 BPT có nghiệm (phần cắt nhau không rỗng), đường $y = m$ phải nằm ngang bằng hoặc cao hơn đỉnh đáy của miền hình chữ V.
  - Suy ra: $m \ge 1.5$.

**Bài 10 (Nâng cao):** Trong kỳ thi Đánh giá năng lực, một thí sinh cần giải hai phần Trắc nghiệm (TN) và Tự luận (TL). Phần TN có 50 câu (1 điểm/câu), mỗi câu mất trung bình 1 phút. Phần TL có 5 bài (10 điểm/bài), mỗi bài mất trung bình 15 phút. Tổng thời gian làm bài là 90 phút. Do năng lực giới hạn, bạn chỉ có thể làm tối đa 40 câu TN và 4 bài TL. Hỏi bạn cần phân bổ làm bao nhiêu câu TN, bao nhiêu bài TL để đạt điểm cực đại?
* **Lời giải:**
  - $x \ge 0$: số câu TN; $y \ge 0$: số bài TL. (Điều kiện $x, y \in \mathbb{N}$).
  - Hàm mục tiêu Điểm: $F(x,y) = 1x + 10y$.
  - Hệ điều kiện: $\begin{cases} x \le 40 \\ y \le 4 \\ 1x + 15y \le 90 \text{ (Thời gian)} \end{cases}$.
  - Kẻ miền nghiệm tứ giác, tìm các đỉnh: 
    Giao (Thời gian) & $y=4 \Rightarrow x + 60 = 90 \Rightarrow x = 30 \Rightarrow A(30; 4)$.
    Giao (Thời gian) & $x=40 \Rightarrow 40 + 15y = 90 \Rightarrow 15y = 50 \Rightarrow y = 3.33 \Rightarrow B(40; 3.33)$.
    Các đỉnh khác là gốc tọa độ và giao trục. Max sẽ ở $A$ hoặc $B$.
  - $x, y$ nguyên $\Rightarrow$ Xét điểm lân cận $B$: $(40; 3) \Rightarrow$ Thời gian $= 40 + 45 = 85 \le 90$ (Thỏa).
  - So sánh $F(x,y)$:
    Đỉnh A nguyên $(30, 4) \Rightarrow F = 30(1) + 4(10) = 70$ điểm.
    Gần đỉnh B $(40, 3) \Rightarrow F = 40(1) + 3(10) = 70$ điểm.
  - Kết luận: Có 2 phương án tối ưu để đạt điểm cao nhất (70 điểm): Làm 30 câu TN, 4 bài TL HOẶC 40 câu TN, 3 bài TL.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH2;
}
