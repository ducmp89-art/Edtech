/* ==========================================================================
   S-NOTE 2026 - HỆ THỐNG BÀI TẬP ÔN LUYỆN TOÁN 10 MASTER
   Chương IX: Tính xác suất theo định nghĩa cổ điển
   Cấu trúc: 20 Bài tập (10 Vận dụng + 10 Vận dụng cao)
   (Định dạng backtick chuẩn hóa, an toàn cho render MathJax)
   ========================================================================== */

const DATA_PRACTICE_TOAN10_CH9 = {
    "MATH10-PRAC-CH9-01": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Gieo xúc xắc cơ bản`,
        question: String.raw`Gieo một con xúc xắc cân đối và đồng chất 2 lần liên tiếp. Tính xác suất để tổng số chấm xuất hiện trong hai lần gieo bằng 8.`,
        hint: String.raw`Chìa khóa tư duy: Không gian mẫu $n(\Omega) = 6 \times 6 = 36$. Liệt kê các cặp $(a, b)$ sao cho $a+b=8$ với $1 \le a, b \le 6$.`,
        solution: String.raw`
- Không gian mẫu khi gieo xúc xắc 2 lần là: $n(\Omega) = 6 \times 6 = 36$.
- Gọi A là biến cố "Tổng số chấm xuất hiện bằng 8".
- Các kết quả thuận lợi cho A là các cặp $(a, b)$ sao cho $a + b = 8$:
  $A = \{(2, 6), (3, 5), (4, 4), (5, 3), (6, 2)\}$.
- Số phần tử của A là $n(A) = 5$.
- Xác suất của biến cố A: $P(A) = \frac{n(A)}{n(\Omega)} = \frac{5}{36}$.
- Kết luận: $P(A) = \frac{5}{36}$.
        `
    },
    "MATH10-PRAC-CH9-02": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Bốc vật phẩm (Biến cố hợp)`,
        question: String.raw`Một hộp chứa 5 viên bi đỏ và 4 viên bi xanh. Lấy ngẫu nhiên đồng thời 3 viên bi. Tính xác suất để 3 viên bi lấy ra có cùng màu.`,
        hint: String.raw`Chìa khóa tư duy: "Cùng màu" nghĩa là (3 đỏ HOẶC 3 xanh). Dùng quy tắc cộng xác suất (hoặc cộng số trường hợp thuận lợi).`,
        solution: String.raw`
- Tổng số bi trong hộp là $5 + 4 = 9$ viên.
- Hành động: Lấy 3 viên bi từ 9 viên. 
  $\Rightarrow n(\Omega) = C_9^3 = 84$.
- Gọi B là biến cố "3 viên bi lấy ra có cùng màu". 
  Biến cố B xảy ra 2 trường hợp xung khắc:
  + TH1: Lấy được 3 viên đỏ $\Rightarrow$ có $C_5^3 = 10$ cách.
  + TH2: Lấy được 3 viên xanh $\Rightarrow$ có $C_4^3 = 4$ cách.
- Số kết quả thuận lợi cho B: $n(B) = 10 + 4 = 14$.
- Xác suất của B: $P(B) = \frac{14}{84} = \frac{1}{6}$.
- Kết luận: $P(B) = \frac{1}{6}$.
        `
    },
    "MATH10-PRAC-CH9-03": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Sử dụng biến cố đối (Tính chẵn lẻ)`,
        question: String.raw`Từ các thẻ được đánh số từ 1 đến 20, rút ngẫu nhiên 2 thẻ. Tính xác suất để tích của 2 số ghi trên thẻ là một số chẵn.`,
        hint: String.raw`Chìa khóa tư duy: Tích 2 số là chẵn khi có ÍT NHẤT 1 số chẵn. Dùng biến cố đối "Tích 2 số là lẻ" (cả 2 số đều lẻ) để tính cho nhanh.`,
        solution: String.raw`
- Tập hợp thẻ từ 1 đến 20 có 10 số chẵn và 10 số lẻ.
- Rút 2 thẻ từ 20 thẻ $\Rightarrow n(\Omega) = C_{20}^2 = 190$.
- Gọi C là biến cố "Tích của 2 số là số chẵn".
- Biến cố đối $\overline{C}$: "Tích của 2 số là số lẻ". 
  Điều này chỉ xảy ra khi cả 2 thẻ rút ra đều là số lẻ.
  $\Rightarrow n(\overline{C}) = C_{10}^2 = 45$.
