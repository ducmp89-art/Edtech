/* ==========================================================================
   S-NOTE 2026 - HỆ THỐNG BÀI TẬP ÔN LUYỆN TOÁN 10 MASTER
   Chương VIII: Đại số tổ hợp
   Cấu trúc: 20 Bài tập (10 Vận dụng + 10 Vận dụng cao)
   (Định dạng backtick chuẩn hóa, an toàn cho render MathJax)
   ========================================================================== */

const DATA_PRACTICE_CH8 = {
    "MATH10-PRAC-CH8-01": {
        level: `Vận dụng`,
        topic: `Quy tắc đếm cơ bản (Lập số)`,
        question: `Từ các chữ số $1, 2, 3, 4, 5, 6$, có thể lập được bao nhiêu số tự nhiên gồm 4 chữ số đôi một khác nhau và luôn có mặt chữ số 5?`,
        hint: `Chìa khóa tư duy: Bước 1: Chọn vị trí cho chữ số 5 (có 4 cách). Bước 2: Chọn 3 chữ số còn lại từ 5 chữ số $\{1, 2, 3, 4, 6\}$ xếp vào 3 vị trí trống (dùng $A_5^3$).`,
        solution: `
- Gọi số cần lập có dạng $\overline{a_1 a_2 a_3 a_4}$.
- **Bước 1:** Chọn vị trí cho chữ số 5.
  Vì số có 4 chữ số nên chữ số 5 có 4 cách đặt vị trí.
- **Bước 2:** Chọn và xếp 3 chữ số còn lại.
  Tập số còn lại 5 chữ số: $\{1, 2, 3, 4, 6\}$.
  Chọn 3 chữ số xếp vào 3 vị trí còn lại (có thứ tự): có $A_5^3 = 60$ cách.
- **Bước 3:** Áp dụng quy tắc nhân.
  Tổng số các số lập được là: $4 \times 60 = 240$ (số).
- Kết luận: Có 240 số tự nhiên thỏa mãn.
        `
    },
    "MATH10-PRAC-CH8-02": {
        level: `Vận dụng`,
        topic: `Tổ hợp (Lập nhóm)`,
        question: `Một tổ có 8 học sinh nam và 6 học sinh nữ. Giáo viên cần chọn ra một nhóm gồm 5 học sinh để tham gia lao động. Hỏi có bao nhiêu cách chọn nếu nhóm phải có đúng 2 học sinh nữ?`,
        hint: `Chìa khóa tư duy: Nhóm 5 học sinh có đúng 2 nữ $\Rightarrow$ phải có 3 nam. Chọn nữ dùng $C_6^2$, chọn nam dùng $C_8^3$. Nhân 2 kết quả lại.`,
        solution: `
- Nhóm 5 học sinh gồm đúng 2 nữ thì số học sinh nam phải là $5 - 2 = 3$ nam.
- Việc chọn học sinh được chia làm 2 công đoạn:
  + Công đoạn 1: Chọn 2 học sinh nữ từ 6 học sinh nữ $\Rightarrow$ Số cách chọn là $C_6^2 = 15$ cách.
  + Công đoạn 2: Chọn 3 học sinh nam từ 8 học sinh nam $\Rightarrow$ Số cách chọn là $C_8^3 = 56$ cách.
- Áp dụng quy tắc nhân, tổng số cách chọn là: $15 \times 56 = 840$ (cách).
- Kết luận: Có 840 cách chọn.
        `
    },
    "MATH10-PRAC-CH8-03": {
        level: `Vận dụng`,
        topic: `Chỉnh hợp (Xếp chỗ ngồi)`,
        question: `Có 6 hành khách bước lên một toa tàu có 10 ghế trống. Mỗi người ngồi một ghế. Hỏi có bao nhiêu cách xếp chỗ cho 6 hành khách này?`,
        hint: `Chìa khóa tư duy: Xếp 6 người vào 10 ghế tức là chọn 6 ghế và CÓ sắp xếp thứ tự cho những người ngồi. Dùng Chỉnh hợp $A_{10}^6$.`,
        solution: `
- Hành động xếp chỗ ngồi cho 6 người vào 10 ghế trống tương đương với việc: Chọn ra 6 cái ghế từ 10 cái ghế, sau đó sắp xếp 6 người vào 6 ghế đó (mỗi người ngồi một ghế khác nhau thì tạo ra một cách xếp khác nhau).
- Do có tính thứ tự (A ngồi ghế 1, B ngồi ghế 2 khác với A ngồi ghế 2, B ngồi ghế 1), ta sử dụng Chỉnh hợp.
- Số cách xếp là $A_{10}^6 = \frac{10!}{(10-6)!} = 10 \times 9 \times 8 \times 7 \times 6 \times 5 = 151200$.
- Kết luận: Có 151200 cách xếp chỗ.
        `
    },
    "MATH10-PRAC-CH8-04": {
        level: `Vận dụng`,
        topic: `Phương trình tổ hợp cơ bản`,
        question: `Tìm số nguyên dương $n$ thỏa mãn phương trình: $C_n^2 + A_n^2 = 9n$.`,
        hint: `Chìa khóa tư duy: Biến đổi $C_n^2 = \frac{n(n-1)}{2}$ và $A_n^2 = n(n-1)$. Điều kiện $n \ge 2, n \in \mathbb{N}$.`,
        solution: `
- Điều kiện: $n \ge 2$ và $n \in \mathbb{N}$.
- Áp dụng công thức Tổ hợp và Chỉnh hợp:
  $C_n^2 = \frac{n!}{2!(n-2)!} = \frac{n(n-1)}{2}$.
  $A_n^2 = \frac{n!}{(n-2)!} = n(n-1)$.
- Thay vào phương trình:
  $\frac{n(n-1)}{2} + n(n-1) = 9n$.
- Vì $n \ge 2$ nên $n > 0$, ta có thể chia cả 2 vế cho $n$:
  $\frac{n-1}{2} + n - 1 = 9$
  $\Leftrightarrow (n-1) \left(\frac{1}{2} + 1\right) = 9$
  $\Leftrightarrow (n-1) \cdot \frac{3}{2} = 9 \Leftrightarrow n - 1 = 6 \Leftrightarrow n = 7$.
- Đối chiếu điều kiện, $n = 7$ thỏa mãn.
- Kết luận: $n = 7$.
        `
    },
    "MATH10-PRAC-CH8-05": {
        level: `Vận dụng`,
        topic: `Khai triển Nhị thức Newton`,
        question: `Viết khai triển của biểu thức $(x - 2y)^4$.`,
        hint: `Chìa khóa tư duy: Dùng công thức khai triển lũy thừa 4: $(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$ với $a = x, b = -2y$. Chú ý dấu của $b$.`,
        solution: `
- Áp dụng công thức khai triển Nhị thức Newton cho $n=4$:
  $(a+b)^4 = C_4^0 a^4 + C_4^1 a^3 b + C_4^2 a^2 b^2 + C_4^3 a b^3 + C_4^4 b^4$
  $= a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$.
- Thay $a = x$ và $b = -2y$:
  $(x - 2y)^4 = x^4 + 4x^3(-2y) + 6x^2(-2y)^2 + 4x(-2y)^3 + (-2y)^4$
  $= x^4 - 8x^3y + 6x^2(4y^2) + 4x(-8y^3) + 16y^4$
  $= x^4 - 8x^3y + 24x^2y^2 - 32xy^3 + 16y^4$.
- Kết luận: Khai triển thu được là $x^4 - 8x^3y + 24x^2y^2 - 32xy^3 + 16y^4$.
        `
    },
    "MATH10-PRAC-CH8-06": {
        level: `Vận dụng`,
        topic: `Tìm hệ số trong Nhị thức Newton`,
        question: `Tìm hệ số của số hạng chứa $x^2$ trong khai triển của biểu thức $(3x - 1)^5$.`,
        hint: `Chìa khóa tư duy: Viết số hạng tổng quát $T_{k+1} = C_5^k (3x)^{5-k} (-1)^k$. Để chứa $x^2$ thì $5-k = 2 \Rightarrow k=3$.`,
        solution: `
- Số hạng tổng quát trong khai triển $(3x - 1)^5$ là:
  $T_{k+1} = C_5^k \cdot (3x)^{5-k} \cdot (-1)^k = C_5^k \cdot 3^{5-k} \cdot (-1)^k \cdot x^{5-k}$ (với $0 \le k \le 5, k \in \mathbb{N}$).
- Đề bài yêu cầu tìm số hạng chứa $x^2$, suy ra số mũ của $x$ phải bằng 2:
  $5 - k = 2 \Leftrightarrow k = 3$.
- Thay $k = 3$ vào phần hệ số của số hạng tổng quát:
  Hệ số = $C_5^3 \cdot 3^{5-3} \cdot (-1)^3 = C_5^3 \cdot 3^2 \cdot (-1)$
  $= 10 \cdot 9 \cdot (-1) = -90$.
- Kết luận: Hệ số của số hạng chứa $x^2$ là $-90$.
        `
    },
    "MATH10-PRAC-CH8-07": {
        level: `Vận dụng`,
        topic: `Biến cố đối trong bài toán đếm`,
        question: `Một hộp chứa 5 viên bi đỏ, 4 viên bi xanh và 3 viên bi vàng. Lấy ngẫu nhiên 3 viên bi. Hỏi có bao nhiêu cách lấy để trong 3 viên bi lấy ra có ít nhất 1 viên bi màu đỏ?`,
        hint: `Chìa khóa tư duy: "Có ít nhất 1" $\rightarrow$ Dùng phương pháp phần bù. Tổng số cách bốc 3 bi BẤT KỲ trừ đi số cách bốc 3 bi KHÔNG CÓ BI ĐỎ NÀO (chỉ bốc xanh và vàng).`,
        solution: `
- Tổng số bi trong hộp: $5 + 4 + 3 = 12$ viên.
- **Bước 1: Tính tổng số cách bốc 3 bi bất kỳ**
  Lấy 3 viên từ 12 viên: $C_{12}^3 = 220$ (cách).
- **Bước 2: Tính số cách bốc không có bi đỏ nào (Phần bù)**
  Không có bi đỏ nghĩa là cả 3 viên được lấy ra từ 7 viên bi còn lại (4 xanh + 3 vàng).
  Số cách lấy là: $C_7^3 = 35$ (cách).
- **Bước 3: Suy ra số cách thỏa mãn bài toán**
  Số cách lấy có ít nhất 1 bi đỏ = (Tổng số cách) - (Số cách không có bi đỏ)
  $= 220 - 35 = 185$ (cách).
- Kết luận: Có 185 cách.
        `
    },
    "MATH10-PRAC-CH8-08": {
        level: `Vận dụng`,
        topic: `Quy tắc đếm số tự nhiên (Có số 0)`,
        question: `Từ các chữ số $0, 1, 2, 3, 4, 5$, lập được bao nhiêu số tự nhiên lẻ gồm 3 chữ số đôi một khác nhau?`,
        hint: `Chìa khóa tư duy: Số tự nhiên $\overline{abc}$. Số lẻ $\Rightarrow c \in \{1, 3, 5\}$. Chữ số đầu $a \neq 0, a \neq c$. Chữ số giữa $b \neq a, b \neq c$.`,
        solution: `
- Gọi số cần lập là $\overline{abc}$ ($a \neq 0$, $a, b, c$ phân biệt).
- Để số là số lẻ, chữ số tận cùng $c$ phải là số lẻ. Tập số $\{0, 1, 2, 3, 4, 5\}$ có 3 chữ số lẻ là $\{1, 3, 5\}$.
- **Chọn c:** Có 3 cách.
- **Chọn a:** Chữ số $a$ phải khác $0$ và khác $c$.
  Tập có 6 chữ số, bỏ đi chữ số 0 và bỏ chữ số $c$ đã chọn $\Rightarrow a$ có 4 cách chọn.
- **Chọn b:** Chữ số $b$ chỉ cần khác $a$ và $c$ (b có thể bằng 0).
  Tập có 6 chữ số, bỏ đi chữ số $a$ và $c$ đã chọn $\Rightarrow b$ có 4 cách chọn.
- Áp dụng quy tắc nhân, tổng số các số lập được là:
  $3 \times 4 \times 4 = 48$ (số).
- Kết luận: Có 48 số tự nhiên thỏa mãn.
        `
    },
    "MATH10-PRAC-CH8-09": {
        level: `Vận dụng`,
        topic: `Tính tổng hệ số của Nhị thức`,
        question: `Tính tổng tất cả các hệ số trong khai triển của biểu thức $P(x) = (3x - 2)^5$.`,
        hint: `Chìa khóa tư duy: Tổng tất cả các hệ số trong khai triển của đa thức $P(x)$ bằng giá trị của đa thức đó khi thay $x = 1$.`,
        solution: `
- Ta có khai triển: $P(x) = a_5 x^5 + a_4 x^4 + a_3 x^3 + a_2 x^2 + a_1 x + a_0$.
- Yêu cầu bài toán là tính tổng $S = a_5 + a_4 + a_3 + a_2 + a_1 + a_0$.
- Nhận thấy, nếu thay $x = 1$ vào khai triển, ta sẽ được đúng tổng các hệ số:
  $P(1) = a_5(1)^5 + a_4(1)^4 + ... + a_0 = S$.
- Mặt khác, thay $x=1$ vào biểu thức ban đầu của $P(x)$:
  $P(1) = (3(1) - 2)^5 = (1)^5 = 1$.
- Kết luận: Tổng tất cả các hệ số trong khai triển là 1.
        `
    },
    "MATH10-PRAC-CH8-10": {
        level: `Vận dụng`,
        topic: `Số hạng không chứa x (Nhị thức Newton)`,
        question: `Tìm số hạng không chứa $x$ trong khai triển của $\left(2x^2 - \frac{1}{x}\right)^6$ (với $x \neq 0$).`,
        hint: `Chìa khóa tư duy: Viết số hạng tổng quát, tách hệ số và gộp lũy thừa của $x$ lại. Ép số mũ của $x$ bằng 0 để giải $k$, sau đó tính hệ số.`,
        solution: `
- Số hạng tổng quát là:
  $T_{k+1} = C_6^k (2x^2)^{6-k} \left(-\frac{1}{x}\right)^k$
- Tách hệ số và phần biến $x$:
  $T_{k+1} = C_6^k \cdot 2^{6-k} \cdot (x^2)^{6-k} \cdot (-1)^k \cdot (x^{-1})^k$
  $T_{k+1} = C_6^k \cdot 2^{6-k} \cdot (-1)^k \cdot x^{12-2k} \cdot x^{-k}$
  $T_{k+1} = C_6^k \cdot 2^{6-k} \cdot (-1)^k \cdot x^{12-3k}$.
- Để tìm số hạng không chứa $x$, phần số mũ của $x$ phải bằng 0:
  $12 - 3k = 0 \Leftrightarrow k = 4$.
- Thay $k=4$ vào phần hệ số để tìm số hạng:
  $T_5 = C_6^4 \cdot 2^{6-4} \cdot (-1)^4 = 15 \cdot 2^2 \cdot 1 = 15 \cdot 4 = 60$.
- Kết luận: Số hạng không chứa $x$ là 60.
        `
    },
    "MATH10-PRAC-CH8-11": {
        level: `Vận dụng cao`,
        topic: `Phương pháp chèn khe (Slotting Method)`,
        question: `Có 5 quyển sách Toán khác nhau và 4 quyển sách Văn khác nhau cần xếp lên một kệ sách nằm ngang. Hỏi có bao nhiêu cách xếp sao cho không có 2 quyển sách Văn nào xếp cạnh nhau?`,
        hint: `Chìa khóa tư duy: Dùng phương pháp chèn khe. Xếp sách Toán trước ($5!$ cách). 5 quyển sách Toán tạo ra 6 khe trống. Lấy 4 quyển sách Văn chèn vào 4 khe trống đó ($A_6^4$).`,
        solution: `
- **Bước 1: Xếp nhóm không bị giới hạn (Sách Toán)**
  Xếp 5 quyển sách Toán khác nhau lên kệ, có $P_5 = 5! = 120$ cách.
- **Bước 2: Xác định khe hở**
  5 quyển sách Toán (ví dụ: T_T_T_T_T) sẽ tạo ra 6 "khe hở" (gồm 4 khe ở giữa và 2 khe ở hai đầu).
- **Bước 3: Xếp nhóm bị giới hạn (Sách Văn)**
  Để không có 2 quyển sách Văn nào nằm cạnh nhau, mỗi quyển sách Văn phải nằm ở một khe hở khác nhau.
  Có 6 khe hở, ta chọn 4 khe để xếp 4 quyển sách Văn khác nhau.
  Số cách là: $A_6^4 = 360$ cách.
- **Bước 4: Nhân kết quả**
  Theo quy tắc nhân, tổng số cách xếp là: $120 \times 360 = 43200$ (cách).
- Kết luận: Có 43200 cách xếp thỏa mãn yêu cầu.
        `
    },
    "MATH10-PRAC-CH8-12": {
        level: `Vận dụng cao`,
        topic: `Phương pháp vách ngăn (Bổ đề chia kẹo Euler)`,
        question: `Có 12 viên kẹo giống hệt nhau cần chia cho 4 đứa trẻ sao cho mỗi đứa đều có ít nhất 1 viên kẹo. Hỏi có bao nhiêu cách chia kẹo?`,
        hint: `Chìa khóa tư duy: Áp dụng bài toán chia kẹo Euler: Số nghiệm nguyên dương của PT $x_1 + x_2 + ... + x_k = n$ là $C_{n-1}^{k-1}$.`,
        solution: `
- Bài toán chia kẹo tương đương với việc tìm số nghiệm nguyên dương của phương trình:
  $x_1 + x_2 + x_3 + x_4 = 12$ (với $x_i$ là số kẹo của đứa trẻ thứ $i$, $x_i \ge 1, x_i \in \mathbb{N}$).
- Mô hình vách ngăn: Tưởng tượng đặt 12 viên kẹo thành một hàng ngang. Khi đó giữa chúng sẽ có $12 - 1 = 11$ khoảng trống.
- Để chia làm 4 phần, ta cần dùng 3 "vách ngăn" (số vách ngăn = số phần - 1).
- Mỗi cách đặt 3 vách ngăn vào 11 khoảng trống sẽ cho ra 1 cách chia thỏa mãn điều kiện mỗi phần có ít nhất 1 viên (vách ngăn không được đặt ở 2 đầu và không được trùng nhau).
- Số cách chọn chỗ đặt 3 vách ngăn từ 11 khoảng trống là:
  $C_{11}^3 = \frac{11 \times 10 \times 9}{3 \times 2 \times 1} = 165$ (cách).
- Kết luận: Có 165 cách chia kẹo.
        `
    },
    "MATH10-PRAC-CH8-13": {
        level: `Vận dụng cao`,
        topic: `Lập số có tổng các chữ số chia hết (Tổ hợp số)`,
        question: `Từ các chữ số $1, 2, 3, 4, 5, 6$, lập được bao nhiêu số tự nhiên gồm 3 chữ số khác nhau sao cho tổng 3 chữ số của số đó là một số chia hết cho 3?`,
        hint: `Chìa khóa tư duy: Tổng chia hết cho 3. Chia tập số thành 3 tập dư khi chia 3: $A_0=\{3,6\}$, $A_1=\{1,4\}$, $A_2=\{2,5\}$. Tổng 3 số chia hết cho 3 khi (3 số cùng nhóm) hoặc (mỗi nhóm lấy 1 số).`,
        solution: `
- Tập số $S = \{1, 2, 3, 4, 5, 6\}$.
- Ta chia các chữ số thành 3 tập hợp dựa trên số dư khi chia cho 3:
  + $A_0 = \{3, 6\}$ (Chia hết cho 3).
  + $A_1 = \{1, 4\}$ (Chia 3 dư 1).
  + $A_2 = \{2, 5\}$ (Chia 3 dư 2).
- Để tổng 3 chữ số chia hết cho 3, các chữ số đó phải thuộc các trường hợp sau:
  **Trường hợp 1: Cả 3 chữ số cùng thuộc 1 tập hợp.**
  Nhưng mỗi tập chỉ có 2 phần tử, nên không thể lấy ra 3 phần tử khác nhau $\Rightarrow$ TH1 không xảy ra.
  **Trường hợp 2: Lấy đúng 1 phần tử từ $A_0$, 1 từ $A_1$, và 1 từ $A_2$.**
  (Dư 0 + Dư 1 + Dư 2 = Dư 3 $\Rightarrow$ Chia hết cho 3).
- **Thực hiện chọn (Không thứ tự):**
  Chọn 1 số từ $A_0$: có $C_2^1 = 2$ cách.
  Chọn 1 số từ $A_1$: có $C_2^1 = 2$ cách.
  Chọn 1 số từ $A_2$: có $C_2^1 = 2$ cách.
  $\Rightarrow$ Có $2 \times 2 \times 2 = 8$ bộ 3 chữ số thỏa mãn.
- **Sắp xếp tạo số:**
  Mỗi bộ 3 chữ số vừa chọn (phân biệt), ta đem hoán vị xếp thành số có 3 chữ số $\Rightarrow$ có $3! = 6$ cách xếp.
- **Tổng số cách:** $8 \times 6 = 48$ (số).
- Kết luận: Có 48 số tự nhiên thỏa mãn yêu cầu.
        `
    },
    "MATH10-PRAC-CH8-14": {
        level: `Vận dụng cao`,
        topic: `Giao của hoán vị (Lập số với ràng buộc chẵn lẻ xen kẽ)`,
        question: `Có bao nhiêu số tự nhiên gồm 6 chữ số khác nhau lập từ các chữ số $1, 2, 3, 4, 5, 6$ sao cho các chữ số lẻ đứng liền nhau và các chữ số chẵn đứng liền nhau?`,
        hint: `Chìa khóa tư duy: Coi nhóm các chữ số chẵn $\{2,4,6\}$ là một khối A. Coi nhóm các chữ số lẻ $\{1,3,5\}$ là khối B. Bài toán là hoán vị trong từng khối và hoán vị 2 khối.`,
        solution: `
- Tập số gồm 3 chữ số lẻ $\{1, 3, 5\}$ và 3 chữ số chẵn $\{2, 4, 6\}$.
- **Bước 1: Ghép khối**
  Để các chữ số lẻ đứng cạnh nhau, ta buộc chúng lại thành Khối X.
  Để các chữ số chẵn đứng cạnh nhau, ta buộc chúng lại thành Khối Y.
- **Bước 2: Xếp chỗ bên trong mỗi khối**
  Trong Khối X (3 số lẻ), có $3! = 6$ cách sắp xếp nội bộ.
  Trong Khối Y (3 số chẵn), có $3! = 6$ cách sắp xếp nội bộ.
- **Bước 3: Xếp 2 khối thành số có 6 chữ số**
  Số có dạng XY (Chẵn lẻ) hoặc YX (Lẻ chẵn) $\Rightarrow$ Có $2! = 2$ cách hoán vị 2 khối.
- **Bước 4: Nhân kết quả**
  Tổng số các số lập được: $6 \times 6 \times 2 = 72$ (số).
- Kết luận: Có 72 số thỏa mãn.
        `
    },
    "MATH10-PRAC-CH8-15": {
        level: `Vận dụng cao`,
        topic: `Biểu thức tổ hợp chứa Nhị thức Newton`,
        question: `Tính tổng $S = C_{2026}^0 + 2 \cdot C_{2026}^1 + 2^2 \cdot C_{2026}^2 + ... + 2^{2026} \cdot C_{2026}^{2026}$.`,
        hint: `Chìa khóa tư duy: Đưa biểu thức về đúng dạng khai triển của Nhị thức Newton $(a+b)^n$. Dễ thấy $a=1, b=2, n=2026$.`,
        solution: `
- Nhắc lại công thức Nhị thức Newton:
  $(a+b)^n = C_n^0 a^n b^0 + C_n^1 a^{n-1} b^1 + C_n^2 a^{n-2} b^2 + ... + C_n^n a^0 b^n$.
- Đối chiếu với biểu thức $S$:
  $S = C_{2026}^0 \cdot 1^{2026} \cdot 2^0 + C_{2026}^1 \cdot 1^{2025} \cdot 2^1 + C_{2026}^2 \cdot 1^{2024} \cdot 2^2 + ... + C_{2026}^{2026} \cdot 1^0 \cdot 2^{2026}$.
- Cấu trúc khớp hoàn toàn với công thức khi ta chọn:
  $n = 2026$
  $a = 1$
  $b = 2$
- Vậy: $S = (1 + 2)^{2026} = 3^{2026}$.
- Kết luận: Tổng $S = 3^{2026}$.
        `
    },
    "MATH10-PRAC-CH8-16": {
        level: `Vận dụng cao`,
        topic: `Tìm tham số $n$ trong khai triển Nhị thức`,
        question: `Biết rằng trong khai triển của biểu thức $(1 + 3x)^n$ (với $n \in \mathbb{N}^*$), hệ số của $x^2$ bằng 90. Tìm giá trị của $n$.`,
        hint: `Chìa khóa tư duy: Viết số hạng chứa $x^2$. Đặt hệ số đó bằng 90. Phương trình $C_n^2 \cdot 3^2 = 90 \Rightarrow n(n-1) = 20$.`,
        solution: `
- Khai triển $(1 + 3x)^n$ có số hạng tổng quát là:
  $T_{k+1} = C_n^k \cdot 1^{n-k} \cdot (3x)^k = C_n^k \cdot 3^k \cdot x^k$.
- Yêu cầu tìm hệ số của $x^2$, suy ra $k = 2$.
- Khi $k=2$, số hạng là $C_n^2 \cdot 3^2 \cdot x^2 = 9 \cdot C_n^2 \cdot x^2$.
- Hệ số là $9 \cdot C_n^2$. Theo giả thiết:
  $9 \cdot C_n^2 = 90 \Leftrightarrow C_n^2 = 10$.
- Phân tích $C_n^2 = \frac{n(n-1)}{2}$, ta có phương trình:
  $\frac{n(n-1)}{2} = 10 \Leftrightarrow n(n-1) = 20$.
- Giải phương trình bậc 2: $n^2 - n - 20 = 0 \Rightarrow n=5$ hoặc $n=-4$.
- Vì $n \in \mathbb{N}^*$ nên $n=5$ là nghiệm duy nhất.
- Kết luận: $n = 5$.
        `
    },
    "MATH10-PRAC-CH8-17": {
        level: `Vận dụng cao`,
        topic: `Hệ số lớn nhất trong khai triển`,
        question: `Trong khai triển của biểu thức $(x + 2)^5$, hãy tìm số hạng có hệ số lớn nhất.`,
        hint: `Chìa khóa tư duy: Viết toàn bộ hệ số của các số hạng (vì $n=5$ rất nhỏ nên có thể tính trực tiếp). Nếu $n$ lớn, ta giải hệ $a_k \ge a_{k-1}$ và $a_k \ge a_{k+1}$.`,
        solution: `
- Khai triển: $(x+2)^5 = C_5^0 x^5 + C_5^1 x^4 \cdot 2 + C_5^2 x^3 \cdot 2^2 + C_5^3 x^2 \cdot 2^3 + C_5^4 x \cdot 2^4 + C_5^5 \cdot 2^5$.
- Tính lần lượt các hệ số:
  + $a_0 = C_5^0 \cdot 2^0 = 1 \cdot 1 = 1$.
  + $a_1 = C_5^1 \cdot 2^1 = 5 \cdot 2 = 10$.
  + $a_2 = C_5^2 \cdot 2^2 = 10 \cdot 4 = 40$.
  + $a_3 = C_5^3 \cdot 2^3 = 10 \cdot 8 = 80$.
  + $a_4 = C_5^4 \cdot 2^4 = 5 \cdot 16 = 80$.
  + $a_5 = C_5^5 \cdot 2^5 = 1 \cdot 32 = 32$.
- So sánh các hệ số: $1, 10, 40, 80, 80, 32$. Giá trị lớn nhất là 80.
- Kết luận: Có hai số hạng có hệ số lớn nhất đều bằng 80, đó là $80x^2$ và $80x$.
        `
    },
    "MATH10-PRAC-CH8-18": {
        level: `Vận dụng cao`,
        topic: `Đếm hình học (Số đường chéo, giao điểm)`,
        question: `Cho đa giác lồi có $n$ đỉnh ($n \ge 4$). 
a) Tìm số đường chéo của đa giác.
b) Biết rằng không có 3 đường chéo nào đồng quy tại 1 điểm bên trong đa giác. Hỏi có bao nhiêu giao điểm của các đường chéo nằm BÊN TRONG đa giác đó? (Tính theo $n$).`,
        hint: `Chìa khóa tư duy: a) Đường chéo = Số đoạn thẳng $C_n^2$ trừ đi $n$ cạnh. b) Giao điểm bên trong: Cứ 2 đường chéo chéo nhau sẽ tạo ra 1 giao điểm. Và 2 đường chéo chéo nhau được định hình từ đúng 4 đỉnh. Nên số giao điểm chính là số cách chọn 4 đỉnh.`,
        solution: `
**Câu a: Số đường chéo**
- Nối 2 đỉnh bất kỳ trong $n$ đỉnh, ta được 1 đoạn thẳng $\Rightarrow$ Số đoạn thẳng là $C_n^2$.
- Các đoạn thẳng này gồm 2 loại: Các cạnh của đa giác (có $n$ cạnh) và các đường chéo.
- Suy ra số đường chéo là: $C_n^2 - n = \frac{n(n-1)}{2} - n = \frac{n^2 - 3n}{2}$.

**Câu b: Số giao điểm nằm BÊN TRONG đa giác**
- Hai đường chéo cắt nhau tại 1 điểm bên trong đa giác khi và chỉ khi 4 đầu mút của chúng là 4 đỉnh của một "tứ giác lồi" (vì trong 1 tứ giác lồi luôn có đúng 2 đường chéo cắt nhau tại 1 điểm bên trong).
- Nói cách khác, cứ mỗi lần lấy ra 4 đỉnh tùy ý từ $n$ đỉnh, ta sẽ tạo thành 1 tứ giác lồi, và tứ giác này cung cấp CHÍNH XÁC 1 giao điểm của 2 đường chéo nằm bên trong đa giác.
- (Vì giả thiết không có 3 đường chéo nào đồng quy nên các giao điểm này không bị trùng lắp).
- Vậy, số giao điểm bên trong đa giác chính là số cách chọn ra 4 đỉnh từ $n$ đỉnh: $C_n^4$.
- Kết luận: Số đường chéo là $\frac{n(n-1)}{2} - n$. Số giao điểm bên trong là $C_n^4$.
        `
    },
    "MATH10-PRAC-CH8-19": {
        level: `Vận dụng cao`,
        topic: `Rút gọn tổng hệ số nhị thức đan dấu`,
        question: `Tính tổng: $P = C_{10}^0 + C_{10}^2 + C_{10}^4 + C_{10}^6 + C_{10}^8 + C_{10}^{10}$.`,
        hint: `Chìa khóa tư duy: Tổng các $C$ chẵn. Dùng 2 khai triển $(1+1)^{10}$ và $(1-1)^{10}$, sau đó cộng vế theo vế và chia 2.`,
        solution: `
- Xét khai triển $(1 + x)^{10} = C_{10}^0 + C_{10}^1 x + C_{10}^2 x^2 + ... + C_{10}^{10} x^{10}$.
- Lần lượt thay $x=1$ và $x=-1$:
  + Khi $x=1$:
    $2^{10} = C_{10}^0 + C_{10}^1 + C_{10}^2 + C_{10}^3 + C_{10}^4 + ... + C_{10}^{10} \quad (1)$.
  + Khi $x=-1$:
    $0^{10} = C_{10}^0 - C_{10}^1 + C_{10}^2 - C_{10}^3 + C_{10}^4 - ... + C_{10}^{10} \quad (2)$.
- Cộng (1) và (2) vế theo vế, các số hạng có $C$ bậc lẻ ($C_{10}^1, C_{10}^3...$) sẽ triệt tiêu do ngược dấu:
  $2^{10} + 0 = 2(C_{10}^0 + C_{10}^2 + C_{10}^4 + C_{10}^6 + C_{10}^8 + C_{10}^{10})$.
- Suy ra biểu thức cần tính là:
  $P = \frac{2^{10}}{2} = 2^9 = 512$.
- Kết luận: $P = 512$.
        `
    },
    "MATH10-PRAC-CH8-20": {
        level: `Vận dụng cao`,
        topic: `Tổng hợp (Số tập con của tập hợp)`,
        question: `Cho tập hợp $X = \{1, 2, 3, ..., 15\}$. Có bao nhiêu tập con của $X$ chứa đúng 5 phần tử, trong đó có mặt số 1 nhưng KHÔNG có mặt số 2?`,
        hint: `Chìa khóa tư duy: Tập con 5 phần tử đã CHẮC CHẮN có số 1, nên chỉ cần tìm 4 phần tử nữa. Tập nguồn $X$ (15 số) bỏ đi số 1 và số 2, còn lại 13 số. Chọn 4 số từ 13 số.`,
        solution: `
- Một tập con của $X$ có chứa đúng 5 phần tử thỏa mãn điều kiện đề bài sẽ được cấu tạo như sau:
  + Vị trí thứ nhất: Bắt buộc là số 1 (có 1 cách chọn).
  + Bốn vị trí còn lại: Được lấy từ các phần tử còn lại của $X$, với điều kiện KHÔNG ĐƯỢC lấy số 2.
- Tập nguồn $X$ ban đầu có 15 phần tử. Ta loại bỏ số 1 (vì đã chọn) và loại bỏ số 2 (vì đề cấm), tập nguồn còn lại $15 - 2 = 13$ phần tử.
- Ta cần chọn ra 4 phần tử (không cần thứ tự vì đây là tập hợp) từ 13 phần tử này:
  Số cách chọn là Tổ hợp chập 4 của 13: $C_{13}^4 = \frac{13!}{4!9!} = 715$ (cách).
- Kết luận: Có 715 tập con thỏa mãn yêu cầu.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_PRACTICE_CH8;
}
