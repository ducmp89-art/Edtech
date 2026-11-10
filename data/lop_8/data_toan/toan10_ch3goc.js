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
### 1. Nửa đường tròn đơn vị & Định nghĩa Giá trị lượng giác
📌 **Định nghĩa:**
- Trên mặt phẳng tọa độ $Oxy$, lấy nửa đường tròn tâm $O$ bán kính $R=1$ nằm phía trên trục hoành ($y \ge 0$).
- Với mỗi góc $\alpha$ ($0^\circ \le \alpha \le 180^\circ$), có duy nhất điểm $M(x_0; y_0)$ trên nửa đường tròn sao cho $\widehat{xOM} = \alpha$.
- Khi đó:
  - $\sin \alpha = y_0$ (tung độ của điểm $M$)
  - $\cos \alpha = x_0$ (hoành độ của điểm $M$)
  - $\tan \alpha = \frac{y_0}{x_0} = \frac{\sin \alpha}{\cos \alpha}$ (với $x_0 \neq 0$ hay $\alpha \neq 90^\circ$)
  - $\cot \alpha = \frac{x_0}{y_0} = \frac{\cos \alpha}{\sin \alpha}$ (với $y_0 \neq 0$ hay $\alpha \neq 0^\circ, 180^\circ$)

---

### 2. Quan hệ giữa các góc đặc biệt (Tính chất Lượng giác)
📌 **Góc bù nhau ($\alpha$ và $180^\circ - \alpha$): "Sin bù"**
- $\sin(180^\circ - \alpha) = \sin \alpha$
- $\cos(180^\circ - \alpha) = -\cos \alpha$
- $\tan(180^\circ - \alpha) = -\tan \alpha$
- $\cot(180^\circ - \alpha) = -\cot \alpha$

📌 **Góc phụ nhau ($\alpha$ và $90^\circ - \alpha$): "Phụ chéo"**
- $\sin(90^\circ - \alpha) = \cos \alpha$
- $\cos(90^\circ - \alpha) = \sin \alpha$
- $\tan(90^\circ - \alpha) = \cot \alpha$
- $\cot(90^\circ - \alpha) = \tan \alpha$

---

### 3. Các hệ thức lượng giác cơ bản cần nắm vững
1. $\sin^2 \alpha + \cos^2 \alpha = 1$
2. $\tan \alpha \cdot \cot \alpha = 1$ (với $\alpha \neq 0^\circ, 90^\circ, 180^\circ$)
3. $1 + \tan^2 \alpha = \frac{1}{\cos^2 \alpha}$ (với $\alpha \neq 90^\circ$)
4. $1 + \cot^2 \alpha = \frac{1}{\sin^2 \alpha}$ (với $\alpha \neq 0^\circ, 180^\circ$)

---

### 4. Bảng giá trị lượng giác của các góc đặc biệt
| Angle ($\alpha$) | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $120^\circ$ | $135^\circ$ | $150^\circ$ | $180^\circ$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$\sin \alpha$** | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ |
| **$\cos \alpha$** | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-\frac{1}{2}$ | $-\frac{\sqrt{2}}{2}$ | $-\frac{\sqrt{3}}{2}$ | $-1$ |
| **$\tan \alpha$** | $0$ | $\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | $||$ | $-\sqrt{3}$ | $-1$ | $-\frac{\sqrt{3}}{3}$ | $0$ |
| **$\cot \alpha$** | $||$ | $\sqrt{3}$ | $1$ | $\frac{\sqrt{3}}{3}$ | $0$ | $-\frac{\sqrt{3}}{3}$ | $-1$ | $-\sqrt{3}$ | $||$ |
        `,
        tips: `
- 💡 **Dấu của các giá trị lượng giác:**
  - Khi $0^\circ < \alpha < 90^\circ$ (góc nhọn): $\sin \alpha > 0$, $\cos \alpha > 0$, $\tan \alpha > 0$, $\cot \alpha > 0$.
  - Khi $90^\circ < \alpha < 180^\circ$ (góc tù): $\sin \alpha > 0$, còn $\cos \alpha < 0$, $\tan \alpha < 0$, $\cot \alpha < 0$.
