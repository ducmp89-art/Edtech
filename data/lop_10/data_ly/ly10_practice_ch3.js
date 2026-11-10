/* ==========================================================================
   S-NOTE 2026 - HỆ THỐNG BÀI TẬP ÔN LUYỆN VẬT LÝ 10 MASTER
   Chương III: Động lực học
   Cấu trúc: 13 Vận dụng (VD) + 12 Vận dụng cao (VDC) = 25 Bài
   (Áp dụng chuẩn String.raw để bảo toàn LaTeX)
   ========================================================================== */

const DATA_PRACTICE_LY10_CH3 = {
    "PHY10-PRAC-CH3-01": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Định luật II Newton cơ bản`,
        question: String.raw`Một vật có khối lượng $m = 2 \text{ kg}$ đang đứng yên trên mặt phẳng ngang. Tác dụng vào vật một lực kéo $F = 10 \text{ N}$ theo phương ngang. Biết hệ số ma sát trượt giữa vật và mặt sàn là $\mu = 0.2$. Lấy $g = 10 \text{ m/s}^2$. Tính gia tốc của vật và quãng đường vật đi được sau $3 \text{ s}$.`,
        hint: String.raw`Chìa khóa tư duy: Phân tích lực theo phương ngang. Gia tốc $a = \frac{F - F_{ms}}{m}$. Sau đó áp dụng công thức động học $s = \frac{1}{2}at^2$.`,
        solution: String.raw`
**Bước 1: Tính lực ma sát**
- Do lực kéo nằm ngang, phản lực $N = mg = 2 \cdot 10 = 20 \text{ (N)}$.
- Lực ma sát trượt: $F_{ms} = \mu N = 0.2 \cdot 20 = 4 \text{ (N)}$.

**Bước 2: Tính gia tốc và quãng đường**
- Áp dụng định luật II Newton: 
  $$a = \frac{F - F_{ms}}{m} = \frac{10 - 4}{2} = 3 \text{ (m/s}^2\text{)}$$
- Quãng đường vật đi được sau 3s (với $v_0 = 0$):
  $$s = \frac{1}{2}at^2 = \frac{1}{2} \cdot 3 \cdot 3^2 = 13.5 \text{ (m)}$$
- Kết luận: Gia tốc là $3 \text{ m/s}^2$, quãng đường là $13.5 \text{ m}$.
        `
    },
    "PHY10-PRAC-CH3-02": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Kéo vật xiên góc`,
        question: String.raw`Kéo một khúc gỗ $m = 5 \text{ kg}$ trên mặt sàn ngang bằng một sợi dây hợp với phương ngang một góc $30^\circ$ chếch lên. Lực kéo có độ lớn $20 \text{ N}$. Hệ số ma sát trượt $\mu = 0.2, g = 10 \text{ m/s}^2$. Tính gia tốc của khúc gỗ.`,
        hint: String.raw`Chìa khóa tư duy: Lực kéo chếch lên làm giảm áp lực N lên sàn. $N = P - F\sin\alpha$. Lực kéo phát động là $F\cos\alpha$.`,
        solution: String.raw`
**Bước 1: Phân tích lực và tìm phản lực N**
- Phương trình cân bằng theo phương thẳng đứng (Oy):
  $$N + F\sin 30^\circ = P \Rightarrow N = mg - F\sin 30^\circ = 50 - 20 \cdot 0.5 = 40 \text{ (N)}$$
- Lực ma sát: $F_{ms} = \mu N = 0.2 \cdot 40 = 8 \text{ (N)}$.

**Bước 2: Tính gia tốc**
- Phương trình chuyển động theo phương ngang (Ox):
  $$F\cos 30^\circ - F_{ms} = ma \Rightarrow a = \frac{F\cos 30^\circ - F_{ms}}{m}$$
  $$a = \frac{20 \cdot \frac{\sqrt{3}}{2} - 8}{5} = \frac{10\sqrt{3} - 8}{5} \approx \frac{17.32 - 8}{5} \approx 1.86 \text{ (m/s}^2\text{)}$$
- Kết luận: Gia tốc của khúc gỗ xấp xỉ $1.86 \text{ m/s}^2$.
        `
    },
    "PHY10-PRAC-CH3-03": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Trượt xuống mặt phẳng nghiêng`,
        question: String.raw`Một vật trượt không vận tốc đầu từ đỉnh mặt phẳng nghiêng góc $\alpha = 30^\circ$ so với phương ngang. Biết hệ số ma sát giữa vật và mặt nghiêng là $\mu = 0.1$. Lấy $g = 10 \text{ m/s}^2$. Tính gia tốc của vật.`,
        hint: String.raw`Chìa khóa tư duy: Trọng lực được phân tích thành $P_x$ (song song mặt nghiêng, kéo vật xuống) và $P_y$ (vuông góc, ép mặt nghiêng). $a = g(\sin\alpha - \mu\cos\alpha)$.`,
        solution: String.raw`
**Bước 1: Phân tích lực trên mặt phẳng nghiêng**
- Thành phần trọng lực kéo vật: $P_x = mg\sin 30^\circ$.
- Áp lực lên mặt nghiêng: $N = P_y = mg\cos 30^\circ$.
- Lực ma sát: $F_{ms} = \mu N = \mu mg\cos 30^\circ$.

**Bước 2: Áp dụng định luật 2 Newton**
- $P_x - F_{ms} = ma \Rightarrow mg\sin 30^\circ - \mu mg\cos 30^\circ = ma$.
- Triệt tiêu m, ta được:
  $$a = g(\sin 30^\circ - \mu\cos 30^\circ) = 10\left(0.5 - 0.1 \cdot \frac{\sqrt{3}}{2}\right) = 5 - 0.5\sqrt{3} \approx 4.13 \text{ (m/s}^2\text{)}$$
