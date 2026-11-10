/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   ========================================================================== */

const DATA_TOAN10 = {
    // ==========================================================================
    // CHƯƠNG I: MỆNH ĐỀ VÀ TẬP HỢP
    // ==========================================================================
    "MATH10-CH1-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương I: Mệnh đề và tập hợp",
        title: "Bài 1: Mệnh đề toán học & Phép suy luận logic",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương I", "Bài 1"],
        theory: `
### 1. Bản chất Mệnh đề & Logic Toán học
📌 **Định nghĩa & Tính chất:**
- **Mệnh đề toán học:** Là một phát biểu khẳng định tính đúng/sai một cách khách quan. Không tồn tại mệnh đề vừa đúng vừa sai hoặc không xác định được tính đúng sai.
- **Mệnh đề chứa biến $P(x)$:** Bản thân $P(x)$ chưa phải là mệnh đề. Nó chỉ trở thành mệnh đề khi $x$ nhận một giá trị cụ thể trong tập xác định $D$.

📌 **Mệnh đề kéo theo ($P \\Rightarrow Q$) & Tính chất Logic:**
- Mệnh đề $P \\Rightarrow Q$ **chỉ SAI khi $P$ ĐÚNG và $Q$ SAI**.
- $P$ là **điều kiện đủ** để có $Q$; $Q$ là **điều kiện cần** để có $P$.

---

### 2. Định lý, Bổ đề & Kiến thức Nâng cao
📌 **1. Mệnh đề Phản đảo (Contrapositive Law):**
- Mệnh đề $P \\Rightarrow Q$ có giá trị chân lý **tương đương tuyệt đối** với mệnh đề phản đảo $\\overline{Q} \\Rightarrow \\overline{P}$.
  $$(P \\Rightarrow Q) \\equiv (\\overline{Q} \\Rightarrow \\overline{P})$$

📌 **2. Phương pháp Chứng minh Phản chứng (Reductio ad absurdam):**
- Giả sử mệnh đề kết luận $Q$ sai (tức $\\overline{Q}$ đúng). Sử dụng các phép suy luận logic để dẫn tới điều mâu thuẫn với giả thiết $P$ hoặc một sự thật toán học hiển nhiên.

📌 **3. Luật Phủ định De Morgan đối với Lượng từ:**
- $\\overline{\\forall x \\in X, P(x)} \\equiv \\exists x \\in X, \\overline{P(x)}$
- $\\overline{\\exists x \\in X, P(x)} \\equiv \\forall x \\in X, \\overline{P(x)}$

---

### 3. Bổ sung Lý thuyết & Chú ý chuyên sâu (Dành cho Giáo viên & Học sinh Giỏi)
📌 **Bản chất của mệnh đề kéo theo ($P \\Rightarrow Q$):**
- Rất nhiều học sinh nhầm lẫn phủ định của $P \\Rightarrow Q$ là $\\overline{P} \\Rightarrow \\overline{Q}$. Thực chất, mệnh đề phủ định của $P \\Rightarrow Q$ là $P \\wedge \\overline{Q}$ (Tức là $P$ đúng nhưng $Q$ sai).

📌 **Kỹ thuật xử lý lượng từ:**
- Khi phủ định mệnh đề chứa $\\forall$ hoặc $\\exists$, học sinh rất hay quên đổi dấu quan hệ. Bắt buộc phải đổi đồng thời cả lượng từ lẫn dấu (ví dụ $>$ thành $\\le$, $=$ thành $\\neq$).
        `,
        tips: `
- 💡 **Mẹo phản đảo:** Để chứng minh "$A \\Rightarrow B$" khó, hãy chứng minh "Không có $B \\Rightarrow$ Không có $A$".
- 💡 **Bẫy lượng từ:** Khi phủ định mệnh đề chứa $\\forall$ hoặc $\\exists$, bắt buộc phải đổi đồng thời cả **lượng từ** lẫn **dấu quan hệ** ($>$ thành $\\le$, $=$ thành $\\neq$).
        `,
        practice: `
### Bài toán Mẫu VDC (Chứng minh phản chứng): 
Chứng minh rằng $\\sqrt{2}$ là một số vô tỉ.

* **Phân tích tư duy:**
  1. Giả sử ngược lại $\\sqrt{2}$ là số hữu tỉ $\\Rightarrow \\sqrt{2}$ viết được dưới dạng phân số tối giản $\\frac{a}{b}$.
  2. Biến đổi để chứng minh cả $a$ và $b$ cùng chia hết cho 2, mâu thuẫn với giả thiết "tối giản".

* **Lời giải chi tiết:**
  - **Bước 1:** Giả sử $\\sqrt{2}$ là số hữu tỉ. Khi đó $\\sqrt{2} = \\frac{a}{b}$ với $a, b \\in \\mathbb{N}^*, \\gcd(a, b) = 1$.
  - **Bước 2:** Bình phương 2 vế: $2 = \\frac{a^2}{b^2} \\Rightarrow a^2 = 2b^2$.
    - Vì $a^2 = 2b^2 \\Rightarrow a^2 \\vdots 2 \\Rightarrow a \\vdots 2$ (do 2 là số nguyên tố).
    - Đặt $a = 2k (k \\in \\mathbb{N}^*)$. Thay vào ta có: $(2k)^2 = 2b^2 \\Leftrightarrow 4k^2 = 2b^2 \\Leftrightarrow b^2 = 2k^2$.
    - Suy ra $b^2 \\vdots 2 \\Rightarrow b \\vdots 2$.
  - **Bước 3:** Ta thấy cả $a$ và $b$ đều chia hết cho 2, suy ra $\\gcd(a, b) \\ge 2$ (mâu thuẫn với $\\gcd(a, b) = 1$).
  - **Kết luận:** Giả sử sai, vậy $\\sqrt{2}$ là số vô tỉ (ĐPCM).
  
---

### Bài tập Vận dụng (5 bài)
1. **Cơ bản:** Trong các câu sau, câu nào là mệnh đề toán học? Xét tính đúng sai của nó.
   a) "Năm 2026 là năm nhuận."
   b) "Hãy giải phương trình này!"
2. **Cơ bản:** Lập mệnh đề phủ định của mệnh đề $P$: "$\\forall x \\in \\mathbb{R}, x^2 - x + 1 > 0$" và xét tính đúng sai của mệnh đề phủ định.
3. **Vận dụng:** Cho mệnh đề $P$: "Tứ giác ABCD là hình vuông" và $Q$: "Tứ giác ABCD có 4 góc vuông". Phát biểu mệnh đề $P \\Rightarrow Q$ dưới dạng điều kiện cần và điều kiện đủ.
4. **Vận dụng cao:** Viết mệnh đề phản đảo của mệnh đề: "Nếu số nguyên $n$ chia hết cho 6 thì $n$ chia hết cho 3". Mệnh đề phản đảo này có giá trị chân lý như thế nào so với mệnh đề gốc? (Sử dụng tính chất tương đương tuyệt đối).
5. **Nâng cao (Chứng minh phản chứng):** Bằng phương pháp phản chứng, hãy chứng minh định lý: "Nếu $a, b$ là hai số thực dương thỏa mãn $a+b < 2$, thì ít nhất một trong hai số $a$ hoặc $b$ phải nhỏ hơn 1."
        `
    },

    "MATH10-CH1-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương I: Mệnh đề và tập hợp",
        title: "Bài 2: Tập hợp & Các phép toán trên tập hợp",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương I", "Bài 2"],
        theory: `
### 1. Bản chất Tập hợp & Các phép toán
📌 **Định nghĩa:**
- $A \\cap B = \\{x \\mid x \\in A \\text{ và } x \\in B\\}$
- $A \\cup B = \\{x \\mid x \\in A \\text{ hoặc } x \\in B\\}$
- $A \\setminus B = \\{x \\mid x \\in A \\text{ và } x \\notin B\\}$

---

### 2. Định lý & Bổ đề Nâng cao
📌 **1. Nguyên lý Bao hàm - Loại trừ (Inclusion-Exclusion Principle):**
- Cho 3 tập hợp hữu hạn $A, B, C$:
  $$|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |B \\cap C| - |C \\cap A| + |A \\cap B \\cap C|$$

📌 **2. Điều kiện tập con / Giao tập hợp chứa tham số:**
- Cho $A = (a; b)$ và $B = [c; d]$:
  - $A \\subset B \\Leftrightarrow \\begin{cases} c \\le a \\\\ b \\le d \\end{cases}$
  - $A \\cap B = \\emptyset \\Leftrightarrow b \\le c \\text{ hoặc } d < a$.

---

### 3. Bổ sung Lý thuyết & Chú ý chuyên sâu (Dành cho Giáo viên & Học sinh Giỏi)
📌 **Tính chất phân phối:** 
- Khi kết hợp nhiều phép toán, cần nhớ quy tắc phân phối: $A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)$.
📌 **Kỹ thuật biểu diễn trục số:** 
- Khi tìm điều kiện của tham số cho giao/hợp các khoảng, đoạn, tia, nguyên tắc sống còn là luôn biểu diễn tập cố định trước, sau đó di chuyển tập chứa tham số $m$ và thử dấu "=" tại các biên để tránh sót nghiệm.
📌 **Nguyên lý đếm (Bao hàm - Loại trừ):** 
- Công thức $|A \\cup B \\cup C| = |A| + |B| + |C| - |A \\cap B| - |B \\cap C| - |C \\cap A| + |A \\cap B \\cap C|$ là chìa khóa để giải quyết các bài toán đếm số lượng học sinh tham gia câu lạc bộ, môn thể thao thực tế.
        `,
        tips: `
- 💡 **Mẹo vẽ trục số tham số:** Luôn biểu diễn tập cố định trước, sau đó di chuyển tập chứa tham số $m$ và thử dấu "=" tại các biên để tránh sót nghiệm.
        `,
        practice: `
### Bài toán Mẫu Nâng cao: 
Cho $A = (m-1; m+3]$ và $B = [-2; 5)$. Tìm $m$ để $A \\cap B \\neq \\emptyset$.

* **Lời giải chi tiết:**
  - Ta giải bài toán phủ định: Tìm $m$ để $A \\cap B = \\emptyset$.
  - $A \\cap B = \\emptyset \\Leftrightarrow m + 3 \\le -2 \\text{ hoặc } m - 1 \\ge 5 \\Leftrightarrow m \\le -5 \\text{ hoặc } m \\ge 6$.
  - Lấy phần bù, ta được $A \\cap B \\neq \\emptyset \\Leftrightarrow -5 < m < 6$.
  - Kết luận: $m \\in (-5; 6)$.
  
---

### Bài tập Vận dụng (5 bài)
1. **Cơ bản:** Cho hai tập hợp $A = \\{x \\in \\mathbb{N} \\mid x \\le 4\\}$ và $B = \\{2; 4; 6; 8\\}$. Xác định các tập hợp $A \\cap B$, $A \\cup B$ và $A \\setminus B$.
2. **Cơ bản:** Biểu diễn các tập hợp sau trên trục số và tìm kết quả của phép toán: $[-3; 5) \\cap (2; 7]$.
3. **Vận dụng:** Lớp 10A có 40 học sinh. Trong đó có 25 bạn tham gia CLB Toán, 20 bạn tham gia CLB Tiếng Anh và 8 bạn không tham gia CLB nào trong hai CLB trên. Hỏi có bao nhiêu bạn tham gia cả hai CLB?
4. **Vận dụng cao:** Cho tập hợp $A = [m-1; m+2]$ và $B = [-3; 5]$. Tìm tất cả các giá trị của tham số $m$ để $A \\subset B$.
5. **Nâng cao:** Cho hai tập hợp $X = (m; m+3]$ và $Y = (-\\infty; -1] \\cup (4; +\\infty)$. Tìm tham số $m$ để $X \\cap Y = \\emptyset$.
        `
    },

    // ==========================================================================
    // CHƯƠNG II: BẤT PHƯƠNG TRÌNH VÀ HỆ BPT BẬC NHẤT HAI ẨN
    // ==========================================================================
    "MATH10-CH2-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương II: Bất phương trình và hệ BPT bậc nhất hai ẩn",
        title: "Bài 1: Bất phương trình bậc nhất hai ẩn",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương II", "Bài 1"],
        theory: `
### 1. Biểu diễn Miền nghiệm trên Mặt phẳng Tọa độ
📌 **Định nghĩa & Ý nghĩa Hình học:**
- Bất phương trình bậc nhất hai ẩn $x, y$ có dạng tổng quát là $ax + by \\le c$ (hoặc $<, >, \\ge$), trong đó $a$ và $b$ không đồng thời bằng 0.
- Về mặt hình học, mỗi đường thẳng $\\Delta: ax + by + c = 0$ chia mặt phẳng tọa độ $Oxy$ thành hai nửa mặt phẳng bờ $\\Delta$. Một nửa là miền nghiệm của $ax + by + c > 0$, nửa kia là miền nghiệm của $ax + by + c < 0$.

📌 **Quy trình chuẩn biểu diễn miền nghiệm:**
- **Bước 1:** Vẽ đường thẳng $\\Delta: ax + by + c = 0$ trên mặt phẳng tọa độ.
- **Bước 2:** Chọn một điểm thử $M(x_0; y_0)$ không nằm trên $\\Delta$. (Thường chọn gốc $O(0;0)$ nếu $c \\neq 0$).
- **Bước 3:** Thay tọa độ $M$ vào BPT. 
  - Nếu kết quả đúng, nửa mặt phẳng bờ $\\Delta$ chứa điểm $M$ là miền nghiệm.
  - Nếu kết quả sai, nửa mặt phẳng bờ $\\Delta$ **không** chứa điểm $M$ là miền nghiệm.

---

### 2. Bổ sung Lý thuyết & Chú ý chuyên sâu (Dành cho Giáo viên & Học sinh Giỏi)
📌 **Biểu diễn biên (Bờ của miền nghiệm):**
- BPT chứa dấu $\\le$ hoặc $\\ge$: Miền nghiệm lấy cả đường biên (Vẽ nét liền).
- BPT chứa dấu $<$ hoặc $>$: Miền nghiệm KHÔNG lấy đường biên (Vẽ nét đứt). Học sinh rất hay bị trừ điểm trình bày ở lỗi này.

📌 **BPT chứa tham số $m$:**
- Dạng toán tìm $m$ để một điểm $A(x_A; y_A)$ thuộc miền nghiệm của BPT: Chỉ cần thay tọa độ $(x_A; y_A)$ vào BPT, ta sẽ thu được một BPT mới với ẩn là $m$, từ đó giải ra $m$.
        `,
        tips: `
- 💡 **Mẹo chọn điểm thử nhanh:** Luôn ưu tiên chọn $O(0;0)$. Nếu đường thẳng đi qua $O(0;0)$ (tức $c = 0$), hãy chọn các điểm nằm trên trục tọa độ như $M(1;0)$ hoặc $N(0;1)$ để thay số nhanh nhất.
- 💡 **Loại trừ nhanh trắc nghiệm:** Nếu $a>0$, miền nghiệm của $ax+by+c > 0$ thường có xu hướng nằm về phía bên phải của đường thẳng (khi nhìn dọc theo trục $Ox$).
        `,
        practice: `
### Bài toán Mẫu Cốt lõi:
Biểu diễn miền nghiệm của bất phương trình $2x - 3y + 6 \\le 0$.

* **Lời giải chi tiết:**
  - **Bước 1:** Vẽ đường thẳng $\\Delta: 2x - 3y + 6 = 0$. 
    Cho $x = 0 \\Rightarrow y = 2 \\Rightarrow A(0; 2)$. 
    Cho $y = 0 \\Rightarrow x = -3 \\Rightarrow B(-3; 0)$. 
    Vẽ đường thẳng đi qua $A, B$ bằng **nét liền** (do có dấu $\\le$).
  - **Bước 2:** Chọn điểm thử $O(0;0) \\notin \\Delta$.
  - **Bước 3:** Thay $x=0, y=0$ vào vế trái BPT: $2(0) - 3(0) + 6 = 6$.
    Vì $6 \\le 0$ là mệnh đề SAI, nên miền nghiệm là nửa mặt phẳng bờ $\\Delta$ **không chứa** gốc tọa độ $O$ (kể cả bờ $\\Delta$). Ta gạch bỏ phần chứa $O$.
    
---

### Bài tập Vận dụng (5 bài)
1. **Cơ bản:** Điểm $M(1; -2)$ có thuộc miền nghiệm của bất phương trình $3x - y - 4 > 0$ không? Giải thích.
2. **Cơ bản:** Biểu diễn miền nghiệm của các bất phương trình sau trên mặt phẳng tọa độ: 
   a) $x + 2y < 4$
   b) $y \\ge -2$
3. **Vận dụng:** Tìm tất cả các giá trị của tham số $m$ để điểm $A(-1; 3)$ thuộc miền nghiệm của bất phương trình: $(m+1)x - 2y + m^2 > 0$.
4. **Vận dụng cao:** Cho hai bất phương trình $x + y - 2 \\ge 0$ và $2x - y + 3 \\le 0$. Hãy tìm một điểm $M$ có tọa độ nguyên thuộc miền nghiệm chung của cả hai bất phương trình trên.
5. **Nâng cao:** Biểu diễn miền nghiệm của bất phương trình $|x| + |y| \\le 2$. (Gợi ý: Phá dấu GTTĐ để chia thành 4 góc phần tư, kết quả miền nghiệm là một hình vuông).
        `
    },

    "MATH10-CH2-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương II: Bất phương trình và hệ BPT bậc nhất hai ẩn",
        title: "Bài 2: Hệ BPT bậc nhất hai ẩn & Quy hoạch tuyến tính",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương II", "Bài 2"],
        theory: `
### 1. Hệ Bất phương trình bậc nhất hai ẩn
📌 **Định nghĩa & Miền nghiệm:**
- Miền nghiệm của một hệ BPT là **giao** của các miền nghiệm của từng BPT trong hệ.
- Trong mặt phẳng tọa độ, miền nghiệm thường là một đa giác (lồi) bị giới hạn, hoặc một miền không bị chặn.

---

### 2. Định lý Cực trị & Quy hoạch Tuyến tính
📌 **Định lý Đỉnh Đa giác (Minkowski - Weyl):**
- Giá trị lớn nhất (Max) hoặc nhỏ nhất (Min) của biểu thức mục tiêu (hàm mục tiêu) $F(x, y) = ax + by$ trên một miền đa giác lồi đóng $D$ **luôn đạt được tại một trong các đỉnh** của đa giác đó.

📌 **Quy trình giải bài toán Tối ưu hóa (Quy hoạch tuyến tính):**
- **Bước 1:** Gọi $x, y$ là các đại lượng cần tìm (đặt điều kiện $x \\ge 0, y \\ge 0$ nếu là bài toán thực tế).
- **Bước 2:** Lập hệ BPT ràng buộc từ các giả thiết (vốn, nguyên liệu, thời gian...).
- **Bước 3:** Thiết lập hàm mục tiêu $F(x,y)$ (lợi nhuận, chi phí...).
- **Bước 4:** Vẽ miền nghiệm của hệ BPT, xác định tọa độ các đỉnh của đa giác miền nghiệm.
- **Bước 5:** Tính giá trị của $F(x,y)$ tại tất cả các đỉnh. Kết luận Max/Min.

---

### 3. Bổ sung Lý thuyết & Chú ý chuyên sâu
📌 **Chú ý miền không bị chặn (Vô hạn):**
- Nếu đa giác miền nghiệm không bị vây kín (kéo dài tới vô cực), biểu thức $F(x,y)$ có thể tiến tới $\\pm\\infty$. Trong trường hợp này, bài toán có thể chỉ có Min mà không có Max (hoặc ngược lại).
📌 **Xác định tọa độ đỉnh nhanh:**
- Tọa độ đỉnh đa giác thực chất là nghiệm của hệ phương trình bậc nhất hai ẩn tạo bởi 2 đường thẳng biên cắt nhau. Dùng máy tính bấm hệ (Mode 5 1) để tìm nhanh mà không cần đo đạc trên hình.
        `,
        tips: `
- 💡 **Mẹo giải trắc nghiệm:** Không cần vẽ miền nghiệm quá nắn nót. Chỉ cần phác thảo nhanh để biết được đa giác có những đỉnh nào (là giao của những đường thẳng nào). Sau đó bấm máy tính giải hệ tìm tọa độ đỉnh và thử thẳng vào hàm $F(x,y)$.
        `,
        practice: `
### Bài toán Mẫu VDC (Quy hoạch tuyến tính): 
Tìm Min của hàm mục tiêu $F(x, y) = 3x - 2y$ trên miền $D$ được cho bởi hệ BPT:
$$\\begin{cases} x + y \\le 5 \\\\ x - y \\ge -1 \\\\ x \\ge 1 \\\\ y \\ge 0 \\end{cases}$$

* **Lời giải chi tiết:**
  - **Bước 1:** Vẽ 4 đường thẳng biên: $d_1: x+y=5$, $d_2: x-y=-1$, $d_3: x=1$, $d_4: y=0$. Xác định phần giao của các nửa mặt phẳng.
  - **Bước 2:** Miền nghiệm $D$ là một tứ giác có 4 đỉnh. Ta tìm tọa độ các đỉnh bằng cách giải các hệ phương trình giao điểm:
    - Đỉnh $A = d_3 \\cap d_4 \\Rightarrow A(1; 0)$.
    - Đỉnh $B = d_1 \\cap d_4 \\Rightarrow B(5; 0)$.
    - Đỉnh $C = d_1 \\cap d_2 \\Rightarrow \\begin{cases} x+y=5 \\\\ x-y=-1 \\end{cases} \\Rightarrow C(2; 3)$.
    - Đỉnh $D = d_3 \\cap d_2 \\Rightarrow \\begin{cases} x=1 \\\\ x-y=-1 \\end{cases} \\Rightarrow D(1; 2)$.
  - **Bước 3:** Tính giá trị $F(x,y)$ tại các đỉnh:
    - $F(A) = 3(1) - 2(0) = 3$
    - $F(B) = 3(5) - 2(0) = 15$
    - $F(C) = 3(2) - 2(3) = 0$
    - $F(D) = 3(1) - 2(2) = -1$
  - **Kết luận:** $\\min F = -1$ đạt được tại $D(1; 2)$.

---

### Bài tập Vận dụng (5 bài)
1. **Cơ bản:** Biểu diễn miền nghiệm của hệ bất phương trình: $\\begin{cases} 2x + y \\le 4 \\\\ x > 0 \\\\ y \\ge 0 \\end{cases}$. Tìm tọa độ các đỉnh của miền nghiệm.
2. **Cơ bản:** Cho miền $D$ là tam giác với các đỉnh $M(0; 0), N(0; 4), P(3; 0)$. Tìm giá trị lớn nhất của $F(x, y) = 2x + 5y$ trên $D$.
3. **Vận dụng:** Một gia đình cần ít nhất 900g protein và 400g lipit trong khẩu phần ăn mỗi ngày. Biết thịt bò chứa 80% protein, 20% lipit; thịt lợn chứa 60% protein, 40% lipit. Gọi $x, y$ lần lượt là lượng thịt bò và thịt lợn cần mua. Hãy lập hệ BPT thể hiện các điều kiện bài toán.
4. **Vận dụng cao:** Tiếp nối bài 3. Biết giá thịt bò là 250 nghìn đồng/kg, thịt lợn là 160 nghìn đồng/kg. Gia đình nên mua bao nhiêu kg mỗi loại để chi phí là nhỏ nhất mà vẫn đảm bảo dinh dưỡng?
5. **Nâng cao:** Tìm giá trị nhỏ nhất của $F(x,y) = x + 2y$ trên miền nghiệm của hệ $\\begin{cases} x - y \\le 2 \\\\ 2x + y \\ge 4 \\\\ x \\ge 0 \\end{cases}$. Tại sao bài toán này không có Max?
        `
    },

    // ==========================================================================
    // CHƯƠNG III: HỆ THỨC LƯỢNG TRONG TAM GIÁC
    // ==========================================================================
    "MATH10-CH3-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương III: Hệ thức lượng trong tam giác",
        title: "Bài 1: Giá trị lượng giác của một góc từ 0° đến 180°",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương III", "Bài 1"],
        theory: `
### 1. Nửa đường tròn đơn vị & Các giá trị lượng giác
📌 **Định nghĩa:**
- Trên mặt phẳng tọa độ $Oxy$, lấy nửa đường tròn tâm $O$ bán kính $R=1$ nằm phía trên trục hoành.
- Với mỗi góc $\\alpha$ ($0^\\circ \\le \\alpha \\le 180^\\circ$), có duy nhất điểm $M(x_0; y_0)$ trên nửa đường tròn sao cho $\\widehat{xOM} = \\alpha$.
- Khi đó: $\\sin \\alpha = y_0$, $\\cos \\alpha = x_0$, $\\tan \\alpha = \\frac{y_0}{x_0}$ ($x_0 \\neq 0$), $\\cot \\alpha = \\frac{x_0}{y_0}$ ($y_0 \\neq 0$).

---

### 2. Quan hệ giữa các góc đặc biệt & Hằng đẳng thức
📌 **Góc bù nhau ($\\alpha$ và $180^\\circ - \\alpha$): "Sin bù"**
- $\\sin(180^\\circ - \\alpha) = \\sin \\alpha$
- $\\cos(180^\\circ - \\alpha) = -\\cos \\alpha$
- $\\tan(180^\\circ - \\alpha) = -\\tan \\alpha$
- $\\cot(180^\\circ - \\alpha) = -\\cot \\alpha$

📌 **Góc phụ nhau ($\\alpha$ và $90^\\circ - \\alpha$): "Phụ chéo"**
- $\\sin(90^\\circ - \\alpha) = \\cos \\alpha$; $\\cos(90^\\circ - \\alpha) = \\sin \\alpha$
- $\\tan(90^\\circ - \\alpha) = \\cot \\alpha$; $\\cot(90^\\circ - \\alpha) = \\tan \\alpha$

📌 **Các hệ thức lượng giác cơ bản:**
1. $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$
2. $\\tan \\alpha \\cdot \\cot \\alpha = 1$
3. $1 + \\tan^2 \\alpha = \\frac{1}{\\cos^2 \\alpha}$ (với $\\alpha \\neq 90^\\circ$)
4. $1 + \\cot^2 \\alpha = \\frac{1}{\\sin^2 \\alpha}$ (với $\\alpha \\neq 0^\\circ, 180^\\circ$)
        `,
        tips: `
- 💡 **Chú ý xét dấu:** Từ $90^\\circ$ đến $180^\\circ$ (góc tù), chỉ có $\\sin \\alpha > 0$, còn $\\cos, \\tan, \\cot$ đều mang dấu ÂM. Khi khai căn để tính $\\cos \\alpha$ từ $\\sin \\alpha$, bắt buộc phải lấy nghiệm âm.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Tính các giá trị lượng giác của góc $135^\\circ$.
* **Lời giải:**
  - Ta áp dụng tính chất góc bù: $135^\\circ = 180^\\circ - 45^\\circ$.
  - $\\sin 135^\\circ = \\sin(180^\\circ - 45^\\circ) = \\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$
  - $\\cos 135^\\circ = \\cos(180^\\circ - 45^\\circ) = -\\cos 45^\\circ = -\\frac{\\sqrt{2}}{2}$
  - $\\tan 135^\\circ = -\\tan 45^\\circ = -1$; $\\cot 135^\\circ = -1$.

**Bài 2 (Cơ bản):** Cho $\\cos \\alpha = -\\frac{1}{3}$ với $90^\\circ < \\alpha < 180^\\circ$. Tính $\\sin \\alpha$ và $\\tan \\alpha$.
* **Lời giải:**
  - Ta có: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1 \\Rightarrow \\sin^2 \\alpha = 1 - \\left(-\\frac{1}{3}\\right)^2 = 1 - \\frac{1}{9} = \\frac{8}{9}$.
  - Vì $90^\\circ < \\alpha < 180^\\circ$ nên $\\sin \\alpha > 0$. Do đó, $\\sin \\alpha = \\sqrt{\\frac{8}{9}} = \\frac{2\\sqrt{2}}{3}$.
  - $\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha} = \\frac{\\frac{2\\sqrt{2}}{3}}{-\\frac{1}{3}} = -2\\sqrt{2}$.

**Bài 3 (Vận dụng):** Rút gọn biểu thức $A = \\sin(180^\\circ - x) - \\cos(90^\\circ - x) + \\cos(180^\\circ - x) + \\cos x$.
* **Lời giải:**
  - Áp dụng "Sin bù": $\\sin(180^\\circ - x) = \\sin x$, $\\cos(180^\\circ - x) = -\\cos x$.
  - Áp dụng "Phụ chéo": $\\cos(90^\\circ - x) = \\sin x$.
  - Thay vào $A$: $A = \\sin x - \\sin x + (-\\cos x) + \\cos x = 0$.

**Bài 4 (Vận dụng cao):** Cho $\\tan \\alpha = 2$. Tính giá trị biểu thức $P = \\frac{2\\sin \\alpha - 3\\cos \\alpha}{4\\sin \\alpha + 5\\cos \\alpha}$.
* **Lời giải:**
  - Cách giải nhanh: Chia cả tử và mẫu cho $\\cos \\alpha$ (vì $\\tan \\alpha = 2 \\Rightarrow \\cos \\alpha \\neq 0$).
  - $P = \\frac{2\\frac{\\sin \\alpha}{\\cos \\alpha} - 3}{4\\frac{\\sin \\alpha}{\\cos \\alpha} + 5} = \\frac{2\\tan \\alpha - 3}{4\\tan \\alpha + 5}$
  - Thay $\\tan \\alpha = 2$ vào: $P = \\frac{2(2) - 3}{4(2) + 5} = \\frac{1}{13}$.

**Bài 5 (Nâng cao):** Tính giá trị biểu thức $B = \\sin^2 15^\\circ + \\sin^2 35^\\circ + \\sin^2 55^\\circ + \\sin^2 75^\\circ$.
* **Lời giải:**
  - Áp dụng "Phụ chéo": $\\sin 75^\\circ = \\cos 15^\\circ \\Rightarrow \\sin^2 75^\\circ = \\cos^2 15^\\circ$.
  - Tương tự: $\\sin 55^\\circ = \\cos 35^\\circ \\Rightarrow \\sin^2 55^\\circ = \\cos^2 35^\\circ$.
  - Thay vào $B$: $B = \\sin^2 15^\\circ + \\sin^2 35^\\circ + \\cos^2 35^\\circ + \\cos^2 15^\\circ$
  - Ghép cặp: $B = (\\sin^2 15^\\circ + \\cos^2 15^\\circ) + (\\sin^2 35^\\circ + \\cos^2 35^\\circ) = 1 + 1 = 2$.
        `
    },

    "MATH10-CH3-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương III: Hệ thức lượng trong tam giác",
        title: "Bài 2: Định lí Côsin, Sin & Giải tam giác",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương III", "Bài 2"],
        theory: `
### 1. Định lí Côsin và Định lí Sin
📌 **Định lí Côsin:** (Dùng khi biết 3 cạnh hoặc 2 cạnh và góc xen giữa)
- $a^2 = b^2 + c^2 - 2bc \\cos A \\Rightarrow \\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$
- Tương tự cho $b^2$ và $c^2$.

📌 **Định lí Sin:** (Dùng khi biết 2 góc và 1 cạnh, hoặc liên quan bán kính $R$)
- $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$ ($R$ là bán kính đường tròn ngoại tiếp).

---

### 2. Các công thức tính Diện tích Tam giác (S)
- $S = \\frac{1}{2}ah_a = \\frac{1}{2}bh_b = \\frac{1}{2}ch_c$ (Cạnh đáy $\\times$ chiều cao)
- $S = \\frac{1}{2}ab \\sin C = \\frac{1}{2}bc \\sin A = \\frac{1}{2}ca \\sin B$
- $S = \\frac{abc}{4R}$
- $S = pr$ ($p = \\frac{a+b+c}{2}$ là nửa chu vi, $r$ là bán kính đ.tròn nội tiếp)
- **Công thức Heron:** $S = \\sqrt{p(p-a)(p-b)(p-c)}$

---

### 3. Bổ đề Chuyên sâu (Đường trung tuyến Apollonius)
- Độ dài đường trung tuyến kẻ từ đỉnh A: $m_a^2 = \\frac{2(b^2 + c^2) - a^2}{4}$
        `,
        tips: `
- 💡 **Chiến thuật Giải tam giác:**
  - SSS (3 cạnh) $\\rightarrow$ Dùng Côsin tìm 1 góc $\\rightarrow$ Dùng Sin/Côsin tìm góc còn lại.
  - SAS (2 cạnh, 1 góc xen giữa) $\\rightarrow$ Dùng Côsin tìm cạnh thứ 3.
  - AAS/ASA (2 góc, 1 cạnh) $\\rightarrow$ Dùng tổng 3 góc bằng 180° tìm góc thứ 3 $\\rightarrow$ Dùng Định lí Sin tìm 2 cạnh còn lại.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Cho $\\triangle ABC$ có $b = 8, c = 5$ và $\\widehat{A} = 60^\\circ$. Tính cạnh $a$ và diện tích $S$ của tam giác.
* **Lời giải:**
  - Áp dụng Định lí Côsin: $a^2 = b^2 + c^2 - 2bc \\cos A$
  - $a^2 = 8^2 + 5^2 - 2(8)(5)\\cos 60^\\circ = 64 + 25 - 80\\left(\\frac{1}{2}\\right) = 89 - 40 = 49$.
  - Suy ra $a = 7$.
  - Tính diện tích: $S = \\frac{1}{2}bc \\sin A = \\frac{1}{2}(8)(5)\\sin 60^\\circ = 20\\left(\\frac{\\sqrt{3}}{2}\\right) = 10\\sqrt{3}$.

**Bài 2 (Cơ bản):** Cho $\\triangle ABC$ có $\\widehat{A} = 45^\\circ, \\widehat{B} = 75^\\circ, c = 10$. Tính bán kính đường tròn ngoại tiếp $R$ và cạnh $a$.
* **Lời giải:**
  - Tính góc C: $\\widehat{C} = 180^\\circ - (45^\\circ + 75^\\circ) = 60^\\circ$.
  - Áp dụng Định lí Sin: $\\frac{c}{\\sin C} = 2R \\Rightarrow 2R = \\frac{10}{\\sin 60^\\circ} = \\frac{10}{\\frac{\\sqrt{3}}{2}} = \\frac{20}{\\sqrt{3}} \\Rightarrow R = \\frac{10\\sqrt{3}}{3}$.
  - Tính cạnh a: $\\frac{a}{\\sin A} = 2R \\Rightarrow a = 2R \\sin A = \\frac{20}{\\sqrt{3}} \\cdot \\sin 45^\\circ = \\frac{20}{\\sqrt{3}} \\cdot \\frac{\\sqrt{2}}{2} = \\frac{10\\sqrt{6}}{3}$.

**Bài 3 (Vận dụng):** Tam giác ABC có 3 cạnh $a=13, b=14, c=15$. Tính bán kính đường tròn nội tiếp $r$ và độ dài đường cao $h_a$.
* **Lời giải:**
  - Nửa chu vi $p = \\frac{13 + 14 + 15}{2} = 21$.
  - Áp dụng công thức Heron: $S = \\sqrt{p(p-a)(p-b)(p-c)} = \\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$.
  - Tính $r$: Ta có $S = pr \\Rightarrow r = \\frac{S}{p} = \\frac{84}{21} = 4$.
  - Tính $h_a$: $S = \\frac{1}{2}ah_a \\Rightarrow 84 = \\frac{1}{2}(13)h_a \\Rightarrow h_a = \\frac{168}{13}$.

**Bài 4 (Vận dụng cao):** Cho $\\triangle ABC$. Chứng minh rằng $a = b\\cos C + c\\cos B$.
* **Lời giải:**
  - Kẻ đường cao $AH$ vuông góc với $BC$ ($H \\in BC$). Ta xét trường hợp $\\triangle ABC$ nhọn.
  - $a = BC = BH + HC$.
  - Trong $\\triangle ABH$ vuông tại $H$: $\\cos B = \\frac{BH}{c} \\Rightarrow BH = c\\cos B$.
  - Trong $\\triangle ACH$ vuông tại $H$: $\\cos C = \\frac{HC}{b} \\Rightarrow HC = b\\cos C$.
  - Cộng vế theo vế: $a = BH + HC = c\\cos B + b\\cos C$ (ĐPCM).

**Bài 5 (Nâng cao):** Cho $\\triangle ABC$ thỏa mãn hệ thức $\\sin^2 A = \\sin^2 B + \\sin^2 C$. Chứng minh $\\triangle ABC$ là tam giác vuông.
* **Lời giải:**
  - Theo Định lí Sin: $\\sin A = \\frac{a}{2R}, \\sin B = \\frac{b}{2R}, \\sin C = \\frac{c}{2R}$.
  - Thay vào hệ thức đã cho: $\\left(\\frac{a}{2R}\\right)^2 = \\left(\\frac{b}{2R}\\right)^2 + \\left(\\frac{c}{2R}\\right)^2 \\Leftrightarrow a^2 = b^2 + c^2$.
  - Theo định lí Pytago đảo, $\\triangle ABC$ vuông tại $A$.
        `
    },

    // ==========================================================================
    // CHƯƠNG IV: VÉC-TƠ VÀ CÁC PHÉP TOÁN
    // ==========================================================================
    "MATH10-CH4-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương IV: Vectơ",
        title: "Bài 1: Khái niệm Vectơ & Các phép toán Vectơ",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương IV", "Bài 1"],
        theory: `
### 1. Khái niệm và Các tính chất cơ bản
📌 **Định nghĩa:**
- **Vectơ** là một đoạn thẳng có hướng, kí hiệu là $\\vec{AB}$ (điểm đầu A, điểm cuối B) hoặc $\\vec{a}, \\vec{b}, \\vec{u}, \\vec{v}...$
- **Hai vectơ cùng phương:** Khi giá của chúng (đường thẳng đi qua điểm đầu và điểm cuối) song song hoặc trùng nhau.
- **Hai vectơ bằng nhau:** Cùng hướng và cùng độ dài. Viết là $\\vec{a} = \\vec{b}$.

📌 **Các quy tắc phép toán Vectơ:**
- **Quy tắc 3 điểm (Chèn điểm):** Với 3 điểm $A, B, C$ bất kì: $\\vec{AB} + \\vec{BC} = \\vec{AC}$ và $\\vec{AB} = \\vec{CB} - \\vec{CA}$.
- **Quy tắc hình bình hành:** Nếu $ABCD$ là hình bình hành thì $\\vec{AB} + \\vec{AD} = \\vec{AC}$.
- **Tính chất trung điểm:** $I$ là trung điểm $AB \\Leftrightarrow \\vec{IA} + \\vec{IB} = \\vec{0}$. Khi đó với điểm $M$ bất kì: $\\vec{MA} + \\vec{MB} = 2\\vec{MI}$.
- **Tính chất trọng tâm:** $G$ là trọng tâm $\\triangle ABC \\Leftrightarrow \\vec{GA} + \\vec{GB} + \\vec{GC} = \\vec{0}$. Khi đó với điểm $M$ bất kì: $\\vec{MA} + \\vec{MB} + \\vec{MC} = 3\\vec{MG}$.

---

### 2. Chuyên đề Nâng cao: Lý thuyết Tâm Tỉ Cự (Barycentric Center)
📌 **Định lý Tâm Tỉ Cự:**
- Với hệ điểm $A_1, A_2, ..., A_n$ và các hệ số $k_1, k_2, ..., k_n$ sao cho tổng $k_1 + k_2 + ... + k_n \\neq 0$, tồn tại **duy nhất** điểm $I$ (gọi là tâm tỉ cự) thỏa mãn:
  $$k_1 \\vec{IA_1} + k_2 \\vec{IA_2} + ... + k_n \\vec{IA_n} = \\vec{0}$$
- Khi đó với mọi điểm $M$ bất kì trong mặt phẳng, ta có công thức thu gọn:
  $$k_1 \\vec{MA_1} + k_2 \\vec{MA_2} + ... + k_n \\vec{MA_n} = (k_1 + k_2 + ... + k_n) \\vec{MI}$$
        `,
        tips: `
- 💡 **Kỹ thuật chèn điểm:** Là kĩ thuật quan trọng nhất trong hình học vectơ. Để phân tích một vectơ thành tổng các vectơ khác, hãy liên tục chèn các điểm trung gian có sẵn trong giả thiết (trung điểm, trọng tâm).
- 💡 **Mẹo tìm quỹ tích:** Khi gặp bài toán $|\\text{Tổng các vectơ}| = k$, hãy dùng tâm tỉ cự để thu gọn biểu thức bên trong dấu $|...|$ về dạng $|n\\vec{MI}| = k \\Leftrightarrow MI = \\frac{k}{|n|}$, suy ra tập hợp $M$ là đường tròn.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Cho 4 điểm bất kì $A, B, C, D$. Chứng minh rằng: $\\vec{AB} + \\vec{CD} = \\vec{AD} + \\vec{CB}$.
* **Lời giải:**
  - Vế trái: $VT = \\vec{AB} + \\vec{CD}$.
  - Chèn điểm $D$ vào vectơ thứ nhất và điểm $B$ vào vectơ thứ hai:
    $VT = (\\vec{AD} + \\vec{DB}) + (\\vec{CB} + \\vec{BD})$
  - Gom các vectơ đối nhau: 
    $VT = \\vec{AD} + \\vec{CB} + (\\vec{DB} + \\vec{BD}) = \\vec{AD} + \\vec{CB} + \\vec{0} = VP$ (ĐPCM).

**Bài 2 (Cơ bản):** Cho hình vuông $ABCD$ cạnh $a$. Tính độ dài của vectơ $\\vec{u} = \\vec{AB} + \\vec{AD}$ và $\\vec{v} = \\vec{AB} - \\vec{AC}$.
* **Lời giải:**
  - Tính $|\\vec{u}|$: Theo quy tắc hình bình hành, $\\vec{AB} + \\vec{AD} = \\vec{AC} \\Rightarrow |\\vec{u}| = AC = a\\sqrt{2}$.
  - Tính $|\\vec{v}|$: Ta có $\\vec{AB} - \\vec{AC} = \\vec{CB} \\Rightarrow |\\vec{v}| = CB = a$.

**Bài 3 (Vận dụng):** Cho $\\triangle ABC$. Gọi $M$ là trung điểm của $BC$ và $N$ là điểm trên cạnh $AC$ sao cho $NC = 2NA$. Phân tích vectơ $\\vec{MN}$ theo hai vectơ $\\vec{a} = \\vec{AB}$ và $\\vec{b} = \\vec{AC}$.
* **Lời giải:**
  - Ta có: $\\vec{MN} = -\\vec{AM} + \\vec{AN}$.
  - Vì $M$ là trung điểm $BC$ nên $\\vec{AM} = \\frac{1}{2}(\\vec{AB} + \\vec{AC}) = \\frac{1}{2}\\vec{a} + \\frac{1}{2}\\vec{b}$.
  - Vì $NC = 2NA \\Rightarrow \\vec{AN} = \\frac{1}{3}\\vec{AC} = \\frac{1}{3}\\vec{b}$.
  - Thay vào: $\\vec{MN} = -\\left(\\frac{1}{2}\\vec{a} + \\frac{1}{2}\\vec{b}\\right) + \\frac{1}{3}\\vec{b} = -\\frac{1}{2}\\vec{a} - \\frac{1}{6}\\vec{b}$.

**Bài 4 (Vận dụng cao):** Cho $\\triangle ABC$. Gọi $I$ là điểm thỏa mãn $\\vec{IA} + 2\\vec{IB} + 3\\vec{IC} = \\vec{0}$. Phân tích $\\vec{AI}$ theo $\\vec{AB}, \\vec{AC}$.
* **Lời giải:**
  - Chèn điểm $A$ vào biểu thức: $\\vec{IA} + 2(\\vec{IA} + \\vec{AB}) + 3(\\vec{IA} + \\vec{AC}) = \\vec{0}$.
  - $\\Leftrightarrow 6\\vec{IA} + 2\\vec{AB} + 3\\vec{AC} = \\vec{0} \\Leftrightarrow 6\\vec{AI} = 2\\vec{AB} + 3\\vec{AC} \\Leftrightarrow \\vec{AI} = \\frac{1}{3}\\vec{AB} + \\frac{1}{2}\\vec{AC}$.

**Bài 5 (Nâng cao):** Cho $\\triangle ABC$. Tìm tập hợp điểm $M$ thỏa mãn: $|\\vec{MA} + \\vec{MB} + 2\\vec{MC}| = |\\vec{MA} - \\vec{MB}|$.
* **Lời giải:**
  - Vế phải: $|\\vec{MA} - \\vec{MB}| = |\\vec{BA}| = AB$.
  - Vế trái: Gọi $I$ thỏa mãn $\\vec{IA} + \\vec{IB} + 2\\vec{IC} = \\vec{0}$ ($I$ cố định).
    Khi đó vế trái thu gọn thành: $|4\\vec{MI}| = 4MI$.
  - Phương trình quỹ tích: $4MI = AB \\Leftrightarrow MI = \\frac{AB}{4}$.
  - Kết luận: Tập hợp điểm $M$ là **đường tròn tâm $I$ bán kính $R = \\frac{AB}{4}$**.
        `
    },

    "MATH10-CH4-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương IV: Vectơ",
        title: "Bài 2: Tọa độ Vectơ & Tích vô hướng",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương IV", "Bài 2"],
        theory: `
### 1. Hệ trục tọa độ & Biểu thức tọa độ
📌 **Tọa độ Vectơ:**
- Cho $\\vec{u} = (x_1; y_1)$ và $\\vec{v} = (x_2; y_2)$ trên hệ trục $(O; \\vec{i}, \\vec{j})$.
- $\\vec{u} \\pm \\vec{v} = (x_1 \\pm x_2; y_1 \\pm y_2)$.
- $k\\vec{u} = (kx_1; ky_1)$.
- $\\vec{u} \\text{ và } \\vec{v} \\text{ cùng phương } \\Leftrightarrow x_1 y_2 - x_2 y_1 = 0$.

📌 **Tọa độ Điểm:**
- Cho $A(x_A; y_A)$ và $B(x_B; y_B)$: $\\vec{AB} = (x_B - x_A; y_B - y_A)$.
- Trung điểm $I$ của $AB$: $I\\left(\\frac{x_A+x_B}{2}; \\frac{y_A+y_B}{2}\\right)$.
- Trọng tâm $G$ của $\\triangle ABC$: $G\\left(\\frac{x_A+x_B+x_C}{3}; \\frac{y_A+y_B+y_C}{3}\\right)$.

---

### 2. Tích vô hướng của hai vectơ
📌 **Định nghĩa & Tính chất:**
- $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| \\cdot |\\vec{b}| \\cdot \\cos(\\vec{a}, \\vec{b})$.
- Bình phương vô hướng: $\\vec{a}^2 = |\\vec{a}|^2$.
- Hai vectơ vuông góc: $\\vec{a} \\perp \\vec{b} \\Leftrightarrow \\vec{a} \\cdot \\vec{b} = 0$.

📌 **Biểu thức tọa độ của tích vô hướng:**
- $\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2$.
- Độ dài vectơ: $|\\vec{u}| = \\sqrt{x_1^2 + y_1^2}$.
- Góc giữa hai vectơ: $\\cos(\\vec{u}, \\vec{v}) = \\frac{x_1 x_2 + y_1 y_2}{\\sqrt{x_1^2 + y_1^2} \\cdot \\sqrt{x_2^2 + y_2^2}}$.
        `,
        tips: `
- 💡 **Mẹo tính góc:** Khi tích vô hướng $< 0$, góc giữa hai vectơ là góc tù ($> 90^\\circ$). Khi tích vô hướng $> 0$, góc là góc nhọn ($< 90^\\circ$).
- 💡 **Kiểm tra 3 điểm thẳng hàng:** 3 điểm $A, B, C$ thẳng hàng $\\Leftrightarrow \\vec{AB}$ và $\\vec{AC}$ cùng phương.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Cho $\\vec{a} = (2; -3)$ và $\\vec{b} = (-1; 4)$. Tính tọa độ vectơ $\\vec{u} = 2\\vec{a} - 3\\vec{b}$ và độ dài $|\\vec{u}|$.
* **Lời giải:**
  - $2\\vec{a} = (4; -6)$ và $3\\vec{b} = (-3; 12)$.
  - $\\vec{u} = 2\\vec{a} - 3\\vec{b} = (4 - (-3); -6 - 12) = (7; -18)$.
  - Độ dài: $|\\vec{u}| = \\sqrt{7^2 + (-18)^2} = \\sqrt{49 + 324} = \\sqrt{373}$.

**Bài 2 (Cơ bản):** Trong mặt phẳng $Oxy$, cho 3 điểm $A(-1; 2), B(3; 0), C(5; 4)$. Chứng minh $\\triangle ABC$ vuông tại $B$.
* **Lời giải:**
  - $\\vec{BA} = (-4; 2)$, $\\vec{BC} = (2; 4)$.
  - Xét tích vô hướng: $\\vec{BA} \\cdot \\vec{BC} = (-4)(2) + (2)(4) = -8 + 8 = 0$.
  - Vì $\\vec{BA} \\cdot \\vec{BC} = 0 \\Rightarrow \\vec{BA} \\perp \\vec{BC}$. Vậy $\\triangle ABC$ vuông tại $B$.

**Bài 3 (Vận dụng):** Cho $\\triangle ABC$ với $A(1; 3), B(-2; 1), C(4; 5)$. Tìm tọa độ điểm $D$ sao cho $ABCD$ là hình bình hành.
* **Lời giải:**
  - Để $ABCD$ là hình bình hành: $\\vec{AB} = \\vec{DC}$.
  - $\\vec{AB} = (-3; -2)$, $\\vec{DC} = (4 - x; 5 - y)$.
  - $\\begin{cases} 4 - x = -3 \\\\ 5 - y = -2 \\end{cases} \\Leftrightarrow \\begin{cases} x = 7 \\\\ y = 7 \\end{cases} \\Rightarrow D(7; 7)$.

**Bài 4 (Vận dụng cao):** Cho hai điểm $A(2; 4), B(1; 1)$. Tìm tọa độ điểm $C$ thuộc trục $Ox$ sao cho $\\triangle ABC$ cân tại $C$.
* **Lời giải:**
  - $C \\in Ox \\Rightarrow C(x; 0)$.
  - $CA^2 = CB^2 \\Leftrightarrow (2 - x)^2 + 16 = (1 - x)^2 + 1$
  - $\\Leftrightarrow 4 - 4x + x^2 + 16 = 1 - 2x + x^2 + 1 \\Leftrightarrow 2x = 18 \\Leftrightarrow x = 9 \\Rightarrow C(9; 0)$.

**Bài 5 (Nâng cao):** Cho điểm $A(-1; 2)$ và $B(4; -3)$. Tìm tọa độ điểm $M$ trên trục $Oy$ sao cho $P = |\\vec{MA} + 2\\vec{MB}|$ nhỏ nhất.
* **Lời giải:**
  - Tìm tâm tỉ cự $I$ thỏa mãn $\\vec{IA} + 2\\vec{IB} = \\vec{0} \\Rightarrow I\\left(\\frac{7}{3}; -\\frac{4}{3}\\right)$.
  - Khi đó $P = |3\\vec{MI}| = 3MI$. $P$ nhỏ nhất khi $M$ là hình chiếu vuông góc của $I$ lên $Oy$.
  - Chiếu $I$ lên $Oy$ ta được: $M\\left(0; -\\frac{4}{3}\\right)$.
        `
    },

    "MATH10-CH5-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương V: Thống kê",
        title: "Bài 1: Các số đặc trưng đo xu hướng trung tâm",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương V", "Bài 1"],
        theory: `
### 1. Số trung bình (Mean) & Mốt (Mode)
📌 **Số trung bình ($\bar{x}$):**
- Cho mẫu số liệu: $x_1, x_2, ..., x_n$.
- Công thức: $\bar{x} = \frac{x_1 + x_2 + ... + x_n}{n}$.
- *Ý nghĩa:* Là "trọng tâm" của mẫu số liệu, đại diện cho giá trị trung bình cộng. Nhược điểm là dễ bị ảnh hưởng bởi các giá trị bất thường (quá lớn hoặc quá nhỏ).

📌 **Mốt ($M_o$):**
- Là giá trị có tần số xuất hiện nhiều nhất trong mẫu số liệu.
- *Lưu ý:* Một mẫu số liệu có thể có 1 mốt, nhiều mốt, hoặc không có mốt nào (nếu các giá trị xuất hiện số lần như nhau).

---

### 2. Trung vị (Median) & Tứ phân vị (Quartiles)
📌 **Trung vị ($M_e$ hay $Q_2$):**
- Sắp xếp số liệu theo thứ tự không giảm.
- Nếu $n$ lẻ: Trung vị là số ở chính giữa (vị trí $\frac{n+1}{2}$).
- Nếu $n$ chẵn: Trung vị là trung bình cộng của hai số ở giữa (vị trí $\frac{n}{2}$ và $\frac{n}{2} + 1$).
- *Ý nghĩa:* Không bị ảnh hưởng bởi giá trị bất thường. Thích hợp dùng làm đại diện khi số liệu có sự chênh lệch lớn.

📌 **Tứ phân vị ($Q_1, Q_2, Q_3$):**
- Chia mẫu số liệu (đã sắp xếp) thành 4 phần bằng nhau về số lượng phần tử.
- $Q_2$ là trung vị của toàn bộ mẫu số liệu.
- $Q_1$ (Tứ phân vị thứ nhất / dưới) là trung vị của nửa số liệu bên trái $Q_2$ (không bao gồm $Q_2$ nếu $n$ lẻ).
- $Q_3$ (Tứ phân vị thứ ba / trên) là trung vị của nửa số liệu bên phải $Q_2$.
        `,
        tips: `
- 💡 **Nguyên tắc sống còn:** Để tìm Trung vị và Tứ phân vị, **BẮT BUỘC** phải sắp xếp số liệu theo thứ tự tăng dần đầu tiên. Học sinh rất hay quên bước này dẫn đến sai toàn bài.
- 💡 **Mẹo bấm máy tính (Casio fx-580VN X):** Chọn Menu 6 (Thống kê) -> 1 biến -> Nhập số liệu -> OPTN -> 3 (Tính toán 1 biến) sẽ ra toàn bộ $\bar{x}, Q_1, M_e, Q_3, ...$
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Điểm kiểm tra môn Toán của 7 học sinh là: $8, 6, 7, 5, 9, 8, 10$. Tính số trung bình, trung vị và mốt.
* **Lời giải:**
  - Sắp xếp số liệu tăng dần: $5, 6, 7, 8, 8, 9, 10$ ($n=7$).
  - Số trung bình: $\bar{x} = \frac{5+6+7+8+8+9+10}{7} = \frac{53}{7} \approx 7.57$.
  - Trung vị: Vì $n=7$ (lẻ) nên trung vị là số thứ 4. Vậy $M_e = 8$.
  - Mốt: Số 8 xuất hiện nhiều nhất (2 lần). Vậy $M_o = 8$.

**Bài 2 (Cơ bản):** Tìm các tứ phân vị $Q_1, Q_2, Q_3$ của mẫu số liệu sau: $12, 15, 18, 14, 20, 22, 19, 16$.
* **Lời giải:**
  - Sắp xếp tăng dần: $12, 14, 15, 16, 18, 19, 20, 22$ ($n=8$).
  - Tìm $Q_2$ (Trung vị): Nằm giữa số thứ 4 và 5 $\Rightarrow Q_2 = \frac{16 + 18}{2} = 17$.
  - Tìm $Q_1$: Là trung vị của nửa dưới $(12, 14, 15, 16)$. Nằm giữa 14 và 15 $\Rightarrow Q_1 = \frac{14 + 15}{2} = 14.5$.
  - Tìm $Q_3$: Là trung vị của nửa trên $(18, 19, 20, 22)$. Nằm giữa 19 và 20 $\Rightarrow Q_3 = \frac{19 + 20}{2} = 19.5$.

**Bài 3 (Vận dụng):** Lương tháng (triệu đồng) của 6 nhân viên trong một công ty là: $8, 9, 8, 10, 9, 80$. Theo em, nên chọn số trung bình hay trung vị để đại diện cho mức lương của nhân viên? Tại sao?
* **Lời giải:**
  - Sắp xếp tăng dần: $8, 8, 9, 9, 10, 80$.
  - Số trung bình: $\bar{x} = \frac{8+8+9+9+10+80}{6} = 20.67$ (triệu đồng).
  - Trung vị: $M_e = \frac{9+9}{2} = 9$ (triệu đồng).
  - Lựa chọn: Nên chọn **trung vị** làm giá trị đại diện.
  - Giải thích: Vì trong mẫu số liệu có giá trị $80$ (giám đốc/quản lý) lớn bất thường so với phần còn lại (giá trị ngoại lệ). Nếu dùng số trung bình ($20.67$ triệu) sẽ làm phản ánh sai lệch mức thu nhập thực tế của đa số nhân viên. Trung vị ($9$ triệu) phản ánh đúng thực tế hơn.

**Bài 4 (Vận dụng cao):** Cho mẫu số liệu gồm 5 số nguyên dương đã sắp xếp tăng dần: $a, b, c, d, e$. Biết trung vị bằng $10$, số trung bình bằng $12$, mốt duy nhất bằng $15$. Tìm giá trị nhỏ nhất có thể có của $a$.
* **Lời giải:**
  - Vì $n=5$ nên trung vị là số ở chính giữa $\Rightarrow c = 10$.
  - Số trung bình bằng 12 $\Rightarrow a + b + c + d + e = 12 \times 5 = 60$.
  - Thay $c = 10 \Rightarrow a + b + d + e = 50$.
  - Vì $a, b, c, d, e$ tăng dần và mốt là $15$, mặt khác $c=10$, nên các giá trị xuất hiện nhiều lần (mốt) phải nằm bên phải $c$. Suy ra $d = e = 15$ (để tạo mốt 15 tần số 2).
  - Thay vào tổng: $a + b + 15 + 15 = 50 \Rightarrow a + b = 20$.
  - Vì dãy tăng dần nên $a \le b < c = 10$. Các cặp $(a, b)$ nguyên dương thỏa mãn $a+b=20$ và $b < 10$: Không có cặp nào vì nếu $b \le 9$ thì $a \ge 11$ (Vô lí vì $a \le b$).
  - *(Ghi chú: Đề bài yêu cầu dãy tăng dần nhưng mốt yêu cầu có số trùng nhau. Chính xác dãy là không giảm $a \le b \le c \le d \le e$. Do $b < 10$ (vì nếu $b=10$ thì mốt có thể là 10, nhưng đề cho mốt duy nhất bằng 15). Để $a+b=20$ và $b \le 9$ là vô nghiệm. Suy ra đề bài hoặc giả thiết cần nới lỏng. Nếu nới lỏng $b \le 10$, ta có thể có $a=10, b=10$, khi đó mốt 10 và 15 trùng tần số, không thỏa mốt duy nhất. Vậy bài toán này thực chất là một bài kiểm tra tính tương thích dữ liệu).*

**Bài 5 (Nâng cao):** Chứng minh rằng với một mẫu số liệu gồm $n$ số thực bất kì, tổng các bình phương độ lệch của các số liệu so với một số thực $c$, tức là biểu thức $S = \sum_{i=1}^n (x_i - c)^2$, đạt giá trị nhỏ nhất khi và chỉ khi $c$ là số trung bình $\bar{x}$.
* **Lời giải:**
  - Ta có $S = \sum_{i=1}^n (x_i - c)^2 = \sum_{i=1}^n (x_i^2 - 2cx_i + c^2) = \sum x_i^2 - 2c\sum x_i + nc^2$.
  - Xét $S$ là một tam thức bậc hai theo biến $c$.
  - Đỉnh của Parabol $S(c)$ đạt được tại $c = -\frac{-2\sum x_i}{2n} = \frac{\sum x_i}{n}$.
  - Theo định nghĩa, $\frac{\sum x_i}{n}$ chính là số trung bình $\bar{x}$.
  - Vì hệ số $a = n > 0$ nên $S$ đạt giá trị nhỏ nhất (cực tiểu) tại $c = \bar{x}$ (ĐPCM).
        `
    },

    "MATH10-CH5-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương V: Thống kê",
        title: "Bài 2: Các số đặc trưng đo độ phân tán",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương V", "Bài 2"],
        theory: `
### 1. Khoảng biến thiên & Khoảng tứ phân vị
📌 **Khoảng biến thiên ($R$):**
- $R = x_{max} - x_{min}$.
- Phản ánh độ phân tán của toàn bộ mẫu số liệu, rất dễ bị ảnh hưởng bởi giá trị ngoại lệ.

📌 **Khoảng tứ phân vị ($\Delta_Q$ hoặc $IQR$):**
- $\Delta_Q = Q_3 - Q_1$.
- Phản ánh độ phân tán của 50% số liệu ở giữa, không bị ảnh hưởng bởi giá trị ngoại lệ.

📌 **Giá trị ngoại lệ (Outliers):**
- Một giá trị $x$ bị coi là ngoại lệ (quá nhỏ hoặc quá lớn) nếu:
  $x < Q_1 - 1.5\Delta_Q$ hoặc $x > Q_3 + 1.5\Delta_Q$.

---

### 2. Phương sai & Độ lệch chuẩn
📌 **Phương sai ($s^2$):**
- Trung bình cộng của bình phương các độ lệch so với số trung bình.
- $s^2 = \frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})^2 = \frac{1}{n}(x_1^2 + x_2^2 + ... + x_n^2) - (\bar{x})^2$.
- Đơn vị của phương sai là bình phương đơn vị của số liệu.

📌 **Độ lệch chuẩn ($s$):**
- Là căn bậc hai của phương sai: $s = \sqrt{s^2}$.
- Cùng đơn vị với mẫu số liệu, phản ánh chân thực độ rủi ro, mức độ biến động (độ phân tán) xung quanh giá trị trung bình.
- Mẫu số liệu có độ lệch chuẩn càng nhỏ thì các giá trị càng đồng đều và ổn định.
        `,
        tips: `
- 💡 **Khi nào dùng cái nào?** 
  - Muốn xem số liệu phân tán đều hay không (cổ phiếu ổn định hay rủi ro) $\rightarrow$ Dùng phương sai, độ lệch chuẩn.
  - Số liệu có giá trị ngoại lệ $\rightarrow$ Dùng khoảng tứ phân vị (tránh sai lệch).
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Tìm khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu sau: $3, 8, 2, 9, 12, 15, 20$.
* **Lời giải:**
  - Sắp xếp tăng dần: $2, 3, 8, 9, 12, 15, 20$ ($n=7$).
  - Khoảng biến thiên: $R = 20 - 2 = 18$.
  - Tìm Tứ phân vị: 
    - $Q_2 = 9$ (vị trí thứ 4).
    - $Q_1$ là trung vị của $(2, 3, 8) \Rightarrow Q_1 = 3$.
    - $Q_3$ là trung vị của $(12, 15, 20) \Rightarrow Q_3 = 15$.
  - Khoảng tứ phân vị: $\Delta_Q = Q_3 - Q_1 = 15 - 3 = 12$.

**Bài 2 (Cơ bản):** Tính phương sai và độ lệch chuẩn của số liệu: $4, 6, 8, 10, 12$.
* **Lời giải:**
  - Tính số trung bình: $\bar{x} = \frac{4 + 6 + 8 + 10 + 12}{5} = 8$.
  - Tính phương sai: 
    $s^2 = \frac{(4-8)^2 + (6-8)^2 + (8-8)^2 + (10-8)^2 + (12-8)^2}{5}$
    $= \frac{16 + 4 + 0 + 4 + 16}{5} = \frac{40}{5} = 8$.
  - Độ lệch chuẩn: $s = \sqrt{8} = 2\sqrt{2} \approx 2.83$.

**Bài 3 (Vận dụng):** Lợi nhuận hàng tháng (triệu đồng) của hai cửa hàng A và B trong 5 tháng đầu năm như sau:
  - Cửa hàng A: $40, 42, 38, 41, 39$
  - Cửa hàng B: $20, 60, 30, 70, 20$
Hỏi cửa hàng nào có doanh thu ổn định hơn? Giải thích.
* **Lời giải:**
  - Tính trung bình: $\bar{x}_A = \frac{40+42+38+41+39}{5} = 40$. $\bar{x}_B = \frac{20+60+30+70+20}{5} = 40$.
  - Dù trung bình bằng nhau, nhưng ta cần tính phương sai để xem độ phân tán:
    - $s_A^2 = \frac{(-2)^2 + 2^2 + (-2)^2 + 1^2 + (-1)^2}{5} = \frac{14}{5} = 2.8$.
    - $s_B^2 = \frac{(-20)^2 + 20^2 + (-10)^2 + 30^2 + (-20)^2}{5} = \frac{400 + 400 + 100 + 900 + 400}{5} = \frac{2200}{5} = 440$.
  - Vì $s_A^2 < s_B^2$ (độ lệch chuẩn của A cũng nhỏ hơn B rất nhiều), nên lợi nhuận cửa hàng A ổn định và ít rủi ro biến động hơn.

**Bài 4 (Vận dụng cao):** Có một mẫu số liệu về chiều cao (cm) của học sinh: $150, 155, 158, 160, 162, 165, 170, 195$. Hãy kiểm tra xem giá trị $195$ có phải là giá trị ngoại lệ không?
* **Lời giải:**
  - Mẫu đã sắp xếp tăng dần, $n=8$.
  - $Q_2 = \frac{160 + 162}{2} = 161$.
  - Nửa dưới: $(150, 155, 158, 160) \Rightarrow Q_1 = \frac{155 + 158}{2} = 156.5$.
  - Nửa trên: $(162, 165, 170, 195) \Rightarrow Q_3 = \frac{165 + 170}{2} = 167.5$.
  - Khoảng tứ phân vị: $\Delta_Q = Q_3 - Q_1 = 167.5 - 156.5 = 11$.
  - Tính giới hạn trên (Ngưỡng ngoại lệ trên): $Q_3 + 1.5\Delta_Q = 167.5 + 1.5(11) = 167.5 + 16.5 = 184$.
  - Vì $195 > 184$, nên giá trị $195$ chính là một **giá trị ngoại lệ**.

**Bài 5 (Nâng cao):** Cho mẫu số liệu có phương sai $s^2 = 5$. Nếu ta nhân mỗi giá trị trong mẫu số liệu với $3$, rồi cộng thêm $2$, thì mẫu số liệu mới có phương sai và độ lệch chuẩn bằng bao nhiêu?
* **Lời giải:**
  - Tính chất của phương sai: Nếu $y_i = a x_i + b$, thì số trung bình $\bar{y} = a \bar{x} + b$, còn phương sai $s_y^2 = a^2 s_x^2$.
  - Áp dụng tính chất trên với $a = 3, b = 2$.
  - Phương sai mới: $s_y^2 = 3^2 \times s_x^2 = 9 \times 5 = 45$.
  - Độ lệch chuẩn mới: $s_y = \sqrt{45} = 3\sqrt{5}$.
  - *(Nhận xét: Phép tịnh tiến (cộng thêm 2) không làm thay đổi độ phân tán của số liệu, nhưng phép co giãn (nhân 3) làm phương sai tăng gấp 9 lần và độ lệch chuẩn tăng gấp 3 lần).*
        `
    },

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
    },

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
    },
    "MATH10-CH8-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương VIII: Đại số tổ hợp",
        title: "Bài 1: Quy tắc đếm, Hoán vị, Chỉnh hợp & Tổ hợp",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương VIII", "Bài 1"],
        theory: `
### 1. Quy tắc đếm Cơ bản
📌 **Quy tắc cộng (Hành động có nhiều phương án ĐỘC LẬP):**
- Nếu một công việc có thể thực hiện theo $k$ phương án khác nhau, phương án 1 có $n_1$ cách, phương án 2 có $n_2$ cách... thì tổng số cách là $n_1 + n_2 + ... + n_k$.

📌 **Quy tắc nhân (Hành động có nhiều CÔNG ĐOẠN liên tiếp):**
- Nếu một công việc phải trải qua $k$ công đoạn liên tiếp, công đoạn 1 có $n_1$ cách, công đoạn 2 có $n_2$ cách... thì tổng số cách là $n_1 \times n_2 \times ... \times n_k$.

---

### 2. Hoán vị, Chỉnh hợp, Tổ hợp
📌 **Hoán vị ($P_n$):** Sắp xếp $n$ phần tử vào $n$ vị trí.
- $P_n = n! = n(n-1)(n-2)...1$

📌 **Chỉnh hợp ($A_n^k$):** Chọn $k$ phần tử từ $n$ phần tử và **CÓ SẮP XẾP** (phân công chức vụ, xếp hàng).
- $A_n^k = \frac{n!}{(n-k)!}$

📌 **Tổ hợp ($C_n^k$):** Chọn $k$ phần tử từ $n$ phần tử và **KHÔNG SẮP XẾP** (chọn một nhóm, bốc bi ngẫu nhiên).
- $C_n^k = \frac{n!}{k!(n-k)!}$

---

### 3. Kỹ thuật Đếm Nâng cao (Dành cho Vận dụng cao)
📌 **1. Phương pháp Chèn khe (Slotting Method):**
- Dùng để giải bài toán: "Xếp các phần tử sao cho không có 2 phần tử nào (của một nhóm) đứng cạnh nhau".
- **Bước 1:** Xếp nhóm không bị giới hạn trước.
- **Bước 2:** Các phần tử vừa xếp sẽ tạo ra các "khe hở" (ở giữa và hai đầu). Chọn các khe hở này để xếp nhóm bị giới hạn vào.

📌 **2. Bổ đề Chia kẹo Euler (Vách ngăn):**
- Bài toán: Có $n$ viên kẹo giống nhau, chia cho $k$ đứa trẻ sao cho mỗi đứa có **ít nhất 1 viên**.
- Công thức: $C_{n-1}^{k-1}$ cách. (Tưởng tượng đặt $k-1$ vách ngăn vào $n-1$ khoảng trống giữa $n$ viên kẹo).
        `,
        tips: `
- 💡 **Thần chú phân biệt A và C:** Đọc đề lên thấy có hành động "xếp hàng", "phân công chức vụ", "làm số tự nhiên" $\Rightarrow$ Dùng $A$ (Chỉnh hợp). Nếu chỉ "chọn ra đi lao động", "chọn ra một tập con", "bốc bi" $\Rightarrow$ Dùng $C$ (Tổ hợp).
- 💡 **Xử lý số 0 khi lập số tự nhiên:** Số tự nhiên $\overline{a b c d...}$ thì **bắt buộc $a \neq 0$**. Luôn phải trừ đi trường hợp $a=0$ hoặc chọn $a$ đầu tiên.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Một nhà hàng có 5 món mặn, 3 món canh và 4 loại nước uống. Một khách hàng muốn chọn một suất ăn gồm đúng 1 món mặn, 1 món canh và 1 loại nước uống. Hỏi có bao nhiêu cách chọn?
* **Lời giải:**
  - Việc chọn suất ăn là một hành động gồm 3 công đoạn liên tiếp:
    - Công đoạn 1: Chọn món mặn (có 5 cách).
    - Công đoạn 2: Chọn món canh (có 3 cách).
    - Công đoạn 3: Chọn nước uống (có 4 cách).
  - Áp dụng quy tắc nhân, tổng số cách chọn là: $5 \times 3 \times 4 = 60$ (cách).

**Bài 2 (Cơ bản):** Một lớp học có 15 học sinh nam và 20 học sinh nữ.
a) Có bao nhiêu cách chọn ra 3 học sinh đi trực nhật?
b) Có bao nhiêu cách chọn ra 3 học sinh để làm Lớp trưởng, Lớp phó và Bí thư?
* **Lời giải:**
  - Tổng số học sinh của lớp là $15 + 20 = 35$ học sinh.
  - a) Chọn 3 học sinh đi trực nhật (không phân biệt thứ tự/chức vụ): Dùng Tổ hợp.
    Số cách chọn là $C_{35}^3 = 6545$ (cách).
  - b) Chọn 3 học sinh để phân 3 chức vụ khác nhau (có thứ tự): Dùng Chỉnh hợp.
    Số cách chọn là $A_{35}^3 = 39270$ (cách).

**Bài 3 (Vận dụng):** Từ các chữ số $0, 1, 2, 3, 4, 5$ có thể lập được bao nhiêu số tự nhiên chẵn có 4 chữ số đôi một khác nhau?
* **Lời giải:**
  - Gọi số cần tìm có dạng $\overline{abcd}$ ($a \neq 0, a, b, c, d$ phân biệt).
  - Vì số là số chẵn nên $d \in \{0, 2, 4\}$. Ta chia làm 2 trường hợp:
  - **TH1: $d = 0$** (Tận cùng là số 0).
    - $d$ có 1 cách chọn.
    - Chọn 3 chữ số còn lại xếp vào $a, b, c$ từ 5 chữ số $\{1, 2, 3, 4, 5\}$: Có $A_5^3 = 60$ cách.
    $\Rightarrow$ TH1 có $1 \times 60 = 60$ (số).
  - **TH2: $d \in \{2, 4\}$**
    - $d$ có 2 cách chọn.
    - Chọn $a \neq 0$ và $a \neq d$: Tập số còn 4 chữ số, nên $a$ có 4 cách chọn.
    - Chọn $b, c$ từ 4 chữ số còn lại: $A_4^2 = 12$ cách.
    $\Rightarrow$ TH2 có $2 \times 4 \times 12 = 96$ (số).
  - Kết luận: Có tổng cộng $60 + 96 = 156$ số tự nhiên chẵn thỏa mãn.

**Bài 4 (Vận dụng cao - Phương pháp chèn khe):** Có 5 học sinh nam và 3 học sinh nữ. Có bao nhiêu cách xếp 8 học sinh này thành một hàng ngang sao cho không có 2 học sinh nữ nào đứng cạnh nhau?
* **Lời giải:**
  - **Bước 1:** Xếp 5 học sinh nam thành một hàng ngang. Số cách xếp là $P_5 = 5! = 120$ (cách).
  - **Bước 2:** 5 học sinh nam vừa được xếp sẽ tạo ra 6 "khe hở" (gồm 4 khe ở giữa các bạn nam và 2 khe ở hai đầu hàng).
  - **Bước 3:** Để các bạn nữ không đứng cạnh nhau, ta phải xếp 3 bạn nữ vào 3 khe hở khác nhau được chọn từ 6 khe hở trên. Số cách chọn và xếp là $A_6^3 = 120$ (cách).
  - Kết luận: Áp dụng quy tắc nhân, số cách xếp thỏa mãn là $120 \times 120 = 14400$ (cách).

**Bài 5 (Nâng cao - Chia kẹo Euler):** Cô giáo có 10 viên kẹo giống hệt nhau muốn chia cho 3 em học sinh. Hỏi có bao nhiêu cách chia sao cho mỗi em nhận được ít nhất 1 viên kẹo?
* **Lời giải:**
  - Bài toán tương đương với việc tìm số nghiệm nguyên dương của phương trình: $x_1 + x_2 + x_3 = 10$ ($x_i \ge 1, i = 1, 2, 3$).
  - Tưởng tượng ta đặt 10 viên kẹo thành một hàng ngang. Giữa 10 viên kẹo có $10 - 1 = 9$ khoảng trống (khe).
  - Để chia kẹo thành 3 phần, ta cần dùng 2 "vách ngăn" đặt vào 2 khoảng trống bất kỳ trong 9 khoảng trống đó.
  - Số cách đặt vách ngăn chính là số cách chọn 2 vị trí từ 9 vị trí: $C_9^2$.
  - Tính toán: $C_9^2 = \frac{9 \times 8}{2} = 36$.
  - Vậy có 36 cách chia kẹo.
        `
    },

    "MATH10-CH8-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương VIII: Đại số tổ hợp",
        title: "Bài 2: Nhị thức Newton",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương VIII", "Bài 2"],
        theory: `
### 1. Khai triển Nhị thức Newton cơ bản ($n=4, 5$)
📌 **Công thức tổng quát:**
- $(a+b)^n = C_n^0 a^n b^0 + C_n^1 a^{n-1} b^1 + ... + C_n^k a^{n-k} b^k + ... + C_n^n a^0 b^n$.

📌 **Trường hợp cụ thể SGK (n=4 và n=5):**
- $(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$.
- $(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$.
- *(Hệ số được lấy từ Tam giác Pascal).*

📌 **Số hạng tổng quát (RẤT QUAN TRỌNG):**
- Số hạng thứ $k+1$ trong khai triển là: **$T_{k+1} = C_n^k a^{n-k} b^k$** ($0 \le k \le n$).

---

### 2. Chuyên đề Nâng cao: Ứng dụng Nhị thức Newton tính tổng Tổ hợp
- Xét khai triển $(1 + x)^n = C_n^0 + C_n^1 x + C_n^2 x^2 + ... + C_n^n x^n$.
- Thay $x = 1$, ta có tổng toàn bộ các hệ số:
  $$C_n^0 + C_n^1 + C_n^2 + ... + C_n^n = 2^n$$
- Thay $x = -1$, ta có tổng đan dấu bằng 0:
  $$C_n^0 - C_n^1 + C_n^2 - ... + (-1)^n C_n^n = 0$$
        `,
        tips: `
- 💡 **Bẫy dấu trừ:** Khi khai triển $(a - b)^n$, bản chất là $(a + (-b))^n$. Do đó, số hạng thứ hai $b$ luôn phải đi kèm dấu âm, biểu thức sẽ có dấu $+ - + -$ đan xen nhau.
- 💡 **Mẹo làm bài tìm hệ số:** Luôn viết công thức $T_{k+1}$ ra, sau đó tách toàn bộ "Phần số" ra phía trước, "Phần biến x" gom ra phía sau rồi cộng trừ số mũ.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Khai triển biểu thức sau: $(2x - 1)^4$.
* **Lời giải:**
  - Áp dụng công thức với $n=4, a = 2x, b = -1$.
  - $(2x - 1)^4 = C_4^0 (2x)^4 (-1)^0 + C_4^1 (2x)^3 (-1)^1 + C_4^2 (2x)^2 (-1)^2 + C_4^3 (2x)^1 (-1)^3 + C_4^4 (2x)^0 (-1)^4$
  - $= 1 \cdot 16x^4 \cdot 1 + 4 \cdot 8x^3 \cdot (-1) + 6 \cdot 4x^2 \cdot 1 + 4 \cdot 2x \cdot (-1) + 1 \cdot 1 \cdot 1$
  - $= 16x^4 - 32x^3 + 24x^2 - 8x + 1$.

**Bài 2 (Cơ bản):** Tìm hệ số của số hạng chứa $x^3$ trong khai triển của biểu thức $(x + 2)^5$.
* **Lời giải:**
  - Số hạng tổng quát thứ $k+1$ là: $T_{k+1} = C_5^k x^{5-k} 2^k = C_5^k \cdot 2^k \cdot x^{5-k}$.
  - Đề bài yêu cầu tìm hệ số của $x^3$, suy ra số mũ của $x$ phải bằng 3:
    $5 - k = 3 \Leftrightarrow k = 2$.
  - Thay $k=2$ vào phần hệ số: $C_5^2 \cdot 2^2 = 10 \cdot 4 = 40$.
  - Vậy hệ số cần tìm là 40.

**Bài 3 (Vận dụng):** Tìm số hạng không chứa $x$ trong khai triển của biểu thức $\left(x - \frac{2}{x}\right)^4$.
* **Lời giải:**
  - Số hạng tổng quát: $T_{k+1} = C_4^k x^{4-k} \left(-\frac{2}{x}\right)^k$.
  - $T_{k+1} = C_4^k \cdot x^{4-k} \cdot (-2)^k \cdot x^{-k} = C_4^k \cdot (-2)^k \cdot x^{4-2k}$.
  - Yêu cầu số hạng không chứa $x$ (tức là $x^0$):
    $4 - 2k = 0 \Leftrightarrow 2k = 4 \Leftrightarrow k = 2$.
  - Thay $k=2$ vào phần hệ số để tìm số hạng đó:
    $T_3 = C_4^2 \cdot (-2)^2 = 6 \cdot 4 = 24$.
  - Vậy số hạng không chứa $x$ là 24.

**Bài 4 (Vận dụng cao):** Tính giá trị của biểu thức tổng sau: 
  $$S = C_5^0 - 3C_5^1 + 3^2 C_5^2 - 3^3 C_5^3 + 3^4 C_5^4 - 3^5 C_5^5$$
* **Lời giải:**
  - Nhận xét cấu trúc của $S$ hoàn toàn khớp với khai triển Nhị thức Newton:
    $(a+b)^n = C_n^0 a^n + C_n^1 a^{n-1} b + ... + C_n^n b^n$.
  - Ở đây, ta thấy $n=5$, $b$ đang tăng dần lũy thừa là số $-3$. $a$ có lũy thừa luôn bằng 1, tức là $a=1$.
  - Thay $n=5, a=1, b=-3$ vào công thức Nhị thức Newton, ta có:
    $(1 + (-3))^5 = C_5^0 1^5 + C_5^1 1^4 (-3)^1 + C_5^2 1^3 (-3)^2 + ... + C_5^5 (-3)^5$.
  - Biểu thức này chính là $S$.
  - Vậy $S = (1 - 3)^5 = (-2)^5 = -32$.

**Bài 5 (Nâng cao):** Cho đẳng thức chứng minh được: $k \cdot C_n^k = n \cdot C_{n-1}^{k-1}$. Áp dụng đẳng thức đó, hãy tính tổng:
  $$M = C_5^1 + 2C_5^2 + 3C_5^3 + 4C_5^4 + 5C_5^5$$
* **Lời giải:**
  - Áp dụng đẳng thức đã cho với $n=5$:
    $1 \cdot C_5^1 = 5 \cdot C_4^0$
    $2 \cdot C_5^2 = 5 \cdot C_4^1$
    $3 \cdot C_5^3 = 5 \cdot C_4^2$
    $4 \cdot C_5^4 = 5 \cdot C_4^3$
    $5 \cdot C_5^5 = 5 \cdot C_4^4$
  - Cộng vế theo vế các đẳng thức trên, ta được:
    $M = 5(C_4^0 + C_4^1 + C_4^2 + C_4^3 + C_4^4)$.
  - Theo tính chất tổng các hệ số nhị thức, ta có $C_n^0 + C_n^1 + ... + C_n^n = 2^n$.
  - Do đó: $C_4^0 + C_4^1 + C_4^2 + C_4^3 + C_4^4 = 2^4 = 16$.
  - Kết luận: $M = 5 \times 16 = 80$.
        `
    },
     "MATH10-CH9-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương IX: Xác suất",
        title: "Bài 1: Phép thử ngẫu nhiên & Xác suất cổ điển",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương IX", "Bài 1"],
        theory: `
### 1. Phép thử, Không gian mẫu và Biến cố
📌 **Khái niệm cốt lõi:**
- **Phép thử ngẫu nhiên ($T$):** Là một hành động mà ta không đoán trước được kết quả, nhưng biết được tập hợp tất cả các kết quả có thể xảy ra.
- **Không gian mẫu ($\Omega$):** Tập hợp tất cả các kết quả có thể xảy ra của phép thử.
- **Biến cố ($A$):** Là một tập con của không gian mẫu (chứa các kết quả thuận lợi cho biến cố đó).
- **Biến cố chắc chắn:** Là biến cố luôn xảy ra, chính là tập $\Omega$.
- **Biến cố không thể:** Là biến cố không bao giờ xảy ra, chính là tập rỗng $\emptyset$.

---

### 2. Định nghĩa Cổ điển của Xác suất
📌 **Xác suất của biến cố $A$, kí hiệu là $P(A)$:**
- $$P(A) = \frac{n(A)}{n(\Omega)}$$
- Trong đó:
  - $n(A)$: Số phần tử của tập hợp $A$ (số kết quả thuận lợi cho $A$).
  - $n(\Omega)$: Số phần tử của không gian mẫu (tổng số kết quả có thể xảy ra).
- **Tính chất:** $0 \le P(A) \le 1$. $P(\Omega) = 1$, $P(\emptyset) = 0$.

📌 **Kỹ thuật Đếm trong Xác suất:**
- Hầu hết các bài toán xác suất lớp 10 thực chất là **hai bài toán Đại số Tổ hợp** ghép lại (một bài tìm $n(\Omega)$, một bài tìm $n(A)$). Phải nắm thật vững Hoán vị - Chỉnh hợp - Tổ hợp (Chương 8).
        `,
        tips: `
- 💡 **Mẹo tính $n(\Omega)$:** Đọc kỹ câu văn có chữ "Chọn ngẫu nhiên...", "Lấy ngẫu nhiên...". Ngay sau chữ đó chính là hành động của phép thử, giúp ta tính được $n(\Omega)$ (thường dùng $C_n^k$).
- 💡 **Nhận diện phép thử có thứ tự hay không:** Bốc "đồng thời" hoặc bốc "lần lượt không hoàn lại nhưng không xếp thứ tự" là giống nhau $\Rightarrow$ Dùng $C$. Bốc ra "rồi xếp thành hàng", "chia chức vụ" $\Rightarrow$ Dùng $A$.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Gieo một con xúc xắc cân đối và đồng chất 1 lần. Tính xác suất để xuất hiện mặt có số chấm là số nguyên tố.
* **Lời giải:**
  - Không gian mẫu: $\Omega = \{1, 2, 3, 4, 5, 6\} \Rightarrow n(\Omega) = 6$.
  - Gọi A là biến cố "Mặt xuất hiện có số chấm là số nguyên tố".
  - Các số nguyên tố từ 1 đến 6 là 2, 3, 5. Vậy $A = \{2, 3, 5\} \Rightarrow n(A) = 3$.
  - Xác suất: $P(A) = \frac{n(A)}{n(\Omega)} = \frac{3}{6} = \frac{1}{2}$.

**Bài 2 (Cơ bản):** Một hộp chứa 5 quả cầu đỏ và 7 quả cầu xanh. Chọn ngẫu nhiên đồng thời 3 quả cầu. Tính xác suất để cả 3 quả đều màu đỏ.
* **Lời giải:**
  - Hành động: Chọn 3 quả từ tổng số $5+7=12$ quả.
  - Số phần tử không gian mẫu: $n(\Omega) = C_{12}^3 = 220$.
  - Gọi B là biến cố "Cả 3 quả đều màu đỏ". Tức là chọn 3 quả từ 5 quả đỏ.
  - Số kết quả thuận lợi cho B: $n(B) = C_5^3 = 10$.
  - Xác suất: $P(B) = \frac{10}{220} = \frac{1}{22}$.

**Bài 3 (Vận dụng):** Từ các chữ số $1, 2, 3, 4, 5, 6$, lập các số tự nhiên có 3 chữ số đôi một khác nhau. Lấy ngẫu nhiên một số vừa lập. Tính xác suất để số lấy ra là số chẵn.
* **Lời giải:**
  - **Tính $n(\Omega)$:** Lập số có 3 chữ số khác nhau từ 6 chữ số. Có $A_6^3 = 120$ số. Vậy $n(\Omega) = 120$.
  - **Tính $n(A)$:** Gọi A là biến cố "Số lập được là số chẵn". Dạng số là $\overline{abc}$.
    - $c \in \{2, 4, 6\} \Rightarrow c$ có 3 cách chọn.
    - $a, b$ chọn từ 5 chữ số còn lại (có sắp xếp) $\Rightarrow$ có $A_5^2 = 20$ cách.
    - $n(A) = 3 \times 20 = 60$ số.
  - Xác suất: $P(A) = \frac{60}{120} = \frac{1}{2}$.

**Bài 4 (Vận dụng cao):** Có 10 học sinh gồm 4 nam và 6 nữ. Chọn ngẫu nhiên 3 học sinh để tham gia văn nghệ. Tính xác suất để 3 học sinh được chọn có ít nhất 2 nữ.
* **Lời giải:**
  - $n(\Omega) = C_{10}^3 = 120$.
  - Gọi C là biến cố "Có ít nhất 2 nữ". Các trường hợp của C:
    - **TH1 (2 nữ, 1 nam):** Chọn 2 nữ (từ 6) và 1 nam (từ 4) $\Rightarrow C_6^2 \times C_4^1 = 15 \times 4 = 60$ cách.
    - **TH2 (3 nữ, 0 nam):** Chọn 3 nữ (từ 6) $\Rightarrow C_6^3 = 20$ cách.
  - $n(C) = 60 + 20 = 80$.
  - Xác suất: $P(C) = \frac{80}{120} = \frac{2}{3}$.

**Bài 5 (Nâng cao):** Hai người A và B cùng bắn mỗi người 1 viên đạn vào một mục tiêu (độc lập với nhau). Xác suất bắn trúng của A là $0.8$ và của B là $0.7$. Tính xác suất để mục tiêu bị bắn trúng.
* **Lời giải:**
  - Bài toán này có thể dùng sơ đồ cây hoặc biến cố đối. (Dùng biến cố đối nhanh hơn).
  - Mục tiêu bị bắn trúng khi A trúng hoặc B trúng hoặc cả 2 trúng.
  - Biến cố đối: "Mục tiêu KHÔNG bị bắn trúng" $\Leftrightarrow$ Cả A và B đều trượt.
  - Xác suất A trượt: $1 - 0.8 = 0.2$. Xác suất B trượt: $1 - 0.7 = 0.3$.
  - Vì hai người bắn độc lập, xác suất cả hai đều trượt là: $0.2 \times 0.3 = 0.06$.
  - Vậy xác suất mục tiêu bị bắn trúng là: $1 - 0.06 = 0.94$ (hay $94\%$).
        `
    },

    "MATH10-CH9-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương IX: Xác suất",
        title: "Bài 2: Các quy tắc tính xác suất (Cộng, Nhân, Biến cố đối)",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương IX", "Bài 2"],
        theory: `
### 1. Phép toán trên các biến cố
📌 **Biến cố hợp ($A \cup B$):** Là biến cố "Xảy ra A hoặc xảy ra B".
📌 **Biến cố giao ($A \cap B$ hay $AB$):** Là biến cố "Xảy ra cả A và B cùng lúc".
📌 **Biến cố đối ($\overline{A}$):** Là biến cố "A không xảy ra". $A \cup \overline{A} = \Omega$ và $A \cap \overline{A} = \emptyset$.

---

### 2. Các quy tắc tính Xác suất Chuyên sâu
📌 **Quy tắc Cộng:**
- Hai biến cố $A$ và $B$ xung khắc (không thể cùng lúc xảy ra, $A \cap B = \emptyset$):
  $$P(A \cup B) = P(A) + P(B)$$
- Hai biến cố $A$ và $B$ bất kỳ (công thức cộng mở rộng):
  $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

📌 **Quy tắc Nhân (Dành cho biến cố độc lập):**
- Hai biến cố $A$ và $B$ độc lập (việc xảy ra của A không ảnh hưởng đến xác suất của B):
  $$P(A \cap B) = P(A) \cdot P(B)$$

📌 **Quy tắc Biến cố đối:**
- $$P(\overline{A}) = 1 - P(A)$$
        `,
        tips: `
- 💡 **Dấu hiệu nhận biết:**
  - Gặp từ **"HOẶC"**, chia các trường hợp rời nhau $\Rightarrow$ Dùng Quy tắc CỘNG.
  - Gặp từ **"VÀ"**, thực hiện các công đoạn liên tiếp, độc lập $\Rightarrow$ Dùng Quy tắc NHÂN.
  - Gặp từ **"ÍT NHẤT"**, **"TỐI ĐA"** $\Rightarrow$ Nghĩ ngay đến BIẾN CỐ ĐỐI.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Xác suất để học sinh A thi đỗ đại học là $0.7$. Tính xác suất để học sinh A không thi đỗ đại học.
* **Lời giải:**
  - Gọi $X$ là biến cố "Học sinh A thi đỗ". $P(X) = 0.7$.
  - Biến cố đối $\overline{X}$ là "Học sinh A không thi đỗ".
  - $P(\overline{X}) = 1 - P(X) = 1 - 0.7 = 0.3$.

**Bài 2 (Cơ bản):** Tung một đồng xu cân đối và đồng chất 2 lần liên tiếp. Tính xác suất để có đúng 1 lần xuất hiện mặt sấp (S).
* **Lời giải:**
  - Không gian mẫu $\Omega = \{(S, S), (S, N), (N, S), (N, N)\} \Rightarrow n(\Omega) = 4$.
  - Gọi A là biến cố "Có đúng 1 lần mặt S". $A = \{(S, N), (N, S)\} \Rightarrow n(A) = 2$.
  - $P(A) = \frac{2}{4} = \frac{1}{2}$.
  - *(Cách dùng quy tắc nhân:* Xác suất (S, N) là $0.5 \times 0.5 = 0.25$. Xác suất (N, S) là $0.5 \times 0.5 = 0.25$. Xác suất tổng: $0.25 + 0.25 = 0.5$).

**Bài 3 (Vận dụng):** Một hộp chứa 6 bi trắng và 4 bi đen. Lấy ngẫu nhiên ra 3 bi. Tính xác suất để lấy được ít nhất 1 bi đen.
* **Lời giải:**
  - Hành động: Lấy 3 bi từ 10 bi $\Rightarrow n(\Omega) = C_{10}^3 = 120$.
  - Gọi A là biến cố "Lấy được ít nhất 1 bi đen".
  - (Sử dụng biến cố đối vì có chữ "ít nhất").
  - Biến cố $\overline{A}$: "Không lấy được bi đen nào" $\Leftrightarrow$ Cả 3 bi đều màu trắng.
  - $n(\overline{A}) = C_6^3 = 20$.
  - $P(\overline{A}) = \frac{20}{120} = \frac{1}{6}$.
  - Vậy $P(A) = 1 - P(\overline{A}) = 1 - \frac{1}{6} = \frac{5}{6}$.

**Bài 4 (Vận dụng cao):** Ba xạ thủ A, B, C độc lập bắn vào một bia. Xác suất bắn trúng của A, B, C lần lượt là $0.6$; $0.7$ và $0.8$. Tính xác suất để có **đúng 2 xạ thủ** bắn trúng bia.
* **Lời giải:**
  - Gọi $A, B, C$ lần lượt là biến cố xạ thủ A, B, C bắn trúng. Các biến cố này độc lập.
  - Xác suất bắn trượt tương ứng là $P(\overline{A}) = 0.4$; $P(\overline{B}) = 0.3$; $P(\overline{C}) = 0.2$.
  - Gọi D là biến cố "Có đúng 2 xạ thủ trúng bia". D gồm 3 trường hợp xung khắc:
    - TH1: A trúng, B trúng, C trượt $\Rightarrow P_1 = 0.6 \times 0.7 \times 0.2 = 0.084$.
    - TH2: A trúng, B trượt, C trúng $\Rightarrow P_2 = 0.6 \times 0.3 \times 0.8 = 0.144$.
    - TH3: A trượt, B trúng, C trúng $\Rightarrow P_3 = 0.4 \times 0.7 \times 0.8 = 0.224$.
  - Xác suất tổng cộng: $P(D) = P_1 + P_2 + P_3 = 0.084 + 0.144 + 0.224 = 0.452$.

**Bài 5 (Nâng cao):** Cho đa giác đều 20 đỉnh nội tiếp đường tròn. Chọn ngẫu nhiên 3 đỉnh của đa giác đó. Tính xác suất để 3 đỉnh được chọn tạo thành một tam giác vuông.
* **Lời giải:**
  - Lấy 3 đỉnh từ 20 đỉnh tạo thành 1 tam giác $\Rightarrow n(\Omega) = C_{20}^3 = 1140$.
  - Gọi A là biến cố "3 đỉnh tạo thành tam giác vuông".
  - Tính chất đa giác đều nội tiếp: Tam giác vuông nội tiếp đường tròn khi và chỉ khi cạnh huyền của nó là **đường kính** của đường tròn ngoại tiếp.
  - Đa giác đều 20 đỉnh có đúng $\frac{20}{2} = 10$ đường chéo đi qua tâm (đường kính).
  - Để tạo một tam giác vuông, ta làm 2 bước:
    - Bước 1: Chọn 1 đường kính làm cạnh huyền $\Rightarrow$ Có 10 cách chọn.
    - Bước 2: Chọn đỉnh góc vuông thứ 3 từ 18 đỉnh còn lại $\Rightarrow$ Có 18 cách.
  - Theo quy tắc nhân, số tam giác vuông tạo thành là: $n(A) = 10 \times 18 = 180$.
  - Xác suất: $P(A) = \frac{180}{1140} = \frac{3}{19}$.
        `
    }
};