- 💡 **Mẹo tính nhanh khi cho $\tan \alpha = k$:** Với các biểu thức đẳng cấp bậc 1 hoặc bậc 2 đối với $\sin \alpha$ và $\cos \alpha$, hãy chia cả tử và mẫu cho $\cos \alpha$ (hoặc $\cos^2 \alpha$) để đưa toàn bộ về $\tan \alpha$.
        `,
        practice: `
### Bài tập Vận dụng Trọng tâm (10 Câu có Lời giải Chi tiết)

**Bài 1 (Nhận biết):** Tính giá trị của biểu thức $A = \sin 30^\circ + \cos 60^\circ - \sin 120^\circ + \cos 150^\circ$.
* **Lời giải:**
  - Ta có: $\sin 30^\circ = \frac{1}{2}$, $\cos 60^\circ = \frac{1}{2}$.
  - Áp dụng góc bù: $\sin 120^\circ = \sin(180^\circ - 60^\circ) = \sin 60^\circ = \frac{\sqrt{3}}{2}$.
  - $\cos 150^\circ = \cos(180^\circ - 30^\circ) = -\cos 30^\circ = -\frac{\sqrt{3}}{2}$.
  - Thay vào $A$: $A = \frac{1}{2} + \frac{1}{2} - \frac{\sqrt{3}}{2} + \left(-\frac{\sqrt{3}}{2}\right) = 1 - \sqrt{3}$.

**Bài 2 (Thông hiểu):** Cho $\cos \alpha = -\frac{3}{5}$ với $90^\circ < \alpha < 180^\circ$. Tính $\sin \alpha$, $\tan \alpha$ và $\cot \alpha$.
* **Lời giải:**
  - Ta có: $\sin^2 \alpha + \cos^2 \alpha = 1 \Rightarrow \sin^2 \alpha = 1 - \cos^2 \alpha = 1 - \left(-\frac{3}{5}\right)^2 = \frac{16}{25}$.
  - Vì $90^\circ < \alpha < 180^\circ$ nên $\sin \alpha > 0 \Rightarrow \sin \alpha = \sqrt{\frac{16}{25}} = \frac{4}{5}$.
  - Tính $\tan \alpha = \frac{\sin \alpha}{\cos \alpha} = \frac{\frac{4}{5}}{-\frac{3}{5}} = -\frac{4}{3}$.
  - Tính $\cot \alpha = \frac{1}{\tan \alpha} = -\frac{3}{4}$.

**Bài 3 (Thông hiểu):** Cho $\sin \alpha = \frac{1}{3}$ với $0^\circ < \alpha < 90^\circ$. Tính giá trị của biểu thức $P = 3\sin^2 \alpha + 4\cos^2 \alpha$.
* **Lời giải:**
  - Ta có $\cos^2 \alpha = 1 - \sin^2 \alpha = 1 - \left(\frac{1}{3}\right)^2 = \frac{8}{9}$.
  - Thay vào biểu thức $P$: $P = 3 \cdot \frac{1}{9} + 4 \cdot \frac{8}{9} = \frac{3 + 32}{9} = \frac{35}{9}$.

**Bài 4 (Vận dụng):** Rút gọn biểu thức $M = \sin(180^\circ - x) \cdot \cos(90^\circ - x) + \cos(180^\circ - x) \cdot \sin(90^\circ - x)$.
* **Lời giải:**
  - Áp dụng các tính chất:
    - $\sin(180^\circ - x) = \sin x$
    - $\cos(90^\circ - x) = \sin x$
    - $\cos(180^\circ - x) = -\cos x$
    - $\sin(90^\circ - x) = \cos x$
  - Thay vào $M$: $M = (\sin x) \cdot (\sin x) + (-\cos x) \cdot (\cos x) = \sin^2 x - \cos^2 x$.