- Kết luận: Gia tốc trượt của vật là xấp xỉ $4.13 \text{ m/s}^2$.
        `
    },
    "PHY10-PRAC-CH3-04": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Đẩy vật lên mặt phẳng nghiêng`,
        question: String.raw`Một khối hộp $m = 2 \text{ kg}$ được đẩy lên một mặt phẳng nghiêng góc $45^\circ$ bằng một lực $F = 40 \text{ N}$ hướng dọc theo mặt phẳng nghiêng lên trên. Hệ số ma sát trượt $\mu = 0.2, g = 10 \text{ m/s}^2$. Tính gia tốc của khối hộp.`,
        hint: String.raw`Chìa khóa tư duy: Khi vật cđ đi lên, cả lực ma sát $F_{ms}$ và thành phần $P_x$ đều hướng xuống dọc theo mặt nghiêng, cản trở chuyển động.`,
        solution: String.raw`
**Bước 1: Tính các thành phần lực cản**
- $P_x = mg\sin 45^\circ = 20 \cdot \frac{\sqrt{2}}{2} = 10\sqrt{2} \text{ (N)}$.
- Phản lực $N = mg\cos 45^\circ = 10\sqrt{2} \text{ (N)}$.
- Lực ma sát $F_{ms} = \mu N = 0.2 \cdot 10\sqrt{2} = 2\sqrt{2} \text{ (N)}$.

**Bước 2: Tính gia tốc**
- Phương trình định luật 2 Newton:
  $$F - P_x - F_{ms} = ma \Rightarrow 40 - 10\sqrt{2} - 2\sqrt{2} = 2a$$
  $$40 - 12\sqrt{2} = 2a \Rightarrow a = 20 - 6\sqrt{2} \approx 20 - 8.485 = 11.515 \text{ (m/s}^2\text{)}$$
- Kết luận: Gia tốc của khối hộp là $11.515 \text{ m/s}^2$.
        `
    },
    "PHY10-PRAC-CH3-05": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Hệ hai vật đặt sát nhau`,
        question: String.raw`Hai vật $m_1 = 3 \text{ kg}$ và $m_2 = 1 \text{ kg}$ đặt sát nhau trên mặt bàn nằm ngang không ma sát. Tác dụng một lực đẩy ngang $F = 12 \text{ N}$ vào khối $m_1$ để nó đẩy khối $m_2$ đi. Tính lực tương tác giữa hai vật.`,
        hint: String.raw`Chìa khóa tư duy: Lực ép $N_{12}$ là nội lực. Tìm gia tốc chung $a$ của toàn hệ, rồi tách riêng vật $m_2$ (bị đẩy bởi $N_{12}$) để tính.`,
        solution: String.raw`
**Bước 1: Tính gia tốc hệ**
- Gia tốc chung: $a = \frac{F}{m_1 + m_2} = \frac{12}{3 + 1} = 3 \text{ (m/s}^2\text{)}$.

**Bước 2: Tính lực tương tác**
- Xét riêng vật $m_2$: Lực duy nhất đẩy nó theo phương ngang là lực ép $N_{12}$ do $m_1$ tác dụng.
  $$N_{12} = m_2 \cdot a = 1 \cdot 3 = 3 \text{ (N)}$$
- Kết luận: Lực tương tác giữa hai khối là $3 \text{ N}$.
        `
    },
    "PHY10-PRAC-CH3-06": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Hệ hai vật nối bằng dây (Mặt phẳng ngang)`,
        question: String.raw`Hai chiếc xe đồ chơi $m_1 = 2 \text{ kg}$ và $m_2 = 4 \text{ kg}$ nối với nhau bằng dây nhẹ. Kéo xe $m_2$ bằng lực nằm ngang $F = 18 \text{ N}$ trên sàn nhám có hệ số ma sát $\mu = 0.1$. Lấy $g = 10 \text{ m/s}^2$. Tính lực căng của sợi dây nối hai xe.`,
        hint: String.raw`Chìa khóa tư duy: Lực kéo $F$ kéo toàn hệ có khối lượng $m_1 + m_2$, chống lại ma sát của cả 2 xe. Dây nối chỉ kéo riêng xe đi sau ($m_1$).`,
        solution: String.raw`
**Bước 1: Tính gia tốc chung của hệ**
- Lực ma sát toàn hệ: $F_{ms(he)} = \mu (m_1 + m_2)g = 0.1 \cdot 6 \cdot 10 = 6 \text{ (N)}$.
- Gia tốc: $a = \frac{F - F_{ms(he)}}{m_1 + m_2} = \frac{18 - 6}{6} = 2 \text{ (m/s}^2\text{)}$.

**Bước 2: Tính lực căng dây**
- Xét riêng xe đi sau ($m_1$): Lực phát động là lực căng $T$, cản là $F_{ms1} = \mu m_1 g = 2 \text{ N}$.
  $$T - F_{ms1} = m_1 a \Rightarrow T = F_{ms1} + m_1 a = 2 + 2 \cdot 2 = 6 \text{ (N)}$$
- Kết luận: Lực căng dây là $6 \text{ N}$.
        `
    },
    "PHY10-PRAC-CH3-07": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Hệ vật treo qua ròng rọc (Bàn ngang & Treo)`,
        question: String.raw`Vật $m_1 = 4 \text{ kg}$ nằm trên bàn nhẵn nằm ngang, nối qua ròng rọc với vật $m_2 = 1 \text{ kg}$ treo lơ lửng. Bỏ qua khối lượng dây và ròng rọc. Lấy $g = 10 \text{ m/s}^2$. Tính gia tốc chuyển động của hệ và lực căng dây.`,
        hint: String.raw`Chìa khóa tư duy: Kéo duỗi thẳng hệ. Lực phát động là $P_2$, lực cản bằng 0 (vì bàn nhẵn). $a = \frac{P_2}{m_1 + m_2}$.`,
        solution: String.raw`
**Bước 1: Tính gia tốc hệ**
- Lực kéo hệ chuyển động là $P_2 = m_2 g = 10 \text{ (N)}$.
- Gia tốc: 
  $$a = \frac{P_2}{m_1 + m_2} = \frac{10}{4 + 1} = 2 \text{ (m/s}^2\text{)}$$

