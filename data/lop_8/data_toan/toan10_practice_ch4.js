/* ==========================================================================
   S-NOTE 2026 - HỆ THỐNG BÀI TẬP ÔN LUYỆN TOÁN 10 MASTER
   Chương IV: Vectơ
   Cấu trúc: 5 Vận dụng (VD) + 5 Vận dụng cao (VDC)
   (Định dạng backtick chuẩn hóa, an toàn cho render MathJax)
   ========================================================================== */

const DATA_PRACTICE_CH4 = {
    "MATH10-PRAC-CH4-01": {
        level: `Vận dụng`,
        topic: `Rút gọn biểu thức Vectơ`,
        question: `Cho 6 điểm $A, B, C, D, E, F$ bất kỳ. Chứng minh rằng: $\vec{AD} + \vec{BE} + \vec{CF} = \vec{AE} + \vec{BF} + \vec{CD}$.`,
        hint: `Chìa khóa tư duy: Sử dụng quy tắc 3 điểm (quy tắc chèn điểm). Chèn điểm $E$ vào $\vec{AD}$, chèn điểm $F$ vào $\vec{BE}$, chèn điểm $D$ vào $\vec{CF}$.`,
        solution: `
- Ta biến đổi vế trái (VT) bằng cách dùng quy tắc chèn điểm:
  $\vec{AD} = \vec{AE} + \vec{ED}$
  $\vec{BE} = \vec{BF} + \vec{FE}$
  $\vec{CF} = \vec{CD} + \vec{DF}$
- Cộng vế theo vế 3 đẳng thức trên, ta được:
  $VT = (\vec{AE} + \vec{ED}) + (\vec{BF} + \vec{FE}) + (\vec{CD} + \vec{DF})$
- Sắp xếp lại các hạng tử:
  $VT = (\vec{AE} + \vec{BF} + \vec{CD}) + (\vec{ED} + \vec{DF} + \vec{FE})$
- Áp dụng quy tắc cộng vectơ liên tiếp cho nhóm thứ hai:
  $\vec{ED} + \vec{DF} + \vec{FE} = \vec{EF} + \vec{FE} = \vec{EE} = \vec{0}$.
- Do đó: $VT = \vec{AE} + \vec{BF} + \vec{CD} + \vec{0} = \vec{AE} + \vec{BF} + \vec{CD}$ (bằng Vế phải).
- Đẳng thức được chứng minh.
        `
    },
    "MATH10-PRAC-CH4-02": {
        level: `Vận dụng`,
        topic: `Tọa độ Vectơ trên hệ Oxy`,
        question: `Trong hệ trục tọa độ $Oxy$, cho tam giác $ABC$ có $A(-2; 3), B(4; -1), C(1; 5)$. Tìm tọa độ trọng tâm $G$ của tam giác và tọa độ điểm $D$ sao cho tứ giác $ABCD$ là hình bình hành.`,
        hint: `Chìa khóa tư duy: Trọng tâm $G$ bằng trung bình cộng tọa độ 3 đỉnh. $ABCD$ là hình bình hành khi và chỉ khi $\vec{AB} = \vec{DC}$ (chú ý thứ tự đỉnh).`,
        solution: `
**Bước 1: Tìm tọa độ trọng tâm G**
- $x_G = \frac{x_A + x_B + x_C}{3} = \frac{-2 + 4 + 1}{3} = 1$.
- $y_G = \frac{y_A + y_B + y_C}{3} = \frac{3 + (-1) + 5}{3} = \frac{7}{3}$.
- Vậy $G\left(1; \frac{7}{3}\right)$.

**Bước 2: Tìm tọa độ điểm D**
- Gọi $D(x_D; y_D)$. Tứ giác $ABCD$ là hình bình hành $\Leftrightarrow \vec{AB} = \vec{DC}$.
- Ta có $\vec{AB} = (4 - (-2); -1 - 3) = (6; -4)$.
- Ta có $\vec{DC} = (1 - x_D; 5 - y_D)$.
- Cân bằng tọa độ hai vectơ:
  $\begin{cases} 1 - x_D = 6 \\ 5 - y_D = -4 \end{cases} \Leftrightarrow \begin{cases} x_D = -5 \\ y_D = 9 \end{cases}$.
- Kết luận: $D(-5; 9)$.
        `
    },
    "MATH10-PRAC-CH4-03": {
        level: `Vận dụng`,
        topic: `Phân tích Vectơ`,
        question: `Cho tam giác $ABC$. Gọi $M$ là trung điểm của $AB$ và $N$ là điểm trên cạnh $AC$ sao cho $NC = 2NA$. Hãy phân tích vectơ $\vec{MN}$ theo hai vectơ $\vec{AB}$ và $\vec{AC}$.`,
        hint: `Chìa khóa tư duy: $\vec{MN} = \vec{AN} - \vec{AM}$. Dựa vào tỉ lệ đoạn thẳng để biểu diễn $\vec{AN}$ theo $\vec{AC}$ và $\vec{AM}$ theo $\vec{AB}$.`,
        solution: `
- Vì $M$ là trung điểm của $AB$ nên: $\vec{AM} = \frac{1}{2}\vec{AB}$.
- Điểm $N$ nằm trên cạnh $AC$ và $NC = 2NA$, suy ra đoạn $AC$ chia làm 3 phần, $AN$ chiếm 1 phần.
  Do đó: $\vec{AN} = \frac{1}{3}\vec{AC}$.
- Áp dụng quy tắc hiệu (chèn điểm $A$ vào $\vec{MN}$):
  $\vec{MN} = \vec{AN} - \vec{AM}$
- Thay hai biểu thức trên vào, ta được:
  $\vec{MN} = \frac{1}{3}\vec{AC} - \frac{1}{2}\vec{AB} = -\frac{1}{2}\vec{AB} + \frac{1}{3}\vec{AC}$.
- Kết luận: $\vec{MN} = -\frac{1}{2}\vec{AB} + \frac{1}{3}\vec{AC}$.
        `
    },
    "MATH10-PRAC-CH4-04": {
        level: `Vận dụng`,
        topic: `Tích vô hướng định nghĩa`,
        question: `Cho tam giác đều $ABC$ có cạnh bằng $a$. Tính các tích vô hướng sau: $P = \vec{AB} \cdot \vec{AC}$ và $Q = \vec{AB} \cdot \vec{BC}$.`,
        hint: `Chìa khóa tư duy: Áp dụng công thức $\vec{u} \cdot \vec{v} = |\vec{u}| |\vec{v}| \cos(\vec{u}, \vec{v})$. Góc giữa $\vec{AB}$ và $\vec{BC}$ KHÔNG phải là $60^\circ$ mà phải đưa về chung gốc.`,
        solution: `
**Bước 1: Tính P = $\vec{AB} \cdot \vec{AC}$**
- Hai vectơ $\vec{AB}$ và $\vec{AC}$ đã chung gốc $A$. Góc giữa chúng là $\widehat{BAC} = 60^\circ$.
- $P = |\vec{AB}| \cdot |\vec{AC}| \cdot \cos 60^\circ = a \cdot a \cdot \frac{1}{2} = \frac{a^2}{2}$.

**Bước 2: Tính Q = $\vec{AB} \cdot \vec{BC}$**
- Hai vectơ chưa chung gốc. Ta đưa về chung gốc $B$: $\vec{AB} = -\vec{BA}$.
- $Q = (-\vec{BA}) \cdot \vec{BC} = - (\vec{BA} \cdot \vec{BC})$.
- Góc giữa $\vec{BA}$ và $\vec{BC}$ là $\widehat{ABC} = 60^\circ$.
- $Q = - (|\vec{BA}| \cdot |\vec{BC}| \cdot \cos 60^\circ) = - \left(a \cdot a \cdot \frac{1}{2}\right) = -\frac{a^2}{2}$.
        `
    },
    "MATH10-PRAC-CH4-05": {
        level: `Vận dụng`,
        topic: `Góc giữa hai Vectơ`,
        question: `Trong hệ trục tọa độ $Oxy$, cho hai điểm $A(1; 2)$ và $B(-3; 1)$. Gọi $\vec{u} = \vec{OA}$ và $\vec{v} = \vec{OB}$. Tính góc giữa hai vectơ $\vec{u}$ và $\vec{v}$ (làm tròn đến độ).`,
        hint: `Chìa khóa tư duy: Tính tích vô hướng $\vec{u} \cdot \vec{v}$ bằng tọa độ, tính độ dài $|\vec{u}|, |\vec{v}|$, sau đó dùng công thức $\cos \alpha = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}||\vec{v}|}$.`,
        solution: `
- Ta có $\vec{u} = \vec{OA} = (1; 2)$ và $\vec{v} = \vec{OB} = (-3; 1)$.
- Tích vô hướng: $\vec{u} \cdot \vec{v} = 1(-3) + 2(1) = -3 + 2 = -1$.
- Độ dài các vectơ:
  $|\vec{u}| = \sqrt{1^2 + 2^2} = \sqrt{5}$.
  $|\vec{v}| = \sqrt{(-3)^2 + 1^2} = \sqrt{10}$.
- Góc giữa hai vectơ:
  $\cos(\vec{u}, \vec{v}) = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}| \cdot |\vec{v}|} = \frac{-1}{\sqrt{5} \cdot \sqrt{10}} = \frac{-1}{\sqrt{50}} = \frac{-1}{5\sqrt{2}} = -\frac{\sqrt{2}}{10}$.
- Bấm máy tính: $\arccos\left(-\frac{\sqrt{2}}{10}\right) \approx 98^\circ 7'$.
- Kết luận: Góc giữa hai vectơ xấp xỉ $98^\circ$.
        `
    },
    "MATH10-PRAC-CH4-06": {
        level: `Vận dụng cao`,
        topic: `Quỹ tích điểm (Tâm tỉ cự)`,
        question: `Cho tam giác $ABC$. Tìm tập hợp các điểm $M$ thỏa mãn đẳng thức vectơ: $|2\vec{MA} + \vec{MB} + \vec{MC}| = |3\vec{MB} - 3\vec{MC}|$.`,
        hint: `Chìa khóa tư duy: VT dùng chèn điểm phụ: $\vec{MB} + \vec{MC} = 2\vec{MI}$ ($I$ là tđ $BC$), rồi $2\vec{MA} + 2\vec{MI} = 4\vec{MG}$. VP dùng hiệu 2 vectơ.`,
        solution: `
**Bước 1: Rút gọn Vế trái (VT)**
- Gọi $I$ là trung điểm của $BC \Rightarrow \vec{MB} + \vec{MC} = 2\vec{MI}$.
- Thay vào VT: $VT = |2\vec{MA} + 2\vec{MI}| = 2|\vec{MA} + \vec{MI}|$.
- Gọi $G$ là trung điểm của đoạn $AI \Rightarrow \vec{MA} + \vec{MI} = 2\vec{MG}$.
- Suy ra $VT = 2 |2\vec{MG}| = 4|\vec{MG}| = 4MG$. ($G$ là một điểm hoàn toàn cố định).

**Bước 2: Rút gọn Vế phải (VP)**
- $VP = |3(\vec{MB} - \vec{MC})| = 3|\vec{CB}| = 3BC$. (Độ dài $BC$ không đổi).

**Bước 3: Kết luận quỹ tích**
- Cân bằng đẳng thức: $4MG = 3BC \Leftrightarrow MG = \frac{3BC}{4}$.
- Vì $G$ là điểm cố định, độ dài $BC$ không đổi, nên $M$ luôn cách $G$ một khoảng không đổi $R = \frac{3BC}{4}$.
- Kết luận: Tập hợp các điểm $M$ là đường tròn tâm $G$ (với $G$ là trung điểm của trung tuyến kẻ từ $A$), bán kính $R = \frac{3BC}{4}$.
        `
    },
    "MATH10-PRAC-CH4-07": {
        level: `Vận dụng cao`,
        topic: `Cực trị biểu thức Vectơ`,
        question: `Trong mặt phẳng $Oxy$, cho 3 điểm $A(1; 2), B(-2; 3), C(0; 4)$. Tìm tọa độ điểm $M$ thuộc trục hoành sao cho biểu thức $P = |\vec{MA} + 2\vec{MB} - \vec{MC}|$ đạt giá trị nhỏ nhất.`,
        hint: `Chìa khóa tư duy: Gọi $I$ là tâm tỉ cự thỏa mãn $\vec{IA} + 2\vec{IB} - \vec{IC} = \vec{0}$. Tính tọa độ $I$. Biểu thức $P = 2MI$. Cực trị xảy ra khi $M$ là hình chiếu của $I$ lên trục $Ox$.`,
        solution: `
**Bước 1: Tìm tọa độ tâm tỉ cự I**
- Gọi $I(x_I; y_I)$ là điểm thỏa mãn $\vec{IA} + 2\vec{IB} - \vec{IC} = \vec{0}$.
- Tọa độ điểm $I$ được tính nhanh bằng công thức:
  $x_I = \frac{x_A + 2x_B - x_C}{1 + 2 - 1} = \frac{1 + 2(-2) - 0}{2} = \frac{-3}{2} = -1.5$.
  $y_I = \frac{y_A + 2y_B - y_C}{1 + 2 - 1} = \frac{2 + 2(3) - 4}{2} = \frac{4}{2} = 2$.
- Vậy $I(-1.5; 2)$.

**Bước 2: Tìm M để P Min**
- Chèn điểm $I$ vào biểu thức $P$:
  $\vec{MA} + 2\vec{MB} - \vec{MC} = (\vec{MI}+\vec{IA}) + 2(\vec{MI}+\vec{IB}) - (\vec{MI}+\vec{IC})$
  $= 2\vec{MI} + (\vec{IA} + 2\vec{IB} - \vec{IC}) = 2\vec{MI} + \vec{0} = 2\vec{MI}$.
- Do đó $P = |2\vec{MI}| = 2MI$.
- Để $P$ nhỏ nhất thì đoạn $MI$ phải ngắn nhất. Vì $M$ thuộc trục hoành $Ox$, khoảng cách từ $I$ đến $M$ ngắn nhất khi $M$ là hình chiếu vuông góc của $I$ lên trục $Ox$.
- Chiếu điểm $I(-1.5; 2)$ lên $Ox$ (giữ nguyên $x$, cho $y=0$), ta được $M(-1.5; 0)$.
- Kết luận: Tọa độ điểm $M\left(-\frac{3}{2}; 0\right)$.
        `
    },
    "MATH10-PRAC-CH4-08": {
        level: `Vận dụng cao`,
        topic: `Ứng dụng tích vô hướng (Chứng minh vuông góc)`,
        question: `Cho hình chữ nhật $ABCD$ có $AB = a, AD = a\sqrt{2}$. Gọi $K$ là trung điểm của cạnh $AD$. Bằng phương pháp vectơ, hãy chứng minh rằng $BK \perp AC$.`,
        hint: `Chìa khóa tư duy: Phân tích $\vec{BK}$ và $\vec{AC}$ theo 2 vectơ cơ sở vuông góc là $\vec{AB}$ và $\vec{AD}$. Sau đó nhân vô hướng, chứng minh tích bằng 0 (chú ý $\vec{AB} \cdot \vec{AD} = 0$).`,
        solution: `
**Bước 1: Phân tích vectơ**
- Chọn cặp vectơ cơ sở là $\vec{AB}$ và $\vec{AD}$. Vì $ABCD$ là hình chữ nhật nên $\vec{AB} \cdot \vec{AD} = 0$.
- Phân tích $\vec{AC}$: Theo quy tắc hình bình hành, $\vec{AC} = \vec{AB} + \vec{AD}$.
- Phân tích $\vec{BK}$: Chèn điểm $A$, ta có $\vec{BK} = \vec{BA} + \vec{AK}$.
  Vì $K$ là trung điểm $AD$ nên $\vec{AK} = \frac{1}{2}\vec{AD}$. Và $\vec{BA} = -\vec{AB}$.
  $\Rightarrow \vec{BK} = -\vec{AB} + \frac{1}{2}\vec{AD}$.

**Bước 2: Tính tích vô hướng**
- Xét $\vec{BK} \cdot \vec{AC} = \left( -\vec{AB} + \frac{1}{2}\vec{AD} \right) \cdot (\vec{AB} + \vec{AD})$.
- Nhân phân phối:
  $= -\vec{AB}^2 - \vec{AB} \cdot \vec{AD} + \frac{1}{2}\vec{AD} \cdot \vec{AB} + \frac{1}{2}\vec{AD}^2$
- Áp dụng $\vec{AB} \cdot \vec{AD} = 0$, ta có:
  $= -AB^2 + \frac{1}{2}AD^2$
- Thay độ dài $AB = a$ và $AD = a\sqrt{2}$ vào:
  $= -a^2 + \frac{1}{2}(a\sqrt{2})^2 = -a^2 + \frac{1}{2}(2a^2) = -a^2 + a^2 = 0$.
- Vì $\vec{BK} \cdot \vec{AC} = 0$ nên $\vec{BK} \perp \vec{AC}$, hay $BK \perp AC$. ĐPCM.
        `
    },
    "MATH10-PRAC-CH4-09": {
        level: `Vận dụng cao`,
        topic: `Tính diện tích tam giác (Tọa độ Vectơ)`,
        question: `Trong mặt phẳng tọa độ $Oxy$, cho ba điểm $A(-1; 1), B(2; 4), C(3; -1)$. Bằng công cụ góc và tích vô hướng của vectơ, hãy tính diện tích tam giác $ABC$.`,
        hint: `Chìa khóa tư duy: Tính tọa độ $\vec{AB}, \vec{AC}$. Tính $\cos A = \frac{\vec{AB} \cdot \vec{AC}}{AB \cdot AC}$. Suy ra $\sin A = \sqrt{1 - \cos^2 A}$. Tính $S = \frac{1}{2} AB \cdot AC \cdot \sin A$.`,
        solution: `
**Bước 1: Tính các đại lượng Vectơ**
- $\vec{AB} = (3; 3) \Rightarrow AB^2 = 3^2 + 3^2 = 18 \Rightarrow AB = \sqrt{18} = 3\sqrt{2}$.
- $\vec{AC} = (4; -2) \Rightarrow AC^2 = 4^2 + (-2)^2 = 20 \Rightarrow AC = \sqrt{20} = 2\sqrt{5}$.
- Tích vô hướng: $\vec{AB} \cdot \vec{AC} = 3(4) + 3(-2) = 12 - 6 = 6$.

**Bước 2: Tính sin góc A**
- Ta có: $\cos A = \frac{\vec{AB} \cdot \vec{AC}}{AB \cdot AC} = \frac{6}{\sqrt{18} \cdot \sqrt{20}} = \frac{6}{\sqrt{360}} = \frac{6}{6\sqrt{10}} = \frac{1}{\sqrt{10}}$.
- Vì góc A nằm trong tam giác nên $\sin A > 0$.
  $\sin A = \sqrt{1 - \cos^2 A} = \sqrt{1 - \left(\frac{1}{\sqrt{10}}\right)^2} = \sqrt{1 - \frac{1}{10}} = \sqrt{\frac{9}{10}} = \frac{3}{\sqrt{10}}$.

**Bước 3: Tính diện tích**
- $S = \frac{1}{2} \cdot AB \cdot AC \cdot \sin A$
- $S = \frac{1}{2} \cdot \sqrt{18} \cdot \sqrt{20} \cdot \frac{3}{\sqrt{10}} = \frac{1}{2} \cdot \sqrt{360} \cdot \frac{3}{\sqrt{10}} = \frac{1}{2} \cdot 6\sqrt{10} \cdot \frac{3}{\sqrt{10}} = 9$.
- Kết luận: Diện tích tam giác $ABC$ bằng 9.
        `
    },
    "MATH10-PRAC-CH4-10": {
        level: `Vận dụng cao`,
        topic: `Tích hợp Vật lý (Cân bằng lực)`,
        question: `Một vật có khối lượng $m = 5$ kg được treo nằm yên cân bằng nhờ hai sợi dây gắn lên trần nhà. Hai sợi dây tạo với phương ngang các góc $30^\circ$ và $45^\circ$. Biết gia tốc trọng trường $g = 9.8 \text{ m/s}^2$. Hãy tính lực căng của mỗi sợi dây (làm tròn kết quả đến hàng phần mười).`,
        hint: `Chìa khóa tư duy: Hợp lực $\vec{T_1} + \vec{T_2} + \vec{P} = \vec{0}$. Chọn hệ trục tọa độ Oxy, chiếu phương trình vectơ lên hai trục Ox (phương ngang) và Oy (thẳng đứng) để giải hệ pt.`,
        solution: `
- Trọng lượng của vật: $P = mg = 5 \times 9.8 = 49$ N.
- Hệ chịu tác dụng của 3 lực: $\vec{T_1}, \vec{T_2}, \vec{P}$. Vật cân bằng $\Rightarrow \vec{T_1} + \vec{T_2} + \vec{P} = \vec{0}$.
- Chọn hệ trục tọa độ $Oxy$: $Ox$ nằm ngang, $Oy$ hướng thẳng đứng lên trên.
  + Góc tạo bởi $\vec{T_1}$ với trục dương $Ox$ là $180^\circ - 30^\circ = 150^\circ$ (nếu dây 1 nằm bên trái).
  + Góc tạo bởi $\vec{T_2}$ với trục dương $Ox$ là $45^\circ$ (nếu dây 2 nằm bên phải).
  + Góc tạo bởi $\vec{P}$ là $270^\circ$.
- **Chiếu phương trình lên trục Ox:**
  $-T_1 \cos 30^\circ + T_2 \cos 45^\circ = 0$
  $\Rightarrow T_2 = T_1 \frac{\cos 30^\circ}{\cos 45^\circ} = T_1 \frac{\sqrt{3}/2}{\sqrt{2}/2} = T_1 \frac{\sqrt{3}}{\sqrt{2}} = T_1 \sqrt{1.5}$. (1)
- **Chiếu phương trình lên trục Oy:**
  $T_1 \sin 30^\circ + T_2 \sin 45^\circ - P = 0$
  $\Rightarrow T_1 (0.5) + T_2 \left(\frac{\sqrt{2}}{2}\right) = 49$. (2)
- Thay (1) vào (2):
  $T_1 (0.5) + \left( T_1 \frac{\sqrt{3}}{\sqrt{2}} \right) \left(\frac{\sqrt{2}}{2}\right) = 49$
  $\Leftrightarrow T_1 \left(0.5 + \frac{\sqrt{3}}{2}\right) = 49 \Leftrightarrow T_1 \left( \frac{1 + \sqrt{3}}{2} \right) = 49$
  $\Rightarrow T_1 = \frac{98}{1 + \sqrt{3}} \approx 35.9$ (N).
- Lực căng dây thứ 2:
  $T_2 = 35.87 \times \sqrt{1.5} \approx 43.9$ (N).
- Kết luận: Lực căng của hai dây lần lượt xấp xỉ $35.9$ N và $43.9$ N.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_PRACTICE_CH4;
}
