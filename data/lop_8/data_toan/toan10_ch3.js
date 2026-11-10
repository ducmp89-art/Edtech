/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương III: Hệ thức lượng trong tam giác
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
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
| Góc ($\alpha$) | $0^\circ$ | $30^\circ$ | $45^\circ$ | $60^\circ$ | $90^\circ$ | $120^\circ$ | $135^\circ$ | $150^\circ$ | $180^\circ$ |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **$\sin \alpha$** | $0$ | $\frac{1}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ |
| **$\cos \alpha$** | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$ | $0$ | $-\frac{1}{2}$ | $-\frac{\sqrt{2}}{2}$ | $-\frac{\sqrt{3}}{2}$ | $-1$ |
| **$\tan \alpha$** | $0$ | $\frac{\sqrt{3}}{3}$ | $1$ | $\sqrt{3}$ | $||$ | $-\sqrt{3}$ | $-1$ | $-\frac{\sqrt{3}}{3}$ | $0$ |
| **$\cot \alpha$** | $||$ | $\sqrt{3}$ | $1$ | $\frac{\sqrt{3}}{3}$ | $0$ | $-\frac{\sqrt{3}}{3}$ | $-1$ | $-\sqrt{3}$ | $||$ |

---

### 5. 💎 Chuyên đề Master: Biến đổi biểu thức lượng giác (VDC)
📌 **Tính giá trị biểu thức khi biết $\tan \alpha$ hoặc $\cot \alpha$:**
- Cho $\tan \alpha = k$. Để tính giá trị biểu thức phân thức $P = \frac{a \sin \alpha + b \cos \alpha}{c \sin \alpha + d \cos \alpha}$, ta chia cả tử và mẫu cho $\cos \alpha$ (giả sử $\cos \alpha \neq 0$).
- Nếu biểu thức bậc hai (ví dụ $\sin^2 \alpha, \cos^2 \alpha, \sin \alpha \cos \alpha$), chia cả tử và mẫu cho $\cos^2 \alpha$.

📌 **Bài toán cho tổng/hiệu $\sin \alpha \pm \cos \alpha$:**
- Đặt $\sin \alpha \pm \cos \alpha = a$. Bình phương hai vế để tìm tích $\sin \alpha \cos \alpha$.
- Từ đó, tính các biểu thức phức tạp hơn bằng hằng đẳng thức (ví dụ: $\sin^3 \alpha + \cos^3 \alpha$, $\sin^4 \alpha + \cos^4 \alpha$).
        `,
        tips: `
- 💡 **Dấu của các giá trị lượng giác:**
  - Góc nhọn ($0^\circ < \alpha < 90^\circ$): Cả 4 GTLG đều DƯƠNG.
  - Góc tù ($90^\circ < \alpha < 180^\circ$): Chỉ có $\sin \alpha$ DƯƠNG. Còn lại $\cos \alpha, \tan \alpha, \cot \alpha$ đều ÂM.
- ⚠️ **Lỗi sai:** Bình phương $(\sin \alpha + \cos \alpha)^2$ học sinh hay nhầm thành $\sin^2 \alpha + \cos^2 \alpha = 1$. Đúng phải là $1 + 2\sin \alpha \cos \alpha$.
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Tính giá trị của biểu thức $A = \sin 30^\circ \cos 150^\circ + \cos 60^\circ \sin 120^\circ$.
* **Lời giải:**
  - $\sin 30^\circ = \frac{1}{2}$.
  - $\cos 150^\circ = -\cos 30^\circ = -\frac{\sqrt{3}}{2}$.
  - $\cos 60^\circ = \frac{1}{2}$.
  - $\sin 120^\circ = \sin 60^\circ = \frac{\sqrt{3}}{2}$.
  - $A = \left(\frac{1}{2}\right)\left(-\frac{\sqrt{3}}{2}\right) + \left(\frac{1}{2}\right)\left(\frac{\sqrt{3}}{2}\right) = 0$.