**Bước 2: Tính lực căng dây**
- Xét vật $m_1$ (trên bàn): Lực duy nhất theo phương chuyển động là lực căng $T$.
  $$T = m_1 a = 4 \cdot 2 = 8 \text{ (N)}$$
- (Thử lại với $m_2$: $P_2 - T = m_2 a \Rightarrow 10 - 8 = 1 \cdot 2$. Đúng).
- Kết luận: Gia tốc là $2 \text{ m/s}^2$, lực căng dây là $8 \text{ N}$.
        `
    },
    "PHY10-PRAC-CH3-08": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Máy Atwood cơ bản`,
        question: String.raw`Cho cơ hệ máy Atwood gồm hai vật $m_1 = 300 \text{ g}$ và $m_2 = 200 \text{ g}$ nối với nhau qua ròng rọc. Lấy $g = 10 \text{ m/s}^2$. Khi hệ chuyển động, tính áp lực tác dụng lên trục ròng rọc.`,
        hint: String.raw`Chìa khóa tư duy: Áp lực lên trục ròng rọc là $Q = 2T$. Cần tìm $a$ rồi tìm $T$.`,
        solution: String.raw`
**Bước 1: Tính gia tốc và lực căng dây**
- Đổi: $m_1 = 0.3 \text{ kg}, m_2 = 0.2 \text{ kg} \Rightarrow P_1 = 3 \text{ N}, P_2 = 2 \text{ N}$.
- Gia tốc hệ: 
  $$a = \frac{P_1 - P_2}{m_1 + m_2} = \frac{3 - 2}{0.5} = 2 \text{ (m/s}^2\text{)}$$
- Xét vật 1 (đi xuống):
  $$P_1 - T = m_1 a \Rightarrow T = 3 - 0.3 \cdot 2 = 2.4 \text{ (N)}$$

**Bước 2: Tính áp lực lên ròng rọc**
- Dây vắt qua 2 bên ròng rọc kéo trục xuống bằng lực $Q = 2T$.
- $Q = 2 \cdot 2.4 = 4.8 \text{ (N)}$.
- Kết luận: Áp lực lên trục ròng rọc là $4.8 \text{ N}$.
        `
    },
    "PHY10-PRAC-CH3-09": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Lực quán tính (Thang máy)`,
        question: String.raw`Một người có khối lượng $50 \text{ kg}$ đứng trong một thang máy đang đi xuống chậm dần đều với gia tốc $2 \text{ m/s}^2$. Lấy $g = 10 \text{ m/s}^2$. Tính lực ép của người đó lên sàn thang máy.`,
        hint: String.raw`Chìa khóa tư duy: Đi xuống chậm dần đều thì $\vec{a}$ hướng LÊN. Suy ra lực quán tính $\vec{F}_{qt} = -m\vec{a}$ sẽ hướng XUỐNG, cùng chiều với trọng lực. Trạng thái tăng trọng.`,
        solution: String.raw`
**Bước 1: Xác định chiều lực quán tính**
- Thang máy cđ đi xuống chậm dần đều $\Rightarrow$ gia tốc $\vec{a}$ có hướng lên trên.
- Lực quán tính $\vec{F}_{qt}$ ngược chiều $\vec{a}$ nên hướng thẳng đứng xuống dưới.
- Độ lớn: $F_{qt} = ma = 50 \cdot 2 = 100 \text{ (N)}$.

**Bước 2: Tính phản lực (Áp lực lên sàn)**
- Áp lực đè lên sàn bằng tổng trọng lượng và lực quán tính (cùng hướng):
  $$N = P + F_{qt} = mg + ma = 500 + 100 = 600 \text{ (N)}$$
- Kết luận: Lực ép của người lên sàn là $600 \text{ N}$.
        `
    },
    "PHY10-PRAC-CH3-10": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Cân bằng 3 lực (Định lý Lami)`,
        question: String.raw`Một vật nặng $P = 20 \text{ N}$ được treo nằm yên bằng 2 sợi dây $OA$ và $OB$. Biết dây $OA$ nằm ngang, dây $OB$ hợp với trần nhà một góc $30^\circ$. Tính lực căng của hai sợi dây.`,
        hint: String.raw`Chìa khóa tư duy: Áp dụng điều kiện cân bằng $\vec{P} + \vec{T}_A + \vec{T}_B = \vec{0}$. Có thể dùng tam giác lực (vuông) vì $OA$ nằm ngang và $P$ đứng.`,
        solution: String.raw`
**Bước 1: Vẽ và giải tam giác lực**
- $\vec{P}$ (thẳng đứng xuống), $\vec{T}_A$ (nằm ngang), $\vec{T}_B$ (chếch lên, tạo góc $30^\circ$ với trần ngang, tức tạo góc $60^\circ$ với $\vec{P}$).
- Ta có $\vec{T}_B$ phải cân bằng với hợp lực của $\vec{P}$ và $\vec{T}_A$.
- Tam giác tạo bởi $P, T_A, T_B$ là tam giác vuông tại góc giữa $P$ và $T_A$.
- Góc giữa $\vec{T}_B$ và $\vec{P}$ là $60^\circ$.
  $$\cos 60^\circ = \frac{P}{T_B} \Rightarrow T_B = \frac{P}{\cos 60^\circ} = \frac{20}{0.5} = 40 \text{ (N)}$$
  $$\tan 60^\circ = \frac{T_A}{P} \Rightarrow T_A = P \tan 60^\circ = 20\sqrt{3} \approx 34.64 \text{ (N)}$$
- Kết luận: $T_A = 20\sqrt{3} \text{ N}$ và $T_B = 40 \text{ N}$.
        `
    },
    "PHY10-PRAC-CH3-11": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Vật trên xe tăng tốc (Lực quán tính)`,
        question: String.raw`Một chiếc xe tải thùng hở đang chuyển động với gia tốc $a = 3 \text{ m/s}^2$ trên đường thẳng ngang. Một khối hàng $50 \text{ kg}$ đặt trên sàn xe. Hệ số ma sát nghỉ giữa hàng và sàn xe là $0.4$. Hỏi khối hàng có bị trượt trên sàn xe không? Lực ma sát lúc này là bao nhiêu? ($g = 10 \text{ m/s}^2$).`,
        hint: String.raw`Chìa khóa tư duy: Lực tác dụng lên hàng để nó cđ cùng gia tốc với xe là lực ma sát nghỉ (hoặc hiểu theo lực quán tính $F_{qt} = ma$). Kiểm tra xem $ma$ có vượt quá $F_{msn(\max)}$ không.`,
        solution: String.raw`