- Xác suất của biến cố đối: $P(\overline{C}) = \frac{45}{190} = \frac{9}{38}$.
- Vậy $P(C) = 1 - P(\overline{C}) = 1 - \frac{9}{38} = \frac{29}{38}$.
- Kết luận: $P(C) = \frac{29}{38}$.
        `
    },
    "MATH10-PRAC-CH9-04": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Gieo đồng xu nhiều lần`,
        question: String.raw`Tung một đồng xu cân đối và đồng chất 4 lần liên tiếp. Tính xác suất để có đúng 2 lần xuất hiện mặt ngửa (N).`,
        hint: String.raw`Chìa khóa tư duy: $n(\Omega) = 2^4 = 16$. Số cách để có đúng 2 mặt N trong 4 vị trí tung là tổ hợp $C_4^2$.`,
        solution: String.raw`
- Mỗi lần tung đồng xu có 2 kết quả (S, N). Tung 4 lần liên tiếp:
  $n(\Omega) = 2 \times 2 \times 2 \times 2 = 2^4 = 16$.
- Gọi D là biến cố "Có đúng 2 lần xuất hiện mặt N".
- Một kết quả của D là một bộ gồm 2 chữ N và 2 chữ S (VD: NNSS, SNSN...).
- Việc tìm số phần tử của D chính là việc chọn 2 vị trí (trong 4 vị trí) để đặt mặt Ngửa (N), các vị trí còn lại tự động là mặt Sấp (S).
- Suy ra $n(D) = C_4^2 = 6$.
- Xác suất: $P(D) = \frac{6}{16} = \frac{3}{8}$.
- Kết luận: $P(D) = \frac{3}{8}$.
        `
    },
    "MATH10-PRAC-CH9-05": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Biến cố đối trong bài toán chọn nhóm`,
        question: String.raw`Một câu lạc bộ có 20 nam và 15 nữ. Người ta cần chọn ra một ban đại diện gồm 4 người. Tính xác suất để ban đại diện có cả nam và nữ.`,
        hint: String.raw`Chìa khóa tư duy: "Có cả nam và nữ" $\Rightarrow$ Biến cố đối là "Chỉ có nam" HOẶC "Chỉ có nữ".`,
        solution: String.raw`
- Tổng số thành viên: $20 + 15 = 35$ người.
- Chọn 4 người từ 35 người: $n(\Omega) = C_{35}^4 = 52360$.
- Gọi E là biến cố "Ban đại diện có cả nam và nữ".
- Biến cố đối $\overline{E}$ là "Ban đại diện chỉ có nam hoặc chỉ có nữ".
  + Số cách chọn toàn nam: $C_{20}^4 = 4845$.
  + Số cách chọn toàn nữ: $C_{15}^4 = 1365$.
  + $n(\overline{E}) = 4845 + 1365 = 6210$.
- $P(\overline{E}) = \frac{6210}{52360} = \frac{621}{5236}$.
- $P(E) = 1 - P(\overline{E}) = 1 - \frac{621}{5236} = \frac{4615}{5236} \approx 0.881$.
- Kết luận: Xác suất cần tìm là $\frac{4615}{5236}$.
        `
    },
    "MATH10-PRAC-CH9-06": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Xác suất tạo lập số`,
        question: String.raw`Từ các chữ số $1, 2, 3, 4, 5, 6$, gọi $S$ là tập hợp các số tự nhiên có 3 chữ số đôi một khác nhau lập từ các chữ số trên. Chọn ngẫu nhiên 1 số từ $S$. Tính xác suất để số được chọn nhỏ hơn 400.`,
        hint: String.raw`Chìa khóa tư duy: $n(\Omega)$ là tổng số các số có 3 chữ số khác nhau ($A_6^3$). $n(A)$ là số các số có 3 chữ số khác nhau và chữ số hàng trăm $a < 4$.`,
        solution: String.raw`
- **Tính $n(\Omega)$:**
  Tập $S$ gồm các số có dạng $\overline{abc}$ khác nhau. 
  $n(\Omega) = A_6^3 = 120$ (số).
- **Tính $n(F)$:**
  Gọi F là biến cố "Số chọn được nhỏ hơn 400".
  Số có dạng $\overline{abc} < 400 \Rightarrow a \in \{1, 2, 3\}$.
  + Chọn a: có 3 cách.
  + Chọn b, c từ 5 chữ số còn lại: có $A_5^2 = 20$ cách.
  $n(F) = 3 \times 20 = 60$.
- Xác suất: $P(F) = \frac{60}{120} = \frac{1}{2}$.
- Kết luận: $P(F) = \frac{1}{2}$.
        `
    },
    "MATH10-PRAC-CH9-07": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Bốc vật phẩm từ 2 hộp (Quy tắc nhân)`,
        question: String.raw`Có hai hộp bi. Hộp thứ nhất chứa 3 bi đỏ và 2 bi xanh. Hộp thứ hai chứa 4 bi đỏ và 1 bi xanh. Lấy ngẫu nhiên từ mỗi hộp ra 1 viên bi. Tính xác suất để 2 viên bi lấy ra khác màu.`,
        hint: String.raw`Chìa khóa tư duy: Vì bốc từ 2 hộp độc lập nên $n(\Omega) = 5 \times 5 = 25$. Khác màu có 2 TH: (Đỏ hộp 1, Xanh hộp 2) hoặc (Xanh hộp 1, Đỏ hộp 2).`,
        solution: String.raw`
