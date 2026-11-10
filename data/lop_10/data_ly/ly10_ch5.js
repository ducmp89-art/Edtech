/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU VẬT LÝ 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Chương V: Động lượng (Bám sát chương trình chuẩn hiện hành & Nâng cao)
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP TỰ LUẬN + TRẮC NGHIỆM)
   ========================================================================== */

const DATA_LY10_CH5 = {
    "PHY10-CH5-01": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương V: Động lượng",
        title: "Bài 28: Động lượng. Xung lượng của lực",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương V", "Bài 28"],
        theory: String.raw`
### 1. Xung lượng của lực
- **Khái niệm:** Khi một lực $\vec{F}$ tác dụng lên một vật trong khoảng thời gian $\Delta t$ thì tích $\vec{F} \cdot \Delta t$ được gọi là xung lượng của lực trong khoảng thời gian đó.
- **Đơn vị:** $N \cdot s$.
- **Ý nghĩa:** Xung lượng của lực đặc trưng cho tác dụng của lực làm thay đổi trạng thái chuyển động của vật trong một khoảng thời gian.

### 2. Động lượng
- **Khái niệm:** Động lượng của một vật khối lượng $m$ đang chuyển động với vận tốc $\vec{v}$ là đại lượng vectơ được xác định bởi công thức:
  $$\vec{p} = m\vec{v}$$
- **Đặc điểm:**
  + Là đại lượng vectơ cùng hướng với vận tốc $\vec{v}$.
  + Đơn vị: $kg \cdot m/s$.
- **Động lượng của hệ vật:** Bằng tổng vectơ động lượng của các vật trong hệ:
  $$\vec{p}_{hệ} = \vec{p}_1 + \vec{p}_2 + ... + \vec{p}_n$$

### 3. Mối liên hệ giữa Động lượng và Xung lượng (Dạng tổng quát của ĐL II Newton)
- Độ biến thiên động lượng của một vật trong một khoảng thời gian bằng xung lượng của tổng các lực tác dụng lên vật trong khoảng thời gian đó:
  $$\Delta \vec{p} = \vec{p}_2 - \vec{p}_1 = \vec{F} \cdot \Delta t$$
- Phát biểu khác của Định luật II Newton: Lực tác dụng lên vật bằng tốc độ thay đổi động lượng của vật đó: $\vec{F} = \frac{\Delta \vec{p}}{\Delta t}$.

---

### 4. 💎 Chuyên đề Master: Kiến thức nâng cao (VDC)
📌 **Mối liên hệ giữa Động năng và Động lượng:**
- Ta có $W_d = \frac{1}{2}mv^2$ và $p = mv$.
- Suy ra: $$W_d = \frac{p^2}{2m} \quad \text{hay} \quad p = \sqrt{2m W_d}$$

📌 **Bài toán va chạm vào vách cứng (Bóng đập tường):**
- Khi quả bóng khối lượng $m$ bay với vận tốc $\vec{v}_1$ đập vuông góc vào tường và bật ngược lại với vận tốc $\vec{v}_2$. 
  Chọn chiều dương là chiều bật ra. 
  $\Delta p = mv_2 - (-mv_1) = m(v_1 + v_2)$.
- Nếu bóng đập vào tường dưới góc $\alpha$ (hợp với pháp tuyến của tường) và bật ra với cùng góc $\alpha$ và cùng tốc độ $v$:
  Độ lớn biến thiên động lượng: $|\Delta \vec{p}| = 2mv \cos \alpha$.
        `,
        tips: String.raw`
- 💡 **Quy tắc làm bài:** Động lượng là đại lượng VECTƠ. Khi tính tổng hay hiệu động lượng, BẮT BUỘC phải vẽ hình và chiếu lên trục tọa độ, không được cộng trừ trực tiếp các con số độ lớn.
- ⚠️ **Lỗi sai kinh điển:** Trong bài toán bóng đập vào tường rồi nảy ra, học sinh thường lấy $\Delta p = p_{sau} - p_{truoc} = mv - mv = 0$. Sai! Vì vận tốc đổi chiều nên nếu chọn chiều dương là chiều bật ra thì $v_{truoc} = -v \Rightarrow \Delta p = mv - (-mv) = 2mv$.
        `,
        practice: String.raw`
### Dạng 1: Tính động lượng của vật và hệ vật
**Bài 1 (Cơ bản):** Tính động lượng của một ô tô khối lượng $1.5 \text{ tấn}$ đang chuyển động với tốc độ $72 \text{ km/h}$.
[GIAI]
**Lời giải chi tiết:**
- Đổi đơn vị: $m = 1.5 \text{ tấn} = 1500 \text{ kg}$; $v = 72 \text{ km/h} = 20 \text{ m/s}$.
- Độ lớn động lượng của ô tô:
  $$p = m \cdot v = 1500 \cdot 20 = 30000 \text{ (kg}\cdot\text{m/s)}$$
[/GIAI]

**Bài 2 (Vận dụng):** Hệ gồm hai vật $m_1 = 1 \text{ kg}, m_2 = 2 \text{ kg}$ bay với vận tốc lần lượt là $v_1 = 3 \text{ m/s}$ và $v_2 = 2 \text{ m/s}$. Tính độ lớn động lượng của hệ trong trường hợp hai vectơ vận tốc vuông góc với nhau.
[GIAI]
**Lời giải chi tiết:**
- Động lượng của từng vật: 
  $p_1 = m_1 v_1 = 1 \cdot 3 = 3 \text{ (kg}\cdot\text{m/s)}$.
  $p_2 = m_2 v_2 = 2 \cdot 2 = 4 \text{ (kg}\cdot\text{m/s)}$.
- Vì $\vec{v}_1 \perp \vec{v}_2 \Rightarrow \vec{p}_1 \perp \vec{p}_2$.
- Áp dụng định lý Pytago cho vectơ:
  $$p_{hệ} = \sqrt{p_1^2 + p_2^2} = \sqrt{3^2 + 4^2} = 5 \text{ (kg}\cdot\text{m/s)}$$
[/GIAI]

**Bài 3 (Vận dụng):** Một vật khối lượng $m = 500 \text{ g}$ chuyển động thẳng đều. Biết động năng của vật là $10 \text{ J}$. Tính động lượng của vật.
[GIAI]
**Lời giải chi tiết:**
- Đổi đơn vị: $m = 0.5 \text{ kg}$.
- Áp dụng công thức liên hệ giữa động năng và động lượng:
  $$p = \sqrt{2m W_d} = \sqrt{2 \cdot 0.5 \cdot 10} = \sqrt{10} \approx 3.16 \text{ (kg}\cdot\text{m/s)}$$
- (Hoặc tính $v$: $W_d = \frac{1}{2}mv^2 \Rightarrow 10 = 0.25 v^2 \Rightarrow v = \sqrt{40}$. $p = mv = 0.5\sqrt{40} = \sqrt{10}$).
[/GIAI]

### Dạng 2: Xung lượng và Độ biến thiên động lượng
**Bài 4 (Cơ bản):** Một vật đang nằm yên trên mặt bàn ngang không ma sát. Tác dụng lên vật một lực đẩy $F = 20 \text{ N}$ trong thời gian $2 \text{ s}$. Tính độ biến thiên động lượng của vật và tốc độ của vật sau $2 \text{ s}$ biết khối lượng vật là $4 \text{ kg}$.
[GIAI]
**Lời giải chi tiết:**
- Độ biến thiên động lượng bằng xung lượng của lực:
  $$\Delta p = F \cdot \Delta t = 20 \cdot 2 = 40 \text{ (kg}\cdot\text{m/s)}$$
- Ta có $\Delta p = p_2 - p_1$. Vì ban đầu vật nằm yên nên $p_1 = 0 \Rightarrow p_2 = \Delta p = 40$.
- Tốc độ của vật lúc sau:
  $$v_2 = \frac{p_2}{m} = \frac{40}{4} = 10 \text{ (m/s)}$$
[/GIAI]

**Bài 5 (Vận dụng):** Một quả bóng khối lượng $200 \text{ g}$ bay ngang với tốc độ $15 \text{ m/s}$ đập thẳng góc vào một bức tường rồi bật ngược trở lại với tốc độ $10 \text{ m/s}$. Thời gian va chạm là $0.05 \text{ s}$. Tính lực trung bình do tường tác dụng lên quả bóng.
[GIAI]
**Lời giải chi tiết:**
- Đổi $m = 0.2 \text{ kg}$.
- Chọn chiều dương là chiều bóng bật ra khỏi tường.
  $\Rightarrow$ Vận tốc lúc đầu $v_1 = -15 \text{ m/s}$; Vận tốc lúc sau $v_2 = 10 \text{ m/s}$.
- Độ biến thiên động lượng của bóng:
  $$\Delta p = mv_2 - mv_1 = 0.2 \cdot 10 - 0.2 \cdot (-15) = 2 + 3 = 5 \text{ (kg}\cdot\text{m/s)}$$
- Lực trung bình tường tác dụng lên bóng:
  $$F = \frac{\Delta p}{\Delta t} = \frac{5}{0.05} = 100 \text{ (N)}$$
[/GIAI]

**Bài 6 (Vận dụng cao):** Một quả bóng $m = 0.5 \text{ kg}$ đập vào mặt sàn nằm ngang dưới góc $\alpha = 60^\circ$ (góc hợp bởi pháp tuyến của sàn và hướng quỹ đạo) với tốc độ $10 \text{ m/s}$, rồi nảy lên với cùng tốc độ và cùng góc $\alpha$. Tính độ biến thiên động lượng của quả bóng.
[GIAI]
**Lời giải chi tiết:**
- Phân tích vận tốc thành 2 trục: Trục $Ox$ song song với mặt sàn, Trục $Oy$ vuông góc với mặt sàn (pháp tuyến, hướng lên).
- Trước va chạm: $v_{1x} = v \sin 60^\circ$; $v_{1y} = -v \cos 60^\circ$ (hướng xuống).
- Sau va chạm: $v_{2x} = v \sin 60^\circ$; $v_{2y} = v \cos 60^\circ$ (hướng lên).
- Độ biến thiên vận tốc theo trục $Ox$: $\Delta v_x = v_{2x} - v_{1x} = 0$. (Động lượng theo phương ngang bảo toàn).
- Độ biến thiên vận tốc theo trục $Oy$: $\Delta v_y = v_{2y} - v_{1y} = v \cos 60^\circ - (-v \cos 60^\circ) = 2v \cos 60^\circ$.
- Độ biến thiên động lượng:
  $$\Delta p = m \Delta v_y = 0.5 \cdot (2 \cdot 10 \cdot 0.5) = 5 \text{ (kg}\cdot\text{m/s)}$$
  (Vectơ $\Delta \vec{p}$ có phương thẳng đứng, hướng lên).
[/GIAI]

**Bài 7 (Vận dụng cao):** Một khẩu súng máy bắn ra $600$ viên đạn mỗi phút. Mỗi viên đạn có khối lượng $10 \text{ g}$ và vận tốc nòng là $800 \text{ m/s}$. Tính lực giật trung bình của súng tác dụng lên vai người bắn.
[GIAI]
**Lời giải chi tiết:**
- Số đạn bắn ra trong $1 \text{ giây}$ là: $n = \frac{600}{60} = 10 \text{ (viên/s)}$.
- Xét trong thời gian $\Delta t = 1 \text{ s}$: Tổng khối lượng đạn bắn ra là $m_{tổng} = n \cdot m_0 = 10 \cdot 0.01 = 0.1 \text{ kg}$.
- Độ biến thiên động lượng của lượng đạn này:
  $$\Delta p = m_{tổng} \cdot v - 0 = 0.1 \cdot 800 = 80 \text{ (kg}\cdot\text{m/s)}$$
- Lực đẩy trung bình tác dụng lên đạn (cũng chính là độ lớn lực giật trung bình lên vai theo ĐL III Newton):
  $$F = \frac{\Delta p}{\Delta t} = \frac{80}{1} = 80 \text{ (N)}$$
[/GIAI]

**Bài 8 (Nâng cao):** Một xe goòng khối lượng $M = 1000 \text{ kg}$ đang chạy với tốc độ $v = 5 \text{ m/s}$ trên đường ray ngang. Người ta rót cát từ trên cao xuống xe với lưu lượng $\mu = 20 \text{ kg/s}$. Hỏi phải cần một lực kéo bằng bao nhiêu để duy trì vận tốc của xe không đổi? (Bỏ qua ma sát của bánh xe với đường ray).
[GIAI]
**Lời giải chi tiết:**
- Khi cát rơi xuống xe, cát ban đầu không có vận tốc theo phương ngang, sau đó nhận vận tốc $v$ cùng với xe.
- Động lượng của lượng cát truyền vào xe trong khoảng thời gian $\Delta t$ là: $\Delta p = (\mu \cdot \Delta t) \cdot v$.
- Để duy trì vận tốc xe không đổi, lực kéo phải bù lại sự thay đổi động lượng này. Theo định luật II Newton:
  $$F = \frac{\Delta p}{\Delta t} = \frac{\mu \Delta t \cdot v}{\Delta t} = \mu \cdot v$$
- Thay số: 
  $$F = 20 \cdot 5 = 100 \text{ (N)}$$
[/GIAI]

**Bài 9 (Nâng cao):** Một vòi nước có diện tích tiết diện $S = 2 \text{ cm}^2$ phun nước thẳng góc vào một bức tường với tốc độ $15 \text{ m/s}$. Giả sử nước sau khi đập vào tường thì chảy dọc theo tường (vận tốc ngang sau va chạm bằng 0). Khối lượng riêng của nước là $\rho = 1000 \text{ kg/m}^3$. Tính lực do vòi nước tác dụng lên bức tường.
[GIAI]
**Lời giải chi tiết:**
- Đổi: $S = 2 \cdot 10^{-4} \text{ m}^2$.
- Trong thời gian $\Delta t$, thể tích nước đập vào tường là $V = S \cdot (v \cdot \Delta t)$.
- Khối lượng nước đập vào tường trong $\Delta t$: $m = \rho V = \rho S v \Delta t$.
- Độ biến thiên động lượng của lượng nước này theo phương ngang:
  $$\Delta p = p_{sau} - p_{truoc} = 0 - mv = - (\rho S v \Delta t) v = - \rho S v^2 \Delta t$$
- Lực cản của tường tác dụng lên nước: $F' = \frac{\Delta p}{\Delta t} = - \rho S v^2$.
- Lực do nước tác dụng lên tường (lực trực đối):
  $$F = |F'| = \rho S v^2 = 1000 \cdot (2 \cdot 10^{-4}) \cdot 15^2 = 0.2 \cdot 225 = 45 \text{ (N)}$$
[/GIAI]

**Bài 10 (Nâng cao):** Đồ thị sự phụ thuộc của lực $F$ tác dụng lên một vật $m = 2 \text{ kg}$ theo thời gian $t$ là một đường thẳng đi qua gốc tọa độ, đạt giá trị $F = 10 \text{ N}$ tại $t = 4 \text{ s}$. Vật xuất phát từ trạng thái nghỉ. Tính tốc độ của vật ở thời điểm $t = 4 \text{ s}$.
[GIAI]
**Lời giải chi tiết:**
- Xung lượng của lực $\vec{F}$ trong khoảng thời gian $\Delta t$ chính là diện tích hình học dưới đồ thị $F-t$.
- Đồ thị là một tam giác vuông với đáy là $t = 4 \text{ s}$ và chiều cao $F = 10 \text{ N}$.
- Diện tích: $S = \frac{1}{2} \cdot \text{đáy} \cdot \text{chiều cao} = \frac{1}{2} \cdot 4 \cdot 10 = 20 \text{ (N}\cdot\text{s)}$.
- Suy ra xung lượng $F \cdot \Delta t = 20 \text{ N}\cdot\text{s}$.
- Độ biến thiên động lượng: $\Delta p = mv_2 - mv_1 = 2 \cdot v_2 - 0 = 2v_2$.
- Ta có $2v_2 = 20 \Rightarrow v_2 = 10 \text{ (m/s)}$.
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 11: Động lượng là đại lượng:
[A] vô hướng, luôn dương.
[B] vô hướng, có thể dương hoặc âm.
[*C] vectơ, cùng hướng với vận tốc.
[D] vectơ, cùng hướng với gia tốc.
[/QUIZ]

[QUIZ]
Câu 12: Đơn vị của xung lượng của lực là:
[A] $N/s$
[*B] $N\cdot s$
[C] $kg\cdot m/s^2$
[D] $J/s$
[/QUIZ]
        `
    },

    "PHY10-CH5-02": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương V: Động lượng",
        title: "Bài 29: Định luật bảo toàn động lượng. Các loại va chạm",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương V", "Bài 29"],
        theory: String.raw`
### 1. Hệ kín (Hệ cô lập)
- Một hệ nhiều vật được gọi là hệ kín nếu không có ngoại lực tác dụng lên hệ hoặc nếu có thì các ngoại lực ấy triệt tiêu lẫn nhau.
- Các nội lực (lực tương tác giữa các vật trong hệ) luôn xuất hiện từng cặp trực đối nên tự triệt tiêu.

### 2. Định luật bảo toàn động lượng
- **Nội dung:** Tổng động lượng của một hệ kín là một đại lượng không đổi (bảo toàn).
  $$\vec{p}_1 + \vec{p}_2 = \vec{p}_1' + \vec{p}_2'$$
- *Trường hợp mở rộng:* Nếu ngoại lực có phương vuông góc với phương chuyển động (chiếu lên phương chuyển động bằng 0) hoặc ngoại lực rất nhỏ so với nội lực (trong các vụ va chạm, nổ), động lượng vẫn được coi là bảo toàn.

### 3. Phân loại Va chạm
📌 **Va chạm mềm (Va chạm không đàn hồi):**
- Sau va chạm, hai vật dính vào nhau và chuyển động với cùng một vận tốc $\vec{V}$.
- Phương trình bảo toàn động lượng:
  $$m_1\vec{v}_1 + m_2\vec{v}_2 = (m_1 + m_2)\vec{V} \Rightarrow \vec{V} = \frac{m_1\vec{v}_1 + m_2\vec{v}_2}{m_1 + m_2}$$
- Trong va chạm mềm, **Động năng KHÔNG bảo toàn** (một phần cơ năng chuyển hóa thành nhiệt).

📌 **Va chạm đàn hồi xuyên tâm (1D):**
- Hai vật va chạm bật ra, hình dạng được khôi phục hoàn toàn.
- Cả **Động lượng** và **Động năng** đều được bảo toàn.
- Công thức vận tốc sau va chạm đàn hồi (trên cùng trục tọa độ):
  $$v_1' = \frac{(m_1 - m_2)v_1 + 2m_2v_2}{m_1 + m_2}$$
  $$v_2' = \frac{(m_2 - m_1)v_2 + 2m_1v_1}{m_1 + m_2}$$

---

### 4. 💎 Chuyên đề Master: Chuyển động bằng phản lực và Đạn nổ (VDC)
📌 **Chuyển động bằng phản lực:**
- Vật ban đầu đứng yên (động lượng = 0). Phụt ra một lượng khí/khối lượng $m$ với vận tốc $\vec{v}$. Phần còn lại $M$ lùi về phía sau với vận tốc $\vec{V}$.
- $$m\vec{v} + M\vec{V} = 0 \Rightarrow \vec{V} = -\frac{m}{M}\vec{v}$$

📌 **Đạn nổ thành 2 mảnh:**
- Vật $M$ đang bay với $\vec{v}_0$ nổ thành 2 mảnh $m_1, m_2$ bay theo các hướng $\vec{v}_1, \vec{v}_2$.
- Dùng quy tắc hình bình hành: $\vec{p}_0 = \vec{p}_1 + \vec{p}_2$. 
- Áp dụng hệ thức lượng trong tam giác để giải các bài toán góc bất kỳ.
        `,
        tips: String.raw`
- 💡 **Phương pháp giải bài Va chạm/Nổ:**
  - **Bước 1:** Khẳng định hệ khảo sát là hệ kín (hoặc hệ kín theo một phương).
  - **Bước 2:** Viết biểu thức ĐLBTĐL dưới dạng VECTƠ: $\vec{p}_{truoc} = \vec{p}_{sau}$.
  - **Bước 3:** Chuyển phương trình vectơ thành vô hướng bằng phương pháp CHIẾU lên trục (với bài toán 1D) hoặc QUY TẮC HÌNH BÌNH HÀNH (với bài toán 2D/góc).
- ⚠️ **Lỗi sai:** Quên xét dấu vận tốc trong bài toán va chạm ngược chiều. Nếu $v_1 = 5 \text{ m/s}$ và $v_2 = 3 \text{ m/s}$ bay ngược chiều, chiếu lên phải có một cái âm (ví dụ $v_2 = -3$).
        `,
        practice: String.raw`
### Dạng 1: Va chạm mềm
**Bài 1 (Cơ bản):** Một viên bi khối lượng $m_1 = 200 \text{ g}$ đang chuyển động với vận tốc $5 \text{ m/s}$ đến va chạm mềm vào viên bi thứ hai $m_2 = 300 \text{ g}$ đang đứng yên. Tính vận tốc của hai viên bi sau va chạm.
[GIAI]
**Lời giải chi tiết:**
- Chọn chiều dương là chiều chuyển động của viên bi 1.
- Hệ hai viên bi là hệ kín trong thời gian va chạm.
- Theo định luật bảo toàn động lượng cho va chạm mềm:
  $$m_1v_1 + m_2v_2 = (m_1 + m_2)V$$
- Thay số (chú ý $v_2 = 0$):
  $$0.2 \cdot 5 + 0 = (0.2 + 0.3) \cdot V \Rightarrow 1 = 0.5V \Rightarrow V = 2 \text{ (m/s)}$$
- Hai viên bi cùng tiếp tục chuyển động theo chiều cũ với tốc độ $2 \text{ m/s}$.
[/GIAI]

**Bài 2 (Vận dụng):** Một toa xe khối lượng $m_1 = 3 \text{ tấn}$ chạy với tốc độ $4 \text{ m/s}$ đến va chạm vào một toa xe khác khối lượng $m_2 = 5 \text{ tấn}$ đang chạy ngược chiều với tốc độ $2 \text{ m/s}$. Sau va chạm hai toa móc vào nhau. Tìm vận tốc của hệ sau va chạm.
[GIAI]
**Lời giải chi tiết:**
- Chọn chiều dương là chiều chuyển động ban đầu của toa 1. 
  $\Rightarrow v_1 = 4 \text{ m/s}$, $v_2 = -2 \text{ m/s}$.
- Bảo toàn động lượng: $m_1v_1 + m_2v_2 = (m_1 + m_2)V$.
  $$3 \cdot 4 + 5 \cdot (-2) = (3 + 5) \cdot V$$
  $$12 - 10 = 8 \cdot V \Rightarrow 2 = 8V \Rightarrow V = 0.25 \text{ (m/s)}$$
- Vì $V > 0$, hệ tiếp tục chuyển động theo chiều của toa xe 1 với tốc độ $0.25 \text{ m/s}$.
[/GIAI]

**Bài 3 (Vận dụng cao):** Một xe cát khối lượng $M = 100 \text{ kg}$ đang chuyển động thẳng đều theo phương ngang với tốc độ $4 \text{ m/s}$. Một người khối lượng $m = 50 \text{ kg}$ đang chạy với tốc độ $6 \text{ m/s}$ đuổi theo xe và nhảy lên xe. Tính vận tốc của xe cát sau khi người nhảy lên.
[GIAI]
**Lời giải chi tiết:**
- Người đuổi theo xe tức là chạy CÙNG CHIỀU. 
- Áp dụng ĐLBT Động lượng theo phương ngang:
  $$mv + MV_0 = (m + M)V$$
  $$50 \cdot 6 + 100 \cdot 4 = (50 + 100) \cdot V$$
  $$300 + 400 = 150 \cdot V \Rightarrow 700 = 150V \Rightarrow V \approx 4.67 \text{ (m/s)}$$
- Vận tốc hệ tăng lên thành $4.67 \text{ m/s}$.
[/GIAI]

### Dạng 2: Bài toán súng giật & Phản lực
**Bài 4 (Cơ bản):** Một khẩu súng đại bác khối lượng $M = 1000 \text{ kg}$ (không kể đạn) bắn ra một viên đạn khối lượng $m = 10 \text{ kg}$ theo phương ngang với vận tốc $400 \text{ m/s}$ (so với đất). Tính vận tốc giật lùi của súng.
[GIAI]
**Lời giải chi tiết:**
- Hệ súng + đạn ban đầu đứng yên ($p_{truoc} = 0$).
- Áp dụng ĐLBT Động lượng: $M\vec{V} + m\vec{v} = 0 \Rightarrow M\vec{V} = -m\vec{v}$.
- Chọn trục $Ox$ cùng chiều đạn bắn:
  $$M \cdot V + m \cdot v = 0 \Rightarrow 1000 \cdot V + 10 \cdot 400 = 0 \Rightarrow V = \frac{-4000}{1000} = -4 \text{ (m/s)}$$
- Súng giật lùi với tốc độ $4 \text{ m/s}$.
[/GIAI]

**Bài 5 (Vận dụng):** Tên lửa khối lượng tổng cộng $M = 10 \text{ tấn}$ đang bay với vận tốc $V = 200 \text{ m/s}$ thì phụt ra phía sau khối lượng khí $m = 2 \text{ tấn}$ với vận tốc $v = 500 \text{ m/s}$ đối với tên lửa. Tính vận tốc của phần tên lửa còn lại ngay sau khi phụt khí.
[GIAI]
**Lời giải chi tiết:**
- Chọn chiều dương là chiều bay của tên lửa.
- Vận tốc khí đối với tên lửa là $v_{k/t} = -500 \text{ m/s}$.
- Vận tốc khí đối với đất: $v_k = v_{k/t} + V_{truoc} = -500 + 200 = -300 \text{ m/s}$.
- Khối lượng tên lửa còn lại: $M' = 10 - 2 = 8 \text{ tấn}$.
- Bảo toàn động lượng đối với đất:
  $$M \cdot V_{truoc} = m \cdot v_k + M' \cdot V_{sau}$$
  $$10 \cdot 200 = 2 \cdot (-300) + 8 \cdot V_{sau}$$
  $$2000 = -600 + 8 \cdot V_{sau} \Rightarrow 2600 = 8 \cdot V_{sau} \Rightarrow V_{sau} = 325 \text{ (m/s)}$$
- Tên lửa tăng tốc lên $325 \text{ m/s}$.
[/GIAI]

### Dạng 3: Va chạm đàn hồi
**Bài 6 (Vận dụng cao):** Quả cầu A khối lượng $m$ bay với tốc độ $v$ va chạm đàn hồi xuyên tâm với quả cầu B khối lượng $2m$ đang đứng yên. Tính vận tốc của hai quả cầu sau va chạm theo $v$.
[GIAI]
**Lời giải chi tiết:**
- Sử dụng công thức va chạm đàn hồi 1D (với $m_1=m, m_2=2m, v_1=v, v_2=0$):
- Vận tốc quả cầu A sau va chạm:
  $$v_1' = \frac{(m_1 - m_2)v_1 + 0}{m_1 + m_2} = \frac{(m - 2m)v}{m + 2m} = -\frac{m}{3m}v = -\frac{v}{3}$$
  $\Rightarrow$ A bị dội ngược lại với tốc độ $v/3$.
- Vận tốc quả cầu B sau va chạm:
  $$v_2' = \frac{2m_1v_1}{m_1 + m_2} = \frac{2mv}{3m} = \frac{2v}{3}$$
  $\Rightarrow$ B chuyển động về phía trước với tốc độ $2v/3$.
[/GIAI]

### Dạng 4: Bài toán đạn nổ thành 2 mảnh
**Bài 7 (Vận dụng cao):** Một viên đạn khối lượng $M = 3 \text{ kg}$ đang bay theo phương ngang với tốc độ $300 \text{ m/s}$ thì nổ thành hai mảnh. Mảnh thứ nhất $m_1 = 1 \text{ kg}$ bay thẳng đứng xuống dưới với tốc độ $400 \text{ m/s}$. Hỏi mảnh thứ hai bay theo hướng nào, với tốc độ bao nhiêu?
[GIAI]
**Lời giải chi tiết:**
- Động lượng ban đầu: $p = M \cdot V = 3 \cdot 300 = 900 \text{ (kg}\cdot\text{m/s)}$ (phương ngang).
- Động lượng mảnh 1: $p_1 = m_1 \cdot v_1 = 1 \cdot 400 = 400 \text{ (kg}\cdot\text{m/s)}$ (phương thẳng đứng hướng xuống).
- Khối lượng mảnh 2: $m_2 = M - m_1 = 2 \text{ kg}$.
- BTĐL: $\vec{p} = \vec{p}_1 + \vec{p}_2 \Rightarrow \vec{p}_2 = \vec{p} - \vec{p}_1$.
- Vì $\vec{p} \perp \vec{p}_1$, tam giác vectơ là tam giác vuông.
  Độ lớn động lượng mảnh 2:
  $$p_2 = \sqrt{p^2 + p_1^2} = \sqrt{900^2 + 400^2} = 100\sqrt{97} \approx 984.88 \text{ (kg}\cdot\text{m/s)}$$
- Vận tốc mảnh 2:
  $$v_2 = \frac{p_2}{m_2} = \frac{984.88}{2} \approx 492.4 \text{ (m/s)}$$
- Góc hợp bởi $\vec{p}_2$ và phương ngang (hướng của $\vec{p}$):
  $$\tan \alpha = \frac{p_1}{p} = \frac{400}{900} = \frac{4}{9} \Rightarrow \alpha \approx 23.96^\circ$$
  (Hướng bay chếch lên trên so với phương ngang góc $23.96^\circ$).
[/GIAI]

**Bài 8 (Nâng cao):** Một viên lựu đạn khối lượng $1.2 \text{ kg}$ đang ném ném xiên và đạt vận tốc $v = 10 \text{ m/s}$ ở điểm cao nhất (bay ngang) thì nổ thành 2 mảnh. Mảnh 1 khối lượng $0.8 \text{ kg}$ bay hợp với phương ngang góc $60^\circ$ chếch lên với vận tốc $30 \text{ m/s}$. Mảnh 2 bay theo hướng nào, tốc độ bao nhiêu?
[GIAI]
**Lời giải chi tiết:**
- $p = 1.2 \cdot 10 = 12 \text{ (kg}\cdot\text{m/s)}$ (Ngang).
- $p_1 = 0.8 \cdot 30 = 24 \text{ (kg}\cdot\text{m/s)}$ (Góc $60^\circ$ với $\vec{p}$).
- $m_2 = 1.2 - 0.8 = 0.4 \text{ kg}$.
- Từ $\vec{p} = \vec{p}_1 + \vec{p}_2 \Rightarrow \vec{p}_2 = \vec{p} - \vec{p}_1$.
- Áp dụng định lí cosin trong tam giác vectơ:
  $$p_2^2 = p^2 + p_1^2 - 2p \cdot p_1 \cdot \cos 60^\circ$$
  $$p_2^2 = 12^2 + 24^2 - 2 \cdot 12 \cdot 24 \cdot 0.5 = 144 + 576 - 288 = 432 \Rightarrow p_2 = 12\sqrt{3} \approx 20.78 \text{ (kg}\cdot\text{m/s)}$$
- Tốc độ mảnh 2: $v_2 = \frac{p_2}{m_2} = \frac{12\sqrt{3}}{0.4} = 30\sqrt{3} \approx 51.96 \text{ (m/s)}$.
- Hướng mảnh 2: Theo định lí sin $\frac{p_2}{\sin 60^\circ} = \frac{p_1}{\sin \beta}$ (với $\beta$ là góc giữa $\vec{p}_2$ và phương ngang $\vec{p}$).
  $$\sin \beta = \frac{p_1 \sin 60^\circ}{p_2} = \frac{24 \cdot \frac{\sqrt{3}}{2}}{12\sqrt{3}} = 1 \Rightarrow \beta = 90^\circ$$
  Vậy mảnh 2 bay thẳng đứng hướng xuống.
[/GIAI]

**Bài 9 (Nâng cao):** Một quả bóng chày khối lượng $150 \text{ g}$ bay ngang với vận tốc $20 \text{ m/s}$. Cầu thủ dùng gậy đánh ngược lại với vận tốc $30 \text{ m/s}$ (cùng trên phương cũ). Biết thời gian gậy chạm bóng là $0.01 \text{ s}$. Tính phần động năng tăng thêm của bóng và lực đánh của gậy.
[GIAI]
**Lời giải chi tiết:**
- Lực đánh của gậy: $\Delta p = mv_2 - mv_1 = 0.15 \cdot 30 - 0.15 \cdot (-20) = 4.5 + 3 = 7.5 \text{ (kg}\cdot\text{m/s)}$.
  $$F = \frac{\Delta p}{\Delta t} = \frac{7.5}{0.01} = 750 \text{ (N)}$$
- Động năng trước: $W_{d1} = \frac{1}{2}m v_1^2 = 0.5 \cdot 0.15 \cdot 20^2 = 30 \text{ (J)}$.
- Động năng sau: $W_{d2} = \frac{1}{2}m v_2^2 = 0.5 \cdot 0.15 \cdot 30^2 = 67.5 \text{ (J)}$.
- Phần động năng tăng thêm: $\Delta W_d = 67.5 - 30 = 37.5 \text{ (J)}$. 
  (Động năng được cung cấp bởi công của gậy đánh chày).
[/GIAI]

**Bài 10 (Nâng cao):** Thả một viên bi nhôm $m_1 = 50 \text{ g}$ rơi tự do từ độ cao $1.25 \text{ m}$ xuống mặt sàn cứng. Va chạm là hoàn toàn đàn hồi. Cùng lúc đó thả bi thứ hai $m_2 = 20 \text{ g}$ rơi ngay phía trên bi nhôm. Coi hai bi va chạm ngay tại mặt sàn. Tính vận tốc bật lên của viên bi $m_2$. ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Vận tốc của cả 2 bi ngay trước khi chạm sàn: $v_0 = \sqrt{2gh} = \sqrt{2 \cdot 10 \cdot 1.25} = 5 \text{ (m/s)}$. (Hướng xuống).
- Bi 1 chạm sàn cứng nảy lên với vận tốc $v_1 = 5 \text{ m/s}$ (va chạm đàn hồi với sàn).
- Ngay sau đó bi 1 (đi lên) va chạm xuyên tâm với bi 2 (đang đi xuống với tốc độ $5 \text{ m/s}$).
- Chọn chiều dương hướng lên. $v_1 = 5 \text{ m/s}, v_2 = -5 \text{ m/s}$. $m_1 = 50 \text{ g}, m_2 = 20 \text{ g}$.
- Áp dụng công thức va chạm đàn hồi tính cho bi 2:
  $$v_2' = \frac{(m_2 - m_1)v_2 + 2m_1v_1}{m_1 + m_2} = \frac{(20 - 50)(-5) + 2(50)(5)}{50 + 20} = \frac{(-30)(-5) + 500}{70} = \frac{150 + 500}{70} = \frac{650}{70} \approx 9.29 \text{ (m/s)}$$
- Viên bi 2 bật nảy lên với tốc độ $9.29 \text{ m/s}$ (cao hơn rất nhiều so với tốc độ ban đầu - ứng dụng trong súng napan trọng lực).
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 11: Phát biểu nào sau đây đúng với va chạm mềm?
[A] Động năng được bảo toàn, động lượng không bảo toàn.
[B] Cả động lượng và động năng đều được bảo toàn.
[*C] Động lượng được bảo toàn, một phần động năng chuyển hóa thành nhiệt.
[D] Vận tốc của hai vật sau va chạm bằng không.
[/QUIZ]

[QUIZ]
Câu 12: Động lượng của hệ kín được bảo toàn là do nguyên nhân nào sau đây?
[A] Ngoại lực tác dụng lên hệ bằng không.
[B] Nội lực trực đối tự triệt tiêu theo định luật III Newton.
[C] Khối lượng của hệ không đổi.
[*D] Tổng ngoại lực tác dụng lên hệ bằng không.
[/QUIZ]
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DB_PHY_10_CH5;
}