**Bài 5 (Vận dụng):** Tính giá trị biểu thức $S = \cos^2 10^\circ + \cos^2 20^\circ + \cos^2 70^\circ + \cos^2 80^\circ$.
* **Lời giải:**
  - Áp dụng tính chất góc phụ nhau:
    - $\cos 80^\circ = \sin 10^\circ \Rightarrow \cos^2 80^\circ = \sin^2 10^\circ$.
    - $\cos 70^\circ = \sin 20^\circ \Rightarrow \cos^2 70^\circ = \sin^2 20^\circ$.
  - Thay vào $S$ và ghép cặp:
    $S = (\cos^2 10^\circ + \sin^2 10^\circ) + (\cos^2 20^\circ + \sin^2 20^\circ) = 1 + 1 = 2$.

**Bài 6 (Vận dụng):** Cho $\tan \alpha = 3$. Tính giá trị của biểu thức $A = \frac{\sin \alpha - 2\cos \alpha}{3\sin \alpha + \cos \alpha}$.
* **Lời giải:**
  - Vì $\tan \alpha = 3$ xác định nên $\cos \alpha \neq 0$. Chia cả tử và mẫu của $A$ cho $\cos \alpha$:
    $A = \frac{\frac{\sin \alpha}{\cos \alpha} - 2}{3\frac{\sin \alpha}{\cos \alpha} + 1} = \frac{\tan \alpha - 2}{3\tan \alpha + 1}$.
  - Thay $\tan \alpha = 3$ vào: $A = \frac{3 - 2}{3(3) + 1} = \frac{1}{10}$.

**Bài 7 (Vận dụng cao):** Cho $\sin \alpha + \cos \alpha = \frac{5}{4}$. Tính giá trị của tích $P = \sin \alpha \cdot \cos \alpha$.
* **Lời giải:**
  - Bình phương hai vế đẳng thức giả thiết:
    $(\sin \alpha + \cos \alpha)^2 = \left(\frac{5}{4}\right)^2 \Leftrightarrow \sin^2 \alpha + 2\sin \alpha \cos \alpha + \cos^2 \alpha = \frac{25}{16}$.
  - Sử dụng hằng đẳng thức $\sin^2 \alpha + \cos^2 \alpha = 1$:
    $1 + 2P = \frac{25}{16} \Leftrightarrow 2P = \frac{25}{16} - 1 = \frac{9}{16} \Leftrightarrow P = \frac{9}{32}$.

**Bài 8 (Vận dụng cao):** Cho $\tan \alpha + \cot \alpha = 3$. Tính giá trị biểu thức $B = \tan^2 \alpha + \cot^2 \alpha$ và $C = \tan^3 \alpha + \cot^3 \alpha$.
* **Lời giải:**
  - Bình phương hai vế: $(\tan \alpha + \cot \alpha)^2 = 9 \Leftrightarrow \tan^2 \alpha + 2\tan \alpha \cot \alpha + \cot^2 \alpha = 9$.
  - Vì $\tan \alpha \cot \alpha = 1$ nên $B + 2 = 9 \Rightarrow B = \tan^2 \alpha + \cot^2 \alpha = 7$.
  - Tính $C$ bằng hằng đẳng thức lập phương:
    $C = (\tan \alpha + \cot \alpha)(\tan^2 \alpha - \tan \alpha \cot \alpha + \cot^2 \alpha) = 3 \cdot (7 - 1) = 3 \cdot 6 = 18$.