- Số phần tử không gian mẫu: Lấy 1 viên từ hộp 1 (5 cách), lấy 1 viên từ hộp 2 (5 cách).
  $\Rightarrow n(\Omega) = C_5^1 \times C_5^1 = 25$.
- Gọi G là biến cố "2 viên bi lấy ra khác màu". G gồm 2 trường hợp:
  + TH1: Hộp 1 lấy Đỏ, hộp 2 lấy Xanh.
    Số cách: $C_3^1 \times C_1^1 = 3 \times 1 = 3$.
  + TH2: Hộp 1 lấy Xanh, hộp 2 lấy Đỏ.
    Số cách: $C_2^1 \times C_4^1 = 2 \times 4 = 8$.
- $n(G) = 3 + 8 = 11$.
- Xác suất: $P(G) = \frac{11}{25}$.
- Kết luận: Xác suất cần tìm là $0.44$.
        `
    },
    "MATH10-PRAC-CH9-08": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Xác suất không gian số nguyên`,
        question: String.raw`Chọn ngẫu nhiên một số nguyên dương từ 100 đến 999. Tính xác suất để số được chọn có các chữ số đôi một khác nhau.`,
        hint: String.raw`Chìa khóa tư duy: Không gian mẫu là tổng các số từ 100 đến 999. Biến cố là các số có 3 chữ số khác nhau (dùng quy tắc đếm có số 0).`,
        solution: String.raw`
- **Tính $n(\Omega)$:**
  Từ 100 đến 999 có: $999 - 100 + 1 = 900$ (số).
- **Tính $n(H)$:**
  Gọi H là biến cố "Số được chọn có các chữ số đôi một khác nhau".
  Số có dạng $\overline{abc}$ với $a \neq 0$ và $a, b, c$ phân biệt.
  + Chọn a: 9 cách (từ 1 đến 9).
  + Chọn b: 9 cách (khác a, có thể bằng 0).
  + Chọn c: 8 cách (khác a, b).
  $n(H) = 9 \times 9 \times 8 = 648$ (số).
- Xác suất: $P(H) = \frac{648}{900} = \frac{72}{100} = \frac{18}{25}$.
- Kết luận: $P(H) = 0.72$.
        `
    },
    "MATH10-PRAC-CH9-09": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Biến cố độc lập (Bắn súng)`,
        question: String.raw`Hai xạ thủ A và B cùng bắn vào một tấm bia, mỗi người bắn một viên đạn độc lập. Xác suất bắn trúng của A là 0.7 và của B là 0.8. Tính xác suất để có đúng một người bắn trúng bia.`,
        hint: String.raw`Chìa khóa tư duy: "Đúng 1 người trúng" gồm 2 trường hợp: (A trúng VÀ B trượt) HOẶC (A trượt VÀ B trúng).`,
        solution: String.raw`
- Gọi $A, B$ lần lượt là biến cố "Xạ thủ A trúng", "Xạ thủ B trúng".
  Theo giả thiết: $P(A) = 0.7 \Rightarrow P(\overline{A}) = 0.3$.
  Và $P(B) = 0.8 \Rightarrow P(\overline{B}) = 0.2$.
