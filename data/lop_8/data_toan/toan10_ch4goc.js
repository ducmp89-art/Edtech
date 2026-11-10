/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương IV: Vectơ (Bổ sung 100% giải chi tiết)
   ========================================================================== */

const DATA_TOAN10_CH4 = {
    "MATH10-CH4-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương IV: Vectơ",
        title: "Bài 1: Khái niệm Vectơ & Các phép toán Vectơ",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương IV", "Bài 1"],
        theory: `
### 1. Khái niệm và Các tính chất cơ bản
📌 **Định nghĩa:**
- **Vectơ** là một đoạn thẳng có hướng, kí hiệu là $\vec{AB}$ (điểm đầu A, điểm cuối B) hoặc $\vec{a}, \vec{b}, \vec{u}, \vec{v}...$
- **Hai vectơ cùng phương:** Khi giá của chúng (đường thẳng đi qua điểm đầu và điểm cuối) song song hoặc trùng nhau.
- **Hai vectơ bằng nhau:** Cùng hướng và cùng độ dài. Viết là $\vec{a} = \vec{b}$.

📌 **Các quy tắc phép toán Vectơ:**
- **Quy tắc 3 điểm (Chèn điểm):** Với 3 điểm $A, B, C$ bất kì: $\vec{AB} + \vec{BC} = \vec{AC}$ và $\vec{AB} = \vec{CB} - \vec{CA}$.
- **Quy tắc hình bình hành:** Nếu $ABCD$ là hình bình hành thì $\vec{AB} + \vec{AD} = \vec{AC}$.
- **Tính chất trung điểm:** $I$ là trung điểm $AB \Leftrightarrow \vec{IA} + \vec{IB} = \vec{0}$. Khi đó với điểm $M$ bất kì: $\vec{MA} + \vec{MB} = 2\vec{MI}$.
- **Tính chất trọng tâm:** $G$ là trọng tâm $\triangle ABC \Leftrightarrow \vec{GA} + \vec{GB} + \vec{GC} = \vec{0}$. Khi đó với điểm $M$ bất kì: $\vec{MA} + \vec{MB} + \vec{MC} = 3\vec{MG}$.

---

### 2. Chuyên đề Nâng cao: Lý thuyết Tâm Tỉ Cự (Barycentric Center)
📌 **Định lý Tâm Tỉ Cự:**
- Với hệ điểm $A_1, A_2, ..., A_n$ và các hệ số $k_1, k_2, ..., k_n$ sao cho tổng $k_1 + k_2 + ... + k_n \neq 0$, tồn tại **duy nhất** điểm $I$ (gọi là tâm tỉ cự) thỏa mãn:
  $$k_1 \vec{IA_1} + k_2 \vec{IA_2} + ... + k_n \vec{IA_n} = \vec{0}$$
- Khi đó với mọi điểm $M$ bất kì trong mặt phẳng, ta có công thức thu gọn:
  $$k_1 \vec{MA_1} + k_2 \vec{MA_2} + ... + k_n \vec{MA_n} = (k_1 + k_2 + ... + k_n) \vec{MI}$$
        `,
        tips: `
- 💡 **Kỹ thuật chèn điểm:** Là kĩ thuật quan trọng nhất trong hình học vectơ. Để phân tích một vectơ thành tổng các vectơ khác, hãy liên tục chèn các điểm trung gian có sẵn trong giả thiết (trung điểm, trọng tâm).
- 💡 **Mẹo tìm quỹ tích:** Khi gặp bài toán $|\text{Tổng các vectơ}| = k$, hãy dùng tâm tỉ cự để thu gọn biểu thức bên trong dấu $|...|$ về dạng $|n\vec{MI}| = k \Leftrightarrow MI = \frac{k}{|n|}$, suy ra tập hợp $M$ là đường tròn.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Cho 4 điểm bất kì $A, B, C, D$. Chứng minh rằng: $\vec{AB} + \vec{CD} = \vec{AD} + \vec{CB}$.
* **Lời giải:**
  - Ta có vế trái: $VT = \vec{AB} + \vec{CD}$.
  - Chèn điểm $D$ vào vectơ thứ nhất và điểm $B$ vào vectơ thứ hai:
    $VT = (\vec{AD} + \vec{DB}) + (\vec{CB} + \vec{BD})$
  - Gom các vectơ đối nhau: 
    $VT = \vec{AD} + \vec{CB} + (\vec{DB} + \vec{BD}) = \vec{AD} + \vec{CB} + \vec{DD} = \vec{AD} + \vec{CB} + \vec{0} = VP$.
  - (ĐPCM).

**Bài 2 (Cơ bản):** Cho hình vuông $ABCD$ cạnh $a$. Tính độ dài của vectơ $\vec{u} = \vec{AB} + \vec{AD}$ và $\vec{v} = \vec{AB} - \vec{AC}$.
* **Lời giải:**
  - Tính $|\vec{u}|$: Theo quy tắc hình bình hành, $\vec{AB} + \vec{AD} = \vec{AC}$. Do đó $|\vec{u}| = |\vec{AC}| = AC$. 
    Trong hình vuông cạnh $a$, đường chéo $AC = a\sqrt{2}$. Vậy $|\vec{u}| = a\sqrt{2}$.
  - Tính $|\vec{v}|$: Ta có $\vec{AB} - \vec{AC} = \vec{CB}$. 
    Do đó $|\vec{v}| = |\vec{CB}| = CB = a$.

**Bài 3 (Vận dụng):** Cho $\triangle ABC$. Gọi $M$ là trung điểm của $BC$ và $N$ là điểm trên cạnh $AC$ sao cho $NC = 2NA$. Phân tích vectơ $\vec{MN}$ theo hai vectơ $\vec{a} = \vec{AB}$ và $\vec{b} = \vec{AC}$.
* **Lời giải:**
  - Ta có: $\vec{MN} = \vec{MA} + \vec{AN} = -\vec{AM} + \vec{AN}$.
  - Vì $M$ là trung điểm $BC$ nên $\vec{AM} = \frac{1}{2}(\vec{AB} + \vec{AC}) = \frac{1}{2}\vec{a} + \frac{1}{2}\vec{b}$.
  - Vì $N$ thuộc $AC$ và $NC = 2NA$ nên $AN = \frac{1}{3}AC \Rightarrow \vec{AN} = \frac{1}{3}\vec{AC} = \frac{1}{3}\vec{b}$.
  - Thay vào biểu thức ban đầu:
    $\vec{MN} = -\left(\frac{1}{2}\vec{a} + \frac{1}{2}\vec{b}\right) + \frac{1}{3}\vec{b} = -\frac{1}{2}\vec{a} - \frac{1}{6}\vec{b}$.

**Bài 4 (Vận dụng cao):** Cho $\triangle ABC$. Gọi $I$ là điểm thỏa mãn $\vec{IA} + 2\vec{IB} + 3\vec{IC} = \vec{0}$. Chứng minh rằng $I$ là điểm hoàn toàn xác định. Phân tích $\vec{AI}$ theo $\vec{AB}, \vec{AC}$.
* **Lời giải:**
  - Chèn điểm $A$ vào biểu thức: $\vec{IA} + 2(\vec{IA} + \vec{AB}) + 3(\vec{IA} + \vec{AC}) = \vec{0}$.
  - $\Leftrightarrow 6\vec{IA} + 2\vec{AB} + 3\vec{AC} = \vec{0}$.
  - $\Leftrightarrow 6\vec{AI} = 2\vec{AB} + 3\vec{AC} \Leftrightarrow \vec{AI} = \frac{1}{3}\vec{AB} + \frac{1}{2}\vec{AC}$.
  - Vì $A, B, C$ cố định nên $\vec{AB}, \vec{AC}$ cố định, do đó $\vec{AI}$ cố định, suy ra $I$ là điểm duy nhất được xác định.

**Bài 5 (Nâng cao):** Cho $\triangle ABC$. Tìm tập hợp (quỹ tích) các điểm $M$ thỏa mãn: $|\vec{MA} + \vec{MB} + 2\vec{MC}| = |\vec{MA} - \vec{MB}|$.
* **Lời giải:**
  - Vế phải: $|\vec{MA} - \vec{MB}| = |\vec{BA}| = AB$ (độ dài cố định).
  - Vế trái: Tìm tâm tỉ cự $I$ sao cho $\vec{IA} + \vec{IB} + 2\vec{IC} = \vec{0}$ (điểm $I$ cố định, có thể vẽ được).
    Khi đó, chèn $I$ vào vế trái: $\vec{MA} + \vec{MB} + 2\vec{MC} = (\vec{MI} + \vec{IA}) + (\vec{MI} + \vec{IB}) + 2(\vec{MI} + \vec{IC})$
    $= 4\vec{MI} + (\vec{IA} + \vec{IB} + 2\vec{IC}) = 4\vec{MI} + \vec{0} = 4\vec{MI}$.
  - Phương trình quỹ tích trở thành: $|4\vec{MI}| = AB \Leftrightarrow 4MI = AB \Leftrightarrow MI = \frac{AB}{4}$.
  - Kết luận: Vì $I$ cố định và $AB$ không đổi, tập hợp các điểm $M$ là **đường tròn tâm $I$ bán kính $R = \frac{AB}{4}$**.
        `
    },

    "MATH10-CH4-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương IV: Vectơ",
        title: "Bài 2: Tọa độ Vectơ & Tích vô hướng",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương IV", "Bài 2"],
        theory: `
### 1. Hệ trục tọa độ & Biểu thức tọa độ
📌 **Tọa độ Vectơ:**
- Cho $\vec{u} = (x_1; y_1)$ và $\vec{v} = (x_2; y_2)$ trên hệ trục $(O; \vec{i}, \vec{j})$.
- $\vec{u} \pm \vec{v} = (x_1 \pm x_2; y_1 \pm y_2)$.
- $k\vec{u} = (kx_1; ky_1)$.
- $\vec{u} \text{ và } \vec{v} \text{ cùng phương } \Leftrightarrow x_1 y_2 - x_2 y_1 = 0$ (hoặc $\frac{x_1}{x_2} = \frac{y_1}{y_2}$ nếu các mẫu khác 0).

📌 **Tọa độ Điểm:**
- Cho $A(x_A; y_A)$ và $B(x_B; y_B)$: $\vec{AB} = (x_B - x_A; y_B - y_A)$.
- Trung điểm $I$ của $AB$: $I\left(\frac{x_A+x_B}{2}; \frac{y_A+y_B}{2}\right)$.
- Trọng tâm $G$ của $\triangle ABC$: $G\left(\frac{x_A+x_B+x_C}{3}; \frac{y_A+y_B+y_C}{3}\right)$.

---

### 2. Tích vô hướng của hai vectơ
📌 **Định nghĩa & Tính chất:**
- $\vec{a} \cdot \vec{b} = |\vec{a}| \cdot |\vec{b}| \cdot \cos(\vec{a}, \vec{b})$.
- Bình phương vô hướng: $\vec{a}^2 = |\vec{a}|^2$.
- Hai vectơ vuông góc: $\vec{a} \perp \vec{b} \Leftrightarrow \vec{a} \cdot \vec{b} = 0$.

📌 **Biểu thức tọa độ của tích vô hướng:**
- $\vec{u} \cdot \vec{v} = x_1 x_2 + y_1 y_2$.
- Độ dài vectơ: $|\vec{u}| = \sqrt{x_1^2 + y_1^2}$.
- Góc giữa hai vectơ: $\cos(\vec{u}, \vec{v}) = \frac{x_1 x_2 + y_1 y_2}{\sqrt{x_1^2 + y_1^2} \cdot \sqrt{x_2^2 + y_2^2}}$.

---

### 3. Bất đẳng thức Vectơ Nâng cao
- **Bất đẳng thức Cauchy-Schwarz dạng vectơ:** $|\vec{a} \cdot \vec{b}| \le |\vec{a}| \cdot |\vec{b}|$.
  - Dấu "=" xảy ra $\Leftrightarrow \vec{a}, \vec{b}$ cùng phương.
- Ứng dụng: Dùng để tìm cực trị hình học, Min/Max của các biểu thức tọa độ liên quan đến tổng, hiệu độ dài.
        `,
        tips: `
- 💡 **Mẹo tính góc:** Khi tích vô hướng $< 0$, góc giữa hai vectơ là góc tù ( $> 90^\circ$). Khi tích vô hướng $> 0$, góc là góc nhọn ( $< 90^\circ$).
- 💡 **Kiểm tra 3 điểm thẳng hàng:** 3 điểm $A, B, C$ thẳng hàng $\Leftrightarrow \vec{AB}$ và $\vec{AC}$ cùng phương $\Leftrightarrow \frac{x_C - x_A}{x_B - x_A} = \frac{y_C - y_A}{y_B - y_A}$.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Cho $\vec{a} = (2; -3)$ và $\vec{b} = (-1; 4)$. Tính tọa độ vectơ $\vec{u} = 2\vec{a} - 3\vec{b}$ và độ dài $|\vec{u}|$.
* **Lời giải:**
  - Ta có $2\vec{a} = (4; -6)$ và $3\vec{b} = (-3; 12)$.
  - $\vec{u} = 2\vec{a} - 3\vec{b} = (4 - (-3); -6 - 12) = (7; -18)$.
  - Độ dài: $|\vec{u}| = \sqrt{7^2 + (-18)^2} = \sqrt{49 + 324} = \sqrt{373}$.

**Bài 2 (Cơ bản):** Trong mặt phẳng $Oxy$, cho 3 điểm $A(-1; 2), B(3; 0), C(5; 4)$. Chứng minh $\triangle ABC$ vuông tại $B$.
* **Lời giải:**
  - Ta tính tọa độ hai vectơ xuất phát từ $B$:
    $\vec{BA} = (-1 - 3; 2 - 0) = (-4; 2)$.
    $\vec{BC} = (5 - 3; 4 - 0) = (2; 4)$.
  - Xét tích vô hướng: $\vec{BA} \cdot \vec{BC} = (-4)(2) + (2)(4) = -8 + 8 = 0$.
  - Vì $\vec{BA} \cdot \vec{BC} = 0 \Rightarrow \vec{BA} \perp \vec{BC}$. Vậy $\triangle ABC$ vuông tại $B$.

**Bài 3 (Vận dụng):** Cho $\triangle ABC$ với $A(1; 3), B(-2; 1), C(4; 5)$. Tìm tọa độ điểm $D$ sao cho tứ giác $ABCD$ là hình bình hành.
* **Lời giải:**
  - Gọi $D(x; y)$. Để $ABCD$ là hình bình hành, điều kiện cần và đủ là $\vec{AB} = \vec{DC}$.
  - Ta có: $\vec{AB} = (-2 - 1; 1 - 3) = (-3; -2)$.
  - $\vec{DC} = (4 - x; 5 - y)$.
  - Cho hai vectơ bằng nhau: $\begin{cases} 4 - x = -3 \\ 5 - y = -2 \end{cases} \Leftrightarrow \begin{cases} x = 7 \\ y = 7 \end{cases}$.
  - Vậy tọa độ điểm $D$ là $(7; 7)$.

**Bài 4 (Vận dụng cao):** Cho hai điểm $A(2; 4), B(1; 1)$. Tìm tọa độ điểm $C$ thuộc trục $Ox$ sao cho $\triangle ABC$ cân tại $C$.
* **Lời giải:**
  - Vì $C \in Ox$ nên $C(x; 0)$.
  - $\triangle ABC$ cân tại $C \Leftrightarrow CA = CB \Leftrightarrow CA^2 = CB^2$.
  - Ta có $\vec{CA} = (2 - x; 4 - 0) \Rightarrow CA^2 = (2 - x)^2 + 16$.
  - Ta có $\vec{CB} = (1 - x; 1 - 0) \Rightarrow CB^2 = (1 - x)^2 + 1$.
  - Phương trình: $(2 - x)^2 + 16 = (1 - x)^2 + 1$
    $\Leftrightarrow 4 - 4x + x^2 + 16 = 1 - 2x + x^2 + 1$
    $\Leftrightarrow -2x + 20 = 2 \Leftrightarrow 2x = 18 \Leftrightarrow x = 9$.
  - Vậy $C(9; 0)$.

**Bài 5 (Nâng cao):** Cho điểm $A(-1; 2)$ và $B(4; -3)$. Tìm tọa độ điểm $M$ trên trục $Oy$ sao cho biểu thức $P = |\vec{MA} + 2\vec{MB}|$ đạt giá trị nhỏ nhất.
* **Lời giải:**
  - Tìm tâm tỉ cự $I$ sao cho $\vec{IA} + 2\vec{IB} = \vec{0}$.
    Gọi $I(x_I; y_I)$, ta có: $( -1 - x_I; 2 - y_I ) + 2( 4 - x_I; -3 - y_I ) = (0; 0)$.
    $\Rightarrow \begin{cases} -1 - x_I + 8 - 2x_I = 0 \\ 2 - y_I - 6 - 2y_I = 0 \end{cases} \Leftrightarrow \begin{cases} 3x_I = 7 \\ 3y_I = -4 \end{cases} \Rightarrow I\left(\frac{7}{3}; -\frac{4}{3}\right)$.
  - Khi đó $P = |\vec{MA} + 2\vec{MB}| = |3\vec{MI}| = 3MI$.
  - $P$ đạt giá trị nhỏ nhất $\Leftrightarrow MI$ ngắn nhất.
  - Vì $M \in Oy$ nên độ dài $MI$ ngắn nhất khi $M$ là hình chiếu vuông góc của $I$ lên trục $Oy$.
  - Điểm $I\left(\frac{7}{3}; -\frac{4}{3}\right)$, chiếu lên $Oy$ (giữ nguyên $y$, hoành độ bằng 0) $\Rightarrow M\left(0; -\frac{4}{3}\right)$.
  - *(Khi đó $MI_{min} = |x_I| = \frac{7}{3}$, suy ra $P_{min} = 3 \times \frac{7}{3} = 7$)*.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH4;
}
