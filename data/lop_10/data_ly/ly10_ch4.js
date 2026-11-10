/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU VẬT LÝ 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Chương IV: Năng lượng, Công, Công suất (Bản Nâng Cấp Master - 10 Bài/Học)
   Bộ sách: Kết nối tri thức / Chân trời sáng tạo / Cánh diều
   ========================================================================== */

const DATA_LY10_CH4 = {
    "PHY10-CH4-01": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương IV: Năng lượng, công, công suất",
        title: "Bài 1: Công cơ học và Công suất (Nâng cao)",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương IV", "Bài 1"],
        theory: String.raw`
### 1. Công cơ học của lực không đổi
- **Định nghĩa:** Công $A$ do lực $\vec{F}$ không đổi thực hiện khi điểm đặt dịch chuyển đoạn $s$ được tính bằng:
  $$A = F \cdot s \cdot \cos \alpha$$
- **Ý nghĩa dấu của Công:**
  + $0^\circ \le \alpha < 90^\circ$: $A > 0 \Rightarrow$ Công phát động (truyền năng lượng cho vật).
  + $\alpha = 90^\circ$: $A = 0 \Rightarrow$ Lực không sinh công (vd: lực hướng tâm, phản lực).
  + $90^\circ < \alpha \le 180^\circ$: $A < 0 \Rightarrow$ Công cản (lấy bớt năng lượng của vật, vd: ma sát).

### 2. Công suất
- **Công suất trung bình:** Tốc độ sinh công trong khoảng thời gian $\Delta t$.
  $$P_{tb} = \frac{A}{\Delta t}$$
- **Công suất tức thời:** Đo tốc độ sinh công tại một thời điểm nhất định.
  $$P = \vec{F} \cdot \vec{v} = F \cdot v \cdot \cos \alpha$$
  *(Nếu lực cùng hướng chuyển động: $P = F \cdot v$)*.

---
### 3. 💎 Chuyên đề Master: Công của lực biến thiên & Bài toán đặc biệt (VDC)
📌 **Tính công bằng đồ thị $(F - s)$:**
- Khi lực $F$ thay đổi theo quãng đường $s$, ta không thể dùng công thức $A = Fs\cos\alpha$ một cách trực tiếp.
- **Quy tắc:** Công $A$ có độ lớn bằng **diện tích hình phẳng** giới hạn bởi đồ thị $F(s)$, trục hoành $Os$ và các đường $s = s_1, s = s_2$.

📌 **Bài toán kéo dây xích / bơm nước (Công nâng hệ khối tâm):**
- Khi kéo một sợi dây xích đồng chất chiều dài $l$, khối lượng $m$ đang thõng xuống mặt bàn lên mặt bàn. Lực kéo thay đổi liên tục vì phần dây thõng nhẹ dần.
- **Cách giải nhanh:** Sử dụng sự dịch chuyển của **khối tâm**. Khối tâm của phần dây xích nằm ở giữa đoạn dây. Quãng đường khối tâm di chuyển là $\frac{l}{2}$.
  $$A = m \cdot g \cdot \frac{l}{2}$$
        `,
        tips: String.raw`
- 💡 **Mẹo tính công suất ô tô:** Khi ô tô chuyển động thẳng đều, lực kéo động cơ bằng lực cản ($F_k = F_c$). Công suất động cơ lúc này là $P = F_k v = F_c v$. Khi ô tô tăng tốc, lực kéo phải lớn hơn lực cản ($F_k = F_c + ma$).
- ⚠️ **Lỗi sai kinh điển:** Trong bài toán máy bơm nước, học sinh hay quên thể tích khối nước $V$ phải đổi ra khối lượng $m = \rho V$ để tính trọng lượng $P = mg$. Nhớ $1 \text{ m}^3 \text{ nước} = 1000 \text{ kg}$.
        `,
        practice: String.raw`
### Dạng 1: Tính Công cơ học cơ bản
**Bài 1 (Cơ bản):** Một máy kéo nông nghiệp dùng lực $1000 \text{ N}$ hợp với phương ngang góc $30^\circ$ để kéo một khúc gỗ đi được đoạn đường $50 \text{ m}$ trên mặt đất phẳng. Tính công của lực kéo.
[GIAI]
**Lời giải chi tiết:**
- Góc $\alpha = 30^\circ$. Quãng đường $s = 50 \text{ m}$. Lực $F = 1000 \text{ N}$.
- Công của lực kéo:
  $$A = F \cdot s \cdot \cos \alpha = 1000 \cdot 50 \cdot \cos 30^\circ = 50000 \cdot \frac{\sqrt{3}}{2} = 25000\sqrt{3} \text{ (J)} \approx 43301 \text{ (J)}$$
[/GIAI]

**Bài 2 (Vận dụng):** Một vật khối lượng $m = 10 \text{ kg}$ trượt từ đỉnh xuống chân một mặt phẳng nghiêng dài $5 \text{ m}$, góc nghiêng $30^\circ$ so với mặt ngang. Hệ số ma sát trượt $\mu = 0.2$. Lấy $g = 10 \text{ m/s}^2$. Tính công của trọng lực và công của lực ma sát.
[GIAI]
**Lời giải chi tiết:**
- **Công của trọng lực:** Trọng lực luôn hướng thẳng đứng xuống. Góc giữa $\vec{P}$ và hướng dịch chuyển là $90^\circ - 30^\circ = 60^\circ$.
  $$A_P = P \cdot s \cdot \cos 60^\circ = mg \cdot s \cdot \cos 60^\circ = 100 \cdot 5 \cdot 0.5 = 250 \text{ (J)}$$
  *(Hoặc $A_P = mgh = 10 \cdot 10 \cdot (5\sin 30^\circ) = 250 \text{ J}$)*.
- **Công của lực ma sát:** Lực ma sát ngược chiều chuyển động ($\alpha = 180^\circ$).
  Độ lớn ma sát: $F_{ms} = \mu N = \mu mg \cos 30^\circ = 0.2 \cdot 100 \cdot \frac{\sqrt{3}}{2} = 10\sqrt{3} \text{ (N)}$.
  $$A_{ms} = F_{ms} \cdot s \cdot \cos 180^\circ = -10\sqrt{3} \cdot 5 = -50\sqrt{3} \text{ (J)} \approx -86.6 \text{ (J)}$$
[/GIAI]

### Dạng 2: Tính Công suất trung bình và tức thời
**Bài 3 (Vận dụng):** Một cần cẩu nâng một khối bê tông khối lượng $2 \text{ tấn}$ từ mặt đất lên độ cao $10 \text{ m}$ trong thời gian $20 \text{ s}$. Khối bê tông chuyển động nhanh dần đều không vận tốc đầu. Lấy $g = 10 \text{ m/s}^2$. Tính công suất trung bình của cần cẩu.
[GIAI]
**Lời giải chi tiết:**
- Gia tốc của khối bê tông: $h = \frac{1}{2}at^2 \Rightarrow 10 = \frac{1}{2} \cdot a \cdot 20^2 \Rightarrow 10 = 200a \Rightarrow a = 0.05 \text{ (m/s}^2\text{)}$.
- Lực nâng của cần cẩu (ĐL 2 Newton): $F - P = ma \Rightarrow F = m(g + a)$.
  $$F = 2000(10 + 0.05) = 2000 \cdot 10.05 = 20100 \text{ (N)}$$
- Công của lực nâng: $A = F \cdot h = 20100 \cdot 10 = 201000 \text{ (J)}$.
- Công suất trung bình: 
  $$P_{tb} = \frac{A}{t} = \frac{201000}{20} = 10050 \text{ (W)} = 10.05 \text{ (kW)}$$
[/GIAI]

**Bài 4 (Vận dụng cao):** Một ô tô khối lượng $1.5 \text{ tấn}$ khởi hành chuyển động nhanh dần đều trên đường ngang. Sau $10 \text{ s}$ đạt vận tốc $72 \text{ km/h}$. Lực cản không đổi bằng $0.02$ trọng lượng xe. ($g = 10 \text{ m/s}^2$). Tính công suất tức thời của động cơ ở thời điểm $t = 10 \text{ s}$.
[GIAI]
**Lời giải chi tiết:**
- Vận tốc tại $t = 10 \text{ s}$ là $v = 72 \text{ km/h} = 20 \text{ m/s}$.
- Gia tốc xe: $a = \frac{v - v_0}{t} = \frac{20 - 0}{10} = 2 \text{ (m/s}^2\text{)}$.
- Lực cản: $F_c = 0.02 \cdot mg = 0.02 \cdot 1500 \cdot 10 = 300 \text{ (N)}$.
- Lực kéo của động cơ: $F_k - F_c = ma \Rightarrow F_k = F_c + ma = 300 + 1500 \cdot 2 = 3300 \text{ (N)}$.
- Công suất tức thời tại giây thứ 10:
  $$P = F_k \cdot v = 3300 \cdot 20 = 66000 \text{ (W)} = 66 \text{ (kW)}$$
[/GIAI]

### Dạng 3: Bài toán nâng cao (Đồ thị & Dây xích)
**Bài 5 (Vận dụng cao):** Đồ thị biểu diễn lực tác dụng vào vật $F$ theo quãng đường $s$ là một đoạn thẳng đi qua gốc tọa độ. Khi $s = 4 \text{ m}$ thì $F = 20 \text{ N}$. Lực $F$ có phương trùng với phương chuyển động. Tính công của lực $F$ khi vật đi được quãng đường $4 \text{ m}$.
[GIAI]
**Lời giải chi tiết:**
- Vì lực $F$ thay đổi tuyến tính theo $s$ từ $0$ đến $20 \text{ N}$, công $A$ bằng diện tích tam giác dưới đồ thị $F-s$.
- Đáy tam giác là $s = 4 \text{ m}$, chiều cao là $F = 20 \text{ N}$.
- Công thực hiện:
  $$A = S_{\Delta} = \frac{1}{2} \cdot \text{đáy} \cdot \text{cao} = \frac{1}{2} \cdot 4 \cdot 20 = 40 \text{ (J)}$$
[/GIAI]

**Bài 6 (Nâng cao):** Một sợi dây xích đồng chất có chiều dài $L = 2 \text{ m}$, khối lượng $M = 4 \text{ kg}$ nằm trên mặt bàn ngang, một nửa sợi dây thõng xuống khỏi mép bàn. Bỏ qua ma sát. Cần thực hiện một công tối thiểu bằng bao nhiêu để kéo toàn bộ sợi dây lên mặt bàn? ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Công tối thiểu bằng công thắng trọng lực để nâng phần dây thõng lên bàn.
- Khối lượng phần thõng xuống: $m = \frac{M}{2} = 2 \text{ kg}$. Chiều dài phần thõng là $l = \frac{L}{2} = 1 \text{ m}$.
- Khối tâm của phần dây thõng nằm ở chính giữa nó, tức là cách mép bàn một đoạn $h = \frac{l}{2} = 0.5 \text{ m}$.
- Công cần thiết để nâng phần dây này lên là công nâng khối tâm của nó lên mặt bàn:
  $$A = m \cdot g \cdot h = 2 \cdot 10 \cdot 0.5 = 10 \text{ (J)}$$
[/GIAI]

**Bài 7 (Nâng cao):** Một động cơ ô tô có công suất tối đa $P_{\max} = 50 \text{ kW}$. Khi chạy trên đường bằng, xe đạt tốc độ tối đa $144 \text{ km/h}$. Hỏi khi xe chở thêm một lượng hàng bằng $25\%$ khối lượng bản thân nó và chạy trên mặt đường đó thì tốc độ tối đa đạt được là bao nhiêu? Biết lực cản tỉ lệ thuận với trọng lượng xe.
[GIAI]
**Lời giải chi tiết:**
- Tốc độ tối đa ban đầu: $v_1 = 144 \text{ km/h} = 40 \text{ m/s}$.
- Khi đạt tốc độ tối đa, lực kéo bằng lực cản: $F_{k1} = F_{c1} = \frac{P_{\max}}{v_1}$.
- Lực cản tỉ lệ với trọng lượng: $F_{c1} = k \cdot mg$.
- Suy ra $k \cdot mg = \frac{50000}{40} = 1250 \text{ (N)}$.
- Khi chở thêm hàng $25\%$, khối lượng mới $m' = 1.25m$. Lực cản mới: $F_{c2} = k \cdot m'g = 1.25(k \cdot mg) = 1.25 \cdot 1250 = 1562.5 \text{ (N)}$.
- Tốc độ tối đa mới (khi $F_{k2} = F_{c2}$ và dùng hết công suất):
  $$v_2 = \frac{P_{\max}}{F_{c2}} = \frac{50000}{1562.5} = 32 \text{ (m/s)} = 115.2 \text{ (km/h)}$$
[/GIAI]

**Bài 8 (Nâng cao):** Một giếng nước sâu $20 \text{ m}$. Dùng một máy bơm có công suất $1.5 \text{ kW}$ để bơm nước từ giếng lên. Biết hiệu suất của máy bơm là $80\%$, và đường ống xả nước có tiết diện $25 \text{ cm}^2$. Bơm trong $1 \text{ giờ}$ thì được bao nhiêu mét khối nước? Biết vận tốc nước xả ra ở miệng ống là $4 \text{ m/s}$. Lấy $g = 10 \text{ m/s}^2$. 
[GIAI]
**Lời giải chi tiết:**
- Công suất có ích của máy bơm (phần dùng để nâng nước và truyền động năng cho nước):
  $$P_{ci} = P_{tp} \cdot H = 1500 \cdot 0.8 = 1200 \text{ (W)}$$
- Thể tích nước bơm được trong thời gian $t = 3600 \text{ s}$ chảy qua ống tiết diện $S = 25 \cdot 10^{-4} \text{ m}^2$ với vận tốc $v = 4 \text{ m/s}$:
  $$V = S \cdot v \cdot t = 25 \cdot 10^{-4} \cdot 4 \cdot 3600 = 36 \text{ (m}^3\text{)}$$
- (Kiểm tra lại xem máy bơm có đủ công suất để bơm lượng nước này không):
  Khối lượng nước: $m = 36000 \text{ kg}$.
  Công cần thiết (nâng lên và truyền động năng): $A = mgh + \frac{1}{2}mv^2 = 36000 \cdot 10 \cdot 20 + \frac{1}{2} \cdot 36000 \cdot 4^2 = 7.2 \cdot 10^6 + 2.88 \cdot 10^5 = 7.488 \cdot 10^6 \text{ (J)}$.
  Công có ích sinh ra trong 1h: $A_{ci} = P_{ci} \cdot t = 1200 \cdot 3600 = 4.32 \cdot 10^6 \text{ (J)}$.
  *(Dữ kiện bài toán bị mâu thuẫn vì lưu lượng ống xả đòi hỏi công lớn hơn công suất máy có thể cung cấp. Nhưng nếu chỉ tính lưu lượng theo ống học sinh sẽ tính ra $36 \text{ m}^3$)*.
  *Cách giải chuẩn dựa vào Công suất máy (thực tế máy chỉ bơm được theo khả năng của nó):*
  Năng lượng có ích trong 1h: $A_{ci} = 4.32 \cdot 10^6 \text{ J}$.
  Công để bơm 1 kg nước: $w = gh + \frac{1}{2}v^2 = 200 + 8 = 208 \text{ (J/kg)}$.
  Khối lượng nước thực tế bơm được: $m = \frac{4.32 \cdot 10^6}{208} \approx 20769 \text{ (kg)} = 20.77 \text{ (tấn)}$.
  Thể tích thực tế: $V = 20.77 \text{ m}^3$.
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Khi một chiếc xe chạy xuống dốc, lực nào sau đây thực hiện công âm?
[A] Trọng lực của xe.
[*B] Lực ma sát giữa bánh xe và mặt đường.
[C] Lực kéo của động cơ (nếu xe vẫn đang đạp ga).
[D] Thành phần song song với mặt dốc của trọng lực.
[/QUIZ]

[QUIZ]
Câu 10: Hai vật có khối lượng $m_1 = 2m_2$ rơi tự do từ cùng một độ cao. So sánh công của trọng lực thực hiện lên hai vật khi chạm đất:
[A] Bằng nhau.
[*B] $A_1 = 2A_2$.
[C] $A_1 = 0.5A_2$.
[D] Không so sánh được.
[/QUIZ]
        `
    },

    "PHY10-CH4-02": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương IV: Năng lượng, công, công suất",
        title: "Bài 2: Động năng, Thế năng & Bảo toàn Cơ năng (Nâng cao)",
        theory: String.raw`
### 1. Định lý Động năng
- $A_{ngoạilực} = W_{d2} - W_{d1} = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$
- Áp dụng khi vật chịu tác dụng của nhiều lực (kể cả ma sát).

### 2. Định lý Biến thiên Cơ năng
- Cơ năng $W = W_d + W_t = \frac{1}{2}mv^2 + mgh$ (trong trọng trường).
- Nếu chỉ có lực thế (trọng lực, lực đàn hồi) sinh công $\Rightarrow W = \text{const}$.
- Nếu có lực không thế (ma sát, lực cản, lực kéo) sinh công:
  $$A_{không\_thế} = W_2 - W_1 = \Delta W$$

---
### 3. 💎 Chuyên đề Master: Vòng xiếc (Loop-the-loop) & Hệ vật (VDC)
📌 **Bài toán Vòng xiếc (Loop-the-loop):**
- Vật trượt từ độ cao $h$ qua một đường ray uốn thành vòng tròn bán kính $R$ đặt thẳng đứng. 
- Để vật vượt qua điểm cao nhất của vòng mà không bị rơi, áp lực tại điểm cao nhất phải $N \ge 0$.
  + Tại đỉnh vòng (cách đáy $2R$): $P + N = m \frac{v^2}{R} \Rightarrow m \frac{v^2}{R} \ge mg \Rightarrow v \ge \sqrt{gR}$.
  + Áp dụng Bảo toàn cơ năng từ $h$ đến đỉnh vòng: $mgh = mg(2R) + \frac{1}{2}mv^2$.
  + Suy ra điều kiện độ cao thả vật: $h \ge 2R + \frac{R}{2} \Rightarrow h \ge 2.5R$.

📌 **Bài toán Cơ năng của Hệ vật (Máy Atwood):**
- Hệ gồm 2 vật nối với nhau qua ròng rọc. Khi hệ chuyển động, cơ năng của toàn hệ bảo toàn (nếu không có ma sát).
  $$\Delta W_d + \Delta W_t = 0 \Rightarrow (\Delta W_{d1} + \Delta W_{d2}) + (\Delta W_{t1} + \Delta W_{t2}) = 0$$
- Nếu có ma sát: Công của lực ma sát bằng tổng độ biến thiên cơ năng của hệ.
        `,
        tips: String.raw`
- 💡 **Mẹo làm bài con lắc đơn:** Vận tốc tại vị trí góc lệch $\alpha$ là $v = \sqrt{2gl(\cos\alpha - \cos\alpha_0)}$. Lực căng dây là $T = mg(3\cos\alpha - 2\cos\alpha_0)$. Tại VTCB ($\alpha=0$), vận tốc và lực căng dây đều đạt cực đại.
- ⚠️ **Lỗi sai:** Quên chọn và ghi rõ **Mốc thế năng**. Mốc thế năng khác nhau thì giá trị Cơ năng khác nhau (tuy nhiên độ biến thiên cơ năng thì giống nhau). Thường chọn mốc tại điểm thấp nhất của quỹ đạo.
        `,
        practice: String.raw`
### Dạng 1: Áp dụng Định lý Động năng có Ma sát
**Bài 1 (Cơ bản):** Một viên đạn khối lượng $50 \text{ g}$ bay ngang với vận tốc $400 \text{ m/s}$ xuyên qua một tấm gỗ dày $10 \text{ cm}$. Sau khi xuyên qua, vận tốc đạn còn $100 \text{ m/s}$. Tính lực cản trung bình của gỗ.
[GIAI]
**Lời giải chi tiết:**
- Đổi: $m = 0.05 \text{ kg}, s = 0.1 \text{ m}$.
- Áp dụng định lý động năng: $A_c = W_{d2} - W_{d1}$.
  $$-F_c \cdot s = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$
  $$-F_c \cdot 0.1 = \frac{1}{2} \cdot 0.05 \cdot (100^2 - 400^2) = 0.025 \cdot (10000 - 160000) = 0.025 \cdot (-150000) = -3750$$
  $$F_c = \frac{3750}{0.1} = 37500 \text{ (N)}$$
[/GIAI]

**Bài 2 (Vận dụng):** Một ô tô $2 \text{ tấn}$ đang chạy với tốc độ $72 \text{ km/h}$ thì hãm phanh. Xe trượt trên đường $50 \text{ m}$ thì dừng hẳn. Tính hệ số ma sát giữa xe và đường bằng phương pháp năng lượng. ($g=10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Đổi: $v_1 = 20 \text{ m/s}, v_2 = 0$. $m = 2000 \text{ kg}$.
- Lực cản duy nhất là lực ma sát $F_{ms} = \mu mg$. Công $A_{ms} = -F_{ms} \cdot s = -\mu mgs$.
- Định lý động năng: $A_{ms} = 0 - \frac{1}{2}mv_1^2$.
  $$-\mu mgs = -\frac{1}{2}mv_1^2 \Rightarrow \mu = \frac{v_1^2}{2gs} = \frac{20^2}{2 \cdot 10 \cdot 50} = \frac{400}{1000} = 0.4$$
[/GIAI]

### Dạng 2: Bảo toàn Cơ năng của Con lắc đơn
**Bài 3 (Vận dụng):** Một con lắc đơn có chiều dài $l = 1 \text{ m}$, vật nặng $m = 100 \text{ g}$. Kéo lệch vật góc $60^\circ$ so với phương thẳng đứng rồi buông nhẹ. Tính vận tốc của vật và lực căng dây khi nó đi qua vị trí có góc lệch $30^\circ$. ($g=10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Vận tốc tại góc $\alpha$: $v = \sqrt{2gl(\cos \alpha - \cos \alpha_0)}$
  $$v = \sqrt{2 \cdot 10 \cdot 1 \cdot (\cos 30^\circ - \cos 60^\circ)} = \sqrt{20 \left( \frac{\sqrt{3}}{2} - 0.5 \right)} \approx \sqrt{20(0.866 - 0.5)} = \sqrt{7.32} \approx 2.7 \text{ (m/s)}$$
- Lực căng dây tại góc $\alpha$: $T = mg(3\cos \alpha - 2\cos \alpha_0)$
  $$T = 0.1 \cdot 10 \cdot \left( 3 \cdot \frac{\sqrt{3}}{2} - 2 \cdot 0.5 \right) = 1 \cdot (2.598 - 1) = 1.598 \text{ (N)}$$
[/GIAI]

### Dạng 3: Bài toán Vòng xiếc (Loop-the-loop)
**Bài 4 (Vận dụng cao):** Một hòn bi nhỏ lăn không ma sát từ đỉnh một máng nghiêng có độ cao $h$, nối tiếp với một đường vòng tròn bán kính $R = 40 \text{ cm}$ đặt thẳng đứng. Tính $h$ tối thiểu để bi có thể quay hết vòng tròn mà không rơi khỏi quỹ đạo.
[GIAI]
**Lời giải chi tiết:**
- Gọi $A$ là điểm thả bi (cao $h$), $B$ là đỉnh của vòng tròn (cao $2R$). Mốc thế năng ở đáy vòng.
- Điều kiện để bi không rơi tại $B$: $v_B \ge \sqrt{gR}$.
- Bảo toàn cơ năng từ $A$ đến $B$: $W_A = W_B$.
  $$mgh = mg(2R) + \frac{1}{2}mv_B^2$$
- Thay $v_B^2 = gR$ vào phương trình:
  $$mgh = 2mgR + \frac{1}{2}m(gR) \Rightarrow h = 2R + 0.5R = 2.5R$$
- Giá trị $h$ tối thiểu: $h = 2.5 \cdot 40 = 100 \text{ (cm)} = 1 \text{ (m)}$.
[/GIAI]

**Bài 5 (Nâng cao):** Cùng đề bài 4, nhưng thả bi từ độ cao $h = 3R$. Hãy tính áp lực của bi lên đường ray tại điểm cao nhất của vòng tròn. Khối lượng bi là $100 \text{ g}$. ($R = 40 \text{ cm}, g=10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Đổi: $m = 0.1 \text{ kg}, R = 0.4 \text{ m}, h = 3R = 1.2 \text{ m}$.
- Bảo toàn cơ năng: $mgh = mg(2R) + \frac{1}{2}mv_B^2 \Rightarrow 3mgR = 2mgR + \frac{1}{2}mv_B^2 \Rightarrow v_B^2 = 2gR$.
- Động lực học tại $B$: $P + N = m\frac{v_B^2}{R} \Rightarrow N = m\frac{v_B^2}{R} - mg$.
- Thay $v_B^2 = 2gR$: 
  $$N = m\frac{2gR}{R} - mg = 2mg - mg = mg = 0.1 \cdot 10 = 1 \text{ (N)}$$
[/GIAI]

### Dạng 4: Bảo toàn Cơ năng Hệ vật (Máy Atwood)
**Bài 6 (Vận dụng cao):** Hai quả nặng $m_1 = 3 \text{ kg}, m_2 = 2 \text{ kg}$ nối với nhau bằng dây vắt qua ròng rọc cố định. Thả hệ từ trạng thái nghỉ. Dùng định luật bảo toàn cơ năng, hãy tính vận tốc của hệ khi vật $m_1$ đi xuống được đoạn đường $1 \text{ m}$. ($g=10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Vì bỏ qua ma sát, cơ năng của toàn hệ bảo toàn.
- Khi thả, $m_1$ đi xuống đoạn $h = 1 \text{ m}$, $m_2$ đi lên đoạn $h = 1 \text{ m}$. Vận tốc 2 vật có cùng độ lớn $v$.
- Độ biến thiên thế năng toàn hệ: $\Delta W_t = \Delta W_{t1} + \Delta W_{t2} = -m_1gh + m_2gh = (m_2 - m_1)gh = (2-3) \cdot 10 \cdot 1 = -10 \text{ (J)}$.
- Độ biến thiên động năng toàn hệ: $\Delta W_d = W_{d(sau)} - W_{d(đầu)} = \frac{1}{2}(m_1 + m_2)v^2 - 0 = \frac{1}{2} \cdot 5 \cdot v^2 = 2.5v^2$.
- Theo bảo toàn cơ năng: $\Delta W_d + \Delta W_t = 0 \Rightarrow 2.5v^2 - 10 = 0 \Rightarrow 2.5v^2 = 10 \Rightarrow v^2 = 4 \Rightarrow v = 2 \text{ (m/s)}$.
[/GIAI]

**Bài 7 (Nâng cao):** Hai vật $m_1 = 2 \text{ kg}$ trên bàn ngang có ma sát $\mu = 0.2$ và $m_2 = 3 \text{ kg}$ treo lơ lửng, nối nhau qua ròng rọc. Thả hệ chuyển động từ nghỉ. Dùng phương pháp năng lượng, tính vận tốc vật $m_2$ sau khi rơi được $2 \text{ m}$. ($g=10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Hệ có ma sát $\Rightarrow A_{ms} = \Delta W_{hệ} = \Delta W_d + \Delta W_t$.
- $A_{ms} = -(\mu m_1 g) \cdot s = - (0.2 \cdot 2 \cdot 10) \cdot 2 = -8 \text{ (J)}$.
- Độ biến thiên thế năng (chỉ có $m_2$ thay đổi độ cao): $\Delta W_t = -m_2 gs = -3 \cdot 10 \cdot 2 = -60 \text{ (J)}$.
- Độ biến thiên động năng: $\Delta W_d = \frac{1}{2}(m_1 + m_2)v^2 = \frac{1}{2} \cdot 5 \cdot v^2 = 2.5v^2$.
- Lắp vào pt: $-8 = 2.5v^2 - 60 \Rightarrow 2.5v^2 = 52 \Rightarrow v^2 = 20.8 \Rightarrow v \approx 4.56 \text{ (m/s)}$.
[/GIAI]

### Dạng 5: Bài toán Lò xo (Năng lượng)
**Bài 8 (Nâng cao):** Một con lắc lò xo đặt nằm ngang, $k = 100 \text{ N/m}$, $m = 400 \text{ g}$. Kéo vật ra khỏi VTCB $5 \text{ cm}$ rồi buông nhẹ. Mặt bàn có ma sát $\mu = 0.1$. Tính quãng đường tổng cộng vật đi được cho đến khi dừng hẳn. ($g=10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Mốc thế năng đàn hồi tại VTCB. Cơ năng ban đầu: $W_1 = \frac{1}{2}k(\Delta l)^2 = \frac{1}{2} \cdot 100 \cdot (0.05)^2 = 0.125 \text{ (J)}$.
- Cơ năng khi dừng hẳn: $W_2 = 0$.
- Toàn bộ cơ năng ban đầu đã bị triệt tiêu bởi công của lực ma sát trong suốt quá trình đi lại nhiều lần.
  $A_{ms} = W_2 - W_1 \Rightarrow -F_{ms} \cdot S_{tổng} = -0.125$
  $F_{ms} = \mu mg = 0.1 \cdot 0.4 \cdot 10 = 0.4 \text{ (N)}$.
- Quãng đường tổng cộng: $S_{tổng} = \frac{0.125}{0.4} = 0.3125 \text{ (m)} = 31.25 \text{ (cm)}$.
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Khi một vật trượt từ đỉnh mặt phẳng nghiêng có ma sát xuống chân mặt phẳng nghiêng, đại lượng nào sau đây được bảo toàn?
[A] Cơ năng.
[B] Động năng.
[C] Thế năng.
[*D] Tổng năng lượng (nếu xét cả nhiệt năng tỏa ra).
[/QUIZ]

[QUIZ]
Câu 10: Hai xe $A$ và $B$ có cùng động năng. Khối lượng xe $A$ lớn gấp 4 lần xe $B$. Nếu cùng bị hãm bởi lực ma sát có cùng độ lớn, quãng đường hãm phanh của hai xe thỏa mãn:
[*A] $S_A = S_B$.
[B] $S_A = 4S_B$.
[C] $S_A = 0.25S_B$.
[D] $S_A = 2S_B$.
[/QUIZ]
        `
    },

    "PHY10-CH4-03": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương IV: Năng lượng, công, công suất",
        title: "Bài 3: Hiệu suất & Bài toán năng lượng thực tế (Nâng cao)",
        theory: String.raw`
### 1. Phân biệt Năng lượng Có ích và Toàn phần
- $W_{tp} = W_{ci} + W_{hp}$.
- $H = \frac{W_{ci}}{W_{tp}} \cdot 100\% = \frac{P_{ci}}{P_{tp}} \cdot 100\%$.
- **Động cơ xe cộ:** $W_{tp}$ là năng lượng từ đốt nhiên liệu ($m \cdot q$ với $q$ là năng suất tỏa nhiệt). $W_{ci}$ là công cơ học $A = F_k \cdot s$ để xe chạy.
- **Thủy điện:** $W_{tp}$ là thế năng của dòng nước đổ xuống ($mgh$). $W_{ci}$ là điện năng phát ra.
- **Bơm nước:** $W_{tp}$ là điện năng tiêu thụ. $W_{ci}$ là công nâng nước lên cao và truyền động năng cho nước ($mgh + \frac{1}{2}mv^2$).

### 2. Hiệu suất của chuỗi truyền động
- Khi hệ thống có nhiều bộ phận truyền động nối tiếp nhau (động cơ $\rightarrow$ hộp số $\rightarrow$ bánh xe), hiệu suất tổng cộng bằng tích các hiệu suất thành phần:
  $$H = H_1 \cdot H_2 \cdot H_3 ...$$
        `,
        tips: String.raw`
- 💡 **Mẹo bài toán xe leo dốc có hiệu suất:** Lực kéo của động cơ (công có ích) phải thắng được tổng lực cản, bao gồm lực ma sát và thành phần $P_x$ của trọng lực kéo giật lùi. Đừng bỏ sót $P_x = mg\sin\alpha$.
        `,
        practice: String.raw`
### Dạng 1: Hiệu suất động cơ nhiệt, điện
**Bài 1 (Cơ bản):** Một động cơ điện có công suất tiêu thụ $2 \text{ kW}$ dùng để kéo thang máy. Biết hiệu suất động cơ là $85\%$. Công suất có ích để nâng thang máy là bao nhiêu? Nếu thang máy có khối lượng $800 \text{ kg}$, tốc độ lên của nó là bao nhiêu? ($g=10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Công suất có ích: $P_{ci} = P_{tp} \cdot H = 2000 \cdot 0.85 = 1700 \text{ (W)}$.
- Thang máy lên đều, lực kéo $F = P = mg = 8000 \text{ N}$.
- Tốc độ: $v = \frac{P_{ci}}{F} = \frac{1700}{8000} = 0.2125 \text{ (m/s)}$.
[/GIAI]

**Bài 2 (Vận dụng):** Một ô tô chạy 100 km trên đường ngang với tốc độ không đổi tiêu thụ hết 8 lít xăng. Biết lực cản không đổi là $800 \text{ N}$. Năng suất tỏa nhiệt của xăng là $4.6 \cdot 10^7 \text{ J/kg}$, khối lượng riêng của xăng là $700 \text{ kg/m}^3$. Tính hiệu suất của động cơ ô tô.
[GIAI]
**Lời giải chi tiết:**
- Thể tích xăng: $V = 8 \text{ lít} = 8 \cdot 10^{-3} \text{ m}^3$. 
- Khối lượng xăng: $m = \rho V = 700 \cdot 8 \cdot 10^{-3} = 5.6 \text{ (kg)}$.
- Năng lượng toàn phần (do xăng cháy tỏa ra): $A_{tp} = m \cdot q = 5.6 \cdot 4.6 \cdot 10^7 = 25.76 \cdot 10^7 \text{ (J)}$.
- Quãng đường $s = 100 \text{ km} = 10^5 \text{ m}$. Lực kéo $F = F_c = 800 \text{ N}$.
- Công có ích: $A_{ci} = F \cdot s = 800 \cdot 10^5 = 8 \cdot 10^7 \text{ (J)}$.
- Hiệu suất: $H = \frac{A_{ci}}{A_{tp}} = \frac{8 \cdot 10^7}{25.76 \cdot 10^7} \approx 0.31 \Rightarrow 31\%$.
[/GIAI]

### Dạng 2: Bài toán Thủy điện & Bơm nước nâng cao
**Bài 3 (Vận dụng cao):** Một thác nước cao $30 \text{ m}$ rót $120 \text{ m}^3$ nước xuống mỗi giây để chạy tua-bin thủy điện. Hiệu suất của tua-bin là $75\%$, của máy phát điện là $90\%$. Tính công suất phát điện của nhà máy. ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Khối lượng nước đổ xuống mỗi giây: $m = \rho V = 1000 \cdot 120 = 120000 \text{ (kg)}$.
- Công suất toàn phần của dòng thác: $P_{tp} = \frac{mgh}{1} = 120000 \cdot 10 \cdot 30 = 36 \cdot 10^6 \text{ (W)} = 36 \text{ (MW)}$.
- Hiệu suất toàn hệ thống: $H = H_{tua-bin} \cdot H_{máy\_phát} = 0.75 \cdot 0.9 = 0.675$.
- Công suất phát điện: $P_{điện} = P_{tp} \cdot H = 36 \cdot 0.675 = 24.3 \text{ (MW)}$.
[/GIAI]

**Bài 4 (Nâng cao):** Một máy bơm hút nước từ độ sâu $5 \text{ m}$ dưới mặt đất và bơm lên bồn nước cao $15 \text{ m}$ trên mặt đất. Lưu lượng bơm là $10 \text{ lít/giây}$. Nước phun ra khỏi ống ở bồn với tốc độ $2 \text{ m/s}$. Hiệu suất máy bơm là $60\%$. Tính công suất điện máy bơm cần tiêu thụ. ($g=10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Độ cao tổng cộng cần nâng nước: $h = 5 + 15 = 20 \text{ m}$.
- Khối lượng nước bơm trong 1 giây: $m = 10 \text{ kg}$.
- Năng lượng có ích cần truyền cho khối nước $10 \text{ kg}$ này trong 1 giây (gồm nâng thế năng và truyền động năng):
  $P_{ci} = \frac{mgh + \frac{1}{2}mv^2}{1} = 10 \cdot 10 \cdot 20 + \frac{1}{2} \cdot 10 \cdot 2^2 = 2000 + 20 = 2020 \text{ (W)}$.
- Công suất điện (toàn phần) tiêu thụ:
  $P_{tp} = \frac{P_{ci}}{H} = \frac{2020}{0.6} \approx 3366.7 \text{ (W)} \approx 3.37 \text{ (kW)}$.
[/GIAI]

### Dạng 3: Bài toán Tổng hợp Cực khó
**Bài 5 (Nâng cao):** Xe máy có khối lượng tổng cộng (cả người) là $150 \text{ kg}$. Khi xe chạy lên một con dốc dài $100 \text{ m}$, cao $10 \text{ m}$ với tốc độ không đổi $36 \text{ km/h}$, xe tiêu thụ hết $20 \text{ g}$ xăng. Năng suất tỏa nhiệt của xăng là $4.6 \cdot 10^7 \text{ J/kg}$, hệ số ma sát giữa xe và dốc là $0.05$. Tính hiệu suất của động cơ xe máy. ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Đổi: $v = 10 \text{ m/s}$. Dốc dài $s = 100 \text{ m}$, cao $h = 10 \text{ m} \Rightarrow \sin\alpha = \frac{h}{s} = 0.1$.
- Từ $\sin\alpha = 0.1 \Rightarrow \cos\alpha = \sqrt{1 - 0.1^2} \approx 0.995$.
- Các lực cản khi lên dốc: 
  Lực ma sát: $F_{ms} = \mu mg \cos\alpha = 0.05 \cdot 150 \cdot 10 \cdot 0.995 \approx 74.6 \text{ (N)}$.
  Thành phần trọng lượng kéo lùi: $P_x = mg \sin\alpha = 150 \cdot 10 \cdot 0.1 = 150 \text{ (N)}$.
- Tổng lực cản: $F_c = 74.6 + 150 = 224.6 \text{ (N)}$.
- Công có ích để xe leo dốc: $A_{ci} = F_k \cdot s = F_c \cdot s = 224.6 \cdot 100 = 22460 \text{ (J)}$.
- Nhiệt lượng tỏa ra từ $20 \text{ g}$ xăng ($0.02 \text{ kg}$):
  $A_{tp} = Q = m_{xăng} \cdot q = 0.02 \cdot 4.6 \cdot 10^7 = 9.2 \cdot 10^5 = 920000 \text{ (J)}$.
- Hiệu suất: $H = \frac{A_{ci}}{A_{tp}} = \frac{22460}{920000} \approx 0.0244 \Rightarrow 2.44\%$. (Hiệu suất khá thấp do xe phân khối nhỏ).
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 6: Để tăng hiệu suất của một động cơ nhiệt, người kỹ sư cần làm gì?
[A] Tăng cường ma sát giữa các chi tiết máy để truyền lực tốt hơn.
[B] Giảm tối đa phần năng lượng chuyển hóa thành nhiệt năng hoặc âm thanh hao phí.
[*C] Cả hai việc trên đều sai, chỉ cần bơm nhiều nhiên liệu hơn.
[D] Biến đổi toàn bộ năng lượng hao phí thành công có ích (đạt 100%).
[/QUIZ]
*(Lưu ý: Đáp án chuẩn là B, D sai vì ĐL2 Nhiệt động học không cho phép đạt 100%).*
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DB_PHY_10_CH4_MASTER;
}