- Gọi K là biến cố "Có đúng một người trúng bia".
- $K = (A \cap \overline{B}) \cup (\overline{A} \cap B)$.
- Vì các lần bắn là độc lập nên:
  $P(K) = P(A) \cdot P(\overline{B}) + P(\overline{A}) \cdot P(B)$
  $P(K) = 0.7 \times 0.2 + 0.3 \times 0.8$
  $P(K) = 0.14 + 0.24 = 0.38$.
- Kết luận: Xác suất có đúng 1 người bắn trúng là $0.38$.
        `
    },
    "MATH10-PRAC-CH9-10": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Xếp hàng ngang`,
        question: String.raw`Xếp 5 học sinh A, B, C, D, E vào một chiếc ghế dài gồm 5 chỗ ngồi. Tính xác suất để hai học sinh A và B luôn ngồi cạnh nhau.`,
        hint: String.raw`Chìa khóa tư duy: $n(\Omega) = 5!$. Buộc A và B thành 1 khối để tính $n(L)$.`,
        solution: String.raw`
- Không gian mẫu (xếp 5 người vào 5 ghế): $n(\Omega) = P_5 = 5! = 120$.
- Gọi L là biến cố "A và B ngồi cạnh nhau".
- Buộc A và B lại thành 1 "người kép". Lúc này ta có 4 "người" (gồm khối AB và 3 người C, D, E).
- Xếp 4 "người" này vào 4 vị trí: có $4! = 24$ cách.
- Bên trong khối AB, hai bạn A và B có thể hoán vị cho nhau: có $2! = 2$ cách.
- Số cách xếp để A và B cạnh nhau là: $n(L) = 24 \times 2 = 48$.
- Xác suất: $P(L) = \frac{48}{120} = \frac{2}{5} = 0.4$.
- Kết luận: $P(L) = 0.4$.
        `
    },
    "MATH10-PRAC-CH9-11": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Xác suất lập số và Dấu hiệu chia hết`,
        question: String.raw`Từ các chữ số $0, 1, 2, 3, 4, 5, 6$, người tâm lập ra tất cả các số tự nhiên có 4 chữ số đôi một khác nhau. Lấy ngẫu nhiên 1 số từ các số vừa lập. Tính xác suất để số được lấy chia hết cho 5.`,
        hint: String.raw`Chìa khóa tư duy: Lập số 4 chữ số từ 7 số có 0. Chia hết cho 5 thì tận cùng là 0 hoặc 5. Phải chia 2 trường hợp để đếm cẩn thận (vì 0 đứng cuối thì số hàng nghìn thoải mái).`,
        solution: String.raw`
**Bước 1: Tính số phần tử không gian mẫu**
- Số tự nhiên 4 chữ số khác nhau $\overline{abcd} (a \neq 0)$.
  + Chọn a: 6 cách (khác 0).
  + Chọn b, c, d: $A_6^3 = 120$ cách.
  $\Rightarrow n(\Omega) = 6 \times 120 = 720$.

**Bước 2: Số kết quả thuận lợi**
- Gọi M là biến cố "Số rút được chia hết cho 5".
  Suy ra $d \in \{0, 5\}$. Chia 2 trường hợp:
  + TH1: $d = 0$ (1 cách).
    Chọn a, b, c từ 6 số còn lại (từ 1 đến 6): $A_6^3 = 120$ cách.
    Có $1 \times 120 = 120$ số.
  + TH2: $d = 5$ (1 cách).
    Chọn a $\neq 0, a \neq 5$: có 5 cách.
    Chọn b, c từ 5 số còn lại: $A_5^2 = 20$ cách.
    Có $1 \times 5 \times 20 = 100$ số.
  $n(M) = 120 + 100 = 220$.