**Bài 2 (Cơ bản):** Cho góc $\alpha$ tù thỏa mãn $\cos \alpha = -\frac{3}{5}$. Tính $\sin \alpha$.
* **Lời giải:**
  - $\sin^2 \alpha + \cos^2 \alpha = 1 \Rightarrow \sin^2 \alpha = 1 - \left(-\frac{3}{5}\right)^2 = 1 - \frac{9}{25} = \frac{16}{25}$.
  - Vì $\alpha$ là góc tù ($90^\circ < \alpha < 180^\circ$) nên $\sin \alpha > 0$.
  - Vậy $\sin \alpha = \sqrt{\frac{16}{25}} = \frac{4}{5}$.

**Bài 3 (Vận dụng):** Rút gọn biểu thức: $B = \cos(180^\circ - x) + \sin(90^\circ - x) - \tan(180^\circ - x) \cdot \cot x$.
* **Lời giải:**
  - $\cos(180^\circ - x) = -\cos x$ (Cốt bù).
  - $\sin(90^\circ - x) = \cos x$ (Phụ chéo).
  - $\tan(180^\circ - x) = -\tan x$.
  - Thay vào: $B = -\cos x + \cos x - (-\tan x) \cdot \cot x = \tan x \cdot \cot x$.
  - Mà $\tan x \cdot \cot x = 1$. Vậy $B = 1$.

**Bài 4 (Vận dụng):** Chứng minh đẳng thức: $\frac{1 + \sin^2 \alpha}{1 - \sin^2 \alpha} = 1 + 2\tan^2 \alpha$ (với $\alpha \neq 90^\circ$).
* **Lời giải:**
  - VT = $\frac{1 + \sin^2 \alpha}{\cos^2 \alpha} = \frac{1}{\cos^2 \alpha} + \frac{\sin^2 \alpha}{\cos^2 \alpha}$.
  - Thay $\frac{1}{\cos^2 \alpha} = 1 + \tan^2 \alpha$ và $\frac{\sin^2 \alpha}{\cos^2 \alpha} = \tan^2 \alpha$.
  - VT $= 1 + \tan^2 \alpha + \tan^2 \alpha = 1 + 2\tan^2 \alpha = $ VP (ĐPCM).

**Bài 5 (Vận dụng):** Cho $\tan \alpha = 2$. Tính giá trị biểu thức $P = \frac{2\sin \alpha - 3\cos \alpha}{4\sin \alpha + \cos \alpha}$.
* **Lời giải:**
  - Chia cả tử và mẫu cho $\cos \alpha$ (vì $\tan \alpha = 2 \Rightarrow \cos \alpha \neq 0$):
  - $P = \frac{2\frac{\sin \alpha}{\cos \alpha} - 3}{4\frac{\sin \alpha}{\cos \alpha} + 1} = \frac{2\tan \alpha - 3}{4\tan \alpha + 1}$.
  - Thay $\tan \alpha = 2 \Rightarrow P = \frac{2(2) - 3}{4(2) + 1} = \frac{1}{9}$.

**Bài 6 (Vận dụng cao):** Cho $\tan x = 3$. Tính giá trị của biểu thức $Q = \frac{\sin^2 x - 2\sin x \cos x}{2\cos^2 x + \sin^2 x}$.
* **Lời giải:**
  - Đây là biểu thức thuần nhất bậc 2. Chia cả tử và mẫu cho $\cos^2 x$:
  - $Q = \frac{\frac{\sin^2 x}{\cos^2 x} - 2\frac{\sin x \cos x}{\cos^2 x}}{2\frac{\cos^2 x}{\cos^2 x} + \frac{\sin^2 x}{\cos^2 x}} = \frac{\tan^2 x - 2\tan x}{2 + \tan^2 x}$.
  - Thay $\tan x = 3 \Rightarrow Q = \frac{3^2 - 2(3)}{2 + 3^2} = \frac{9 - 6}{2 + 9} = \frac{3}{11}$.

