/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương I: Mệnh đề và tập hợp
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
   ========================================================================== */

const DATA_TOAN10_CH1 = {
    "MATH10-CH1-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương I: Mệnh đề và tập hợp",
        title: "Bài 1: Mệnh đề toán học & Phép suy luận logic",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương I", "Bài 1"],
        theory: `
### 1. Mệnh đề và Mệnh đề chứa biến
- **Mệnh đề toán học:** Là một câu khẳng định về một sự kiện trong toán học chỉ có thể ĐÚNG hoặc SAI, không thể vừa đúng vừa sai. 
  *(Lưu ý: Câu hỏi, câu cảm thán, câu cầu khiến không phải là mệnh đề).*
- **Mệnh đề chứa biến:** Là một câu chứa biến (ví dụ: $P(x): "x > 3"$) mà bản thân nó chưa phải là mệnh đề, nhưng khi thay một giá trị cụ thể của $x$ vào thì nó trở thành một mệnh đề (đúng hoặc sai).

### 2. Các phép toán Logic trên Mệnh đề
- **Mệnh đề phủ định ($\overline{P}$):** Nếu $P$ đúng thì $\overline{P}$ sai, và ngược lại. (Ký hiệu: phủ định của "=" là "$\neq$", của "$>$" là "$\le$").
- **Mệnh đề kéo theo ($P \Rightarrow Q$):** "Nếu $P$ thì $Q$". Mệnh đề này CHỈ SAI khi $P$ đúng và $Q$ sai. Các trường hợp còn lại đều ĐÚNG.
- **Mệnh đề đảo ($Q \Rightarrow P$):** Là mệnh đề đảo ngược của $P \Rightarrow Q$. (Lưu ý: $P \Rightarrow Q$ đúng không có nghĩa là $Q \Rightarrow P$ cũng đúng).
- **Mệnh đề tương đương ($P \Leftrightarrow Q$):** "$P$ nếu và chỉ nếu $Q$". Mệnh đề này ĐÚNG khi $P$ và $Q$ cùng đúng hoặc cùng sai.

### 3. Ký hiệu $\forall$ (Với mọi) và $\exists$ (Tồn tại)
- **$\forall x \in X, P(x)$:** Đúng nếu $P(x)$ đúng với mọi giá trị $x$ thuộc tập $X$.
- **$\exists x \in X, P(x)$:** Đúng nếu có ít nhất một giá trị $x$ thuộc tập $X$ làm cho $P(x)$ đúng.
- **Phủ định của mệnh đề lượng từ:**
  + Phủ định của "$\forall x \in X, P(x)$" là "$\exists x \in X, \overline{P(x)}$".
  + Phủ định của "$\exists x \in X, P(x)$" là "$\forall x \in X, \overline{P(x)}$".

---

### 4. 💎 Chuyên đề Master: Chứng minh phản chứng và Logic hệ quả (VDC)
📌 **Phương pháp Chứng minh Phản chứng:**
Để chứng minh mệnh đề $P \Rightarrow Q$ là đúng, ta làm theo các bước:
- **Bước 1:** Giả sử kết luận $Q$ là sai (tức là $\overline{Q}$ đúng).
- **Bước 2:** Từ giả thiết $P$ và $\overline{Q}$, dùng lập luận logic suy ra một điều mâu thuẫn (mâu thuẫn với giả thiết $P$, hoặc mâu thuẫn với một sự thật toán học hiển nhiên).
- **Bước 3:** Kết luận điều giả sử ban đầu là sai, vậy $Q$ phải đúng.

📌 **Điều kiện cần và Điều kiện đủ:**
Trong mệnh đề kéo theo $P \Rightarrow Q$ (giả sử là mệnh đề đúng):
- $P$ là **điều kiện đủ** để có $Q$. (Chỉ cần có $P$ là đủ để suy ra $Q$).
- $Q$ là **điều kiện cần** để có $P$. (Để có $P$ thì bắt buộc phải có $Q$ trước).
        `,
        tips: `
- ⚠️ **Sai lầm kinh điển về Kéo theo:** Mệnh đề "$P \Rightarrow Q$" vẫn ĐÚNG ngay cả khi mệnh đề $P$ (giả thiết) là một điều SAI. Ví dụ: "Nếu con gà có 4 chân thì $1+1=3$" là một mệnh đề ĐÚNG về mặt logic toán học!
- 💡 **Mẹo xét tính đúng sai của $\exists$:** Để chứng minh "$\exists x, P(x)$" ĐÚNG, bạn chỉ cần chỉ ra cụ thể một con số $x$ làm cho $P(x)$ đúng là xong. Không cần giải phương trình phức tạp.
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Câu nào sau đây là mệnh đề toán học?
A. Trời hôm nay đẹp quá!
B. Hôm nay là thứ mấy?
C. Hà Nội là thủ đô của Việt Nam.
D. Số 15 là số nguyên tố.
* **Lời giải:**
  - A là câu cảm thán. B là câu hỏi. C là khẳng định nhưng không thuộc lĩnh vực toán học.
  - D là một khẳng định toán học (và nó mang giá trị SAI).
  - Chọn D.

**Bài 2 (Cơ bản):** Viết mệnh đề phủ định của mệnh đề $P$: "Số 2 là số chẵn" và xét tính đúng sai của mệnh đề phủ định đó.
* **Lời giải:**
  - Phủ định $\overline{P}$: "Số 2 không phải là số chẵn" (hoặc "Số 2 là số lẻ").
  - Mệnh đề $P$ là mệnh đề đúng, do đó mệnh đề phủ định $\overline{P}$ là mệnh đề SAI.

**Bài 3 (Vận dụng):** Lập mệnh đề kéo theo $P \Rightarrow Q$ và mệnh đề đảo $Q \Rightarrow P$ từ hai mệnh đề sau. Xét tính đúng sai của chúng.
$P$: "Tam giác ABC là tam giác đều".
$Q$: "Tam giác ABC có 3 góc bằng nhau".
* **Lời giải:**
  - $P \Rightarrow Q$: "Nếu tam giác ABC là tam giác đều thì nó có 3 góc bằng nhau". Đây là mệnh đề ĐÚNG.
  - $Q \Rightarrow P$: "Nếu tam giác ABC có 3 góc bằng nhau thì nó là tam giác đều". Đây cũng là mệnh đề ĐÚNG.
  - Vì cả hai đều đúng nên ta có thể viết $P \Leftrightarrow Q$ (Tam giác ABC đều khi và chỉ khi có 3 góc bằng nhau).

**Bài 4 (Vận dụng):** Phát biểu mệnh đề phủ định của mệnh đề $A: "\forall x \in \mathbb{R}, x^2 + 1 > 0"$. Mệnh đề phủ định đúng hay sai?
* **Lời giải:**
  - Đổi $\forall$ thành $\exists$, đổi dấu "$>$" thành "$\le$".
  - $\overline{A}: "\exists x \in \mathbb{R}, x^2 + 1 \le 0"$.
  - Vì với mọi $x \in \mathbb{R}$ ta luôn có $x^2 \ge 0 \Rightarrow x^2 + 1 \ge 1 > 0$. Nên không có số thực $x$ nào thỏa mãn $x^2 + 1 \le 0$.
  - Mệnh đề phủ định $\overline{A}$ là SAI (do mệnh đề $A$ là đúng).

**Bài 5 (Vận dụng):** Điền "điều kiện cần" hoặc "điều kiện đủ" vào chỗ trống để được mệnh đề đúng: "Tứ giác ABCD có hai đường chéo cắt nhau tại trung điểm mỗi đường là ........ để tứ giác đó là hình bình hành".
* **Lời giải:**
  - Ta có mệnh đề đúng: "Nếu tứ giác có 2 đường chéo cắt nhau tại trung điểm (P) thì nó là hình bình hành (Q)".
  - Theo lý thuyết, (P) là điều kiện ĐỦ để có (Q).
  - Điền từ: **điều kiện đủ**. (Thực ra nó cũng là điều kiện cần và đủ).

**Bài 6 (Vận dụng cao):** Cho mệnh đề chứa biến $P(n): "n^2 + n + 1 \text{ là số nguyên tố}"$ với $n \in \mathbb{N}$. Tìm một giá trị của $n$ để $P(n)$ là mệnh đề sai.
* **Lời giải:**
  - Thử $n=1: 1^2+1+1 = 3$ (Số NT $\Rightarrow$ Đúng).
  - Thử $n=2: 2^2+2+1 = 7$ (Số NT $\Rightarrow$ Đúng).
  - Thử $n=3: 3^2+3+1 = 13$ (Số NT $\Rightarrow$ Đúng).
  - Thử $n=4: 4^2+4+1 = 21 = 3 \times 7$ (Hợp số $\Rightarrow$ Sai).
  - Vậy với $n=4$, $P(4)$ là mệnh đề sai.

**Bài 7 (Vận dụng cao):** Chứng minh bằng phương pháp phản chứng: "Nếu $a^2$ là một số chẵn thì $a$ cũng là một số chẵn" (với $a$ là số nguyên).
* **Lời giải:**
  - Giả sử kết luận sai, tức là giả sử "$a$ không là số chẵn" $\Rightarrow a$ là số lẻ.
  - Nếu $a$ lẻ, ta có thể viết $a = 2k + 1$ ($k \in \mathbb{Z}$).
  - Bình phương hai vế: $a^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$.
  - Rõ ràng $2(2k^2 + 2k)$ là số chẵn, cộng thêm 1 sẽ là số lẻ.
  - Vậy $a^2$ là số lẻ. Điều này MÂU THUẪN với giả thiết ban đầu "$a^2$ là số chẵn".
  - Mâu thuẫn chứng tỏ điều giả sử là sai. Vậy $a$ bắt buộc phải là số chẵn (ĐPCM).

**Bài 8 (Vận dụng cao):** Xét tính đúng sai của mệnh đề sau và giải thích: $"\exists x \in \mathbb{Q}, x^2 = 2"$.
* **Lời giải:**
  - Giải phương trình $x^2 = 2 \Rightarrow x = \sqrt{2}$ hoặc $x = -\sqrt{2}$.
  - Cả $\sqrt{2}$ và $-\sqrt{2}$ đều là **số vô tỉ** (không thuộc tập số hữu tỉ $\mathbb{Q}$).
  - Không có bất kỳ số hữu tỉ nào thỏa mãn phương trình.
  - Vậy mệnh đề trên là mệnh đề SAI.

**Bài 9 (Vận dụng cao):** Cho ba mệnh đề $P, Q, R$. Biết rằng $(P \Rightarrow Q)$ là đúng, và $(Q \Rightarrow R)$ là sai. Hãy xác định tính đúng sai của mệnh đề $P$ và mệnh đề $R$.
* **Lời giải:**
  - $(Q \Rightarrow R)$ là SAI. Theo lý thuyết, mệnh đề kéo theo chỉ sai trong duy nhất 1 trường hợp: Giả thiết Đúng và Kết luận Sai.
    $\Rightarrow Q$ ĐÚNG và $R$ SAI.
  - Tiếp tục, ta biết $(P \Rightarrow Q)$ là ĐÚNG. 
    Mà ta vừa tìm được $Q$ ĐÚNG. Mệnh đề $P \Rightarrow Q$ luôn đúng khi kết luận $Q$ đúng, bất chấp $P$ đúng hay sai.
  - Vậy mệnh đề $R$ là SAI, còn mệnh đề $P$ KHÔNG XÁC ĐỊNH được (có thể đúng hoặc sai).

**Bài 10 (Nâng cao):** Cho mệnh đề $P: "\forall x \in \mathbb{R}, x^2 - 2mx + 4 > 0"$. Tìm tất cả các giá trị của tham số thực $m$ để mệnh đề $P$ là một mệnh đề ĐÚNG.
* **Lời giải:**
  - Mệnh đề $P$ đúng nghĩa là bất phương trình $x^2 - 2mx + 4 > 0$ nghiệm đúng với mọi $x \in \mathbb{R}$.
  - Tam thức bậc hai có $a = 1 > 0$. Để tam thức luôn dương, điều kiện là: $\Delta' < 0$.
  - Tính $\Delta' = (-m)^2 - 1(4) = m^2 - 4$.
  - Giải $\Delta' < 0 \Leftrightarrow m^2 - 4 < 0 \Leftrightarrow -2 < m < 2$.
  - Kết luận: Để mệnh đề đúng thì $m \in (-2; 2)$.
        `
    },

    "MATH10-CH1-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương I: Mệnh đề và tập hợp",
        title: "Bài 2: Tập hợp & Các phép toán trên tập hợp",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương I", "Bài 2"],
        theory: `
### 1. Khái niệm và các Tập hợp số cơ bản
- **Tập hợp:** Là khái niệm cơ bản không định nghĩa, thường biểu diễn bằng biểu đồ Ven hoặc liệt kê.
- Tập hợp rỗng ($\emptyset$): Là tập hợp không chứa phần tử nào. $\emptyset$ là tập con của mọi tập hợp.
- **Tập hợp con ($A \subset B$):** Mọi phần tử của $A$ đều là phần tử của $B$.
- **Hai tập hợp bằng nhau ($A = B$):** Khi $A \subset B$ và $B \subset A$.
- **Các tập số cơ bản:** $\mathbb{N}^* \subset \mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$. (Tự nhiên khác 0 $\rightarrow$ Tự nhiên $\rightarrow$ Nguyên $\rightarrow$ Hữu tỉ $\rightarrow$ Thực).

### 2. Các phép toán trên Tập hợp
- **Giao của hai tập hợp ($A \cap B$):** Gồm các phần tử thuộc CẢ A VÀ B. $x \in A \cap B \Leftrightarrow \begin{cases} x \in A \\ x \in B \end{cases}$.
- **Hợp của hai tập hợp ($A \cup B$):** Gồm các phần tử thuộc A HOẶC thuộc B (gộp cả 2 lại). $x \in A \cup B \Leftrightarrow \left[ \begin{array}{l} x \in A \\ x \in B \end{array} \right.$.
- **Hiệu của hai tập hợp ($A \setminus B$):** Gồm các phần tử THUỘC A nhưng KHÔNG THUỘC B.
- **Phần bù ($C_X A$):** Nếu $A \subset X$, phần bù của A trong X là $X \setminus A$. (Ví dụ: $C_{\mathbb{R}} A = \mathbb{R} \setminus A$).

### 3. Biểu diễn Tập hợp trên Trục số (Khoảng, Đoạn, Nửa khoảng)
- Đoạn $[a; b]$: Lấy 2 mút (dấu $\le, \ge$). Vẽ ngoặc vuông.
- Khoảng $(a; b)$: Không lấy mút (dấu $<, >$). Vẽ ngoặc tròn.
- Nửa khoảng $[a; b)$ hoặc $(a; b]$: Một bên lấy mút, một bên không.
- Chú ý: Các vô cực $-\infty, +\infty$ luôn luôn dùng ngoặc tròn "$($", "$)$".

---

### 4. 💎 Chuyên đề Master: Biện luận giao/hợp chứa tham số $m$ (VDC)
📌 **Kỹ thuật xét tính không rỗng (Điều kiện tồn tại khoảng/đoạn):**
- Cho tập $A = [a; b]$. Để tập $A$ TỒN TẠI (tức là $A \neq \emptyset$), điều kiện bắt buộc là $a \le b$.
- Cho tập $B = (a; b)$. Để tập $B \neq \emptyset$, điều kiện là $a < b$.

📌 **Phương pháp giải bài toán $A \cap B = \emptyset$ (hoặc $A \subset B$):**
- **Bước 1:** Vẽ trục số và cố định tập hợp không chứa tham số $m$.
- **Bước 2:** Vẽ tập hợp chứa tham số $m$ ở dạng "lơ lửng". Đẩy nó sang trái hoặc sang phải để thỏa mãn điều kiện đề bài.
- **Bước 3:** Lập bất phương trình cho các MÚT. 
- **Bước 4 (Cực kỳ quan trọng - Xét dấu BẰNG):** Cho hai mút chạm nhau, xem kết quả giao nhau có rỗng không, hoặc có thỏa mãn tập con không. Từ đó quyết định có lấy dấu "=" hay không lấy.

📌 **Công thức Hợp của số phần tử (Nguyên lý Thêm Bớt):**
- $|A \cup B| = |A| + |B| - |A \cap B|$. (Ký hiệu $|X|$ là số phần tử của tập X).
- Áp dụng giải các bài toán thực tế đếm số học sinh thích môn Toán, Văn.
        `,
        tips: `
- ⚠️ **Kỹ thuật Bù trừ trong bài toán tham số:** Bài toán yêu cầu tìm $m$ để $A \cap B \neq \emptyset$ (Có phần tử chung). Cách giải trực tiếp thường phải chia rất nhiều trường hợp. Hãy giải bài toán đối nghịch: Tìm $m$ để $A \cap B = \emptyset$, sau đó lấy phần bù (phủ định) của kết quả vừa tìm được!
- 💡 **Quy tắc ngoặc trên trục số:** 
  - Đang là ngoặc vuông $[$, khi tìm phần bù (lấy phép trừ $\mathbb{R} \setminus$) sẽ lật ngược lại thành ngoặc tròn $)$.
  - Ví dụ: Phần bù của $[2; 5)$ trong $\mathbb{R}$ là $(-\infty; 2) \cup [5; +\infty)$.
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Viết tập hợp sau dưới dạng liệt kê phần tử: $A = \{x \in \mathbb{N} \mid x^2 - 5x + 6 = 0\}$.
* **Lời giải:**
  - Giải phương trình: $x^2 - 5x + 6 = 0 \Rightarrow x = 2$ hoặc $x = 3$.
  - Cả 2 và 3 đều thuộc $\mathbb{N}$ (tập số tự nhiên).
  - Vậy $A = \{2; 3\}$.

**Bài 2 (Cơ bản):** Tìm số phần tử của các tập hợp con của tập $B = \{a, b, c\}$.
* **Lời giải:**
  - Số tập con của một tập hợp có $n$ phần tử được tính bằng công thức $2^n$.
  - Tập $B$ có 3 phần tử.
  - Số tập con là: $2^3 = 8$ (Bao gồm: $\emptyset, \{a\}, \{b\}, \{c\}, \{a,b\}, \{a,c\}, \{b,c\}, \{a,b,c\}$).

**Bài 3 (Vận dụng):** Cho hai tập hợp $A = [-2; 5]$ và $B = (1; 7)$. Tìm $A \cap B$, $A \cup B$, và $A \setminus B$.
* **Lời giải:**
  - Biểu diễn trên trục số.
  - $A \cap B$ (Giao - Lấy phần chung): Từ $1$ đến $5$. $1$ thuộc ngoặc tròn của $B$, $5$ thuộc ngoặc vuông của $A$. $\Rightarrow A \cap B = (1; 5]$.
  - $A \cup B$ (Hợp - Lấy tất cả từ mút nhỏ nhất đến lớn nhất): Từ $-2$ đến $7$. $\Rightarrow A \cup B = [-2; 7)$.
  - $A \setminus B$ (Hiệu - Thuộc A nhưng bỏ đi phần dính với B): Phần của A từ $-2$ đến $1$. Vì số $1$ KHÔNG thuộc B (ngoặc tròn), nên khi bỏ B đi, số $1$ VẪN CÒN lại trong A. $\Rightarrow A \setminus B = [-2; 1]$.

**Bài 4 (Vận dụng):** Tìm tập xác định của hàm số chứa căn $f(x) = \sqrt{x-3} + \sqrt{6-x}$. Viết kết quả dưới dạng tập hợp.
* **Lời giải:**
  - Điều kiện để căn bậc hai có nghĩa: $\begin{cases} x - 3 \ge 0 \\ 6 - x \ge 0 \end{cases} \Leftrightarrow \begin{cases} x \ge 3 \\ x \le 6 \end{cases}$.
  - Xét giao của 2 tập hợp: $[3; +\infty) \cap (-\infty; 6]$.
  - Kết quả: Tập xác định $D = [3; 6]$.

**Bài 5 (Vận dụng):** Lớp 10A có 45 học sinh. Trong đó có 25 bạn thích môn Toán, 20 bạn thích môn Văn, và 10 bạn thích cả hai môn Toán và Văn. Hỏi có bao nhiêu bạn KHÔNG thích môn nào trong hai môn trên?
* **Lời giải:**
  - Gọi $A$ là tập HS thích Toán ($|A|=25$), $B$ là tập HS thích Văn ($|B|=20$). 
  - Giao $A \cap B$ là số bạn thích cả 2 môn ($|A \cap B|=10$).
  - Số bạn thích ít nhất 1 trong 2 môn (Hợp $A \cup B$):
    $|A \cup B| = |A| + |B| - |A \cap B| = 25 + 20 - 10 = 35$ (học sinh).
  - Số bạn không thích môn nào = Tổng số HS - Số bạn thích ít nhất 1 môn.
  - Đáp số: $45 - 35 = 10$ (học sinh).

**Bài 6 (Vận dụng cao):** Cho tập hợp $A = [m; m+2]$ và $B = [-1; 3]$. Tìm tham số $m$ để $A \subset B$.
* **Lời giải:**
  - Điều kiện để tập $A$ không rỗng: $m \le m+2 \Leftrightarrow 0 \le 2$ (Luôn đúng, $A$ luôn là một đoạn).
  - Để $A \subset B$, toàn bộ đoạn $A$ phải lọt thỏm vào bên trong đoạn $B$.
  - Tức là: $\begin{cases} -1 \le m \\ m+2 \le 3 \end{cases} \Leftrightarrow \begin{cases} m \ge -1 \\ m \le 1 \end{cases}$.
  - Giao 2 điều kiện: $-1 \le m \le 1$.
  - *(Kiểm tra mút: Nếu $m=-1 \Rightarrow A=[-1; 1] \subset [-1; 3]$ (Đúng). Nếu $m=1 \Rightarrow A=[1; 3] \subset [-1; 3]$ (Đúng)).*

**Bài 7 (Vận dụng cao):** Cho hai tập hợp $A = (-\infty; 2)$ và $B = [m-1; +\infty)$. Tìm $m$ để $A \cap B \neq \emptyset$ (hai tập hợp giao nhau khác rỗng).
* **Lời giải:**
  - Thay vì giải trực tiếp, ta làm cách dễ hơn.
  - Đặt điều kiện để $A \cap B = \emptyset$: Tập $B$ phải nằm trọn về phía bên phải của tập $A$.
  - Tức là mút bên trái của B ($m-1$) phải lớn hơn hoặc bằng mút bên phải của A ($2$).
  - Để giao bằng rỗng: $m-1 \ge 2 \Leftrightarrow m \ge 3$. 
    *(Lý do có dấu bằng: Nếu $m-1=2$, $B=[2; +\infty)$ và $A=(-\infty; 2)$. Giao của chúng bằng $\emptyset$ vì số 2 không thuộc A. Đúng yêu cầu giao bằng rỗng).*
  - Vậy để $A \cap B \neq \emptyset$, ta lấy PHẦN BÙ của kết quả trên:
  - Phủ định của $m \ge 3$ là $m < 3$.
  - Kết luận: $m < 3$.

**Bài 8 (Vận dụng cao):** Cho tập $A = [m; m+1]$ và $B = (1; 4)$. Có bao nhiêu giá trị nguyên của $m$ để $A \cap B = \emptyset$?
* **Lời giải:**
  - Để $A \cap B = \emptyset$, khoảng $A$ phải nằm hoàn toàn bên TRÁI hoặc hoàn toàn bên PHẢI của $B$.
  - **TH1: $A$ nằm bên trái $B$.** 
    Mút phải của A phải $\le$ Mút trái của B.
    $\Rightarrow m+1 \le 1 \Leftrightarrow m \le 0$. 
    *(Thử mút: $m=0 \Rightarrow A=[0; 1], B=(1; 4) \Rightarrow A \cap B = \emptyset \Rightarrow$ Lấy dấu =).*
  - **TH2: $A$ nằm bên phải $B$.**
    Mút trái của A phải $\ge$ Mút phải của B.
    $\Rightarrow m \ge 4$.
    *(Thử mút: $m=4 \Rightarrow A=[4; 5], B=(1; 4) \Rightarrow A \cap B = \emptyset \Rightarrow$ Lấy dấu =).*
  - Gộp lại: $m \le 0$ hoặc $m \ge 4$.
  - Vì $m$ nguyên nên tập $m \in \{..., -2, -1, 0, 4, 5, 6, ...\}$. (Có vô số giá trị).

**Bài 9 (Vận dụng cao):** Lớp 10A có 40 học sinh. Khảo sát 3 câu lạc bộ Toán, Lý, Hóa. Biết có 15 bạn tham gia Toán, 18 bạn tham gia Lý, 20 bạn tham gia Hóa. Có 8 bạn tham gia cả Toán và Lý, 7 bạn tham gia cả Lý và Hóa, 9 bạn tham gia cả Toán và Hóa. Có 5 bạn không tham gia CLB nào. Hỏi có bao nhiêu bạn tham gia CẢ 3 CLB?
* **Lời giải:**
  - Số bạn tham gia ít nhất 1 CLB: $40 - 5 = 35$.
  - Đặt $x$ là số bạn tham gia cả 3 CLB ($|A \cap B \cap C| = x$).
  - Công thức hợp của 3 tập hợp:
    $|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |B \cap C| - |C \cap A| + |A \cap B \cap C|$.
  - Thay số vào công thức:
    $35 = 15 + 18 + 20 - 8 - 7 - 9 + x$.
  - $\Leftrightarrow 35 = 53 - 24 + x \Leftrightarrow 35 = 29 + x \Rightarrow x = 6$.
  - Vậy có 6 bạn tham gia cả 3 câu lạc bộ.

**Bài 10 (Nâng cao):** Cho hai tập hợp $A = [m-1; \frac{m+3}{2}]$ và $B = (-\infty; -3) \cup [3; +\infty)$. Tìm tất cả các giá trị của $m$ để $A \cap B \neq \emptyset$.
* **Lời giải:**
  - **Bước 1: Điều kiện để A tồn tại (không rỗng)**
    $m-1 \le \frac{m+3}{2} \Leftrightarrow 2m - 2 \le m + 3 \Leftrightarrow m \le 5$.
  - **Bước 2: Dùng biến cố đối.** Tìm $m$ để $A \cap B = \emptyset$.
  - Để giao bằng rỗng, tập $A$ phải lọt hoàn toàn vào cái "khe hở" của tập B.
  - Khe hở của B là phần bù của B: $\mathbb{R} \setminus B = [-3; 3)$. (Vì B không lấy -3 nên phần hở lấy -3; B lấy 3 nên phần hở không lấy 3).
  - Yêu cầu bài toán chuyển thành: Tập $A \subset [-3; 3)$.
  - Tức là: $\begin{cases} -3 \le m - 1 \\ \frac{m+3}{2} < 3 \end{cases} \Leftrightarrow \begin{cases} m \ge -2 \\ m+3 < 6 \end{cases} \Leftrightarrow \begin{cases} m \ge -2 \\ m < 3 \end{cases}$.
  - Giao lại: $-2 \le m < 3$. (Đây là đk để giao BẰNG rỗng).
  - **Bước 3: Lấy phần bù.**
  - Phủ định của "$-2 \le m < 3$" là "$m < -2$ hoặc $m \ge 3$".
  - Kết hợp với điều kiện sống còn của A ở Bước 1 ($m \le 5$).
  - Giao lại ta được đáp án cuối cùng: $m < -2$ hoặc $3 \le m \le 5$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH1;
}
