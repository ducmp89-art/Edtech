/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương IV: Vectơ
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
   ========================================================================== */

const DATA_TOAN10_CH4 = {
    "MATH10-CH4-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương IV: Vectơ",
        title: "Bài 1: Khái niệm Vectơ & Các phép toán Vectơ",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương IV", "Bài 1"],
        theory: `
### 1. Khái niệm và các tính chất cơ bản của Vectơ
- **Vectơ** là một đoạn thẳng có hướng. Ký hiệu: $\vec{AB}$ (điểm đầu A, điểm cuối B) hoặc $\vec{a}, \vec{u}$.
- **Hai vectơ cùng phương:** Khi giá của chúng song song hoặc trùng nhau. (Lưu ý: $\vec{0}$ cùng phương với mọi vectơ).
- **Hai vectơ bằng nhau:** Khi chúng cùng hướng và cùng độ dài. Viết là $\vec{AB} = \vec{CD}$.

### 2. Tổng và Hiệu của hai vectơ
📌 **Quy tắc 3 điểm (Quy tắc cộng/chèn điểm):** 
Với ba điểm A, B, C bất kỳ: $\vec{AB} + \vec{BC} = \vec{AC}$.

📌 **Quy tắc hình bình hành:** 
Nếu ABCD là hình bình hành thì $\vec{AB} + \vec{AD} = \vec{AC}$.

📌 **Quy tắc trừ (Quy tắc 3 điểm đối với hiệu):** 
Với ba điểm O, A, B bất kỳ: $\vec{OB} - \vec{OA} = \vec{AB}$.

### 3. Tích của một số với một vectơ
- Tích của số thực $k \neq 0$ và vectơ $\vec{a} \neq \vec{0}$ là một vectơ, ký hiệu $k\vec{a}$.
- **Hướng:** $k\vec{a}$ cùng hướng $\vec{a}$ nếu $k > 0$; ngược hướng $\vec{a}$ nếu $k < 0$.
- **Độ dài:** $|k\vec{a}| = |k| \cdot |\vec{a}|$.
- **Điều kiện cùng phương:** Hai vectơ $\vec{a}$ và $\vec{b}$ ($\vec{b} \neq \vec{0}$) cùng phương khi và chỉ khi tồn tại số thực $k$ sao cho $\vec{a} = k\vec{b}$.
- **Điều kiện thẳng hàng:** Ba điểm phân biệt A, B, C thẳng hàng $\Leftrightarrow \exists k \neq 0$ sao cho $\vec{AB} = k\vec{AC}$.

---

### 4. 💎 Chuyên đề Master: Đẳng thức trung điểm, trọng tâm và Phân tích vectơ (VDC)
📌 **Hệ thức về Trung điểm và Trọng tâm (Sử dụng cực nhiều):**
- Nếu $M$ là trung điểm của $AB$, với mọi điểm $O$ ta có: $\vec{OA} + \vec{OB} = 2\vec{OM}$.
- Nếu $G$ là trọng tâm của $\triangle ABC$, với mọi điểm $M$ ta có: $\vec{MA} + \vec{MB} + \vec{MC} = 3\vec{MG}$.
- Nếu $G$ là trọng tâm, ta có tính chất nội tại: $\vec{GA} + \vec{GB} + \vec{GC} = \vec{0}$.

📌 **Kỹ thuật phân tích một vectơ theo hai vectơ không cùng phương (Hệ cơ sở):**
- Cho hai vectơ $\vec{a}$ và $\vec{b}$ không cùng phương. Mọi vectơ $\vec{x}$ đều có thể phân tích (biểu diễn) duy nhất dưới dạng: $\vec{x} = m\vec{a} + n\vec{b}$.
- **Phương pháp giải:** Chèn điểm liên tiếp bằng quy tắc 3 điểm hoặc quy tắc trừ, kết hợp với các tỉ lệ đoạn thẳng do đề bài cung cấp (trung điểm, trọng tâm, điểm chia đoạn thẳng) để dồn biểu thức về hai vectơ cơ sở.
        `,
        tips: `
- 💡 **Mẹo rút gọn biểu thức vectơ:** Hãy linh hoạt sử dụng "quy tắc trừ" $\vec{MN} = \vec{ON} - \vec{OM}$ để đưa toàn bộ các vectơ trong biểu thức về **cùng một gốc O** (thường chọn O là trung điểm, trọng tâm hoặc đỉnh tam giác tùy bài toán).
- ⚠️ **Lỗi sai thường gặp:** Trị tuyệt đối của vectơ là ĐỘ DÀI đoạn thẳng ($|\vec{AB}| = AB$). Không bao giờ được viết $\vec{AB} = AB$ (đây là sai bản chất hình học). Vectơ không thể bằng một con số!
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Rút gọn biểu thức vectơ sau: $\vec{u} = \vec{AB} + \vec{CD} - \vec{AD}$.
* **Lời giải:**
  - Nhóm các hạng tử có chung điểm: $\vec{u} = \vec{AB} + (\vec{CD} - \vec{AD})$.
  - Áp dụng quy tắc trừ cho 2 vectơ sau (chung gốc A, D đổi chỗ sai vị trí, ta nên đổi lại):
    $\vec{u} = \vec{AB} + \vec{CD} + \vec{DA} = \vec{AB} + (\vec{DA} + \vec{CD}) = \vec{AB} + \vec{CA}$.
  - Viết lại thứ tự để áp dụng quy tắc cộng: $\vec{u} = \vec{CA} + \vec{AB} = \vec{CB}$.
  - *(Cách khác: $\vec{u} = (\vec{AB} - \vec{AD}) + \vec{CD} = \vec{DB} + \vec{CD} = \vec{CD} + \vec{DB} = \vec{CB}$).*

**Bài 2 (Cơ bản):** Cho hình bình hành ABCD tâm O. Chứng minh rằng: $\vec{DA} - \vec{DB} + \vec{DC} = \vec{0}$.
* **Lời giải:**
  - Vế trái (VT): $\vec{DA} - \vec{DB} + \vec{DC}$.
  - Áp dụng quy tắc trừ 2 vectơ chung gốc D: $\vec{DA} - \vec{DB} = \vec{BA}$.
  - Suy ra $\text{VT} = \vec{BA} + \vec{DC}$.
  - Vì ABCD là hình bình hành nên $\vec{BA}$ và $\vec{DC}$ là hai vectơ đối nhau $\Rightarrow \vec{BA} = -\vec{CD}$ nhưng mà $\vec{BA} = \vec{CD}$ là SAI. Ta có $\vec{AB} = \vec{DC}$ nên $\vec{BA} = -\vec{DC}$.
  - Do đó: $\text{VT} = -\vec{DC} + \vec{DC} = \vec{0}$ (ĐPCM).

**Bài 3 (Vận dụng):** Cho 4 điểm A, B, C, D bất kỳ. Gọi I, J lần lượt là trung điểm của AB và CD. Chứng minh rằng: $\vec{AD} + \vec{BC} = 2\vec{IJ}$.
* **Lời giải:**
  - Dùng quy tắc chèn điểm. Ta chèn điểm I và J vào các vectơ ở Vế trái (VT):
    $\vec{AD} = \vec{AI} + \vec{IJ} + \vec{JD}$
    $\vec{BC} = \vec{BI} + \vec{IJ} + \vec{JC}$
  - Cộng vế theo vế hai đẳng thức:
    $\vec{AD} + \vec{BC} = (\vec{AI} + \vec{BI}) + 2\vec{IJ} + (\vec{JD} + \vec{JC})$.
  - Vì I là trung điểm AB nên $\vec{AI} + \vec{BI} = \vec{0}$.
  - Vì J là trung điểm CD nên $\vec{JC} + \vec{JD} = \vec{0}$.
  - Từ đó: $\vec{AD} + \vec{BC} = \vec{0} + 2\vec{IJ} + \vec{0} = 2\vec{IJ}$ (ĐPCM).

**Bài 4 (Vận dụng):** Cho $\triangle ABC$. Điểm M nằm trên cạnh BC sao cho $MB = 2MC$. Hãy phân tích $\vec{AM}$ theo hai vectơ $\vec{AB}$ và $\vec{AC}$.
* **Lời giải:**
  - Điểm M chia đoạn BC thành 3 phần, MB chiếm 2 phần, MC chiếm 1 phần.
  - Về mặt vectơ, M nằm giữa B và C nên $\vec{BM} = \frac{2}{3}\vec{BC}$.
  - Ta có: $\vec{AM} = \vec{AB} + \vec{BM}$ (Quy tắc chèn điểm).
  - Thay $\vec{BM} = \frac{2}{3}\vec{BC}$:
    $\vec{AM} = \vec{AB} + \frac{2}{3}\vec{BC}$.
  - Dùng quy tắc trừ để phân tích $\vec{BC}$: $\vec{BC} = \vec{AC} - \vec{AB}$.
  - Thay vào biểu thức:
    $\vec{AM} = \vec{AB} + \frac{2}{3}(\vec{AC} - \vec{AB}) = \vec{AB} + \frac{2}{3}\vec{AC} - \frac{2}{3}\vec{AB} = \frac{1}{3}\vec{AB} + \frac{2}{3}\vec{AC}$.
  - Vậy $\vec{AM} = \frac{1}{3}\vec{AB} + \frac{2}{3}\vec{AC}$.

**Bài 5 (Vận dụng cao):** Cho $\triangle ABC$. Tìm vị trí của điểm K thỏa mãn hệ thức: $2\vec{KA} + \vec{KB} + \vec{KC} = \vec{0}$.
* **Lời giải:**
  - Gọi I là trung điểm của BC, ta có: $\vec{KB} + \vec{KC} = 2\vec{KI}$.
  - Thay vào hệ thức đã cho:
    $2\vec{KA} + 2\vec{KI} = \vec{0} \Leftrightarrow \vec{KA} + \vec{KI} = \vec{0}$.
  - Hệ thức này chứng tỏ K là trung điểm của đoạn thẳng AI.
  - Kết luận: K là trung điểm của đường trung tuyến AI của tam giác ABC.

**Bài 6 (Vận dụng cao):** Cho hình bình hành ABCD. Gọi M, N lần lượt là trung điểm của BC và CD. Đặt $\vec{u} = \vec{AM}$, $\vec{v} = \vec{AN}$. Phân tích vectơ $\vec{AC}$ theo $\vec{u}$ và $\vec{v}$.
* **Lời giải:**
  - Áp dụng quy tắc hình bình hành: $\vec{AC} = \vec{AB} + \vec{AD}$.
  - Theo tính chất trung điểm: 
    $\vec{AM} = \frac{1}{2}(\vec{AB} + \vec{AC}) = \frac{1}{2}(\vec{AB} + \vec{AB} + \vec{AD}) = \vec{AB} + \frac{1}{2}\vec{AD}$.
    $\vec{AN} = \frac{1}{2}(\vec{AD} + \vec{AC}) = \frac{1}{2}(\vec{AD} + \vec{AB} + \vec{AD}) = \frac{1}{2}\vec{AB} + \vec{AD}$.
  - Ta có hệ phương trình vectơ:
    $\begin{cases} \vec{u} = \vec{AB} + 0.5\vec{AD} \\ \vec{v} = 0.5\vec{AB} + \vec{AD} \end{cases}$
  - Cộng 2 vế của hệ: $\vec{u} + \vec{v} = 1.5\vec{AB} + 1.5\vec{AD} = 1.5(\vec{AB} + \vec{AD}) = 1.5\vec{AC}$.
  - Suy ra: $\vec{AC} = \frac{2}{3}(\vec{u} + \vec{v}) = \frac{2}{3}\vec{u} + \frac{2}{3}\vec{v}$.

**Bài 7 (Vận dụng cao):** Cho tam giác ABC. Các điểm M, N, P thỏa mãn $\vec{MB} = 3\vec{MC}$, $\vec{NA} + 3\vec{NC} = \vec{0}$ và $\vec{PA} + \vec{PB} = \vec{0}$. Chứng minh 3 điểm M, N, P thẳng hàng.
* **Lời giải:**
  - $\vec{PA} + \vec{PB} = \vec{0} \Rightarrow$ P là trung điểm AB. Mọi vectơ $\vec{PM}$ đều có thể biểu diễn qua cơ sở $\vec{PA}, \vec{PC}$.
  - Từ $\vec{MB} = 3\vec{MC} \Rightarrow \vec{PB} - \vec{PM} = 3(\vec{PC} - \vec{PM}) \Rightarrow 2\vec{PM} = 3\vec{PC} - \vec{PB} = 3\vec{PC} + \vec{PA}$. (Do $\vec{PB} = -\vec{PA}$).
    $\Rightarrow \vec{PM} = \frac{1}{2}\vec{PA} + \frac{3}{2}\vec{PC}$.
  - Từ $\vec{NA} + 3\vec{NC} = \vec{0} \Rightarrow (\vec{PA} - \vec{PN}) + 3(\vec{PC} - \vec{PN}) = \vec{0} \Rightarrow 4\vec{PN} = \vec{PA} + 3\vec{PC}$.
    $\Rightarrow \vec{PN} = \frac{1}{4}\vec{PA} + \frac{3}{4}\vec{PC}$.
  - Dễ thấy $\vec{PM} = 2\vec{PN}$. Vậy ba điểm P, M, N thẳng hàng.

**Bài 8 (Vận dụng cao):** Tìm tập hợp điểm M thỏa mãn $| \vec{MA} + \vec{MB} | = | \vec{MA} - \vec{MB} |$.
* **Lời giải:**
  - Rút gọn VT: Gọi I là trung điểm AB $\Rightarrow \vec{MA} + \vec{MB} = 2\vec{MI}$.
    Do đó $| \vec{MA} + \vec{MB} | = |2\vec{MI}| = 2MI$.
  - Rút gọn VP: $| \vec{MA} - \vec{MB} | = | \vec{BA} | = AB$.
  - Thay vào hệ thức ban đầu: $2MI = AB \Leftrightarrow MI = \frac{AB}{2}$.
  - Vì A, B cố định nên I cố định và độ dài $\frac{AB}{2}$ không đổi.
  - Kết luận: Tập hợp các điểm M là đường tròn tâm I (trung điểm AB) và bán kính $R = \frac{AB}{2}$ (Đường tròn đường kính AB).

**Bài 9 (Vận dụng cao):** Tìm tập hợp điểm M thỏa mãn $| 3\vec{MA} - 2\vec{MB} | = | \vec{MB} - \vec{MA} |$.
* **Lời giải:**
  - Rút gọn VP: $| \vec{MB} - \vec{MA} | = | \vec{AB} | = AB$.
  - Rút gọn VT: Tìm tâm tỉ cự K thỏa mãn $3\vec{KA} - 2\vec{KB} = \vec{0}$.
    $\Rightarrow 3\vec{KA} - 2(\vec{KA} + \vec{AB}) = \vec{0} \Rightarrow \vec{KA} = 2\vec{AB}$.
    K là điểm cố định (nằm trên đường thẳng AB sao cho A nằm giữa K và B, $KA = 2AB$).
  - Chèn K vào VT: $3(\vec{MK} + \vec{KA}) - 2(\vec{MK} + \vec{KB}) = \vec{MK} + (3\vec{KA} - 2\vec{KB}) = \vec{MK} + \vec{0} = \vec{MK}$.
    Độ dài VT là $| \vec{MK} | = MK$.
  - Ta có phương trình: $MK = AB$.
  - Kết luận: Quỹ tích điểm M là đường tròn tâm K bán kính $R = AB$.

**Bài 10 (Vận dụng cao):** Cho lục giác đều ABCDEF tâm O. Đẳng thức nào sau đây đúng? Tại sao?
A. $\vec{AB} + \vec{CD} + \vec{EF} = \vec{0}$ 
B. $\vec{AB} + \vec{CD} + \vec{EF} = \vec{AD}$
* **Lời giải:**
  - Trong lục giác đều, các cạnh đối diện song song và bằng nhau.
  - Ta có: $\vec{CD} = \vec{BO}$ và $\vec{EF} = \vec{OA}$ (do tính chất lục giác đều tạo bởi 6 tam giác đều đỉnh O).
  - Thay vào tổng: $\vec{AB} + \vec{CD} + \vec{EF} = \vec{AB} + \vec{BO} + \vec{OA}$.
  - Áp dụng quy tắc 3 điểm liên tiếp: $\vec{AB} + \vec{BO} + \vec{OA} = \vec{AO} + \vec{OA} = \vec{AA} = \vec{0}$.
  - Kết luận: Mệnh đề A đúng.
        `
    },

    "MATH10-CH4-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương IV: Vectơ",
        title: "Bài 2: Tọa độ của Vectơ & Tích vô hướng",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương IV", "Bài 2"],
        theory: `
### 1. Trục tọa độ và Tọa độ của Vectơ/Điểm
📌 **Tọa độ Vectơ:**
- Hệ trục toạ độ vuông góc $Oxy$ gồm trục hoành $Ox$ (vectơ đơn vị $\vec{i}$) và trục tung $Oy$ (vectơ đơn vị $\vec{j}$).
- $\vec{u} = (x; y) \Leftrightarrow \vec{u} = x\vec{i} + y\vec{j}$.
- Cho $\vec{a} = (x_1; y_1)$ và $\vec{b} = (x_2; y_2)$:
  - $\vec{a} + \vec{b} = (x_1 + x_2; y_1 + y_2)$
  - $\vec{a} - \vec{b} = (x_1 - x_2; y_1 - y_2)$
  - $k\vec{a} = (kx_1; ky_1)$
  - Điều kiện hai vectơ cùng phương: $\frac{x_1}{x_2} = \frac{y_1}{y_2}$ (nếu $x_2, y_2 \neq 0$).

📌 **Tọa độ Điểm:**
- Điểm $M(x; y) \Leftrightarrow \vec{OM} = x\vec{i} + y\vec{j}$.
- Vectơ tạo bởi hai điểm $A(x_A; y_A)$ và $B(x_B; y_B)$: $\vec{AB} = (x_B - x_A; y_B - y_A)$.
- Tọa độ trung điểm $I$ của $AB$: $x_I = \frac{x_A + x_B}{2} ; y_I = \frac{y_A + y_B}{2}$.
- Tọa độ trọng tâm $G$ của $\triangle ABC$: $x_G = \frac{x_A + x_B + x_C}{3} ; y_G = \frac{y_A + y_B + y_C}{3}$.

---

### 2. Tích vô hướng của hai vectơ
📌 **Định nghĩa & Góc giữa hai vectơ:**
- $\vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos(\vec{a}, \vec{b})$.
- Bình phương vô hướng: $\vec{a}^2 = \vec{a} \cdot \vec{a} = |\vec{a}| \cdot |\vec{a}| \cdot \cos 0^\circ = |\vec{a}|^2$.

📌 **Biểu thức tọa độ của Tích vô hướng:**
- Nếu $\vec{a} = (x_1; y_1)$ và $\vec{b} = (x_2; y_2)$ thì:
  **$\vec{a} \cdot \vec{b} = x_1x_2 + y_1y_2$**.
- Độ dài vectơ: $|\vec{a}| = \sqrt{x_1^2 + y_1^2}$. Khoảng cách 2 điểm: $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2}$.
- Góc giữa hai vectơ: 
  $\cos(\vec{a}, \vec{b}) = \frac{\vec{a} \cdot \vec{b}}{|\vec{a}| \cdot |\vec{b}|} = \frac{x_1x_2 + y_1y_2}{\sqrt{x_1^2 + y_1^2} \cdot \sqrt{x_2^2 + y_2^2}}$.
- **Đặc biệt:** Hai vectơ vuông góc $\Leftrightarrow \vec{a} \cdot \vec{b} = 0 \Leftrightarrow x_1x_2 + y_1y_2 = 0$.

---

### 3. 💎 Chuyên đề Master: Ứng dụng Tích vô hướng (VDC)
📌 **Phân tích và tính Tích vô hướng của 2 vectơ chưa biết tọa độ:**
- Nếu không có hệ trục tọa độ, hãy phân tích $\vec{a}$ và $\vec{b}$ qua hai vectơ cơ sở vuông góc (thường là hai cạnh góc vuông, hoặc hai đường chéo hình thoi/hình vuông). Sau đó nhân phân phối.
- Khai triển hằng đẳng thức vectơ: $(\vec{a} + \vec{b})^2 = \vec{a}^2 + \vec{b}^2 + 2\vec{a} \cdot \vec{b} = |\vec{a}|^2 + |\vec{b}|^2 + 2|\vec{a}||\vec{b}|\cos(\vec{a}, \vec{b})$.

📌 **Tính chất HÌNH CHIẾU của Tích vô hướng:**
- $\vec{AB} \cdot \vec{CD} = \vec{AB} \cdot \vec{C'D'}$, trong đó $C', D'$ lần lượt là hình chiếu vuông góc của $C, D$ trên đường thẳng $AB$.
- Từ đó $\vec{AB} \cdot \vec{AC} = AB \cdot AH$ (với $H$ là hình chiếu của $C$ lên $AB$).
        `,
        tips: `
- 💡 **Quy tắc nhớ tọa độ điểm và vectơ:** "Lấy sau trừ trước" (Điểm ngọn trừ điểm gốc). $\vec{AB} = (B - A)$.
- ⚠️ **Sai lầm về Góc:** Góc giữa 2 đường thẳng là góc nhọn (hoặc vuông), $\cos \ge 0$. Nhưng góc giữa 2 vectơ hoàn toàn có thể là góc TÙ, $\cos < 0$. Công thức tính $\cos$ góc giữa 2 vectơ **không có trị tuyệt đối** trên tử số!
- 🚀 **Thủ thuật Master:** Để chứng minh tam giác $ABC$ vuông tại $A$ nhanh nhất trên mặt phẳng $Oxy$, chỉ cần chứng minh $\vec{AB} \cdot \vec{AC} = 0$. 
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Cho $\vec{a} = (2; -3)$ và $\vec{b} = (-1; 4)$. Tìm tọa độ của vectơ $\vec{u} = 2\vec{a} - 3\vec{b}$.
* **Lời giải:**
  - $2\vec{a} = (4; -6)$.
  - $3\vec{b} = (-3; 12)$.
  - $\vec{u} = (4 - (-3); -6 - 12) = (7; -18)$.

**Bài 2 (Cơ bản):** Cho $A(-1; 2), B(3; -1)$. Tìm tọa độ điểm $C$ để O là trọng tâm tam giác $ABC$. (O là gốc tọa độ).
* **Lời giải:**
  - O là trọng tâm nên $x_O = \frac{x_A + x_B + x_C}{3}$ và $y_O = \frac{y_A + y_B + y_C}{3}$.
  - $0 = \frac{-1 + 3 + x_C}{3} \Rightarrow x_C = -2$.
  - $0 = \frac{2 - 1 + y_C}{3} \Rightarrow y_C = -1$.
  - Vậy $C(-2; -1)$.

**Bài 3 (Vận dụng):** Cho $\triangle ABC$ với $A(1; 3), B(-2; 4), C(5; 3)$. Tính chu vi của tam giác $ABC$.
* **Lời giải:**
  - $\vec{AB} = (-3; 1) \Rightarrow AB = \sqrt{(-3)^2 + 1^2} = \sqrt{10}$.
  - $\vec{AC} = (4; 0) \Rightarrow AC = \sqrt{4^2 + 0^2} = 4$.
  - $\vec{BC} = (7; -1) \Rightarrow BC = \sqrt{7^2 + (-1)^2} = \sqrt{50} = 5\sqrt{2}$.
  - Chu vi $P = AB + BC + CA = \sqrt{10} + 5\sqrt{2} + 4$.

**Bài 4 (Vận dụng):** Cho $A(2; 1), B(4; -3)$. Tìm điểm $M$ trên trục hoành sao cho tam giác $MAB$ vuông tại $M$.
* **Lời giải:**
  - $M \in Ox \Rightarrow M(x; 0)$.
  - $\triangle MAB$ vuông tại $M \Rightarrow \vec{MA} \cdot \vec{MB} = 0$.
  - $\vec{MA} = (2 - x; 1)$; $\vec{MB} = (4 - x; -3)$.
  - $\vec{MA} \cdot \vec{MB} = (2 - x)(4 - x) + 1(-3) = 0$
  - $\Leftrightarrow 8 - 6x + x^2 - 3 = 0 \Leftrightarrow x^2 - 6x + 5 = 0$.
  - Nghiệm $x = 1$ hoặc $x = 5$.
  - Có 2 điểm thỏa mãn: $M_1(1; 0)$ và $M_2(5; 0)$.

**Bài 5 (Vận dụng):** Tính góc giữa hai vectơ $\vec{u} = (2; -1)$ và $\vec{v} = (-1; 3)$.
* **Lời giải:**
  - Tích vô hướng: $\vec{u} \cdot \vec{v} = 2(-1) + (-1)(3) = -2 - 3 = -5$.
  - Độ dài: $|\vec{u}| = \sqrt{4+1} = \sqrt{5}$, $|\vec{v}| = \sqrt{1+9} = \sqrt{10}$.
  - $\cos(\vec{u}, \vec{v}) = \frac{-5}{\sqrt{5}\sqrt{10}} = \frac{-5}{5\sqrt{2}} = -\frac{1}{\sqrt{2}}$.
  - Suy ra góc giữa hai vectơ là $135^\circ$.

**Bài 6 (Vận dụng cao):** Cho hình vuông $ABCD$ cạnh $a$. Tính tích vô hướng $P = \vec{AB} \cdot \vec{AC}$ và $Q = \vec{AC} \cdot \vec{BD}$.
* **Lời giải:**
  - **Tính P:** Góc giữa $\vec{AB}$ và $\vec{AC}$ là $45^\circ$. Đường chéo $AC = a\sqrt{2}$.
    $P = |\vec{AB}| \cdot |\vec{AC}| \cdot \cos 45^\circ = a \cdot a\sqrt{2} \cdot \frac{\sqrt{2}}{2} = a^2$.
    *(Cách nhanh: Dùng hình chiếu, hình chiếu của C lên AB là B, nên $\vec{AB} \cdot \vec{AC} = \vec{AB} \cdot \vec{AB} = AB^2 = a^2$).*
  - **Tính Q:** 2 đường chéo hình vuông vuông góc nhau $\Rightarrow \vec{AC} \cdot \vec{BD} = 0$.

**Bài 7 (Vận dụng cao):** Cho 2 vectơ $\vec{a}$ và $\vec{b}$ thỏa mãn $|\vec{a}| = 3, |\vec{b}| = 5$, và góc giữa chúng bằng $120^\circ$. Tính độ dài của vectơ $\vec{c} = 2\vec{a} - \vec{b}$.
* **Lời giải:**
  - Ta bình phương vectơ $\vec{c}$:
    $|\vec{c}|^2 = \vec{c}^2 = (2\vec{a} - \vec{b})^2 = 4\vec{a}^2 - 4\vec{a}\cdot\vec{b} + \vec{b}^2$
  - Thay số:
    $\vec{a}^2 = |\vec{a}|^2 = 9$; $\vec{b}^2 = |\vec{b}|^2 = 25$.
    $\vec{a} \cdot \vec{b} = |\vec{a}||\vec{b}|\cos 120^\circ = 3 \times 5 \times (-0.5) = -7.5$.
  - $|\vec{c}|^2 = 4(9) - 4(-7.5) + 25 = 36 + 30 + 25 = 91$.
  - Độ dài $|\vec{c}| = \sqrt{91}$.

**Bài 8 (Vận dụng cao):** Trong mặt phẳng $Oxy$, cho ba điểm $A(-1; 2), B(3; -1), C(4; 5)$. Tìm tọa độ trực tâm $H$ của tam giác $ABC$.
* **Lời giải:**
  - $H(x; y)$ là trực tâm $\Leftrightarrow \begin{cases} \vec{AH} \perp \vec{BC} \\ \vec{BH} \perp \vec{AC} \end{cases} \Leftrightarrow \begin{cases} \vec{AH} \cdot \vec{BC} = 0 \\ \vec{BH} \cdot \vec{AC} = 0 \end{cases}$
  - Các vectơ: $\vec{AH} = (x+1; y-2)$, $\vec{BC} = (1; 6)$.
    $\vec{BH} = (x-3; y+1)$, $\vec{AC} = (5; 3)$.
  - Ta có hệ phương trình:
    $\begin{cases} 1(x+1) + 6(y-2) = 0 \\ 5(x-3) + 3(y+1) = 0 \end{cases} \Leftrightarrow \begin{cases} x + 6y = 11 \\ 5x + 3y = 12 \end{cases}$
  - Giải hệ $\Rightarrow y = \frac{43}{27}, x = \frac{39}{27} = \frac{13}{9}$. Vậy $H\left(\frac{13}{9}; \frac{43}{27}\right)$.

**Bài 9 (Vận dụng cao):** Tìm giá trị của $m$ để hai vectơ $\vec{u} = (m^2; -1)$ và $\vec{v} = (1; m)$ vuông góc với nhau.
* **Lời giải:**
  - Để $\vec{u} \perp \vec{v} \Leftrightarrow \vec{u} \cdot \vec{v} = 0$.
  - $m^2(1) + (-1)(m) = 0 \Leftrightarrow m^2 - m = 0$.
  - Phương trình có 2 nghiệm: $m = 0$ hoặc $m = 1$.

**Bài 10 (Vận dụng cao):** Ứng dụng Vật lý: Một vật bị kéo bởi hai lực $\vec{F_1}$ và $\vec{F_2}$ cùng xuất phát từ điểm O. Biết $|\vec{F_1}| = 40$N, $|\vec{F_2}| = 30$N và góc giữa hai lực là $60^\circ$. Tính công sinh ra của hợp lực $\vec{F}$ khi làm vật di chuyển một đoạn $d = 10$m dọc theo hướng của hợp lực.
* **Lời giải:**
  - Hợp lực $\vec{F} = \vec{F_1} + \vec{F_2}$.
  - Tính độ lớn hợp lực bằng bình phương vô hướng:
    $F^2 = \vec{F}^2 = (\vec{F_1} + \vec{F_2})^2 = F_1^2 + F_2^2 + 2F_1F_2\cos 60^\circ$.
    $F^2 = 40^2 + 30^2 + 2(40)(30)(0.5) = 1600 + 900 + 1200 = 3700$.
  - Độ lớn lực $F = \sqrt{3700} = 10\sqrt{37}$ (N).
  - Vì vật di chuyển dọc theo hướng của hợp lực, nên góc giữa lực và phương dịch chuyển là $0^\circ$.
  - Công $A = F \cdot d \cdot \cos 0^\circ = 10\sqrt{37} \cdot 10 \cdot 1 = 100\sqrt{37}$ (Jun).
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH4;
}