**Bài 7 (Vận dụng cao):** Biết $\sin \alpha + \cos \alpha = \frac{\sqrt{2}}{2}$. Tính giá trị của $T = \sin \alpha \cos \alpha$.
* **Lời giải:**
  - Bình phương 2 vế giả thiết: $(\sin \alpha + \cos \alpha)^2 = \left(\frac{\sqrt{2}}{2}\right)^2$.
  - $\Leftrightarrow \sin^2 \alpha + 2\sin \alpha \cos \alpha + \cos^2 \alpha = \frac{2}{4} = \frac{1}{2}$.
  - Mà $\sin^2 \alpha + \cos^2 \alpha = 1 \Rightarrow 1 + 2T = \frac{1}{2}$.
  - $2T = -\frac{1}{2} \Rightarrow T = -\frac{1}{4}$.

**Bài 8 (Vận dụng cao):** Với giả thiết bài 7 ($\sin \alpha + \cos \alpha = \frac{\sqrt{2}}{2}$), hãy tính $H = \sin^3 \alpha + \cos^3 \alpha$.
* **Lời giải:**
  - Dùng hằng đẳng thức $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$.
  - $H = (\sin \alpha + \cos \alpha)(\sin^2 \alpha - \sin \alpha \cos \alpha + \cos^2 \alpha)$.
  - Từ bài 7, ta có $\sin \alpha \cos \alpha = -\frac{1}{4}$. Và $\sin^2 \alpha + \cos^2 \alpha = 1$.
  - Thay số: $H = \left(\frac{\sqrt{2}}{2}\right) \cdot \left(1 - \left(-\frac{1}{4}\right)\right) = \frac{\sqrt{2}}{2} \cdot \frac{5}{4} = \frac{5\sqrt{2}}{8}$.

**Bài 9 (Vận dụng cao):** Cho $\cot x = -2$. Tính giá trị của biểu thức $M = \cos^2 x - 3\sin x \cos x + 1$.
* **Lời giải:**
  - Biến đổi $M$ về dạng thuần nhất bậc 2 bằng cách thay $1 = \sin^2 x + \cos^2 x$:
    $M = \cos^2 x - 3\sin x \cos x + \sin^2 x + \cos^2 x = 2\cos^2 x - 3\sin x \cos x + \sin^2 x$.
  - Chia cả biểu thức cho $\sin^2 x$ (để tạo ra $\cot x$):
    Tuy nhiên đây không phải phân thức, ta nên biến đổi cách khác.
  - Ta có $1 + \cot^2 x = \frac{1}{\sin^2 x} \Rightarrow 1 + (-2)^2 = \frac{1}{\sin^2 x} \Rightarrow \sin^2 x = \frac{1}{5}$.
  - Chia $M$ cho 1 (tức là chia cho $\sin^2 x + \cos^2 x$):
    $M = \frac{2\cos^2 x - 3\sin x \cos x + \sin^2 x}{\sin^2 x + \cos^2 x}$.
  - Chia tử và mẫu cho $\sin^2 x$:
    $M = \frac{2\cot^2 x - 3\cot x + 1}{1 + \cot^2 x}$.
  - Thay $\cot x = -2$: $M = \frac{2(-2)^2 - 3(-2) + 1}{1 + (-2)^2} = \frac{8 + 6 + 1}{1 + 4} = \frac{15}{5} = 3$.

**Bài 10 (Nâng cao):** Tính tổng các giá trị lượng giác: $S = \cos^2 10^\circ + \cos^2 20^\circ + \cos^2 30^\circ + ... + \cos^2 80^\circ$.
* **Lời giải:**
  - Dãy có 8 số hạng, các góc từ $10^\circ$ đến $80^\circ$.
  - Nhóm các cặp góc phụ nhau (tổng bằng $90^\circ$): $(10^\circ, 80^\circ)$, $(20^\circ, 70^\circ)$, $(30^\circ, 60^\circ)$, $(40^\circ, 50^\circ)$.
  - Áp dụng góc phụ: $\cos 80^\circ = \sin 10^\circ \Rightarrow \cos^2 80^\circ = \sin^2 10^\circ$.
  - Nhóm cặp đầu tiên: $\cos^2 10^\circ + \cos^2 80^\circ = \cos^2 10^\circ + \sin^2 10^\circ = 1$.
  - Tương tự, mỗi cặp có tổng bằng 1. Có tổng cộng 4 cặp.
  - Vậy $S = 4 \times 1 = 4$.
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