**Bước 1: Tính lực ma sát nghỉ cực đại và lực quán tính**
- Lực ma sát nghỉ cực đại: $F_{msn(\max)} = \mu_n mg = 0.4 \cdot 50 \cdot 10 = 200 \text{ (N)}$.
- Lực cần thiết để truyền gia tốc cho khối hàng (Lực quán tính):
  $F_{qt} = ma = 50 \cdot 3 = 150 \text{ (N)}$.

**Bước 2: So sánh và kết luận**
- Vì $F_{qt} < F_{msn(\max)}$ (150 < 200), nên khối hàng KHÔNG bị trượt.
- Lực ma sát nghỉ tác dụng lên khối hàng đúng bằng lực quán tính để giữ nó yên so với xe:
  $F_{msn} = 150 \text{ (N)}$.
        `
    },
    "PHY10-PRAC-CH3-12": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Gia tốc hãm phụ thuộc ma sát`,
        question: String.raw`Một ô tô đang chạy với tốc độ $20 \text{ m/s}$ thì tắt máy, trượt trên đường nhựa nhám. Xe đi thêm được $40 \text{ m}$ thì dừng lại. Bằng kiến thức Động lực học, tính hệ số ma sát trượt giữa bánh xe và mặt đường. ($g = 10 \text{ m/s}^2$).`,
        hint: String.raw`Chìa khóa tư duy: Khi tắt máy, lực cản duy nhất là ma sát. Gia tốc $a = -\mu g$. Tìm $a$ từ phương trình động học.`,
        solution: String.raw`
**Bước 1: Tính gia tốc từ động học**
- $v_0 = 20 \text{ m/s}$, $v = 0$, $s = 40 \text{ m}$.
- $v^2 - v_0^2 = 2as \Rightarrow 0 - 20^2 = 2a \cdot 40 \Rightarrow -400 = 80a \Rightarrow a = -5 \text{ (m/s}^2\text{)}$.

**Bước 2: Áp dụng ĐL 2 Newton**
- Theo phương ngang, chỉ có ma sát cản: $-F_{ms} = ma \Rightarrow -\mu mg = ma \Rightarrow a = -\mu g$.
- Suy ra: $\mu = \frac{-a}{g} = \frac{-(-5)}{10} = 0.5$.
- Kết luận: Hệ số ma sát là $0.5$.
        `
    },
    "PHY10-PRAC-CH3-13": {
        level: String.raw`Vận dụng`,
        topic: String.raw`Cân bằng trên mặt phẳng nghiêng`,
        question: String.raw`Một vật khối lượng $m = 4 \text{ kg}$ đứng yên trên mặt phẳng nghiêng góc $30^\circ$ nhờ một lực kéo $F$ hướng dọc theo mặt phẳng nghiêng lên trên. Bỏ qua ma sát. Tính độ lớn lực $F$ và phản lực $N$ của mặt phẳng nghiêng. ($g=10 \text{ m/s}^2$).`,
        hint: String.raw`Chìa khóa tư duy: Lực F cân bằng với thành phần $P_x$ trượt xuống. Phản lực N cân bằng với $P_y$.`,
        solution: String.raw`
**Bước 1: Tính các lực thành phần của P**
- $P_x = mg\sin 30^\circ = 40 \cdot 0.5 = 20 \text{ (N)}$.
- $P_y = mg\cos 30^\circ = 40 \cdot \frac{\sqrt{3}}{2} = 20\sqrt{3} \text{ (N)}$.

**Bước 2: Viết phương trình cân bằng**
- Dọc mặt phẳng: $F - P_x = 0 \Rightarrow F = 20 \text{ (N)}$.
- Vuông góc mặt phẳng: $N - P_y = 0 \Rightarrow N = 20\sqrt{3} \approx 34.64 \text{ (N)}$.
- Kết luận: Lực kéo là $20 \text{ N}$, phản lực là $20\sqrt{3} \text{ N}$.
        `
    },
    "PHY10-PRAC-CH3-14": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Hệ 3 vật nối dây`,
        question: String.raw`Ba khối $m_1 = 1 \text{ kg}, m_2 = 2 \text{ kg}, m_3 = 3 \text{ kg}$ đặt lần lượt từ trước ra sau trên mặt bàn không ma sát. Chúng được nối với nhau bằng các sợi dây nhẹ. Người ta kéo $m_1$ về phía trước bằng lực $F = 12 \text{ N}$. Tính gia tốc của hệ và lực căng của đoạn dây nối $m_2$ và $m_3$.`,
        hint: String.raw`Chìa khóa tư duy: Tìm gia tốc toàn hệ. Dây nối $m_2$ và $m_3$ chỉ làm nhiệm vụ kéo khối lượng $m_3$ đi. Áp dụng $T = m_{sau} \cdot a$.`,
        solution: String.raw`
**Bước 1: Tính gia tốc hệ**
- Gia tốc chung: $a = \frac{F}{m_1 + m_2 + m_3} = \frac{12}{1 + 2 + 3} = \frac{12}{6} = 2 \text{ (m/s}^2\text{)}$.

**Bước 2: Tính lực căng dây nối m2 và m3**
- Gọi lực căng đoạn dây này là $T_{23}$. Lực này có tác dụng kéo vật $m_3$ chuyển động với gia tốc $a$.
- Áp dụng ĐL 2 Newton cho $m_3$: 
  $$T_{23} = m_3 \cdot a = 3 \cdot 2 = 6 \text{ (N)}$$
