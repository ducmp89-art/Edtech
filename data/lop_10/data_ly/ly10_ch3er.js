/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU VẬT LÝ 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Chương III: Động lực học (Bám sát chương trình chuẩn hiện hành)
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
   ========================================================================== */

const DATA_LY10_CH3 = {
    "PHY10-CH3-01": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương III: Động lực học",
        title: "Bài 1: Tổng hợp và Phân tích lực. Cân bằng lực",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương III", "Bài 1"],
        theory: String.raw`
### 1. Lực và hệ lực
- **Khái niệm Lực:** Lực là đại lượng vectơ đặc trưng cho tác dụng của vật này lên vật khác, kết quả là gây ra gia tốc cho vật hoặc làm vật biến dạng.
- **Ký hiệu:** $\vec{F}$. Đơn vị: Newton (N).
- Hai lực trực đối là hai lực có cùng giá, cùng độ lớn nhưng ngược chiều.

### 2. Tổng hợp lực
- **Định nghĩa:** Là phép thay thế nhiều lực tác dụng đồng thời vào một vật bằng một lực duy nhất có tác dụng giống hệt các lực ấy. Lực thay thế gọi là hợp lực.
- **Quy tắc hình bình hành:** Nếu hai lực đồng quy $\vec{F}_1$ và $\vec{F}_2$ tạo với nhau một góc $\alpha$, hợp lực $\vec{F}$ được xác định bởi đường chéo của hình bình hành tạo bởi hai vectơ đó:
  $$\vec{F} = \vec{F}_1 + \vec{F}_2$$
- **Độ lớn hợp lực:** 
  $$F = \sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \cos \alpha}$$
- **Các trường hợp đặc biệt:**
  + $\vec{F}_1 \uparrow\uparrow \vec{F}_2$ ($\alpha = 0^\circ$): $F = F_1 + F_2$ (Max).
  + $\vec{F}_1 \uparrow\downarrow \vec{F}_2$ ($\alpha = 180^\circ$): $F = |F_1 - F_2|$ (Min).
  + $\vec{F}_1 \perp \vec{F}_2$ ($\alpha = 90^\circ$): $F = \sqrt{F_1^2 + F_2^2}$.
  + Chú ý giới hạn của hợp lực: $|F_1 - F_2| \le F \le F_1 + F_2$.

### 3. Phân tích lực
- **Định nghĩa:** Phân tích lực là thay thế một lực bằng hai hay nhiều lực thành phần có tác dụng giống hệt như lực đó.
- Thường sử dụng hệ trục tọa độ vuông góc $Oxy$ để phân tích lực $\vec{F}$ thành $\vec{F}_x$ và $\vec{F}_y$.
  $$F_x = F \cos \alpha \quad ; \quad F_y = F \sin \alpha$$
  (với $\alpha$ là góc hợp bởi $\vec{F}$ và trục $Ox$).

### 4. Điều kiện cân bằng của chất điểm
- Một chất điểm đứng yên hoặc chuyển động thẳng đều khi tổng hợp các lực tác dụng lên nó bằng không.
  $$\vec{F}_{hl} = \vec{F}_1 + \vec{F}_2 + ... + \vec{F}_n = \vec{0}$$
- Trên hệ trục $Oxy$, điều kiện cân bằng tương đương với:
  $$\begin{cases} \sum F_x = 0 \\ \sum F_y = 0 \end{cases}$$
        `,
        tips: String.raw`
- 💡 **Mẹo phân tích lực trên mặt phẳng nghiêng:**
  Luôn chọn trục $Ox$ dọc theo mặt phẳng nghiêng (chiều hướng xuống hoặc lên), trục $Oy$ vuông góc với mặt phẳng nghiêng. Khi đó, trọng lực $\vec{P}$ hợp với $Oy$ một góc đúng bằng góc nghiêng $\alpha$. 
  Thành phần trượt: $P_x = P \sin \alpha$. 
  Thành phần ép: $P_y = P \cos \alpha$.
- ⚠️ **Lỗi sai:** Áp dụng sai công thức hàm cos khi tính góc của 2 lực. Học sinh hay nhầm công thức hình học $a^2 = b^2+c^2 - 2bc \cos A$. Trong tổng hợp vector lực là dấu **CỘNG**: $+ 2F_1 F_2 \cos \alpha$.
        `,
        practice: String.raw`
### Dạng 1: Tính toán tổng hợp lực
**Bài 1 (Cơ bản):** Hai lực đồng quy $\vec{F}_1$ và $\vec{F}_2$ có độ lớn lần lượt là 30 N và 40 N. Tính độ lớn của hợp lực $\vec{F}$ trong các trường hợp góc giữa hai lực là $0^\circ, 90^\circ, 180^\circ$.
[GIAI]
**Lời giải chi tiết:**
- Khi $\alpha = 0^\circ$ (cùng chiều): $F = F_1 + F_2 = 30 + 40 = 70 \text{ N}$.
- Khi $\alpha = 90^\circ$ (vuông góc): $F = \sqrt{F_1^2 + F_2^2} = \sqrt{30^2 + 40^2} = 50 \text{ N}$.
- Khi $\alpha = 180^\circ$ (ngược chiều): $F = |F_1 - F_2| = |30 - 40| = 10 \text{ N}$.
[/GIAI]

**Bài 2 (Cơ bản):** Hai lực $\vec{F}_1$ và $\vec{F}_2$ hợp với nhau một góc $\alpha = 60^\circ$. Độ lớn của hai lực là $F_1 = F_2 = 20 \text{ N}$. Tính độ lớn của hợp lực.
[GIAI]
**Lời giải chi tiết:**
- Áp dụng công thức tổng hợp lực: 
  $$F = \sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \cos \alpha}$$
- Thay số: 
  $$F = \sqrt{20^2 + 20^2 + 2(20)(20) \cos 60^\circ}$$
  $$F = \sqrt{400 + 400 + 800 \cdot \frac{1}{2}} = \sqrt{1200} = 20\sqrt{3} \text{ N} \approx 34.64 \text{ N}$$
- Mẹo giải nhanh: Khi 2 lực bằng nhau $F_1 = F_2 = F_0$, hợp lực $F = 2F_0 \cos(\frac{\alpha}{2}) = 2(20)\cos(30^\circ) = 20\sqrt{3} \text{ N}$.
[/GIAI]

**Bài 3 (Vận dụng):** Có hai lực đồng quy có độ lớn là 9 N và 12 N. Trong số các giá trị sau đây, giá trị nào có thể là độ lớn của hợp lực?
A. 1 N; B. 2 N; C. 15 N; D. 25 N.
[GIAI]
**Lời giải chi tiết:**
- Hợp lực $F$ luôn thỏa mãn điều kiện: $|F_1 - F_2| \le F \le F_1 + F_2$.
- Thay số ta có: $|9 - 12| \le F \le 9 + 12 \Rightarrow 3 \text{ N} \le F \le 21 \text{ N}$.
- Dựa vào khoảng giá trị này, chỉ có đáp án C (15 N) là phù hợp.
[/GIAI]

**Bài 4 (Vận dụng):** Hai lực đồng quy có cùng độ lớn $F_1 = F_2 = F_0$. Hợp lực của chúng cũng có độ lớn là $F_0$. Tìm góc hợp bởi hai lực đó.
[GIAI]
**Lời giải chi tiết:**
- Áp dụng công thức nhanh khi hai lực bằng nhau: $F = 2F_0 \cos\left(\frac{\alpha}{2}\right)$.
- Theo đề bài $F = F_0$, ta có:
  $$F_0 = 2F_0 \cos\left(\frac{\alpha}{2}\right) \Rightarrow \cos\left(\frac{\alpha}{2}\right) = \frac{1}{2}$$
- Suy ra $\frac{\alpha}{2} = 60^\circ \Rightarrow \alpha = 120^\circ$.
[/GIAI]

### Dạng 2: Phân tích lực và Cân bằng chất điểm
**Bài 5 (Vận dụng):** Một vật khối lượng $m = 5 \text{ kg}$ đặt trên mặt phẳng nghiêng góc $\alpha = 30^\circ$ so với phương ngang. Phân tích trọng lực $\vec{P}$ của vật thành 2 thành phần: vuông góc và song song với mặt phẳng nghiêng. Tính độ lớn của 2 thành phần này. Lấy $g = 10 \text{ m/s}^2$.
[GIAI]
**Lời giải chi tiết:**
- Trọng lượng của vật: $P = m \cdot g = 5 \cdot 10 = 50 \text{ N}$.
- Phân tích $\vec{P}$ thành $\vec{P}_x$ (song song mp nghiêng) và $\vec{P}_y$ (vuông góc mp nghiêng).
- Thành phần song song có tác dụng kéo vật trượt xuống:
  $$P_x = P \sin \alpha = 50 \cdot \sin 30^\circ = 50 \cdot 0.5 = 25 \text{ N}$$
- Thành phần vuông góc có tác dụng ép vật vào mặt phẳng:
  $$P_y = P \cos \alpha = 50 \cdot \cos 30^\circ = 50 \cdot \frac{\sqrt{3}}{2} = 25\sqrt{3} \text{ N} \approx 43.3 \text{ N}$$
[/GIAI]

**Bài 6 (Vận dụng cao):** Một vật nặng có trọng lượng $P = 100 \text{ N}$ được treo cân bằng bằng 2 sợi dây $OA$ và $OB$. Góc giữa dây $OA$ và trần nhà là $30^\circ$, góc giữa dây $OB$ và trần nhà là $60^\circ$. Tính lực căng của hai sợi dây.
[GIAI]
**Lời giải chi tiết:**
- Gọi lực căng của hai dây là $\vec{T}_A$ và $\vec{T}_B$. Trọng lực $\vec{P}$ hướng xuống.
- Vật cân bằng nên: $\vec{T}_A + \vec{T}_B + \vec{P} = \vec{0} \Rightarrow \vec{T}_A + \vec{T}_B = -\vec{P}$.
- Gọi hợp lực của 2 lực căng dây là $\vec{T}$, ta có $\vec{T}$ trực đối với $\vec{P} \Rightarrow T = P = 100 \text{ N}$.
- Do góc hợp bởi $OA$ và $OB$ với phương ngang (trần) lần lượt là $30^\circ$ và $60^\circ$, góc giữa 2 dây $OA$ và $OB$ là $180^\circ - (30^\circ + 60^\circ) = 90^\circ$.
- Vậy $\vec{T}_A$ và $\vec{T}_B$ vuông góc với nhau. Ta có tam giác vuông lực.
- Góc giữa $\vec{T}_B$ (hướng lên tạo góc $60^\circ$ với trần) và phương thẳng đứng (hướng của $\vec{T}$) là $90^\circ - 60^\circ = 30^\circ$.
- Độ lớn lực căng:
  $$T_B = T \cdot \cos 30^\circ = 100 \cdot \frac{\sqrt{3}}{2} = 50\sqrt{3} \text{ N}$$
  $$T_A = T \cdot \sin 30^\circ = 100 \cdot 0.5 = 50 \text{ N}$$
[/GIAI]

**Bài 7 (Vận dụng cao):** Cho hệ 3 lực đồng quy cân bằng nhau. Biết độ lớn của lực thứ nhất và thứ hai là $F_1 = 3 \text{ N}$, $F_2 = 4 \text{ N}$, và góc hợp bởi hai lực này là $90^\circ$. Tính độ lớn của lực thứ ba $\vec{F}_3$ và góc hợp bởi $\vec{F}_3$ với $\vec{F}_1$.
[GIAI]
**Lời giải chi tiết:**
- Vì 3 lực cân bằng nên $\vec{F}_1 + \vec{F}_2 + \vec{F}_3 = \vec{0} \Rightarrow \vec{F}_3 = - (\vec{F}_1 + \vec{F}_2)$.
- Độ lớn lực $F_3$ bằng độ lớn hợp lực của $\vec{F}_1$ và $\vec{F}_2$.
- Vì $\vec{F}_1 \perp \vec{F}_2$: 
  $$F_3 = \sqrt{F_1^2 + F_2^2} = \sqrt{3^2 + 4^2} = 5 \text{ N}$$
- Kẻ hình chữ nhật, góc $\beta$ hợp bởi hợp lực $(\vec{F}_1 + \vec{F}_2)$ và $\vec{F}_1$ là: 
  $$\tan \beta = \frac{F_2}{F_1} = \frac{4}{3} \Rightarrow \beta \approx 53.1^\circ$$
- Lực $\vec{F}_3$ ngược chiều với hợp lực trên, nên góc hợp bởi $\vec{F}_3$ và $\vec{F}_1$ là:
  $$\alpha = 180^\circ - \beta = 180^\circ - 53.1^\circ = 126.9^\circ$$
[/GIAI]

**Bài 8 (Nâng cao):** Một vật khối lượng $m = 2 \text{ kg}$ đặt trên mặt phẳng nghiêng $30^\circ$. Phải tác dụng vào vật một lực kéo $\vec{F}$ hướng dọc lên theo mặt phẳng nghiêng có độ lớn bằng bao nhiêu để vật đứng yên? (Bỏ qua ma sát, $g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Các lực tác dụng lên vật: Trọng lực $\vec{P}$, Phản lực $\vec{N}$, Lực kéo $\vec{F}$.
- Chiếu phương trình cân bằng $\vec{P} + \vec{N} + \vec{F} = \vec{0}$ lên trục $Ox$ song song với mặt phẳng nghiêng (chiều dương hướng lên):
  $$F - P_x = 0 \Rightarrow F = P_x$$
- Với $P_x$ là thành phần trọng lực kéo vật trượt xuống:
  $$P_x = P \sin 30^\circ = mg \sin 30^\circ = 2 \cdot 10 \cdot 0.5 = 10 \text{ N}$$
- Vậy cần một lực kéo $F = 10 \text{ N}$ để giữ vật đứng yên.
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Khi một chất điểm chịu tác dụng của 3 lực đồng quy cân bằng nhau, phát biểu nào sau đây là **sai**?
[A] Hợp lực của hai lực bất kỳ phải cân bằng với lực thứ ba.
[B] Ba lực này phải đồng phẳng.
[*C] Độ lớn của ba lực này luôn phải bằng nhau.
[D] Vectơ tổng của ba lực bằng không.
[/QUIZ]

[QUIZ]
Câu 10: Hai lực có giá đồng quy có độ lớn $F_1 = 5 \text{ N}$, $F_2 = 12 \text{ N}$. Hợp lực của hai lực này KHÔNG thể có độ lớn nào sau đây?
[A] 7 N
[B] 13 N
[*C] 6 N
[D] 17 N
[/QUIZ]
        `
    },

    "PHY10-CH3-02": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương III: Động lực học",
        title: "Bài 2: Ba định luật Newton về chuyển động",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương III", "Bài 2"],
        theory: String.raw`
### 1. Định luật I Newton (Định luật Quán tính)
- **Nội dung:** Nếu một vật không chịu tác dụng của lực nào hoặc chịu tác dụng của các lực có hợp lực bằng không, thì vật đang đứng yên sẽ tiếp tục đứng yên, đang chuyển động sẽ tiếp tục chuyển động thẳng đều.
- **Quán tính:** Là tính chất bảo toàn trạng thái đứng yên hay chuyển động thẳng đều của vật. 
- Khối lượng là đại lượng đặc trưng cho mức quán tính của vật. Vật có khối lượng càng lớn thì quán tính càng lớn (càng khó thay đổi vận tốc).

### 2. Định luật II Newton
- **Nội dung:** Gia tốc của một vật cùng hướng với lực tác dụng lên vật. Độ lớn của gia tốc tỉ lệ thuận với độ lớn của lực và tỉ lệ nghịch với khối lượng của vật.
- **Biểu thức toán học:**
  $$\vec{a} = \frac{\vec{F}_{hl}}{m} \quad \text{hay} \quad \vec{F}_{hl} = m\vec{a}$$
- Trong đó: 
  + $\vec{F}_{hl}$ là hợp lực tác dụng lên vật (N)
  + $m$ là khối lượng của vật (kg)
  + $\vec{a}$ là gia tốc của vật (m/s²)

### 3. Định luật III Newton (Lực và Phản lực)
- **Nội dung:** Khi vật A tác dụng lên vật B một lực, thì vật B cũng tác dụng lại vật A một lực. Hai lực này là hai lực trực đối (cùng giá, cùng độ lớn, ngược chiều).
- **Biểu thức:** 
  $$\vec{F}_{AB} = -\vec{F}_{BA}$$
- **Đặc điểm của lực và phản lực:**
  + Luôn xuất hiện và mất đi đồng thời.
  + Là hai lực cùng bản chất.
  + **Tác dụng vào hai vật khác nhau** nên chúng KHÔNG THỂ cân bằng nhau (không triệt tiêu nhau).
        `,
        tips: String.raw`
- 💡 **Phương pháp Động lực học (Giải bài tập ĐL II Newton):**
  - **Bước 1:** Xác định vật khảo sát, phân tích TẤT CẢ các lực tác dụng lên vật.
  - **Bước 2:** Viết phương trình ĐL II Newton dạng vectơ: $\vec{F}_1 + \vec{F}_2 + ... + \vec{F}_n = m\vec{a}$.
  - **Bước 3:** Chiếu pt vectơ lên hệ trục $Oxy$ để chuyển thành pt đại số. 
    + Trục $Ox$ (cùng chiều chuyển động): Tính gia tốc $a$.
    + Trục $Oy$ (vuông góc cđ): Thường dùng để tính phản lực $N$.
- ⚠️ **Sai lầm thường gặp:** Rất nhiều học sinh nghĩ rằng lực và phản lực trong ĐL III Newton cân bằng nhau nên vật không di chuyển được. Đây là sai lầm kinh điển! Thực tế vì chúng đặt vào 2 VẬT KHÁC NHAU nên ta xét cđ của vật nào thì chỉ lấy lực tác dụng lên vật đó thôi.
        `,
        practice: String.raw`
### Dạng 1: Áp dụng Định luật II Newton cơ bản
**Bài 1 (Cơ bản):** Một vật khối lượng $m = 4 \text{ kg}$ đang đứng yên trên mặt phẳng ngang. Tác dụng vào vật một lực kéo $F = 12 \text{ N}$ theo phương ngang. Bỏ qua mọi ma sát. Tính gia tốc của vật và vận tốc của vật sau 5 giây.
[GIAI]
**Lời giải chi tiết:**
- Theo phương ngang chỉ có lực kéo $F$ tác dụng. 
- Áp dụng Định luật II Newton: $F = m \cdot a$.
- Gia tốc của vật là: $a = \frac{F}{m} = \frac{12}{4} = 3 \text{ m/s}^2$.
- Vận tốc của vật sau $t = 5 \text{ s}$ (với $v_0 = 0$): 
  $$v = v_0 + at = 0 + 3 \cdot 5 = 15 \text{ m/s}$$
[/GIAI]

**Bài 2 (Cơ bản):** Dưới tác dụng của một lực $20 \text{ N}$, một vật chuyển động với gia tốc $0.4 \text{ m/s}^2$. Hỏi nếu tác dụng lực $50 \text{ N}$ thì vật đó sẽ chuyển động với gia tốc bằng bao nhiêu?
[GIAI]
**Lời giải chi tiết:**
- Khối lượng của vật không đổi, từ trường hợp 1 tính khối lượng:
  $$m = \frac{F_1}{a_1} = \frac{20}{0.4} = 50 \text{ kg}$$
- Khi lực tác dụng là $F_2 = 50 \text{ N}$, gia tốc mới là:
  $$a_2 = \frac{F_2}{m} = \frac{50}{50} = 1 \text{ m/s}^2$$
[/GIAI]

**Bài 3 (Vận dụng):** Một ô tô khối lượng 2 tấn đang chạy với vận tốc 72 km/h thì hãm phanh. Xe đi thêm được 50 m thì dừng hẳn. Tính lực hãm phanh trung bình tác dụng lên ô tô.
[GIAI]
**Lời giải chi tiết:**
- Đổi đơn vị: $m = 2000 \text{ kg}$; $v_0 = 72 \text{ km/h} = 20 \text{ m/s}$; $v = 0 \text{ m/s}$.
- Gia tốc của ô tô: Áp dụng hệ thức độc lập $v^2 - v_0^2 = 2as$
  $$a = \frac{v^2 - v_0^2}{2s} = \frac{0 - 20^2}{2 \cdot 50} = \frac{-400}{100} = -4 \text{ m/s}^2$$
- Lực hãm phanh (ngược chiều chuyển động) theo ĐL II Newton:
  $$F_{hl} = m \cdot a = 2000 \cdot (-4) = -8000 \text{ N}$$
- Vậy lực hãm phanh có độ lớn $8000 \text{ N}$, dấu trừ thể hiện lực ngược chiều chuyển động.
[/GIAI]

**Bài 4 (Vận dụng):** Một vật khối lượng 500 g chuyển động thẳng nhanh dần đều từ trạng thái nghỉ. Sau khi đi được 2 m, vật đạt vận tốc 2 m/s. Tính lực hợp lực tác dụng lên vật.
[GIAI]
**Lời giải chi tiết:**
- Khối lượng $m = 0.5 \text{ kg}$. $v_0 = 0$, $s = 2 \text{ m}$, $v = 2 \text{ m/s}$.
- Gia tốc của vật: 
  $$a = \frac{v^2 - v_0^2}{2s} = \frac{2^2 - 0}{2 \cdot 2} = 1 \text{ m/s}^2$$
- Hợp lực tác dụng lên vật:
  $$F = m \cdot a = 0.5 \cdot 1 = 0.5 \text{ N}$$
[/GIAI]

### Dạng 2: Phân tích lực theo hệ trục tọa độ
**Bài 5 (Vận dụng cao):** Một xe đẩy khối lượng 10 kg được kéo bởi một lực $F = 40 \text{ N}$ hợp với phương ngang một góc $60^\circ$ hướng lên. Bỏ qua ma sát. Lấy $g = 10 \text{ m/s}^2$. 
a) Tính gia tốc của xe.
b) Tính áp lực của xe lên mặt sàn.
[GIAI]
**Lời giải chi tiết:**
- Phân tích lực $F$ thành 2 thành phần: $F_x = F\cos 60^\circ$ và $F_y = F\sin 60^\circ$.
a) Gia tốc của xe (theo phương ngang):
  $$F_x = m \cdot a \Rightarrow F \cos 60^\circ = m \cdot a$$
  $$a = \frac{40 \cdot 0.5}{10} = \frac{20}{10} = 2 \text{ m/s}^2$$
b) Áp lực của xe lên sàn bằng phản lực pháp tuyến $N$. 
Theo phương thẳng đứng, xe không di chuyển nên tổng lực bằng 0:
  $$\vec{P} + \vec{N} + \vec{F}_y = \vec{0}$$
Chiếu lên chiều dương hướng lên trên:
  $$N + F \sin 60^\circ - P = 0 \Rightarrow N = P - F \sin 60^\circ$$
  $$N = mg - F \sin 60^\circ = 10 \cdot 10 - 40 \cdot \frac{\sqrt{3}}{2} = 100 - 20\sqrt{3} \approx 65.36 \text{ N}$$
- Nhận xét: Nhờ kéo xéo lên, áp lực lên sàn đã giảm so với trọng lượng ban đầu (100 N).
[/GIAI]

### Dạng 3: Định luật III Newton và tương tác hệ vật
**Bài 6 (Vận dụng):** Xe A khối lượng 1000 kg đang chuyển động với vận tốc 10 m/s thì va chạm vào xe B khối lượng 2000 kg đang đứng yên. Sau va chạm, xe A dội ngược lại với vận tốc 2 m/s. Thời gian va chạm là 0.1 s. Tính gia tốc và vận tốc của xe B ngay sau va chạm.
[GIAI]
**Lời giải chi tiết:**
- Chọn chiều dương là chiều chuyển động ban đầu của xe A.
- Vận tốc xe A: $v_{0A} = 10 \text{ m/s}$; $v_A = -2 \text{ m/s}$.
- Gia tốc xe A trong lúc va chạm:
  $$a_A = \frac{v_A - v_{0A}}{\Delta t} = \frac{-2 - 10}{0.1} = -120 \text{ m/s}^2$$
- Lực do xe B tác dụng lên xe A: $F_{BA} = m_A a_A = 1000 \cdot (-120) = -120000 \text{ N}$.
- Theo ĐL III Newton, lực xe A tác dụng lên xe B là: $F_{AB} = -F_{BA} = 120000 \text{ N}$.
- Gia tốc của xe B:
  $$a_B = \frac{F_{AB}}{m_B} = \frac{120000}{2000} = 60 \text{ m/s}^2$$
- Vận tốc của xe B ngay sau va chạm:
  $$v_B = v_{0B} + a_B \Delta t = 0 + 60 \cdot 0.1 = 6 \text{ m/s}$$
[/GIAI]

**Bài 7 (Vận dụng cao):** Hai quả cầu $m_1 = 2 \text{ kg}$ và $m_2$ đặt trên mặt bàn nhẵn. Giữa chúng có một lò xo bị nén. Khi buông tay, lò xo bung ra đẩy hai quả cầu. Quả cầu 1 di chuyển được 4 m trong cùng thời gian quả cầu 2 di chuyển được 1 m. Tính $m_2$.
[GIAI]
**Lời giải chi tiết:**
- Lực do lò xo đẩy hai quả cầu là hai lực trực đối: $F_1 = -F_2 \Rightarrow m_1 a_1 = -m_2 a_2 \Rightarrow m_1 |a_1| = m_2 |a_2|$.
- Khởi hành từ nghỉ, quãng đường đi được trong thời gian $t$: $s = \frac{1}{2}at^2 \Rightarrow a = \frac{2s}{t^2}$.
- Cùng thời gian $t \Rightarrow \frac{a_1}{a_2} = \frac{s_1}{s_2} = \frac{4}{1} = 4$.
- Từ hệ thức lực: $m_1 \cdot (4 a_2) = m_2 \cdot a_2 \Rightarrow m_2 = 4m_1 = 4 \cdot 2 = 8 \text{ kg}$.
[/GIAI]

**Bài 8 (Nâng cao):** Một người khối lượng 60 kg đứng trong thang máy. Thang máy đi LÊN nhanh dần đều với gia tốc $a = 2 \text{ m/s}^2$. Lấy $g = 10 \text{ m/s}^2$. Tính lực ép của người đó lên sàn thang máy.
[GIAI]
**Lời giải chi tiết:**
- Lực ép của người lên sàn có độ lớn bằng phản lực $N$ của sàn tác dụng lên người.
- Các lực tác dụng lên người: Trọng lực $\vec{P}$ (xuống), Phản lực $\vec{N}$ (lên).
- Áp dụng ĐL II Newton: $\vec{P} + \vec{N} = m\vec{a}$.
- Chiếu lên chiều dương hướng lên (chiều chuyển động):
  $$-P + N = m \cdot a \Rightarrow N = P + ma = m(g + a)$$
- Thay số: $N = 60(10 + 2) = 60 \cdot 12 = 720 \text{ N}$.
- Nhận xét: Lực ép lớn hơn trọng lượng thực tế (600 N). Cảm giác này gọi là "tăng trọng lượng biểu kiến".
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Khi xe buýt đang chạy nhanh thẳng đều trên đường, bỗng phanh gấp, hành khách trên xe sẽ:
[A] Ngả người về phía sau.
[*B] Chúi người về phía trước.
[C] Ép chặt người vào thành xe bên trái.
[D] Ép chặt người vào thành xe bên phải.
[/QUIZ]

[QUIZ]
Câu 10: Theo định luật III Newton, hai lực tác dụng lẫn nhau giữa hai vật là hai lực:
[A] cùng phương, cùng chiều và cùng độ lớn.
[*B] trực đối (cùng giá, cùng độ lớn, ngược chiều) và tác dụng vào hai vật khác nhau.
[C] cân bằng nhau vì chúng cùng độ lớn và ngược chiều.
[D] tác dụng vào cùng một vật, sinh ra gia tốc bằng 0.
[/QUIZ]
        `
    },

    "PHY10-CH3-03": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương III: Động lực học",
        title: "Bài 3: Trọng lực, Lực ma sát và Lực căng dây",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương III", "Bài 3"],
        theory: String.raw`
### 1. Trọng lực và Trọng lượng
- **Trọng lực ($\vec{P}$):** Là lực hấp dẫn do Trái Đất tác dụng lên vật, gây ra gia tốc rơi tự do.
  + Điểm đặt: Tại trọng tâm của vật.
  + Phương: Thẳng đứng. Chiều: Từ trên xuống dưới.
- **Trọng lượng ($P$):** Là độ lớn của trọng lực.
  $$P = mg$$
  *(Lưu ý: Khối lượng $m$ là không đổi ở mọi nơi, nhưng trọng lượng $P$ thay đổi tùy thuộc vào gia tốc trọng trường $g$ tại từng vị trí địa lý).*

### 2. Lực ma sát
- Phân loại: Ma sát nghỉ, Ma sát trượt, Ma sát lăn.
- **Lực ma sát trượt ($\vec{F}_{mst}$):** 
  + Xuất hiện ở mặt tiếp xúc, ngược chiều với vận tốc tương đối của vật trượt.
  + Độ lớn: Không phụ thuộc diện tích tiếp xúc và tốc độ, chỉ phụ thuộc vào bản chất, tình trạng bề mặt và áp lực pháp tuyến $N$.
  $$F_{mst} = \mu_t \cdot N$$
  ($\mu_t$ là hệ số ma sát trượt, không có đơn vị).

### 3. Lực căng dây ($\vec{T}$)
- Lực căng xuất hiện khi sợi dây bị kéo căng. 
- Điểm đặt tại điểm dây buộc vào vật, phương trùng với sợi dây, chiều hướng từ hai đầu dây vào phần giữa của sợi dây.
- Trong trường hợp dây nhẹ và ròng rọc lý tưởng, lực căng dọc theo toàn bộ sợi dây là đồng nhất ($T_1 = T_2 = T$).

### 4. Lực cản của chất lưu (Mở rộng)
- Khi vật chuyển động trong không khí hoặc chất lỏng, vật chịu lực cản ngược chiều chuyển động. Tốc độ càng lớn, lực cản càng mạnh.
        `,
        tips: String.raw`
- 💡 **Mẹo xác định phản lực $N$ để tính ma sát:** 
  + Kéo ngang: $N = P = mg$.
  + Kéo xiên lên góc $\alpha$: $N = P - F\sin\alpha$ (Lực ép giảm $\rightarrow$ Ma sát giảm).
  + Đẩy xiên xuống góc $\alpha$: $N = P + F\sin\alpha$ (Lực ép tăng $\rightarrow$ Ma sát tăng).
  + Trên mặt phẳng nghiêng góc $\alpha$: $N = P\cos\alpha = mg\cos\alpha$.
- ⚠️ **Lỗi thường gặp:** Mặc định $N = mg$ trong mọi trường hợp. Công thức chuẩn của ma sát là $F_{ms} = \mu \cdot N$, chứ không phải $\mu \cdot mg$.
        `,
        practice: String.raw`
### Dạng 1: Chuyển động có ma sát trên mặt phẳng ngang
**Bài 1 (Cơ bản):** Kéo một khúc gỗ khối lượng 20 kg trượt thẳng đều trên sàn nhà nằm ngang bằng một lực ngang $F$. Hệ số ma sát trượt giữa gỗ và sàn là $\mu = 0.2$. Lấy $g = 10 \text{ m/s}^2$. Tính lực kéo $F$.
[GIAI]
**Lời giải chi tiết:**
- Vật chuyển động thẳng đều nên gia tốc $a = 0$. Hợp lực tác dụng lên vật bằng 0.
- Theo phương ngang: $F - F_{ms} = 0 \Rightarrow F = F_{ms}$.
- Theo phương thẳng đứng: $N = P = mg = 20 \cdot 10 = 200 \text{ N}$.
- Lực ma sát: $F_{ms} = \mu \cdot N = 0.2 \cdot 200 = 40 \text{ N}$.
- Vậy lực kéo cần thiết là $F = 40 \text{ N}$.
[/GIAI]

**Bài 2 (Vận dụng):** Một chiếc xe khối lượng 1 tấn đang chạy với tốc độ 20 m/s thì tắt máy, xe trượt thêm một đoạn rồi dừng lại. Hệ số ma sát là $\mu = 0.1$, $g = 10 \text{ m/s}^2$. Tính quãng đường xe trượt được từ lúc tắt máy đến lúc dừng.
[GIAI]
**Lời giải chi tiết:**
- Khi tắt máy, lực kéo $F_k = 0$, vật chuyển động chậm dần đều do lực ma sát.
- Áp dụng ĐL II Newton theo phương ngang (chiều dương cùng chiều cđ):
  $$-F_{ms} = m \cdot a \Rightarrow -\mu mg = ma \Rightarrow a = -\mu g$$
  $$a = -0.1 \cdot 10 = -1 \text{ m/s}^2$$
- Áp dụng công thức độc lập với thời gian ($v = 0$ khi dừng):
  $$v^2 - v_0^2 = 2as \Rightarrow 0^2 - 20^2 = 2 \cdot (-1) \cdot s$$
  $$-400 = -2s \Rightarrow s = 200 \text{ m}$$
[/GIAI]

### Dạng 2: Kéo vật với lực xiên
**Bài 3 (Vận dụng cao):** Một vật $m = 5 \text{ kg}$ đặt trên sàn ngang. Người ta kéo vật bằng một lực $F = 20 \text{ N}$ hướng chếch lên một góc $\alpha = 30^\circ$ so với phương ngang. Hệ số ma sát $\mu = 0.1$. Lấy $g = 10 \text{ m/s}^2$. Tính gia tốc của vật.
[GIAI]
**Lời giải chi tiết:**
- Phân tích lực kéo $\vec{F}$ thành $F_x = F \cos 30^\circ$ và $F_y = F \sin 30^\circ$.
- Theo phương $Oy$ (thẳng đứng): $N + F_y - P = 0 \Rightarrow N = mg - F\sin 30^\circ$.
  $$N = 5 \cdot 10 - 20 \cdot 0.5 = 50 - 10 = 40 \text{ N}$$
- Lực ma sát: $F_{ms} = \mu N = 0.1 \cdot 40 = 4 \text{ N}$.
- Áp dụng ĐL II Newton phương $Ox$ (phương ngang):
  $$F_x - F_{ms} = ma \Rightarrow F\cos 30^\circ - F_{ms} = ma$$
  $$20 \cdot \frac{\sqrt{3}}{2} - 4 = 5a \Rightarrow 10\sqrt{3} - 4 = 5a \Rightarrow a = \frac{17.32 - 4}{5} \approx 2.66 \text{ m/s}^2$$
[/GIAI]

### Dạng 3: Mặt phẳng nghiêng
**Bài 4 (Vận dụng cao):** Một vật trượt KHÔNG vận tốc đầu từ đỉnh một mặt phẳng nghiêng dài 10 m, góc nghiêng $30^\circ$ so với phương ngang. Hệ số ma sát $\mu = 0.2$. Lấy $g = 10 \text{ m/s}^2$. Tính vận tốc của vật ở chân dốc.
[GIAI]
**Lời giải chi tiết:**
- Chọn trục $Ox$ dọc theo mp nghiêng hướng xuống. Phản lực $N = P \cos 30^\circ = mg \cos 30^\circ$.
- Lực ma sát hướng ngược chiều chuyển động (hướng lên): $F_{ms} = \mu mg \cos 30^\circ$.
- Lực kéo vật xuống là thành phần $P_x = mg \sin 30^\circ$.
- Áp dụng ĐL II Newton theo trục $Ox$:
  $$P_x - F_{ms} = ma \Rightarrow mg \sin 30^\circ - \mu mg \cos 30^\circ = ma$$
- Triệt tiêu $m$:
  $$a = g(\sin 30^\circ - \mu \cos 30^\circ) = 10 \left( 0.5 - 0.2 \cdot \frac{\sqrt{3}}{2} \right) \approx 10 (0.5 - 0.173) = 3.27 \text{ m/s}^2$$
- Vận tốc ở chân dốc:
  $$v^2 - 0 = 2as \Rightarrow v = \sqrt{2 \cdot 3.27 \cdot 10} = \sqrt{65.4} \approx 8.09 \text{ m/s}$$
[/GIAI]

### Dạng 4: Hệ vật nối bằng dây (Lực căng dây)
**Bài 5 (Nâng cao):** Hai vật $m_1 = 3 \text{ kg}$ và $m_2 = 2 \text{ kg}$ được nối với nhau bằng một sợi dây không dãn, vắt qua một ròng rọc cố định (máy Atwood). Bỏ qua khối lượng dây, ròng rọc và ma sát. Lấy $g = 10 \text{ m/s}^2$. Tính gia tốc của hệ và lực căng của sợi dây.
[GIAI]
**Lời giải chi tiết:**
- Vì $m_1 > m_2$ nên hệ chuyển động theo chiều $m_1$ đi xuống, $m_2$ đi lên. Gọi $a$ là gia tốc chung.
- Khảo sát vật $m_1$ (chiều dương hướng xuống):
  $$P_1 - T = m_1 a \quad (1)$$
- Khảo sát vật $m_2$ (chiều dương hướng lên):
  $$T - P_2 = m_2 a \quad (2)$$
- Cộng vế với vế (1) và (2):
  $$P_1 - P_2 = (m_1 + m_2)a \Rightarrow a = \frac{m_1 g - m_2 g}{m_1 + m_2} = \frac{(3-2)\cdot 10}{3+2} = \frac{10}{5} = 2 \text{ m/s}^2$$
- Thay $a$ vào (2) để tìm $T$:
  $$T = P_2 + m_2 a = m_2(g+a) = 2(10 + 2) = 24 \text{ N}$$
[/GIAI]

**Bài 6 (Nâng cao):** Một xe kéo rơ-moóc có $m_{xe} = 3000 \text{ kg}$, $m_{moc} = 2000 \text{ kg}$ chạy ngang với gia tốc $0.5 \text{ m/s}^2$. Hệ số ma sát của cả xe và móc với mặt đường là $\mu = 0.05$. Lấy $g = 10 \text{ m/s}^2$.
a) Tính lực kéo của động cơ xe.
b) Tính lực căng của cáp nối giữa xe và rơ-moóc.
[GIAI]
**Lời giải chi tiết:**
a) Xét toàn bộ hệ (xe + móc) khối lượng $M = 3000 + 2000 = 5000 \text{ kg}$.
- Lực ma sát toàn hệ: $F_{ms} = \mu M g = 0.05 \cdot 5000 \cdot 10 = 2500 \text{ N}$.
- ĐL II Newton cho cả hệ: $F_k - F_{ms} = M \cdot a$.
  $$F_k = F_{ms} + Ma = 2500 + 5000 \cdot 0.5 = 2500 + 2500 = 5000 \text{ N}$$
b) Xét riêng rơ-moóc (bị kéo bởi lực cáp $T$, cản bởi ma sát $F_{ms2}$):
- Khối lượng $m_2 = 2000 \text{ kg}$, $F_{ms2} = \mu m_2 g = 0.05 \cdot 2000 \cdot 10 = 1000 \text{ N}$.
- ĐL II Newton: $T - F_{ms2} = m_2 a$.
  $$T = F_{ms2} + m_2 a = 1000 + 2000 \cdot 0.5 = 1000 + 1000 = 2000 \text{ N}$$
[/GIAI]

**Bài 7 (Vận dụng):** Có hai lò xo giống hệt nhau được treo thẳng đứng. Lò xo 1 treo quả cân 100g thì dãn 2cm. Hỏi lò xo 2 treo quả cân 250g thì dãn bao nhiêu?
[GIAI]
**Lời giải chi tiết:**
- Lực đàn hồi cân bằng với trọng lượng: $F_{đh} = P \Rightarrow k \cdot \Delta l = mg$.
- Lập tỉ số: $\frac{\Delta l_1}{\Delta l_2} = \frac{m_1}{m_2}$.
- $\frac{2}{\Delta l_2} = \frac{100}{250} = \frac{2}{5} \Rightarrow \Delta l_2 = 5 \text{ cm}$.
[/GIAI]

**Bài 8 (Vận dụng):** Treo một vật $m = 1 \text{ kg}$ vào một sợi dây chịu được lực căng tối đa là 15 N. Khi kéo dây thẳng đứng lên trên với gia tốc $a$ thì dây đứt. Lấy $g = 10 \text{ m/s}^2$. Tìm giá trị nhỏ nhất của $a$.
[GIAI]
**Lời giải chi tiết:**
- ĐL II Newton: $T - P = m \cdot a \Rightarrow T = m(g+a)$.
- Để dây đứt thì $T > T_{\max}$.
- Tại biên đứt: $m(g+a) = 15 \Rightarrow 1 \cdot (10 + a) = 15 \Rightarrow a = 5 \text{ m/s}^2$.
- Vậy khi gia tốc $a \ge 5 \text{ m/s}^2$ dây sẽ bị đứt.
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Phát biểu nào sau đây là sai khi nói về lực ma sát trượt?
[A] Ngược chiều với chiều chuyển động tương đối.
[B] Phụ thuộc vào vật liệu và tình trạng của hai mặt tiếp xúc.
[*C] Tỉ lệ thuận với diện tích tiếp xúc giữa hai bề mặt.
[D] Tỉ lệ thuận với áp lực pháp tuyến.
[/QUIZ]

[QUIZ]
Câu 10: Nhận định nào sau đây phân biệt đúng giữa khối lượng và trọng lượng?
[A] Cả hai đều thay đổi khi thay đổi vị trí địa lý.
[B] Khối lượng đo bằng lực kế, trọng lượng đo bằng cân.
[*C] Khối lượng không đổi, còn trọng lượng phụ thuộc vào vị trí (gia tốc $g$).
[D] Khối lượng là đại lượng vectơ, trọng lượng là đại lượng vô hướng.
[/QUIZ]
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DB_PHY_10_CH3;
}