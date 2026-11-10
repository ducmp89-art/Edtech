/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương V: Các số đặc trưng của mẫu số liệu không ghép nhóm
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
   ========================================================================== */

const DATA_TOAN10_CH5 = {
    "MATH10-CH5-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương V: Thống kê",
        title: "Bài 1: Các số đặc trưng đo xu hướng trung tâm",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương V", "Bài 1"],
        theory: `
### 1. Số Trung bình (Mean)
- **Công thức:** $\bar{x} = \frac{x_1 + x_2 + ... + x_n}{n}$.
- **Trường hợp có tần số:** $\bar{x} = \frac{m_1 x_1 + m_2 x_2 + ... + m_k x_k}{n}$ (với $n = m_1 + m_2 + ... + m_k$).
- **Ý nghĩa:** Là giá trị đại diện cho mẫu số liệu.
- **Hạn chế:** Dễ bị ảnh hưởng mạnh bởi các giá trị quá lớn hoặc quá nhỏ (giá trị ngoại lệ/outliers).

### 2. Trung vị (Median) và Tứ phân vị (Quartiles)
- **Bước 1:** Luôn phải sắp xếp mẫu số liệu theo thứ tự **tăng dần** hoặc **giảm dần**.
- **Trung vị ($M_e$):**
  - Nếu $n$ lẻ: $M_e$ là số chính giữa.
  - Nếu $n$ chẵn: $M_e$ là trung bình cộng của 2 số chính giữa.
- **Tứ phân vị ($Q_1, Q_2, Q_3$):**
  - $Q_2 = M_e$ (Chia đôi toàn bộ số liệu).
  - $Q_1$ (Tứ phân vị thứ nhất): Là trung vị của nửa số liệu bên trái (không bao gồm $Q_2$ nếu $n$ lẻ).
  - $Q_3$ (Tứ phân vị thứ ba): Là trung vị của nửa số liệu bên phải (không bao gồm $Q_2$ nếu $n$ lẻ).
- **Ý nghĩa:** Trung vị không bị ảnh hưởng bởi giá trị ngoại lệ. Tứ phân vị giúp chia mẫu thành 4 phần bằng nhau.

### 3. Mốt (Mode)
- **Định nghĩa:** Là giá trị có tần số xuất hiện lớn nhất trong mẫu số liệu.
- **Ký hiệu:** $M_o$.
- Một mẫu số liệu có thể có 1 mốt, nhiều mốt, hoặc không có mốt (nếu tất cả xuất hiện với tần số bằng nhau).

---

### 4. 💎 Chuyên đề Master: Tính chất Tuyến tính và Trung bình Gộp (VDC)
📌 **Tính chất tuyến tính của Số trung bình:**
- Nếu mỗi giá trị $x_i$ được biến đổi theo công thức $y_i = ax_i + b$, thì số trung bình mới là: $\bar{y} = a\bar{x} + b$.
- Ví dụ: Tăng mỗi người lên 2 điểm ($y = x + 2$) thì điểm trung bình cũng tăng lên 2 điểm. Đổi đơn vị nhiệt độ từ độ C sang độ F ($F = 1.8C + 32$) thì $\bar{F} = 1.8\bar{C} + 32$.

📌 **Trung bình gộp (Weighted Mean):**
- Khi ghép 2 nhóm số liệu: Nhóm 1 có $n_1$ phần tử, trung bình $\bar{x_1}$. Nhóm 2 có $n_2$ phần tử, trung bình $\bar{x_2}$.
- Số trung bình chung của cả 2 nhóm: $\bar{x}_{chung} = \frac{n_1 \cdot \bar{x_1} + n_2 \cdot \bar{x_2}}{n_1 + n_2}$.
- (Trung bình gộp KHÔNG phải là trung bình cộng của 2 số trung bình, trừ khi $n_1 = n_2$).
        `,
        tips: `
- ⚠️ **Lỗi sai kinh điển:** Học sinh thường quên **Sắp xếp số liệu** từ bé đến lớn trước khi tìm Trung vị và Tứ phân vị.
- 💡 **Mẹo chọn số đại diện:**
  + Dùng **Số trung bình** khi dãy số ĐỒNG ĐỀU, không có sự chênh lệch đột biến.
  + Dùng **Trung vị** khi dãy số có sự CHÊNH LỆCH LỚN (có người quá giàu hoặc quá nghèo, có điểm quá cao hoặc quá thấp).
  + Dùng **Mốt** khi ta quan tâm đến kích cỡ/mẫu mã phổ biến nhất (ví dụ: size áo bán chạy nhất).
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Một cửa hàng bán giày ghi lại size giày của 10 khách hàng nam trong một buổi sáng như sau: $40, 41, 42, 40, 39, 41, 43, 40, 42, 41$. Tìm mốt của mẫu số liệu và giải thích ý nghĩa.
* **Lời giải:**
  - Lập bảng tần số:
    Size 39: 1
    Size 40: 3
    Size 41: 3
    Size 42: 2
    Size 43: 1
  - Ta thấy size 40 và 41 đều xuất hiện nhiều nhất (3 lần).
  - Vậy mẫu số liệu có 2 mốt: $M_{o1} = 40, M_{o2} = 41$.
  - Ý nghĩa: Size giày 40 và 41 là những size được khách hàng mua nhiều nhất, cửa hàng nên nhập nhiều hàng size này.

**Bài 2 (Cơ bản):** Cho mẫu số liệu: $7, 5, 8, 9, 6, 8, 10$. Hãy tìm các tứ phân vị $Q_1, Q_2, Q_3$ của mẫu số liệu.
* **Lời giải:**
  - Sắp xếp tăng dần: $5, 6, 7, 8, 8, 9, 10$ ($n=7$).
  - Trung vị $Q_2$: Số chính giữa (vị trí thứ 4) $\Rightarrow Q_2 = 8$.
  - Tứ phân vị $Q_1$: Là trung vị của nửa bên trái $(5, 6, 7)$ $\Rightarrow Q_1 = 6$.
  - Tứ phân vị $Q_3$: Là trung vị của nửa bên phải $(8, 9, 10)$ $\Rightarrow Q_3 = 9$.

**Bài 3 (Vận dụng):** Thời gian (phút) giải một bài toán của 8 học sinh là: $4, 7, 5, 6, 8, 5, 15, 6$. Hãy tính số trung bình, trung vị và đưa ra nhận xét.
* **Lời giải:**
  - $\bar{x} = \frac{4 + 7 + 5 + 6 + 8 + 5 + 15 + 6}{8} = 7$ phút.
  - Sắp xếp tăng dần: $4, 5, 5, 6, 6, 7, 8, 15$.
  - Trung vị $M_e = \frac{6+6}{2} = 6$ phút.
  - Nhận xét: Do có 1 học sinh giải rất chậm (15 phút - giá trị ngoại lệ) nên số trung bình (7) bị kéo lên cao hơn thực tế. Trung vị (6) phản ánh đúng thực lực chung của nhóm hơn.

**Bài 4 (Vận dụng):** Điểm kiểm tra Toán của lớp 10A (40 học sinh) trung bình là 7.5. Điểm kiểm tra Toán của lớp 10B (45 học sinh) trung bình là 6.8. Tính điểm trung bình chung của cả hai lớp.
* **Lời giải:**
  - Tổng điểm lớp 10A: $40 \times 7.5 = 300$.
  - Tổng điểm lớp 10B: $45 \times 6.8 = 306$.
  - Tổng số học sinh: $40 + 45 = 85$.
  - Điểm trung bình chung: $\bar{x}_{chung} = \frac{300 + 306}{85} = \frac{606}{85} \approx 7.13$.

**Bài 5 (Vận dụng):** Một mẫu số liệu có 5 phần tử: $x_1, x_2, x_3, 4, 6$. Biết rằng số trung bình của mẫu là $5$ và tứ phân vị $Q_2 = 4$. Biết các phần tử là số nguyên dương và phân biệt. Tìm $x_1, x_2, x_3$.
* **Lời giải:**
  - Tổng 5 số: $x_1 + x_2 + x_3 + 4 + 6 = 5 \times 5 = 25 \Rightarrow x_1 + x_2 + x_3 = 15$.
  - $Q_2 = 4$ nên khi xếp tăng dần, số 4 phải nằm ở vị trí thứ 3.
  - Dãy xếp: $a < b < 4 < c < d$ (với $a, b, c, d$ là các số trong mẫu).
  - Đã có số 6, vậy $c$ hoặc $d$ là số 6. Giả sử $c = 6 \Rightarrow d > 6$.
  - 3 số còn lại phải có tổng bằng 15. Đã biết chúng gồm 2 số nhỏ hơn 4 và 1 số lớn hơn 4.
  - Các số nguyên dương nhỏ hơn 4: có thể là 1, 2, 3.
  - Chọn 2 số nhỏ hơn 4 là 1 và 2 $\Rightarrow$ Số còn lại là $15 - 1 - 2 = 12$.
  - Dãy là: $1, 2, 4, 6, 12$. (Phù hợp).
  - Vậy 3 số cần tìm là 1, 2, 12.

**Bài 6 (Vận dụng cao):** Khảo sát lương (triệu đồng) của 6 nhân viên: $7, 8, 8, 9, 10, 15$. Nếu tuyển thêm 1 nhân viên lương $x$ triệu, tìm $x$ để trung vị của tổ 7 người mới không thay đổi so với tổ 6 người cũ.
* **Lời giải:**
  - Dãy cũ: $7, 8, 8, 9, 10, 15$. Trung vị cũ: $Q_2 = \frac{8+9}{2} = 8.5$.
  - Dãy mới 7 người, trung vị sẽ là phần tử đứng thứ 4 (sau khi sắp xếp).
  - Yêu cầu trung vị mới vẫn là 8.5, nghĩa là phần tử thứ 4 phải là 8.5.
  - Mà phần tử thứ 4 phải là một trong các số của dãy (gồm 6 số cũ và số x).
  - Do các số cũ không có số nào là 8.5, nên bắt buộc $x = 8.5$.
  - Khi $x = 8.5$, xếp: $7, 8, 8, 8.5, 9, 10, 15$. Vị trí 4 là 8.5 (Thỏa mãn).

**Bài 7 (Vận dụng cao):** Chiều cao (cm) của 10 cây giống là: $12, 14, 15, 14, 18, 16, 17, 13, 19, x$. Biết trung vị của mẫu số liệu là $15$. Tìm tập các giá trị nguyên của $x$.
* **Lời giải:**
  - Sắp xếp 9 phần tử đã biết: $12, 13, 14, 14, 15, 16, 17, 18, 19$.
  - Khi có 10 phần tử, trung vị $Q_2 = \frac{a_5 + a_6}{2}$.
  - Yêu cầu $\frac{a_5 + a_6}{2} = 15 \Rightarrow a_5 + a_6 = 30$.
  - Quan sát dãy đã sắp: nếu $x \le 15$, 5 phần tử đầu tiên luôn $\le 15$.
    + Nếu $x = 14$: $12, 13, 14, 14, 14, 15, 16, 17, 18, 19 \Rightarrow Q_2 = \frac{14+15}{2} = 14.5$ (Loại).
    + Nếu $x = 15$: $12, 13, 14, 14, 15, 15, 16, 17, 18, 19 \Rightarrow Q_2 = \frac{15+15}{2} = 15$ (Nhận).
    + Nếu $x \ge 16$: $12, 13, 14, 14, 15, 16, ... \Rightarrow Q_2 = \frac{15+16}{2} = 15.5$ (Loại).
  - Kết luận: Giá trị duy nhất $x = 15$.

**Bài 8 (Vận dụng cao):** Trong một công ty, lương trung bình của nam là 15 triệu, của nữ là 12 triệu. Lương trung bình của toàn công ty là 13 triệu. Tính tỉ lệ giữa số nhân viên nam và số nhân viên nữ.
* **Lời giải:**
  - Gọi số nam là $x$, số nữ là $y$.
  - Lương trung bình toàn công ty: $\frac{15x + 12y}{x + y} = 13$.
  - $\Leftrightarrow 15x + 12y = 13x + 13y \Leftrightarrow 2x = y \Leftrightarrow \frac{x}{y} = \frac{1}{2}$.
  - Vậy tỉ lệ nam/nữ là $1:2$.

**Bài 9 (Vận dụng cao):** Cho mẫu số liệu gồm 5 giá trị: $a, b, c, d, e$ (nguyên dương, phân biệt và $a < b < c < d < e$). Biết số trung bình bằng 10, trung vị bằng 8. Tìm giá trị lớn nhất có thể có của $e$.
* **Lời giải:**
  - Trung vị $c = 8$.
  - Trung bình bằng 10 $\Rightarrow a + b + c + d + e = 50 \Rightarrow a + b + 8 + d + e = 50 \Rightarrow a + b + d + e = 42$.
  - Để $e$ lớn nhất, thì $a, b, d$ phải nhỏ nhất.
  - Các số phải nguyên dương và phân biệt, tăng dần:
    + $a$ nhỏ nhất $\Rightarrow a = 1$.
    + $b$ nhỏ nhất (lớn hơn a) $\Rightarrow b = 2$.
    + $d$ nhỏ nhất (lớn hơn c=8) $\Rightarrow d = 9$.
  - Thay vào tổng: $1 + 2 + 9 + e = 42 \Rightarrow 12 + e = 42 \Rightarrow e = 30$.
  - Kết luận: Max của e là 30.

**Bài 10 (Vận dụng cao):** Cho hai mẫu số liệu $X$ (gồm 3 phần tử) và $Y$ (gồm 2 phần tử). Biết số trung bình của $X$ là 4, của $Y$ là 6. Chứng minh rằng nếu lấy 1 phần tử từ $Y$ chuyển sang $X$ thì trung bình của mẫu $X$ mới chắc chắn lớn hơn 4.
* **Lời giải:**
  - Tổng các phần tử của Y là $2 \times 6 = 12$. Vì Y có 2 phần tử nên theo tính chất số trung bình, sẽ có ít nhất 1 phần tử lớn hơn hoặc bằng 6. (Thực tế, không thể cả hai đều nhỏ hơn 6 vì lúc đó trung bình sẽ nhỏ hơn 6).
  - Giả sử chuyển phần tử $y_1$ từ Y sang X. Trung bình mới của X là: $\bar{X}' = \frac{3 \times 4 + y_1}{4} = \frac{12 + y_1}{4} = 3 + \frac{y_1}{4}$.
  - Để trung bình của X mới LUÔN lớn hơn 4, ta cần chứng minh ta có thể luôn chọn được một $y_1 \ge 6$.
  - Nhưng đề bài nói "chuyển ngẫu nhiên", nếu trong $Y = (1, 11)$ ta chuyển $1$ sang, thì $\bar{X}' = \frac{12+1}{4} = 3.25 < 4$.
  - (Đề bài bị lỗi "chắc chắn", nên sửa lại là: "Luôn có cách chọn 1 phần tử từ Y chuyển sang X để...").
  - Lời giải đính chính: Trong Y có ít nhất 1 phần tử $\ge 6$. Ta chuyển phần tử này sang X thì trung bình mới của X là $\bar{X}' \ge \frac{12+6}{4} = 4.5 > 4$. ĐPCM.
        `
    },

    "MATH10-CH5-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương V: Thống kê",
        title: "Bài 2: Các số đặc trưng đo độ phân tán",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương V", "Bài 2"],
        theory: `
### 1. Khoảng biến thiên và Khoảng tứ phân vị
📌 **Khoảng biến thiên ($R$):**
- **Định nghĩa:** Là hiệu số giữa giá trị lớn nhất và giá trị nhỏ nhất của mẫu số liệu.
- **Công thức:** $R = x_{max} - x_{min}$.
- **Ý nghĩa:** Đo mức độ phân tán tổng thể. $R$ lớn chứng tỏ dữ liệu trải rộng. Dễ bị nhiễu bởi các giá trị ngoại lệ.

📌 **Khoảng tứ phân vị ($\Delta_Q$ hoặc $IQR$):**
- **Định nghĩa:** Là hiệu giữa tứ phân vị thứ ba và tứ phân vị thứ nhất.
- **Công thức:** $\Delta_Q = Q_3 - Q_1$.
- **Ý nghĩa:** Đo mức độ phân tán của 50% số liệu ở phần giữa. Không bị ảnh hưởng bởi giá trị ngoại lệ. Thường được dùng để phát hiện giá trị ngoại lệ.

### 2. Phương sai và Độ lệch chuẩn
📌 **Phương sai ($S^2$ hoặc $V_X$):**
- Trung bình của bình phương các độ lệch so với số trung bình.
- **Công thức gốc:** $S^2 = \frac{(x_1 - \bar{x})^2 + (x_2 - \bar{x})^2 + ... + (x_n - \bar{x})^2}{n}$
- **Công thức biến đổi (tính nhanh):** $S^2 = \frac{x_1^2 + x_2^2 + ... + x_n^2}{n} - (\bar{x})^2$

📌 **Độ lệch chuẩn ($S$ hoặc $\sigma$):**
- Là căn bậc hai số học của phương sai: $S = \sqrt{S^2}$.
- **Ý nghĩa:** Độ lệch chuẩn cùng đơn vị đo với mẫu số liệu, giúp dễ hình dung độ lệch trung bình của các phần tử so với tâm. Số càng nhỏ, mẫu số liệu càng đồng đều (ổn định).

---

### 3. 💎 Chuyên đề Master: Giá trị ngoại lệ và Tính chất Phương sai (VDC)
📌 **Phát hiện giá trị ngoại lệ (Outliers):**
- Một giá trị $x$ được gọi là ngoại lệ nếu nó nằm ngoài khoảng:
  **$[Q_1 - 1.5\Delta_Q; Q_3 + 1.5\Delta_Q]$**
- Nghĩa là: Hoặc $x < Q_1 - 1.5\Delta_Q$ (Ngoại lệ dưới). Hoặc $x > Q_3 + 1.5\Delta_Q$ (Ngoại lệ trên).

📌 **Tính chất của Phương sai (Rất hay dùng làm bài tập khó):**
- Nếu $y_i = x_i + C$ (Cộng thêm hằng số) $\Rightarrow S_y^2 = S_x^2$ (Dịch chuyển không làm thay đổi độ phân tán).
- Nếu $y_i = a \cdot x_i$ (Nhân hằng số) $\Rightarrow S_y^2 = a^2 \cdot S_x^2$. Độ lệch chuẩn $S_y = |a| \cdot S_x$.
- Tổng quát: $y_i = ax_i + b \Rightarrow S_y^2 = a^2 \cdot S_x^2$.
- **Bài toán Cực trị:** Hàm số $f(x) = (x_1 - x)^2 + (x_2 - x)^2 + ... + (x_n - x)^2$ đạt giá trị Nhỏ Nhất khi và chỉ khi $x = \bar{x}$ (số trung bình).
        `,
        tips: `
- 💡 **Mẹo tính phương sai không bị sai số:** Trong lúc bấm máy tính hoặc làm tự luận, nếu số trung bình $\bar{x}$ là một số thập phân dài ngoằn (ví dụ $1.33333...$), KHÔNG ĐƯỢC LÀM TRÒN $\bar{x}$ rồi thay vào tính $S^2$, vì sai số sẽ bị khuếch đại khi bình phương. Phải để nguyên phân số!
- ⚠️ **Sự khác biệt giữa Phương sai mẫu ($S^2$) và Phương sai mẫu hiệu chỉnh ($s^2$):** SGK Toán 10 Việt Nam hiện tại dạy chia cho $n$. Một số máy tính Casio bấm ra kết quả chia cho $n-1$. Các em phải chọn phím $\sigma_x$ (chữ x) thay vì $s_x$ trên máy tính nhé.
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Tìm khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu sau: $12, 15, 20, 18, 14, 15, 25, 22$.
* **Lời giải:**
  - Xếp tăng dần: $12, 14, 15, 15, 18, 20, 22, 25$ ($n=8$).
  - Khoảng biến thiên $R = 25 - 12 = 13$.
  - Tìm Tứ phân vị:
    + $Q_2 = \frac{15+18}{2} = 16.5$.
    + $Q_1$ là trung vị nửa dưới $(12, 14, 15, 15) \Rightarrow Q_1 = 14.5$.
    + $Q_3$ là trung vị nửa trên $(18, 20, 22, 25) \Rightarrow Q_3 = 21$.
  - Khoảng tứ phân vị $\Delta_Q = Q_3 - Q_1 = 21 - 14.5 = 6.5$.

**Bài 2 (Cơ bản):** Điểm kiểm tra của An trong 5 môn là: $6, 7, 8, 9, 10$. Tính phương sai và độ lệch chuẩn.
* **Lời giải:**
  - $\bar{x} = \frac{6+7+8+9+10}{5} = 8$.
  - $S^2 = \frac{1}{5} \left[ (6-8)^2 + (7-8)^2 + (8-8)^2 + (9-8)^2 + (10-8)^2 \right]$
    $= \frac{1}{5} \left[ 4 + 1 + 0 + 1 + 4 \right] = \frac{10}{5} = 2$.
  - Độ lệch chuẩn $S = \sqrt{2} \approx 1.41$.

**Bài 3 (Vận dụng):** Hai nhóm công nhân A và B cùng sản xuất một loại chi tiết máy. Thời gian trung bình để làm xong 1 chi tiết của cả 2 nhóm đều là 15 phút. Tuy nhiên, độ lệch chuẩn của nhóm A là 2 phút, của nhóm B là 4 phút. Đánh giá chất lượng làm việc của hai nhóm.
* **Lời giải:**
  - Cả hai nhóm có thời gian trung bình bằng nhau.
  - Tuy nhiên, độ lệch chuẩn của nhóm A (2) nhỏ hơn nhóm B (4).
  - Nhận xét: Nhóm A làm việc đồng đều, ổn định hơn nhóm B. Nhóm B có thể có người làm rất nhanh nhưng cũng có người làm rất chậm (trình độ phân tán cao).

**Bài 4 (Vận dụng):** Có mẫu số liệu đã sắp xếp: $3, 10, 12, 14, 15, 18, 20, 45$. Bằng tính toán, xác định mẫu số liệu có chứa giá trị ngoại lệ nào không?
* **Lời giải:**
  - $n=8$. $Q_2 = \frac{14+15}{2} = 14.5$.
  - $Q_1 = \frac{10+12}{2} = 11$. $Q_3 = \frac{18+20}{2} = 19$.
  - $\Delta_Q = 19 - 11 = 8$.
  - Khoảng an toàn: $[Q_1 - 1.5\Delta_Q; Q_3 + 1.5\Delta_Q] = [11 - 12; 19 + 12] = [-1; 31]$.
  - Ta thấy $45 > 31$ nên 45 là giá trị ngoại lệ trên. Số 3 vẫn nằm trong khoảng an toàn.
  - Vậy mẫu có 1 giá trị ngoại lệ là 45.

**Bài 5 (Vận dụng):** Nhiệt độ đo trong 5 ngày của Hà Nội (độ C) có trung bình là $20^\circ C$, phương sai là 9. Hỏi nếu đổi sang thang nhiệt độ F theo công thức $F = 1.8C + 32$, thì độ lệch chuẩn của mẫu nhiệt độ F là bao nhiêu?
* **Lời giải:**
  - Độ lệch chuẩn ban đầu $S_C = \sqrt{9} = 3$.
  - Theo tính chất tuyến tính, khi $y = ax+b$ thì $S_y = |a| \cdot S_x$.
  - $S_F = 1.8 \cdot S_C = 1.8 \times 3 = 5.4$.

**Bài 6 (Vận dụng cao):** Cho mẫu số liệu gồm 4 giá trị $a, b, c, d$. Biết trung bình của mẫu là 5 và tổng bình phương các giá trị là 116. Tính phương sai của mẫu số liệu.
* **Lời giải:**
  - Ta có $\bar{x} = 5$ và $\sum x_i^2 = a^2+b^2+c^2+d^2 = 116$, $n=4$.
  - Áp dụng công thức biến đổi của phương sai:
    $S^2 = \frac{\sum x_i^2}{n} - (\bar{x})^2$
  - Thay số: $S^2 = \frac{116}{4} - 5^2 = 29 - 25 = 4$.
  - Kết luận: Phương sai $S^2 = 4$.

**Bài 7 (Vận dụng cao):** Bốn ngôi nhà nằm dọc theo một con đường cao tốc thẳng, cách một điểm mốc O lần lượt là 2km, 5km, 8km, và 11km. Cần đặt một trạm biến áp tại vị trí $x$ trên đường sao cho tổng bình phương khoảng cách từ trạm đến 4 ngôi nhà là nhỏ nhất. Tìm vị trí $x$.
* **Lời giải:**
  - Tổng bình phương khoảng cách là hàm số: $f(x) = (2-x)^2 + (5-x)^2 + (8-x)^2 + (11-x)^2$.
  - Áp dụng tính chất Thống kê: Hàm số tổng bình phương các độ lệch đạt giá trị cực tiểu khi $x$ là số trung bình của dãy số liệu.
  - Vị trí tối ưu: $x = \bar{x} = \frac{2 + 5 + 8 + 11}{4} = \frac{26}{4} = 6.5$ (km).

**Bài 8 (Vận dụng cao):** Nhóm 1 có 10 học sinh, điểm Toán trung bình là 7, phương sai là 2. Nhóm 2 có 10 học sinh, điểm Toán trung bình là 7, phương sai là 4. Nếu gộp 2 nhóm thành 1 nhóm 20 học sinh, phương sai của nhóm gộp là bao nhiêu?
* **Lời giải:**
  - Điểm trung bình của nhóm gộp: $\bar{x}_{gop} = \frac{10 \times 7 + 10 \times 7}{20} = 7$. (Trung bình không đổi).
  - Công thức phương sai nhóm 1: $S_1^2 = \frac{\sum x_i^2}{10} - 7^2 = 2 \Rightarrow \frac{\sum x_i^2}{10} = 51 \Rightarrow \sum_{nhom1} x_i^2 = 510$.
  - Tương tự cho nhóm 2: $S_2^2 = \frac{\sum y_i^2}{10} - 7^2 = 4 \Rightarrow \frac{\sum y_i^2}{10} = 53 \Rightarrow \sum_{nhom2} y_i^2 = 530$.
  - Tổng bình phương toàn bộ: $\sum_{tat_ca} = 510 + 530 = 1040$.
  - Phương sai nhóm gộp: $S_{gop}^2 = \frac{1040}{20} - 7^2 = 52 - 49 = 3$.
  - *(Mẹo: Nếu 2 nhóm cùng số lượng và CÙNG TRUNG BÌNH, thì phương sai gộp bằng trung bình cộng 2 phương sai: $\frac{2+4}{2} = 3$).*

**Bài 9 (Vận dụng cao):** Cho mẫu số liệu: $2, 4, 6, 8, x$. Biết số trung bình của mẫu bằng 6. Tính độ lệch chuẩn.
* **Lời giải:**
  - Trung bình $\bar{x} = \frac{2 + 4 + 6 + 8 + x}{5} = 6 \Rightarrow 20 + x = 30 \Rightarrow x = 10$.
  - Mẫu số liệu là: $2, 4, 6, 8, 10$. Trung bình là 6.
  - Phương sai: $S^2 = \frac{1}{5} \left[ (-4)^2 + (-2)^2 + 0^2 + 2^2 + 4^2 \right] = \frac{16+4+0+4+16}{5} = \frac{40}{5} = 8$.
  - Độ lệch chuẩn: $S = \sqrt{8} = 2\sqrt{2}$.

**Bài 10 (Vận dụng cao):** Một đội thi đấu có 6 vận động viên. Khối lượng (kg) của 5 VĐV đã biết là: $60, 62, 64, 66, 68$. Gọi VĐV thứ 6 có khối lượng là $x$. Tìm $x$ để phương sai của mẫu số liệu trên đạt giá trị nhỏ nhất.
* **Lời giải:**
  - Áp dụng nguyên lý: Một phần tử mới thêm vào mẫu sẽ không làm tăng thêm độ phân tán nếu nó nằm đúng vào "trọng tâm" (số trung bình) của các phần tử sẵn có.
  - Nếu ta xem việc chọn $x$ để giảm tối đa sự phân tán, phương sai sẽ đạt giá trị nhỏ nhất khi $x$ bằng đúng trung bình cộng của 5 phần tử kia.
  - $\bar{x_{cu}} = \frac{60+62+64+66+68}{5} = 64$.
  - Vậy $x = 64$ (kg). 
  - *(Khi đó, phương sai của mẫu 6 người sẽ là $\frac{40}{6} \approx 6.67$, nhỏ hơn phương sai ban đầu của mẫu 5 người là $8$).*
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH5;
}