**Bước 3: Tính xác suất**
- $P(M) = \frac{220}{720} = \frac{11}{36}$.
- Kết luận: Xác suất là $\frac{11}{36}$.
        `
    },
    "MATH10-PRAC-CH9-12": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Xác suất chọn vật phẩm phức hợp`,
        question: String.raw`Một hộp đựng 4 viên bi đỏ, 5 viên bi xanh và 6 viên bi vàng. Lấy ngẫu nhiên ra 4 viên bi. Tính xác suất để 4 viên bi lấy ra có đủ cả 3 màu.`,
        hint: String.raw`Chìa khóa tư duy: Đủ 3 màu trong 4 viên bi thì các cấu hình màu sẽ là (2Đ-1X-1V), (1Đ-2X-1V) hoặc (1Đ-1X-2V). Tính tổ hợp từng TH rồi cộng lại.`,
        solution: String.raw`
- Tổng số bi là $4 + 5 + 6 = 15$.
- Không gian mẫu: Lấy 4 bi từ 15 bi $\Rightarrow n(\Omega) = C_{15}^4 = 1365$.
- Gọi N là biến cố "4 viên bi có đủ 3 màu". Các trường hợp của N:
  + TH1: 2 Đỏ, 1 Xanh, 1 Vàng.
    Số cách: $C_4^2 \times C_5^1 \times C_6^1 = 6 \times 5 \times 6 = 180$.
  + TH2: 1 Đỏ, 2 Xanh, 1 Vàng.
    Số cách: $C_4^1 \times C_5^2 \times C_6^1 = 4 \times 10 \times 6 = 240$.
  + TH3: 1 Đỏ, 1 Xanh, 2 Vàng.
    Số cách: $C_4^1 \times C_5^1 \times C_6^2 = 4 \times 5 \times 15 = 300$.
- $n(N) = 180 + 240 + 300 = 720$.
- Xác suất: $P(N) = \frac{720}{1365} = \frac{48}{91}$.
- Kết luận: $P(N) = \frac{48}{91}$.
        `
    },
    "MATH10-PRAC-CH9-13": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Xác suất Hình học (Đa giác đều)`,
        question: String.raw`Cho đa giác đều $(H)$ có 12 đỉnh nội tiếp đường tròn. Chọn ngẫu nhiên 3 đỉnh của $(H)$. Tính xác suất để 3 đỉnh được chọn tạo thành một tam giác không phải là tam giác vuông.`,
        hint: String.raw`Chìa khóa tư duy: Dùng biến cố đối. Xs = 1 - P(Tam giác vuông). Tam giác vuông khi 1 cạnh là đường kính. Đa giác 12 đỉnh có 6 đường kính.`,
        solution: String.raw`
- Số cách chọn 3 đỉnh từ 12 đỉnh: $n(\Omega) = C_{12}^3 = 220$.
- Gọi X là biến cố "3 đỉnh tạo thành tam giác KHÔNG vuông".
  Xét biến cố đối $\overline{X}$ là "3 đỉnh tạo thành tam giác vuông".
- Một tam giác nội tiếp đường tròn là tam giác vuông khi và chỉ khi nó có 1 cạnh là đường kính của đường tròn đó.
- Đa giác đều 12 đỉnh có $\frac{12}{2} = 6$ đường chéo đi qua tâm (đường kính).
- Để tạo 1 tam giác vuông:
  + Chọn 1 cạnh là đường kính: 6 cách.
  + Chọn 1 đỉnh thứ ba (trong 10 đỉnh còn lại): 10 cách.
  $\Rightarrow n(\overline{X}) = 6 \times 10 = 60$ tam giác vuông.
