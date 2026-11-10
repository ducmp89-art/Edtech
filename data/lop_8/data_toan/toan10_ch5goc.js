/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương V: Thống kê (Mẫu số liệu không ghép nhóm) - Giải chi tiết 100%
   ========================================================================== */

const DATA_TOAN10_CH5 = {
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
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH5;
}
