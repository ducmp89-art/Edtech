/* ==========================================================================
   S-NOTE 2026 - HỆ THỐNG BÀI TẬP ÔN LUYỆN TOÁN 10 MASTER
   Chương V: Thống kê (Mẫu số liệu không ghép nhóm)
   Cấu trúc: 15 Bài tập (8 Vận dụng + 7 Vận dụng cao)
   (Định dạng backtick chuẩn hóa, an toàn cho render MathJax)
   ========================================================================== */

const DATA_PRACTICE_CH5 = {
    "MATH10-PRAC-CH5-01": {
        level: `Vận dụng`,
        topic: `Đo xu hướng trung tâm cơ bản`,
        question: `Cho mẫu số liệu về thời gian hoàn thành một vòng chạy (tính bằng giây) của 9 vận động viên như sau: $45, 42, 50, 42, 48, 55, 42, 46, 51$. Tính số trung bình, trung vị và mốt của mẫu số liệu trên (làm tròn đến hàng phần mười).`,
        hint: `Chìa khóa tư duy: Luôn sắp xếp mẫu số liệu theo thứ tự tăng dần trước khi tìm trung vị. Mốt là giá trị xuất hiện nhiều nhất.`,
        solution: `
**Bước 1: Sắp xếp mẫu số liệu**
- Mẫu số liệu xếp tăng dần: $42, 42, 42, 45, 46, 48, 50, 51, 55$. (Số lượng $n=9$).

**Bước 2: Tính các số đặc trưng**
- **Số trung bình:** 
  $\bar{x} = \frac{42+42+42+45+46+48+50+51+55}{9} = \frac{421}{9} \approx 46.8$ (giây).
- **Trung vị:** 
  Vì $n=9$ (số lẻ) nên trung vị là giá trị ở chính giữa (vị trí thứ $\frac{9+1}{2} = 5$).
  Từ dãy đã sắp xếp, số hạng thứ 5 là $46$. Vậy $M_e = 46$.
- **Mốt:** 
  Giá trị $42$ xuất hiện nhiều nhất (3 lần). Vậy $M_o = 42$.
        `
    },
    "MATH10-PRAC-CH5-02": {
        level: `Vận dụng`,
        topic: `Tứ phân vị (Quartiles)`,
        question: `Điểm kiểm tra giữa kì môn Toán của 10 học sinh được ghi lại như sau: $7, 5, 8, 9, 6, 8, 10, 7, 8, 9$. Hãy tìm các tứ phân vị $Q_1, Q_2, Q_3$ của mẫu số liệu.`,
        hint: `Chìa khóa tư duy: Sắp xếp tăng dần. Tìm $Q_2$ (trung vị của toàn bộ). Sau đó chia làm 2 nửa, $Q_1$ là trung vị nửa dưới, $Q_3$ là trung vị nửa trên.`,
        solution: `
- **Bước 1:** Sắp xếp tăng dần: $5, 6, 7, 7, 8, 8, 8, 9, 9, 10$. (Kích thước $n=10$).
- **Bước 2: Tìm $Q_2$ (Trung vị của 10 số):**
  Vì $n=10$ (chẵn), trung vị nằm giữa số thứ 5 và thứ 6.
  $Q_2 = \frac{8 + 8}{2} = 8$.
- **Bước 3: Tìm $Q_1$ (Trung vị nửa dưới):**
  Nửa dưới gồm 5 số (các số thứ tự 1 đến 5): $5, 6, 7, 7, 8$.
  $Q_1$ là số chính giữa của dãy này $\Rightarrow Q_1 = 7$.
- **Bước 4: Tìm $Q_3$ (Trung vị nửa trên):**
  Nửa trên gồm 5 số (các số thứ tự 6 đến 10): $8, 8, 9, 9, 10$.
  $Q_3$ là số chính giữa của dãy này $\Rightarrow Q_3 = 9$.
- Kết luận: Tứ phân vị của mẫu số liệu là $Q_1 = 7, Q_2 = 8, Q_3 = 9$.
        `
    },
    "MATH10-PRAC-CH5-03": {
        level: `Vận dụng`,
        topic: `Lựa chọn số đại diện`,
        question: `Thống kê số điểm thưởng của 7 bạn trong tổ 1 thu được dãy số liệu: $10, 15, 12, 10, 14, 11, 150$. Theo em, để chọn một giá trị đại diện cho số điểm thưởng của tổ 1, ta nên dùng số trung bình hay trung vị? Tại sao?`,
        hint: `Chìa khóa tư duy: Quan sát dãy số xem có giá trị nào bất thường (ngoại lệ - outlier) không. Nếu có, số trung bình sẽ bị nhiễu, nên dùng trung vị.`,
        solution: `
- Sắp xếp tăng dần: $10, 10, 11, 12, 14, 15, 150$.
- Dễ thấy trong mẫu số liệu có một giá trị rất lớn so với các giá trị còn lại, đó là $150$ (giá trị ngoại lệ).
- Nếu tính số trung bình: $\bar{x} = \frac{10+10+11+12+14+15+150}{7} \approx 31.7$. Mức trung bình này cao hơn hẳn thực lực chung của hầu hết các bạn trong tổ (6/7 bạn đều $\le 15$). Số trung bình đã phản ánh sai lệch đặc trưng của nhóm.
- Nếu tính trung vị: $M_e = 12$. Giá trị này phản ánh rất sát mức điểm thưởng chung của đa số các thành viên trong tổ.
- Kết luận: Nên chọn **Trung vị ($M_e = 12$)** làm giá trị đại diện.
        `
    },
    "MATH10-PRAC-CH5-04": {
        level: `Vận dụng`,
        topic: `Tính toán từ bảng tần số`,
        question: `Khảo sát số con của 20 gia đình trong một khu phố, ta có bảng tần số sau:
Số con ($x$): | 0 | 1 | 2 | 3 | 4 |
Tần số ($f$): | 2 | 5 | 9 | 3 | 1 |
Tính số trung bình và mốt của mẫu số liệu.`,
        hint: `Chìa khóa tư duy: Số trung bình của bảng tần số: $\bar{x} = \frac{x_1 f_1 + x_2 f_2 + ...}{n}$. Mốt là giá trị $x_i$ ứng với tần số $f_i$ lớn nhất.`,
        solution: `
- **Tính số trung bình:**
  Tổng số gia đình $n = 20$.
  $\bar{x} = \frac{0 \times 2 + 1 \times 5 + 2 \times 9 + 3 \times 3 + 4 \times 1}{20}$
  $\bar{x} = \frac{0 + 5 + 18 + 9 + 4}{20} = \frac{36}{20} = 1.8$.
  Vậy trung bình mỗi gia đình có $1.8$ con.
- **Tính mốt:**
  Nhìn vào bảng, ta thấy tần số lớn nhất là $f = 9$, tương ứng với số con là $x = 2$.
  Vậy mốt của mẫu số liệu là $M_o = 2$.
        `
    },
    "MATH10-PRAC-CH5-05": {
        level: `Vận dụng`,
        topic: `Khoảng biến thiên & Khoảng tứ phân vị`,
        question: `Cho mẫu số liệu: $23, 21, 28, 25, 30, 27, 24, 21$. Tìm khoảng biến thiên và khoảng tứ phân vị của mẫu số liệu.`,
        hint: `Chìa khóa tư duy: Khoảng biến thiên $R = x_{max} - x_{min}$. Khoảng tứ phân vị $\Delta_Q = Q_3 - Q_1$.`,
        solution: `
- **Sắp xếp tăng dần:** $21, 21, 23, 24, 25, 27, 28, 30$. (Số lượng $n=8$).
- **Tính khoảng biến thiên:**
  $R = x_{max} - x_{min} = 30 - 21 = 9$.
- **Tính khoảng tứ phân vị:**
  + Tìm trung vị $Q_2$: Giữa số thứ 4 và 5 $\Rightarrow Q_2 = \frac{24+25}{2} = 24.5$.
  + Nửa dưới: $21, 21, 23, 24 \Rightarrow Q_1 = \frac{21+23}{2} = 22$.
  + Nửa trên: $25, 27, 28, 30 \Rightarrow Q_3 = \frac{27+28}{2} = 27.5$.
  + Khoảng tứ phân vị: $\Delta_Q = Q_3 - Q_1 = 27.5 - 22 = 5.5$.
- Kết luận: Khoảng biến thiên $R = 9$, khoảng tứ phân vị $\Delta_Q = 5.5$.
        `
    },
    "MATH10-PRAC-CH5-06": {
        level: `Vận dụng`,
        topic: `Phương sai & Độ lệch chuẩn`,
        question: `Điểm thi của một nhóm 6 học sinh là: $5, 6, 7, 8, 9, 7$. Tính phương sai và độ lệch chuẩn của nhóm (làm tròn đến 2 chữ số thập phân).`,
        hint: `Chìa khóa tư duy: Tính $\bar{x}$. Sau đó tính phương sai $s^2 = \frac{1}{n}\sum(x_i - \bar{x})^2$. Độ lệch chuẩn $s = \sqrt{s^2}$.`,
        solution: `
- **Tính số trung bình:**
  $\bar{x} = \frac{5 + 6 + 7 + 8 + 9 + 7}{6} = \frac{42}{6} = 7$.
- **Tính phương sai:**
  $s^2 = \frac{1}{6} \left[ (5-7)^2 + (6-7)^2 + (7-7)^2 + (8-7)^2 + (9-7)^2 + (7-7)^2 \right]$
  $s^2 = \frac{1}{6} \left[ (-2)^2 + (-1)^2 + 0^2 + 1^2 + 2^2 + 0^2 \right]$
  $s^2 = \frac{1}{6} (4 + 1 + 0 + 1 + 4 + 0) = \frac{10}{6} = \frac{5}{3} \approx 1.67$.
- **Tính độ lệch chuẩn:**
  $s = \sqrt{s^2} = \sqrt{\frac{5}{3}} \approx 1.29$.
- Kết luận: Phương sai $s^2 \approx 1.67$; Độ lệch chuẩn $s \approx 1.29$.
        `
    },
    "MATH10-PRAC-CH5-07": {
        level: `Vận dụng`,
        topic: `Đánh giá tính ổn định`,
        question: `Hai vận động viên bắn súng A và B mỗi người bắn 5 phát. Điểm số của A là: $8, 9, 10, 8, 10$. Điểm số của B là: $7, 10, 10, 9, 9$. Biết rằng điểm trung bình của cả hai người đều bằng 9. Vận động viên nào có phong độ bắn ổn định hơn?`,
        hint: `Chìa khóa tư duy: Cùng số trung bình, mẫu số liệu nào có phương sai (hoặc độ lệch chuẩn) nhỏ hơn thì tính ổn định cao hơn, độ phân tán thấp hơn.`,
        solution: `
- Tính phương sai điểm số của vận động viên A ($\bar{x}_A = 9$):
  $s_A^2 = \frac{1}{5} \left[ (8-9)^2 + (9-9)^2 + (10-9)^2 + (8-9)^2 + (10-9)^2 \right]$
  $s_A^2 = \frac{1}{5} (1 + 0 + 1 + 1 + 1) = \frac{4}{5} = 0.8$.
- Tính phương sai điểm số của vận động viên B ($\bar{x}_B = 9$):
  $s_B^2 = \frac{1}{5} \left[ (7-9)^2 + (10-9)^2 + (10-9)^2 + (9-9)^2 + (9-9)^2 \right]$
  $s_B^2 = \frac{1}{5} (4 + 1 + 1 + 0 + 0) = \frac{6}{5} = 1.2$.
- So sánh: Vì $s_A^2 < s_B^2$ ($0.8 < 1.2$), nên điểm số của vận động viên A ít phân tán hơn xung quanh giá trị trung bình so với B.
- Kết luận: Vận động viên A có phong độ bắn ổn định hơn.
        `
    },
    "MATH10-PRAC-CH5-08": {
        level: `Vận dụng`,
        topic: `Nhận diện giá trị ngoại lệ`,
        question: `Có một mẫu số liệu đã được sắp xếp tăng dần: $3, 15, 18, 20, 22, 25, 27, 45$. Bằng tính toán, hãy xác định xem trong mẫu số liệu này có giá trị ngoại lệ nào không?`,
        hint: `Chìa khóa tư duy: Tính $Q_1, Q_3, \Delta_Q$. Các giá trị nhỏ hơn ngưỡng $Q_1 - 1.5\Delta_Q$ hoặc lớn hơn ngưỡng $Q_3 + 1.5\Delta_Q$ là giá trị ngoại lệ.`,
        solution: `
- Mẫu gồm 8 phần tử: $3, 15, 18, 20, 22, 25, 27, 45$.
- Trung vị $Q_2 = \frac{20+22}{2} = 21$.
- Nửa dưới: $(3, 15, 18, 20) \Rightarrow Q_1 = \frac{15+18}{2} = 16.5$.
- Nửa trên: $(22, 25, 27, 45) \Rightarrow Q_3 = \frac{25+27}{2} = 26$.
- Khoảng tứ phân vị: $\Delta_Q = 26 - 16.5 = 9.5$.
- Tính các ngưỡng ngoại lệ:
  + Ngưỡng dưới: $Q_1 - 1.5\Delta_Q = 16.5 - 1.5(9.5) = 16.5 - 14.25 = 2.25$.
  + Ngưỡng trên: $Q_3 + 1.5\Delta_Q = 26 + 1.5(9.5) = 26 + 14.25 = 40.25$.
- Đối chiếu các phần tử của mẫu với các ngưỡng:
  + Xét các số nhỏ nhất: Giá trị $3 > 2.25$ (Không vi phạm ngưỡng dưới).
  + Xét các số lớn nhất: Giá trị $45 > 40.25$ (Vi phạm ngưỡng trên).
- Kết luận: Mẫu số liệu có 1 giá trị ngoại lệ là $45$.
        `
    },
    "MATH10-PRAC-CH5-09": {
        level: `Vận dụng cao`,
        topic: `Biện luận các số đặc trưng`,
        question: `Một mẫu số liệu gồm 5 số nguyên dương phân biệt xếp theo thứ tự tăng dần là $a, b, c, d, e$. Biết rằng số trung bình của mẫu là 10 và trung vị là 9. Tìm giá trị lớn nhất có thể có của phần tử $e$.`,
        hint: `Chìa khóa tư duy: Dựa vào $\bar{x} \Rightarrow$ tổng 5 số bằng 50. Trung vị $c = 9$. Đưa về $a+b+d+e = 41$. Để $e$ Max thì $a, b, d$ phải nhỏ nhất có thể nhưng phải thỏa mãn tính phân biệt và tăng dần.`,
        solution: `
- Vì mẫu có 5 phần tử nên trung vị chính là số ở giữa: $c = 9$.
- Số trung bình là $10 \Rightarrow \frac{a+b+c+d+e}{5} = 10 \Rightarrow a+b+c+d+e = 50$.
- Thay $c = 9$, ta có: $a+b+9+d+e = 50 \Rightarrow a+b+d+e = 41$.
- Theo giả thiết, 5 số là nguyên dương phân biệt và xếp tăng dần: $1 \le a < b < 9 < d < e$.
- Để $e$ đạt giá trị lớn nhất, thì các giá trị $a, b, d$ phải đạt giá trị nhỏ nhất có thể.
  + Số nguyên dương nhỏ nhất: $a_{min} = 1$.
  + Số nguyên dương nhỏ tiếp theo lớn hơn $a$: $b_{min} = 2$.
  + Số nguyên dương nhỏ nhất lớn hơn $c=9$: $d_{min} = 10$.
- Khi đó, thay các giá trị nhỏ nhất này vào tổng:
  $1 + 2 + 10 + e = 41 \Rightarrow 13 + e = 41 \Rightarrow e = 28$.
- (Dãy số đó là: $1, 2, 9, 10, 28$).
- Kết luận: Giá trị lớn nhất có thể của $e$ là 28.
        `
    },
    "MATH10-PRAC-CH5-10": {
        level: `Vận dụng cao`,
        topic: `Tính chất tuyến tính của phương sai`,
        question: `Nhiệt độ ($^\circ C$) được đo 5 lần trong một phòng thí nghiệm cho ra mẫu số liệu có nhiệt độ trung bình là $25^\circ C$ và phương sai là $4$. Người ta quyết định đổi tất cả số liệu sang độ Fahrenheit ($^\circ F$) theo công thức $F = 1.8C + 32$. Hãy tính nhiệt độ trung bình và phương sai mới theo thang độ $F$.`,
        hint: `Chìa khóa tư duy: Biến đổi tuyến tính $y_i = a x_i + b$. Khi đó $\bar{y} = a\bar{x} + b$, và phương sai $s_y^2 = a^2 \cdot s_x^2$ (chú ý phương sai không bị ảnh hưởng bởi phép tịnh tiến cộng b).`,
        solution: `
- Gọi $C_i$ là nhiệt độ đo lần thứ $i$ theo thang Celsius, $F_i$ là nhiệt độ theo thang Fahrenheit. Ta có $F_i = 1.8 C_i + 32$.
- Theo tính chất của các số đặc trưng:
  + Số trung bình bị tác động bởi cả phép nhân và phép cộng: 
    $\bar{F} = 1.8\bar{C} + 32$
    Thay $\bar{C} = 25$: $\bar{F} = 1.8(25) + 32 = 45 + 32 = 77 \ (^\circ F)$.
  + Phương sai chỉ bị tác động bởi phép nhân (co giãn), không bị tác động bởi phép cộng (dịch chuyển):
    $s_F^2 = (1.8)^2 \cdot s_C^2$
    Thay $s_C^2 = 4$: $s_F^2 = 3.24 \times 4 = 12.96$.
- Kết luận: Nhiệt độ trung bình mới là $77^\circ F$, phương sai mới là $12.96$.
        `
    },
    "MATH10-PRAC-CH5-11": {
        level: `Vận dụng cao`,
        topic: `Trung bình gộp`,
        question: `Lớp 10A có 40 học sinh, điểm trung bình môn Toán là 7.0. Lớp 10B có 45 học sinh, điểm trung bình môn Toán là 7.5. Nếu gộp chung toàn bộ học sinh hai lớp lại, điểm trung bình của cả 85 học sinh là bao nhiêu (làm tròn đến 2 chữ số thập phân)?`,
        hint: `Chìa khóa tư duy: Số trung bình gộp không phải là trung bình cộng của 2 số trung bình. Phải tính tổng điểm của từng lớp rồi chia cho tổng số học sinh.`,
        solution: `
- Tổng điểm của tất cả học sinh lớp 10A là: $S_A = 40 \times 7.0 = 280$ (điểm).
- Tổng điểm của tất cả học sinh lớp 10B là: $S_B = 45 \times 7.5 = 337.5$ (điểm).
- Tổng điểm của cả hai lớp: $S_{total} = S_A + S_B = 280 + 337.5 = 617.5$ (điểm).
- Tổng số học sinh của cả hai lớp: $N = 40 + 45 = 85$ (học sinh).
- Điểm trung bình của cả 85 học sinh: 
  $\bar{x}_{gop} = \frac{617.5}{85} \approx 7.26$ (điểm).
- Kết luận: Điểm trung bình khi gộp hai lớp là $7.26$.
        `
    },
    "MATH10-PRAC-CH5-12": {
        level: `Vận dụng cao`,
        topic: `Đánh giá sự thay đổi của phương sai`,
        question: `Một nhóm 10 học sinh có điểm trung bình kiểm tra là 7.0 và phương sai là 2.0. Có thêm một học sinh thứ 11 cũng có điểm đúng bằng 7.0 được đưa vào nhóm. Hỏi điểm trung bình và phương sai của nhóm 11 học sinh mới này sẽ thay đổi thế nào so với lúc đầu? Tính chính xác phương sai mới.`,
        hint: `Chìa khóa tư duy: Tổng số liệu tăng thêm 7, chia cho n=11 nên trung bình không đổi. Tuy nhiên, độ lệch của học sinh mới so với trung bình là 0, nên tổng bình phương độ lệch không đổi nhưng mẫu số n tăng lên, làm phương sai giảm.`,
        solution: `
- **Tính điểm trung bình mới:**
  Tổng điểm 10 học sinh cũ: $10 \times 7.0 = 70$.
  Tổng điểm 11 học sinh mới: $70 + 7.0 = 77$.
  Điểm trung bình mới: $\bar{x}' = \frac{77}{11} = 7.0$. (Điểm trung bình không thay đổi).
- **Tính phương sai mới:**
  Công thức phương sai cũ: $s^2 = \frac{\sum_{i=1}^{10} (x_i - 7)^2}{10} = 2.0$.
  Suy ra, tổng bình phương các độ lệch cũ: $\sum_{i=1}^{10} (x_i - 7)^2 = 20$.
  Học sinh thứ 11 có điểm $x_{11} = 7.0$. Độ lệch của học sinh này: $(x_{11} - 7)^2 = (7 - 7)^2 = 0$.
  Tổng bình phương các độ lệch mới cho 11 người: $20 + 0 = 20$.
  Phương sai mới: $s'^2 = \frac{20}{11} \approx 1.82$.
- Kết luận: Trung bình không đổi, phương sai giảm xuống còn khoảng $1.82$ (vì có thêm một giá trị tập trung đúng vào trung bình làm độ phân tán chung giảm).
        `
    },
    "MATH10-PRAC-CH5-13": {
        level: `Vận dụng cao`,
        topic: `Biện luận thêm dữ liệu ảnh hưởng Trung vị`,
        question: `Mức lương của 6 nhân viên trong một tổ là: $7, 8, 8, 9, 10, 15$ (triệu đồng). Nếu có một nhân viên mới chuyển đến tổ có mức lương là $x$ (triệu đồng), tìm khoảng giá trị của $x$ để trung vị của tổ 7 người mới không thay đổi so với tổ 6 người cũ.`,
        hint: `Chìa khóa tư duy: Tính trung vị của 6 người cũ. Dãy mới có 7 người (n lẻ) nên trung vị sẽ là số hạng thứ 4 (đã xếp thứ tự). Biện luận vị trí của $x$ để số thứ 4 bằng trung vị cũ.`,
        solution: `
- Dãy lương cũ (6 người): $7, 8, 8, 9, 10, 15$.
  Trung vị cũ: Nằm giữa 8 và 9 $\Rightarrow M_e = \frac{8+9}{2} = 8.5$.
- Khi thêm $x$, dãy có 7 người. Trung vị mới sẽ là số hạng ở vị trí thứ 4 sau khi sắp xếp tăng dần.
- Đề yêu cầu trung vị mới KHÔNG thay đổi, tức là trung vị mới phải bằng $8.5$.
- Tuy nhiên, trong 1 dãy số liệu gồm 7 giá trị thực, trung vị là 1 phần tử của dãy (số thứ 4). Mức lương đều là các số (nếu có 8.5 thì x phải là 8.5).
  Hãy thử: Nếu trung vị = 8.5 thì phần tử thứ 4 phải là 8.5. 
  Các số có sẵn: $7, 8, 8, 9, 10, 15$.
  Nếu $x = 8.5$, dãy sắp xếp là $7, 8, 8, 8.5, 9, 10, 15$. Số thứ 4 là $8.5$. Thỏa mãn.
  Nếu $x < 8.5$ (vd 8): dãy là $7, 8, 8, 8, 9, 10, 15 \Rightarrow$ số thứ 4 là 8 (Sai).
  Nếu $x > 8.5$ (vd 9): dãy là $7, 8, 8, 9, 9, 10, 15 \Rightarrow$ số thứ 4 là 9 (Sai).
- Kết luận: $x$ chỉ có thể nhận một giá trị duy nhất là $x = 8.5$ thì trung vị mới không thay đổi.
        `
    },
    "MATH10-PRAC-CH5-14": {
        level: `Vận dụng cao`,
        topic: `Hàm phương sai Min`,
        question: `Cho mẫu số liệu gồm 5 giá trị: $2, 4, 6, 8, x$. Tìm giá trị của $x$ để phương sai của mẫu số liệu này đạt giá trị nhỏ nhất.`,
        hint: `Chìa khóa tư duy: Thiết lập công thức phương sai theo biến $x$. Hoặc dùng định lý: Trong các số $x$, để phương sai đạt Min thì $x$ phải bằng giá trị trung bình của các phần tử còn lại, hoặc làm tính toán tam thức bậc hai.`,
        solution: `
- **Cách 1: Tính toán đại số (Tam thức bậc hai):**
  $\bar{x} = \frac{2+4+6+8+x}{5} = \frac{20+x}{5} = 4 + 0.2x$.
  Công thức tính phương sai biến đổi: $s^2 = \frac{x_1^2 + ... + x_n^2}{n} - (\bar{x})^2$.
  $s^2 = \frac{2^2 + 4^2 + 6^2 + 8^2 + x^2}{5} - (4 + 0.2x)^2$
  $s^2 = \frac{120 + x^2}{5} - (16 + 1.6x + 0.04x^2)$
  $s^2 = 24 + 0.2x^2 - 16 - 1.6x - 0.04x^2 = 0.16x^2 - 1.6x + 8$.
  Đây là một parabol (hàm bậc 2) mở lên trên (hệ số $a=0.16 > 0$).
  Phương sai đạt Min tại hoành độ đỉnh: $x = -\frac{b}{2a} = -\frac{-1.6}{2 \times 0.16} = \frac{1.6}{0.32} = 5$.

- **Cách 2: Ứng dụng lý thuyết:**
  Phương sai đo sự phân tán của các số liệu xung quanh trung bình. Một số mới đưa vào sẽ làm phương sai nhỏ nhất khi nó không tạo ra thêm bất kỳ sự phân tán (độ lệch) nào. Điều đó xảy ra khi $x$ bằng trung bình cộng của các số liệu đã có.
  $\Rightarrow x = \frac{2+4+6+8}{4} = \frac{20}{4} = 5$.
- Kết luận: Khi $x = 5$ thì phương sai đạt giá trị nhỏ nhất.
        `
    },
    "MATH10-PRAC-CH5-15": {
        level: `Vận dụng cao`,
        topic: `Tối ưu hóa tổng bình phương khoảng cách`,
        question: `Dọc theo một con đường thẳng có 4 siêu thị nằm ở các vị trí tọa độ (tính bằng km) lần lượt là: $A(2), B(5), C(7), D(10)$. Một công ty vận chuyển muốn đặt một kho hàng tại vị trí tọa độ $x$ trên đường sao cho tổng bình phương khoảng cách từ kho đến 4 siêu thị là nhỏ nhất. Tìm vị trí $x$ đó.`,
        hint: `Chìa khóa tư duy: Tổng bình phương khoảng cách chính là hàm $S = \sum (x_i - x)^2$. Theo tính chất thống kê, hàm này đạt Min khi $x$ là số trung bình của các $x_i$.`,
        solution: `
- Khoảng cách từ kho hàng (vị trí $x$) đến siêu thị $i$ là $d_i = |x_i - x|$.
- Tổng bình phương khoảng cách là hàm số:
  $S(x) = (2-x)^2 + (5-x)^2 + (7-x)^2 + (10-x)^2$
- Khai triển và rút gọn:
  $S(x) = 4 - 4x + x^2 + 25 - 10x + x^2 + 49 - 14x + x^2 + 100 - 20x + x^2$
  $S(x) = 4x^2 - 48x + 178$.
- Tìm Min của tam thức bậc hai $S(x)$:
  $x = -\frac{b}{2a} = -\frac{-48}{2 \times 4} = \frac{48}{8} = 6$.
- *(Hoặc giải nhanh bằng tính chất của Thống kê: Trung bình $\bar{x} = \frac{2+5+7+10}{4} = \frac{24}{4} = 6$. Tổng các bình phương độ lệch luôn đạt Min tại số trung bình).*
- Kết luận: Công ty nên đặt kho hàng tại vị trí km số $6$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_PRACTICE_CH5;
}