- Xác suất của $\overline{X}$: $P(\overline{X}) = \frac{60}{220} = \frac{3}{11}$.
- Xác suất của X: $P(X) = 1 - P(\overline{X}) = 1 - \frac{3}{11} = \frac{8}{11}$.
- Kết luận: Xác suất cần tìm là $\frac{8}{11}$.
        `
    },
    "MATH10-PRAC-CH9-14": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Xếp xen kẽ`,
        question: String.raw`Có 4 nam sinh và 4 nữ sinh xếp thành một hàng ngang để chụp ảnh. Tính xác suất để nam nữ đứng xen kẽ nhau.`,
        hint: String.raw`Chìa khóa tư duy: Nam nữ xen kẽ có 2 mẫu: (NLNLNLNL) hoặc (LNLNLNLN). Xếp nam vào 4 chỗ và nữ vào 4 chỗ.`,
        solution: String.raw`
- Không gian mẫu xếp 8 người: $n(\Omega) = 8! = 40320$.
- Gọi Y là biến cố "Nam và nữ đứng xen kẽ nhau".
- Có 2 sơ đồ xếp xen kẽ:
  + Dạng 1: Nam - Nữ - Nam - Nữ - Nam - Nữ - Nam - Nữ
  + Dạng 2: Nữ - Nam - Nữ - Nam - Nữ - Nam - Nữ - Nam
- Đối với mỗi dạng:
  + Xếp 4 nam vào 4 vị trí quy định: có $4!$ cách.
  + Xếp 4 nữ vào 4 vị trí quy định: có $4!$ cách.
  + Số cách xếp cho 1 dạng là: $4! \times 4! = 24 \times 24 = 576$.
- Tổng số kết quả thuận lợi cho Y: $n(Y) = 2 \times 576 = 1152$.
- Xác suất: $P(Y) = \frac{1152}{40320} = \frac{1}{35}$.
- Kết luận: Xác suất cần tìm là $\frac{1}{35}$.
        `
    },
    "MATH10-PRAC-CH9-15": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Chia hết cơ bản trong Xác suất`,
        question: String.raw`Một hộp chứa các thẻ đánh số từ 1 đến 50. Rút ngẫu nhiên 2 thẻ. Tính xác suất để tổng hai số trên hai thẻ là một số chia hết cho 3.`,
        hint: String.raw`Chìa khóa tư duy: Chia 50 số thành 3 tập theo số dư khi chia cho 3: Tập $D_0, D_1, D_2$. Tổng 2 số chia hết cho 3 khi (2 số từ $D_0$) hoặc (1 số từ $D_1$ và 1 số từ $D_2$).`,
        solution: String.raw`
- Không gian mẫu: $n(\Omega) = C_{50}^2 = 1225$.
- Chia tập $S = \{1, 2, ..., 50\}$ thành 3 nhóm:
  + $D_0$ (chia hết 3): $3, 6, ..., 48 \Rightarrow 16$ số.
  + $D_1$ (chia 3 dư 1): $1, 4, ..., 49 \Rightarrow 17$ số.
  + $D_2$ (chia 3 dư 2): $2, 5, ..., 50 \Rightarrow 17$ số.
- Gọi Z là biến cố "Tổng 2 số chia hết cho 3". Có 2 trường hợp:
  + TH1: 2 số cùng thuộc $D_0$. Số cách chọn: $C_{16}^2 = 120$.
  + TH2: 1 số thuộc $D_1$ và 1 số thuộc $D_2$. Số cách chọn: $C_{17}^1 \times C_{17}^1 = 17 \times 17 = 289$.
- (Hai số thuộc cùng $D_1$ thì dư 2, cùng $D_2$ thì dư 1 nên không thỏa).
- Tổng số kết quả thuận lợi: $n(Z) = 120 + 289 = 409$.
- Xác suất: $P(Z) = \frac{409}{1225}$.
- Kết luận: Xác suất là $\frac{409}{1225}$.
        `
    },
    "MATH10-PRAC-CH9-16": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Sơ đồ cây (Xác suất có điều kiện / Từng bước)`,
        question: String.raw`Một hộp A chứa 3 bi đỏ và 4 bi xanh. Một hộp B chứa 5 bi đỏ và 2 bi xanh. Một người lấy ngẫu nhiên 1 viên bi từ hộp A bỏ vào hộp B. Sau đó, từ hộp B lấy ngẫu nhiên 1 viên bi. Tính xác suất để viên bi lấy ra từ hộp B là bi đỏ.`,
        hint: String.raw`Chìa khóa tư duy: Dùng sơ đồ cây hoặc quy tắc xác suất toàn phần. Có 2 nhánh phụ thuộc vào viên bi bốc từ A sang B là màu gì. Nhớ cập nhật số lượng bi ở hộp B sau khi nhận thêm.`,
        solution: String.raw`
- Biến cố cần tính: "Lấy được bi đỏ từ hộp B (sau khi đã nhận 1 bi từ A)".
- Quá trình có 2 trường hợp (2 nhánh):
  **Nhánh 1: Bi chuyển từ A sang B là bi đỏ.**
  + Xác suất chuyển bi đỏ từ A: $P_1 = \frac{3}{7}$.
  + Lúc này hộp B có: $5+1=6$ đỏ, $2$ xanh (Tổng 8 viên).
  + Xác suất bốc bi đỏ từ B ở nhánh này: $P(Đ|nhánh 1) = \frac{6}{8} = \frac{3}{4}$.
  + Xác suất xảy ra nhánh 1 và bốc đỏ: $\frac{3}{7} \times \frac{3}{4} = \frac{9}{28}$.
  
  **Nhánh 2: Bi chuyển từ A sang B là bi xanh.**
  + Xác suất chuyển bi xanh từ A: $P_2 = \frac{4}{7}$.
  + Lúc này hộp B có: $5$ đỏ, $2+1=3$ xanh (Tổng 8 viên).
  + Xác suất bốc bi đỏ từ B ở nhánh này: $P(Đ|nhánh 2) = \frac{5}{8}$.
  + Xác suất xảy ra nhánh 2 và bốc đỏ: $\frac{4}{7} \times \frac{5}{8} = \frac{20}{56} = \frac{10}{28}$.
- Xác suất tổng cộng:
  $P = \frac{9}{28} + \frac{10}{28} = \frac{19}{28}$.
- Kết luận: Xác suất để viên bi bốc từ hộp B là màu đỏ là $\frac{19}{28}$.
        `
    },
    "MATH10-PRAC-CH9-17": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Xếp thang máy (Lũy thừa không gian mẫu)`,
        question: String.raw`Một tòa nhà có 7 tầng. Có 5 người cùng bước vào thang máy ở tầng 1. Xác suất để không có ai ra ở tầng 2 và mỗi người đều chọn ra ở một tầng khác nhau là bao nhiêu? (Biết từ tầng 2 đến tầng 7 đều có thể là nơi ra của mỗi người).`,
        hint: String.raw`Chìa khóa tư duy: Mỗi người có 6 lựa chọn ra (tầng 2 đến tầng 7) $\Rightarrow n(\Omega) = 6^5$. Biến cố là "Không ai chọn tầng 2" (còn 5 tầng) VÀ "Mỗi người 1 tầng khác nhau" (hoán vị).`,
        solution: String.raw`