**Bài 9 (Nâng cao):** Chứng minh đẳng thức lượng giác sau đúng với mọi góc $\alpha$ làm biểu thức có nghĩa:
$$\frac{1 - 2\sin \alpha \cos \alpha}{\cos^2 \alpha - \sin^2 \alpha} = \frac{1 - \tan \alpha}{1 + \tan \alpha}$$
* **Lời giải:**
  - Biến đổi Vế Trái (VT):
    Thay $1 = \sin^2 \alpha + \cos^2 \alpha$ vào tử số:
    $\text{VT} = \frac{\sin^2 \alpha - 2\sin \alpha \cos \alpha + \cos^2 \alpha}{\cos^2 \alpha - \sin^2 \alpha} = \frac{(\cos \alpha - \sin \alpha)^2}{(\cos \alpha - \sin \alpha)(\cos \alpha + \sin \alpha)} = \frac{\cos \alpha - \sin \alpha}{\cos \alpha + \sin \alpha}$.
  - Chia cả tử và mẫu của phân thức vừa rút gọn cho $\cos \alpha$:
    $\text{VT} = \frac{1 - \frac{\sin \alpha}{\cos \alpha}}{1 + \frac{\sin \alpha}{\cos \alpha}} = \frac{1 - \tan \alpha}{1 + \tan \alpha} = \text{VP}$ (ĐPCM).

**Bài 10 (Nâng cao):** Cho tam giác $ABC$. Tính giá trị biểu thức $K = \sin A \cdot \sin(B + C) + \cos A \cdot \cos(B + C)$.
* **Lời giải:**
  - Trong tam giác $ABC$, ta có $A + B + C = 180^\circ \Rightarrow B + C = 180^\circ - A$.
  - Theo tính chất góc bù nhau:
    $\sin(B + C) = \sin(180^\circ - A) = \sin A$
    $\cos(B + C) = \cos(180^\circ - A) = -\cos A$
  - Thay vào $K$: $K = \sin A \cdot (\sin A) + \cos A \cdot (-\cos A) = \sin^2 A - \cos^2 A$.
  - *(Lưu ý: Nếu tam giác $ABC$ cân hoặc có thêm giả thiết, biểu thức có thể rút gọn hơn nữa).*
        `
    },

    "MATH10-CH3-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương III: Hệ thức lượng trong tam giác",
        title: "Bài 2: Định lí Côsin, Sin & Giải tam giác",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương III", "Bài 2"],
        theory: `
### 1. Ký hiệu chung trong tam giác $ABC$
- Độ dài các cạnh: $BC = a$, $CA = b$, $AB = c$.
- Các góc: $\widehat{A}, \widehat{B}, \widehat{C}$.
- Bán kính đường tròn ngoại tiếp: $R$; Bán kính đường tròn nội tiếp: $r$.
- Nửa chu vi: $p = \frac{a+b+c}{2}$.
- Độ dài các đường cao: $h_a, h_b, h_c$; Các đường trung tuyến: $m_a, m_b, m_c$.

---

### 2. Các Định lí Cơ bản
📌 **Định lí Côsin:**
- $a^2 = b^2 + c^2 - 2bc \cos A \Rightarrow \cos A = \frac{b^2 + c^2 - a^2}{2bc}$
- $b^2 = a^2 + c^2 - 2ac \cos B \Rightarrow \cos B = \frac{a^2 + c^2 - b^2}{2ac}$
- $c^2 = a^2 + b^2 - 2ab \cos C \Rightarrow \cos C = \frac{a^2 + b^2 - c^2}{2ab}$

📌 **Định lí Sin:**
$$\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$$

---

### 3. Công thức tính Đường trung tuyến (Công thức Apollonius)
- $m_a^2 = \frac{2(b^2 + c^2) - a^2}{4}$
- $m_b^2 = \frac{2(a^2 + c^2) - b^2}{4}$
- $m_c^2 = \frac{2(a^2 + b^2) - c^2}{4}$

---

### 4. Hệ thống Công thức tính Diện tích Tam giác ($S$)
1. $S = \frac{1}{2}ah_a = \frac{1}{2}bh_b = \frac{1}{2}ch_c$
2. $S = \frac{1}{2}ab \sin C = \frac{1}{2}bc \sin A = \frac{1}{2}ca \sin B$
3. $S = \frac{abc}{4R}$
4. $S = pr$
5. **Công thức Heron:** $S = \sqrt{p(p-a)(p-b)(p-c)}$

---

