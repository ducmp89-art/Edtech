/* ==========================================================================
   S-NOTE 2026 - HỆ THỐNG BÀI TẬP ÔN LUYỆN TOÁN 10 MASTER
   Chương III: Hệ thức lượng trong tam giác
   Cấu trúc: 15 Bài tập (8 Vận dụng + 7 Vận dụng cao)
   (Định dạng backtick chuẩn hóa, an toàn cho render MathJax)
   ========================================================================== */

const DATA_PRACTICE_CH3 = {
    "MATH10-PRAC-CH3-01": {
        level: `Vận dụng`,
        topic: `Giá trị lượng giác của một góc`,
        question: `Cho góc $\alpha$ thỏa mãn $0^\circ < \alpha < 180^\circ$ và $\sin \alpha = \frac{3}{5}$. Biết $\alpha$ là góc tù, hãy tính giá trị của biểu thức $P = \frac{2\sin \alpha - 3\cos \alpha}{\tan \alpha + \cot \alpha}$.`,
        hint: `Chìa khóa tư duy: Góc tù ($90^\circ < \alpha < 180^\circ$) thì $\cos \alpha < 0$. Dùng hằng đẳng thức $\sin^2 \alpha + \cos^2 \alpha = 1$ để tìm $\cos \alpha$, sau đó tính $\tan, \cot$.`,
        solution: `
**Bước 1: Tìm $\cos \alpha$**
- Ta có $\sin^2 \alpha + \cos^2 \alpha = 1 \Rightarrow \cos^2 \alpha = 1 - \left(\frac{3}{5}\right)^2 = \frac{16}{25}$.
- Vì $\alpha$ là góc tù nên $\cos \alpha < 0$. Do đó, $\cos \alpha = -\frac{4}{5}$.

**Bước 2: Tìm $\tan \alpha$ và $\cot \alpha$**
- $\tan \alpha = \frac{\sin \alpha}{\cos \alpha} = \frac{3/5}{-4/5} = -\frac{3}{4}$.
- $\cot \alpha = \frac{1}{\tan \alpha} = -\frac{4}{3}$.

**Bước 3: Tính giá trị biểu thức $P$**
- Tử số: $2\sin \alpha - 3\cos \alpha = 2\left(\frac{3}{5}\right) - 3\left(-\frac{4}{5}\right) = \frac{6}{5} + \frac{12}{5} = \frac{18}{5}$.
- Mẫu số: $\tan \alpha + \cot \alpha = -\frac{3}{4} - \frac{4}{3} = -\frac{25}{12}$.
- Biểu thức $P = \frac{18/5}{-25/12} = \frac{18}{5} \times \left(-\frac{12}{25}\right) = -\frac{216}{125}$.
        `
    },
    "MATH10-PRAC-CH3-02": {
        level: `Vận dụng`,
        topic: `Rút gọn biểu thức lượng giác`,
        question: `Rút gọn biểu thức sau: $A = \sin(180^\circ - x) + \cos(90^\circ - x) - 2\sin x + \tan(180^\circ - x) \cdot \cot x$.`,
        hint: `Chìa khóa tư duy: Áp dụng các quy tắc "Sin bù" (góc $180^\circ - x$) và "Phụ chéo" (góc $90^\circ - x$). Nhớ $\tan(180^\circ - x) = -\tan x$.`,
        solution: `
- Theo tính chất "Sin bù": $\sin(180^\circ - x) = \sin x$.
- Theo tính chất "Phụ chéo": $\cos(90^\circ - x) = \sin x$.
- Theo tính chất góc bù của hàm tang: $\tan(180^\circ - x) = -\tan x$.
- Thay vào biểu thức $A$:
  $A = \sin x + \sin x - 2\sin x + (-\tan x) \cdot \cot x$
  $A = (2\sin x - 2\sin x) - (\tan x \cdot \cot x)$
- Vì $\tan x \cdot \cot x = 1$ (với điều kiện biểu thức xác định), ta có:
  $A = 0 - 1 = -1$.
- Kết luận: $A = -1$.
        `
    },
    "MATH10-PRAC-CH3-03": {
        level: `Vận dụng`,
        topic: `Định lí Côsin - Tính cạnh`,
        question: `Cho tam giác $ABC$ có $AB = 5$, $AC = 8$ và góc $\widehat{A} = 60^\circ$. Tính độ dài cạnh $BC$ và tính diện tích tam giác $ABC$.`,
        hint: `Chìa khóa tư duy: Biết 2 cạnh và góc xen giữa, dùng trực tiếp Định lí Côsin để tìm cạnh còn lại. Dùng công thức $S = \frac{1}{2}bc\sin A$ để tính diện tích.`,
        solution: `
**Bước 1: Tính cạnh BC**
- Áp dụng Định lí Côsin cho $\triangle ABC$:
  $BC^2 = AB^2 + AC^2 - 2 \cdot AB \cdot AC \cdot \cos A$
  $BC^2 = 5^2 + 8^2 - 2 \cdot 5 \cdot 8 \cdot \cos 60^\circ$
  $BC^2 = 25 + 64 - 80 \cdot \frac{1}{2} = 89 - 40 = 49$.
- Suy ra $BC = \sqrt{49} = 7$.

**Bước 2: Tính diện tích tam giác**
- Áp dụng công thức tính diện tích:
  $S = \frac{1}{2} \cdot AB \cdot AC \cdot \sin A$
  $S = \frac{1}{2} \cdot 5 \cdot 8 \cdot \sin 60^\circ = 20 \cdot \frac{\sqrt{3}}{2} = 10\sqrt{3}$.
- Kết luận: Cạnh $BC = 7$, Diện tích $S = 10\sqrt{3}$.
        `
    },
    "MATH10-PRAC-CH3-04": {
        level: `Vận dụng`,
        topic: `Định lí Côsin - Tính góc`,
        question: `Cho tam giác $ABC$ có độ dài 3 cạnh lần lượt là $a = 3$, $b = 5$, $c = 7$. Tính số đo góc $\widehat{C}$.`,
        hint: `Chìa khóa tư duy: Khi biết 3 cạnh, luôn dùng hệ quả của Định lí Côsin để tính các góc: $\cos C = \frac{a^2 + b^2 - c^2}{2ab}$.`,
        solution: `
- Áp dụng hệ quả của Định lí Côsin cho $\triangle ABC$:
  $\cos C = \frac{a^2 + b^2 - c^2}{2ab}$
- Thay số vào công thức:
  $\cos C = \frac{3^2 + 5^2 - 7^2}{2 \cdot 3 \cdot 5}$
  $\cos C = \frac{9 + 25 - 49}{30} = \frac{-15}{30} = -\frac{1}{2}$.
- Vì $\cos C = -\frac{1}{2}$ và $0^\circ < C < 180^\circ$, ta suy ra $\widehat{C} = 120^\circ$.
- Kết luận: Góc $\widehat{C}$ có số đo là $120^\circ$. (Đây là một tam giác tù).
        `
    },
    "MATH10-PRAC-CH3-05": {
        level: `Vận dụng`,
        topic: `Định lí Sin & Giải tam giác`,
        question: `Cho tam giác $ABC$ có $\widehat{A} = 45^\circ$, $\widehat{B} = 105^\circ$ và cạnh $c = 10$. Tính độ dài cạnh $a$ và bán kính đường tròn ngoại tiếp $R$ của tam giác $ABC$.`,
        hint: `Chìa khóa tư duy: Dùng định lý tổng 3 góc bằng $180^\circ$ để tìm góc $C$. Sau đó dùng Định lí Sin: $\frac{a}{\sin A} = \frac{c}{\sin C} = 2R$.`,
        solution: `
**Bước 1: Tính góc C**
- $\widehat{C} = 180^\circ - (\widehat{A} + \widehat{B}) = 180^\circ - (45^\circ + 105^\circ) = 30^\circ$.

**Bước 2: Tính bán kính R**
- Theo Định lí Sin: $\frac{c}{\sin C} = 2R$
  $\Rightarrow 2R = \frac{10}{\sin 30^\circ} = \frac{10}{1/2} = 20$.
- Suy ra bán kính $R = 10$.

**Bước 3: Tính cạnh a**
- Theo Định lí Sin: $\frac{a}{\sin A} = 2R$
  $\Rightarrow a = 2R \cdot \sin A = 20 \cdot \sin 45^\circ = 20 \cdot \frac{\sqrt{2}}{2} = 10\sqrt{2}$.
- Kết luận: $a = 10\sqrt{2}$ và $R = 10$.
        `
    },
    "MATH10-PRAC-CH3-06": {
        level: `Vận dụng`,
        topic: `Công thức Heron & Các bán kính`,
        question: `Cho tam giác $ABC$ có các cạnh $a = 13$, $b = 14$, $c = 15$. Tính diện tích tam giác, bán kính đường tròn nội tiếp $r$ và độ dài đường cao $h_a$.`,
        hint: `Chìa khóa tư duy: Biết 3 cạnh $\rightarrow$ dùng Heron tính $S$. Sau đó dùng $S = pr$ để tính $r$, và $S = \frac{1}{2} a \cdot h_a$ để tính $h_a$.`,
        solution: `
**Bước 1: Tính nửa chu vi và Diện tích (Heron)**
- Nửa chu vi $p = \frac{13 + 14 + 15}{2} = \frac{42}{2} = 21$.
- Diện tích: $S = \sqrt{p(p-a)(p-b)(p-c)}$
  $S = \sqrt{21(21-13)(21-14)(21-15)}$
  $S = \sqrt{21 \cdot 8 \cdot 7 \cdot 6} = \sqrt{(7 \cdot 3) \cdot 8 \cdot 7 \cdot (2 \cdot 3)} = \sqrt{7^2 \cdot 3^2 \cdot 16} = 7 \cdot 3 \cdot 4 = 84$.

**Bước 2: Tính r và $h_a$**
- Ta có $S = p \cdot r \Rightarrow r = \frac{S}{p} = \frac{84}{21} = 4$.
- Ta có $S = \frac{1}{2} \cdot a \cdot h_a \Rightarrow 84 = \frac{1}{2} \cdot 13 \cdot h_a \Rightarrow h_a = \frac{168}{13}$.
- Kết luận: $S = 84$, $r = 4$, $h_a = \frac{168}{13}$.
        `
    },
    "MATH10-PRAC-CH3-07": {
        level: `Vận dụng`,
        topic: `Toán thực tế (Đo khoảng cách)`,
        question: `Hai điểm $A$ và $B$ nằm ở hai bên bờ sông (không thể qua lại được). Để đo khoảng cách $AB$, người ta chọn một điểm $C$ cùng bờ với $B$. Đo được $BC = 50$ m, góc $\widehat{ACB} = 75^\circ$ và góc $\widehat{ABC} = 60^\circ$. Tính khoảng cách $AB$ (làm tròn đến hàng phần mười).`,
        hint: `Chìa khóa tư duy: Mô hình $\triangle ABC$ biết 1 cạnh và 2 góc kề. Tính góc còn lại rồi dùng Định lí Sin.`,
        solution: `
**Bước 1: Tính góc $\widehat{BAC}$**
- Trong tam giác $ABC$, ta có:
  $\widehat{BAC} = 180^\circ - (\widehat{ABC} + \widehat{ACB}) = 180^\circ - (60^\circ + 75^\circ) = 45^\circ$.

**Bước 2: Tính khoảng cách AB**
- Áp dụng Định lí Sin cho $\triangle ABC$:
  $\frac{AB}{\sin C} = \frac{BC}{\sin A}$
- Thay số:
  $\frac{AB}{\sin 75^\circ} = \frac{50}{\sin 45^\circ}$
  $AB = \frac{50 \cdot \sin 75^\circ}{\sin 45^\circ} = \frac{50 \cdot \frac{\sqrt{6}+\sqrt{2}}{4}}{\frac{\sqrt{2}}{2}} = 25(1 + \sqrt{3}) \approx 68.3$ (m).
- Kết luận: Khoảng cách giữa hai điểm A và B xấp xỉ $68.3$ m.
        `
    },
    "MATH10-PRAC-CH3-08": {
        level: `Vận dụng`,
        topic: `Toán thực tế (Lực và Vectơ)`,
        question: `Hai lực $\vec{F_1}$ và $\vec{F_2}$ cùng tác dụng vào một vật tại điểm $O$. Biết $|\vec{F_1}| = 30N$, $|\vec{F_2}| = 40N$ và góc giữa hai hướng của lực là $60^\circ$. Tính cường độ của lực tổng hợp $\vec{F}$ tác dụng lên vật.`,
        hint: `Chìa khóa tư duy: Lực tổng hợp là đường chéo của hình bình hành. Dùng Định lí Côsin trong tam giác được tạo bởi nửa hình bình hành (lưu ý góc trong tam giác bù với $60^\circ$).`,
        solution: `
- Lực tổng hợp $\vec{F} = \vec{F_1} + \vec{F_2}$. Độ lớn $|\vec{F}|$ được biểu diễn bằng đường chéo của hình bình hành tạo bởi $\vec{F_1}$ và $\vec{F_2}$.
- Gọi góc giữa hai lực là $\alpha = 60^\circ$.
- Theo quy tắc hình bình hành, độ lớn đường chéo $F$ thỏa mãn công thức:
  $F^2 = F_1^2 + F_2^2 + 2F_1 F_2 \cos \alpha$
  *(Giải thích: Góc trong tam giác cấu tạo hình bình hành là $180^\circ - \alpha$. Áp dụng định lí Côsin: $F^2 = F_1^2 + F_2^2 - 2F_1 F_2 \cos(180^\circ - \alpha) = F_1^2 + F_2^2 + 2F_1 F_2 \cos \alpha$)*.
- Thay số:
  $F^2 = 30^2 + 40^2 + 2(30)(40)\cos 60^\circ$
  $F^2 = 900 + 1600 + 2400 \cdot \frac{1}{2} = 2500 + 1200 = 3700$.
- Suy ra $F = \sqrt{3700} = 10\sqrt{37} \approx 60.83$ (N).
- Kết luận: Cường độ lực tổng hợp là $10\sqrt{37}$ N.
        `
    },
    "MATH10-PRAC-CH3-09": {
        level: `Vận dụng cao`,
        topic: `Toán thực tế (Đo chiều cao tháp)`,
        question: `Để đo chiều cao $h$ của một ngọn tháp $CD$ mà không thể đến gần chân tháp, người ta chọn hai điểm $A, B$ thẳng hàng với chân tháp $C$ sao cho $AB = 24$ m. Đứng tại $A$, người ta nhìn thấy đỉnh tháp $D$ dưới một góc nâng $30^\circ$ (so với phương ngang). Đứng tại $B$ (gần tháp hơn), góc nâng nhìn thấy đỉnh $D$ là $45^\circ$. Tính chiều cao $h$ của ngọn tháp (bỏ qua chiều cao người đo).`,
        hint: `Chìa khóa tư duy: Đặt $CD = h$. Biểu diễn $AC$ và $BC$ theo $h$ bằng lượng giác tam giác vuông, sau đó dùng $AC - BC = AB$.`,
        solution: `
- Xét tam giác vuông $ACD$ (vuông tại $C$), ta có:
  $\cot A = \frac{AC}{CD} \Rightarrow AC = CD \cdot \cot 30^\circ = h \cdot \sqrt{3}$.
- Xét tam giác vuông $BCD$ (vuông tại $C$), ta có:
  $\cot B = \frac{BC}{CD} \Rightarrow BC = CD \cdot \cot 45^\circ = h \cdot 1 = h$.
- Vì $A, B, C$ thẳng hàng và $B$ nằm giữa $A$ và $C$ nên:
  $AB = AC - BC$
  $24 = h\sqrt{3} - h \Leftrightarrow h(\sqrt{3} - 1) = 24$.
- Từ đó tính được $h = \frac{24}{\sqrt{3} - 1} = \frac{24(\sqrt{3} + 1)}{2} = 12(\sqrt{3} + 1) \approx 32.78$ (m).
- Kết luận: Ngọn tháp cao khoảng 32.78 mét.
        `
    },
    "MATH10-PRAC-CH3-10": {
        level: `Vận dụng cao`,
        topic: `Nhận dạng tam giác`,
        question: `Cho tam giác $ABC$ có diện tích $S$ thỏa mãn đẳng thức: $4S = a^2 - (b - c)^2$. Hãy chứng minh tam giác $ABC$ là tam giác vuông tại $A$.`,
        hint: `Chìa khóa tư duy: Thay $4S = 2bc\sin A$ và phân tích $a^2 - (b-c)^2$ bằng định lí Côsin ($a^2 = b^2 + c^2 - 2bc\cos A$).`,
        solution: `
- Áp dụng công thức diện tích $S = \frac{1}{2}bc\sin A$, vế trái trở thành:
  $4S = 4 \left( \frac{1}{2}bc\sin A \right) = 2bc\sin A$.
- Phân tích vế phải, áp dụng định lí Côsin ($a^2 = b^2 + c^2 - 2bc\cos A$):
  $VP = a^2 - (b^2 - 2bc + c^2)$
  $VP = (b^2 + c^2 - 2bc\cos A) - b^2 + 2bc - c^2$
  $VP = 2bc - 2bc\cos A = 2bc(1 - \cos A)$.
- Cân bằng hai vế, ta được:
  $2bc\sin A = 2bc(1 - \cos A)$
- Vì $b, c > 0$ nên ta có thể chia cả hai vế cho $2bc$:
  $\sin A = 1 - \cos A$.
- Bình phương hai vế (vì $\sin A > 0$ và $1 - \cos A \ge 0$):
  $\sin^2 A = 1 - 2\cos A + \cos^2 A$
- Thay $\sin^2 A = 1 - \cos^2 A$:
  $1 - \cos^2 A = 1 - 2\cos A + \cos^2 A$
  $\Leftrightarrow 2\cos^2 A - 2\cos A = 0 \Leftrightarrow 2\cos A(\cos A - 1) = 0$.
- Suy ra $\cos A = 0$ hoặc $\cos A = 1$.
  + Nếu $\cos A = 1 \Rightarrow \widehat{A} = 0^\circ$ (Loại, vì A là góc của tam giác).
  + Nếu $\cos A = 0 \Rightarrow \widehat{A} = 90^\circ$.
- Kết luận: Tam giác $ABC$ là tam giác vuông tại $A$.
        `
    },
    "MATH10-PRAC-CH3-11": {
        level: `Vận dụng cao`,
        topic: `Nhận dạng tam giác`,
        question: `Cho tam giác $ABC$ thỏa mãn điều kiện: $\frac{a}{\cos A} = \frac{b}{\cos B}$. Chứng minh rằng tam giác $ABC$ là tam giác cân.`,
        hint: `Chìa khóa tư duy: Sử dụng định lí Sin $a = 2R\sin A$, $b = 2R\sin B$ thay vào giả thiết để đưa về phương trình lượng giác.`,
        solution: `
- Theo định lí Sin: $a = 2R\sin A$ và $b = 2R\sin B$.
- Thay vào giả thiết, ta được:
  $\frac{2R\sin A}{\cos A} = \frac{2R\sin B}{\cos B}$
- Chia hai vế cho $2R$, ta có:
  $\tan A = \tan B$.
- Vì $A, B$ là các góc của một tam giác ($0^\circ < A, B < 180^\circ$) và hàm số $\tan x$ đồng biến trên khoảng $(0^\circ; 90^\circ)$ (cũng như $(90^\circ; 180^\circ)$), nên đẳng thức xảy ra khi và chỉ khi:
  $\widehat{A} = \widehat{B}$.
- Từ $\widehat{A} = \widehat{B}$ suy ra tam giác $ABC$ cân tại $C$.
- *(Lưu ý: Bài toán yêu cầu $\cos A \neq 0$ và $\cos B \neq 0$, tức là tam giác không vuông tại A hoặc B. Nếu tam giác vuông cân thì biểu thức ban đầu không xác định).*
        `
    },
    "MATH10-PRAC-CH3-12": {
        level: `Vận dụng cao`,
        topic: `Chứng minh đẳng thức hình học`,
        question: `Chứng minh rằng trong mọi tam giác $ABC$, ta luôn có: $a(b \cos C - c \cos B) = b^2 - c^2$.`,
        hint: `Chìa khóa tư duy: Nhân phân phối $a$ vào trong. Sau đó áp dụng hệ quả định lí Côsin cho $\cos B$ và $\cos C$ rồi rút gọn.`,
        solution: `
- Ta có vế trái: $VT = ab\cos C - ac\cos B$.
- Thay hệ quả định lí Côsin $\cos C = \frac{a^2 + b^2 - c^2}{2ab}$ và $\cos B = \frac{a^2 + c^2 - b^2}{2ac}$ vào biểu thức:
  $VT = ab \left( \frac{a^2 + b^2 - c^2}{2ab} \right) - ac \left( \frac{a^2 + c^2 - b^2}{2ac} \right)$
- Rút gọn $ab$ và $ac$ ở tử và mẫu:
  $VT = \frac{a^2 + b^2 - c^2}{2} - \frac{a^2 + c^2 - b^2}{2}$
- Gom lại cùng mẫu:
  $VT = \frac{a^2 + b^2 - c^2 - (a^2 + c^2 - b^2)}{2}$
  $VT = \frac{a^2 + b^2 - c^2 - a^2 - c^2 + b^2}{2} = \frac{2b^2 - 2c^2}{2} = b^2 - c^2$.
- Vậy $VT = VP$. Đẳng thức được chứng minh.
        `
    },
    "MATH10-PRAC-CH3-13": {
        level: `Vận dụng cao`,
        topic: `Bài toán Cực trị trong tam giác`,
        question: `Cho tam giác $ABC$ có độ dài cạnh $a$ không đổi và góc $\widehat{A} = \alpha$ không đổi ($0^\circ < \alpha < 180^\circ$). Tìm điều kiện của tam giác $ABC$ để chu vi tam giác đạt giá trị lớn nhất.`,
        hint: `Chìa khóa tư duy: Chu vi $p = a + b + c$. Vì $a$ cố định, ta cần tìm Max của $b + c$. Dùng định lí Sin biến đổi $b+c = 2R(\sin B + \sin C)$ rồi dùng công thức tổng thành tích.`,
        solution: `
- Áp dụng Định lí Sin: $b = 2R\sin B, c = 2R\sin C$.
- Bán kính đường tròn ngoại tiếp $R = \frac{a}{2\sin A}$ là một hằng số (vì $a$ và $A$ cố định).
- Ta xét tổng $b + c$:
  $b + c = 2R(\sin B + \sin C)$
- Áp dụng công thức biến đổi tổng thành tích:
  $\sin B + \sin C = 2\sin\left(\frac{B+C}{2}\right)\cos\left(\frac{B-C}{2}\right)$.
- Mà $B+C = 180^\circ - A \Rightarrow \frac{B+C}{2} = 90^\circ - \frac{A}{2}$.
- Do đó $\sin\left(\frac{B+C}{2}\right) = \cos\frac{A}{2}$ (không đổi).
- Suy ra $b + c = 4R \cdot \cos\frac{A}{2} \cdot \cos\left(\frac{B-C}{2}\right)$.
- Vì $\cos\left(\frac{B-C}{2}\right) \le 1$, nên $b+c$ đạt giá trị lớn nhất khi và chỉ khi:
  $\cos\left(\frac{B-C}{2}\right) = 1 \Leftrightarrow \frac{B-C}{2} = 0 \Leftrightarrow B = C$.
- Kết luận: Chu vi tam giác đạt giá trị lớn nhất khi tam giác $ABC$ cân tại $A$.
        `
    },
    "MATH10-PRAC-CH3-14": {
        level: `Vận dụng cao`,
        topic: `Đường trung tuyến Apollonius`,
        question: `Cho tam giác $ABC$ có 3 đường trung tuyến $m_a, m_b, m_c$. Chứng minh rằng: $m_a^2 + m_b^2 + m_c^2 = \frac{3}{4}(a^2 + b^2 + c^2)$.`,
        hint: `Chìa khóa tư duy: Viết công thức độ dài 3 đường trung tuyến theo hệ thức Apollonius, sau đó cộng dọc 3 phương trình.`,
        solution: `
- Theo định lí đường trung tuyến (Apollonius), ta có:
  $m_a^2 = \frac{2(b^2 + c^2) - a^2}{4}$
  $m_b^2 = \frac{2(a^2 + c^2) - b^2}{4}$
  $m_c^2 = \frac{2(a^2 + b^2) - c^2}{4}$
- Cộng vế theo vế 3 đẳng thức trên, ta được vế trái $VT$:
  $VT = \frac{2b^2 + 2c^2 - a^2 + 2a^2 + 2c^2 - b^2 + 2a^2 + 2b^2 - c^2}{4}$
- Nhóm các hạng tử đồng dạng:
  $a^2$: có $-a^2 + 2a^2 + 2a^2 = 3a^2$.
  $b^2$: có $2b^2 - b^2 + 2b^2 = 3b^2$.
  $c^2$: có $2c^2 + 2c^2 - c^2 = 3c^2$.
- Rút gọn tử số:
  $VT = \frac{3a^2 + 3b^2 + 3c^2}{4} = \frac{3}{4}(a^2 + b^2 + c^2)$.
- Đẳng thức được chứng minh.
        `
    },
    "MATH10-PRAC-CH3-15": {
        level: `Vận dụng cao`,
        topic: `Tối ưu hóa (Lực và Khoảng cách Động)`,
        question: `Hai chiếc tàu thủy $A$ và $B$ xuất phát cùng lúc từ một bến cảng $O$. Tàu $A$ chạy về hướng Đông với vận tốc $20$ km/h. Tàu $B$ chạy về hướng Đông Bắc (góc $45^\circ$ so với hướng Đông) với vận tốc $30$ km/h. Sau 2 giờ, khoảng cách giữa hai tàu là bao nhiêu?`,
        hint: `Chìa khóa tư duy: Xác định quãng đường mỗi tàu đi được sau 2 giờ. Sau đó dùng Định lí Côsin cho tam giác tạo bởi bến cảng và vị trí 2 tàu.`,
        solution: `
**Bước 1: Quãng đường di chuyển**
- Tàu $A$ chạy với vận tốc 20 km/h, sau 2 giờ đi được quãng đường $OA = 20 \times 2 = 40$ km.
- Tàu $B$ chạy với vận tốc 30 km/h, sau 2 giờ đi được quãng đường $OB = 30 \times 2 = 60$ km.

**Bước 2: Xác định góc giữa hai hướng đi**
- Tàu $A$ đi hướng Đông, tàu $B$ đi hướng Đông Bắc.
- Góc giữa hướng Đông và hướng Đông Bắc là $\alpha = 45^\circ$. Do đó, góc $\widehat{AOB} = 45^\circ$.

**Bước 3: Tính khoảng cách AB**
- Áp dụng Định lí Côsin vào tam giác $OAB$:
  $AB^2 = OA^2 + OB^2 - 2 \cdot OA \cdot OB \cdot \cos \widehat{AOB}$
  $AB^2 = 40^2 + 60^2 - 2(40)(60)\cos 45^\circ$
  $AB^2 = 1600 + 3600 - 4800 \left(\frac{\sqrt{2}}{2}\right) = 5200 - 2400\sqrt{2}$.
- $AB^2 \approx 5200 - 3394.1 = 1805.9$.
- Khoảng cách giữa hai tàu sau 2 giờ là $AB = \sqrt{5200 - 2400\sqrt{2}} \approx 42.5$ km.
- Kết luận: Khoảng cách giữa hai tàu xấp xỉ $42.5$ km.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_PRACTICE_CH3;
}