- Thang máy có 6 tầng để ra (tầng 2 đến tầng 7).
- Không gian mẫu: Mỗi người có 6 cách chọn tầng để ra độc lập với nhau.
  $\Rightarrow n(\Omega) = 6 \times 6 \times 6 \times 6 \times 6 = 6^5 = 7776$.
- Gọi W là biến cố thỏa mãn yêu cầu:
  + "Không ai ra ở tầng 2": Vậy 5 người này chỉ ra ở các tầng 3, 4, 5, 6, 7 (có 5 tầng đích).
  + "Mỗi người ra 1 tầng khác nhau": Ta xếp 5 người vào đúng 5 tầng này, mỗi người một tầng.
  + Số cách xếp chính là Hoán vị của 5: $n(W) = P_5 = 5! = 120$.
- Xác suất của W:
  $P(W) = \frac{120}{7776} = \frac{5}{324}$.
- Kết luận: Xác suất cần tìm là $\frac{5}{324}$.
        `
    },
    "MATH10-PRAC-CH9-18": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Lập nhóm vợ chồng`,
        question: String.raw`Tham gia một buổi tiệc có 5 cặp vợ chồng. Người quản trò chọn ngẫu nhiên ra 4 người để lên sân khấu chơi trò chơi. Tính xác suất để 4 người được chọn không có cặp vợ chồng nào.`,
        hint: String.raw`Chìa khóa tư duy: Tổng số người là 10. Để 4 người không có cặp vợ chồng nào, tức là 4 người đó phải thuộc 4 "nhóm gia đình" khác nhau. Chọn 4 gia đình, mỗi gia đình chọn 1 đại diện.`,
        solution: String.raw`
- Tổng số người là $5 \times 2 = 10$ người.
- Chọn ngẫu nhiên 4 người: $n(\Omega) = C_{10}^4 = 210$.
- Gọi T là biến cố "4 người không tạo thành cặp vợ chồng nào".
- Để được như vậy, 4 người phải đến từ 4 cặp vợ chồng khác nhau.
- Các bước chọn thuận lợi cho T:
  + Bước 1: Chọn 4 cặp vợ chồng từ 5 cặp để lấy người (có $C_5^4 = 5$ cách).
  + Bước 2: Trong cặp thứ nhất, chọn 1 người (vợ hoặc chồng) $\Rightarrow 2$ cách.
  + Bước 3: Trong cặp thứ hai, chọn 1 người $\Rightarrow 2$ cách.
  + Bước 4: Trong cặp thứ ba, chọn 1 người $\Rightarrow 2$ cách.
  + Bước 5: Trong cặp thứ tư, chọn 1 người $\Rightarrow 2$ cách.
- Theo quy tắc nhân, số kết quả thuận lợi là:
  $n(T) = 5 \times 2 \times 2 \times 2 \times 2 = 5 \times 2^4 = 80$.
- Xác suất: $P(T) = \frac{80}{210} = \frac{8}{21}$.
- Kết luận: Xác suất cần tìm là $\frac{8}{21}$.
        `
    },
    "MATH10-PRAC-CH9-19": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Xác suất Rút bài Tú lơ khơ`,
        question: String.raw`Từ bộ bài tú lơ khơ 52 lá, người ta rút ngẫu nhiên đồng thời 4 lá bài. Tính xác suất để rút được 4 lá bài có cùng một số hoặc chữ (tức là rút được Tứ quý).`,
        hint: String.raw`Chìa khóa tư duy: Bộ bài có 13 "bộ tứ" (từ 2 đến A). Chọn ra 1 bộ tứ là xong.`,
        solution: String.raw`
