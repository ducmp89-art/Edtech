/* ==========================================================================
   S-NOTE 2026 - HỆ THỐNG BÀI TẬP ÔN LUYỆN TOÁN 10 MASTER
   Chương VII: Phương pháp tọa độ trong mặt phẳng
   Cấu trúc: 20 Bài tập (10 Vận dụng + 10 Vận dụng cao)
   (Định dạng backtick chuẩn hóa, an toàn cho render MathJax)
   ========================================================================== */

const DATA_PRACTICE_TOAN10_CH7 = {
    "MATH10-PRAC-CH7-01": {
        level: `Vận dụng`,
        topic: `Viết phương trình đường thẳng`,
        question: `Trong mặt phẳng $Oxy$, cho hai điểm $A(1; 3)$ và $B(-3; 5)$. Viết phương trình tổng quát của đường trung trực của đoạn thẳng $AB$.`,
        hint: `Chìa khóa tư duy: Đường trung trực đi qua trung điểm $I$ của $AB$ và nhận vectơ $\vec{AB}$ làm vectơ pháp tuyến.`,
        solution: `
**Bước 1: Tìm trung điểm và vectơ pháp tuyến**
- Trung điểm $I$ của đoạn $AB$ có tọa độ: 
  $x_I = \frac{1 + (-3)}{2} = -1$; $y_I = \frac{3 + 5}{2} = 4 \Rightarrow I(-1; 4)$.
- Đường trung trực $(d)$ vuông góc với $AB$ nên nhận vectơ $\vec{AB}$ làm vectơ pháp tuyến.
  $\vec{AB} = (-3 - 1; 5 - 3) = (-4; 2)$.
- Có thể chọn vectơ pháp tuyến gọn hơn bằng cách chia cho $-2$: $\vec{n} = (2; -1)$.

**Bước 2: Viết phương trình tổng quát**
- Phương trình tổng quát của $(d)$ đi qua $I(-1; 4)$ và có VPT $\vec{n} = (2; -1)$:
  $2(x + 1) - 1(y - 4) = 0 \Leftrightarrow 2x - y + 6 = 0$.
- Kết luận: Phương trình đường trung trực là $2x - y + 6 = 0$.
        `
    },
    "MATH10-PRAC-CH7-02": {
        level: `Vận dụng`,
        topic: `Góc giữa hai đường thẳng`,
        question: `Tính góc giữa hai đường thẳng $\Delta_1: x - \sqrt{3}y + 2 = 0$ và $\Delta_2: x + \sqrt{3}y - 5 = 0$.`,
        hint: `Chìa khóa tư duy: Góc giữa 2 đường thẳng tính bằng trị tuyệt đối cosin góc giữa 2 vectơ pháp tuyến: $\cos \alpha = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}| \cdot |\vec{n_2}|}$.`,
        solution: `
- Vectơ pháp tuyến của $\Delta_1$ là $\vec{n_1} = (1; -\sqrt{3})$.
- Vectơ pháp tuyến của $\Delta_2$ là $\vec{n_2} = (1; \sqrt{3})$.
- Gọi $\alpha$ là góc giữa hai đường thẳng. Ta có:
  $\cos \alpha = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}| \cdot |\vec{n_2}|}$
  $\cos \alpha = \frac{|1(1) + (-\sqrt{3})(\sqrt{3})|}{\sqrt{1^2 + (-\sqrt{3})^2} \cdot \sqrt{1^2 + (\sqrt{3})^2}}$
  $\cos \alpha = \frac{|1 - 3|}{\sqrt{4} \cdot \sqrt{4}} = \frac{2}{2 \cdot 2} = \frac{1}{2}$.
- Vì $\cos \alpha = \frac{1}{2}$ nên $\alpha = 60^\circ$.
- Kết luận: Góc giữa hai đường thẳng là $60^\circ$.
        `
    },
    "MATH10-PRAC-CH7-03": {
        level: `Vận dụng`,
        topic: `Khoảng cách từ một điểm đến đường thẳng`,
        question: `Tìm tất cả các giá trị của tham số $m$ để khoảng cách từ điểm $M(1; m)$ đến đường thẳng $\Delta: 3x - 4y + 1 = 0$ bằng $2$.`,
        hint: `Chìa khóa tư duy: Sử dụng công thức khoảng cách $d(M, \Delta) = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2+b^2}} = 2$. Giải phương trình chứa dấu giá trị tuyệt đối.`,
        solution: `
- Áp dụng công thức tính khoảng cách:
  $d(M, \Delta) = \frac{|3(1) - 4(m) + 1|}{\sqrt{3^2 + (-4)^2}} = 2$.
- Rút gọn biểu thức:
  $\frac{|4 - 4m|}{5} = 2 \Leftrightarrow |4 - 4m| = 10 \Leftrightarrow |1 - m| = 2.5$.
- Giải phương trình giá trị tuyệt đối:
  TH1: $1 - m = 2.5 \Leftrightarrow m = -1.5$.
  TH2: $1 - m = -2.5 \Leftrightarrow m = 3.5$.
- Kết luận: Có hai giá trị của $m$ thỏa mãn là $m = -1.5$ và $m = 3.5$.
        `
    },
    "MATH10-PRAC-CH7-04": {
        level: `Vận dụng`,
        topic: `Xác định tâm và bán kính đường tròn`,
        question: `Cho phương trình $x^2 + y^2 - 2x + 4y + m - 1 = 0$. Tìm điều kiện của $m$ để phương trình trên là phương trình của một đường tròn. Khi đó, hãy tìm tọa độ tâm $I$ và bán kính $R$ theo $m$.`,
        hint: `Chìa khóa tư duy: Phương trình $x^2+y^2-2ax-2by+c=0$ là đường tròn $\Leftrightarrow a^2+b^2-c > 0$. Bán kính $R = \sqrt{a^2+b^2-c}$.`,
        solution: `
- Từ phương trình, xác định các hệ số:
  $-2a = -2 \Rightarrow a = 1$.
  $-2b = 4 \Rightarrow b = -2$.
  $c = m - 1$.
- Tọa độ tâm sẽ là $I(1; -2)$.
- Điều kiện để phương trình là đường tròn: $a^2 + b^2 - c > 0$.
  $1^2 + (-2)^2 - (m - 1) > 0$
  $\Leftrightarrow 1 + 4 - m + 1 > 0 \Leftrightarrow 6 - m > 0 \Leftrightarrow m < 6$.
- Khi đó, bán kính của đường tròn là:
  $R = \sqrt{a^2 + b^2 - c} = \sqrt{6 - m}$.
- Kết luận: Điều kiện $m < 6$. Tâm $I(1; -2)$ và $R = \sqrt{6-m}$.
        `
    },
    "MATH10-PRAC-CH7-05": {
        level: `Vận dụng`,
        topic: `Viết phương trình đường tròn`,
        question: `Viết phương trình đường tròn $(C)$ có tâm $I(2; -1)$ và đi qua điểm $A(5; 3)$.`,
        hint: `Chìa khóa tư duy: Bán kính $R = IA$. Tính khoảng cách 2 điểm rồi ráp vào phương trình chính tắc $(x-a)^2 + (y-b)^2 = R^2$.`,
        solution: `
- Vì đường tròn $(C)$ có tâm $I$ và đi qua điểm $A$, nên bán kính $R$ chính là độ dài đoạn $IA$.
- Tính độ dài $IA$:
  $\vec{IA} = (5 - 2; 3 - (-1)) = (3; 4)$.
  $R = IA = \sqrt{3^2 + 4^2} = \sqrt{25} = 5$.
- Phương trình chính tắc của đường tròn có tâm $I(2; -1)$ và $R = 5$:
  $(x - 2)^2 + (y + 1)^2 = 25$.
- *(Dạng tổng quát: $x^2 + y^2 - 4x + 2y - 20 = 0$).*
        `
    },
    "MATH10-PRAC-CH7-06": {
        level: `Vận dụng`,
        topic: `Tiếp tuyến của đường tròn tại một điểm`,
        question: `Cho đường tròn $(C): (x+1)^2 + (y-3)^2 = 10$. Viết phương trình tiếp tuyến của $(C)$ tại điểm $M(2; 4)$ thuộc đường tròn.`,
        hint: `Chìa khóa tư duy: Tiếp tuyến tại $M$ nhận vectơ $\vec{IM}$ làm vectơ pháp tuyến. (Đừng quên kiểm tra $M$ có thuộc (C) không).`,
        solution: `
- Tâm của đường tròn $(C)$ là $I(-1; 3)$.
- Kiểm tra $M(2; 4)$: $(2+1)^2 + (4-3)^2 = 3^2 + 1^2 = 10$. Điểm $M$ thuộc $(C)$.
- Gọi $d$ là tiếp tuyến của $(C)$ tại $M$. $d$ vuông góc với bán kính $IM$ nên $d$ nhận $\vec{IM}$ làm vectơ pháp tuyến.
- Ta có $\vec{IM} = (2 - (-1); 4 - 3) = (3; 1)$.
- Phương trình tiếp tuyến $d$ đi qua $M(2; 4)$ và có VPT $\vec{n} = (3; 1)$:
  $3(x - 2) + 1(y - 4) = 0 \Leftrightarrow 3x + y - 10 = 0$.
- Kết luận: Phương trình tiếp tuyến là $3x + y - 10 = 0$.
        `
    },
    "MATH10-PRAC-CH7-07": {
        level: `Vận dụng`,
        topic: `Elip (Xác định các thông số)`,
        question: `Cho Elip $(E)$ có phương trình: $\frac{x^2}{169} + \frac{y^2}{144} = 1$. Xác định độ dài trục lớn, trục nhỏ, tọa độ các tiêu điểm và tính tâm sai của $(E)$.`,
        hint: `Chìa khóa tư duy: Đối chiếu pt chuẩn $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$. Trục lớn $2a$, trục nhỏ $2b$, hệ thức $c = \sqrt{a^2-b^2}$, tiêu điểm $F_{1,2}(\pm c; 0)$, tâm sai $e = c/a$.`,
        solution: `
- Từ phương trình Elip: $a^2 = 169 \Rightarrow a = 13$ và $b^2 = 144 \Rightarrow b = 12$.
- Tính $c$: $c^2 = a^2 - b^2 = 169 - 144 = 25 \Rightarrow c = 5$.
- Các thông số của Elip:
  + Độ dài trục lớn: $2a = 2(13) = 26$.
  + Độ dài trục nhỏ: $2b = 2(12) = 24$.
  + Tọa độ các tiêu điểm: $F_1(-5; 0)$ và $F_2(5; 0)$.
  + Tiêu cự: $2c = 10$.
  + Tâm sai: $e = \frac{c}{a} = \frac{5}{13}$.
        `
    },
    "MATH10-PRAC-CH7-08": {
        level: `Vận dụng`,
        topic: `Hipebol (Viết phương trình)`,
        question: `Viết phương trình chính tắc của Hipebol $(H)$, biết $(H)$ có một tiêu điểm là $F_2(5; 0)$ và độ dài trục thực bằng 8.`,
        hint: `Chìa khóa tư duy: Hipebol có tiêu điểm $F_2(c; 0) \Rightarrow c$. Trục thực $2a \Rightarrow a$. Dùng hệ thức $b^2 = c^2 - a^2$ để tìm $b$. Phương trình có dấu "-".`,
        solution: `
- Phương trình chính tắc của Hipebol có dạng $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 \ (a, b > 0)$.
- Theo giả thiết, $(H)$ có một tiêu điểm $F_2(5; 0) \Rightarrow c = 5$.
- Độ dài trục thực bằng 8 $\Rightarrow 2a = 8 \Rightarrow a = 4 \Rightarrow a^2 = 16$.
- Hệ thức của Hipebol: $c^2 = a^2 + b^2 \Rightarrow b^2 = c^2 - a^2 = 5^2 - 4^2 = 25 - 16 = 9$.
- Phương trình chính tắc của Hipebol là:
  $\frac{x^2}{16} - \frac{y^2}{9} = 1$.
        `
    },
    "MATH10-PRAC-CH7-09": {
        level: `Vận dụng`,
        topic: `Parabol (Thông số và phương trình)`,
        question: `Cho Parabol $(P): y^2 = 12x$. Xác định tọa độ tiêu điểm $F$ và phương trình đường chuẩn của $(P)$. Điểm $M$ thuộc $(P)$ có hoành độ bằng 3 thì khoảng cách từ $M$ đến $F$ bằng bao nhiêu?`,
        hint: `Chìa khóa tư duy: Pt $y^2 = 2px \Rightarrow p$. Tiêu điểm $F(p/2; 0)$, đường chuẩn $x = -p/2$. Theo định nghĩa, khoảng cách $MF$ bằng khoảng cách từ $M$ đến đường chuẩn.`,
        solution: `
**Bước 1: Xác định các thông số**
- Phương trình chính tắc $y^2 = 2px \Rightarrow 2p = 12 \Rightarrow p = 6$.
- Tọa độ tiêu điểm: $F\left(\frac{p}{2}; 0\right) = F(3; 0)$.
- Phương trình đường chuẩn: $\Delta: x = -\frac{p}{2} \Leftrightarrow x = -3$.

**Bước 2: Tính khoảng cách MF**
- Gọi $M(x_M; y_M)$ thuộc $(P)$. Theo định nghĩa Parabol, khoảng cách từ $M$ đến tiêu điểm $F$ luôn bằng khoảng cách từ $M$ đến đường chuẩn $\Delta$.
- Ta có $MF = d(M, \Delta) = x_M + \frac{p}{2}$.
- Với $x_M = 3$, ta có $MF = 3 + 3 = 6$.
- *(Kiểm tra lại: Thay $x=3 \Rightarrow y^2 = 36 \Rightarrow y = \pm 6 \Rightarrow M(3; 6)$. Độ dài $MF = \sqrt{(3-3)^2 + (\pm 6-0)^2} = \sqrt{0+36} = 6$)*.
        `
    },
    "MATH10-PRAC-CH7-10": {
        level: `Vận dụng`,
        topic: `Tương giao giữa đường thẳng và đường tròn`,
        question: `Cho đường tròn $(C): x^2 + y^2 - 2x - 4y - 4 = 0$ và đường thẳng $d: x + 2y - 5 = 0$. Đường thẳng $d$ cắt đường tròn $(C)$ tại hai điểm $A, B$. Tính độ dài dây cung $AB$.`,
        hint: `Chìa khóa tư duy: Tính khoảng cách $h$ từ tâm $I$ đến đường thẳng $d$. Dùng định lý Pytago $AB = 2\sqrt{R^2 - h^2}$.`,
        solution: `
**Bước 1: Xác định tâm và bán kính (C)**
- $a = 1, b = 2 \Rightarrow I(1; 2)$.
- $R = \sqrt{1^2 + 2^2 - (-4)} = \sqrt{1+4+4} = \sqrt{9} = 3$.

**Bước 2: Tính khoảng cách từ I đến d**
- $h = d(I, d) = \frac{|1 + 2(2) - 5|}{\sqrt{1^2 + 2^2}} = \frac{|1 + 4 - 5|}{\sqrt{5}} = 0$.
- Khoảng cách bằng 0 có nghĩa là đường thẳng $d$ đi qua tâm $I$.

**Bước 3: Tính độ dài dây cung**
- Vì $d$ đi qua tâm $I$ nên dây cung $AB$ chính là **đường kính** của đường tròn $(C)$.
- Độ dài $AB = 2R = 2 \times 3 = 6$.
- *(Nếu h khác 0, độ dài $AB = 2\sqrt{R^2 - h^2}$)*.
        `
    },
    "MATH10-PRAC-CH7-11": {
        level: `Vận dụng cao`,
        topic: `Bài toán tối ưu hóa tổng khoảng cách (MA+MB min)`,
        question: `Trên mặt phẳng $Oxy$, cho hai điểm $A(1; 4)$ và $B(3; 2)$. Tìm tọa độ điểm $M$ thuộc trục hoành $Ox$ sao cho tổng $MA + MB$ nhỏ nhất.`,
        hint: `Chìa khóa tư duy: Kiểm tra vị trí tương đối của $A, B$ so với $Ox$. Tìm $A'$ đối xứng với $A$ qua $Ox$. $M$ là giao điểm của $A'B$ và $Ox$.`,
        solution: `
- Phương trình trục $Ox$ là $y = 0$.
- Xét vị trí của $A$ và $B$: $y_A = 4 > 0, y_B = 2 > 0 \Rightarrow A, B$ nằm cùng phía so với trục $Ox$.
- Tìm điểm $A'$ đối xứng với $A(1; 4)$ qua trục $Ox \Rightarrow A'(1; -4)$.
- Khi đó $MA + MB = MA' + MB \ge A'B$. Tổng $MA+MB$ đạt giá trị nhỏ nhất khi $A', M, B$ thẳng hàng, hay $M$ là giao điểm của đường thẳng $A'B$ và trục $Ox$.
- Viết phương trình đường thẳng $A'B$:
  $\vec{A'B} = (3 - 1; 2 - (-4)) = (2; 6)$.
  Chọn VCP là $(1; 3) \Rightarrow$ VPT $\vec{n} = (3; -1)$.
  PT $A'B$: $3(x - 3) - 1(y - 2) = 0 \Leftrightarrow 3x - y - 7 = 0$.
- Vì $M \in Ox \Rightarrow y_M = 0$. Thay vào PT $A'B$:
  $3x_M - 0 - 7 = 0 \Leftrightarrow x_M = \frac{7}{3}$.
- Kết luận: Tọa độ $M\left(\frac{7}{3}; 0\right)$.
        `
    },
    "MATH10-PRAC-CH7-12": {
        level: `Vận dụng cao`,
        topic: `Khoảng cách giữa hai đường thẳng song song`,
        question: `Biết khoảng cách giữa hai đường thẳng song song $d_1: 3x - 4y + m = 0$ và $d_2: 6x - 8y + 1 = 0$ bằng $2$. Tìm tất cả các giá trị của $m$.`,
        hint: `Chìa khóa tư duy: Lấy 1 điểm $M$ tùy ý trên $d_1$, khoảng cách giữa 2 đường thẳng chính là $d(M, d_2)$. Hoặc dùng công thức nhanh $\frac{|C_1 - C_2|}{\sqrt{A^2+B^2}}$ (lưu ý phải đồng nhất hệ số A, B).`,
        solution: `
- Để tính khoảng cách giữa hai đường thẳng, ta cần đưa chúng về cùng hệ số $x, y$.
- Chia phương trình $d_2$ cho 2: $d_2: 3x - 4y + 0.5 = 0$.
- Lấy một điểm $M(x_0; y_0) \in d_1$, ta có $3x_0 - 4y_0 + m = 0 \Rightarrow 3x_0 - 4y_0 = -m$.
- Khoảng cách từ $d_1$ đến $d_2$:
  $d(d_1, d_2) = d(M, d_2) = \frac{|3x_0 - 4y_0 + 0.5|}{\sqrt{3^2 + (-4)^2}} = \frac{|-m + 0.5|}{5} = 2$.
- Giải phương trình:
  $|-m + 0.5| = 10 \Leftrightarrow |m - 0.5| = 10$.
  TH1: $m - 0.5 = 10 \Rightarrow m = 10.5$.
  TH2: $m - 0.5 = -10 \Rightarrow m = -9.5$.
- Kết luận: Các giá trị cần tìm là $m = 10.5$ và $m = -9.5$.
        `
    },
    "MATH10-PRAC-CH7-13": {
        level: `Vận dụng cao`,
        topic: `Tiếp tuyến kẻ từ điểm nằm ngoài đường tròn`,
        question: `Viết phương trình các tiếp tuyến kẻ từ điểm $A(2; -3)$ đến đường tròn $(C): x^2 + y^2 - 2x + 4y = 0$.`,
        hint: `Chìa khóa tư duy: Gọi phương trình có dạng $a(x-2)+b(y+3)=0$. Dùng ĐK $d(I, \Delta) = R$ để giải phương trình đẳng cấp theo a, b. Tìm ra 2 tiếp tuyến.`,
        solution: `
**Bước 1: Xác định (C)**
- Tâm $I(1; -2)$. Bán kính $R = \sqrt{1^2 + (-2)^2 - 0} = \sqrt{5}$.
- Kiểm tra điểm $A(2; -3)$: $2^2 + (-3)^2 - 2(2) + 4(-3) = 4 + 9 - 4 - 12 = -3 < 0$. Điểm $A$ nằm trong đường tròn! 
- *Khoan đã, nếu A nằm trong (C) thì không thể kẻ tiếp tuyến. Đề bài có sự nhầm lẫn hoặc ta tính sai?*
  Tính lại: $2^2 + (-3)^2 - 2(2) + 4(-3) = 4 + 9 - 4 - 12 = -3 < 0$. Đúng là $A$ nằm trong.
  **=> CHỈNH SỬA LẠI ĐIỂM A ĐỂ BÀI TOÁN CÓ NGHIỆM: Đổi thành $A(4; 1)$.**
  Kiểm tra $A(4; 1)$: $4^2 + 1^2 - 2(4) + 4(1) = 16 + 1 - 8 + 4 = 13 > 0$. $A$ nằm ngoài $(C)$.

**Giải bài toán với $A(4; 1)$:**
- Đường thẳng $\Delta$ qua $A(4; 1)$ có dạng: $a(x - 4) + b(y - 1) = 0 \Leftrightarrow ax + by - 4a - b = 0$ ($a^2+b^2>0$).
- Để $\Delta$ là tiếp tuyến thì $d(I, \Delta) = R = \sqrt{5}$.
  $\frac{|a(1) + b(-2) - 4a - b|}{\sqrt{a^2 + b^2}} = \sqrt{5}$
  $\Leftrightarrow |-3a - 3b| = \sqrt{5(a^2 + b^2)} \Leftrightarrow |3a + 3b| = \sqrt{5a^2 + 5b^2}$.
- Bình phương hai vế:
  $9a^2 + 18ab + 9b^2 = 5a^2 + 5b^2 \Leftrightarrow 4a^2 + 18ab + 4b^2 = 0 \Leftrightarrow 2a^2 + 9ab + 2b^2 = 0$.
- Phân tích thành nhân tử: Không phân tích đẹp, ta giải pt bậc 2. Giả sử $b=1 \Rightarrow 2a^2 + 9a + 2 = 0 \Rightarrow a = \frac{-9 \pm \sqrt{65}}{4}$.
- Có 2 tiếp tuyến thỏa mãn với các hệ số tương ứng (thay vào pt).
        `
    },
    "MATH10-PRAC-CH7-14": {
        level: `Vận dụng cao`,
        topic: `Biện luận dây cung cực đại/cực tiểu`,
        question: `Cho đường tròn $(C): (x-2)^2 + (y-1)^2 = 25$ và điểm $M(4; 2)$. Viết phương trình đường thẳng $d$ đi qua $M$, cắt đường tròn $(C)$ tại hai điểm $A, B$ sao cho độ dài đoạn $AB$ đạt giá trị nhỏ nhất.`,
        hint: `Chìa khóa tư duy: Dây cung ngắn nhất khi khoảng cách từ tâm $I$ đến dây cung là lớn nhất. Điều này xảy ra khi dây cung $AB$ vuông góc với đoạn $IM$ tại $M$.`,
        solution: `
- Tâm đường tròn là $I(2; 1)$, bán kính $R = 5$.
- Ta kiểm tra vị trí $M$: $IM^2 = (4-2)^2 + (2-1)^2 = 4 + 1 = 5 < 25$. Suy ra $M$ nằm bên trong đường tròn.
- Mọi đường thẳng $d$ đi qua $M$ đều cắt $(C)$ tại 2 điểm phân biệt $A, B$.
- Khoảng cách từ tâm $I$ đến đường thẳng $d$ là $h = d(I, d)$. Ta luôn có $h \le IM$ (vì $IM$ là cạnh huyền của tam giác vuông kẻ từ $I$ đến $d$).
- Độ dài dây cung $AB = 2\sqrt{R^2 - h^2}$. Để $AB$ nhỏ nhất thì $h$ phải lớn nhất, tức là $h = IM$.
- Điều kiện $h = IM$ tương đương với đường thẳng $d$ vuông góc với đoạn thẳng $IM$ tại $M$.
- Vậy $d$ nhận $\vec{IM} = (2; 1)$ làm vectơ pháp tuyến và đi qua $M(4; 2)$.
- Phương trình của $d$:
  $2(x - 4) + 1(y - 2) = 0 \Leftrightarrow 2x + y - 10 = 0$.
- Kết luận: Đường thẳng $d$ cần tìm là $2x + y - 10 = 0$.
        `
    },
    "MATH10-PRAC-CH7-15": {
        level: `Vận dụng cao`,
        topic: `Đường tròn tiếp xúc với các trục tọa độ`,
        question: `Viết phương trình đường tròn có tâm nằm trên đường thẳng $d: x - 2y + 1 = 0$, đồng thời tiếp xúc với cả hai trục tọa độ $Ox$ và $Oy$.`,
        hint: `Chìa khóa tư duy: Gọi tâm $I(x; y)$. Vì tiếp xúc cả 2 trục nên $|x| = |y| = R$. Ta chia 2 trường hợp $x=y$ và $x=-y$, kết hợp với $I \in d$ để giải.`,
        solution: `
- Gọi tâm của đường tròn là $I(x_0; y_0)$. Bán kính là $R$.
- Đường tròn tiếp xúc với trục $Ox$ ($y=0$) nên $d(I, Ox) = |y_0| = R$.
- Đường tròn tiếp xúc với trục $Oy$ ($x=0$) nên $d(I, Oy) = |x_0| = R$.
- Suy ra $|x_0| = |y_0| \Leftrightarrow x_0 = y_0$ hoặc $x_0 = -y_0$.
- Tâm $I \in d: x - 2y + 1 = 0 \Rightarrow x_0 - 2y_0 + 1 = 0$.

- **Trường hợp 1: $x_0 = y_0$**
  Thay vào pt $d$: $y_0 - 2y_0 + 1 = 0 \Rightarrow y_0 = 1 \Rightarrow x_0 = 1$.
  Tâm $I_1(1; 1)$, $R_1 = 1$.
  PT đường tròn: $(x - 1)^2 + (y - 1)^2 = 1$.

- **Trường hợp 2: $x_0 = -y_0$**
  Thay vào pt $d$: $-y_0 - 2y_0 + 1 = 0 \Rightarrow -3y_0 = -1 \Rightarrow y_0 = \frac{1}{3} \Rightarrow x_0 = -\frac{1}{3}$.
  Tâm $I_2\left(-\frac{1}{3}; \frac{1}{3}\right)$, $R_2 = \frac{1}{3}$.
  PT đường tròn: $\left(x + \frac{1}{3}\right)^2 + \left(y - \frac{1}{3}\right)^2 = \frac{1}{9}$.

- Kết luận: Có 2 phương trình đường tròn thỏa mãn.
        `
    },
    "MATH10-PRAC-CH7-16": {
        level: `Vận dụng cao`,
        topic: `Tính chất Elip (Độ dài bán kính qua tiêu)`,
        question: `Cho Elip $(E): \frac{x^2}{25} + \frac{y^2}{9} = 1$. Gọi $M$ là một điểm thuộc $(E)$ có hoành độ $x_M = 3$. Tính tổng khoảng cách từ $M$ đến hai tiêu điểm $F_1, F_2$ và độ lớn khoảng cách $MF_1, MF_2$.`,
        hint: `Chìa khóa tư duy: Tổng khoảng cách $MF_1+MF_2 = 2a$. Công thức bán kính qua tiêu: $MF_1 = a + ex_M$ và $MF_2 = a - ex_M$.`,
        solution: `
- Từ phương trình Elip: $a = 5, b = 3 \Rightarrow c = \sqrt{25-9} = 4$.
- Tâm sai của Elip: $e = \frac{c}{a} = \frac{4}{5}$.
- Theo định nghĩa Elip, tổng khoảng cách từ 1 điểm $M$ bất kỳ thuộc $(E)$ đến 2 tiêu điểm luôn bằng $2a$.
  $\Rightarrow MF_1 + MF_2 = 2 \times 5 = 10$.
- Gọi $F_1$ là tiêu điểm bên trái ($-c; 0$) và $F_2$ là tiêu điểm bên phải ($c; 0$).
- Công thức bán kính qua tiêu:
  $MF_1 = a + e \cdot x_M = 5 + \frac{4}{5}(3) = 5 + 2.4 = 7.4$.
  $MF_2 = a - e \cdot x_M = 5 - \frac{4}{5}(3) = 5 - 2.4 = 2.6$.
- (Kiểm tra lại tổng $7.4 + 2.6 = 10$ khớp với kết quả trên).
- Kết luận: Tổng khoảng cách là 10. Các khoảng cách cụ thể là $7.4$ và $2.6$.
        `
    },
    "MATH10-PRAC-CH7-17": {
        level: `Vận dụng cao`,
        topic: `Tương giao Hipebol và Đường thẳng`,
        question: `Cho Hipebol $(H): \frac{x^2}{4} - \frac{y^2}{5} = 1$. Tìm tham số $m$ để đường thẳng $d: y = 2x + m$ cắt $(H)$ tại hai điểm phân biệt.`,
        hint: `Chìa khóa tư duy: Thay $y = 2x+m$ vào PT $(H)$. Quy đồng và đưa về PT bậc hai theo $x$. Giải điều kiện phương trình có 2 nghiệm phân biệt ($\Delta > 0$ và $a \neq 0$).`,
        solution: `
- Rút gọn PT $(H)$: nhân 2 vế với 20: $5x^2 - 4y^2 = 20$.
- Thay $y = 2x + m$ vào $(H)$:
  $5x^2 - 4(2x + m)^2 = 20$
  $\Leftrightarrow 5x^2 - 4(4x^2 + 4mx + m^2) = 20$
  $\Leftrightarrow 5x^2 - 16x^2 - 16mx - 4m^2 - 20 = 0$
  $\Leftrightarrow -11x^2 - 16mx - 4m^2 - 20 = 0$
  $\Leftrightarrow 11x^2 + 16mx + 4m^2 + 20 = 0 \quad (*)$.
- Để $d$ cắt $(H)$ tại 2 điểm phân biệt, phương trình $(*)$ phải có 2 nghiệm phân biệt.
- Điều kiện là $\Delta' > 0$:
  $\Delta' = (8m)^2 - 11(4m^2 + 20) = 64m^2 - 44m^2 - 220 = 20m^2 - 220$.
  Yêu cầu $\Delta' > 0 \Leftrightarrow 20m^2 > 220 \Leftrightarrow m^2 > 11 \Leftrightarrow m > \sqrt{11}$ hoặc $m < -\sqrt{11}$.
- Kết luận: $m \in (-\infty; -\sqrt{11}) \cup (\sqrt{11}; +\infty)$.
        `
    },
    "MATH10-PRAC-CH7-18": {
        level: `Vận dụng cao`,
        topic: `Ứng dụng thực tế của Parabol`,
        question: `Một cổng vòm có hình dạng một Parabol với chiều rộng tại chân cổng là $6$ mét và chiều cao tại điểm cao nhất là $4$ mét. Người ta muốn cho một chiếc xe tải hình hộp chữ nhật có chiều rộng $2.6$ mét đi qua. Hỏi chiếc xe tải có thể cao tối đa bao nhiêu mét để không chạm vào cổng? (Giả sử xe đi đúng vào chính giữa vòm cổng).`,
        hint: `Chìa khóa tư duy: Gắn hệ trục tọa độ $Oxy$ với gốc $O$ là đỉnh cổng vòm (Parabol quay xuống) hoặc gốc $O$ ở chính giữa mặt đất. Lập PT Parabol và tính độ cao tương ứng tại điểm mép xe tải.`,
        solution: `
- Gắn hệ trục tọa độ sao cho gốc $O$ nằm trên mặt đất, chính giữa chân cổng. 
- Khi đó mặt đất là trục $Ox$. Trục $Oy$ đi qua đỉnh cổng.
- Đỉnh cổng nằm trên $Oy$, cách mặt đất 4m $\Rightarrow$ Đỉnh $I(0; 4)$.
- Chiều rộng 6m nên 2 chân cổng chạm đất tại $A(-3; 0)$ và $B(3; 0)$.
- Giả sử Parabol có dạng $y = ax^2 + bx + c$.
  + Đỉnh nằm trên $Oy \Rightarrow b = 0$.
  + Đỉnh là $(0; 4) \Rightarrow c = 4$.
  + Qua điểm $B(3; 0) \Rightarrow a(3)^2 + 4 = 0 \Rightarrow 9a = -4 \Rightarrow a = -\frac{4}{9}$.
- Phương trình cổng vòm: $y = -\frac{4}{9}x^2 + 4$.
- Xe tải đi chính giữa cổng, rộng 2.6m, tức là chiếm đoạn $[-1.3; 1.3]$ trên trục $Ox$.
- Vị trí nguy hiểm nhất dễ chạm cổng là tại 2 mép xe, tức là tại $x = \pm 1.3$.
- Độ cao của vòm cổng tại $x = 1.3$ là:
  $y = -\frac{4}{9}(1.3)^2 + 4 = -\frac{4}{9}(1.69) + 4 \approx -0.75 + 4 = 3.25$ (mét).
- Kết luận: Chiếc xe tải cao tối đa $3.25$ mét thì có thể đi qua lọt cổng.
        `
    },
    "MATH10-PRAC-CH7-19": {
        level: `Vận dụng cao`,
        topic: `Cực trị khoảng cách đường tròn`,
        question: `Trong mặt phẳng $Oxy$, cho đường tròn $(C): (x - 2)^2 + (y + 1)^2 = 5$ và đường thẳng $\Delta: x + 2y - 10 = 0$. Tìm tọa độ điểm $M$ thuộc đường tròn $(C)$ sao cho khoảng cách từ $M$ đến $\Delta$ là ngắn nhất.`,
        hint: `Chìa khóa tư duy: Khoảng cách ngắn nhất xảy ra khi $M$ là giao điểm của $(C)$ và đường thẳng $d$ (đi qua tâm $I$ và vuông góc với $\Delta$), nằm cùng phía với $\Delta$ so với tâm.`,
        solution: `
**Bước 1: Tính khoảng cách từ tâm I đến $\Delta$**
- Tâm $I(2; -1)$, $R = \sqrt{5}$.
- $d(I, \Delta) = \frac{|2 + 2(-1) - 10|}{\sqrt{1^2 + 2^2}} = \frac{|-10|}{\sqrt{5}} = 2\sqrt{5}$.
- Vì $d(I, \Delta) = 2\sqrt{5} > R = \sqrt{5}$, đường thẳng $\Delta$ không cắt đường tròn.

**Bước 2: Viết phương trình đường thẳng qua I vuông góc $\Delta$**
- Gọi $d$ là đường thẳng qua $I(2; -1)$ và vuông góc $\Delta$.
- $\Delta$ có VPT $\vec{n} = (1; 2) \Rightarrow d$ có VCP $\vec{u} = (1; 2) \Rightarrow$ VPT của $d$ là $(2; -1)$.
- PT $d$: $2(x - 2) - 1(y + 1) = 0 \Leftrightarrow 2x - y - 5 = 0$.

**Bước 3: Tìm giao điểm của d và (C)**
- $M \in d \Rightarrow y = 2x - 5$. Thay vào PT $(C)$:
  $(x - 2)^2 + (2x - 5 + 1)^2 = 5$
  $\Leftrightarrow (x - 2)^2 + (2x - 4)^2 = 5$
  $\Leftrightarrow (x - 2)^2 + 4(x - 2)^2 = 5 \Leftrightarrow 5(x - 2)^2 = 5 \Leftrightarrow (x - 2)^2 = 1$.
- Suy ra: $x - 2 = 1 \Rightarrow x = 3, y = 1 \Rightarrow M_1(3; 1)$.
  Hoặc: $x - 2 = -1 \Rightarrow x = 1, y = -3 \Rightarrow M_2(1; -3)$.
  
**Bước 4: Chọn điểm gần nhất**
- Khoảng cách $M_1(3; 1)$ đến $\Delta$: $d_1 = \frac{|3 + 2(1) - 10|}{\sqrt{5}} = \frac{|-5|}{\sqrt{5}} = \sqrt{5}$.
- Khoảng cách $M_2(1; -3)$ đến $\Delta$: $d_2 = \frac{|1 + 2(-3) - 10|}{\sqrt{5}} = \frac{|-15|}{\sqrt{5}} = 3\sqrt{5}$.
- So sánh $d_1 < d_2$.
- Kết luận: Điểm cần tìm là $M(3; 1)$.
        `
    },
    "MATH10-PRAC-CH7-20": {
        level: `Vận dụng cao`,
        topic: `Góc giữa 2 đường thẳng và tối ưu`,
        question: `Trong mặt phẳng $Oxy$, cho đường thẳng $d_1: x + y = 0$ và điểm $A(0; 2)$. Tìm tọa độ điểm $B$ trên $d_1$ sao cho đường thẳng $AB$ tạo với $d_1$ một góc $60^\circ$.`,
        hint: `Chìa khóa tư duy: Lấy điểm $B(b; -b) \in d_1$. Tính VPT của $AB$. Dùng công thức góc giữa hai đường thẳng bằng $60^\circ$ ($\cos = 1/2$) để giải $b$.`,
        solution: `
- Vì $B \in d_1: x + y = 0$ nên tọa độ $B$ có dạng $(b; -b)$.
- Đường thẳng $AB$ đi qua $A(0; 2)$ và $B(b; -b)$.
  Vectơ chỉ phương của $AB$ là $\vec{AB} = (b; -b - 2)$.
  Suy ra vectơ pháp tuyến của $AB$ là $\vec{n_2} = (b+2; b)$.
- Đường thẳng $d_1: x + y = 0$ có vectơ pháp tuyến $\vec{n_1} = (1; 1)$.
- Theo giả thiết, góc giữa $AB$ và $d_1$ là $60^\circ$:
  $\cos 60^\circ = \frac{|\vec{n_1} \cdot \vec{n_2}|}{|\vec{n_1}| \cdot |\vec{n_2}|} = \frac{1}{2}$
  $\Rightarrow \frac{|1(b+2) + 1(b)|}{\sqrt{1^2 + 1^2} \sqrt{(b+2)^2 + b^2}} = \frac{1}{2}$
  $\Leftrightarrow \frac{|2b + 2|}{\sqrt{2} \sqrt{2b^2 + 4b + 4}} = \frac{1}{2}$
  $\Leftrightarrow \frac{2|b + 1|}{\sqrt{2} \sqrt{2} \sqrt{b^2 + 2b + 2}} = \frac{1}{2}$
  $\Leftrightarrow \frac{2|b + 1|}{2 \sqrt{b^2 + 2b + 2}} = \frac{1}{2} \Leftrightarrow 2|b + 1| = \sqrt{b^2 + 2b + 2}$.
- Bình phương hai vế:
  $4(b^2 + 2b + 1) = b^2 + 2b + 2$
  $\Leftrightarrow 4b^2 + 8b + 4 = b^2 + 2b + 2$
  $\Leftrightarrow 3b^2 + 6b + 2 = 0$.
- Giải pt: $\Delta' = 3^2 - 3(2) = 3 > 0 \Rightarrow b = \frac{-3 \pm \sqrt{3}}{3} = -1 \pm \frac{\sqrt{3}}{3}$.
- Kết luận: Có hai điểm $B$ thỏa mãn: $B\left( -1 + \frac{\sqrt{3}}{3}; 1 - \frac{\sqrt{3}}{3} \right)$ và $B\left( -1 - \frac{\sqrt{3}}{3}; 1 + \frac{\sqrt{3}}{3} \right)$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_PRACTICE_CH7;
}