- (Mở rộng: Lực căng đoạn giữa $m_1$ và $m_2$ là $T_{12} = (m_2 + m_3)a = 5 \cdot 2 = 10 \text{ N}$).
- Kết luận: Lực căng giữa $m_2$ và $m_3$ là $6 \text{ N}$.
        `
    },
    "PHY10-PRAC-CH3-15": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Vật đè lên vật (Chồng khối)`,
        question: String.raw`Một tấm ván khối lượng $M = 3 \text{ kg}$ nằm trên mặt sàn nhẵn. Một vật nhỏ $m = 1 \text{ kg}$ nằm trên tấm ván. Hệ số ma sát trượt giữa $m$ và $M$ là $\mu = 0.2$. Tác dụng lực $F$ nằm ngang lên vật $m$. Hỏi $F$ bằng bao nhiêu để vật $m$ trượt trên $M$? ($g=10 \text{ m/s}^2$).`,
        hint: String.raw`Chìa khóa tư duy: Để m trượt trên M, gia tốc của m phải lớn hơn gia tốc tối đa mà lực ma sát có thể truyền cho M. Gia tốc tối đa của M là $a_M = \frac{F_{ms}}{M}$.`,
        solution: String.raw`
**Bước 1: Tính gia tốc tối đa của tấm ván M**
- Tấm ván chuyển động được là nhờ lực ma sát do m truyền sang.
- Lực ma sát cực đại giữa m và M: $F_{ms(\max)} = \mu mg = 0.2 \cdot 10 = 2 \text{ (N)}$.
- Gia tốc lớn nhất mà tấm ván M có thể nhận: $a_{\max} = \frac{F_{ms(\max)}}{M} = \frac{2}{3} \text{ (m/s}^2\text{)}$.

**Bước 2: Xét điều kiện trượt của vật m**
- Để m trượt trên M, gia tốc của hệ giả định (nếu đi cùng nhau) phải lớn hơn $a_{\max}$ của ván.
- Nếu đi cùng, $a = \frac{F}{m+M} = \frac{F}{4}$.
- Yêu cầu: $\frac{F}{4} > \frac{2}{3} \Rightarrow F > \frac{8}{3} \approx 2.67 \text{ (N)}$.
- Kết luận: Lực $F$ phải lớn hơn $\approx 2.67 \text{ N}$ thì m sẽ trượt trên M.
        `
    },
    "PHY10-PRAC-CH3-16": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Hai vật đặt sát nhau trượt có ma sát`,
        question: String.raw`Hai vật $m_1 = 3 \text{ kg}$ và $m_2 = 2 \text{ kg}$ đặt sát nhau trên mặt bàn nằm ngang. Hệ số ma sát với mặt bàn lần lượt là $\mu_1 = 0.1$ và $\mu_2 = 0.2$. Đẩy $m_1$ bằng một lực $F = 15 \text{ N}$ theo phương ngang (hướng về $m_2$). Tính lực ép giữa hai vật. ($g=10 \text{ m/s}^2$).`,
        hint: String.raw`Chìa khóa tư duy: Tính gia tốc chung của hệ (vì đẩy từ vật có ma sát nhỏ hơn, nên chúng đi cùng nhau). Phân tích lực cho vật 2 để tìm lực ép.`,
        solution: String.raw`
**Bước 1: Tính gia tốc chung**
- Lực ma sát của từng vật: $F_{ms1} = 0.1 \cdot 30 = 3 \text{ N}$; $F_{ms2} = 0.2 \cdot 20 = 4 \text{ N}$.
- Lực cản tổng cộng: $F_{ms(he)} = 3 + 4 = 7 \text{ (N)}$.
- Gia tốc hệ: $a = \frac{F - F_{ms(he)}}{m_1 + m_2} = \frac{15 - 7}{5} = \frac{8}{5} = 1.6 \text{ (m/s}^2\text{)}$.

**Bước 2: Tìm lực ép N_12**
- Lực làm vật 2 chuyển động gồm: Lực ép $N_{12}$ (đẩy) và Lực ma sát $F_{ms2}$ (cản).
- ĐL 2 Newton cho $m_2$: $N_{12} - F_{ms2} = m_2 a$.
  $$N_{12} = F_{ms2} + m_2 a = 4 + 2 \cdot 1.6 = 4 + 3.2 = 7.2 \text{ (N)}$$
- Kết luận: Lực ép giữa 2 khối là $7.2 \text{ N}$.
        `
    },
    "PHY10-PRAC-CH3-17": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Hệ vật trên mặt nghiêng và treo ngang`,
        question: String.raw`Vật $m_1 = 2 \text{ kg}$ đặt trên mặt phẳng nghiêng $30^\circ$, nối với vật $m_2 = 1 \text{ kg}$ treo thẳng đứng bằng một sợi dây vắt qua đỉnh dốc nhẵn. Hệ số ma sát giữa $m_1$ và mặt nghiêng là $\mu = 0.1$. Lấy $g = 10 \text{ m/s}^2$. Xác định chiều chuyển động và tính gia tốc của hệ.`,
        hint: String.raw`Chìa khóa tư duy: So sánh lực kéo $P_2$ và thành phần $P_{x1}$. Nếu $P_{x1} > P_2$, vật 1 có xu hướng trượt xuống. Chiều ma sát sẽ cản lại chiều này.`,
        solution: String.raw`
**Bước 1: Dự đoán chiều chuyển động**
- Trọng lượng kéo $m_2$ xuống: $P_2 = m_2 g = 10 \text{ (N)}$.
- Lực kéo $m_1$ dọc dốc xuống: $P_{x1} = m_1 g \sin 30^\circ = 20 \cdot 0.5 = 10 \text{ (N)}$.
- Ta thấy $P_2 = P_{x1} = 10 \text{ N}$.
- Lực ma sát cực đại trên dốc: $F_{ms(\max)} = \mu m_1 g \cos 30^\circ = 0.1 \cdot 20 \cdot \frac{\sqrt{3}}{2} = \sqrt{3} \approx 1.732 \text{ (N)}$.
- Vì $P_2 = P_{x1}$, ngoại lực chênh lệch bằng 0 $\Rightarrow$ hệ **ĐỨNG YÊN** (cân bằng), ma sát nghỉ lúc này bằng 0. Gia tốc bằng 0.

*(Giả sử đề bài $m_1 = 4 \text{ kg} \Rightarrow P_{x1} = 20 \text{ N}$. Hệ sẽ trượt về phía $m_1$. Khi đó $a = \frac{P_{x1} - P_2 - F_{ms}}{m_1 + m_2}$).*
        `
    },
    "PHY10-PRAC-CH3-18": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Ròng rọc có ma sát (Lực căng 2 nhánh khác nhau)`,
        question: String.raw`Một dây vắt qua ròng rọc nối hai vật $m_1 = 3 \text{ kg}, m_2 = 2 \text{ kg}$. Trục ròng rọc có ma sát, làm ròng rọc tác dụng một mô-men cản tương đương với một lực cản $\Delta F = 2 \text{ N}$ ở trên vành. Tính gia tốc của hai vật. ($g = 10 \text{ m/s}^2$).`,
        hint: String.raw`Chìa khóa tư duy: Bình thường $T_1 = T_2$. Có ma sát ở ròng rọc thì $T_1 - T_2 = \Delta F$ (với $T_1$ bên kéo đi xuống). Phương trình toàn hệ: $P_1 - P_2 - \Delta F = (m_1+m_2)a$.`,
        solution: String.raw`
