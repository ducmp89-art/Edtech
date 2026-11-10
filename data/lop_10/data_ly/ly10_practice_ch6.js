/* ==========================================================================
   S-NOTE 2026 - HỆ THỐNG BÀI TẬP ÔN LUYỆN VẬT LÝ 10 MASTER
   Chương VI: Chuyển động tròn
   Cấu trúc: 10 Vận dụng (VD) + 10 Vận dụng cao (VDC)
   (Đã chuyển đổi toàn bộ chuỗi string sang dạng backtick ` ` để tránh lỗi escape)
   ========================================================================== */

const DATA_PRACTICE_LY10_CH6 = {
    "PHY10-PRAC-CH6-01": {
        level: `Vận dụng`,
        topic: `Động học chuyển động tròn đều`,
        question: `Một chiếc quạt trần quay đều với tốc độ $300 \text{ vòng/phút}$. Cánh quạt dài $0.8 \text{ m}$ tính từ trục quay. Tính tốc độ góc, chu kì, tần số và tốc độ dài của một điểm ở đầu mút cánh quạt.`,
        hint: `Chìa khóa tư duy: Đổi tốc độ quay từ vòng/phút sang rad/s để tìm $\omega$. Các đại lượng còn lại tính theo công thức $T = \frac{2\pi}{\omega}$, $f = \frac{1}{T}$ và $v = \omega r$.`,
        solution: `
**Bước 1: Tính tốc độ góc, tần số và chu kì**
- Đổi đơn vị: $300 \text{ vòng/phút} = \frac{300 \cdot 2\pi}{60} \text{ rad/s} = 10\pi \text{ (rad/s)}$.
- Tốc độ góc: $\omega = 10\pi \approx 31.4 \text{ (rad/s)}$.
- Tần số: $f = \frac{\omega}{2\pi} = \frac{10\pi}{2\pi} = 5 \text{ (Hz)}$ (hoặc 5 vòng/s).
- Chu kì: $T = \frac{1}{f} = \frac{1}{5} = 0.2 \text{ (s)}$.

**Bước 2: Tính tốc độ dài**
- Bán kính quỹ đạo: $r = 0.8 \text{ m}$.
- Tốc độ dài ở đầu mút cánh quạt: $v = \omega r = 10\pi \cdot 0.8 = 8\pi \approx 25.1 \text{ (m/s)}$.
        `
    },
    "PHY10-PRAC-CH6-02": {
        level: `Vận dụng`,
        topic: `So sánh kim đồng hồ`,
        question: `Một chiếc đồng hồ treo tường có kim phút dài $10 \text{ cm}$ và kim giờ dài $8 \text{ cm}$. Tính tỉ số tốc độ góc và tỉ số tốc độ dài của đầu mút kim phút so với đầu mút kim giờ.`,
        hint: `Chìa khóa tư duy: Xác định chu kì quay của kim phút (1 giờ) và kim giờ (12 giờ). Tốc độ góc tỉ lệ nghịch với chu kì. Tốc độ dài tính bằng $v = \omega r$.`,
        solution: `
**Bước 1: Xác định chu kì và tỉ số tốc độ góc**
- Chu kì kim phút: $T_{ph} = 1 \text{ giờ} = 3600 \text{ s}$.
- Chu kì kim giờ: $T_{h} = 12 \text{ giờ} = 43200 \text{ s}$.
- Tỉ số tốc độ góc: 
  $$\frac{\omega_{ph}}{\omega_{h}} = \frac{T_{h}}{T_{ph}} = \frac{12}{1} = 12$$

**Bước 2: Tính tỉ số tốc độ dài**
- Áp dụng công thức $v = \omega r$:
  $$\frac{v_{ph}}{v_{h}} = \frac{\omega_{ph} \cdot r_{ph}}{\omega_{h} \cdot r_{h}} = 12 \cdot \frac{10}{8} = 12 \cdot 1.25 = 15$$
- Kết luận: Đầu mút kim phút quay nhanh gấp 15 lần đầu mút kim giờ.
        `
    },
    "PHY10-PRAC-CH6-03": {
        level: `Vận dụng`,
        topic: `Truyền chuyển động quay`,
        question: `Một chiếc xe đạp có đĩa xích (bánh răng trước) bán kính $r_1 = 10 \text{ cm}$ nối bằng dây xích với líp (bánh răng sau) bán kính $r_2 = 4 \text{ cm}$. Khi người đạp xe làm đĩa xích quay đều với chu kì $T_1 = 0.5 \text{ s}$ thì líp và bánh xe sau quay với tốc độ góc bằng bao nhiêu?`,
        hint: `Chìa khóa tư duy: Đĩa và líp nối với nhau bằng dây xích nên tốc độ dài ở vành của chúng bằng nhau ($v_1 = v_2$). Líp và bánh xe gắn đồng trục nên cùng tốc độ góc $\omega$.`,
        solution: `
**Bước 1: Tính tốc độ góc của đĩa xích**
- Tốc độ góc của đĩa xích: $\omega_1 = \frac{2\pi}{T_1} = \frac{2\pi}{0.5} = 4\pi \text{ (rad/s)}$.

**Bước 2: Tính tốc độ góc của líp (và bánh xe)**
- Do truyền động bằng xích, tốc độ dài bằng nhau: $v_1 = v_2 \Rightarrow \omega_1 r_1 = \omega_2 r_2$.
- Thay số: $4\pi \cdot 10 = \omega_2 \cdot 4 \Rightarrow \omega_2 = \frac{40\pi}{4} = 10\pi \text{ (rad/s)}$.
- Bánh xe sau quay cùng trục với líp nên tốc độ góc của bánh xe cũng là $10\pi \text{ rad/s}$.
        `
    },
    "PHY10-PRAC-CH6-04": {
        level: `Vận dụng`,
        topic: `Lực hướng tâm (Khúc cua ngang)`,
        question: `Một ô tô khối lượng $1.5 \text{ tấn}$ chạy qua một khúc cua phẳng, nằm ngang có bán kính cong $R = 50 \text{ m}$. Hệ số ma sát nghỉ giữa lốp xe và mặt đường là $\mu = 0.4$. Lấy $g = 10 \text{ m/s}^2$. Ô tô có thể chạy với tốc độ tối đa bao nhiêu để không bị trượt ra khỏi khúc cua?`,
        hint: `Chìa khóa tư duy: Lực ma sát nghỉ đóng vai trò là lực hướng tâm. Để xe không bị trượt, lực hướng tâm cần thiết không được vượt quá lực ma sát nghỉ cực đại: $F_{ht} \le F_{msn(\max)}$.`,
        solution: `
**Bước 1: Xác định lực hướng tâm và lực ma sát**
- Trên mặt đường ngang, phản lực $N = P = mg$.
- Lực ma sát nghỉ cực đại: $F_{msn(\max)} = \mu N = \mu mg$.
- Lực hướng tâm cần thiết để giữ xe trên quỹ đạo tròn: $F_{ht} = m\frac{v^2}{R}$.

**Bước 2: Giải bất phương trình điều kiện**
- $m\frac{v^2}{R} \le \mu mg \Rightarrow v^2 \le \mu g R$.
- Thay số: $v^2 \le 0.4 \cdot 10 \cdot 50 \Rightarrow v^2 \le 200 \Rightarrow v \le \sqrt{200} \approx 14.14 \text{ (m/s)}$.
- Đổi sang km/h: $14.14 \cdot 3.6 \approx 50.9 \text{ (km/h)}$.
- Kết luận: Tốc độ tối đa là xấp xỉ $14.14 \text{ m/s}$.
        `
    },
    "PHY10-PRAC-CH6-05": {
        level: `Vận dụng`,
        topic: `Áp lực trên cầu lồi`,
        question: `Một xe máy khối lượng $150 \text{ kg}$ (gồm cả người) chạy qua đỉnh một chiếc cầu vồng lồi có bán kính cong $R = 40 \text{ m}$ với tốc độ $36 \text{ km/h}$. Lấy $g = 10 \text{ m/s}^2$. Tính áp lực của xe lên mặt cầu tại điểm cao nhất.`,
        hint: `Chìa khóa tư duy: Tại điểm cao nhất, trọng lượng hướng xuống, phản lực hướng lên. Lực hướng tâm có chiều hướng vào tâm (hướng xuống). Viết pt $P - N = F_{ht}$.`,
        solution: `
**Bước 1: Lập phương trình động lực học**
- Đổi tốc độ: $v = 36 \text{ km/h} = 10 \text{ m/s}$.
- Phương trình chiếu lên trục hướng vào tâm (thẳng đứng hướng xuống):
  $$P - N = m\frac{v^2}{R} \Rightarrow N = P - m\frac{v^2}{R} = mg - m\frac{v^2}{R}$$

**Bước 2: Tính phản lực N**
- Thay số: $N = 150 \cdot 10 - 150 \cdot \frac{10^2}{40} = 1500 - 150 \cdot 2.5 = 1500 - 375 = 1125 \text{ (N)}$.
- Theo ĐL 3 Newton, áp lực của xe lên mặt cầu bằng phản lực $N = 1125 \text{ N}$. (Nhỏ hơn trọng lượng thật là 1500 N).
        `
    },
    "PHY10-PRAC-CH6-06": {
        level: `Vận dụng`,
        topic: `Áp lực trên cầu võng (lõm)`,
        question: `Một ô tô khối lượng $2 \text{ tấn}$ chạy qua đáy một khúc võng (cầu lõm) có bán kính cong $R = 50 \text{ m}$ với tốc độ $54 \text{ km/h}$. Lấy $g = 10 \text{ m/s}^2$. Tính áp lực của ô tô lên mặt đường tại điểm thấp nhất.`,
        hint: `Chìa khóa tư duy: Tại đáy cầu võng, tâm quỹ đạo nằm ở trên. Phản lực N hướng lên, trọng lượng P hướng xuống. Lực hướng tâm hướng lên: $N - P = F_{ht}$.`,
        solution: `
**Bước 1: Lập phương trình động lực học**
- Đổi tốc độ: $v = 54 \text{ km/h} = 15 \text{ m/s}$. Khối lượng $m = 2000 \text{ kg}$.
- Chiếu lên trục hướng vào tâm (thẳng đứng hướng lên):
  $$N - P = m\frac{v^2}{R} \Rightarrow N = P + m\frac{v^2}{R} = mg + m\frac{v^2}{R}$$

**Bước 2: Tính áp lực**
- Thay số: $N = 2000 \cdot 10 + 2000 \cdot \frac{15^2}{50} = 20000 + 2000 \cdot \frac{225}{50} = 20000 + 2000 \cdot 4.5 = 20000 + 9000 = 29000 \text{ (N)}$.
- Áp lực tác dụng lên đường là $29000 \text{ N}$ (lớn hơn trọng lượng thực tế).
        `
    },
    "PHY10-PRAC-CH6-07": {
        level: `Vận dụng`,
        topic: `Vật đặt trên bàn quay`,
        question: `Một đồng xu được đặt trên một cái bàn quay nằm ngang, cách tâm bàn một khoảng $r = 15 \text{ cm}$. Hệ số ma sát nghỉ giữa đồng xu và mặt bàn là $\mu = 0.3$. Lấy $g = 10 \text{ m/s}^2$. Hỏi bàn có thể quay với tốc độ góc tối đa bao nhiêu để đồng xu không bị văng ra khỏi bàn?`,
        hint: `Chìa khóa tư duy: Lực ma sát nghỉ đóng vai trò lực hướng tâm. Điều kiện không văng là $F_{ht} = m\omega^2 r \le \mu mg$.`,
        solution: `
**Bước 1: Thiết lập điều kiện cân bằng tương đối**
- Lực hướng tâm giữ đồng xu cđ tròn đều là lực ma sát nghỉ.
- Để đồng xu không trượt: $F_{ht} \le F_{msn(\max)}$.
- $m\omega^2 r \le \mu mg \Rightarrow \omega^2 r \le \mu g$.

**Bước 2: Tính tốc độ góc tối đa**
- $\omega^2 \le \frac{\mu g}{r}$.
- Thay số ($r = 0.15 \text{ m}$): $\omega^2 \le \frac{0.3 \cdot 10}{0.15} = \frac{3}{0.15} = 20$.
- $\omega \le \sqrt{20} \approx 4.47 \text{ (rad/s)}$.
- Bàn có thể quay với tốc độ góc tối đa xấp xỉ $4.47 \text{ rad/s}$.
        `
    },
    "PHY10-PRAC-CH6-08": {
        level: `Vận dụng`,
        topic: `Con lắc nón (Cơ bản)`,
        question: `Một quả nặng khối lượng $m = 200 \text{ g}$ được treo vào đầu một sợi dây nhẹ, không dãn. Cho quả nặng chuyển động tròn đều trong mặt phẳng nằm ngang (con lắc nón). Biết dây treo luôn hợp với phương thẳng đứng một góc $\alpha = 45^\circ$ và bán kính quỹ đạo là $R = 30 \text{ cm}$. Tính tốc độ dài của quả nặng. Lấy $g = 10 \text{ m/s}^2$.`,
        hint: `Chìa khóa tư duy: Hợp lực của Lực căng dây (T) và Trọng lực (P) đóng vai trò là lực hướng tâm. Vẽ hình và dùng $\tan\alpha = \frac{F_{ht}}{P}$.`,
        solution: `
**Bước 1: Phân tích lực và dùng hệ thức lượng**
- Các lực tác dụng: Trọng lực $\vec{P}$ và Lực căng $\vec{T}$.
- Hợp lực hướng vào tâm quỹ đạo: $F_{ht} = P \cdot \tan\alpha = mg\tan\alpha$.
- Mặt khác, $F_{ht} = m\frac{v^2}{R}$.

**Bước 2: Tính tốc độ dài**
- $m\frac{v^2}{R} = mg\tan\alpha \Rightarrow v^2 = gR\tan\alpha$.
- Thay số ($R = 0.3 \text{ m}, \alpha = 45^\circ$):
  $v^2 = 10 \cdot 0.3 \cdot \tan 45^\circ = 3 \cdot 1 = 3$.
- $v = \sqrt{3} \approx 1.73 \text{ (m/s)}$.
        `
    },
    "PHY10-PRAC-CH6-09": {
        level: `Vận dụng`,
        topic: `Chuyển động của vệ tinh`,
        question: `Một vệ tinh nhân tạo chuyển động tròn đều quanh Trái Đất ở độ cao $h$ bằng chính bán kính Trái Đất $R$. Biết gia tốc rơi tự do ở mặt đất là $g_0 = 9.8 \text{ m/s}^2$ và $R = 6400 \text{ km}$. Tính tốc độ dài của vệ tinh trên quỹ đạo.`,
        hint: `Chìa khóa tư duy: Lực hấp dẫn đóng vai trò lực hướng tâm. Gia tốc rơi tự do ở độ cao $h$ là $g = g_0 \left(\frac{R}{R+h}\right)^2$. Vì $h = R$ nên $g = \frac{g_0}{4}$. Lực hướng tâm $F_{ht} = mg = m\frac{v^2}{(R+h)}$.`,
        solution: `
**Bước 1: Tính gia tốc trọng trường ở độ cao h = R**
- Bán kính quỹ đạo của vệ tinh là $r = R + h = 2R$.
- Gia tốc trọng trường tại đó: $g = g_0 \left(\frac{R}{2R}\right)^2 = \frac{g_0}{4} = \frac{9.8}{4} = 2.45 \text{ (m/s}^2\text{)}$.

**Bước 2: Tính tốc độ của vệ tinh**
- Lực hấp dẫn là lực hướng tâm: $mg = m\frac{v^2}{r} \Rightarrow v^2 = g \cdot r$.
- $v = \sqrt{g \cdot (2R)} = \sqrt{2.45 \cdot (2 \cdot 6.4 \cdot 10^6)} = \sqrt{31.36 \cdot 10^6} = 5600 \text{ (m/s)} = 5.6 \text{ (km/s)}$.
        `
    },
    "PHY10-PRAC-CH6-10": {
        level: `Vận dụng`,
        topic: `Giới hạn đứt của dây`,
        question: `Một vật khối lượng $m = 500 \text{ g}$ được buộc vào đầu một sợi dây dài $l = 1 \text{ m}$ và quay tròn trong mặt phẳng nằm ngang. Sợi dây chỉ chịu được lực căng tối đa là $45 \text{ N}$. Tính tốc độ góc lớn nhất có thể quay vật mà dây chưa bị đứt. (Bỏ qua tác dụng của trọng lực hoặc coi vật trượt trên bàn ngang nhẵn).`,
        hint: `Chìa khóa tư duy: Lực căng dây đóng vai trò hoàn toàn là lực hướng tâm: $T = m\omega^2 l$. Cho $T \le T_{\max}$ để tìm $\omega_{\max}$.`,
        solution: `
**Bước 1: Lập công thức lực căng dây**
- Lực căng dây cung cấp lực hướng tâm: $T = m\omega^2 l$.
- Điều kiện để dây không đứt: $T \le T_{\max} = 45 \text{ N}$.

**Bước 2: Tính tốc độ góc lớn nhất**
- $m\omega^2 l \le 45 \Rightarrow 0.5 \cdot \omega^2 \cdot 1 \le 45$.
- $\omega^2 \le 90 \Rightarrow \omega \le \sqrt{90} \approx 9.49 \text{ (rad/s)}$.
- Tốc độ góc lớn nhất quay được là xấp xỉ $9.49 \text{ rad/s}$.
        `
    },
    "PHY10-PRAC-CH6-11": {
        level: `Vận dụng cao`,
        topic: `Góc hợp bởi 2 kim đồng hồ`,
        question: `Đúng 3 giờ chiều, kim giờ và kim phút hợp với nhau một góc $90^\circ$. Hỏi sau bao lâu kể từ lúc 3 giờ, kim giờ và kim phút sẽ chập nhau lần đầu tiên?`,
        hint: `Chìa khóa tư duy: Chọn mốc tọa độ góc ở vị trí 12h. Lúc 3h, tọa độ kim phút là $0$, kim giờ là $\pi/2$. Viết phương trình tọa độ góc $\theta = \theta_0 + \omega t$ cho 2 kim rồi cho chúng bằng nhau.`,
        solution: `
**Bước 1: Xác định tọa độ và tốc độ góc ban đầu**
- Tốc độ góc kim phút: $\omega_{ph} = \frac{2\pi}{1 \text{ h}}$ (rad/h).
- Tốc độ góc kim giờ: $\omega_h = \frac{2\pi}{12 \text{ h}} = \frac{\pi}{6 \text{ h}}$ (rad/h).
- Tại lúc 3 giờ, kim phút chỉ số 12 (tọa độ $\theta_{0,ph} = 0$), kim giờ chỉ số 3 (tọa độ $\theta_{0,h} = \frac{\pi}{2}$).

**Bước 2: Lập phương trình góc**
- Phương trình kim phút: $\theta_{ph} = \omega_{ph} t = 2\pi t$.
- Phương trình kim giờ: $\theta_h = \theta_{0,h} + \omega_h t = \frac{\pi}{2} + \frac{\pi}{6}t$.
- Hai kim gặp nhau $\Rightarrow \theta_{ph} = \theta_h$.
  $$2\pi t = \frac{\pi}{2} + \frac{\pi}{6}t \Rightarrow \left(2 - \frac{1}{6}\right)t = 0.5 \Rightarrow \frac{11}{6}t = 0.5 \Rightarrow t = \frac{3}{11} \text{ (giờ)}$$
- Đổi ra phút: $\frac{3}{11} \cdot 60 \approx 16.36 \text{ phút} = 16 \text{ phút } 21 \text{ giây}$.
        `
    },
    "PHY10-PRAC-CH6-12": {
        level: `Vận dụng cao`,
        topic: `Khúc cua nghiêng không ma sát`,
        question: `Đường đua tại một khúc cua có bán kính cong $R = 200 \text{ m}$ được thiết kế nghiêng một góc $\alpha$ so với mặt phẳng ngang. Biết rằng ô tô chạy qua khúc cua này với tốc độ $72 \text{ km/h}$ thì ngay cả khi mặt đường đóng băng (không có ma sát), xe vẫn không bị trượt. Lấy $g = 10 \text{ m/s}^2$. Hãy tính góc nghiêng $\alpha$.`,
        hint: `Chìa khóa tư duy: Hợp lực của Trọng lực (P) và Phản lực pháp tuyến (N) đóng vai trò lực hướng tâm. Từ tam giác lực $\tan\alpha = \frac{F_{ht}}{P} = \frac{v^2}{gR}$.`,
        solution: `
**Bước 1: Phân tích lực trên mặt đường nghiêng**
- Bỏ qua ma sát, xe chịu tác dụng của $\vec{P}$ (hướng thẳng đứng xuống) và $\vec{N}$ (vuông góc mặt đường).
- Để xe cđ tròn ngang đều, hợp lực của $\vec{P}$ và $\vec{N}$ phải nằm ngang và hướng vào tâm quỹ đạo: $F_{ht} = P \tan\alpha = mg \tan\alpha$.

**Bước 2: Tính góc nghiêng**
- Ta có $F_{ht} = m\frac{v^2}{R}$.
- Đồng nhất: $m\frac{v^2}{R} = mg \tan\alpha \Rightarrow \tan\alpha = \frac{v^2}{gR}$.
- Đổi: $v = 72 \text{ km/h} = 20 \text{ m/s}$.
  $$\tan\alpha = \frac{20^2}{10 \cdot 200} = \frac{400}{2000} = 0.2$$
- Bấm máy $\arctan(0.2)$: $\alpha \approx 11.3^\circ$.
        `
    },
    "PHY10-PRAC-CH6-13": {
        level: `Vận dụng cao`,
        topic: `Lồng quay Rotor`,
        question: `Một trò chơi ở công viên là một hình trụ rỗng đứng bán kính $R = 3 \text{ m}$ quay quanh trục thẳng đứng của nó. Người chơi đứng dựa lưng vào vách. Trụ quay với tốc độ góc $\omega$. Hệ số ma sát trượt giữa người và vách là $\mu = 0.5$. Lấy $g = 10 \text{ m/s}^2$. Khi sàn lồng tụt xuống, tính tần số quay tối thiểu (vòng/phút) để người chơi không bị trượt xuống đáy.`,
        hint: `Chìa khóa tư duy: Lực ma sát hướng lên cân bằng trọng lực ($F_{ms} \ge P$). Áp lực vuông góc với vách đóng vai trò lực hướng tâm ($N = m\omega^2 R$). Thay $N$ vào phương trình ma sát để tìm $\omega$.`,
        solution: `
**Bước 1: Phương trình cân bằng và hướng tâm**
- Người không trượt xuống: $F_{ms} \ge P \Rightarrow \mu N \ge mg$.
- Lực hướng tâm do vách trụ đẩy người: $N = m\omega^2 R$.
- Thế N vào bpt: $\mu (m\omega^2 R) \ge mg \Rightarrow \omega^2 \ge \frac{g}{\mu R}$.

**Bước 2: Tính tốc độ góc và tần số**
- $\omega \ge \sqrt{\frac{10}{0.5 \cdot 3}} = \sqrt{\frac{10}{1.5}} = \sqrt{\frac{20}{3}} \approx 2.58 \text{ (rad/s)}$.
- Đổi sang tần số (vòng/phút): $f = \frac{\omega}{2\pi} \approx \frac{2.58}{6.28} \approx 0.41 \text{ (vòng/s)} = 0.41 \cdot 60 \approx 24.6 \text{ (vòng/phút)}$.
- Vậy lồng phải quay ít nhất $\approx 24.6$ vòng/phút.
        `
    },
    "PHY10-PRAC-CH6-14": {
        level: `Vận dụng cao`,
        topic: `Hệ 2 vật nối dây qua lỗ bàn quay`,
        question: `Một mặt bàn nằm ngang nhẵn, ở giữa có một lỗ nhỏ. Một sợi dây mảnh luồn qua lỗ, đầu trên buộc vật $m_1 = 200 \text{ g}$ nằm trên bàn, đầu dưới buộc vật $m_2 = 400 \text{ g}$ treo lơ lửng. Khi bàn quay, $m_1$ cđ tròn đều quanh lỗ cách lỗ một khoảng $r = 25 \text{ cm}$. Tính tốc độ góc $\omega$ của $m_1$ để vật $m_2$ giữ nguyên vị trí (không bị kéo lên hay tụt xuống). Lấy $g = 10 \text{ m/s}^2$.`,
        hint: `Chìa khóa tư duy: $m_2$ đứng yên nên lực căng dây $T = P_2$. Lực căng dây này truyền qua lỗ và đóng vai trò lực hướng tâm kéo $m_1$ quay tròn. $T = m_1 \omega^2 r$.`,
        solution: `
**Bước 1: Cân bằng của vật m2**
- Do $m_2$ lơ lửng cân bằng: $T = m_2 g = 0.4 \cdot 10 = 4 \text{ (N)}$.

**Bước 2: Hướng tâm của vật m1**
- Dây trên bàn kéo $m_1$ hướng vào tâm lỗ. Lực này chính là lực hướng tâm: $F_{ht} = T$.
- $m_1 \omega^2 r = T \Rightarrow 0.2 \cdot \omega^2 \cdot 0.25 = 4$.
- $0.05 \omega^2 = 4 \Rightarrow \omega^2 = \frac{4}{0.05} = 80 \Rightarrow \omega = \sqrt{80} = 4\sqrt{5} \approx 8.94 \text{ (rad/s)}$.
        `
    },
    "PHY10-PRAC-CH6-15": {
        level: `Vận dụng cao`,
        topic: `Gia tốc ở vĩ độ trên Trái Đất`,
        question: `Bán kính Trái Đất $R = 6400 \text{ km}$. Trái Đất tự quay 1 vòng hết $24 \text{ h}$. Xét một điểm $M$ nằm trên mặt đất ở vĩ độ $\lambda = 60^\circ$ (Bắc). Tính gia tốc hướng tâm do sự tự quay của Trái Đất đối với một người đứng yên tại $M$.`,
        hint: `Chìa khóa tư duy: Bán kính quỹ đạo quay tròn của điểm M không phải là $R$ mà là $r = R\cos\lambda$. Tốc độ góc $\omega$ là của Trái Đất.`,
        solution: `
**Bước 1: Tính tốc độ góc và bán kính quỹ đạo**
- $\omega = \frac{2\pi}{T} = \frac{2\pi}{24 \cdot 3600} \approx 7.27 \cdot 10^{-5} \text{ (rad/s)}$.
- Khoảng cách từ M đến trục quay (Bán kính quỹ đạo):
  $r = R \cos 60^\circ = 6400 \cdot 10^3 \cdot 0.5 = 3.2 \cdot 10^6 \text{ (m)}$.

**Bước 2: Tính gia tốc hướng tâm**
- $a_{ht} = \omega^2 r = (7.27 \cdot 10^{-5})^2 \cdot (3.2 \cdot 10^6) \approx (52.85 \cdot 10^{-10}) \cdot (3.2 \cdot 10^6) \approx 0.0169 \text{ (m/s}^2\text{)}$.
- Gia tốc này khá nhỏ so với $g \approx 9.8 \text{ m/s}^2$, nhưng nó giải thích tại sao trọng lượng thực ở xích đạo lại nhẹ hơn ở vùng cực.
        `
    },
    "PHY10-PRAC-CH6-16": {
        level: `Vận dụng cao`,
        topic: `Con lắc nón (Căng dây gấp đôi)`,
        question: `Một con lắc nón có dây dài $l = 50 \text{ cm}$. Quay vật để dây quét thành một hình nón thẳng đứng. Nếu muốn lực căng dây lớn gấp 2 lần trọng lượng của vật ($T = 2P$) thì phải quay với tốc độ góc $\omega$ bằng bao nhiêu? ($g = 10 \text{ m/s}^2$).`,
        hint: `Chìa khóa tư duy: Phân tích lực căng dây thành phương đứng $T\cos\alpha = P$. Thay $T = 2P$ sẽ tìm được góc lệch $\alpha$. Sau đó áp dụng phương hướng tâm $T\sin\alpha = m\omega^2(l\sin\alpha)$ để tìm $\omega$.`,
        solution: `
**Bước 1: Tìm góc lệch alpha**
- Trên phương thẳng đứng, lực căng dây cân bằng trọng lực: $T\cos\alpha = P$.
- Đề cho $T = 2P \Rightarrow 2P\cos\alpha = P \Rightarrow \cos\alpha = 0.5 \Rightarrow \alpha = 60^\circ$.

**Bước 2: Áp dụng phương trình hướng tâm**
- Trên phương ngang: $F_{ht} = T\sin\alpha$.
- $m\omega^2 r = T\sin\alpha \Rightarrow m\omega^2 (l\sin\alpha) = T\sin\alpha$.
- Rút gọn $\sin\alpha$: $m\omega^2 l = T = 2P = 2mg$.
- Triệt tiêu $m$: $\omega^2 l = 2g \Rightarrow \omega^2 \cdot 0.5 = 2 \cdot 10 \Rightarrow 0.5\omega^2 = 20 \Rightarrow \omega^2 = 40 \Rightarrow \omega = \sqrt{40} \approx 6.32 \text{ (rad/s)}$.
        `
    },
    "PHY10-PRAC-CH6-17": {
        level: `Vận dụng cao`,
        topic: `Xô nước quay tròn (Quỹ đạo đứng)`,
        question: `Một em bé buộc một xô nước nhỏ khối lượng tổng cộng $m = 1 \text{ kg}$ vào một sợi dây dài $0.8 \text{ m}$ và quay đều nó theo một vòng tròn trong mặt phẳng thẳng đứng. Nếu em bé quay với tốc độ dài $4 \text{ m/s}$, tính độ chênh lệch lực căng dây giữa điểm thấp nhất và điểm cao nhất của quỹ đạo. ($g=10 \text{ m/s}^2$).`,
        hint: `Chìa khóa tư duy: Lập phương trình $T - P = m\frac{v^2}{R}$ tại điểm thấp nhất, và $T + P = m\frac{v^2}{R}$ tại điểm cao nhất. Lấy $T_{đáy} - T_{đỉnh}$. Chú ý: Ở đây đề cho "quay ĐỀU", tức v không đổi ở mọi điểm (do tay tác dụng lực phụ trợ). Nếu là cđ tự do thì v sẽ khác nhau.`,
        solution: `
**Bước 1: Lực căng tại điểm thấp nhất (đáy)**
- Tại đáy, T hướng lên, P hướng xuống.
  $T_{đáy} - P = m\frac{v^2}{l} \Rightarrow T_{đáy} = mg + m\frac{v^2}{l}$.
  $T_{đáy} = 10 + 1\cdot\frac{4^2}{0.8} = 10 + \frac{16}{0.8} = 10 + 20 = 30 \text{ (N)}$.

**Bước 2: Lực căng tại điểm cao nhất (đỉnh)**
- Tại đỉnh, T và P đều hướng xuống (hướng tâm).
  $T_{đỉnh} + P = m\frac{v^2}{l} \Rightarrow T_{đỉnh} = m\frac{v^2}{l} - mg$.
  $T_{đỉnh} = 20 - 10 = 10 \text{ (N)}$.

**Bước 3: Độ chênh lệch**
- $\Delta T = T_{đáy} - T_{đỉnh} = 30 - 10 = 20 \text{ (N)}$.
*(Thực ra với bài quay đều, $\Delta T = (mg + F_{ht}) - (F_{ht} - mg) = 2mg = 20 \text{ N}$ không phụ thuộc tốc độ quay!)*
        `
    },
    "PHY10-PRAC-CH6-18": {
        level: `Vận dụng cao`,
        topic: `Vòng quay mặt trời (Ferris Wheel)`,
        question: `Một người khối lượng $50 \text{ kg}$ ngồi trên Vòng quay Mặt trời (Ferris wheel) có bán kính $R = 20 \text{ m}$. Vòng quay quay đều với tốc độ góc $\omega = 0.5 \text{ rad/s}$. Người ngồi trên ghế luôn ở tư thế thẳng đứng. Lấy $g = 10 \text{ m/s}^2$. Tính áp lực của người lên ghế ngồi khi ở điểm thấp nhất và điểm cao nhất của quỹ đạo.`,
        hint: `Chìa khóa tư duy: Người chuyển động tròn đều nên luôn có $F_{ht} = m\omega^2 R$. Ghế luôn nằm ngang nên lực tác dụng chỉ có N và P dọc theo phương đứng. Viết phương trình hướng tâm ở 2 biên.`,
        solution: `
**Bước 1: Tính lực hướng tâm**
- $F_{ht} = m\omega^2 R = 50 \cdot (0.5)^2 \cdot 20 = 50 \cdot 0.25 \cdot 20 = 250 \text{ (N)}$.

**Bước 2: Áp lực tại điểm thấp nhất**
- Phản lực $N$ hướng lên (vào tâm), $P$ hướng xuống.
  $N_1 - P = F_{ht} \Rightarrow N_1 = P + F_{ht} = 500 + 250 = 750 \text{ (N)}$.
  (Cảm giác nặng hơn bình thường).

**Bước 3: Áp lực tại điểm cao nhất**
- P hướng xuống (vào tâm), $N$ hướng lên.
  $P - N_2 = F_{ht} \Rightarrow N_2 = P - F_{ht} = 500 - 250 = 250 \text{ (N)}$.
  (Cảm giác hẫng, nhẹ đi một nửa).
        `
    },
    "PHY10-PRAC-CH6-19": {
        level: `Vận dụng cao`,
        topic: `Gia tốc toàn phần (Vừa quay vừa tăng tốc)`,
        question: `Một ô tô bắt đầu chuyển động nhanh dần đều trên một quỹ đạo tròn có bán kính $R = 100 \text{ m}$. Gia tốc tiếp tuyến của xe là $a_t = 2 \text{ m/s}^2$. Tính độ lớn gia tốc toàn phần của xe tại thời điểm $t = 5 \text{ s}$ kể từ lúc khởi hành.`,
        hint: `Chìa khóa tư duy: Gia tốc toàn phần $\vec{a} = \vec{a}_t + \vec{a}_{ht}$. Hai gia tốc này vuông góc với nhau nên $a = \sqrt{a_t^2 + a_{ht}^2}$. Cần tính vận tốc $v$ tại t=5s để tìm $a_{ht}$.`,
        solution: `
**Bước 1: Tính gia tốc hướng tâm tại t = 5s**
- Tốc độ dài của xe (tăng đều): $v = a_t \cdot t = 2 \cdot 5 = 10 \text{ (m/s)}$.
- Gia tốc hướng tâm lúc này: $a_{ht} = \frac{v^2}{R} = \frac{100}{100} = 1 \text{ (m/s}^2\text{)}$.

**Bước 2: Tính gia tốc toàn phần**
- $a = \sqrt{a_t^2 + a_{ht}^2} = \sqrt{2^2 + 1^2} = \sqrt{5} \approx 2.24 \text{ (m/s}^2\text{)}$.
- Kết luận: Gia tốc toàn phần của xe lúc đó là $\sqrt{5} \text{ m/s}^2$.
        `
    },
    "PHY10-PRAC-CH6-20": {
        level: `Vận dụng cao`,
        topic: `Chuyển động trên cầu vồng có góc nghiêng`,
        question: `Một quả cầu nhỏ được đặt trên đỉnh một khối bán cầu nhẵn cố định bán kính $R = 0.5 \text{ m}$. Truyền cho quả cầu một vận tốc ngang $v_0 = 1 \text{ m/s}$. Hỏi quả cầu sẽ trượt trên bề mặt bán cầu đến độ cao $h$ (so với đáy) bằng bao nhiêu thì bắt đầu rời mặt bán cầu? ($g=10 \text{ m/s}^2$).`,
        hint: `Chìa khóa tư duy: Tương tự bài VDC chương 4, nhưng lần này $v_0 \neq 0$. Dùng BTCN tìm $v^2$ tại góc $\alpha$. Cho $N=0$ tại phương hướng tâm $mg\cos\alpha = m\frac{v^2}{R}$ để tìm $\cos\alpha$.`,
        solution: `
**Bước 1: BTCN từ đỉnh đến góc alpha**
- Mốc thế năng ở đáy bán cầu. Đỉnh cao R, điểm xét cao $h = R\cos\alpha$.
- $mgR + \frac{1}{2}mv_0^2 = mgh + \frac{1}{2}mv^2 \Rightarrow v^2 = v_0^2 + 2g(R-h)$.

**Bước 2: Điều kiện rời quỹ đạo**
- Phương bán kính hướng tâm: $mg\cos\alpha - N = m\frac{v^2}{R}$.
- Lúc rời: $N = 0 \Rightarrow g\frac{h}{R} = \frac{v^2}{R} \Rightarrow gh = v^2$.
- Thay $v^2$ vào:
  $gh = v_0^2 + 2gR - 2gh \Rightarrow 3gh = v_0^2 + 2gR$.
  $h = \frac{v_0^2 + 2gR}{3g}$.

**Bước 3: Thay số**
- $h = \frac{1^2 + 2 \cdot 10 \cdot 0.5}{3 \cdot 10} = \frac{1 + 10}{30} = \frac{11}{30} \approx 0.367 \text{ (m)}$.
- Kết luận: Vật rời khỏi bán cầu ở độ cao khoảng $36.7 \text{ cm}$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_PRACTICE_PHY10_CH6;
}