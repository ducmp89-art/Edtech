/* ==========================================================================
   S-NOTE 2026 - HỆ THỐNG BÀI TẬP ÔN LUYỆN VẬT LÝ 10 MASTER
   Chương V: Động lượng
   Cấu trúc: 10 Vận dụng (VD) + 10 Vận dụng cao (VDC)
   (Chuỗi string dạng backtick ` ` tích hợp LaTeX)
   ========================================================================== */

const DATA_PRACTICE_LY10_CH5 = {
    "PHY10-PRAC-CH5-01": {
        level: `Vận dụng`,
        topic: `Động lượng của hệ vật`,
        question: `Một hệ gồm hai vật có khối lượng $m_1 = 3 \text{ kg}$ và $m_2 = 4 \text{ kg}$ đang chuyển động với vận tốc lần lượt là $v_1 = 4 \text{ m/s}$ và $v_2 = 3 \text{ m/s}$. Biết hướng chuyển động của hai vật vuông góc với nhau. Tính độ lớn động lượng của hệ hai vật.`,
        hint: `Chìa khóa tư duy: Động lượng là đại lượng vectơ $\vec{p} = \vec{p}_1 + \vec{p}_2$. Vì hai vectơ thành phần vuông góc với nhau, áp dụng định lý Pytago để tính độ lớn động lượng tổng hợp.`,
        solution: `
**Bước 1: Tính động lượng của từng vật**
- Động lượng vật 1: $p_1 = m_1 v_1 = 3 \cdot 4 = 12 \text{ (kg}\cdot\text{m/s)}$.
- Động lượng vật 2: $p_2 = m_2 v_2 = 4 \cdot 3 = 12 \text{ (kg}\cdot\text{m/s)}$.

**Bước 2: Tính động lượng của hệ**
- Do $\vec{v}_1 \perp \vec{v}_2 \Rightarrow \vec{p}_1 \perp \vec{p}_2$.
- Độ lớn động lượng của hệ:
  $$p = \sqrt{p_1^2 + p_2^2} = \sqrt{12^2 + 12^2} = 12\sqrt{2} \approx 16.97 \text{ (kg}\cdot\text{m/s)}$$
- Kết luận: Độ lớn động lượng của hệ là $12\sqrt{2} \text{ kg}\cdot\text{m/s}$.
        `
    },
    "PHY10-PRAC-CH5-02": {
        level: `Vận dụng`,
        topic: `Độ biến thiên động lượng và Xung lượng`,
        question: `Một quả bóng khối lượng $m = 200 \text{ g}$ bay ngang với tốc độ $15 \text{ m/s}$ đập vuông góc vào một bức tường rồi bị bật ngược trở lại với tốc độ $10 \text{ m/s}$. Thời gian va chạm giữa bóng và tường là $0.05 \text{ s}$. Tính lực trung bình do tường tác dụng lên quả bóng.`,
        hint: `Chìa khóa tư duy: Chọn chiều dương là chiều bóng bật ra. Vận tốc lúc đầu ngược chiều dương nên mang dấu âm. Lực trung bình được tính qua công thức $\vec{F} = \frac{\Delta\vec{p}}{\Delta t}$.`,
        solution: `
**Bước 1: Tính độ biến thiên động lượng**
- Đổi khối lượng: $m = 200 \text{ g} = 0.2 \text{ kg}$.
- Chọn chiều dương cùng chiều với vận tốc bật ra. 
- Vận tốc ban đầu: $v_1 = -15 \text{ m/s}$. Vận tốc lúc sau: $v_2 = 10 \text{ m/s}$.
- Độ biến thiên động lượng:
  $$\Delta p = m \cdot v_2 - m \cdot v_1 = m(v_2 - v_1) = 0.2(10 - (-15)) = 0.2 \cdot 25 = 5 \text{ (kg}\cdot\text{m/s)}$$

**Bước 2: Tính lực trung bình**
- Áp dụng công thức liên hệ giữa xung lượng và độ biến thiên động lượng ($F \Delta t = \Delta p$):
  $$F = \frac{\Delta p}{\Delta t} = \frac{5}{0.05} = 100 \text{ (N)}$$
- Kết luận: Lực trung bình tường tác dụng lên quả bóng có độ lớn $100 \text{ N}$ và cùng hướng với hướng bóng bật ra.
        `
    },
    "PHY10-PRAC-CH5-03": {
        level: `Vận dụng`,
        topic: `Xung lượng của lực hãm`,
        question: `Một ô tô khối lượng $2 \text{ tấn}$ đang chạy với tốc độ $72 \text{ km/h}$ thì hãm phanh. Ô tô trượt trên mặt đường và dừng hẳn sau $4 \text{ s}$. Dùng khái niệm xung lượng của lực, hãy tính độ lớn lực hãm phanh trung bình tác dụng lên ô tô.`,
        hint: `Chìa khóa tư duy: Hãm phanh đến khi dừng hẳn nghĩa là $v_{sau} = 0$. Xung lượng của lực hãm bằng độ biến thiên động lượng của ô tô.`,
        solution: `
**Bước 1: Xác định các đại lượng**
- Khối lượng: $m = 2000 \text{ kg}$.
- Tốc độ ban đầu: $v_1 = 72 \text{ km/h} = 20 \text{ m/s}$. Tốc độ lúc sau: $v_2 = 0 \text{ m/s}$.
- Thời gian hãm phanh: $\Delta t = 4 \text{ s}$.

**Bước 2: Áp dụng định lý xung lượng**
- Chọn chiều dương là chiều chuyển động của ô tô ban đầu.
- $\Delta p = p_2 - p_1 = m \cdot 0 - m \cdot v_1 = -2000 \cdot 20 = -40000 \text{ (kg}\cdot\text{m/s)}$.
- Xung lượng của lực hãm: $F \cdot \Delta t = \Delta p \Rightarrow F = \frac{\Delta p}{\Delta t} = \frac{-40000}{4} = -10000 \text{ (N)}$.
- Kết luận: Độ lớn lực hãm phanh trung bình là $10000 \text{ N}$ (dấu trừ thể hiện lực ngược chiều chuyển động).
        `
    },
    "PHY10-PRAC-CH5-04": {
        level: `Vận dụng`,
        topic: `Va chạm mềm 1 chiều`,
        question: `Một toa xe khối lượng $m_1 = 3 \text{ tấn}$ đang chạy với tốc độ $4 \text{ m/s}$ thì đâm vào toa xe thứ hai có khối lượng $m_2 = 2 \text{ tấn}$ đang chạy ngược chiều với tốc độ $1 \text{ m/s}$. Sau va chạm hai toa xe móc vào nhau và chuyển động cùng nhau. Tính vận tốc của hai toa xe ngay sau va chạm.`,
        hint: `Chìa khóa tư duy: Đây là bài toán va chạm mềm. Động lượng của hệ được bảo toàn. Cần chọn một chiều dương để gán dấu cho vận tốc của hai xe trước va chạm.`,
        solution: `
**Bước 1: Phân tích trước va chạm**
- Chọn chiều dương là chiều chuyển động ban đầu của toa xe 1.
- Vận tốc toa 1: $v_1 = 4 \text{ m/s}$. Khối lượng $m_1 = 3000 \text{ kg}$.
- Vận tốc toa 2 (ngược chiều): $v_2 = -1 \text{ m/s}$. Khối lượng $m_2 = 2000 \text{ kg}$.
- Tổng động lượng hệ trước va chạm:
  $$p_t = m_1 v_1 + m_2 v_2 = 3000 \cdot 4 + 2000 \cdot (-1) = 12000 - 2000 = 10000 \text{ (kg}\cdot\text{m/s)}$$

**Bước 2: Áp dụng bảo toàn động lượng sau va chạm**
- Hai toa xe móc vào nhau (va chạm mềm) nên có cùng vận tốc $V$.
- Tổng động lượng hệ sau va chạm: $p_s = (m_1 + m_2)V = (3000 + 2000)V = 5000V$.
- Áp dụng ĐLBTĐL: $p_t = p_s \Rightarrow 10000 = 5000V \Rightarrow V = 2 \text{ (m/s)}$.
- Kết luận: Hai toa xe cùng chuyển động với tốc độ $2 \text{ m/s}$ theo chiều ban đầu của toa 1.
        `
    },
    "PHY10-PRAC-CH5-05": {
        level: `Vận dụng`,
        topic: `Chuyển động bằng phản lực`,
        question: `Một tên lửa có khối lượng tổng cộng $M = 1000 \text{ kg}$ (kể cả khí nén) đang bay thẳng đều theo phương ngang với tốc độ $200 \text{ m/s}$. Đột ngột tên lửa phụt ra phía sau một lượng khí khối lượng $m = 200 \text{ kg}$ với tốc độ $500 \text{ m/s}$ đối với tên lửa (trước khi phụt). Tính tốc độ của phần tên lửa còn lại ngay sau khi phụt khí.`,
        hint: `Chìa khóa tư duy: Xác định vận tốc của khí đối với hệ quy chiếu mặt đất. $v_{khí/đất} = v_{k/t} + v_{tên_lửa_trước}$. Sau đó bảo toàn động lượng cho toàn hệ.`,
        solution: `
**Bước 1: Xác định vận tốc các phần tử so với đất**
- Chọn chiều dương là chiều bay của tên lửa.
- Vận tốc ban đầu của hệ: $v_0 = 200 \text{ m/s}$.
- Vận tốc của khí đối với tên lửa: $v_{k/t} = -500 \text{ m/s}$.
- Vận tốc của khí đối với mặt đất: $v_k = v_{k/t} + v_0 = -500 + 200 = -300 \text{ m/s}$.
- Khối lượng phần tên lửa còn lại: $M' = 1000 - 200 = 800 \text{ kg}$.

**Bước 2: Bảo toàn động lượng**
- Động lượng trước khi phụt: $p_t = M \cdot v_0 = 1000 \cdot 200 = 200000$.
- Động lượng sau khi phụt: $p_s = M' \cdot V_{sau} + m \cdot v_k = 800 \cdot V_{sau} + 200 \cdot (-300) = 800V_{sau} - 60000$.
- Cho $p_t = p_s \Rightarrow 200000 = 800V_{sau} - 60000 \Rightarrow 800V_{sau} = 260000 \Rightarrow V_{sau} = 325 \text{ (m/s)}$.
- Kết luận: Tên lửa tăng tốc lên $325 \text{ m/s}$.
        `
    },
    "PHY10-PRAC-CH5-06": {
        level: `Vận dụng`,
        topic: `Xung lượng của vòi nước`,
        question: `Một vòi chữa cháy phun một luồng nước với tốc độ $20 \text{ m/s}$ vuông góc vào một bức tường. Biết tiết diện của vòi nước là $S = 5 \text{ cm}^2$ và khối lượng riêng của nước là $\rho = 1000 \text{ kg/m}^3$. Giả sử nước đập vào tường và chảy trượt xuống (không bật ngược lại). Tính lực mà dòng nước tác dụng lên bức tường.`,
        hint: `Chìa khóa tư duy: Trong thời gian $\Delta t$, tính khối lượng nước đập vào tường. Khối lượng này thay đổi vận tốc từ $v$ về $0$. Độ giảm động lượng bằng xung lượng lực của tường tác dụng lên nước.`,
        solution: `
**Bước 1: Tính khối lượng nước va chạm trong 1 giây**
- Đổi đơn vị: $S = 5 \text{ cm}^2 = 5 \cdot 10^{-4} \text{ m}^2$.
- Thể tích nước đập vào tường trong thời gian $\Delta t = 1 \text{ s}$ là một hình trụ dài $l = v \cdot \Delta t = 20 \cdot 1 = 20 \text{ (m)}$.
- $V = S \cdot l = 5 \cdot 10^{-4} \cdot 20 = 0.01 \text{ (m}^3\text{)}$.
- Khối lượng nước: $m = \rho V = 1000 \cdot 0.01 = 10 \text{ (kg)}$.

**Bước 2: Tính lực tác dụng**
- Trong 1s, 10kg nước đang bay với $v = 20 \text{ m/s}$ bị tường làm dừng lại theo phương ngang ($v' = 0$).
- Độ biến thiên động lượng của nước: $\Delta p = 0 - m \cdot v = -10 \cdot 20 = -200 \text{ (kg}\cdot\text{m/s)}$.
- Lực do tường tác dụng lên nước: $F' = \frac{\Delta p}{\Delta t} = -200 \text{ N}$.
- Lực nước tác dụng lên tường có cùng độ lớn: $F = 200 \text{ (N)}$.
        `
    },
    "PHY10-PRAC-CH5-07": {
        level: `Vận dụng`,
        topic: `Va chạm đàn hồi xuyên tâm`,
        question: `Bi A khối lượng $2 \text{ kg}$ chuyển động với tốc độ $5 \text{ m/s}$ va chạm đàn hồi xuyên tâm với bi B khối lượng $3 \text{ kg}$ đang đứng yên. Tính vận tốc của hai viên bi sau va chạm.`,
        hint: `Chìa khóa tư duy: Va chạm đàn hồi bảo toàn cả động lượng và động năng. Áp dụng trực tiếp công thức giải nhanh cho va chạm xuyên tâm: $v_1' = \frac{(m_1 - m_2)v_1 + 2m_2 v_2}{m_1 + m_2}$.`,
        solution: `
**Bước 1: Áp dụng công thức cho bi A**
- $m_1 = 2 \text{ kg}, v_1 = 5 \text{ m/s}$. $m_2 = 3 \text{ kg}, v_2 = 0 \text{ m/s}$.
- Vận tốc bi A sau va chạm:
  $$v_1' = \frac{(m_1 - m_2)v_1 + 2m_2 v_2}{m_1 + m_2} = \frac{(2 - 3)5 + 0}{2 + 3} = \frac{-5}{5} = -1 \text{ (m/s)}$$
  (Bi A bị dội ngược trở lại với tốc độ $1 \text{ m/s}$).

**Bước 2: Áp dụng công thức cho bi B**
- Vận tốc bi B sau va chạm:
  $$v_2' = \frac{(m_2 - m_1)v_2 + 2m_1 v_1}{m_1 + m_2} = \frac{0 + 2 \cdot 2 \cdot 5}{2 + 3} = \frac{20}{5} = 4 \text{ (m/s)}$$
- Kết luận: Bi A quay lại với tốc độ $1 \text{ m/s}$, bi B tiến tới trước với tốc độ $4 \text{ m/s}$.
        `
    },
    "PHY10-PRAC-CH5-08": {
        level: `Vận dụng`,
        topic: `Động lượng của vật chuyển động ném xiên`,
        question: `Một vật khối lượng $m = 0.5 \text{ kg}$ được ném xiên góc $60^\circ$ so với mặt đất nằm ngang với tốc độ ban đầu $v_0 = 20 \text{ m/s}$. Bỏ qua cản không khí. Lấy $g = 10 \text{ m/s}^2$. Tính độ lớn độ biến thiên động lượng của vật từ lúc ném đến khi vật đạt điểm cao nhất trên quỹ đạo.`,
        hint: `Chìa khóa tư duy: $\Delta \vec{p} = \vec{p}_{đỉnh} - \vec{p}_{ném}$. Theo phương ngang, động lượng không đổi. Chỉ có động lượng theo phương thẳng đứng bị thay đổi do trọng lực.`,
        solution: `
**Bước 1: Phân tích các thành phần vận tốc**
- Tại lúc ném: 
  + $v_{0x} = v_0 \cos 60^\circ = 20 \cdot 0.5 = 10 \text{ m/s}$.
  + $v_{0y} = v_0 \sin 60^\circ = 20 \cdot \frac{\sqrt{3}}{2} = 10\sqrt{3} \text{ m/s}$ (hướng lên).
- Tại đỉnh quỹ đạo:
  + $v_x = v_{0x} = 10 \text{ m/s}$.
  + $v_y = 0 \text{ m/s}$.

**Bước 2: Tính độ biến thiên động lượng**
- Theo phương ngang Ox: $\Delta p_x = m v_x - m v_{0x} = 0$.
- Theo phương đứng Oy: $\Delta p_y = m v_y - m v_{0y} = 0.5(0 - 10\sqrt{3}) = -5\sqrt{3} \text{ (kg}\cdot\text{m/s)}$.
- Độ lớn độ biến thiên tổng cộng: $|\Delta \vec{p}| = \sqrt{\Delta p_x^2 + \Delta p_y^2} = \sqrt{0 + 75} = 5\sqrt{3} \approx 8.66 \text{ (kg}\cdot\text{m/s)}$.
*(Mở rộng: Cũng có thể tính bằng $\Delta p = F \cdot \Delta t = mg \cdot t_{lên} = 0.5 \cdot 10 \cdot \frac{10\sqrt{3}}{10} = 5\sqrt{3}$).*
        `
    },
    "PHY10-PRAC-CH5-09": {
        level: `Vận dụng`,
        topic: `Năng lượng hao phí trong va chạm mềm`,
        question: `Một quả cầu khối lượng $m_1 = 2 \text{ kg}$ chuyển động với vận tốc $6 \text{ m/s}$ va chạm mềm vào một quả cầu khác khối lượng $m_2 = 4 \text{ kg}$ đang đứng yên. Tính phần năng lượng đã chuyển hóa thành nội năng (nhiệt năng hao phí) trong quá trình va chạm.`,
        hint: `Chìa khóa tư duy: Tính vận tốc của hệ sau va chạm mềm. Năng lượng hao phí bằng độ giảm động năng của hệ trước và sau va chạm: $Q = W_{d1} - W_{d(hệ\_sau)}$.`,
        solution: `
**Bước 1: Vận tốc sau va chạm**
- Bảo toàn động lượng: $m_1 v_1 + 0 = (m_1 + m_2)V \Rightarrow 2 \cdot 6 = (2 + 4)V \Rightarrow 12 = 6V \Rightarrow V = 2 \text{ (m/s)}$.

**Bước 2: Tính động năng trước và sau**
- Động năng trước: $W_{đt} = \frac{1}{2}m_1 v_1^2 = \frac{1}{2} \cdot 2 \cdot 6^2 = 36 \text{ (J)}$.
- Động năng sau: $W_{đs} = \frac{1}{2}(m_1 + m_2)V^2 = \frac{1}{2} \cdot 6 \cdot 2^2 = 12 \text{ (J)}$.
- Năng lượng hao phí (nội năng): $\Delta W = W_{đt} - W_{đs} = 36 - 12 = 24 \text{ (J)}$.
- Kết luận: Có $24 \text{ J}$ năng lượng cơ học đã chuyển hóa thành nhiệt.
        `
    },
    "PHY10-PRAC-CH5-10": {
        level: `Vận dụng`,
        topic: `Xung lượng của súng liên thanh`,
        question: `Một khẩu súng máy bắn ra $10$ viên đạn mỗi giây. Mỗi viên đạn có khối lượng $20 \text{ g}$ bay ra khỏi nòng súng với vận tốc $500 \text{ m/s}$. Tính lực giật trung bình do súng tác dụng lên vai người bắn.`,
        hint: `Chìa khóa tư duy: Xét trong khoảng thời gian 1 giây. Tổng khối lượng đạn bắn ra là $m_{tổng}$. Lực đẩy đạn đi bằng độ biến thiên động lượng của toàn bộ lượng đạn đó. Lực giật ngược lại bằng với lực đẩy đạn (ĐL3 Newton).`,
        solution: `
**Bước 1: Tính động lượng của đạn bắn ra trong 1s**
- Trong $\Delta t = 1 \text{ s}$, số đạn bắn ra là $n = 10$ viên.
- Tổng khối lượng đạn trong 1s: $m_{tổng} = n \cdot m = 10 \cdot 0.02 = 0.2 \text{ (kg)}$.
- Độ biến thiên động lượng của lượng đạn này: 
  $\Delta p = m_{tổng} \cdot v - 0 = 0.2 \cdot 500 = 100 \text{ (kg}\cdot\text{m/s)}$.

**Bước 2: Tính lực giật trung bình**
- Lực đẩy lên đạn: $F = \frac{\Delta p}{\Delta t} = \frac{100}{1} = 100 \text{ (N)}$.
- Theo ĐL 3 Newton, lực súng giật lên vai bằng độ lớn với lực đẩy đạn: $F_{giật} = 100 \text{ (N)}$.
        `
    },
    "PHY10-PRAC-CH5-11": {
        level: `Vận dụng cao`,
        topic: `Bóng đập nghiêng vào mặt phẳng`,
        question: `Một quả bóng khối lượng $m = 200 \text{ g}$ bay thẳng đến đập vào mặt sàn nhẵn với tốc độ $10 \text{ m/s}$. Hướng quỹ đạo của bóng hợp với pháp tuyến của mặt sàn một góc $30^\circ$. Bóng bật nảy lên với cùng tốc độ và quỹ đạo cũng hợp với pháp tuyến góc $30^\circ$. Tính độ lớn độ biến thiên động lượng của quả bóng.`,
        hint: `Chìa khóa tư duy: Phân tích vận tốc thành 2 thành phần (song song sàn và vuông góc sàn). Thành phần song song bảo toàn. Chỉ có thành phần vuông góc với sàn bị đổi chiều.`,
        solution: `
**Bước 1: Phân tích thành phần vận tốc**
- Trục Ox song song mặt sàn, Oy vuông góc mặt sàn hướng lên trên.
- Trước va chạm: Bóng lao xuống hợp pháp tuyến (Oy) góc $30^\circ$.
  + $v_{1y} = -v \cos 30^\circ$ (hướng xuống).
  + $v_{1x} = v \sin 30^\circ$.
- Sau va chạm: Bóng bật lên.
  + $v_{2y} = v \cos 30^\circ$ (hướng lên).
  + $v_{2x} = v \sin 30^\circ$.

**Bước 2: Độ biến thiên động lượng**
- Theo trục Ox: $\Delta p_x = m v_{2x} - m v_{1x} = 0$.
- Theo trục Oy: $\Delta p_y = m v_{2y} - m v_{1y} = m \cdot v \cos 30^\circ - (-m \cdot v \cos 30^\circ) = 2mv \cos 30^\circ$.
- Thay số: $|\Delta \vec{p}| = 2 \cdot 0.2 \cdot 10 \cdot \frac{\sqrt{3}}{2} = 2\sqrt{3} \approx 3.46 \text{ (kg}\cdot\text{m/s)}$.
        `
    },
    "PHY10-PRAC-CH5-12": {
        level: `Vận dụng cao`,
        topic: `Đạn nổ thành 2 mảnh vuông góc`,
        question: `Một viên đạn khối lượng $M = 2 \text{ kg}$ đang bay theo phương ngang với tốc độ $250 \text{ m/s}$ thì nổ thành hai mảnh có khối lượng bằng nhau. Mảnh thứ nhất bay theo phương thẳng đứng hướng lên với tốc độ $500 \text{ m/s}$. Hỏi mảnh thứ hai bay theo hướng nào, với tốc độ bao nhiêu?`,
        hint: `Chìa khóa tư duy: Khối lượng 2 mảnh bằng nhau $m_1 = m_2 = 1 \text{ kg}$. $\vec{p} = \vec{p}_1 + \vec{p}_2 \Rightarrow \vec{p}_2 = \vec{p} - \vec{p}_1$. Vì mảnh 1 bay thẳng đứng, mảnh gốc bay ngang nên $\vec{p} \perp \vec{p}_1$. Tam giác động lượng là tam giác vuông.`,
        solution: `
**Bước 1: Động lượng các mảnh**
- Động lượng ban đầu: $p = M \cdot V = 2 \cdot 250 = 500 \text{ (kg}\cdot\text{m/s)}$ (Ngang).
- Động lượng mảnh 1: $p_1 = m_1 \cdot v_1 = 1 \cdot 500 = 500 \text{ (kg}\cdot\text{m/s)}$ (Thẳng đứng hướng lên).
- Theo bảo toàn động lượng: $\vec{p}_2 = \vec{p} - \vec{p}_1$.
- Do $\vec{p} \perp \vec{p}_1 \Rightarrow p_2 = \sqrt{p^2 + p_1^2} = \sqrt{500^2 + 500^2} = 500\sqrt{2} \text{ (kg}\cdot\text{m/s)}$.

**Bước 2: Vận tốc mảnh 2**
- $v_2 = \frac{p_2}{m_2} = \frac{500\sqrt{2}}{1} = 500\sqrt{2} \approx 707.1 \text{ (m/s)}$.
- Góc bay: Gọi $\alpha$ là góc hợp bởi $\vec{p}_2$ và phương ngang ($\vec{p}$). 
  $\tan\alpha = \frac{p_1}{p} = \frac{500}{500} = 1 \Rightarrow \alpha = 45^\circ$.
- Kết luận: Mảnh 2 bay chếch xuống dưới (để bù lại phần hướng lên của mảnh 1) hợp với phương ngang một góc $45^\circ$, tốc độ $707.1 \text{ m/s}$.
        `
    },
    "PHY10-PRAC-CH5-13": {
        level: `Vận dụng cao`,
        topic: `Đạn nổ tạo góc bất kỳ (Định lý hàm cos)`,
        question: `Một viên đạn khối lượng $1.5 \text{ kg}$ đang bay ngang với tốc độ $100 \text{ m/s}$ thì nổ thành 2 mảnh. Mảnh thứ nhất khối lượng $0.5 \text{ kg}$ bay với tốc độ $200 \text{ m/s}$ theo hướng hợp với hướng ban đầu một góc $60^\circ$ (chếch lên). Tìm tốc độ của mảnh thứ hai.`,
        hint: `Chìa khóa tư duy: Vẽ tam giác vectơ $\vec{p}_2 = \vec{p} - \vec{p}_1$. Áp dụng định lý hàm số cosin trong tam giác: $p_2^2 = p^2 + p_1^2 - 2p \cdot p_1 \cdot \cos 60^\circ$.`,
        solution: `
**Bước 1: Tính động lượng các mảnh**
- Động lượng ban đầu: $p = 1.5 \cdot 100 = 150 \text{ (kg}\cdot\text{m/s)}$.
- Động lượng mảnh 1: $p_1 = 0.5 \cdot 200 = 100 \text{ (kg}\cdot\text{m/s)}$.
- Khối lượng mảnh 2: $m_2 = 1.5 - 0.5 = 1 \text{ kg}$.

**Bước 2: Áp dụng định lý hàm số cosin**
- Ta có $\vec{p}_2 = \vec{p} - \vec{p}_1$. Bình phương hai vế (vô hướng):
  $$p_2^2 = p^2 + p_1^2 - 2p \cdot p_1 \cdot \cos 60^\circ$$
  $$p_2^2 = 150^2 + 100^2 - 2 \cdot 150 \cdot 100 \cdot 0.5 = 22500 + 10000 - 15000 = 17500$$
- $p_2 = \sqrt{17500} = 50\sqrt{7} \approx 132.29 \text{ (kg}\cdot\text{m/s)}$.
- Tốc độ mảnh 2: $v_2 = \frac{p_2}{m_2} = \frac{132.29}{1} = 132.29 \text{ (m/s)}$.
        `
    },
    "PHY10-PRAC-CH5-14": {
        level: `Vận dụng cao`,
        topic: `Con lắc thử đạn (Ballistic Pendulum)`,
        question: `Một viên đạn khối lượng $m = 10 \text{ g}$ bay với tốc độ $v$ đến cắm vào một bao cát khối lượng $M = 990 \text{ g}$ đang treo yên lặng trên một sợi dây dài $l = 1 \text{ m}$. Sau va chạm, bao cát (chứa đạn) văng lên làm sợi dây lệch một góc lớn nhất là $60^\circ$ so với phương thẳng đứng. Tính tốc độ $v$ của viên đạn trước khi va chạm. ($g = 10 \text{ m/s}^2$).`,
        hint: `Chìa khóa tư duy: Bài toán gồm 2 giai đoạn. GĐ1: Va chạm mềm (bảo toàn động lượng $\rightarrow$ tìm vận tốc $V$ của hệ). GĐ2: Hệ văng lên (bảo toàn cơ năng $\rightarrow$ tìm $V$ dựa vào góc $60^\circ$). Giải ngược từ GĐ2 lên GĐ1.`,
        solution: `
**Bước 1: Xét giai đoạn văng lên (Bảo toàn cơ năng)**
- Hệ $(m+M)$ đạt góc lệch cực đại $\alpha = 60^\circ$, vận tốc bằng 0.
- Độ cao đạt được: $h = l(1 - \cos 60^\circ) = 1(1 - 0.5) = 0.5 \text{ (m)}$.
- BTCN từ VTCB lên đỉnh: $\frac{1}{2}(m+M)V^2 = (m+M)gh$.
- $V = \sqrt{2gh} = \sqrt{2 \cdot 10 \cdot 0.5} = \sqrt{10} \approx 3.16 \text{ (m/s)}$.

**Bước 2: Xét giai đoạn va chạm (Bảo toàn động lượng)**
- Ngay trước va chạm: Đạn có động lượng $mv$, bao cát $0$.
- Ngay sau va chạm: Hệ $(m+M)$ có vận tốc $V$.
- $mv = (m+M)V \Rightarrow 0.01 \cdot v = (0.01 + 0.99) \cdot \sqrt{10} \Rightarrow 0.01v = 1\sqrt{10}$.
- $v = 100\sqrt{10} \approx 316.2 \text{ (m/s)}$.
- Kết luận: Tốc độ viên đạn là $316.2 \text{ m/s}$.
        `
    },
    "PHY10-PRAC-CH5-15": {
        level: `Vận dụng cao`,
        topic: `Tương tác trên các phương vuông góc`,
        question: `Một chiếc xe đẩy khối lượng $M = 100 \text{ kg}$ đang chạy thẳng đều trên mặt đường ngang với tốc độ $4 \text{ m/s}$. Một người khối lượng $m = 50 \text{ kg}$ chạy vuông góc với đường chuyển động của xe với tốc độ $6 \text{ m/s}$ rồi nhảy lên xe. Tính tốc độ của xe (và người) ngay sau khi người đó nhảy lên. (Bỏ qua ma sát ở trục xe).`,
        hint: `Chìa khóa tư duy: Động lượng trước = Động lượng xe + Động lượng người (vuông góc nhau). Động lượng sau = $(M+m)V$. Áp dụng Pytago để tổng hợp 2 vectơ động lượng ban đầu.`,
        solution: `
**Bước 1: Tính động lượng trước khi nhảy**
- Động lượng của xe: $p_{xe} = M \cdot v_M = 100 \cdot 4 = 400 \text{ (kg}\cdot\text{m/s)}$.
- Động lượng của người: $p_{ng} = m \cdot v_m = 50 \cdot 6 = 300 \text{ (kg}\cdot\text{m/s)}$.
- Tổng động lượng hệ trước va chạm (do vuông góc):
  $$p_{trước} = \sqrt{p_{xe}^2 + p_{ng}^2} = \sqrt{400^2 + 300^2} = 500 \text{ (kg}\cdot\text{m/s)}$$

**Bước 2: Tính tốc độ hệ sau va chạm**
- Sau khi người nhảy lên, hệ có khối lượng $(M + m)$ chuyển động với vận tốc $V$.
- $p_{sau} = (M + m)V = (100 + 50)V = 150V$.
- Bảo toàn động lượng: $150V = 500 \Rightarrow V = \frac{500}{150} = \frac{10}{3} \approx 3.33 \text{ (m/s)}$.
- Kết luận: Xe sẽ chuyển động với tốc độ xấp xỉ $3.33 \text{ m/s}$ và bị lệch hướng so với hướng đi ban đầu.
        `
    },
    "PHY10-PRAC-CH5-16": {
        level: `Vận dụng cao`,
        topic: `Bảo toàn động lượng (Dịch chuyển tương đối)`,
        question: `Một chiếc thuyền dài $L = 4 \text{ m}$, khối lượng $M = 150 \text{ kg}$ đang nằm yên trên mặt nước. Một người khối lượng $m = 50 \text{ kg}$ đứng ở mũi thuyền. Khi người đó đi bộ từ mũi thuyền đến lái thuyền thì thuyền bị dịch chuyển một đoạn bằng bao nhiêu so với mặt nước? (Bỏ qua sức cản của nước).`,
        hint: `Chìa khóa tư duy: Ban đầu hệ đứng yên $\Rightarrow \vec{p} = 0$. Suốt quá trình, khối tâm của hệ không đổi vị trí. Áp dụng hệ thức dịch chuyển: $m \Delta x_m + M \Delta x_M = 0$. Hãy cẩn thận với tọa độ tương đối.`,
        solution: `
**Bước 1: Lập phương trình dịch chuyển**
- Gọi $s$ là quãng đường thuyền lùi lại so với mặt nước (theo hướng mũi thuyền). $\Delta x_M = -s$.
- Quãng đường người đi so với thuyền là $L$ (hướng về lái thuyền).
- Do thuyền lùi lại một đoạn $s$, nên quãng đường thực tế người đi so với mặt nước là $\Delta x_m = L - s$.

**Bước 2: Bảo toàn vị trí khối tâm (hoặc tích phân ĐLBT Động lượng)**
- $m \cdot \Delta x_m + M \cdot \Delta x_M = 0$
  $$m(L - s) + M(-s) = 0 \Rightarrow mL - ms - Ms = 0 \Rightarrow mL = (m+M)s$$
- $s = L \cdot \frac{m}{m+M} = 4 \cdot \frac{50}{50 + 150} = 4 \cdot \frac{50}{200} = 4 \cdot 0.25 = 1 \text{ (m)}$.
- Kết luận: Thuyền sẽ bị lùi lại $1 \text{ m}$ so với mặt nước.
        `
    },
    "PHY10-PRAC-CH5-17": {
        level: `Vận dụng cao`,
        topic: `Va chạm đàn hồi có quỹ đạo lệch`,
        question: `Viên bi A khối lượng $m$ đang chuyển động với tốc độ $10 \text{ m/s}$ thì va chạm đàn hồi hoàn toàn với bi B khối lượng $m$ đang đứng yên. Sau va chạm, hướng chuyển động của bi A bị lệch đi $30^\circ$ so với hướng ban đầu. Tính tốc độ của bi A và bi B ngay sau va chạm.`,
        hint: `Chìa khóa tư duy: Trong va chạm đàn hồi giữa 2 vật có KHỐI LƯỢNG BẰNG NHAU (vật đâm vào vật đứng yên), sau va chạm 2 vật luôn văng ra theo 2 phương vuông góc nhau ($\vec{p}_A' \perp \vec{p}_B'$). Tam giác vectơ động lượng là tam giác vuông.`,
        solution: `
**Bước 1: Tính chất va chạm đàn hồi 2 vật cùng khối lượng**
- BTĐL: $\vec{p} = \vec{p}_A' + \vec{p}_B'$.
- Động năng bảo toàn (triệt tiêu m): $v^2 = v_A'^2 + v_B'^2 \Rightarrow p^2 = p_A'^2 + p_B'^2$.
- Từ hệ thức cộng vectơ và định lý Pytago, ta suy ra $\vec{p}_A'$ vuông góc với $\vec{p}_B'$.
- Do đó tam giác tạo bởi $\vec{p}, \vec{p}_A', \vec{p}_B'$ là tam giác vuông có cạnh huyền là $p$.

**Bước 2: Dùng hệ thức lượng tam giác vuông**
- Hướng của A sau va chạm lệch $30^\circ$ so với hướng ban đầu ($p$).
  $p_A' = p \cdot \cos 30^\circ \Rightarrow m \cdot v_A' = m \cdot v \cdot \cos 30^\circ \Rightarrow v_A' = 10 \cdot \frac{\sqrt{3}}{2} = 5\sqrt{3} \approx 8.66 \text{ (m/s)}$.
- Tương tự, cạnh góc vuông còn lại là của $p_B'$:
  $p_B' = p \cdot \sin 30^\circ \Rightarrow v_B' = 10 \cdot 0.5 = 5 \text{ (m/s)}$.
- Kết luận: Tốc độ bi A là $5\sqrt{3} \text{ m/s}$, tốc độ bi B là $5 \text{ m/s}$.
        `
    },
    "PHY10-PRAC-CH5-18": {
        level: `Vận dụng cao`,
        topic: `Xung lượng vật rơi vào đĩa cân`,
        question: `Một vật $m = 1 \text{ kg}$ rơi tự do từ độ cao $5 \text{ m}$ xuống một đĩa cân nhạy. Ngay sau khi chạm đĩa cân, vật nằm im trên đĩa cân (va chạm mềm). Thời gian va chạm (từ lúc chạm đĩa đến lúc nằm im trên đĩa) là $0.1 \text{ s}$. Lấy $g = 10 \text{ m/s}^2$. Tính lực ép trung bình lớn nhất của vật lên đĩa cân trong khoảng thời gian đó.`,
        hint: `Chìa khóa tư duy: Rơi 5m tìm được vận tốc $v$ chạm đĩa. Va chạm làm vận tốc triệt tiêu $\Rightarrow$ Lực trung bình làm đổi động lượng $F_{tb} = \frac{\Delta p}{\Delta t}$. Lực ép tổng cộng lên cân phải tính cả trọng lực $P$.`,
        solution: `
**Bước 1: Tính vận tốc chạm cân**
- Rơi tự do $h = 5 \text{ m} \Rightarrow v = \sqrt{2gh} = \sqrt{2 \cdot 10 \cdot 5} = 10 \text{ (m/s)}$.
- Độ biến thiên động lượng của vật trong $0.1 \text{ s}$ va chạm:
  $\Delta p = m|v - 0| = 1 \cdot 10 = 10 \text{ (kg}\cdot\text{m/s)}$.
- Lực cản trung bình do đĩa cân tác dụng lên vật để làm mất động lượng:
  $F_{cản} = \frac{\Delta p}{\Delta t} = \frac{10}{0.1} = 100 \text{ (N)}$ (hướng lên).

**Bước 2: Lực ép tổng cộng lên đĩa cân**
- Lực đĩa cân tác dụng lên vật $F$ phải vừa triệt tiêu động lượng (100 N) vừa chống lại trọng lượng $P = mg = 10 \text{ N}$ của vật trong cùng thời gian đó.
- Dùng phương trình Động lực học: $F - P = F_{cản} \Rightarrow F = 100 + 10 = 110 \text{ (N)}$.
- Theo ĐL 3 Newton, lực ép trung bình của vật lên đĩa cân cũng bằng $110 \text{ N}$.
        `
    },
    "PHY10-PRAC-CH5-19": {
        level: `Vận dụng cao`,
        topic: `Đạn nổ ở đỉnh quỹ đạo ném xiên`,
        question: `Một viên đạn khối lượng $1.5 \text{ kg}$ được ném xiên lên từ mặt đất. Khi đạt đến điểm cao nhất của quỹ đạo, nó có tốc độ $10 \text{ m/s}$ (theo phương ngang) thì bất ngờ nổ thành 2 mảnh. Mảnh thứ nhất $0.5 \text{ kg}$ rơi thẳng đứng xuống với tốc độ ban đầu $40 \text{ m/s}$. Hỏi mảnh thứ 2 bay đi với tốc độ bao nhiêu và theo hướng nào?`,
        hint: `Chìa khóa tư duy: Tại đỉnh, động lượng ban đầu của hệ chỉ có phương ngang. $\vec{p}$ (ngang) = $\vec{p}_1$ (dọc xuống) + $\vec{p}_2$. Suy ra $\vec{p}_2$ phải có thành phần ngang bằng $\vec{p}$ và thành phần dọc hướng lên bù lại $\vec{p}_1$.`,
        solution: `
**Bước 1: Tính các động lượng thành phần**
- Động lượng trước nổ (tại đỉnh, chỉ có vận tốc ngang): $p = M \cdot v_0 = 1.5 \cdot 10 = 15 \text{ (kg}\cdot\text{m/s)}$.
- Động lượng mảnh 1 (dọc xuống): $p_1 = m_1 \cdot v_1 = 0.5 \cdot 40 = 20 \text{ (kg}\cdot\text{m/s)}$.
- Khối lượng mảnh 2: $m_2 = 1.5 - 0.5 = 1 \text{ kg}$.

**Bước 2: Xác định động lượng mảnh 2**
- $\vec{p} = \vec{p}_1 + \vec{p}_2 \Rightarrow \vec{p}_2 = \vec{p} - \vec{p}_1$.
- Do $\vec{p}$ nằm ngang, $\vec{p}_1$ thẳng đứng xuống $\Rightarrow$ chúng vuông góc nhau.
- Độ lớn động lượng mảnh 2: $p_2 = \sqrt{p^2 + p_1^2} = \sqrt{15^2 + 20^2} = \sqrt{225 + 400} = \sqrt{625} = 25 \text{ (kg}\cdot\text{m/s)}$.
- Tốc độ mảnh 2: $v_2 = \frac{p_2}{m_2} = \frac{25}{1} = 25 \text{ (m/s)}$.
- Hướng bay: Gọi $\alpha$ là góc hợp bởi $\vec{p}_2$ và phương ngang. $\tan\alpha = \frac{p_1}{p} = \frac{20}{15} = \frac{4}{3} \Rightarrow \alpha \approx 53^\circ$.
- Kết luận: Mảnh 2 bay chếch lên trên (để khử động lượng hướng xuống của mảnh 1) góc $53^\circ$ so với phương ngang với tốc độ $25 \text{ m/s}$.
        `
    },
    "PHY10-PRAC-CH5-20": {
        level: `Vận dụng cao`,
        topic: `Tên lửa tách tầng`,
        question: `Một tên lửa 2 tầng có tổng khối lượng $M = 12 \text{ tấn}$ đang bay thẳng với tốc độ $400 \text{ m/s}$. Sau đó, tầng 1 có khối lượng $m_1 = 4 \text{ tấn}$ tách ra và phụt ngược lại với tốc độ tương đối $200 \text{ m/s}$ so với tầng 2. Bỏ qua tác dụng của trọng lực. Tìm tốc độ của tầng 2 ngay sau khi tách.`,
        hint: `Chìa khóa tư duy: Gọi $v_2$ là vận tốc đối với đất của tầng 2. Vận tốc tầng 1 so với tầng 2 là $v_{12} = -200$. Vậy vận tốc tầng 1 so với đất là $v_1 = v_{12} + v_2 = -200 + v_2$. Lập BTĐL theo ẩn $v_2$.`,
        solution: `
**Bước 1: Thiết lập các vận tốc theo đất**
- Chọn chiều dương là chiều bay của tên lửa. $v_{trước} = 400 \text{ m/s}$.
- Gọi vận tốc của tầng 2 sau khi tách là $v_2$ (đây là ẩn cần tìm).
- Tầng 1 phụt ngược lại so với tầng 2 với tốc độ $200 \text{ m/s} \Rightarrow v_{12} = -200$.
- Vận tốc của tầng 1 đối với mặt đất: $v_1 = v_{12} + v_2 = v_2 - 200$.
- Khối lượng tầng 2: $m_2 = M - m_1 = 12 - 4 = 8 \text{ tấn}$.

**Bước 2: Bảo toàn động lượng**
- $M \cdot v_{trước} = m_1 \cdot v_1 + m_2 \cdot v_2$
- $12 \cdot 400 = 4(v_2 - 200) + 8v_2$
- $4800 = 4v_2 - 800 + 8v_2 \Rightarrow 4800 + 800 = 12v_2 \Rightarrow 5600 = 12v_2$.
- $v_2 = \frac{5600}{12} = \frac{1400}{3} \approx 466.67 \text{ (m/s)}$.
- Kết luận: Tầng 2 của tên lửa bay tiếp với tốc độ xấp xỉ $466.67 \text{ m/s}$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_PRACTICE_PHY10_CH5;
}