**Bước 1: Phương trình động lực học tổng quát**
- Do $m_1 > m_2$, hệ chuyển động phía $m_1$ đi xuống, $m_2$ đi lên.
- ĐL 2 Newton cho $m_1$: $P_1 - T_1 = m_1 a \quad (1)$.
- ĐL 2 Newton cho $m_2$: $T_2 - P_2 = m_2 a \quad (2)$.
- Độ chênh lệch lực căng kéo ròng rọc bị cản: $T_1 - T_2 = \Delta F \quad (3)$.

**Bước 2: Giải hệ phương trình**
- Từ (1): $T_1 = P_1 - m_1 a$. Từ (2): $T_2 = P_2 + m_2 a$.
- Thay vào (3): $(P_1 - m_1 a) - (P_2 + m_2 a) = \Delta F$.
  $$P_1 - P_2 - \Delta F = (m_1 + m_2)a$$
  $$30 - 20 - 2 = (3 + 2)a \Rightarrow 8 = 5a \Rightarrow a = 1.6 \text{ (m/s}^2\text{)}$$
- Kết luận: Gia tốc của hệ là $1.6 \text{ m/s}^2$.
        `
    },
    "PHY10-PRAC-CH3-19": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Máy Atwood (Dứt dây)`,
        question: String.raw`Máy Atwood có $m_1 = 600 \text{ g}, m_2 = 400 \text{ g}$ ban đầu đứng yên (chênh lệch độ cao $h = 0$). Thả cho hệ chuyển động. Sau $1.5 \text{ s}$, dây nối đột nhiên bị đứt. Tìm khoảng cách giữa 2 vật thêm $1 \text{ s}$ nữa kể từ lúc đứt dây. ($g = 10 \text{ m/s}^2$).`,
        hint: String.raw`Chìa khóa tư duy: GĐ1 (hệ nối): Tìm gia tốc $a$, tính quãng đường đi được trong 1.5s (lúc này $m_1$ thấp hơn $m_2$ một đoạn $2s$) và vận tốc $v$ khi đứt. GĐ2 (đứt): Rơi tự do độc lập với cùng $v_0 = v$. $m_1$ ném thẳng đứng xuống, $m_2$ ném thẳng đứng lên.`,
        solution: String.raw`
**Bước 1: Tính toán trong 1.5s đầu**
- Gia tốc hệ: $a = \frac{6 - 4}{1} = 2 \text{ (m/s}^2\text{)}$.
- Quãng đường mỗi vật đi được: $s_0 = 0.5 \cdot 2 \cdot (1.5)^2 = 2.25 \text{ (m)}$.
  Vị trí lúc đứt (gốc ở độ cao ban đầu, chiều dương xuống): $y_{01} = 2.25 \text{ m}$, $y_{02} = -2.25 \text{ m}$.
- Vận tốc lúc đứt: $v_0 = 2 \cdot 1.5 = 3 \text{ (m/s)}$. ($v_{01} = 3$ hướng xuống, $v_{02} = -3$ hướng lên do $m_2$ đang đi lên).

**Bước 2: Phân tích 1s sau khi đứt dây**
- Hai vật cđ như những vật bị ném (rơi tự do với gia tốc $g = 10$).
- Tọa độ $m_1$: $y_1 = y_{01} + v_{01}t + 0.5gt^2 = 2.25 + 3(1) + 5(1)^2 = 2.25 + 3 + 5 = 10.25 \text{ (m)}$.
- Tọa độ $m_2$: $y_2 = y_{02} + v_{02}t + 0.5gt^2 = -2.25 - 3(1) + 5(1)^2 = -2.25 - 3 + 5 = -0.25 \text{ (m)}$.
- Khoảng cách 2 vật: $\Delta y = y_1 - y_2 = 10.25 - (-0.25) = 10.5 \text{ (m)}$.
        `
    },
    "PHY10-PRAC-CH3-20": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Khối lượng thay đổi (Nước rỉ)`,
        question: String.raw`Một toa xe chở nước bắt đầu chuyển động trên đường ngang bằng một lực kéo $F$ không đổi. Biết toa bị thủng và nước chảy xuống đường theo phương thẳng đứng với lưu lượng khối lượng $\mu$ (kg/s). Gia tốc của toa xe theo thời gian t sẽ biến đổi như thế nào? Viết biểu thức gia tốc $a(t)$. (Bỏ qua ma sát, khối lượng xe ban đầu là $M_0$).`,
        hint: String.raw`Chìa khóa tư duy: Khối lượng của hệ xe giảm dần theo quy luật $M(t) = M_0 - \mu t$. Vì lực kéo F không đổi, $a = F/M(t)$ sẽ tăng dần.`,
        solution: String.raw`