### 5. 💎 Chuyên đề Master: Bài toán Giải tam giác và Ứng dụng thực tế (VDC)
📌 **Giải tam giác (Tìm các yếu tố còn lại):**
- **Biết 3 cạnh (SSS):** Dùng hệ quả Định lí Côsin để tính 1 góc $\rightarrow$ Dùng ĐL Sin tính góc thứ 2 $\rightarrow$ Góc còn lại = $180^\circ - 2$ góc kia.
- **Biết 2 cạnh và góc xen giữa (SAS):** Dùng Định lí Côsin tính cạnh thứ 3 $\rightarrow$ Dùng ĐL Sin tính góc.
- **Biết 1 cạnh và 2 góc (ASA):** Tính góc thứ 3 (tổng 3 góc) $\rightarrow$ Dùng Định lí Sin tính 2 cạnh còn lại.

📌 **Chứng minh hệ thức trong tam giác:**
- Phương pháp: Đồng nhất các đại lượng. Thường dùng Định lí Sin ($a = 2R\sin A$) hoặc Định lí Côsin để đưa hệ thức cần chứng minh về dạng toàn cạnh ($a, b, c$) hoặc toàn góc ($A, B, C$).
        `,
        tips: `
- 💡 **Nhận biết dạng tam giác qua Định lí Côsin:**
  - Nếu $b^2 + c^2 - a^2 > 0 \Leftrightarrow \cos A > 0 \Rightarrow \widehat{A}$ là góc nhọn.
  - Nếu $b^2 + c^2 - a^2 = 0 \Leftrightarrow \cos A = 0 \Rightarrow \widehat{A} = 90^\circ$ (tam giác vuông tại $A$).
  - Nếu $b^2 + c^2 - a^2 < 0 \Leftrightarrow \cos A < 0 \Rightarrow \widehat{A}$ là góc tù.
- 💡 **Mẹo tính nhanh đường cao và bán kính:**
  - $h_a = \frac{2S}{a}$
  - $r = \frac{S}{p}$
  - $R = \frac{abc}{4S}$
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Tam giác $ABC$ có cạnh $b = 6, c = 8$ và $\widehat{A} = 60^\circ$. Tính độ dài cạnh $a$.
* **Lời giải:**
  - Áp dụng định lí Côsin: $a^2 = b^2 + c^2 - 2bc \cos A$.
  - $a^2 = 6^2 + 8^2 - 2(6)(8)\cos 60^\circ = 36 + 64 - 96 \cdot \frac{1}{2} = 100 - 48 = 52$.
  - Suy ra $a = \sqrt{52} = 2\sqrt{13}$.

**Bài 2 (Cơ bản):** Tam giác $ABC$ có $\widehat{A} = 45^\circ, \widehat{B} = 60^\circ$ và cạnh $b = 4\sqrt{6}$. Tính độ dài cạnh $a$ và bán kính đường tròn ngoại tiếp $R$.
* **Lời giải:**
  - Áp dụng định lí Sin: $\frac{a}{\sin A} = \frac{b}{\sin B} = 2R$.
  - Tính cạnh $a$: $a = \frac{b \cdot \sin A}{\sin B} = \frac{4\sqrt{6} \cdot \sin 45^\circ}{\sin 60^\circ} = \frac{4\sqrt{6} \cdot \frac{\sqrt{2}}{2}}{\frac{\sqrt{3}}{2}} = \frac{4\sqrt{12}}{\sqrt{3}} = 8$.
  - Tính $R$: $2R = \frac{b}{\sin B} = \frac{4\sqrt{6}}{\frac{\sqrt{3}}{2}} = 8\sqrt{2} \Rightarrow R = 4\sqrt{2}$.

