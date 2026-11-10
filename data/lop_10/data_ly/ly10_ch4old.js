/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU VẬT LÝ 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống / Chân trời sáng tạo / Cánh diều
   Chương IV: Năng lượng, Công, Công suất
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
   ========================================================================== */

const DATA_LY10_CH4 = {
    "PHY10-CH4-01": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương IV: Năng lượng, công, công suất",
        title: "Bài 23 & 24: Năng lượng. Công cơ học và Công suất",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương IV", "Bài 23-24"],
        theory: String.raw`
### 1. Năng lượng
- **Khái niệm:** Năng lượng là đại lượng đặc trưng cho khả năng sinh công của vật. Năng lượng không tự nhiên sinh ra hay mất đi, nó chỉ chuyển hóa từ dạng này sang dạng khác hoặc truyền từ vật này sang vật khác (Định luật bảo toàn năng lượng).
- **Đơn vị:** Joule (J).

### 2. Công cơ học ($A$)
📌 **Định nghĩa:** 
- Khi một lực $\vec{F}$ không đổi tác dụng lên một vật và điểm đặt của lực đó chuyển dời một đoạn $s$ theo hướng hợp với hướng của lực góc $\alpha$, thì công thực hiện bởi lực đó được tính bằng công thức:
  $$A = F \cdot s \cdot \cos \alpha$$
- Trong đó:
  - $F$: Độ lớn lực tác dụng (N).
  - $s$: Quãng đường vật dịch chuyển (m).
  - $\alpha$: Góc hợp bởi hướng của lực và hướng chuyển dời.
  - $A$: Công cơ học (J).

📌 **Biện luận giá trị của Công:**
- Khi $0^\circ \le \alpha < 90^\circ \Rightarrow \cos \alpha > 0 \Rightarrow A > 0$: Lực sinh **công phát động** (ví dụ: lực kéo).
- Khi $\alpha = 90^\circ \Rightarrow \cos \alpha = 0 \Rightarrow A = 0$: Lực **không sinh công** (ví dụ: trọng lực, phản lực khi vật chuyển động ngang).
- Khi $90^\circ < \alpha \le 180^\circ \Rightarrow \cos \alpha < 0 \Rightarrow A < 0$: Lực sinh **công cản** (ví dụ: lực ma sát, lực cản không khí).

### 3. Công suất ($P$)
📌 **Định nghĩa:** 
- Công suất là đại lượng đặc trưng cho tốc độ sinh công, được đo bằng công sinh ra trong một đơn vị thời gian.
  $$P = \frac{A}{t}$$
- Trong đó: 
  - $P$: Công suất (W - Watt). ($1 \text{ W} = 1 \text{ J/s}$; $1 \text{ kW} = 1000 \text{ W}$; $1 \text{ HP} \approx 746 \text{ W}$).
  - $A$: Công thực hiện (J).
  - $t$: Thời gian thực hiện công (s).

📌 **Mối liên hệ giữa công suất, lực và vận tốc:**
- Nếu vật chuyển động đều với vận tốc $v$ dưới tác dụng của lực $F$ cùng hướng chuyển động ($\alpha = 0^\circ$):
  $$P = \frac{F \cdot s}{t} = F \cdot v$$
- Nếu $v$ là vận tốc trung bình $\Rightarrow P$ là công suất trung bình.
- Nếu $v$ là vận tốc tức thời $\Rightarrow P$ là công suất tức thời.
        `,
        tips: String.raw`
- 💡 **Mẹo tính công của trọng lực:** 
  Công của trọng lực chỉ phụ thuộc vào sự chênh lệch độ cao giữa điểm đầu và điểm cuối, KHÔNG phụ thuộc vào hình dạng quỹ đạo. $A_P = \pm mgh$ (Dấu $+$ khi vật đi xuống, dấu $-$ khi vật đi lên).
- ⚠️ **Lỗi sai thường gặp:** 
  - Quên đổi đơn vị thời gian từ phút/giờ sang giây (s) khi tính công suất.
  - Nhầm lẫn giữa góc của mặt phẳng nghiêng và góc $\alpha$ trong công thức $A = Fscos\alpha$. Góc $\alpha$ là góc giữa **vectơ lực** và **vectơ vận tốc (độ dịch chuyển)**, không phải lúc nào cũng là góc nghiêng của mặt phẳng.
        `,
        practice: String.raw`
### Dạng 1: Tính Công cơ học
**Bài 1 (Cơ bản):** Một người kéo một thùng hàng trượt trên sàn nhà nằm ngang bằng một sợi dây hợp với phương ngang một góc $30^\circ$. Lực kéo có độ lớn 150 N. Thùng hàng trượt được quãng đường 10 m. Tính công của lực kéo.
[GIAI]
**Lời giải chi tiết:**
- Góc hợp bởi hướng của lực kéo và hướng chuyển dời là $\alpha = 30^\circ$.
- Quãng đường $s = 10 \text{ m}$, lực kéo $F = 150 \text{ N}$.
- Áp dụng công thức tính công cơ học:
  $$A = F \cdot s \cdot \cos \alpha = 150 \cdot 10 \cdot \cos 30^\circ = 1500 \cdot \frac{\sqrt{3}}{2} = 750\sqrt{3} \text{ (J)} \approx 1299 \text{ (J)}$$
- Vậy công của lực kéo là $1299 \text{ J}$.
[/GIAI]

**Bài 2 (Vận dụng):** Một vật khối lượng $m = 5 \text{ kg}$ trượt từ đỉnh một mặt phẳng nghiêng dài $s = 4 \text{ m}$, góc nghiêng $\beta = 30^\circ$ so với mặt phẳng ngang. Hệ số ma sát là $\mu = 0.1$. Lấy $g = 10 \text{ m/s}^2$. Tính công của trọng lực và công của lực ma sát khi vật đi hết mặt phẳng nghiêng.
[GIAI]
**Lời giải chi tiết:**
- **Công của trọng lực:** Trọng lực luôn hướng thẳng đứng xuống dưới. Góc giữa trọng lực và phương trượt là $\alpha = 90^\circ - \beta = 60^\circ$.
  $$A_P = P \cdot s \cdot \cos 60^\circ = (mg) \cdot s \cdot \cos 60^\circ = 5 \cdot 10 \cdot 4 \cdot 0.5 = 100 \text{ (J)}$$
  *(Cách khác: $A_P = mgh = mg(s \cdot \sin \beta) = 5 \cdot 10 \cdot (4 \cdot 0.5) = 100 \text{ J}$).*
- **Công của lực ma sát:** Lực ma sát luôn ngược chiều chuyển động $\Rightarrow \alpha = 180^\circ$.
  Độ lớn lực ma sát trên mp nghiêng: $F_{ms} = \mu \cdot N = \mu \cdot mg \cos \beta$.
  $$A_{ms} = F_{ms} \cdot s \cdot \cos 180^\circ = - (0.1 \cdot 5 \cdot 10 \cdot \cos 30^\circ) \cdot 4 = - 4.33 \cdot 4 \approx -17.32 \text{ (J)}$$
[/GIAI]

**Bài 3 (Vận dụng):** Một cần cẩu nâng một kiện hàng khối lượng 2 tấn thẳng đứng lên cao 5 m với gia tốc $0.5 \text{ m/s}^2$. Lấy $g = 10 \text{ m/s}^2$. Tính công của lực nâng của cần cẩu.
[GIAI]
**Lời giải chi tiết:**
- Các lực tác dụng lên kiện hàng: Lực nâng $\vec{F}$ (hướng lên) và Trọng lực $\vec{P}$ (hướng xuống).
- Chọn chiều dương hướng lên. Theo định luật II Newton: 
  $F - P = ma \Rightarrow F = P + ma = m(g + a)$
- Lực nâng của cần cẩu:
  $$F = 2000 \cdot (10 + 0.5) = 2000 \cdot 10.5 = 21000 \text{ (N)}$$
- Công của lực nâng (lực cùng chiều chuyển động $\alpha = 0^\circ$):
  $$A = F \cdot s = 21000 \cdot 5 = 105000 \text{ (J)} = 105 \text{ (kJ)}$$
[/GIAI]

### Dạng 2: Tính Công suất
**Bài 4 (Cơ bản):** Một máy bơm nước nâng $2000 \text{ lít}$ nước lên độ cao $15 \text{ m}$ trong thời gian $10 \text{ phút}$. Biết khối lượng riêng của nước là $1000 \text{ kg/m}^3$, lấy $g = 10 \text{ m/s}^2$. Tính công suất của máy bơm.
[GIAI]
**Lời giải chi tiết:**
- Đổi đơn vị: Thể tích $V = 2000 \text{ lít} = 2 \text{ m}^3$. Thời gian $t = 10 \text{ phút} = 600 \text{ s}$.
- Khối lượng của nước: $m = \rho \cdot V = 1000 \cdot 2 = 2000 \text{ (kg)}$.
- Công tối thiểu để nâng nước lên độ cao $15 \text{ m}$ bằng công của trọng lực (công thắng trọng lực):
  $$A = mgh = 2000 \cdot 10 \cdot 15 = 300000 \text{ (J)}$$
- Công suất của máy bơm:
  $$P = \frac{A}{t} = \frac{300000}{600} = 500 \text{ (W)}$$
[/GIAI]

**Bài 5 (Vận dụng):** Một ô tô khối lượng 1.5 tấn đang chuyển động thẳng đều trên đường nằm ngang với vận tốc $72 \text{ km/h}$. Biết lực cản tổng cộng tác dụng lên xe bằng $0.05$ lần trọng lượng của xe. Lấy $g = 10 \text{ m/s}^2$. Tính công suất của động cơ ô tô.
[GIAI]
**Lời giải chi tiết:**
- Đổi đơn vị: $v = 72 \text{ km/h} = 20 \text{ m/s}$. $m = 1500 \text{ kg}$.
- Xe chuyển động thẳng đều $\Rightarrow$ Lực kéo cân bằng với lực cản: $F_k = F_c$.
- Độ lớn lực kéo:
  $$F_k = 0.05 \cdot P = 0.05 \cdot (mg) = 0.05 \cdot (1500 \cdot 10) = 750 \text{ (N)}$$
- Công suất của động cơ ô tô:
  $$P = F_k \cdot v = 750 \cdot 20 = 15000 \text{ (W)} = 15 \text{ (kW)}$$
[/GIAI]

**Bài 6 (Vận dụng cao):** Một xe tải khối lượng 2.5 tấn bắt đầu khởi hành, chuyển động nhanh dần đều trên đường ngang. Sau khi đi được quãng đường 100 m thì đạt vận tốc $36 \text{ km/h}$. Hệ số ma sát giữa bánh xe và mặt đường là $\mu = 0.04$. Lấy $g = 10 \text{ m/s}^2$.
a) Tính công của động cơ thực hiện trên quãng đường đó.
b) Tính công suất trung bình và công suất cực đại của động cơ trên đoạn đường này.
[GIAI]
**Lời giải chi tiết:**
- Đổi đơn vị: $v = 36 \text{ km/h} = 10 \text{ m/s}$; $v_0 = 0$; $m = 2500 \text{ kg}$; $s = 100 \text{ m}$.
- Gia tốc của xe: $v^2 - v_0^2 = 2as \Rightarrow 10^2 - 0 = 2 \cdot a \cdot 100 \Rightarrow a = 0.5 \text{ (m/s}^2)$.
- Lực ma sát: $F_{ms} = \mu mg = 0.04 \cdot 2500 \cdot 10 = 1000 \text{ (N)}$.
- Theo ĐL II Newton ($F_k - F_{ms} = ma$):
  Lực kéo động cơ: $F_k = F_{ms} + ma = 1000 + 2500 \cdot 0.5 = 2250 \text{ (N)}$.
a) Công của động cơ:
   $$A = F_k \cdot s = 2250 \cdot 100 = 225000 \text{ (J)} = 225 \text{ (kJ)}$$
b) Thời gian xe đi đoạn đường này: $t = \frac{v - v_0}{a} = \frac{10}{0.5} = 20 \text{ (s)}$.
   - Công suất trung bình: 
     $$P_{tb} = \frac{A}{t} = \frac{225000}{20} = 11250 \text{ (W)} = 11.25 \text{ (kW)}$$
   - Công suất cực đại (tại thời điểm cuối đoạn đường, khi $v$ lớn nhất):
     $$P_{\max} = F_k \cdot v_{\max} = 2250 \cdot 10 = 22500 \text{ (W)} = 22.5 \text{ (kW)}$$
[/GIAI]

**Bài 7 (Nâng cao):** Một ô tô có công suất động cơ không đổi là $40 \text{ kW}$. Khi chạy trên đường bằng phẳng, vận tốc tối đa của xe là $108 \text{ km/h}$. Khi xe leo lên một dốc có độ nghiêng $5^\circ$ so với mặt ngang thì vận tốc tối đa của xe là bao nhiêu? Biết lực cản của không khí và ma sát là không đổi trong cả hai trường hợp. Khối lượng xe là 1.5 tấn, $g = 10 \text{ m/s}^2$.
[GIAI]
**Lời giải chi tiết:**
- Đổi: $P = 40000 \text{ W}$; $v_1 = 108 \text{ km/h} = 30 \text{ m/s}$; $m = 1500 \text{ kg}$.
- **Trường hợp 1 (Đường bằng):** Vận tốc tối đa đạt được khi lực kéo cân bằng với lực cản ($F_{k1} = F_c$).
  $$F_c = F_{k1} = \frac{P}{v_1} = \frac{40000}{30} = \frac{4000}{3} \text{ (N)}$$
- **Trường hợp 2 (Lên dốc):** Khi lên dốc, ngoài lực cản $F_c$, xe còn phải thắng thành phần trọng lực trượt xuống dốc là $P_x = mg \sin \alpha$.
  Để đạt vận tốc tối đa $v_2$, xe chuyển động đều $\Rightarrow F_{k2} = F_c + mg \sin \alpha$.
  $$F_{k2} = \frac{4000}{3} + 1500 \cdot 10 \cdot \sin 5^\circ \approx 1333.33 + 15000 \cdot 0.0872 = 1333.33 + 1308 = 2641.33 \text{ (N)}$$
- Vận tốc tối đa trên dốc:
  $$v_2 = \frac{P}{F_{k2}} = \frac{40000}{2641.33} \approx 15.14 \text{ (m/s)} \approx 54.5 \text{ (km/h)}$$
[/GIAI]

**Bài 8 (Vận dụng):** Một trực thăng khối lượng 3 tấn đang bay lơ lửng trên không trung. Biết lực nâng do cánh quạt tạo ra vừa đúng cân bằng với trọng lượng máy bay. Hỏi cánh quạt có sinh công không? Vì sao?
[GIAI]
**Lời giải chi tiết:**
- Công thức tính công: $A = F \cdot s \cdot \cos \alpha$.
- Trực thăng bay lơ lửng, tức là đứng yên so với mặt đất, nên độ dịch chuyển $s = 0$.
- Do đó, công cơ học do cánh quạt sinh ra lên máy bay là $A = 0$. 
- *(Lưu ý: Động cơ máy bay vẫn tiêu thụ nhiên liệu (năng lượng) để đẩy không khí xuống dưới, sinh công lên khối không khí, nhưng công cơ học làm dịch chuyển máy bay là bằng không).*
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Công cơ học là một đại lượng:
[A] Vectơ, có thể dương, âm hoặc bằng 0.
[B] Vô hướng, luôn luôn có giá trị dương.
[*C] Vô hướng, có thể dương, âm hoặc bằng 0.
[D] Vectơ, luôn luôn cùng hướng với lực tác dụng.
[/QUIZ]

[QUIZ]
Câu 10: Một động cơ có công suất không đổi. Nếu lực kéo của động cơ tăng lên 2 lần thì vận tốc chuyển động của vật sẽ:
[A] Tăng lên 2 lần.
[*B] Giảm đi 2 lần.
[C] Không thay đổi.
[D] Tăng lên 4 lần.
[/QUIZ]
        `
    },

    "PHY10-CH4-02": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương IV: Năng lượng, công, công suất",
        title: "Bài 25 & 26: Động năng, Thế năng và Bảo toàn cơ năng",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương IV", "Bài 25-26"],
        theory: String.raw`
### 1. Động năng ($W_d$)
- **Định nghĩa:** Là năng lượng mà vật có được do nó đang chuyển động.
- **Công thức:** 
  $$W_d = \frac{1}{2}mv^2$$
  *(Động năng là đại lượng vô hướng, luôn $\ge 0$ và phụ thuộc vào hệ quy chiếu).*
- **Định lý biến thiên động năng (Định lý động năng):** Độ biến thiên động năng của một vật bằng tổng công của các lực tác dụng lên vật.
  $$A = W_{d2} - W_{d1} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$
  - Nếu $A > 0 \Rightarrow W_{d2} > W_{d1}$: Động năng tăng.
  - Nếu $A < 0 \Rightarrow W_{d2} < W_{d1}$: Động năng giảm.

### 2. Thế năng trọng trường ($W_t$)
- **Định nghĩa:** Là dạng năng lượng tương tác giữa Trái Đất và vật, phụ thuộc vào vị trí của vật trong trọng trường.
- **Công thức:** 
  $$W_t = mgz$$ 
  *(Trong đó $z$ là độ cao của vật so với mốc thế năng. Nếu chọn mặt đất làm mốc thì $z=h$. Thế năng có thể âm, dương hoặc bằng 0 tùy thuộc cách chọn mốc).*
- **Liên hệ giữa công của trọng lực và độ giảm thế năng:**
  $$A_P = W_{t1} - W_{t2} = -\Delta W_t$$
  *(Công của trọng lực bằng độ giảm thế năng. Trọng lực là lực thế).*

### 3. Cơ năng và Định luật bảo toàn cơ năng ($W$)
- **Cơ năng:** Là tổng động năng và thế năng của vật.
  $$W = W_d + W_t = \frac{1}{2}mv^2 + mgz$$
- **Định luật bảo toàn cơ năng:** Khi một vật chuyển động chỉ dưới tác dụng của trọng lực (hoặc lực đàn hồi), tức là bỏ qua ma sát, lực cản... thì cơ năng của vật được bảo toàn.
  $$W_1 = W_2 \Leftrightarrow \frac{1}{2}mv_1^2 + mgz_1 = \frac{1}{2}mv_2^2 + mgz_2 = \text{const}$$
- **Hệ quả:** Trong quá trình chuyển động, nếu động năng tăng thì thế năng giảm (và ngược lại), năng lượng chuyển hóa qua lại nhưng tổng không đổi.

### 4. Định lý biến thiên cơ năng (Mở rộng cho trường hợp có lực cản)
- Khi vật chịu thêm tác dụng của các lực không thế (lực ma sát, lực cản, lực kéo...), cơ năng không bảo toàn. Độ biến thiên cơ năng bằng công của các lực cản/lực không thế.
  $$A_{k.the} = W_2 - W_1 = \Delta W$$
        `,
        tips: String.raw`
- 💡 **Quy tắc làm bài tập Cơ năng:** 
  - BƯỚC 1: Luôn chọn mốc thế năng (thường là mặt đất hoặc điểm thấp nhất của quỹ đạo) và ghi rõ trong bài làm.
  - BƯỚC 2: Tính cơ năng tại vị trí 1 (thường là lúc bắt đầu) và vị trí 2 (nơi cần tính đại lượng).
  - BƯỚC 3: Nếu KHÔNG CÓ ma sát $\rightarrow$ Cho $W_1 = W_2$. Nếu CÓ ma sát $\rightarrow$ Áp dụng $W_2 - W_1 = A_{ms}$.
- ⚠️ **Lỗi sai:** 
  - Áp dụng định luật bảo toàn cơ năng trong bài toán có ma sát.
  - Tính sai dấu $A_{ms}$ trong biểu thức biến thiên cơ năng (công lực ma sát phải mang dấu âm).
        `,
        practice: String.raw`
### Dạng 1: Áp dụng Định lý Động năng
**Bài 1 (Cơ bản):** Một viên đạn khối lượng $10 \text{ g}$ đang bay với vận tốc $800 \text{ m/s}$ thì xuyên vào một bức tường đất. Đạn cắm sâu $20 \text{ cm}$ vào tường rồi dừng lại. Tính lực cản trung bình của tường tác dụng lên viên đạn.
[GIAI]
**Lời giải chi tiết:**
- Đổi: $m = 10 \text{ g} = 0.01 \text{ kg}$; $v_1 = 800 \text{ m/s}$; $v_2 = 0 \text{ m/s}$ (dừng lại); $s = 20 \text{ cm} = 0.2 \text{ m}$.
- Áp dụng định lý biến thiên động năng:
  $$A_c = W_{d2} - W_{d1} \Rightarrow F_c \cdot s \cdot \cos 180^\circ = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$
  $$-F_c \cdot 0.2 = 0 - \frac{1}{2} \cdot 0.01 \cdot 800^2$$
  $$-F_c \cdot 0.2 = -3200 \Rightarrow F_c = \frac{-3200}{-0.2} = 16000 \text{ (N)}$$
- Vậy lực cản trung bình của tường là $16000 \text{ N}$.
[/GIAI]

**Bài 2 (Vận dụng):** Một ô tô khối lượng 2 tấn đang chạy với tốc độ $54 \text{ km/h}$ thì hãm phanh đột ngột, bánh xe trượt trên đường. Hệ số ma sát trượt là $\mu = 0.5$. Lấy $g = 10 \text{ m/s}^2$. Sử dụng định lý động năng, hãy tính quãng đường ô tô trượt được cho đến khi dừng hẳn.
[GIAI]
**Lời giải chi tiết:**
- Đổi $v_1 = 54 \text{ km/h} = 15 \text{ m/s}$. $v_2 = 0$. Khối lượng $m = 2000 \text{ kg}$.
- Lực ma sát: $F_{ms} = \mu mg$. Công của lực ma sát: $A_{ms} = -F_{ms} \cdot s = -\mu mgs$.
- Áp dụng định lý động năng: 
  $$A_{ms} = W_{d2} - W_{d1} \Rightarrow -\mu mgs = 0 - \frac{1}{2}mv_1^2$$
- Rút gọn $m$ ở hai vế, ta được:
  $$\mu gs = \frac{1}{2}v_1^2 \Rightarrow s = \frac{v_1^2}{2\mu g}$$
  $$s = \frac{15^2}{2 \cdot 0.5 \cdot 10} = \frac{225}{10} = 22.5 \text{ (m)}$$
[/GIAI]

### Dạng 2: Bảo toàn cơ năng (Không có lực cản)
**Bài 3 (Cơ bản):** Thả rơi tự do một vật khối lượng $m$ từ độ cao $45 \text{ m}$ so với mặt đất. Bỏ qua sức cản không khí. Lấy $g = 10 \text{ m/s}^2$. Sử dụng định luật bảo toàn cơ năng, tính vận tốc của vật lúc ngay trước khi chạm đất.
[GIAI]
**Lời giải chi tiết:**
- Chọn mốc thế năng tại mặt đất ($z=0$).
- Tại vị trí thả (Vị trí 1): $v_1 = 0 \Rightarrow W_{d1} = 0$; $z_1 = 45 \text{ m}$.
  $$Cơ năng: W_1 = W_{t1} = mgz_1$$
- Tại mặt đất (Vị trí 2): $z_2 = 0 \Rightarrow W_{t2} = 0$.
  $$Cơ năng: W_2 = W_{d2} = \frac{1}{2}mv_2^2$$
- Bỏ qua sức cản, cơ năng bảo toàn ($W_1 = W_2$):
  $$mgz_1 = \frac{1}{2}mv_2^2 \Rightarrow v_2 = \sqrt{2gz_1} = \sqrt{2 \cdot 10 \cdot 45} = \sqrt{900} = 30 \text{ (m/s)}$$
[/GIAI]

**Bài 4 (Vận dụng):** Từ mặt đất, ném một vật khối lượng $500 \text{ g}$ thẳng đứng lên trên với vận tốc $20 \text{ m/s}$. Bỏ qua lực cản không khí, lấy $g = 10 \text{ m/s}^2$. 
a) Tìm độ cao cực đại vật đạt được.
b) Ở độ cao nào thì động năng bằng 3 lần thế năng?
[GIAI]
**Lời giải chi tiết:**
- Chọn mốc thế năng tại mặt đất. 
- Cơ năng tại điểm ném (Vị trí 1): $W = \frac{1}{2}mv_0^2 + 0 = \frac{1}{2}m(20)^2 = 200m$ (J).
a) Tại độ cao cực đại (Vị trí 2): $v=0 \Rightarrow W_d = 0 \Rightarrow W = W_t = mgz_{\max}$.
   Bảo toàn cơ năng: $mgz_{\max} = \frac{1}{2}mv_0^2 \Rightarrow z_{\max} = \frac{v_0^2}{2g} = \frac{400}{20} = 20 \text{ (m)}$.
b) Tại vị trí động năng bằng 3 lần thế năng ($W_d = 3W_t$):
   Ta có: $W = W_d + W_t = 3W_t + W_t = 4W_t$.
   $\Rightarrow 4(mgz) = \frac{1}{2}mv_0^2 \Rightarrow z = \frac{v_0^2}{8g} = \frac{400}{80} = 5 \text{ (m)}$.
   Vậy ở độ cao 5m thì động năng bằng 3 lần thế năng.
[/GIAI]

**Bài 5 (Vận dụng cao):** Một con lắc đơn gồm sợi dây dài $l = 1 \text{ m}$, vật nặng $m = 200 \text{ g}$. Kéo con lắc lệch khỏi vị trí cân bằng một góc $\alpha_0 = 60^\circ$ rồi buông nhẹ. Bỏ qua sức cản không khí, lấy $g = 10 \text{ m/s}^2$. 
a) Tính vận tốc của vật nặng khi đi qua vị trí cân bằng.
b) Tính lực căng dây cực đại.
[GIAI]
**Lời giải chi tiết:**
- Chọn mốc thế năng tại vị trí cân bằng (điểm thấp nhất $O$).
- Độ cao của vật ở góc lệch $\alpha$: $z = l - l \cos \alpha = l(1 - \cos \alpha)$.
a) Vận tốc tại vị trí cân bằng ($O$):
   - Tại vị trí thả ($A$): $v = 0 \Rightarrow W_A = W_t = mgl(1 - \cos \alpha_0)$.
   - Tại VTCB ($O$): $z = 0 \Rightarrow W_O = W_d = \frac{1}{2}mv_O^2$.
   - Bảo toàn cơ năng: $\frac{1}{2}mv_O^2 = mgl(1 - \cos \alpha_0) \Rightarrow v_O = \sqrt{2gl(1 - \cos \alpha_0)}$.
     $v_O = \sqrt{2 \cdot 10 \cdot 1 \cdot (1 - \cos 60^\circ)} = \sqrt{20 \cdot 0.5} = \sqrt{10} \approx 3.16 \text{ (m/s)}$.
b) Lực căng dây tại VTCB là lớn nhất. Theo phương hướng tâm:
   $$T - P = m \cdot a_{ht} \Rightarrow T = mg + m\frac{v_O^2}{l}$$
   Thay số: $T = 0.2 \cdot 10 + 0.2 \cdot \frac{10}{1} = 2 + 2 = 4 \text{ (N)}$.
[/GIAI]

### Dạng 3: Biến thiên Cơ năng (Có lực ma sát/lực cản)
**Bài 6 (Vận dụng cao):** Một vật khối lượng $m = 1 \text{ kg}$ trượt không vận tốc đầu từ đỉnh mặt phẳng nghiêng cao $h = 5 \text{ m}$, dài $s = 10 \text{ m}$. Tốc độ của vật ở chân mặt phẳng nghiêng là $8 \text{ m/s}$. Lấy $g = 10 \text{ m/s}^2$.
a) Cơ năng có bảo toàn không? Vì sao?
b) Tính công của lực ma sát và độ lớn lực ma sát trên mặt phẳng nghiêng.
[GIAI]
**Lời giải chi tiết:**
- Chọn mốc thế năng tại chân mặt phẳng nghiêng.
- Cơ năng tại đỉnh ($A$): $W_A = W_{tA} + W_{dA} = mgh + 0 = 1 \cdot 10 \cdot 5 = 50 \text{ (J)}$.
- Cơ năng tại chân ($B$): $W_B = W_{tB} + W_{dB} = 0 + \frac{1}{2}mv_B^2 = \frac{1}{2} \cdot 1 \cdot 8^2 = 32 \text{ (J)}$.
a) Ta thấy $W_B < W_A$ (32 J < 50 J) $\Rightarrow$ Cơ năng không bảo toàn do có sự tiêu hao năng lượng bởi lực ma sát.
b) Áp dụng định lý biến thiên cơ năng:
   $$A_{ms} = W_B - W_A = 32 - 50 = -18 \text{ (J)}$$
   - Độ lớn lực ma sát:
     Vì $A_{ms} = -F_{ms} \cdot s \Rightarrow -18 = -F_{ms} \cdot 10 \Rightarrow F_{ms} = 1.8 \text{ (N)}$.
[/GIAI]

**Bài 7 (Nâng cao):** Một hòn đá khối lượng $200 \text{ g}$ được ném thẳng đứng lên cao với vận tốc $15 \text{ m/s}$ từ độ cao $2 \text{ m}$ so với mặt đất. Do có lực cản của không khí nên vật chỉ đạt độ cao cực đại là $12 \text{ m}$ so với mặt đất. Tính độ lớn trung bình của lực cản không khí. Lấy $g = 10 \text{ m/s}^2$.
[GIAI]
**Lời giải chi tiết:**
- Chọn mốc thế năng tại mặt đất. $m = 0.2 \text{ kg}$.
- Cơ năng tại vị trí ném (1): $W_1 = \frac{1}{2}mv_1^2 + mgz_1 = \frac{1}{2}(0.2)(15)^2 + (0.2)(10)(2) = 22.5 + 4 = 26.5 \text{ (J)}$.
- Cơ năng tại độ cao cực đại (2): $v_2 = 0 \Rightarrow W_2 = mgz_2 = (0.2)(10)(12) = 24 \text{ (J)}$.
- Độ biến thiên cơ năng bằng công của lực cản (lực cản luôn ngược chiều chuyển động nên $A_c = -F_c \cdot s$).
- Quãng đường vật đi lên: $s = z_2 - z_1 = 12 - 2 = 10 \text{ m}$.
  $$A_c = W_2 - W_1 = 24 - 26.5 = -2.5 \text{ (J)}$$
- Tính lực cản: $-F_c \cdot 10 = -2.5 \Rightarrow F_c = 0.25 \text{ (N)}$.
[/GIAI]

**Bài 8 (Nâng cao):** Một vật khối lượng $M$ được gắn vào đầu một lò xo nhẹ nằm ngang có độ cứng $k = 100 \text{ N/m}$. Nén lò xo lại một đoạn $5 \text{ cm}$ rồi buông nhẹ. Bỏ qua mọi ma sát. Tính động năng cực đại của vật trong quá trình dao động.
[GIAI]
**Lời giải chi tiết:**
- Đối với hệ lò xo nằm ngang, thế năng là thế năng đàn hồi $W_t = \frac{1}{2}k(\Delta l)^2$.
- Chọn mốc thế năng tại vị trí lò xo không biến dạng. Bỏ qua ma sát nên cơ năng bảo toàn.
- Cơ năng tại vị trí nén (Vị trí 1): $W_1 = W_t = \frac{1}{2}k(\Delta l_{\max})^2 = \frac{1}{2} \cdot 100 \cdot (0.05)^2 = 0.125 \text{ (J)}$.
- Động năng cực đại khi vật qua vị trí cân bằng (thế năng đàn hồi bằng 0). 
  $$W_{d\max} = W_1 = 0.125 \text{ (J)}$$
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Khi một vật rơi tự do từ trên cao xuống đất, đại lượng nào sau đây không đổi?
[A] Động năng.
[B] Thế năng.
[*C] Cơ năng.
[D] Vận tốc.
[/QUIZ]

[QUIZ]
Câu 10: Hai vật có khối lượng $m_1 = 2m_2$ chuyển động với vận tốc $v_1 = \frac{v_2}{2}$. Tỉ số động năng $\frac{W_{d1}}{W_{d2}}$ là:
[A] 2
[B] 1
[*C] 0.5
[D] 4
[/QUIZ]
        `
    },

    "PHY10-CH4-03": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương IV: Năng lượng, công, công suất",
        title: "Bài 27: Hiệu suất & Bài toán năng lượng thực tế",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương IV", "Bài 27"],
        theory: String.raw`
### 1. Năng lượng hữu ích và năng lượng hao phí
- Trong mọi quá trình biến đổi hoặc truyền năng lượng, tổng năng lượng luôn được bảo toàn.
- Tuy nhiên, phần năng lượng cung cấp ban đầu ($W_{tp}$ - toàn phần) luôn bị chia làm hai phần:
  1. **Năng lượng có ích ($W_{ci}$):** Phần năng lượng được chuyển thành dạng mà ta mong muốn phục vụ cho mục đích sử dụng (ví dụ: cơ năng để nâng vật, nhiệt năng để đun nước).
  2. **Năng lượng hao phí ($W_{hp}$):** Phần năng lượng không mong muốn, thường tỏa ra môi trường dưới dạng nhiệt do ma sát, tỏa nhiệt trên dây dẫn...
  $$W_{tp} = W_{ci} + W_{hp}$$
  Tương đương với Công: $A_{tp} = A_{ci} + A_{hp}$.

### 2. Hiệu suất ($H$)
- **Định nghĩa:** Hiệu suất của một máy, một động cơ hay một quá trình chuyển hóa năng lượng là đại lượng đo bằng tỉ số giữa phần năng lượng có ích và phần năng lượng toàn phần đã cung cấp.
- **Công thức:**
  $$H = \frac{W_{ci}}{W_{tp}} \cdot 100\% = \frac{A_{ci}}{A_{tp}} \cdot 100\%$$
- **Liên hệ với Công suất:** Chia cả tử và mẫu cho thời gian $t$, ta có:
  $$H = \frac{P_{ci}}{P_{tp}} \cdot 100\%$$
  - Trong đó: 
    + $P_{ci}$ là công suất có ích (công suất cơ học sinh ra).
    + $P_{tp}$ là công suất toàn phần (công suất tiêu thụ điện, công suất do đốt cháy nhiên liệu...).
- Vì luôn có hao phí nên hiệu suất của mọi máy móc luôn nhỏ hơn 100% ($H < 1$).
        `,
        tips: String.raw`
- 💡 **Mẹo xác định Hữu ích và Toàn phần:**
  - Lấy máy bơm nước điện làm ví dụ: Điện năng cung cấp cho máy là **Toàn phần**. Năng lượng nâng nước lên cao là **Có ích**. Nhiệt làm nóng máy bơm là **Hao phí**.
  - Mặt phẳng nghiêng: Công nâng vật trực tiếp lên theo phương thẳng đứng ($A = Ph$) là **Có ích**. Công kéo vật dọc theo mặt phẳng nghiêng ($A = Fs$) là **Toàn phần**. Hao phí là công thắng lực ma sát.
        `,
        practice: String.raw`
### Dạng 1: Hiệu suất máy cơ đơn giản (Mặt phẳng nghiêng, ròng rọc)
**Bài 1 (Cơ bản):** Một công nhân dùng hệ thống ròng rọc để nâng một vật nặng $40 \text{ kg}$ lên cao $5 \text{ m}$. Lực kéo mà người công nhân phải tác dụng lên dây kéo là $250 \text{ N}$. Biết khi vật lên cao $5 \text{ m}$ thì đoạn dây kéo phải di chuyển $10 \text{ m}$. Lấy $g = 10 \text{ m/s}^2$. Tính hiệu suất của ròng rọc.
[GIAI]
**Lời giải chi tiết:**
- Công có ích (để đưa vật lên cao $h = 5\text{m}$ trực tiếp):
  $$A_{ci} = P \cdot h = mgh = 40 \cdot 10 \cdot 5 = 2000 \text{ (J)}$$
- Công toàn phần (do lực kéo của công nhân thực hiện với $s = 10\text{m}$):
  $$A_{tp} = F \cdot s = 250 \cdot 10 = 2500 \text{ (J)}$$
- Hiệu suất của hệ thống:
  $$H = \frac{A_{ci}}{A_{tp}} \cdot 100\% = \frac{2000}{2500} \cdot 100\% = 80\%$$
[/GIAI]

**Bài 2 (Vận dụng):** Dùng một mặt phẳng nghiêng dài $10 \text{ m}$ để đưa một vật khối lượng $150 \text{ kg}$ lên cao $2 \text{ m}$. Lực kéo dọc theo mặt phẳng nghiêng là $400 \text{ N}$. Lấy $g = 10 \text{ m/s}^2$. 
a) Tính công có ích và công toàn phần.
b) Tính hiệu suất của mặt phẳng nghiêng và lực ma sát trên mặt phẳng nghiêng.
[GIAI]
**Lời giải chi tiết:**
a) Công có ích (đưa vật lên cao):
   $$A_{ci} = mgh = 150 \cdot 10 \cdot 2 = 3000 \text{ (J)}$$
   Công toàn phần (lực kéo):
   $$A_{tp} = F \cdot s = 400 \cdot 10 = 4000 \text{ (J)}$$
b) Hiệu suất của mặt phẳng nghiêng:
   $$H = \frac{A_{ci}}{A_{tp}} \cdot 100\% = \frac{3000}{4000} \cdot 100\% = 75\%$$
   Công hao phí chính là công thắng lực ma sát:
   $$A_{ms} = A_{tp} - A_{ci} = 4000 - 3000 = 1000 \text{ (J)}$$
   Độ lớn lực ma sát: $F_{ms} = \frac{A_{ms}}{s} = \frac{1000}{10} = 100 \text{ (N)}$.
[/GIAI]

### Dạng 2: Hiệu suất động cơ, máy bơm
**Bài 3 (Vận dụng):** Một động cơ điện tiêu thụ công suất điện $2.5 \text{ kW}$. Nó được dùng để kéo một thang máy khối lượng $800 \text{ kg}$ lên cao với vận tốc không đổi $0.25 \text{ m/s}$. Lấy $g = 10 \text{ m/s}^2$. Tính hiệu suất của động cơ.
[GIAI]
**Lời giải chi tiết:**
- Công suất toàn phần do điện cung cấp: $P_{tp} = 2.5 \text{ kW} = 2500 \text{ W}$.
- Thang máy đi lên đều, lực kéo cân bằng với trọng lượng: $F_k = P = mg = 8000 \text{ N}$.
- Công suất có ích để nâng thang máy:
  $$P_{ci} = F_k \cdot v = 8000 \cdot 0.25 = 2000 \text{ (W)}$$
- Hiệu suất của động cơ:
  $$H = \frac{P_{ci}}{P_{tp}} \cdot 100\% = \frac{2000}{2500} \cdot 100\% = 80\%$$
[/GIAI]

**Bài 4 (Vận dụng cao):** Một máy bơm nước có hiệu suất $70\%$ cần bơm $50 \text{ m}^3$ nước lên hồ chứa ở độ cao $20 \text{ m}$ trong thời gian 1 giờ. Lấy $g = 10 \text{ m/s}^2$, khối lượng riêng của nước là $1000 \text{ kg/m}^3$. Tính công suất điện mà máy bơm tiêu thụ.
[GIAI]
**Lời giải chi tiết:**
- Khối lượng nước cần bơm: $m = 1000 \cdot 50 = 50000 \text{ kg}$.
- Đổi thời gian: $t = 1 \text{ h} = 3600 \text{ s}$.
- Công có ích để nâng nước:
  $$A_{ci} = mgh = 50000 \cdot 10 \cdot 20 = 10000000 \text{ (J)} = 10 \cdot 10^6 \text{ (J)}$$
- Công suất có ích:
  $$P_{ci} = \frac{A_{ci}}{t} = \frac{10000000}{3600} \approx 2777.78 \text{ (W)}$$
- Từ công thức hiệu suất $H = \frac{P_{ci}}{P_{tp}} \Rightarrow P_{tp} = \frac{P_{ci}}{H}$.
  Công suất điện máy bơm tiêu thụ (Công suất toàn phần):
  $$P_{tp} = \frac{2777.78}{0.70} \approx 3968.26 \text{ (W)} \approx 3.97 \text{ (kW)}$$
[/GIAI]

**Bài 5 (Vận dụng cao):** Động cơ của một chiếc ô tô có hiệu suất $25\%$. Khi ô tô chạy trên đường ngang với tốc độ không đổi $72 \text{ km/h}$ thì lực cản tổng cộng lên xe là $1000 \text{ N}$. Tính lượng năng lượng toàn phần (nhiên liệu) mà động cơ tiêu thụ để xe chạy được 1 giờ. 
[GIAI]
**Lời giải chi tiết:**
- Đổi: $v = 72 \text{ km/h} = 20 \text{ m/s}$. $t = 1 \text{ h} = 3600 \text{ s}$.
- Ô tô chạy đều, lực kéo của động cơ bằng lực cản: $F_k = 1000 \text{ N}$.
- Quãng đường xe chạy trong 1 giờ: $s = v \cdot t = 20 \cdot 3600 = 72000 \text{ m}$.
- Công có ích động cơ thực hiện để xe chạy (chống lại lực cản):
  $$A_{ci} = F_k \cdot s = 1000 \cdot 72000 = 72 \cdot 10^6 \text{ (J)}$$
- Hiệu suất $H = 25\% = 0.25$. Năng lượng toàn phần (nhiên liệu) tiêu thụ:
  $$A_{tp} = \frac{A_{ci}}{H} = \frac{72 \cdot 10^6}{0.25} = 288 \cdot 10^6 \text{ (J)} = 288 \text{ (MJ)}$$
[/GIAI]

### Dạng 3: Bài toán thủy điện
**Bài 6 (Nâng cao):** Một thác nước cao $40 \text{ m}$, lưu lượng nước chảy là $50 \text{ m}^3\text{/s}$. Lợi dụng thác nước này người ta xây dựng một nhà máy thủy điện. Biết hiệu suất của tua-bin là $80\%$, khối lượng riêng của nước là $1000 \text{ kg/m}^3$, $g = 9.8 \text{ m/s}^2$. Công suất phát điện của nhà máy này là bao nhiêu?
[GIAI]
**Lời giải chi tiết:**
- Lưu lượng $L = 50 \text{ m}^3\text{/s}$ nghĩa là cứ 1 giây, thể tích nước đổ xuống là $V = 50 \text{ m}^3$.
- Khối lượng nước đổ xuống trong 1 giây: $m = \rho V = 1000 \cdot 50 = 50000 \text{ kg}$.
- Năng lượng toàn phần của dòng nước mang lại trong 1 giây chính là độ giảm thế năng:
  $$P_{tp} = \frac{mgh}{t} = \frac{50000 \cdot 9.8 \cdot 40}{1} = 19600000 \text{ (W)} = 19.6 \text{ (MW)}$$
- Công suất phát điện (công suất có ích của nhà máy):
  $$P_{ci} = P_{tp} \cdot H = 19.6 \cdot 0.8 = 15.68 \text{ (MW)}$$
[/GIAI]

**Bài 7 (Nâng cao):** Một ô tô khối lượng 1 tấn leo dốc với góc nghiêng $5^\circ$ với vận tốc không đổi $36 \text{ km/h}$. Lực ma sát và lực cản không khí bằng 5% trọng lượng xe. Công suất toàn phần của động cơ là $30 \text{ kW}$. Hãy tính hiệu suất của động cơ ô tô. Lấy $g = 10 \text{ m/s}^2$.
[GIAI]
**Lời giải chi tiết:**
- Đổi: $m = 1000 \text{ kg}$; $v = 10 \text{ m/s}$; $P_{tp} = 30000 \text{ W}$. Trọng lượng $P = 10000 \text{ N}$.
- Khi leo dốc, lực kéo của xe phải thắng 2 thành phần cản: Lực cản ma sát không khí và Thành phần trọng lực kéo xuống.
- $F_{cản} = 0.05 P = 0.05 \cdot 10000 = 500 \text{ N}$.
- Thành phần trọng lực dọc dốc: $P_x = P \sin 5^\circ = 10000 \cdot 0.0871 = 871 \text{ N}$.
- Xe đi đều nên lực kéo có ích là: $F_k = F_{cản} + P_x = 500 + 871 = 1371 \text{ N}$.
- Công suất có ích của động cơ:
  $$P_{ci} = F_k \cdot v = 1371 \cdot 10 = 13710 \text{ (W)}$$
- Hiệu suất của động cơ xe:
  $$H = \frac{P_{ci}}{P_{tp}} \cdot 100\% = \frac{13710}{30000} \cdot 100\% = 45.7\%$$
[/GIAI]

**Bài 8 (Nâng cao):** Một máy kéo dùng để kéo một thùng gỗ khối lượng 2 tấn trượt trên mặt đất ngang. Hệ số ma sát là 0.2. Máy kéo chuyển động với vận tốc 18 km/h. Nếu máy kéo làm việc liên tục trong 1 giờ và hiệu suất động cơ là 40%, hãy tính công toàn phần mà động cơ sinh ra và lượng dầu diesel tiêu thụ. Biết năng suất tỏa nhiệt của dầu diesel là $q = 4.2 \cdot 10^7 \text{ J/kg}$, $g = 10 \text{ m/s}^2$.
[GIAI]
**Lời giải chi tiết:**
- Lực ma sát: $F_{ms} = \mu mg = 0.2 \cdot 2000 \cdot 10 = 4000 \text{ (N)}$.
- Do xe đi đều, lực kéo có ích: $F_k = F_{ms} = 4000 \text{ N}$.
- Vận tốc $v = 18 \text{ km/h} = 5 \text{ m/s}$. Công suất có ích:
  $$P_{ci} = F_k \cdot v = 4000 \cdot 5 = 20000 \text{ (W)}$$
- Công có ích trong 1 giờ ($3600 \text{ s}$):
  $$A_{ci} = P_{ci} \cdot t = 20000 \cdot 3600 = 7.2 \cdot 10^7 \text{ (J)}$$
- Công toàn phần của động cơ sinh ra:
  $$A_{tp} = \frac{A_{ci}}{H} = \frac{7.2 \cdot 10^7}{0.40} = 18 \cdot 10^7 \text{ (J)}$$
- Lượng dầu diesel tiêu thụ: $A_{tp} = m_{dầu} \cdot q \Rightarrow m_{dầu} = \frac{A_{tp}}{q}$.
  $$m_{dầu} = \frac{18 \cdot 10^7}{4.2 \cdot 10^7} \approx 4.29 \text{ (kg)}$$
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Hiệu suất của một quá trình biến đổi năng lượng được xác định bằng:
[A] Tỉ số giữa công suất hao phí và công suất toàn phần.
[*B] Tỉ số giữa năng lượng có ích và năng lượng toàn phần.
[C] Hiệu số giữa năng lượng toàn phần và năng lượng hao phí.
[D] Tích của công suất có ích và thời gian thực hiện.
[/QUIZ]

[QUIZ]
Câu 10: Tại sao hiệu suất của một động cơ thực tế luôn nhỏ hơn 1 (100%)?
[A] Vì động cơ luôn hoạt động chậm hơn thiết kế.
[B] Vì nhiên liệu cháy không sinh ra nhiệt lượng.
[*C] Vì luôn có một phần năng lượng bị chuyển hóa thành các dạng năng lượng không mong muốn (như nhiệt năng do ma sát).
[D] Vì công suất động cơ không đủ lớn để chuyển hóa hết năng lượng.
[/QUIZ]
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DB_PHY_10_CH4;
}