**Bước 1: Tính khối lượng xe theo thời gian**
- Khối lượng ban đầu của xe là $M_0$. Nước chảy với lưu lượng $\mu$ (kg/s).
- Khối lượng tại thời điểm t: $M(t) = M_0 - \mu t$.
- (Nước chảy rơi thẳng đứng xuống đường không mang theo động lượng theo phương ngang của xe, nên không gây ra lực đẩy phản lực nào theo phương cđ).

**Bước 2: Biểu thức gia tốc**
- Áp dụng Định luật 2 Newton tại thời điểm t:
  $$a(t) = \frac{F}{M(t)} = \frac{F}{M_0 - \mu t}$$
- Kết luận: Vì mẫu số giảm dần theo thời gian, gia tốc $a(t)$ sẽ tăng dần và là một hàm đường cong phi tuyến.
        `
    },
    "PHY10-PRAC-CH3-21": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Lực quán tính (Mặt phẳng nghiêng trong xe)`,
        question: String.raw`Một nêm hình tam giác có mặt phẳng nghiêng góc $\alpha = 30^\circ$ đặt trên sàn một xe tải. Trên nêm có một vật khối lượng $m$. Cả hệ không có ma sát. Xe tải phải chuyển động với gia tốc $a$ theo phương ngang bằng bao nhiêu và hướng nào để vật $m$ nằm yên đối với nêm?`,
        hint: String.raw`Chìa khóa tư duy: HQC gắn với xe có gia tốc $\vec{a}$, vật m chịu lực quán tính $F_{qt} = ma$ theo phương ngang. Thành phần $F_{qt}$ ép dọc theo mặt nghiêng lên trên phải cân bằng với thành phần $P_x$ trượt xuống.`,
        solution: String.raw`
**Bước 1: Phân tích lực trong HQC phi quán tính**
- Để m bị ép lên dốc, lực quán tính $\vec{F}_{qt}$ phải có hướng đẩy vào dốc (nghĩa là gia tốc $\vec{a}$ của xe phải hướng ra xa dốc / tiến tới phía trước).
- Các lực tác dụng lên m: $\vec{P}$ (xuống), $\vec{N}$ (vuông góc mp nghiêng), $\vec{F}_{qt}$ (nằm ngang).
- Chọn trục tọa độ song song với mặt nghiêng.
  + Thành phần kéo xuống: $P_x = mg\sin\alpha$.
  + Thành phần đẩy lên dọc dốc của $F_{qt}$: $F_{qt,x} = F_{qt} \cos\alpha = ma\cos\alpha$.

**Bước 2: Cân bằng lực**
- Vật nằm yên trên nêm $\Rightarrow P_x = F_{qt,x}$.
  $$mg\sin\alpha = ma\cos\alpha \Rightarrow a = g\tan\alpha$$
- Thay số: $a = 10 \cdot \tan 30^\circ = \frac{10\sqrt{3}}{3} \approx 5.77 \text{ (m/s}^2\text{)}$.
- Kết luận: Xe tải phải gia tốc tiến tới với $a \approx 5.77 \text{ m/s}^2$.
        `
    },
    "PHY10-PRAC-CH3-22": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Con lắc đơn trong xe ô tô thắng gấp`,
        question: String.raw`Một con lắc đơn treo trên trần một ô tô đang chạy với tốc độ $20 \text{ m/s}$. Đột ngột xe phanh gấp với gia tốc $-5 \text{ m/s}^2$. Xác định góc lệch của con lắc so với phương thẳng đứng trong lúc phanh.`,
        hint: String.raw`Chìa khóa tư duy: Xe phanh (gia tốc hướng ra sau) $\Rightarrow$ Lực quán tính $F_{qt} = ma$ hướng tới trước. Con lắc văng tới trước. $\tan\theta = \frac{F_{qt}}{P} = \frac{a}{g}$.`,
        solution: String.raw`
**Bước 1: Xác định lực quán tính**
- Gia tốc của xe $\vec{a}$ ngược chiều chuyển động. Lực quán tính tác dụng lên con lắc có chiều tới trước (cùng chiều chuyển động).
- Độ lớn $F_{qt} = m|a| = 5m$.