### 5. Bài toán Giải tam giác và Ứng dụng thực tế
- **Giải tam giác:** Là tính các cạnh và các góc còn lại của tam giác khi biết một số yếu tố cho trước.
  - *Biết 3 cạnh (SSS):* Dùng Định lí Côsin tính góc.
  - *Biết 2 cạnh và góc xen giữa (SAS):* Dùng Định lí Côsin tìm cạnh thứ 3 $\rightarrow$ dùng Định lí Sin tìm góc.
  - *Biết 1 cạnh và 2 góc (ASA/AAS):* Tìm góc thứ 3 ($180^\circ$ trừ 2 góc) $\rightarrow$ dùng Định lí Sin tìm 2 cạnh còn lại.
        `,
        tips: `
- 💡 **Nhận biết dạng tam giác qua Định lí Côsin:**
  - Nếu $b^2 + c^2 - a^2 > 0 \Leftrightarrow \cos A > 0 \Rightarrow \widehat{A}$ là góc nhọn.
  - Nếu $b^2 + c^2 - a^2 = 0 \Leftrightarrow \cos A = 0 \Rightarrow \widehat{A} = 90^\circ$ (tam giác vuông tại $A$).
  - Nếu $b^2 + c^2 - a^2 < 0 \Leftrightarrow \cos A < 0 \Rightarrow \widehat{A}$ là góc tù.
- 💡 **Mẹo tính nhanh đường cao và bán kính:**
  - Muốn tính $h_a$, hãy tính diện tích $S$ trước rồi suy ra $h_a = \frac{2S}{a}$.
  - Muốn tính $r$, tính $S$ và $p$ rồi dùng $r = \frac{S}{p}$.
  - Muốn tính $R$, tính $S$ rồi dùng $R = \frac{abc}{4S}$.
        `,
        practice: `
### Bài tập Vận dụng Trọng tâm (10 Câu có Lời giải Chi tiết)

**Bài 1 (Nhận biết):** Tam giác $ABC$ có cạnh $b = 6, c = 8$ và $\widehat{A} = 60^\circ$. Tính độ dài cạnh $a$.
* **Lời giải:**
  - Áp dụng định lí Côsin: $a^2 = b^2 + c^2 - 2bc \cos A$.
  - $a^2 = 6^2 + 8^2 - 2(6)(8)\cos 60^\circ = 36 + 64 - 96 \cdot \frac{1}{2} = 100 - 48 = 52$.
  - Suy ra $a = \sqrt{52} = 2\sqrt{13}$.

**Bài 2 (Nhận biết):** Tam giác $ABC$ có $\widehat{A} = 45^\circ, \widehat{B} = 60^\circ$ và cạnh $b = 4\sqrt{6}$. Tính độ dài cạnh $a$ và bán kính đường tròn ngoại tiếp $R$.
* **Lời giải:**
  - Áp dụng định lí Sin: $\frac{a}{\sin A} = \frac{b}{\sin B} = 2R$.
  - Tính cạnh $a$: $a = \frac{b \cdot \sin A}{\sin B} = \frac{4\sqrt{6} \cdot \sin 45^\circ}{\sin 60^\circ} = \frac{4\sqrt{6} \cdot \frac{\sqrt{2}}{2}}{\frac{\sqrt{3}}{2}} = \frac{4\sqrt{12}}{\sqrt{3}} = 8$.
  - Tính $R$: $2R = \frac{b}{\sin B} = \frac{4\sqrt{6}}{\frac{\sqrt{3}}{2}} = 8\sqrt{2} \Rightarrow R = 4\sqrt{2}$.

**Bài 3 (Thông hiểu):** Cho tam giác $ABC$ có $a = 7, b = 8, c = 9$. Tính diện tích $S$ và đường cao $h_a$ của tam giác.
* **Lời giải:**
  - Nửa chu vi $p = \frac{7 + 8 + 9}{2} = 12$.
  - Sử dụng công thức Heron tính diện tích $S$:
    $S = \sqrt{p(p-a)(p-b)(p-c)} = \sqrt{12(12-7)(12-8)(12-9)} = \sqrt{12 \cdot 5 \cdot 4 \cdot 3} = \sqrt{720} = 12\sqrt{5}$.
  - Tính đường cao $h_a$: $S = \frac{1}{2}ah_a \Rightarrow h_a = \frac{2S}{a} = \frac{24\sqrt{5}}{7}$.