**Bài 3 (Vận dụng):** Cho tam giác $ABC$ có $a = 7, b = 8, c = 9$. Tính diện tích $S$ và đường cao $h_a$ của tam giác.
* **Lời giải:**
  - Nửa chu vi $p = \frac{7 + 8 + 9}{2} = 12$.
  - Sử dụng công thức Heron tính diện tích $S$:
    $S = \sqrt{p(p-a)(p-b)(p-c)} = \sqrt{12(12-7)(12-8)(12-9)} = \sqrt{12 \cdot 5 \cdot 4 \cdot 3} = \sqrt{720} = 12\sqrt{5}$.
  - Tính đường cao $h_a$: $S = \frac{1}{2}ah_a \Rightarrow h_a = \frac{2S}{a} = \frac{24\sqrt{5}}{7}$.

**Bài 4 (Vận dụng):** Tam giác $ABC$ có $a = 5, b = 6, c = 7$. Tính bán kính đường tròn nội tiếp $r$ và ngoại tiếp $R$.
* **Lời giải:**
  - Nửa chu vi $p = \frac{5 + 6 + 7}{2} = 9$.
  - Diện tích $S = \sqrt{9(9-5)(9-6)(9-7)} = \sqrt{9 \cdot 4 \cdot 3 \cdot 2} = 6\sqrt{6}$.
  - Bán kính đường nội tiếp: $r = \frac{S}{p} = \frac{6\sqrt{6}}{9} = \frac{2\sqrt{6}}{3}$.
  - Bán kính đường ngoại tiếp: $R = \frac{abc}{4S} = \frac{5 \cdot 6 \cdot 7}{4 \cdot 6\sqrt{6}} = \frac{35}{4\sqrt{6}} = \frac{35\sqrt{6}}{24}$.

**Bài 5 (Vận dụng):** Cho tam giác $ABC$ có $a = 10, b = 8, c = 6$. Tính độ dài đường trung tuyến $m_a$ kẻ từ đỉnh $A$.
* **Lời giải:**
  - Nhận xét: $a^2 = 100$, $b^2 + c^2 = 8^2 + 6^2 = 100 \Rightarrow \triangle ABC$ vuông tại $A$, cạnh huyền $a = 10$.
  - Áp dụng công thức đường trung tuyến (hoặc tính chất tam giác vuông):
    $m_a^2 = \frac{2(b^2 + c^2) - a^2}{4} = \frac{2(64 + 36) - 100}{4} = \frac{100}{4} = 25 \Rightarrow m_a = 5$.
  - *(Cách khác: Trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền $\Rightarrow m_a = \frac{a}{2} = 5$).*

**Bài 6 (Vận dụng):** Từ hai vị trí $A$ và $B$ cách nhau $500\text{m}$ trên mặt đất, người ta quan sát đỉnh C của một ngọn núi. Biết $\widehat{CAB} = 40^\circ$ và $\widehat{CBA} = 70^\circ$. Tính chiều cao $h$ của ngọn núi (làm tròn đến hàng đơn vị).
* **Lời giải:**
  - Xét tam giác $ABC$: $\widehat{ACB} = 180^\circ - (40^\circ + 70^\circ) = 70^\circ$.
  - Vì $\widehat{CBA} = \widehat{ACB} = 70^\circ$ nên tam giác $ABC$ cân tại $A \Rightarrow AC = AB = 500\text{m}$.
  - Gọi $CH$ là chiều cao ngọn núi ($CH \perp AB$ tại $H$).
  - Trong tam giác vuông $ACH$: $h = CH = AC \cdot \sin \widehat{CAB} = 500 \cdot \sin 40^\circ \approx 500 \cdot 0.6428 \approx 321\text{m}$.

**Bài 7 (Vận dụng cao):** Cho tam giác $ABC$ thỏa mãn hệ thức $a = 2b \cos C$. Chứng minh rằng tam giác $ABC$ cân tại $A$.
* **Lời giải:**
  - Áp dụng Định lí Côsin: $\cos C = \frac{a^2 + b^2 - c^2}{2ab}$.
  - Thay vào giả thiết: $a = 2b \cdot \left(\frac{a^2 + b^2 - c^2}{2ab}\right)$.
  - Rút gọn $2b$ ở vế phải: $a = \frac{a^2 + b^2 - c^2}{a}$.
  - Nhân cả hai vế với $a$: $a^2 = a^2 + b^2 - c^2 \Leftrightarrow b^2 - c^2 = 0 \Leftrightarrow b = c$.
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