**Bước 2: Tìm góc lệch**
- Tại VTCB mới, trọng lực và lực quán tính tạo thành trọng lực biểu kiến $\vec{P}'$.
- $\tan \alpha = \frac{F_{qt}}{P} = \frac{5m}{10m} = 0.5$.
- Bấm máy: $\alpha \approx 26.6^\circ$.
- Kết luận: Con lắc bị lệch tới trước một góc $26.6^\circ$.
        `
    },
    "PHY10-PRAC-CH3-23": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Cân bằng của quả cầu giữa góc tường`,
        question: String.raw`Một quả cầu đồng chất khối lượng $m = 4 \text{ kg}$ tựa vào tường thẳng đứng và được đỡ bởi một mặt nghiêng hợp với tường góc $60^\circ$ (như cái phễu nghiêng). Bỏ qua ma sát. Tính áp lực của quả cầu lên mặt tường thẳng đứng. ($g = 10 \text{ m/s}^2$).`,
        hint: String.raw`Chìa khóa tư duy: Quả cầu chịu 3 lực: P (xuống), $N_1$ (từ tường thẳng, hướng ngang), $N_2$ (từ mặt nghiêng, vuông góc mặt nghiêng, tức tạo góc $30^\circ$ với phương thẳng đứng). Cân bằng theo 2 phương.`,
        solution: String.raw`
**Bước 1: Phân tích các lực và góc**
- Trọng lực $P = 40 \text{ N}$ hướng xuống.
- Phản lực tường $N_1$ hướng ngang.
- Mặt nghiêng tạo góc $60^\circ$ với TƯỜNG (tức là $30^\circ$ so với sàn ngang). Phản lực $N_2$ vuông góc mặt nghiêng, nên sẽ hợp với phương thẳng đứng một góc $30^\circ$.

**Bước 2: Viết phương trình cân bằng**
- Theo phương đứng: $N_2 \cos 30^\circ = P \Rightarrow N_2 \cdot \frac{\sqrt{3}}{2} = 40 \Rightarrow N_2 = \frac{80}{\sqrt{3}} \text{ (N)}$.
- Theo phương ngang: $N_1 = N_2 \sin 30^\circ \Rightarrow N_1 = \left(\frac{80}{\sqrt{3}}\right) \cdot 0.5 = \frac{40}{\sqrt{3}} \approx 23.09 \text{ (N)}$.
- Kết luận: Áp lực lên tường bằng $N_1 \approx 23.09 \text{ N}$.
        `
    },
    "PHY10-PRAC-CH3-24": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Lực kéo tối thiểu (Góc tối ưu)`,
        question: String.raw`Một vật khối lượng $m = 10 \text{ kg}$ nằm trên mặt sàn ngang. Hệ số ma sát $\mu = 0.5$. Muốn kéo vật trượt đều trên sàn, ta có thể kéo xiên góc. Hỏi góc kéo $\alpha$ (so với phương ngang) bằng bao nhiêu thì cần một lực $F$ nhỏ nhất? Tính độ lớn lực $F_{\min}$ đó. ($g = 10 \text{ m/s}^2$).`,
        hint: String.raw`Chìa khóa tư duy: Lập phương trình động lực học $F\cos\alpha = \mu(mg - F\sin\alpha)$. Rút F theo $\alpha$. Dùng toán học (bất đẳng thức hoặc đạo hàm) để tìm min của hàm $F(\alpha)$.`,
        solution: String.raw`
**Bước 1: Lập hàm số F theo góc alpha**
- Phương trình cân bằng ($a=0$):
  $$F\cos\alpha = \mu(mg - F\sin\alpha) \Rightarrow F\cos\alpha + \mu F\sin\alpha = \mu mg$$
  $$F(\cos\alpha + \mu\sin\alpha) = \mu mg \Rightarrow F = \frac{\mu mg}{\cos\alpha + \mu\sin\alpha}$$
- Để $F$ cực tiểu, mẫu số $Y = \cos\alpha + \mu\sin\alpha$ phải cực đại.

**Bước 2: Tìm cực đại của mẫu số**
- Áp dụng BĐT Bunhiacopxki:
  $$Y^2 = (1\cdot\cos\alpha + \mu\cdot\sin\alpha)^2 \le (1^2 + \mu^2)(\cos^2\alpha + \sin^2\alpha) = 1 + \mu^2$$
- Vậy $Y_{\max} = \sqrt{1 + \mu^2}$.
  Dấu "=" xảy ra khi $\frac{\cos\alpha}{1} = \frac{\sin\alpha}{\mu} \Rightarrow \tan\alpha = \mu$.
- Thay $\mu = 0.5 \Rightarrow \tan\alpha = 0.5 \Rightarrow \alpha \approx 26.56^\circ$.
- Lực nhỏ nhất: 
  $$F_{\min} = \frac{\mu mg}{\sqrt{1 + \mu^2}} = \frac{0.5 \cdot 100}{\sqrt{1 + 0.25}} = \frac{50}{\sqrt{1.25}} \approx 44.72 \text{ (N)}$$.
        `
    },
    "PHY10-PRAC-CH3-25": {
        level: String.raw`Vận dụng cao`,
        topic: String.raw`Khối tâm của cơ hệ`,
        question: String.raw`Một nêm bằng gỗ khối lượng $M = 3 \text{ kg}$ góc nghiêng $45^\circ$ nằm trên bàn ngang nhẵn. Một vật nhỏ $m = 1 \text{ kg}$ đặt trên mặt nêm nhẵn. Thả vật trượt xuống nêm. Nêm có chuyển động không? Tính gia tốc của nêm đối với bàn.`,
        hint: String.raw`Chìa khóa tư duy: Vì không có ma sát với bàn ngang, hệ $(M+m)$ là hệ kín theo phương ngang $\Rightarrow$ Khối tâm hệ không đổi theo phương ngang. Gia tốc của m sẽ đẩy M đi lùi lại qua lực phản lực $N$. Giải hệ pt 2 vật.`,
        solution: String.raw`
**Bước 1: Phân tích lực tương tác**
- $m$ tác dụng lên $M$ một áp lực $\vec{N}$ vuông góc với mặt nghiêng. Thành phần ngang của $\vec{N}$ đẩy nêm lùi lại: $N_x = N\sin 45^\circ$.
- $M$ cđ lùi lại với gia tốc $a_M = \frac{N\sin 45^\circ}{M}$.

**Bước 2: Phương trình động lực học HQC gắn với nêm (phi quán tính)**
- Nêm cđ lùi gia tốc $a_M$, trong HQC nêm, vật $m$ chịu lực quán tính $\vec{F}_{qt}$ hướng tới trước.
- Phương vuông góc mặt nêm: $N + F_{qt}\sin 45^\circ = mg\cos 45^\circ \Rightarrow N = m(g\cos 45^\circ - a_M\sin 45^\circ)$.
- Thay N vào pt của nêm:
  $$M a_M = [m(g\cos 45^\circ - a_M\sin 45^\circ)]\sin 45^\circ = mg\cos 45^\circ\sin 45^\circ - m a_M \sin^2 45^\circ$$
  $$3 a_M = 1 \cdot 10 \cdot 0.5 - 1 \cdot a_M \cdot 0.5 \Rightarrow 3 a_M = 5 - 0.5 a_M \Rightarrow 3.5 a_M = 5$$
- $a_M = \frac{5}{3.5} \approx 1.43 \text{ (m/s}^2\text{)}$.
- Kết luận: Nêm giật lùi với gia tốc $1.43 \text{ m/s}^2$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_PRACTICE_PHY10_CH3;
}