**Bài 4 (Thông hiểu):** Tam giác $ABC$ có $a = 5, b = 6, c = 7$. Tính bán kính đường tròn nội tiếp $r$ và ngoại tiếp $R$.
* **Lời giải:**
  - Nửa chu vi $p = \frac{5 + 6 + 7}{2} = 9$.
  - Diện tích $S = \sqrt{9(9-5)(9-6)(9-7)} = \sqrt{9 \cdot 4 \cdot 3 \cdot 2} = 6\sqrt{6}$.
  - Bán kính đường tròn nội tiếp: $r = \frac{S}{p} = \frac{6\sqrt{6}}{9} = \frac{2\sqrt{6}}{3}$.
  - Bán kính đường tròn ngoại tiếp: $R = \frac{abc}{4S} = \frac{5 \cdot 6 \cdot 7}{4 \cdot 6\sqrt{6}} = \frac{35}{4\sqrt{6}} = \frac{35\sqrt{6}}{24}$.

**Bài 5 (Vận dụng):** Cho tam giác $ABC$ có $a = 10, b = 8, c = 6$. Tính độ dài đường trung tuyến $m_a$ kẻ từ đỉnh $A$.
* **Lời giải:**
  - Nhận xét: $a^2 = 100$, $b^2 + c^2 = 8^2 + 6^2 = 100 \Rightarrow \triangle ABC$ vuông tại $A$, cạnh huyền $a = 10$.
  - Áp dụng công thức đường trung tuyến:
    $m_a^2 = \frac{2(b^2 + c^2) - a^2}{4} = \frac{2(64 + 36) - 100}{4} = \frac{100}{4} = 25 \Rightarrow m_a = 5$.
  - *(Cách khác: Trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền $\Rightarrow m_a = \frac{a}{2} = 5$).*

**Bài 6 (Vận dụng):** Từ hai vị trí $A$ và $B$ cách nhau $500\text{ m}$ trên mặt đất, người ta quan sát đỉnh C của một ngọn núi. Biết $\widehat{CAB} = 40^\circ$ và $\widehat{CBA} = 70^\circ$. Tính chiều cao $h$ của ngọn núi (làm tròn đến hàng đơn vị).
* **Lời giải:**
  - Xét tam giác $ABC$: $\widehat{ACB} = 180^\circ - (40^\circ + 70^\circ) = 70^\circ$.
  - Vì $\widehat{CBA} = \widehat{ACB} = 70^\circ$ nên tam giác $ABC$ cân tại $A \Rightarrow AC = AB = 500\text{ m}$.
  - Gọi $CH$ là chiều cao ngọn núi ($CH \perp AB$ tại $H$).
  - Trong tam giác vuông $ACH$: $h = CH = AC \cdot \sin \widehat{CAB} = 500 \cdot \sin 40^\circ \approx 500 \cdot 0.6428 \approx 321\text{ m}$.

**Bài 7 (Vận dụng cao):** Cho tam giác $ABC$ thỏa mãn hệ thức $a = 2b \cos C$. Chứng minh rằng tam giác $ABC$ cân tại $A$.
* **Lời giải:**
  - Áp dụng Định lí Côsin: $\cos C = \frac{a^2 + b^2 - c^2}{2ab}$.
  - Thay vào giả thiết: $a = 2b \cdot \left(\frac{a^2 + b^2 - c^2}{2ab}\right)$.
  - Rút gọn $2b$ ở vế phải: $a = \frac{a^2 + b^2 - c^2}{a}$.
  - Nhận cả hai vế với $a$: $a^2 = a^2 + b^2 - c^2 \Leftrightarrow b^2 - c^2 = 0 \Leftrightarrow b = c$.
  - Vậy tam giác $ABC$ cân tại $A$ (ĐPCM).

