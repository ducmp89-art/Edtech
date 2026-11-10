/* ==========================================================================
   S-NOTE 2026 - HỆ THỐNG BÀI TẬP ÔN LUYỆN VẬT LÝ 10 MASTER
   Chương IV: Năng lượng, công, công suất
   Cấu trúc: 10 Vận dụng (VD) + 10 Vận dụng cao (VDC)
   (Chuỗi string dạng backtick \` \` tích hợp LaTeX)
   ========================================================================== */

const DATA_PRACTICE_LY10_CH4 = {
    "PHY10-PRAC-CH4-01": {
        level: `Vận dụng`,
        topic: `Công cơ học của lực xiên góc`,
        question: `Một công nhân dùng dây kéo một thùng hàng có khối lượng $m = 50 \text{ kg}$ trượt thẳng đều trên sàn nhà nằm ngang. Sợi dây hợp với phương ngang một góc $\alpha = 30^\circ$. Hệ số ma sát trượt giữa thùng và sàn là $\mu = 0.2$. Lấy $g = 10 \text{ m/s}^2$. Tính công của lực kéo khi thùng hàng di chuyển được quãng đường $s = 10 \text{ m}$.`,
        hint: `Chìa khóa tư duy: Thùng trượt thẳng đều nên gia tốc $a = 0$. Hợp lực theo phương ngang và phương đứng đều bằng 0. Lực kéo xiên góc sẽ làm giảm áp lực N của thùng lên sàn: $N = mg - F\sin\alpha$. Từ phương trình cân bằng, tìm F kéo trước.`,
        solution: `
**Bước 1: Phân tích lực và tìm lực kéo**
- Các lực tác dụng: Trọng lực $\vec{P}$, Phản lực $\vec{N}$, Lực kéo $\vec{F}$, Lực ma sát $\vec{F}_{ms}$.
- Chọn hệ trục tọa độ Oxy (Ox dọc theo sàn, Oy vuông góc sàn hướng lên).
- Chiếu lên Oy: $N + F\sin 30^\circ - P = 0 \Rightarrow N = mg - F\sin 30^\circ = 500 - 0.5F$.
- Chiếu lên Ox (do vật cđ thẳng đều): $F\cos 30^\circ - F_{ms} = 0 \Rightarrow F\cos 30^\circ = \mu N$.
- Thay N vào phương trình Ox:
  $F \cdot \frac{\sqrt{3}}{2} = 0.2(500 - 0.5F)$
  $F\frac{\sqrt{3}}{2} = 100 - 0.1F \Rightarrow F\left(\frac{\sqrt{3}}{2} + 0.1\right) = 100 \Rightarrow F \approx 103.5 \text{ (N)}$.

**Bước 2: Tính công của lực kéo**
- $A_k = F \cdot s \cdot \cos 30^\circ = 103.5 \cdot 10 \cdot \frac{\sqrt{3}}{2} \approx 896.3 \text{ (J)}$.
- Kết luận: Công của lực kéo xấp xỉ $896.3 \text{ J}$.
        `
    },
    "PHY10-PRAC-CH4-02": {
        level: `Vận dụng`,
        topic: `Định lý động năng (Hãm phanh)`,
        question: `Một xe ô tô khối lượng $m = 1.5 \text{ tấn}$ đang chạy với tốc độ $54 \text{ km/h}$ thì hãm phanh. Xe trượt thêm được $37.5 \text{ m}$ thì dừng hẳn. Dùng định lý động năng, hãy tính lực hãm phanh trung bình tác dụng lên xe.`,
        hint: `Chìa khóa tư duy: Định lý động năng: Công của ngoại lực bằng độ biến thiên động năng ($A = W_{d2} - W_{d1}$). Xe hãm phanh nên chỉ có lực hãm sinh công âm, vận tốc lúc sau bằng 0.`,
        solution: `
**Bước 1: Đổi đơn vị và xác định các đại lượng**
- Khối lượng: $m = 1500 \text{ kg}$.
- Vận tốc đầu: $v_1 = 54 \text{ km/h} = 15 \text{ m/s}$.
- Vận tốc cuối: $v_2 = 0 \text{ m/s}$.
- Quãng đường: $s = 37.5 \text{ m}$.

**Bước 2: Áp dụng định lý động năng**
- Công của lực hãm: $A = -F_h \cdot s$.
- Biến thiên động năng: $\Delta W_d = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2 = 0 - \frac{1}{2} \cdot 1500 \cdot 15^2 = -750 \cdot 225 = -168750 \text{ (J)}$.
- Ta có: $-F_h \cdot 37.5 = -168750 \Rightarrow F_h = \frac{168750}{37.5} = 4500 \text{ (N)}$.
- Kết luận: Lực hãm phanh có độ lớn là $4500 \text{ N}$.
        `
    },
    "PHY10-PRAC-CH4-03": {
        level: `Vận dụng`,
        topic: `Bảo toàn cơ năng (Ném thẳng đứng)`,
        question: `Từ độ cao $10 \text{ m}$ so với mặt đất, một hòn đá khối lượng $200 \text{ g}$ được ném thẳng đứng lên cao với tốc độ ban đầu $20 \text{ m/s}$. Bỏ qua sức cản không khí, lấy $g = 10 \text{ m/s}^2$. Tính độ cao cực đại hòn đá đạt được và tốc độ của hòn đá khi cách mặt đất $15 \text{ m}$.`,
        hint: `Chìa khóa tư duy: Bỏ qua sức cản $\Rightarrow$ Cơ năng bảo toàn. Chọn mốc thế năng ở mặt đất. Tại độ cao cực đại, động năng bằng 0.`,
        solution: `
**Bước 1: Xác định cơ năng ban đầu**
- Chọn mốc thế năng tại mặt đất.
- Cơ năng tại vị trí ném (A): $W_A = \frac{1}{2}mv_0^2 + mgh_A$.
  Vì có thể triệt tiêu $m$ trong phương trình bảo toàn nên ta có thể giữ nguyên $m$ hoặc tính: $W_A/m = \frac{1}{2} \cdot 20^2 + 10 \cdot 10 = 200 + 100 = 300 \text{ (J/kg)}$.

**Bước 2: Tính độ cao cực đại**
- Tại đỉnh (B): $v_B = 0 \Rightarrow W_B/m = g \cdot h_{\max} = 10 \cdot h_{\max}$.
- Áp dụng BTCN: $W_A = W_B \Rightarrow 300 = 10 \cdot h_{\max} \Rightarrow h_{\max} = 30 \text{ (m)}$.

**Bước 3: Tính tốc độ ở độ cao 15m**
- Tại độ cao $h_C = 15 \text{ m}$: $W_C/m = \frac{1}{2}v_C^2 + gh_C = 0.5v_C^2 + 150$.
- BTCN: $300 = 0.5v_C^2 + 150 \Rightarrow 0.5v_C^2 = 150 \Rightarrow v_C^2 = 300 \Rightarrow v_C = 10\sqrt{3} \approx 17.32 \text{ (m/s)}$.
- Kết luận: Độ cao cực đại là 30m; Tốc độ ở độ cao 15m là $10\sqrt{3} \text{ m/s}$.
        `
    },
    "PHY10-PRAC-CH4-04": {
        level: `Vận dụng`,
        topic: `Động năng & Lực xuyên thấu`,
        question: `Một viên đạn khối lượng $10 \text{ g}$ bay ngang với vận tốc $800 \text{ m/s}$ đập vào một bức tường dày $20 \text{ cm}$. Lực cản trung bình của bức tường tác dụng lên viên đạn là $24000 \text{ N}$. Viên đạn có xuyên thủng bức tường không? Nếu có, tính tốc độ của viên đạn khi vừa xuyên ra khỏi tường.`,
        hint: `Chìa khóa tư duy: Dùng định lý động năng giả sử viên đạn xuyên qua lớp tường $s = 20 \text{ cm}$. Nếu động năng còn lại $W_{d2} > 0$ thì xuyên thủng được.`,
        solution: `
**Bước 1: Tính động năng ban đầu**
- Đổi đơn vị: $m = 0.01 \text{ kg}$; độ dày $s = 0.2 \text{ m}$.
- Động năng lúc chạm tường: $W_{d1} = \frac{1}{2}mv_1^2 = \frac{1}{2} \cdot 0.01 \cdot 800^2 = 3200 \text{ (J)}$.

**Bước 2: Xét khả năng xuyên thủng và tính vận tốc**
- Công của lực cản tường nếu đạn xuyên qua hết $20 \text{ cm}$: $A_c = -F_c \cdot s = -24000 \cdot 0.2 = -4800 \text{ (J)}$.
- Định lý động năng: $W_{d2} - W_{d1} = A_c \Rightarrow W_{d2} = 3200 - 4800 = -1600 \text{ (J)}$.
- Vì $W_{d2} < 0$, điều này vô lý trong thực tế. Động năng của viên đạn đã tiêu hao hết trước khi đi hết $20 \text{ cm}$.
- Kết luận: Viên đạn KHÔNG xuyên thủng được bức tường.
*(Ghi chú: Quãng đường đạn đi được thực tế là $s' = \frac{3200}{24000} \approx 0.133 \text{ m} = 13.3 \text{ cm}$).*
        `
    },
    "PHY10-PRAC-CH4-05": {
        level: `Vận dụng`,
        topic: `Công suất ô tô`,
        question: `Một ô tô có khối lượng $2 \text{ tấn}$ khởi hành trên đường ngang. Sau $10 \text{ giây}$, xe đạt tốc độ $54 \text{ km/h}$. Biết lực cản không đổi và bằng $5\%$ trọng lượng xe. Tính công suất trung bình của động cơ trong 10 giây đó và công suất tức thời tại giây thứ 10. Lấy $g = 10 \text{ m/s}^2$.`,
        hint: `Chìa khóa tư duy: Xe chuyển động nhanh dần đều $\Rightarrow$ Tính gia tốc $a$. Lực kéo động cơ: $F_k = F_c + ma$. Công suất trung bình dùng $P_{tb} = \frac{A}{t}$, tức thời dùng $P = F_k \cdot v_{tức\_thời}$.`,
        solution: `
**Bước 1: Tính lực kéo của động cơ**
- Đổi đơn vị: $v = 54 \text{ km/h} = 15 \text{ m/s}$; $m = 2000 \text{ kg}$.
- Gia tốc: $a = \frac{v - v_0}{t} = \frac{15 - 0}{10} = 1.5 \text{ (m/s}^2\text{)}$.
- Lực cản: $F_c = 0.05mg = 0.05 \cdot 2000 \cdot 10 = 1000 \text{ (N)}$.
- Lực kéo: $F_k - F_c = ma \Rightarrow F_k = 1000 + 2000 \cdot 1.5 = 4000 \text{ (N)}$.

**Bước 2: Tính công suất**
- Quãng đường đi trong 10s: $s = \frac{1}{2}at^2 = 0.5 \cdot 1.5 \cdot 100 = 75 \text{ (m)}$.
- Công của lực kéo: $A = F_k \cdot s = 4000 \cdot 75 = 300000 \text{ (J)}$.
- Công suất trung bình: $P_{tb} = \frac{A}{t} = \frac{300000}{10} = 30000 \text{ (W)} = 30 \text{ (kW)}$.
- Công suất tức thời tại giây thứ 10: $P_{10s} = F_k \cdot v_{10s} = 4000 \cdot 15 = 60000 \text{ (W)} = 60 \text{ (kW)}$.
        `
    },
    "PHY10-PRAC-CH4-06": {
        level: `Vận dụng`,
        topic: `Cơ năng Con lắc đơn`,
        question: `Một con lắc đơn gồm vật nặng $m = 100 \text{ g}$, dây treo dài $l = 1 \text{ m}$. Kéo vật lệch khỏi vị trí cân bằng góc $60^\circ$ rồi thả nhẹ. Bỏ qua mọi ma sát, lấy $g = 10 \text{ m/s}^2$. Tính cơ năng của con lắc (chọn mốc thế năng tại vị trí cân bằng) và tốc độ của vật khi dây treo hợp với phương thẳng đứng góc $30^\circ$.`,
        hint: `Chìa khóa tư duy: Độ cao của con lắc góc $\alpha$ là $h = l(1-\cos\alpha)$. Áp dụng bảo toàn cơ năng để tính tốc độ.`,
        solution: `
**Bước 1: Tính cơ năng của con lắc**
- Mốc thế năng tại VTCB. Tại góc $\alpha_0 = 60^\circ$, $v = 0$.
- Độ cao ban đầu: $h_0 = l(1 - \cos\alpha_0) = 1(1 - 0.5) = 0.5 \text{ (m)}$.
- Cơ năng: $W = mgh_0 = 0.1 \cdot 10 \cdot 0.5 = 0.5 \text{ (J)}$.

**Bước 2: Tốc độ tại góc 30 độ**
- Tại góc $\alpha = 30^\circ$, độ cao: $h = l(1 - \cos 30^\circ) = 1(1 - \frac{\sqrt{3}}{2}) \approx 0.134 \text{ (m)}$.
- Thế năng: $W_t = 0.1 \cdot 10 \cdot 0.134 = 0.134 \text{ (J)}$.
- Động năng: $W_d = W - W_t = 0.5 - 0.134 = 0.366 \text{ (J)}$.
- Tốc độ: $\frac{1}{2}mv^2 = 0.366 \Rightarrow v = \sqrt{\frac{2 \cdot 0.366}{0.1}} = \sqrt{7.32} \approx 2.7 \text{ (m/s)}$.
        `
    },
    "PHY10-PRAC-CH4-07": {
        level: `Vận dụng`,
        topic: `Biến thiên cơ năng trên mặt phẳng nghiêng`,
        question: `Vật $m = 2 \text{ kg}$ trượt không vận tốc đầu từ đỉnh một mặt phẳng nghiêng dài $10 \text{ m}$, cao $6 \text{ m}$. Tốc độ của vật ở chân mặt phẳng nghiêng là $8 \text{ m/s}$. Lấy $g = 10 \text{ m/s}^2$. Dùng định lý biến thiên cơ năng tính công của lực ma sát và độ lớn lực ma sát.`,
        hint: `Chìa khóa tư duy: Tính cơ năng ở đỉnh và ở chân dốc. Hiệu hai cơ năng này chính là công của lực ma sát ($A_{ms} = W_B - W_A$). Lực ma sát được tính bởi $F_{ms} = |A_{ms}| / s$.`,
        solution: `
**Bước 1: Tính cơ năng đầu và cuối**
- Chọn mốc thế năng tại chân mặt phẳng nghiêng.
- Cơ năng tại đỉnh (A): $W_A = mgh = 2 \cdot 10 \cdot 6 = 120 \text{ (J)}$.
- Cơ năng tại chân dốc (B): $W_B = \frac{1}{2}mv^2 = \frac{1}{2} \cdot 2 \cdot 8^2 = 64 \text{ (J)}$.

**Bước 2: Tính lực ma sát**
- Công của lực ma sát: $A_{ms} = W_B - W_A = 64 - 120 = -56 \text{ (J)}$.
- Mặt khác, $A_{ms} = -F_{ms} \cdot s \Rightarrow -F_{ms} \cdot 10 = -56 \Rightarrow F_{ms} = 5.6 \text{ (N)}$.
- Kết luận: Công lực ma sát là $-56 \text{ J}$, độ lớn lực ma sát là $5.6 \text{ N}$.
        `
    },
    "PHY10-PRAC-CH4-08": {
        level: `Vận dụng`,
        topic: `Hiệu suất Máy bơm`,
        question: `Một máy bơm điện đưa nước từ giếng sâu $15 \text{ m}$ lên một bể chứa cách mặt đất $25 \text{ m}$. Lưu lượng nước bơm được là $20 \text{ lít/phút}$. Biết hiệu suất của máy bơm là $80\%$ và vận tốc nước chảy khỏi vòi không đáng kể. Tính công suất điện máy bơm tiêu thụ. Khối lượng riêng của nước là $1000 \text{ kg/m}^3, g = 10 \text{ m/s}^2$.`,
        hint: `Chìa khóa tư duy: Tổng độ cao cần nâng nước là $h_{tổng} = h_1 + h_2$. Tính công có ích để nâng 20 lít nước trong 1 phút, suy ra $P_{ci}$. Từ hiệu suất tìm $P_{tp}$.`,
        solution: `
**Bước 1: Tính công suất có ích**
- Tổng độ cao cần nâng: $h = 15 + 25 = 40 \text{ (m)}$.
- Lưu lượng $20 \text{ lít/phút}$ nghĩa là trong $t = 60 \text{ s}$, máy bơm được $V = 20 \text{ lít} = 0.02 \text{ m}^3$.
- Khối lượng nước: $m = 1000 \cdot 0.02 = 20 \text{ (kg)}$.
- Công có ích để nâng nước: $A_{ci} = mgh = 20 \cdot 10 \cdot 40 = 8000 \text{ (J)}$.
- Công suất có ích: $P_{ci} = \frac{A_{ci}}{t} = \frac{8000}{60} = \frac{400}{3} \approx 133.3 \text{ (W)}$.

**Bước 2: Tính công suất điện tiêu thụ (Toàn phần)**
- Hiệu suất $H = 0.8 \Rightarrow P_{tp} = \frac{P_{ci}}{H} = \frac{400/3}{0.8} = \frac{500}{3} \approx 166.7 \text{ (W)}$.
- Kết luận: Máy bơm tiêu thụ công suất điện khoảng $166.7 \text{ W}$.
        `
    },
    "PHY10-PRAC-CH4-09": {
        level: `Vận dụng`,
        topic: `Tính công bằng đồ thị`,
        question: `Một vật khối lượng $2 \text{ kg}$ chuyển động từ trạng thái nghỉ dưới tác dụng của một lực $F$ nằm ngang. Đồ thị $F-s$ là một đường thẳng đi qua các điểm $(s=0; F=10)$ và $(s=10; F=0)$. Bỏ qua ma sát. Bằng phương pháp diện tích đồ thị, tính vận tốc của vật ở cuối quãng đường $10 \text{ m}$.`,
        hint: `Chìa khóa tư duy: Công của lực biến thiên $F(s)$ bằng diện tích hình phẳng dưới đồ thị. Vì bỏ qua ma sát, công này bằng đúng động năng của vật ở cuối quãng đường.`,
        solution: `
**Bước 1: Tính công của lực F**
- Đồ thị tạo thành một tam giác vuông với các cạnh góc vuông là đáy $s = 10 \text{ m}$ và chiều cao $F = 10 \text{ N}$.
- Diện tích tam giác: $S = \frac{1}{2} \cdot \text{đáy} \cdot \text{cao} = \frac{1}{2} \cdot 10 \cdot 10 = 50$.
- Vậy công của lực F là $A = 50 \text{ (J)}$.

**Bước 2: Áp dụng định lý động năng**
- $W_d - W_{d0} = A \Rightarrow \frac{1}{2}mv^2 - 0 = 50$.
- Thay $m = 2 \text{ kg}$: $\frac{1}{2} \cdot 2 \cdot v^2 = 50 \Rightarrow v^2 = 50 \Rightarrow v = \sqrt{50} = 5\sqrt{2} \approx 7.07 \text{ (m/s)}$.
- Kết luận: Vận tốc ở cuối quãng đường là $5\sqrt{2} \text{ m/s}$.
        `
    },
    "PHY10-PRAC-CH4-10": {
        level: `Vận dụng`,
        topic: `Công suất và Lực kéo cản`,
        question: `Một máy bay có động cơ cung cấp công suất không đổi $10 \text{ MW}$. Khi bay ngang thẳng đều, vận tốc tối đa của máy bay là $900 \text{ km/h}$. Hỏi lực cản của không khí tác dụng lên máy bay lúc này là bao nhiêu? Nếu lực cản tỉ lệ với bình phương vận tốc, để bay với vận tốc $1080 \text{ km/h}$, máy bay cần công suất bao nhiêu?`,
        hint: `Chìa khóa tư duy: Khi bay đều $P = F_k \cdot v = F_c \cdot v$. Thiết lập hệ số tỉ lệ $F_c = k \cdot v^2$, từ đó tính công suất mới theo $P' = F_c' \cdot v'$.`,
        solution: `
**Bước 1: Tính lực cản lúc bay 900 km/h**
- Đổi: $v_1 = 900 \text{ km/h} = 250 \text{ m/s}$. $P_1 = 10^7 \text{ W}$.
- Do cđ đều: $F_c = F_k = \frac{P_1}{v_1} = \frac{10^7}{250} = 40000 \text{ (N)}$.

**Bước 2: Tìm hệ thức lực cản và công suất mới**
- Giả thiết: $F_c = k \cdot v^2 \Rightarrow 40000 = k \cdot 250^2 \Rightarrow k = \frac{40000}{62500} = 0.64$.
- Khi vận tốc mới $v_2 = 1080 \text{ km/h} = 300 \text{ m/s}$:
  $F_{c2} = k \cdot v_2^2 = 0.64 \cdot 300^2 = 0.64 \cdot 90000 = 57600 \text{ (N)}$.
- Để duy trì bay đều ở tốc độ này, lực kéo $F_{k2} = 57600 \text{ (N)}$.
- Công suất cần thiết: $P_2 = F_{k2} \cdot v_2 = 57600 \cdot 300 = 17280000 \text{ (W)} = 17.28 \text{ (MW)}$.
        `
    },
    "PHY10-PRAC-CH4-11": {
        level: `Vận dụng cao`,
        topic: `Biến thiên cơ năng nhiều giai đoạn`,
        question: `Vật $m = 1 \text{ kg}$ trượt không vận tốc đầu từ đỉnh A của một mặt phẳng nghiêng $AB$ dài $10 \text{ m}$, cao $5 \text{ m}$. Hệ số ma sát trên mặt phẳng nghiêng là $\mu_1 = 0.1$. Tới B, vật tiếp tục trượt trên mặt phẳng ngang $BC$ có hệ số ma sát $\mu_2 = 0.2$ rồi dừng lại ở C. Lấy $g = 10 \text{ m/s}^2$. Dùng năng lượng tính quãng đường $BC$.`,
        hint: `Chìa khóa tư duy: Viết ĐL BT Cơ năng cho cả quá trình từ A đến C. $\Delta W = W_C - W_A = A_{ms\_AB} + A_{ms\_BC}$. Ở C, vận tốc bằng 0 nên cơ năng bằng 0.`,
        solution: `
**Bước 1: Tính các thành phần cơ năng và lực ma sát**
- Mốc thế năng ở mặt phẳng ngang.
- $W_A = mgh = 1 \cdot 10 \cdot 5 = 50 \text{ (J)}$.
- $W_C = 0 \text{ (J)}$.
- Ma sát trên AB: $F_{ms1} = \mu_1 mg \cos\alpha$. Với $\sin\alpha = \frac{5}{10} = 0.5 \Rightarrow \alpha = 30^\circ \Rightarrow \cos\alpha = \frac{\sqrt{3}}{2}$.
  $A_{ms1} = -0.1 \cdot 10 \cdot \frac{\sqrt{3}}{2} \cdot 10 = -5\sqrt{3} \approx -8.66 \text{ (J)}$.
- Ma sát trên BC: $F_{ms2} = \mu_2 mg = 0.2 \cdot 10 = 2 \text{ (N)}$.
  $A_{ms2} = -F_{ms2} \cdot BC = -2 \cdot BC$.

**Bước 2: Lập phương trình năng lượng**
- $W_C - W_A = A_{ms1} + A_{ms2} \Rightarrow 0 - 50 = -8.66 - 2BC$.
- $2BC = 50 - 8.66 = 41.34 \Rightarrow BC = 20.67 \text{ (m)}$.
- Kết luận: Quãng đường vật trượt thêm trên mặt ngang là $20.67 \text{ m}$.
        `
    },
    "PHY10-PRAC-CH4-12": {
        level: `Vận dụng cao`,
        topic: `Con lắc đơn vướng đinh`,
        question: `Một con lắc đơn có sợi dây dài $l = 1 \text{ m}$ treo vật $m$. Điểm treo O. Ngay bên dưới O một đoạn $0.5 \text{ m}$ có một chiếc đinh. Kéo con lắc lệch khỏi phương thẳng đứng góc $\alpha_0$ rồi buông. Khi vướng đinh, vật lên vị trí cao nhất làm dây hợp với phương thẳng đứng (từ đinh) góc $\beta = 60^\circ$. Bỏ qua ma sát. Tính $\alpha_0$.`,
        hint: `Chìa khóa tư duy: Cơ năng bảo toàn ở 2 vị trí biên (trước và sau khi vướng đinh). Tại biên vận tốc bằng 0 $\Rightarrow$ Thế năng ở 2 biên bằng nhau (cùng độ cao).`,
        solution: `
**Bước 1: Xác định độ cao 2 biên so với VTCB**
- Khi chưa vướng đinh, biên ban đầu có độ cao $h_1 = l(1 - \cos\alpha_0)$.
- Khi vướng đinh, phần dây còn lại quay là $l' = l - 0.5 = 0.5 \text{ m}$.
- Tại biên mới góc $\beta = 60^\circ$, độ cao so với VTCB thấp nhất là $h_2 = l'(1 - \cos 60^\circ)$.

**Bước 2: Áp dụng Bảo toàn cơ năng**
- Vì ở 2 biên đều có động năng bằng 0, thế năng của chúng phải bằng nhau $\Rightarrow h_1 = h_2$.
- $l(1 - \cos\alpha_0) = l'(1 - \cos 60^\circ)$
- Thay số: $1(1 - \cos\alpha_0) = 0.5(1 - 0.5) \Rightarrow 1 - \cos\alpha_0 = 0.25 \Rightarrow \cos\alpha_0 = 0.75$.
- Bấm máy: $\alpha_0 \approx 41.4^\circ$.
- Kết luận: Góc kéo lệch ban đầu là xấp xỉ $41.4^\circ$.
        `
    },
    "PHY10-PRAC-CH4-13": {
        level: `Vận dụng cao`,
        topic: `Bài toán Công kéo dây xích (Khối tâm)`,
        question: `Một sợi dây xích đồng chất chiều dài $L = 3 \text{ m}$, khối lượng $M = 6 \text{ kg}$ đặt trên bàn nhẵn nằm ngang. Một đoạn $1 \text{ m}$ của xích thõng xuống khỏi mép bàn. Cần một công tối thiểu bao nhiêu để kéo toàn bộ sợi xích lên bàn? ($g = 10 \text{ m/s}^2$).`,
        hint: `Chìa khóa tư duy: Chỉ tính công nâng phần thõng xuống. Trọng tâm của phần thõng nằm ở chính giữa đoạn đó.`,
        solution: `
**Bước 1: Xác định phần dây thõng**
- Đoạn dây thõng có chiều dài $l = 1 \text{ m}$.
- Vì xích đồng chất, khối lượng đoạn thõng: $m = \frac{1}{3}M = 2 \text{ kg}$.
- Trọng tâm của đoạn thõng nằm cách mép bàn một khoảng $h = \frac{l}{2} = 0.5 \text{ m}$.

**Bước 2: Tính công kéo**
- Công cần thực hiện bằng độ tăng thế năng để đưa trọng tâm phần thõng lên độ cao mặt bàn.
- $A = mgh = 2 \cdot 10 \cdot 0.5 = 10 \text{ (J)}$.
- Kết luận: Công tối thiểu cần thực hiện là 10 J.
        `
    },
    "PHY10-PRAC-CH4-14": {
        level: `Vận dụng cao`,
        topic: `Vòng xiếc (Loop-the-loop) - Tính h min`,
        question: `Một hòn bi lăn không ma sát từ đỉnh dốc nghiêng độ cao $h$, sau đó đi vào một đường ray uốn thành vòng tròn thẳng đứng bán kính $R = 0.5 \text{ m}$. Tìm $h$ nhỏ nhất để bi qua được điểm cao nhất của vòng tròn mà không bị rơi.`,
        hint: `Chìa khóa tư duy: Tại điểm cao nhất, để không rơi thì áp lực $N \ge 0 \Rightarrow mg \le m\frac{v^2}{R} \Rightarrow v^2 \ge gR$. Áp dụng BTCN để liên kết $v$ này với độ cao thả $h$.`,
        solution: `
**Bước 1: Điều kiện không rơi ở đỉnh vòng tròn**
- Gọi đỉnh vòng tròn là B. Độ cao $h_B = 2R = 1 \text{ m}$.
- Ở đỉnh B, trọng lực P và phản lực N cùng hướng vào tâm: $P + N = m\frac{v_B^2}{R}$.
- Bi không rớt $\Rightarrow N \ge 0 \Rightarrow m\frac{v_B^2}{R} \ge mg \Rightarrow v_B^2 \ge gR$.

**Bước 2: Áp dụng BTCN**
- $W_A = W_B \Rightarrow mgh = mg(2R) + \frac{1}{2}mv_B^2$.
- $gh = 2gR + \frac{1}{2}v_B^2$.
- Thay $v_B^2 \ge gR$ vào: $gh \ge 2gR + \frac{1}{2}gR = 2.5gR \Rightarrow h \ge 2.5R$.
- Giá trị h nhỏ nhất là $h_{\min} = 2.5 \cdot 0.5 = 1.25 \text{ (m)}$.
        `
    },
    "PHY10-PRAC-CH4-15": {
        level: `Vận dụng cao`,
        topic: `Vòng xiếc - Áp lực tại điểm thấp nhất`,
        question: `Giải tiếp Bài 14 với giả thiết bi được thả từ độ cao $h = 3R$ (với $R = 0.5 \text{ m}, m = 200 \text{ g}, g = 10 \text{ m/s}^2$). Hãy tính áp lực của hòn bi lên đường ray tại điểm thấp nhất của vòng tròn.`,
        hint: `Chìa khóa tư duy: Tính vận tốc bi ở điểm thấp nhất (đáy vòng) bằng BTCN. Tại đáy, N hướng lên, P hướng xuống. $N - P = F_{ht}$.`,
        solution: `
**Bước 1: Tính vận tốc tại đáy vòng (điểm C)**
- Chọn mốc thế năng tại đáy C. $W_C = \frac{1}{2}mv_C^2$.
- Cơ năng ban đầu ở đỉnh dốc: $W_A = mgh = mg(3R)$.
- BTCN: $mg(3R) = \frac{1}{2}mv_C^2 \Rightarrow v_C^2 = 6gR$.

**Bước 2: Tính áp lực tại đáy**
- Phương trình hướng tâm tại đáy (hướng lên là chiều dương):
  $N_C - P = m\frac{v_C^2}{R} \Rightarrow N_C = mg + m\frac{6gR}{R} = mg + 6mg = 7mg$.
- Áp lực tác dụng lên ray: $N_C = 7 \cdot 0.2 \cdot 10 = 14 \text{ (N)}$.
        `
    },
    "PHY10-PRAC-CH4-16": {
        level: `Vận dụng cao`,
        topic: `Hệ vật Atwood bằng phương pháp Năng lượng`,
        question: `Hai vật $m_1 = 4 \text{ kg}$ và $m_2 = 1 \text{ kg}$ được nối với nhau qua một ròng rọc nhẹ, trơn. Ban đầu giữ hệ đứng yên rồi thả nhẹ. Áp dụng định lý năng lượng, hãy tính tốc độ của $m_1$ khi nó đi xuống được $2 \text{ m}$. Lấy $g = 10 \text{ m/s}^2$.`,
        hint: `Chìa khóa tư duy: Cơ năng của TỔNG hệ được bảo toàn vì không có ma sát. Thế năng $m_1$ giảm, thế năng $m_2$ tăng. Động năng cả hệ tăng.`,
        solution: `
**Bước 1: Tính độ biến thiên thế năng toàn hệ**
- Gọi độ dời chung là $h = 2 \text{ m}$. $m_1$ đi xuống, $m_2$ đi lên.
- $\Delta W_{t1} = -m_1gh = -4 \cdot 10 \cdot 2 = -80 \text{ (J)}$.
- $\Delta W_{t2} = +m_2gh = 1 \cdot 10 \cdot 2 = 20 \text{ (J)}$.
- $\Delta W_t = -80 + 20 = -60 \text{ (J)}$.

**Bước 2: Tính độ biến thiên động năng toàn hệ và tìm v**
- $\Delta W_d = \frac{1}{2}(m_1 + m_2)v^2 - 0 = \frac{1}{2} \cdot 5 \cdot v^2 = 2.5v^2$.
- BTCN toàn hệ: $\Delta W = \Delta W_t + \Delta W_d = 0$.
  $-60 + 2.5v^2 = 0 \Rightarrow 2.5v^2 = 60 \Rightarrow v^2 = 24 \Rightarrow v = \sqrt{24} \approx 4.9 \text{ (m/s)}$.
- Tốc độ của $m_1$ là $4.9 \text{ m/s}$.
        `
    },
    "PHY10-PRAC-CH4-17": {
        level: `Vận dụng cao`,
        topic: `Vật rơi vào lò xo đứng`,
        question: `Vật $m = 2 \text{ kg}$ rơi tự do từ độ cao $1 \text{ m}$ (so với đầu trên chưa biến dạng của lò xo) xuống một lò xo đặt thẳng đứng trên mặt đất. Lò xo có độ cứng $k = 500 \text{ N/m}$. Bỏ qua cản không khí. Tính độ nén cực đại của lò xo. ($g = 10 \text{ m/s}^2$).`,
        hint: `Chìa khóa tư duy: Cơ năng bảo toàn. Gọi độ nén cực đại là $x$. Tại độ nén này, vật đi được quãng đường $(h + x)$. Thế năng trọng trường giảm, thế năng đàn hồi tăng.`,
        solution: `
**Bước 1: Chọn mốc thế năng và viết BTCN**
- Chọn mốc thế năng trọng trường và đàn hồi đều tại đầu trên của lò xo lúc chưa biến dạng.
- Vị trí A (thả vật): $v = 0$, $z = h = 1 \text{ m}$. Cơ năng: $W_A = mgh = 2 \cdot 10 \cdot 1 = 20 \text{ (J)}$.
- Vị trí B (nén cực đại đoạn $x$): $v = 0$, $z = -x$. Cơ năng gồm:
  + Thế năng trọng trường: $-mgx = -20x$.
  + Thế năng đàn hồi: $\frac{1}{2}kx^2 = 250x^2$.
- $W_B = -20x + 250x^2$.

**Bước 2: Giải phương trình**
- $W_A = W_B \Rightarrow 20 = -20x + 250x^2 \Rightarrow 25x^2 - 2x - 2 = 0$.
- Giải phương trình bậc 2: $\Delta' = 1 - 25(-2) = 51$.
  $x = \frac{1 + \sqrt{51}}{25} \approx \frac{1 + 7.14}{25} \approx 0.325 \text{ (m)}$. (Loại nghiệm âm).
- Độ nén cực đại xấp xỉ $32.5 \text{ cm}$.
        `
    },
    "PHY10-PRAC-CH4-18": {
        level: `Vận dụng cao`,
        topic: `Vật trượt trên bán cầu nhẵn`,
        question: `Một vật nhỏ trượt không vận tốc đầu từ đỉnh của một bán cầu cố định, nhẵn, bán kính $R$. Vật sẽ rời bán cầu tại vị trí cách mặt phẳng ngang (đáy bán cầu) một khoảng bằng bao nhiêu (tính theo $R$)?`,
        hint: `Chìa khóa tư duy: Khi rời bán cầu, áp lực $N = 0$. Viết phương trình hướng tâm: $mg\cos\alpha - N = m\frac{v^2}{R}$. Dùng BTCN để liên kết $v^2$ với $\alpha$. Độ cao $h = R\cos\alpha$.`,
        solution: `
**Bước 1: BTCN đến điểm góc $\alpha$**
- Mốc thế năng tại đáy bán cầu. Đỉnh có độ cao $R$.
- Độ cao tại góc $\alpha$ là $h = R\cos\alpha$.
- $mgR = mgR\cos\alpha + \frac{1}{2}mv^2 \Rightarrow v^2 = 2gR(1 - \cos\alpha)$.

**Bước 2: Điều kiện rời quỹ đạo**
- Phương trình hướng tâm: $mg\cos\alpha - N = m\frac{v^2}{R}$.
- Khi rời, $N = 0 \Rightarrow mg\cos\alpha = m\frac{2gR(1 - \cos\alpha)}{R} = 2mg(1 - \cos\alpha)$.
- Triệt tiêu $mg$: $\cos\alpha = 2 - 2\cos\alpha \Rightarrow 3\cos\alpha = 2 \Rightarrow \cos\alpha = \frac{2}{3}$.
- Độ cao khi rời: $h = R\cos\alpha = \frac{2}{3}R$.
        `
    },
    "PHY10-PRAC-CH4-19": {
        level: `Vận dụng cao`,
        topic: `Hiệu suất xe leo dốc`,
        question: `Một ô tô khối lượng $1.5 \text{ tấn}$ leo dốc $5^\circ$ với tốc độ không đổi $36 \text{ km/h}$. Hệ số ma sát $\mu = 0.02$. Động cơ có công suất toàn phần $P = 40 \text{ kW}$. Tính hiệu suất của động cơ. Lấy $g = 10 \text{ m/s}^2$.`,
        hint: `Chìa khóa tư duy: Xe leo dốc thẳng đều nên lực kéo cân bằng với lực ma sát và lực trọng trường trượt xuống: $F_k = F_{ms} + P_x$. Tính công suất có ích $P_{ci} = F_k \cdot v$, sau đó tính $H$.`,
        solution: `
**Bước 1: Tính lực cản tổng cộng**
- $v = 10 \text{ m/s}$. $m = 1500 \text{ kg}$. $\sin 5^\circ \approx 0.0872, \cos 5^\circ \approx 0.9962$.
- $P_x = mg\sin 5^\circ = 15000 \cdot 0.0872 \approx 1308 \text{ (N)}$.
- $F_{ms} = \mu mg\cos 5^\circ = 0.02 \cdot 15000 \cdot 0.9962 \approx 298.9 \text{ (N)}$.
- Lực kéo: $F_k = 1308 + 298.9 = 1606.9 \text{ (N)}$.

**Bước 2: Tính công suất có ích và hiệu suất**
- $P_{ci} = F_k \cdot v = 1606.9 \cdot 10 = 16069 \text{ (W)}$.
- $H = \frac{P_{ci}}{P_{tp}} = \frac{16069}{40000} \approx 0.4017 \Rightarrow 40.17\%$.
        `
    },
    "PHY10-PRAC-CH4-20": {
        level: `Vận dụng cao`,
        topic: `Lực cản thay đổi & Vận tốc tới hạn`,
        question: `Một giọt nước mưa khối lượng $m = 50 \text{ mg}$ rơi tự do trong không khí. Biết lực cản không khí tác dụng lên giọt nước tỉ lệ thuận với tốc độ theo biểu thức $F_c = 10^{-4} \cdot v \text{ (N)}$. Lấy $g = 10 \text{ m/s}^2$. Khi giọt mưa đạt đến vận tốc giới hạn (rơi đều), công suất tỏa nhiệt ra môi trường do lực cản là bao nhiêu?`,
        hint: `Chìa khóa tư duy: Vận tốc tới hạn đạt được khi $F_c = P$. Toàn bộ công suất của trọng lực lúc này chuyển hóa thành công suất tỏa nhiệt của lực cản.`,
        solution: `
**Bước 1: Xác định vận tốc tới hạn**
- Khối lượng: $m = 50 \cdot 10^{-6} = 5 \cdot 10^{-5} \text{ (kg)}$. Trọng lượng $P = mg = 5 \cdot 10^{-4} \text{ (N)}$.
- Khi đạt vận tốc tới hạn $v_{th}$, rơi đều $\Rightarrow F_c = P$.
- $10^{-4} \cdot v_{th} = 5 \cdot 10^{-4} \Rightarrow v_{th} = 5 \text{ (m/s)}$.

**Bước 2: Tính công suất tỏa nhiệt**
- Khi rơi đều, cơ năng không đổi (động năng không đổi, thế năng giảm biến thành nhiệt).
- Công suất tỏa nhiệt bằng độ lớn công suất của lực cản (cũng bằng công suất trọng lực):
  $P_{nhiệt} = F_c \cdot v_{th} = P \cdot v_{th} = (5 \cdot 10^{-4}) \cdot 5 = 2.5 \cdot 10^{-3} \text{ (W)} = 2.5 \text{ (mW)}$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_PRACTICE_PHY10_CH4;
}