- Không gian mẫu: Rút 4 lá từ 52 lá.
  $n(\Omega) = C_{52}^4 = 270725$.
- Gọi Q là biến cố "Rút được 4 lá tạo thành Tứ quý".
- Một bộ bài có 13 cấp độ (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A). 
  Mỗi cấp độ có đúng 4 lá bài mang đủ 4 chất (cơ, rô, chuồn, bích).
- Để rút được 4 lá tạo thành Tứ quý, ta chỉ việc chọn 1 cấp độ trong số 13 cấp độ đó, và lấy toàn bộ 4 lá bài của cấp độ ấy.
- Số kết quả thuận lợi: $n(Q) = C_{13}^1 = 13$ (cách).
- Xác suất: $P(Q) = \frac{13}{270725} = \frac{1}{20825}$.
- Kết luận: Xác suất rút được tứ quý là $\frac{1}{20825}$.
        `
    },
    "MATH10-PRAC-CH9-20": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Tổng hợp Xác suất (Lô hàng)`,
        question: String.raw`Một lô hàng gồm 20 sản phẩm, trong đó có 4 phế phẩm. Lấy ngẫu nhiên không hoàn lại từng sản phẩm một để kiểm tra. Tính xác suất để sản phẩm thứ ba được lấy ra là phế phẩm ĐẦU TIÊN được tìm thấy.`,
        hint: String.raw`Chìa khóa tư duy: Đọc kỹ "Thứ ba là phế phẩm ĐẦU TIÊN" tức là: Lần 1 lấy sản phẩm TỐT, Lần 2 lấy sản phẩm TỐT, Lần 3 lấy PHẾ PHẨM. Dùng quy tắc nhân xác suất cho các biến cố phụ thuộc.`,
        solution: String.raw`
- Lô hàng có 4 phế phẩm và 16 sản phẩm tốt.
- Biến cố V: "Lần 1 tốt, lần 2 tốt, lần 3 phế phẩm".
- Tính xác suất theo từng bước (không hoàn lại):
  + **Lần 1:** Lấy sản phẩm tốt. 
    Trong hộp có 16 tốt / 20 tổng. $\Rightarrow P_1 = \frac{16}{20} = \frac{4}{5}$.
  + **Lần 2:** Lấy sản phẩm tốt (sau khi đã lấy 1 tốt).
    Lúc này hộp còn 15 tốt / 19 tổng. $\Rightarrow P_2 = \frac{15}{19}$.
  + **Lần 3:** Lấy phế phẩm (sau khi lấy 2 tốt).
    Lúc này hộp còn 4 phế phẩm / 18 tổng. $\Rightarrow P_3 = \frac{4}{18} = \frac{2}{9}$.
- Theo quy tắc nhân xác suất cho các biến cố phụ thuộc, xác suất chung là:
  $P(V) = P_1 \times P_2 \times P_3 = \frac{4}{5} \times \frac{15}{19} \times \frac{2}{9}$.
- Rút gọn:
  $P(V) = \frac{4 \times 15 \times 2}{5 \times 19 \times 9} = \frac{120}{855} = \frac{8}{57}$.
- Kết luận: Xác suất cần tìm là $\frac{8}{57}$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_PRACTICE_CH9;
}