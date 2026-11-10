/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương III: Hệ thức lượng trong tam giác (Bổ sung 100% giải chi tiết)
   ========================================================================== */

const DATA_TOAN10_CH3 = {
    "MATH10-CH3-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương III: Hệ thức lượng trong tam giác",
        title: "Bài 1: Giá trị lượng giác của một góc từ 0° đến 180°",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương III", "Bài 1"],
        theory: `
### 1. Nửa đường tròn đơn vị & Các giá trị lượng giác
📌 **Định nghĩa:**
- Trên mặt phẳng tọa độ $Oxy$, lấy nửa đường tròn tâm $O$ bán kính $R=1$ nằm phía trên trục hoành.
- Với mỗi góc $\alpha$ ($0^\circ \le \alpha \le 180^\circ$), có duy nhất điểm $M(x_0; y_0)$ trên nửa đường tròn sao cho $\widehat{xOM} = \alpha$.
- Khi đó: $\sin \alpha = y_0$, $\cos \alpha = x_0$, $\tan \alpha = \frac{y_0}{x_0}$ ($x_0 \neq 0$), $\cot \alpha = \frac{x_0}{y_0}$ ($y_0 \neq 0$).

---

### 2. Quan hệ giữa các góc đặc biệt & Hằng đẳng thức
📌 **Góc bù nhau ($\alpha$ và $180^\circ - \alpha$): "Sin bù"**
- $\sin(180^\circ - \alpha) = \sin \alpha$
- $\cos(180^\circ - \alpha) = -\cos \alpha$
- $\tan(180^\circ - \alpha) = -\tan \alpha$
- $\cot(180^\circ - \alpha) = -\cot \alpha$

📌 **Góc phụ nhau ($\alpha$ và $90^\circ - \alpha$): "Phụ chéo"**
- $\sin(90^\circ - \alpha) = \cos \alpha$; $\cos(90^\circ - \alpha) = \sin \alpha$
- $\tan(90^\circ - \alpha) = \cot \alpha$; $\cot(90^\circ - \alpha) = \tan \alpha$

📌 **Các hệ thức lượng giác cơ bản:**
1. $\sin^2 \alpha + \cos^2 \alpha = 1$
2. $\tan \alpha \cdot \cot \alpha = 1$
3. $1 + \tan^2 \alpha = \frac{1}{\cos^2 \alpha}$ (với $\alpha \neq 90^\circ$)
4. $1 + \cot^2 \alpha = \frac{1}{\sin^2 \alpha}$ (với $\alpha \neq 0^\circ, 180^\circ$)
        `,
        tips: `
- 💡 **Chú ý xét dấu:** Từ $90^\circ$ đến $180^\circ$ (góc tù), chỉ có $\sin \alpha > 0$, còn $\cos, \tan, \cot$ đều mang dấu ÂM. Khi khai căn để tính $\cos \alpha$ từ $\sin \alpha$, bắt buộc phải lấy nghiệm âm.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Tính các giá trị lượng giác của góc $135^\circ$.
* **Lời giải:**
  - Ta áp dụng tính chất góc bù: $135^\circ = 180^\circ - 45^\circ$.
  - $\sin 135^\circ = \sin(180^\circ - 45^\circ) = \sin 45^\circ = \frac{\sqrt{2}}{2}$
  - $\cos 135^\circ = \cos(180^\circ - 45^\circ) = -\cos 45^\circ = -\frac{\sqrt{2}}{2}$
  - $\tan 135^\circ = -\tan 45^\circ = -1$; $\cot 135^\circ = -1$.

**Bài 2 (Cơ bản):** Cho $\cos \alpha = -\frac{1}{3}$ với $90^\circ < \alpha < 180^\circ$. Tính $\sin \alpha$ và $\tan \alpha$.
* **Lời giải:**
  - Ta có: $\sin^2 \alpha + \cos^2 \alpha = 1 \Rightarrow \sin^2 \alpha = 1 - \left(-\frac{1}{3}\right)^2 = 1 - \frac{1}{9} = \frac{8}{9}$.
  - Vì $90^\circ < \alpha < 180^\circ$ nên $\sin \alpha > 0$. Do đó, $\sin \alpha = \sqrt{\frac{8}{9}} = \frac{2\sqrt{2}}{3}$.
  - $\tan \alpha = \frac{\sin \alpha}{\cos \alpha} = \frac{\frac{2\sqrt{2}}{3}}{-\frac{1}{3}} = -2\sqrt{2}$.

**Bài 3 (Vận dụng):** Rút gọn biểu thức $A = \sin(180^\circ - x) - \cos(90^\circ - x) + \cos(180^\circ - x) + \cos x$.
* **Lời giải:**
  - Áp dụng "Sin bù": $\sin(180^\circ - x) = \sin x$, $\cos(180^\circ - x) = -\cos x$.
  - Áp dụng "Phụ chéo": $\cos(90^\circ - x) = \sin x$.
  - Thay vào $A$: $A = \sin x - \sin x + (-\cos x) + \cos x = 0$.

**Bài 4 (Vận dụng cao):** Cho $\tan \alpha = 2$. Tính giá trị biểu thức $P = \frac{2\sin \alpha - 3\cos \alpha}{4\sin \alpha + 5\cos \alpha}$.
* **Lời giải:**
  - Cách giải nhanh: Chia cả tử và mẫu cho $\cos \alpha$ (vì $\tan \alpha = 2 \Rightarrow \cos \alpha \neq 0$).
  - $P = \frac{2\frac{\sin \alpha}{\cos \alpha} - 3}{4\frac{\sin \alpha}{\cos \alpha} + 5} = \frac{2\tan \alpha - 3}{4\tan \alpha + 5}$
  - Thay $\tan \alpha = 2$ vào: $P = \frac{2(2) - 3}{4(2) + 5} = \frac{1}{13}$.

**Bài 5 (Nâng cao):** Tính giá trị biểu thức $B = \sin^2 15^\circ + \sin^2 35^\circ + \sin^2 55^\circ + \sin^2 75^\circ$.
* **Lời giải:**
  - Áp dụng "Phụ chéo": $\sin 75^\circ = \cos 15^\circ \Rightarrow \sin^2 75^\circ = \cos^2 15^\circ$.
  - Tương tự: $\sin 55^\circ = \cos 35^\circ \Rightarrow \sin^2 55^\circ = \cos^2 35^\circ$.
  - Thay vào $B$: $B = \sin^2 15^\circ + \sin^2 35^\circ + \cos^2 35^\circ + \cos^2 15^\circ$
  - Ghép cặp: $B = (\sin^2 15^\circ + \cos^2 15^\circ) + (\sin^2 35^\circ + \cos^2 35^\circ) = 1 + 1 = 2$.
        `
    },

    "MATH10-CH3-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương III: Hệ thức lượng trong tam giác",
        title: "Bài 2: Định lí Côsin, Sin & Giải tam giác",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương III", "Bài 2"],
        theory: `
### 1. Định lí Côsin và Định lí Sin
📌 **Định lí Côsin:** (Dùng khi biết 3 cạnh hoặc 2 cạnh và góc xen giữa)
- $a^2 = b^2 + c^2 - 2bc \cos A \Rightarrow \cos A = \frac{b^2 + c^2 - a^2}{2bc}$
- Tương tự cho $b^2$ và $c^2$.

📌 **Định lí Sin:** (Dùng khi biết 2 góc và 1 cạnh, hoặc liên quan bán kính $R$)
- $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$ ($R$ là bán kính đường tròn ngoại tiếp).

---

### 2. Các công thức tính Diện tích Tam giác (S)
- $S = \frac{1}{2}ah_a = \frac{1}{2}bh_b = \frac{1}{2}ch_c$ (Cạnh đáy $\times$ chiều cao)
- $S = \frac{1}{2}ab \sin C = \frac{1}{2}bc \sin A = \frac{1}{2}ca \sin B$
- $S = \frac{abc}{4R}$
- $S = pr$ ($p = \frac{a+b+c}{2}$ là nửa chu vi, $r$ là bán kính đ.tròn nội tiếp)
- **Công thức Heron:** $S = \sqrt{p(p-a)(p-b)(p-c)}$

---

### 3. Bổ đề Chuyên sâu (Đường trung tuyến Apollonius)
- Độ dài đường trung tuyến kẻ từ đỉnh A: $m_a^2 = \frac{2(b^2 + c^2) - a^2}{4}$
        `,
        tips: `
- 💡 **Chiến thuật Giải tam giác:**
  - SSS (3 cạnh) $\rightarrow$ Dùng Côsin tìm 1 góc $\rightarrow$ Dùng Sin/Côsin tìm góc còn lại.
  - SAS (2 cạnh, 1 góc xen giữa) $\rightarrow$ Dùng Côsin tìm cạnh thứ 3.
  - AAS/ASA (2 góc, 1 cạnh) $\rightarrow$ Dùng tổng 3 góc bằng 180° tìm góc thứ 3 $\rightarrow$ Dùng Định lí Sin tìm 2 cạnh còn lại.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Cho $\triangle ABC$ có $b = 8, c = 5$ và $\widehat{A} = 60^\circ$. Tính cạnh $a$ và diện tích $S$ của tam giác.
* **Lời giải:**
  - Áp dụng Định lí Côsin: $a^2 = b^2 + c^2 - 2bc \cos A$
  - $a^2 = 8^2 + 5^2 - 2(8)(5)\cos 60^\circ = 64 + 25 - 80\left(\frac{1}{2}\right) = 89 - 40 = 49$.
  - Suy ra $a = 7$.
  - Tính diện tích: $S = \frac{1}{2}bc \sin A = \frac{1}{2}(8)(5)\sin 60^\circ = 20\left(\frac{\sqrt{3}}{2}\right) = 10\sqrt{3}$.

**Bài 2 (Cơ bản):** Cho $\triangle ABC$ có $\widehat{A} = 45^\circ, \widehat{B} = 75^\circ, c = 10$. Tính bán kính đường tròn ngoại tiếp $R$ và cạnh $a$.
* **Lời giải:**
  - Tính góc C: $\widehat{C} = 180^\circ - (45^\circ + 75^\circ) = 60^\circ$.
  - Áp dụng Định lí Sin: $\frac{c}{\sin C} = 2R \Rightarrow 2R = \frac{10}{\sin 60^\circ} = \frac{10}{\frac{\sqrt{3}}{2}} = \frac{20}{\sqrt{3}} \Rightarrow R = \frac{10\sqrt{3}}{3}$.
  - Tính cạnh a: $\frac{a}{\sin A} = 2R \Rightarrow a = 2R \sin A = \frac{20}{\sqrt{3}} \cdot \sin 45^\circ = \frac{20}{\sqrt{3}} \cdot \frac{\sqrt{2}}{2} = \frac{10\sqrt{6}}{3}$.

**Bài 3 (Vận dụng):** Tam giác ABC có 3 cạnh $a=13, b=14, c=15$. Tính bán kính đường tròn nội tiếp $r$ và độ dài đường cao $h_a$.
* **Lời giải:**
  - Nửa chu vi $p = \frac{13 + 14 + 15}{2} = 21$.
  - Áp dụng công thức Heron: $S = \sqrt{p(p-a)(p-b)(p-c)} = \sqrt{21(21-13)(21-14)(21-15)} = \sqrt{21 \cdot 8 \cdot 7 \cdot 6} = 84$.
  - Tính $r$: Ta có $S = pr \Rightarrow r = \frac{S}{p} = \frac{84}{21} = 4$.
  - Tính $h_a$: $S = \frac{1}{2}ah_a \Rightarrow 84 = \frac{1}{2}(13)h_a \Rightarrow h_a = \frac{168}{13}$.

**Bài 4 (Vận dụng cao):** Cho $\triangle ABC$. Chứng minh rằng $a = b\cos C + c\cos B$.
* **Lời giải:**
  - Kẻ đường cao $AH$ vuông góc với $BC$ ($H \in BC$). Ta xét trường hợp $\triangle ABC$ nhọn (góc tù chứng minh tương tự dùng góc kề bù).
  - $a = BC = BH + HC$.
  - Trong $\triangle ABH$ vuông tại $H$: $\cos B = \frac{BH}{c} \Rightarrow BH = c\cos B$.
  - Trong $\triangle ACH$ vuông tại $H$: $\cos C = \frac{HC}{b} \Rightarrow HC = b\cos C$.
  - Cộng vế theo vế: $a = BH + HC = c\cos B + b\cos C$ (ĐPCM).
  - *(Cách 2: Thay $\cos B, \cos C$ bằng Định lí Côsin rồi rút gọn cũng ra kết quả $a$).*

**Bài 5 (Nâng cao):** Cho $\triangle ABC$ thỏa mãn hệ thức $\sin^2 A = \sin^2 B + \sin^2 C$. Chứng minh $\triangle ABC$ là tam giác vuông.
* **Lời giải:**
  - Theo Định lí Sin: $\sin A = \frac{a}{2R}, \sin B = \frac{b}{2R}, \sin C = \frac{c}{2R}$.
  - Thay vào hệ thức đã cho: $\left(\frac{a}{2R}\right)^2 = \left(\frac{b}{2R}\right)^2 + \left(\frac{c}{2R}\right)^2$.
  - $\Leftrightarrow \frac{a^2}{4R^2} = \frac{b^2}{4R^2} + \frac{c^2}{4R^2}$
  - $\Leftrightarrow a^2 = b^2 + c^2$.
  - Theo định lí Pytago đảo, $\triangle ABC$ vuông tại $A$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH3;
}
