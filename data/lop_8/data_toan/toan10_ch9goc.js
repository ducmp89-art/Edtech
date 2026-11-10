/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương IX: Tính xác suất theo định nghĩa cổ điển (Giải chi tiết 100%)
   ========================================================================== */

const DATA_TOAN10_CH9 = {
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

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH9;
}
