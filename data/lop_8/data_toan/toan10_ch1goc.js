/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương I: Mệnh đề và tập hợp (Đã bổ sung lý thuyết và bài tập)
   ========================================================================== */

const DATA_TOAN10_CH1 = {
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

📌 **Mệnh đề kéo theo ($P \Rightarrow Q$) & Tính chất Logic:**
- Mệnh đề $P \Rightarrow Q$ **chỉ SAI khi $P$ ĐÚNG và $Q$ SAI**.
- $P$ là **điều kiện đủ** để có $Q$; $Q$ là **điều kiện cần** để có $P$.

---

### 2. Định lý, Bổ đề & Kiến thức Nâng cao
📌 **1. Mệnh đề Phản đảo (Contrapositive Law):**
- Mệnh đề $P \Rightarrow Q$ có giá trị chân lý **tương đương tuyệt đối** với mệnh đề phản đảo $\overline{Q} \Rightarrow \overline{P}$.
  $$(P \Rightarrow Q) \equiv (\overline{Q} \Rightarrow \overline{P})$$

📌 **2. Phương pháp Chứng minh Phản chứng (Reductio ad absurdam):**
- Giả sử mệnh đề kết luận $Q$ sai (tức $\overline{Q}$ đúng). Sử dụng các phép suy luận logic để dẫn tới điều mâu thuẫn với giả thiết $P$ hoặc một sự thật toán học hiển nhiên.

📌 **3. Luật Phủ định De Morgan đối với Lượng từ:**
- $\overline{\forall x \in X, P(x)} \equiv \exists x \in X, \overline{P(x)}$
- $\overline{\exists x \in X, P(x)} \equiv \forall x \in X, \overline{P(x)}$

---

### 3. Bổ sung Lý thuyết & Chú ý chuyên sâu (Dành cho Giáo viên & Học sinh Giỏi)
📌 **Bản chất của mệnh đề kéo theo ($P \Rightarrow Q$):**
- Rất nhiều học sinh nhầm lẫn phủ định của $P \Rightarrow Q$ là $\overline{P} \Rightarrow \overline{Q}$. Thực chất, mệnh đề phủ định của $P \Rightarrow Q$ là $P \wedge \overline{Q}$ (Tức là $P$ đúng nhưng $Q$ sai).

📌 **Kỹ thuật xử lý lượng từ:**
- Khi phủ định mệnh đề chứa $\forall$ hoặc $\exists$, học sinh rất hay quên đổi dấu quan hệ. Bắt buộc phải đổi đồng thời cả lượng từ lẫn dấu (ví dụ $>$ thành $\le$, $=$ thành $\neq$).
        `,
        tips: `
- 💡 **Mẹo phản đảo:** Để chứng minh "$A \Rightarrow B$" khó, hãy chứng minh "Không có $B \Rightarrow$ Không có $A$".
- 💡 **Bẫy lượng từ:** Khi phủ định mệnh đề chứa $\forall$ hoặc $\exists$, bắt buộc phải đổi đồng thời cả **lượng từ** lẫn **dấu quan hệ** ($>$ thành $\le$, $=$ thành $\neq$).
        `,
        practice: `
### Bài toán Mẫu VDC (Chứng minh phản chứng): 
Chứng minh rằng $\sqrt{2}$ là một số vô tỉ.

* **Phân tích tư duy:**
  1. Giả sử ngược lại $\sqrt{2}$ là số hữu tỉ $\Rightarrow \sqrt{2}$ viết được dưới dạng phân số tối giản $\frac{a}{b}$.
  2. Biến đổi để chứng minh cả $a$ và $b$ cùng chia hết cho 2, mâu thuẫn với giả thiết "tối giản".

* **Lời giải chi tiết:**
  - **Bước 1:** Giả sử $\sqrt{2}$ là số hữu tỉ. Khi đó $\sqrt{2} = \frac{a}{b}$ với $a, b \in \mathbb{N}^*, \gcd(a, b) = 1$.
  - **Bước 2:** Bình phương 2 vế: $2 = \frac{a^2}{b^2} \Rightarrow a^2 = 2b^2$.
    - Vì $a^2 = 2b^2 \Rightarrow a^2 \vdots 2 \Rightarrow a \vdots 2$ (do 2 là số nguyên tố).
    - Đặt $a = 2k (k \in \mathbb{N}^*)$. Thay vào ta có: $(2k)^2 = 2b^2 \Leftrightarrow 4k^2 = 2b^2 \Leftrightarrow b^2 = 2k^2$.
    - Suy ra $b^2 \vdots 2 \Rightarrow b \vdots 2$.
  - **Bước 3:** Ta thấy cả $a$ và $b$ đều chia hết cho 2, suy ra $\gcd(a, b) \ge 2$ (mâu thuẫn với $\gcd(a, b) = 1$).
  - **Kết luận:** Giả sử sai, vậy $\sqrt{2}$ là số vô tỉ (ĐPCM).
  
---

### Bài tập Vận dụng (5 bài)
1. **Cơ bản:** Trong các câu sau, câu nào là mệnh đề toán học? Xét tính đúng sai của nó.
   a) "Năm 2026 là năm nhuận."
   b) "Hãy giải phương trình này!"