**Bài 8 (Vận dụng cao):** Cho tam giác $ABC$ thỏa mãn $\frac{\sin A}{\sin B} = \frac{2\cos B}{\cos A}$. Chứng minh tam giác $ABC$ cân hoặc vuông.
* **Lời giải:**
  - Đẳng thức tương đương: $\sin A \cos A = 2\sin B \cos B$.
  - Áp dụng định lí Sin: $\sin A = \frac{a}{2R}, \sin B = \frac{b}{2R}$ và Định lí Côsin cho $\cos A, \cos B$:
    $\left(\frac{a}{2R}\right) \cdot \frac{b^2 + c^2 - a^2}{2bc} = 2 \cdot \left(\frac{b}{2R}\right) \cdot \frac{a^2 + c^2 - b^2}{2ac}$.
  - Đơn giản $2R$ và $abc$ ở mẫu:
    $a^2(b^2 + c^2 - a^2) = 2b^2(a^2 + c^2 - b^2)$
    $\Leftrightarrow a^2b^2 + a^2c^2 - a^4 = 2a^2b^2 + 2b^2c^2 - 2b^4$
    $\Leftrightarrow (2b^4 - a^4) - a^2b^2 + c^2(a^2 - 2b^2) = 0$
    $\Leftrightarrow (2b^2 - a^2)(b^2 + a^2) + c^2(a^2 - 2b^2) = 0$
    $\Leftrightarrow (a^2 - 2b^2)(c^2 - a^2 - b^2) = 0$.
  - Suy ra hai trường hợp:
    - TH1: $a^2 - 2b^2 = 0 \Leftrightarrow a = b\sqrt{2}$.
    - TH2: $c^2 - a^2 - b^2 = 0 \Leftrightarrow c^2 = a^2 + b^2 \Rightarrow \triangle ABC$ vuông tại $C$.

**Bài 9 (Nâng cao):** Cho tam giác $ABC$ có các cạnh thỏa mãn $a^4 + b^4 + c^4 = 2c^2(a^2 + b^2)$. Tính số đo góc $C$.
* **Lời giải:**
  - Biến đổi giả thiết:
    $a^4 + b^4 + c^4 - 2a^2c^2 - 2b^2c^2 = 0$
    $\Leftrightarrow (a^2 + b^2 - c^2)^2 - 2a^2b^2 = 0$
    $\Leftrightarrow (a^2 + b^2 - c^2)^2 = 2a^2b^2$.
  - Lấy căn bậc hai hai vế: $a^2 + b^2 - c^2 = \pm \sqrt{2}ab$.
  - Theo Định lí Côsin: $\cos C = \frac{a^2 + b^2 - c^2}{2ab} = \frac{\pm \sqrt{2}ab}{2ab} = \pm \frac{\sqrt{2}}{2}$.
  - Do $0^\circ < C < 180^\circ$:
    - Nếu $\cos C = \frac{\sqrt{2}}{2} \Rightarrow \widehat{C} = 45^\circ$.
    - Nếu $\cos C = -\frac{\sqrt{2}}{2} \Rightarrow \widehat{C} = 135^\circ$.
  - Vậy số đo góc $C$ là $45^\circ$ hoặc $135^\circ$.

**Bài 10 (Nâng cao):** Chứng minh rằng trong mọi tam giác $ABC$, ta luôn có: $h_a = 2R \sin B \sin C$.
* **Lời giải:**
  - Ta có công thức diện tích tam giác: $S = \frac{1}{2} a h_a$ và $S = \frac{abc}{4R}$.
  - Suy ra: $\frac{1}{2} a h_a = \frac{abc}{4R} \Rightarrow h_a = \frac{bc}{2R}$.
  - Theo Định lí Sin: $b = 2R \sin B$ và $c = 2R \sin C$.
  - Thay $b$ và $c$ vào công thức $h_a$:
    $h_a = \frac{(2R \sin B)(2R \sin C)}{2R} = 2R \sin B \sin C$ (ĐPCM).
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH3;
}