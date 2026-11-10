/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương VIII: Đại số tổ hợp
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
   ========================================================================== */

const DATA_TOAN10_CH8 = {
    "MATH10-CH8-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương VIII: Đại số tổ hợp",
        title: "Bài 1: Quy tắc đếm, Hoán vị, Chỉnh hợp & Tổ hợp",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương VIII", "Bài 1"],
        theory: String.raw`
### 1. Quy tắc cộng và Quy tắc nhân
- **Quy tắc cộng:** Một công việc được hoàn thành bởi một trong $k$ phương án độc lập (TH1 có $m_1$ cách, TH2 có $m_2$ cách...). Số cách là $m_1 + m_2 + ... + m_k$.
- **Quy tắc nhân:** Một công việc phải trải qua $k$ công đoạn liên tiếp (Bước 1 có $n_1$ cách, Bước 2 có $n_2$ cách...). Số cách là $n_1 \times n_2 \times ... \times n_k$.

### 2. Hoán vị, Chỉnh hợp và Tổ hợp
- **Hoán vị ($P_n$):** Sắp xếp $n$ phần tử khác nhau thành một hàng ngang. 
  $P_n = n! = 1 \times 2 \times 3 \times ... \times n$.
- **Chỉnh hợp ($A_n^k$):** Lấy $k$ phần tử từ $n$ phần tử và CÓ sắp xếp thứ tự.
  $A_n^k = \frac{n!}{(n-k)!}$
- **Tổ hợp ($C_n^k$):** Lấy $k$ phần tử từ $n$ phần tử và KHÔNG sắp xếp thứ tự (lập nhóm, tập hợp).
  $C_n^k = \frac{n!}{k!(n-k)!}$
- **Tính chất Tổ hợp:** $C_n^k = C_n^{n-k}$ và $C_{n-1}^{k-1} + C_{n-1}^k = C_n^k$.

---

### 3. 💎 Chuyên đề Master: Kỹ thuật đếm nâng cao (VDC)
📌 **Phương pháp Phần bù:**
- Khi bài toán yêu cầu "Có ít nhất...", ta lấy Không gian mẫu (Tổng số cách bốc bất kỳ) trừ đi Biến cố đối (Không có cái nào thỏa mãn).

📌 **Phương pháp Buộc / Ghép nhóm (Block Method):**
- Khi yêu cầu các đối tượng "đứng cạnh nhau", ta "buộc" chúng thành 1 khối. Hoán vị bên trong khối, rồi hoán vị khối với các đối tượng khác.

📌 **Phương pháp Chèn khe (Slotting Method):**
- Khi yêu cầu các đối tượng "không đứng cạnh nhau", ta xếp các đối tượng KHÔNG BỊ GIỚI HẠN trước để tạo ra các "khe trống". Sau đó, bốc các đối tượng bị giới hạn đặt vào các khe trống (dùng Chỉnh hợp).

📌 **Phương pháp Vách ngăn (Bổ đề chia kẹo Euler):**
- Bài toán: Chia $n$ viên kẹo giống nhau cho $k$ đứa trẻ sao cho mỗi đứa có ít nhất 1 viên.
- Công thức: $C_{n-1}^{k-1}$ cách. (Nếu có thể có đứa không có kẹo: $C_{n+k-1}^{k-1}$).
        `,
        tips: String.raw`
- ⚠️ **Sai lầm kinh điển 1:** Không phân biệt được Chỉnh hợp và Tổ hợp. Hãy tự hỏi: "Nếu đổi chỗ 2 phần tử vừa bốc ra, kết quả có bị coi là MỚI không?". Nếu CÓ $\Rightarrow$ Dùng $A$. Nếu KHÔNG $\Rightarrow$ Dùng $C$.
- ⚠️ **Sai lầm kinh điển 2 (Lập số tự nhiên):** Lập số $\overline{a_1 a_2 ... a_n}$ thì phải luôn nhớ điều kiện sống còn: **$a_1 \neq 0$**. Rất nhiều bạn quên điều kiện này dẫn đến đếm dư.
- 💡 **Mẹo tính nhanh Dấu hiệu chia hết:** Tổng chia hết cho 3 $\rightarrow$ Chia các chữ số thành 3 tập dư: Dư 0, Dư 1, Dư 2. 
        `,
        practice: String.raw`
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Từ các chữ số $1, 2, 3, 4, 5, 6$, lập được bao nhiêu số tự nhiên lẻ gồm 3 chữ số đôi một khác nhau?
* **Lời giải:**
  - Gọi số cần lập là $\overline{abc}$. Số lẻ $\Rightarrow c \in \{1, 3, 5\}$ (3 cách).
  - Chọn $a \neq c$ từ 5 số còn lại: có 5 cách.
  - Chọn $b \neq a, c$ từ 4 số còn lại: có 4 cách.
  - Tổng số cách: $3 \times 5 \times 4 = 60$ số.

**Bài 2 (Cơ bản):** Một tổ có 8 nam và 6 nữ. Cần chọn một nhóm 5 người trực nhật sao cho có đúng 2 nữ. Hỏi có bao nhiêu cách?
* **Lời giải:**
  - Nhóm có đúng 2 nữ $\Rightarrow$ phải có $5 - 2 = 3$ nam.
  - Chọn 2 nữ từ 6 nữ (không thứ tự): $C_6^2 = 15$ cách.
  - Chọn 3 nam từ 8 nam (không thứ tự): $C_8^3 = 56$ cách.
  - Tổng số cách (Quy tắc nhân): $15 \times 56 = 840$ cách.

**Bài 3 (Vận dụng):** Lập số tự nhiên có 4 chữ số phân biệt từ $\{0, 1, 2, 3, 4, 5\}$. Hỏi có bao nhiêu số?
* **Lời giải:**
  - Dạng $\overline{abcd}$. 
  - $a \neq 0 \Rightarrow a$ có 5 cách chọn.
  - Ba chữ số $b, c, d$ chọn từ 5 chữ số còn lại và có sắp xếp: $A_5^3 = 60$ cách.
  - Tổng: $5 \times 60 = 300$ số.

**Bài 4 (Vận dụng):** Có bao nhiêu cách xếp 4 học sinh Toán và 3 học sinh Văn thành một hàng ngang sao cho 3 học sinh Văn luôn đứng cạnh nhau?
* **Lời giải:**
  - Buộc 3 học sinh Văn thành 1 khối (Khối V). Trong khối có $3! = 6$ cách đổi chỗ.
  - Bài toán trở thành xếp 5 "đối tượng" (4 HS Toán + 1 Khối V) $\Rightarrow$ có $5! = 120$ cách.
  - Tổng số cách: $6 \times 120 = 720$ cách.

**Bài 5 (Vận dụng cao):** Một hộp chứa 5 bi đỏ, 4 bi xanh, 3 bi vàng. Bốc ngẫu nhiên 4 viên bi. Hỏi có bao nhiêu cách bốc để có ÍT NHẤT 1 viên bi đỏ?
* **Lời giải:**
  - Tổng số bi: $5+4+3=12$. Số cách bốc 4 bi tùy ý: $C_{12}^4 = 495$.
  - Biến cố đối: "Bốc 4 bi KHÔNG có bi đỏ nào" (toàn xanh và vàng, gồm 7 viên).
  - Số cách bốc không đỏ: $C_7^4 = 35$.
  - Số cách có ít nhất 1 đỏ: $495 - 35 = 460$ cách.

**Bài 6 (Vận dụng cao):** Giải phương trình: $A_n^2 + C_n^3 = 14n$ (với $n \in \mathbb{N}, n \ge 3$).
* **Lời giải:**
  - PT $\Leftrightarrow n(n-1) + \frac{n(n-1)(n-2)}{6} = 14n$.
  - Vì $n \ge 3$ nên chia 2 vế cho $n$: $(n-1) + \frac{(n-1)(n-2)}{6} = 14$.
  - $\Leftrightarrow 6(n-1) + n^2 - 3n + 2 = 84 \Leftrightarrow n^2 + 3n - 88 = 0$.
  - Nghiệm $n=8$ (nhận) hoặc $n=-11$ (loại). Kết luận $n=8$.

**Bài 7 (Vận dụng cao):** Có 5 quyển sách Toán và 4 quyển sách Văn. Xếp chúng lên một kệ dài. Hỏi có bao nhiêu cách xếp sao cho KHÔNG có 2 quyển Văn nào nằm cạnh nhau?
* **Lời giải:**
  - Dùng phương pháp Chèn khe:
  - Xếp 5 quyển Toán trước $\Rightarrow 5! = 120$ cách.
  - 5 quyển Toán tạo ra 6 khe trống (4 khe giữa và 2 khe ngoài cùng).
  - Đặt 4 quyển Văn vào 6 khe này (có sắp xếp) $\Rightarrow A_6^4 = 360$ cách.
  - Tổng số cách: $120 \times 360 = 43200$ cách.

**Bài 8 (Vận dụng cao):** Có 10 viên kẹo giống hệt nhau cần chia cho 3 đứa trẻ sao cho mỗi đứa có ít nhất 1 viên kẹo. Hỏi có bao nhiêu cách chia?
* **Lời giải:**
  - Dùng phương pháp vách ngăn (Bổ đề Euler).
  - 10 viên kẹo xếp thành hàng ngang, tạo ra $10 - 1 = 9$ khoảng trống ở giữa.
  - Để chia làm 3 phần (mỗi phần $\ge 1$), ta đặt 2 vách ngăn vào 9 khoảng trống đó.
  - Số cách chọn chỗ đặt 2 vách ngăn là: $C_9^2 = 36$ cách.

**Bài 9 (Vận dụng cao):** Lập được bao nhiêu số tự nhiên có 3 chữ số khác nhau từ $\{1, 2, 3, 4, 5, 6\}$ sao cho tổng 3 chữ số chia hết cho 3?
* **Lời giải:**
  - Chia 3 tập dư: $D_0=\{3,6\}$, $D_1=\{1,4\}$, $D_2=\{2,5\}$.
  - Tổng chia hết cho 3 khi:
    + TH1: 3 số thuộc cùng 1 tập (Loại vì mỗi tập chỉ có 2 số).
    + TH2: 1 số thuộc $D_0$, 1 số thuộc $D_1$, 1 số thuộc $D_2$.
  - Số bộ 3 chữ số thỏa mãn: $C_2^1 \times C_2^1 \times C_2^1 = 8$ bộ.
  - Với mỗi bộ 3 số, có $3! = 6$ cách hoán vị lập thành số.
  - Tổng số: $8 \times 6 = 48$ số.

**Bài 10 (Vận dụng cao):** Có bao nhiêu số tự nhiên gồm 6 chữ số phân biệt lập từ $\{1, 2, 3, 4, 5, 6\}$ sao cho các chữ số chẵn đứng cạnh nhau và các chữ số lẻ đứng cạnh nhau?
* **Lời giải:**
  - Buộc 3 số chẵn $\{2, 4, 6\}$ thành Khối C $\Rightarrow$ có $3! = 6$ cách xếp nội bộ.
  - Buộc 3 số lẻ $\{1, 3, 5\}$ thành Khối L $\Rightarrow$ có $3! = 6$ cách xếp nội bộ.
  - Xếp 2 khối C và L tạo thành số có 6 chữ số (Dạng CL hoặc LC) $\Rightarrow$ có $2! = 2$ cách.
  - Tổng số cách: $6 \times 6 \times 2 = 72$ số.
        `
    },

    "MATH10-CH8-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương VIII: Đại số tổ hợp",
        title: "Bài 2: Nhị thức Newton",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương VIII", "Bài 2"],
        theory: String.raw`
### 1. Công thức Khai triển Nhị thức Newton
- **Công thức tổng quát:**
  $(a+b)^n = C_n^0 a^n b^0 + C_n^1 a^{n-1} b^1 + C_n^2 a^{n-2} b^2 + ... + C_n^n a^0 b^n$.
- Khai triển $(a+b)^n$ có **$n+1$ số hạng**.
- Tổng số mũ của $a$ và $b$ trong mỗi số hạng luôn bằng $n$.
- Hệ số đối xứng: $C_n^k = C_n^{n-k}$.

### 2. Số hạng tổng quát
- Số hạng thứ $k+1$ trong khai triển (tính từ trái sang phải) là:
  **$T_{k+1} = C_n^k a^{n-k} b^k$** (với $0 \le k \le n$).
- **Lưu ý dấu:** Nếu đề bài là $(a-b)^n$, ta coi như $(a + (-b))^n$. Khi đó số hạng tổng quát là $T_{k+1} = C_n^k a^{n-k} (-b)^k = C_n^k a^{n-k} b^k (-1)^k$.

### 3. Tam giác Pascal
- Là sơ đồ dùng để nhẩm nhanh các hệ số $C_n^k$ với $n$ nhỏ ($n=2, 3, 4, 5$).
- Quy luật: Số ở hàng dưới bằng tổng hai số đứng ngay trên nó ở hàng trên (dựa trên công thức $C_{n-1}^{k-1} + C_{n-1}^k = C_n^k$).
- $(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$.
- $(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$.

---

### 4. 💎 Chuyên đề Master: Tính tổng hệ số & Tìm Max (VDC)
📌 **Tính tổng các hệ số của khai triển $P(x) = (ax+b)^n$:**
- Thay trực tiếp $x = 1$ vào đa thức $P(x)$ ban đầu.
- Tổng các hệ số $S = P(1) = (a \cdot 1 + b)^n = (a+b)^n$.

📌 **Tính tổng đan dấu hoặc cách bậc (Dùng Nhị thức phụ):**
- Tính tổng các hệ số có $C_n$ bậc chẵn ($C_n^0 + C_n^2 + C_n^4 + ...$): Xét 2 khai triển $(1+1)^n$ và $(1-1)^n$. Cộng vế theo vế và chia 2.
- Tính tổng các hệ số có $C_n$ bậc lẻ: Trừ vế theo vế và chia 2.

📌 **Tìm số hạng có hệ số lớn nhất:**
- Lập tỉ số $a_k / a_{k-1}$ hoặc giải hệ bất phương trình: $\begin{cases} a_k \ge a_{k-1} \\ a_k \ge a_{k+1} \end{cases}$ để tìm $k$ (với $a_k$ là hệ số của số hạng thứ $k+1$).
        `,
        tips: String.raw`
- ⚠️ **Bẫy lũy thừa:** Trong biểu thức $(2x^2)^k$, học sinh hay nhầm viết thành $2x^{2k}$. Đúng phải là $2^k \cdot x^{2k}$. Hãy tách biệt RÕ RÀNG phần hệ số và phần biến $x$.
- 💡 **Số hạng KHÔNG chứa x:** Khi thu gọn $x$ trong số hạng tổng quát, ta được dạng $x^{f(k)}$. Để tìm số hạng không chứa $x$, ta ép $f(k) = 0$ và giải tìm $k$.
        `,
        practice: String.raw`
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Khai triển biểu thức $(x - 3y)^4$.
* **Lời giải:**
  - Áp dụng hằng đẳng thức nhị thức Newton cho $n=4$:
    $(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$.
  - Thay $a = x, b = -3y$:
    $(x - 3y)^4 = x^4 + 4x^3(-3y) + 6x^2(-3y)^2 + 4x(-3y)^3 + (-3y)^4$
    $= x^4 - 12x^3y + 54x^2y^2 - 108xy^3 + 81y^4$.

**Bài 2 (Cơ bản):** Tìm hệ số của $x^3$ trong khai triển $(2x + 1)^5$.
* **Lời giải:**
  - Số hạng tổng quát: $T_{k+1} = C_5^k (2x)^{5-k} 1^k = C_5^k \cdot 2^{5-k} \cdot x^{5-k}$.
  - Yêu cầu chứa $x^3 \Rightarrow 5 - k = 3 \Leftrightarrow k = 2$.
  - Hệ số cần tìm là: $C_5^2 \cdot 2^{5-2} = 10 \cdot 2^3 = 80$.

**Bài 3 (Vận dụng):** Tìm số hạng không chứa $x$ trong khai triển $\left(x - \frac{2}{x}\right)^6$ ($x \neq 0$).
* **Lời giải:**
  - Số hạng tổng quát: $T_{k+1} = C_6^k \cdot x^{6-k} \cdot \left(-2x^{-1}\right)^k = C_6^k \cdot (-2)^k \cdot x^{6-2k}$.
  - Số hạng không chứa $x \Rightarrow 6 - 2k = 0 \Leftrightarrow k = 3$.
  - Số hạng đó là: $C_6^3 \cdot (-2)^3 = 20 \cdot (-8) = -160$.

**Bài 4 (Vận dụng):** Tính tổng các hệ số trong khai triển của $P(x) = (3x - 4)^5$.
* **Lời giải:**
  - Tổng các hệ số của một đa thức bằng giá trị của đa thức đó tại $x = 1$.
  - Tổng $S = P(1) = (3 \cdot 1 - 4)^5 = (-1)^5 = -1$.

**Bài 5 (Vận dụng cao):** Tính tổng $S = C_{15}^0 + 2C_{15}^1 + 2^2C_{15}^2 + ... + 2^{15}C_{15}^{15}$.
* **Lời giải:**
  - Nhận xét cấu trúc biểu thức là khai triển của $(1 + 2)^{15}$.
  - Vì $(1+x)^n = C_n^0 + C_n^1 x + ... + C_n^n x^n$. Thay $x=2, n=15$, ta được $S$.
  - Suy ra $S = (1 + 2)^{15} = 3^{15}$.

**Bài 6 (Vận dụng cao):** Tính tổng đan dấu $P = C_{10}^0 + C_{10}^2 + C_{10}^4 + C_{10}^6 + C_{10}^8 + C_{10}^{10}$.
* **Lời giải:**
  - Khai triển $(1+1)^{10} = C_{10}^0 + C_{10}^1 + C_{10}^2 + ... + C_{10}^{10} = 2^{10} \quad (1)$.
  - Khai triển $(1-1)^{10} = C_{10}^0 - C_{10}^1 + C_{10}^2 - ... + C_{10}^{10} = 0 \quad (2)$.
  - Cộng vế theo vế (1) và (2) để triệt tiêu các bậc lẻ:
    $2(C_{10}^0 + C_{10}^2 + C_{10}^4 + C_{10}^6 + C_{10}^8 + C_{10}^{10}) = 2^{10} + 0$.
  - $\Rightarrow P = \frac{2^{10}}{2} = 2^9 = 512$.

**Bài 7 (Vận dụng cao):** Tìm $n \in \mathbb{N}^*$ biết hệ số của $x^2$ trong khai triển $(1 + 2x)^n$ bằng 180.
* **Lời giải:**
  - SHTQ: $T_{k+1} = C_n^k 1^{n-k} (2x)^k = C_n^k \cdot 2^k \cdot x^k$.
  - Chứa $x^2 \Rightarrow k = 2$. Hệ số là $C_n^2 \cdot 2^2 = 4 \cdot \frac{n(n-1)}{2} = 2n(n-1)$.
  - Theo đề bài: $2n(n-1) = 180 \Leftrightarrow n^2 - n - 90 = 0$.
  - Giải PT được $n = 10$ (nhận) hoặc $n = -9$ (loại). Vậy $n = 10$.

**Bài 8 (Vận dụng cao):** Tìm hệ số của $x^4$ trong khai triển $P(x) = (1 + 2x + 3x^2)^4$.
* **Lời giải:**
  - Khai triển theo công thức: $[1 + (2x+3x^2)]^4$.
  - $= C_4^0 + C_4^1(2x+3x^2) + C_4^2(2x+3x^2)^2 + C_4^3(2x+3x^2)^3 + C_4^4(2x+3x^2)^4$.
  - Ta chỉ quan tâm các số hạng chứa $x^4$:
    + Từ $C_4^2(2x+3x^2)^2$: hệ số $x^4$ là $C_4^2 \cdot 3^2 = 6 \times 9 = 54$.
    + Từ $C_4^3(2x+3x^2)^3 = 4(8x^3 + 3(4x^2)(3x^2) + ...)$: hệ số $x^4$ là $4 \times 36 = 144$.
    + Từ $C_4^4(2x+3x^2)^4 = 1(16x^4 + ...)$: hệ số $x^4$ là 16.
  - Tổng hệ số của $x^4$: $54 + 144 + 16 = 214$.

**Bài 9 (Vận dụng cao):** Trong khai triển $(x + 2)^5$, tìm số hạng có hệ số lớn nhất.
* **Lời giải:**
  - Khai triển $(x+2)^5$:
    $C_5^0 x^5 + C_5^1 x^4 \cdot 2 + C_5^2 x^3 \cdot 4 + C_5^3 x^2 \cdot 8 + C_5^4 x \cdot 16 + C_5^5 \cdot 32$.
  - Hệ số tương ứng: $1, 10, 40, 80, 80, 32$.
  - Giá trị lớn nhất là 80. Có hai số hạng chứa hệ số này là $80x^2$ và $80x$.

**Bài 10 (Nâng cao):** Cho tập hợp $X = \{1, 2, ..., 15\}$. Có bao nhiêu tập con của $X$ có đúng 5 phần tử sao cho trong đó CÓ mặt số 1 nhưng KHÔNG CÓ mặt số 2?
* **Lời giải:**
  - Tập con cần lập gồm 5 phần tử. 
  - Đã có sẵn số 1 $\Rightarrow$ Cần chọn thêm 4 phần tử nữa.
  - Số 2 không được tham gia. 
  - Tập nguồn ban đầu có 15 số, trừ đi số 1 (đã chọn) và số 2 (bị cấm) $\Rightarrow$ Còn lại 13 số.
  - Chọn 4 số từ 13 số còn lại: $C_{13}^4$ cách.
  - $C_{13}^4 = \frac{13!}{4!9!} = 715$.
  - Vậy có 715 tập con thỏa mãn.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH8;
}