2. **Cơ bản:** Lập mệnh đề phủ định của mệnh đề $P$: "$\forall x \in \mathbb{R}, x^2 - x + 1 > 0$" và xét tính đúng sai của mệnh đề phủ định.
3. **Vận dụng:** Cho mệnh đề $P$: "Tứ giác ABCD là hình vuông" và $Q$: "Tứ giác ABCD có 4 góc vuông". Phát biểu mệnh đề $P \Rightarrow Q$ dưới dạng điều kiện cần và điều kiện đủ.
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
- $A \cap B = \{x \mid x \in A \text{ và } x \in B\}$
- $A \cup B = \{x \mid x \in A \text{ hoặc } x \in B\}$
- $A \setminus B = \{x \mid x \in A \text{ và } x \notin B\}$

---

### 2. Định lý & Bổ đề Nâng cao
📌 **1. Nguyên lý Bao hàm - Loại trừ (Inclusion-Exclusion Principle):**
- Cho 3 tập hợp hữu hạn $A, B, C$:
  $$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |B \cap C| - |C \cap A| + |A \cap B \cap C|$$

📌 **2. Điều kiện tập con / Giao tập hợp chứa tham số:**
- Cho $A = (a; b)$ và $B = [c; d]$:
  - $A \subset B \Leftrightarrow \begin{cases} c \le a \\ b \le d \end{cases}$
  - $A \cap B = \emptyset \Leftrightarrow b \le c \text{ hoặc } d < a$.

---

### 3. Bổ sung Lý thuyết & Chú ý chuyên sâu (Dành cho Giáo viên & Học sinh Giỏi)
📌 **Tính chất phân phối:** 
- Khi kết hợp nhiều phép toán, cần nhớ quy tắc phân phối: $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$.
📌 **Kỹ thuật biểu diễn trục số:** 
- Khi tìm điều kiện của tham số cho giao/hợp các khoảng, đoạn, tia, nguyên tắc sống còn là luôn biểu diễn tập cố định trước, sau đó di chuyển tập chứa tham số $m$ và thử dấu "=" tại các biên để tránh sót nghiệm.
📌 **Nguyên lý đếm (Bao hàm - Loại trừ):** 
- Công thức $|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |B \cap C| - |C \cap A| + |A \cap B \cap C|$ là chìa khóa để giải quyết các bài toán đếm số lượng học sinh tham gia câu lạc bộ, môn thể thao thực tế.
        `,
        tips: `
- 💡 **Mẹo vẽ trục số tham số:** Luôn biểu diễn tập cố định trước, sau đó di chuyển tập chứa tham số $m$ và thử dấu "=" tại các biên để tránh sót nghiệm.
        `,
        practice: `
### Bài toán Mẫu Nâng cao: 
Cho $A = (m-1; m+3]$ và $B = [-2; 5)$. Tìm $m$ để $A \cap B \neq \emptyset$.

* **Lời giải chi tiết:**
  - Ta giải bài toán phủ định: Tìm $m$ để $A \cap B = \emptyset$.
  - $A \cap B = \emptyset \Leftrightarrow m + 3 \le -2 \text{ hoặc } m - 1 \ge 5 \Leftrightarrow m \le -5 \text{ hoặc } m \ge 6$.
  - Lấy phần bù, ta được $A \cap B \neq \emptyset \Leftrightarrow -5 < m < 6$.
  - Kết luận: $m \in (-5; 6)$.
  
---

### Bài tập Vận dụng (5 bài)
1. **Cơ bản:** Cho hai tập hợp $A = \{x \in \mathbb{N} \mid x \le 4\}$ và $B = \{2; 4; 6; 8\}$. Xác định các tập hợp $A \cap B$, $A \cup B$ và $A \setminus B$.
2. **Cơ bản:** Biểu diễn các tập hợp sau trên trục số và tìm kết quả của phép toán: $[-3; 5) \cap (2; 7]$.
3. **Vận dụng:** Lớp 10A có 40 học sinh. Trong đó có 25 bạn tham gia CLB Toán, 20 bạn tham gia CLB Tiếng Anh và 8 bạn không tham gia CLB nào trong hai CLB trên. Hỏi có bao nhiêu bạn tham gia cả hai CLB?
4. **Vận dụng cao:** Cho tập hợp $A = [m-1; m+2]$ và $B = [-3; 5]$. Tìm tất cả các giá trị của tham số $m$ để $A \subset B$.
5. **Nâng cao:** Cho hai tập hợp $X = (m; m+3]$ và $Y = (-\infty; -1] \cup (4; +\infty)$. Tìm tham số $m$ để $X \cap Y = \emptyset$.
        `
    }
};

// Phục vụ cho việc export nếu dùng trong môi trường Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH1;
}
