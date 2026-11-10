/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU VẬT LÝ 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Chương IV: Năng lượng, công, công suất
   (CHUYÊN ĐỀ TỔNG HỢP: 20 BÀI TẬP VẬN DỤNG & NÂNG CAO)
   ========================================================================== */

const DATA_PRACTICE_LY10_CH4 = {
    "PHY10-CH4-REVIEW": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương IV: Năng lượng, công, công suất",
        title: "Chuyên đề Tổng hợp: 20 Bài tập Vận dụng & Nâng cao",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương IV", "Chuyên đề 20 Bài VDC"],
        theory: String.raw`
### 1. Hệ thống hóa các phương pháp giải bài toán Năng lượng
Để giải quyết các bài toán Vận dụng (VD) và Vận dụng cao (VDC) trong chương này, học sinh cần linh hoạt chuyển đổi giữa các phương pháp:
- **Phương pháp Động lực học (Định luật 2 Newton):** Sử dụng khi bài toán yêu cầu tìm thời gian $t$, gia tốc $a$.
- **Phương pháp Năng lượng (Định lý động năng & Bảo toàn cơ năng):** Sử dụng khi bài toán chỉ quan tâm đến vị trí đầu, vị trí cuối, vận tốc, quãng đường mà không quan tâm đến thời gian và gia tốc.

### 2. Các mô hình Vận dụng cao kinh điển
- **Bài toán vật rơi vào lò xo:** Phải chọn mốc thế năng trọng trường và thế năng đàn hồi hợp lý (thường chọn mốc thế năng trọng trường tại vị trí lò xo không biến dạng, hoặc vị trí nén cực đại). Chú ý cơ năng hệ: $W = W_d + W_{t(trọng\_trường)} + W_{t(đàn\_hồi)}$.
- **Bài toán dây xích vắt qua mép bàn:** Thế năng của vật thể có kích thước (dây xích) được tính dựa vào vị trí **khối tâm** của nó.
- **Bài toán Vòng xiếc (Loop-the-loop):** Sử dụng kết hợp Bảo toàn cơ năng và Động lực học hướng tâm. Điều kiện không rơi tại đỉnh vòng: $N \ge 0 \Rightarrow v_{đỉnh} \ge \sqrt{gR}$.
- **Bài toán Công suất biến thiên:** Nếu ô tô chạy với công suất $P$ không đổi, lực kéo $F_k = \frac{P}{v}$ sẽ giảm dần khi vận tốc tăng. Gia tốc $a$ không hằng số nên không được dùng công thức của chuyển động biến đổi đều.
        `,
        tips: String.raw`
- 💡 **Bí kíp giải nhanh:** Khi gặp bài toán hệ nhiều vật nối bằng dây qua ròng rọc, thay vì xét từng vật và giải hệ phương trình lực căng dây, hãy dùng **Định lý biến thiên cơ năng cho toàn hệ**: Công của ngoại lực (thường là ma sát) bằng độ biến thiên tổng cơ năng của hệ. Lực căng dây là nội lực, không sinh công tổng cộng.
- ⚠️ **Lỗi sai tử huyệt:** Khi tính độ giảm thế năng $\Delta W_t$, nhiều học sinh nhầm dấu. Nhớ rằng: Công của trọng lực $A_P = W_{t1} - W_{t2} = -\Delta W_t$. Nếu vật đi xuống, thế năng giảm $\Rightarrow \Delta W_t < 0$, công $A_P > 0$.
        `,
        practice: String.raw`
### Phần 1: Tự luận Vận dụng & Nâng cao (15 Bài)

**Bài 1 (Vận dụng):** Kéo một vật khối lượng $m = 5 \text{ kg}$ chuyển động thẳng đều lên một mặt phẳng nghiêng góc $30^\circ$ so với phương ngang. Biết mặt phẳng nghiêng dài $10 \text{ m}$ và hệ số ma sát $\mu = 0.2$. Tính công của lực kéo và công của lực ma sát. ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Vật chuyển động thẳng đều $\Rightarrow F_k = P_x + F_{ms} = mg \sin 30^\circ + \mu mg \cos 30^\circ$.
  $$F_k = 5 \cdot 10 \cdot 0.5 + 0.2 \cdot 5 \cdot 10 \cdot \frac{\sqrt{3}}{2} = 25 + 5\sqrt{3} \approx 33.66 \text{ (N)}$$
- Công của lực kéo (cùng hướng dịch chuyển $\alpha = 0^\circ$):
  $$A_k = F_k \cdot s = 33.66 \cdot 10 = 336.6 \text{ (J)}$$
- Lực ma sát: $F_{ms} = 5\sqrt{3} \approx 8.66 \text{ (N)}$.
- Công của lực ma sát (ngược hướng dịch chuyển $\alpha = 180^\circ$):
  $$A_{ms} = -F_{ms} \cdot s = -8.66 \cdot 10 = -86.6 \text{ (J)}$$
[/GIAI]

**Bài 2 (Vận dụng):** Một ô tô khối lượng $1.2 \text{ tấn}$ đang chạy với tốc độ $36 \text{ km/h}$ trên đường ngang thì tăng tốc. Sau khi đi được $50 \text{ m}$, ô tô đạt tốc độ $72 \text{ km/h}$. Biết lực cản không đổi bằng $0.05$ trọng lượng xe. ($g = 10 \text{ m/s}^2$). Dùng định lý động năng tính lực kéo trung bình của động cơ.
[GIAI]
**Lời giải chi tiết:**
- Đổi: $m = 1200 \text{ kg}$; $v_1 = 10 \text{ m/s}$; $v_2 = 20 \text{ m/s}$; $s = 50 \text{ m}$.
- Lực cản: $F_c = 0.05 \cdot mg = 0.05 \cdot 12000 = 600 \text{ (N)}$.
- Tổng công của các lực: $A = A_k + A_c = F_k \cdot s - F_c \cdot s$.
- Áp dụng định lý động năng:
  $$F_k \cdot s - F_c \cdot s = \frac{1}{2}mv_2^2 - \frac{1}{2}mv_1^2$$
  $$F_k \cdot 50 - 600 \cdot 50 = \frac{1}{2} \cdot 1200 \cdot (20^2 - 10^2) = 600 \cdot 300 = 180000$$
  $$50 F_k - 30000 = 180000 \Rightarrow 50 F_k = 210000 \Rightarrow F_k = 4200 \text{ (N)}$$
[/GIAI]

**Bài 3 (Vận dụng):** Một vật $m = 200 \text{ g}$ được ném thẳng đứng lên cao với tốc độ $15 \text{ m/s}$ từ độ cao $5 \text{ m}$ so với mặt đất. Bỏ qua cản không khí. Dùng bảo toàn cơ năng tính độ cao cực đại vật đạt được và tốc độ của vật khi nó ở độ cao $10 \text{ m}$. ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Mốc thế năng tại mặt đất. Cơ năng ban đầu:
  $$W = \frac{1}{2}mv_0^2 + mgh_0 = \frac{1}{2} \cdot 0.2 \cdot 15^2 + 0.2 \cdot 10 \cdot 5 = 22.5 + 10 = 32.5 \text{ (J)}$$
- Tại độ cao cực đại $H_{\max}$, $v = 0$:
  $$W = mgH_{\max} \Rightarrow 32.5 = 0.2 \cdot 10 \cdot H_{\max} \Rightarrow 2 H_{\max} = 32.5 \Rightarrow H_{\max} = 16.25 \text{ (m)}$$
- Tại độ cao $h_1 = 10 \text{ m}$, cơ năng không đổi:
  $$W = \frac{1}{2}mv_1^2 + mgh_1 \Rightarrow 32.5 = \frac{1}{2} \cdot 0.2 \cdot v_1^2 + 0.2 \cdot 10 \cdot 10$$
  $$32.5 = 0.1 v_1^2 + 20 \Rightarrow 0.1 v_1^2 = 12.5 \Rightarrow v_1^2 = 125 \Rightarrow v_1 \approx 11.18 \text{ (m/s)}$$
[/GIAI]

**Bài 4 (Vận dụng cao):** Một vật trượt không vận tốc đầu từ đỉnh mặt phẳng nghiêng dài $s_1 = 4 \text{ m}$, góc nghiêng $30^\circ$, rồi tiếp tục trượt trên mặt phẳng ngang một đoạn $s_2$ thì dừng lại. Biết hệ số ma sát trên cả 2 đoạn đường đều là $\mu = 0.2$. Dùng định lý biến thiên cơ năng tính $s_2$. ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Mốc thế năng tại mặt ngang. 
  Cơ năng ban đầu tại đỉnh (A): $W_A = mgh = mg(s_1 \sin 30^\circ) = 2mg$.
  Cơ năng cuối khi dừng trên mặt ngang (C): $W_C = 0$.
- Độ biến thiên cơ năng bằng tổng công của lực ma sát trên cả 2 đoạn đường:
  $$W_C - W_A = A_{ms1} + A_{ms2}$$
  $$-2mg = -(\mu mg \cos 30^\circ) \cdot s_1 - (\mu mg) \cdot s_2$$
- Triệt tiêu $mg$ ở hai vế, nhân hai vế với $-1$:
  $$2 = \mu \cos 30^\circ \cdot s_1 + \mu \cdot s_2 \Rightarrow 2 = 0.2 \cdot \frac{\sqrt{3}}{2} \cdot 4 + 0.2 \cdot s_2$$
  $$2 = 0.4\sqrt{3} + 0.2 s_2 \Rightarrow 0.2 s_2 = 2 - 0.693 = 1.307 \Rightarrow s_2 \approx 6.535 \text{ (m)}$$
[/GIAI]

**Bài 5 (Vận dụng cao):** Con lắc đơn có chiều dài $l = 80 \text{ cm}$ treo vật $m = 100 \text{ g}$. Kéo con lắc lệch góc $\alpha_0 = 60^\circ$ rồi buông tay. Khi qua vị trí cân bằng, dây treo vướng vào một cái đinh nằm cách điểm treo một đoạn $40 \text{ cm}$ trên phương thẳng đứng. Tính góc lệch cực đại $\beta_{\max}$ mà con lắc đạt được sau khi vướng đinh.
[GIAI]
**Lời giải chi tiết:**
- Mốc thế năng tại vị trí cân bằng O. Cơ năng bảo toàn.
- Cơ năng ban đầu: $W_A = mgl(1 - \cos \alpha_0)$.
- Sau khi vướng đinh, chiều dài con lắc mới là $l' = l - 40 \text{ cm} = 40 \text{ cm} = 0.5l$.
- Tại vị trí góc lệch cực đại $\beta_{\max}$, vận tốc bằng 0. Cơ năng tại đó: $W_B = mgl'(1 - \cos \beta_{\max})$.
- Bảo toàn cơ năng: $W_A = W_B$
  $$mgl(1 - \cos 60^\circ) = mg(0.5l)(1 - \cos \beta_{\max})$$
  $$1 - 0.5 = 0.5(1 - \cos \beta_{\max}) \Rightarrow 0.5 = 0.5(1 - \cos \beta_{\max})$$
  $$1 = 1 - \cos \beta_{\max} \Rightarrow \cos \beta_{\max} = 0 \Rightarrow \beta_{\max} = 90^\circ$$
[/GIAI]

**Bài 6 (Vận dụng cao):** Một xe tải có khối lượng $m$ hoạt động với công suất không đổi $P$. Khi xe chạy trên mặt phẳng ngang, tốc độ tối đa đạt được là $v_1$. Khi xe leo dốc có góc nghiêng $\alpha$, tốc độ tối đa đạt được là $v_2$. Biết lực cản ma sát và không khí là hằng số $F_c$ trong cả 2 trường hợp. Lập biểu thức tính $F_c$ theo $P, m, \alpha, v_1, v_2$.
[GIAI]
**Lời giải chi tiết:**
- Tốc độ tối đa khi trên đường ngang: Lực kéo bằng lực cản $\Rightarrow F_{k1} = F_c$.
  Ta có: $P = F_{k1} \cdot v_1 = F_c \cdot v_1 \Rightarrow F_c = \frac{P}{v_1} \quad (1)$.
- Tốc độ tối đa khi leo dốc: Lực kéo phải thắng lực cản và thành phần trọng lượng: $F_{k2} = F_c + mg\sin\alpha$.
  Ta có: $P = F_{k2} \cdot v_2 = (F_c + mg\sin\alpha)v_2 \Rightarrow F_c + mg\sin\alpha = \frac{P}{v_2} \quad (2)$.
- Từ (1) và (2), nếu đề yêu cầu tìm hệ thức, ta có:
  $$\frac{P}{v_1} + mg\sin\alpha = \frac{P}{v_2} \Rightarrow mg\sin\alpha = P\left(\frac{1}{v_2} - \frac{1}{v_1}\right)$$
- Tùy dữ kiện số, công thức này giúp tính các đại lượng liên quan (ví dụ tìm khối lượng xe $m$ hoặc công suất $P$).
[/GIAI]

**Bài 7 (Nâng cao):** Một sợi dây xích đồng chất, dài $L$, khối lượng $m$ vắt qua một ròng rọc nhỏ, trơn. Ban đầu, hai bên dây thõng xuống không đều nhau: một bên dài $\frac{L}{3}$, một bên dài $\frac{2L}{3}$. Thả cho hệ chuyển động. Bỏ qua ma sát. Vận tốc của sợi xích ngay khi một đầu xích vừa tuột khỏi ròng rọc là bao nhiêu?
[GIAI]
**Lời giải chi tiết:**
- Chọn mốc thế năng nằm ngang qua trục ròng rọc. Do dây thõng xuống nên thế năng âm.
- **Trạng thái 1:** Phần bên trái dài $l_1 = \frac{L}{3}$, khối lượng $m_1 = \frac{m}{3}$, khối tâm ở độ sâu $-\frac{L}{6}$.
  Phần bên phải dài $l_2 = \frac{2L}{3}$, khối lượng $m_2 = \frac{2m}{3}$, khối tâm ở độ sâu $-\frac{L}{3}$.
  Thế năng ban đầu: $W_{t1} = \left(\frac{m}{3}\right)g\left(-\frac{L}{6}\right) + \left(\frac{2m}{3}\right)g\left(-\frac{L}{3}\right) = -mgL \left( \frac{1}{18} + \frac{2}{9} \right) = -\frac{5mgL}{18}$.
  Động năng ban đầu $W_{d1} = 0$.
- **Trạng thái 2:** Ngay khi tuột, toàn bộ dây dài $L$ nằm ở một bên.
  Khối tâm ở độ sâu $-\frac{L}{2}$.
  Thế năng lúc này: $W_{t2} = mg\left(-\frac{L}{2}\right) = -\frac{mgL}{2}$.
  Động năng lúc này: $W_{d2} = \frac{1}{2}mv^2$.
- **Bảo toàn cơ năng:** $W_{t1} = W_{t2} + W_{d2}$
  $$-\frac{5mgL}{18} = -\frac{mgL}{2} + \frac{1}{2}mv^2 \Rightarrow \frac{1}{2}mv^2 = \frac{mgL}{2} - \frac{5mgL}{18} = \frac{4mgL}{18} = \frac{2mgL}{9}$$
  $$\Rightarrow v^2 = \frac{4gL}{9} \Rightarrow v = \frac{2}{3}\sqrt{gL}$$
[/GIAI]

**Bài 8 (Nâng cao):** Một vật khối lượng $m = 1 \text{ kg}$ rơi tự do từ độ cao $h = 2 \text{ m}$ xuống một đĩa cân của một lò xo đặt thẳng đứng trên mặt đất. Lò xo có độ cứng $k = 1000 \text{ N/m}$. Bỏ qua khối lượng đĩa cân và cản không khí. Tính độ nén cực đại của lò xo. ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Chọn mốc thế năng trọng trường và mốc thế năng đàn hồi tại vị trí lò xo không biến dạng (đĩa cân ban đầu).
- Tại vị trí bắt đầu rơi (A): $W_A = mgh = 1 \cdot 10 \cdot 2 = 20 \text{ (J)}$. (Không có động năng, không thế năng đàn hồi).
- Tại vị trí lò xo bị nén cực đại một đoạn $\Delta l_{\max}$ (B): 
  + Vật có vận tốc $v = 0 \Rightarrow W_d = 0$.
  + Tọa độ của vật so với mốc là $-\Delta l_{\max} \Rightarrow W_t = -mg \Delta l_{\max}$.
  + Thế năng đàn hồi của lò xo: $W_{đh} = \frac{1}{2}k(\Delta l_{\max})^2$.
- Bảo toàn cơ năng: $W_A = W_B$
  $$mgh = -mg\Delta l_{\max} + \frac{1}{2}k(\Delta l_{\max})^2$$
  $$20 = -10 \Delta l_{\max} + 500 (\Delta l_{\max})^2 \Rightarrow 500 (\Delta l_{\max})^2 - 10 \Delta l_{\max} - 20 = 0$$
  $$50 (\Delta l_{\max})^2 - \Delta l_{\max} - 2 = 0$$
- Giải phương trình bậc 2: $\Delta = 1 - 4(50)(-2) = 401$.
  $$\Delta l_{\max} = \frac{1 + \sqrt{401}}{100} \approx \frac{1 + 20.025}{100} \approx 0.21 \text{ (m)} = 21 \text{ (cm)}$$
  *(Loại nghiệm âm).*
[/GIAI]

**Bài 9 (Nâng cao):** Một hòn bi khối lượng $m$ trượt không ma sát từ đỉnh mặt phẳng nghiêng độ cao $H = 3R$ xuống một đường ray uốn thành vòng tròn thẳng đứng bán kính $R$. Tại điểm $M$ trên vòng tròn, bán kính nối điểm $M$ hợp với phương thẳng đứng (từ tâm xuống đáy) một góc $\alpha = 60^\circ$. Tính áp lực của hòn bi lên đường ray tại $M$.
[GIAI]
**Lời giải chi tiết:**
- Mốc thế năng tại đáy vòng tròn.
- Cơ năng ban đầu: $W_0 = mgH = 3mgR$.
- Tại $M$, độ cao của bi là $h_M = R - R\cos 60^\circ = R(1 - 0.5) = 0.5R$.
- Bảo toàn cơ năng tại $M$: $3mgR = mg(0.5R) + \frac{1}{2}mv^2 \Rightarrow \frac{1}{2}mv^2 = 2.5mgR \Rightarrow v^2 = 5gR$.
- Phương trình động lực học chiếu lên phương bán kính hướng vào tâm tại $M$:
  Thành phần trọng lực hướng ra khỏi tâm là $P\cos 60^\circ$.
  $$N - P\cos 60^\circ = m\frac{v^2}{R} \Rightarrow N = mg\cos 60^\circ + m\frac{5gR}{R} = 0.5mg + 5mg = 5.5mg$$
- Áp lực của bi lên ray tại $M$ là $5.5mg$.
[/GIAI]

**Bài 10 (Nâng cao):** Hai quả cầu $m_1 = 3 \text{ kg}$ và $m_2 = 1 \text{ kg}$ nối với nhau bằng sợi dây nhẹ không dãn dài $l = 1 \text{ m}$. Hệ được giữ nằm ngang rồi thả rơi. Đúng lúc hệ rơi, người ta cắt dây. Trọng lực sinh công $A_1$ trên $m_1$ và $A_2$ trên $m_2$ sau $2 \text{ s}$. Bỏ qua cản không khí. Tính độ chênh lệch công $\Delta A = A_1 - A_2$.
[GIAI]
**Lời giải chi tiết:**
- Cắt dây đồng thời với lúc thả $\Rightarrow$ hai vật rơi tự do hoàn toàn độc lập.
- Cùng rơi tự do trong $2 \text{ s}$, quãng đường hai vật đi được là bằng nhau:
  $$s = \frac{1}{2}gt^2 = 0.5 \cdot 10 \cdot 4 = 20 \text{ (m)}$$
- Công của trọng lực lên $m_1$: $A_1 = m_1 gs = 3 \cdot 10 \cdot 20 = 600 \text{ (J)}$.
- Công của trọng lực lên $m_2$: $A_2 = m_2 gs = 1 \cdot 10 \cdot 20 = 200 \text{ (J)}$.
- Độ chênh lệch: $\Delta A = 600 - 200 = 400 \text{ (J)}$.
[/GIAI]

**Bài 11 (Vận dụng cao):** Một người nặng $60 \text{ kg}$ bước lên thang cuốn của siêu thị. Thang cuốn đưa người đó lên tầng trên cách $4 \text{ m}$ theo phương thẳng đứng. Nếu người đó đứng yên trên thang, mất $20 \text{ s}$. Nếu người đó tự bước đi đều trên thang đang chạy thì mất $12 \text{ s}$. Tính công suất của thang cuốn và công suất do người đó sinh ra khi bước đi. ($g=10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Công cần thực hiện để đưa người (60kg) lên cao 4m: $A = mgh = 60 \cdot 10 \cdot 4 = 2400 \text{ (J)}$.
- Khi đứng yên, thang thực hiện toàn bộ công trong $20 \text{ s}$.
  Công suất của thang: $P_t = \frac{A}{20} = \frac{2400}{20} = 120 \text{ (W)}$.
- Khi người tự bước, tổng công nâng người vẫn là $2400 \text{ J}$, được thực hiện trong $12 \text{ s}$.
  Tổng công suất: $P_{tổng} = \frac{2400}{12} = 200 \text{ (W)}$.
- Tổng công suất này là tổng của công suất thang và công suất người: $P_{tổng} = P_t + P_n$.
  Công suất của người: $P_n = 200 - 120 = 80 \text{ (W)}$.
[/GIAI]

**Bài 12 (Nâng cao):** Một vật trượt từ đỉnh một bán cầu nhẵn, cố định bán kính $R$. Vật sẽ rời bán cầu ở độ cao nào so với mặt phẳng ngang (đáy bán cầu)?
[GIAI]
**Lời giải chi tiết:**
- Mốc thế năng ở đáy bán cầu.
- Gọi $\alpha$ là góc hợp bởi bán kính nối vật và phương thẳng đứng. Độ cao của vật: $h = R\cos\alpha$.
- Bảo toàn cơ năng từ đỉnh xuống vị trí góc $\alpha$:
  $$mgR = mg(R\cos\alpha) + \frac{1}{2}mv^2 \Rightarrow v^2 = 2gR(1 - \cos\alpha)$$
- Động lực học tại vị trí $\alpha$ theo phương bán kính:
  Trọng lượng có thành phần hướng tâm là $mg\cos\alpha$.
  $$mg\cos\alpha - N = m\frac{v^2}{R} \Rightarrow N = mg\cos\alpha - \frac{m}{R}[2gR(1 - \cos\alpha)] = mg\cos\alpha - 2mg + 2mg\cos\alpha = 3mg\cos\alpha - 2mg$$
- Vật bắt đầu rời bán cầu khi $N = 0$:
  $$3mg\cos\alpha - 2mg = 0 \Rightarrow \cos\alpha = \frac{2}{3}$$
- Độ cao khi rời: $h = R\cos\alpha = \frac{2}{3}R$.
[/GIAI]

**Bài 13 (Vận dụng cao):** Đồ thị biểu diễn sự phụ thuộc của lực cản $F_c$ vào vận tốc $v$ của một vật là một đường thẳng $F_c = k \cdot v$. Khi rơi tự do trong chất lưu, vật sẽ đạt một "vận tốc tới hạn" $v_{th}$ không đổi. Dùng định lý năng lượng hoặc cân bằng lực, tìm công suất tỏa nhiệt do lực cản khi vật đạt vận tốc tới hạn (theo khối lượng $m$ và $g$).
[GIAI]
**Lời giải chi tiết:**
- Khi đạt vận tốc tới hạn, vật rơi đều $\Rightarrow$ Lực cản cân bằng với trọng lực: $F_c = P = mg$.
- Lực cản có độ lớn bằng $mg$. Vận tốc rơi là $v_{th}$.
- Công suất của lực cản (chuyển hóa toàn bộ thành nhiệt):
  $$P_{nhiệt} = F_c \cdot v_{th} = mg \cdot v_{th}$$
- (Nếu hỏi theo $k$: $v_{th} = \frac{mg}{k} \Rightarrow P_{nhiệt} = \frac{(mg)^2}{k}$).
[/GIAI]

**Bài 14 (Nâng cao):** Hai khối $m_1 = 4 \text{ kg}$ và $m_2 = 1 \text{ kg}$ được kết nối bằng dây qua ròng rọc cố định, $m_1$ nằm trên bàn ngang có $\mu = 0.2$, $m_2$ treo thõng. Dùng Bảo toàn Năng lượng tính gia tốc của hệ. ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Xét hệ chuyển động được quãng đường $x$ trong thời gian $t$. Vận tốc hệ là $v$.
- Công lực ma sát: $A_{ms} = -\mu m_1 g x = -0.2 \cdot 4 \cdot 10 \cdot x = -8x$.
- Độ biến thiên thế năng (chỉ $m_2$ đi xuống): $\Delta W_t = -m_2 g x = -10x$.
- Độ biến thiên động năng: $\Delta W_d = \frac{1}{2}(m_1 + m_2)v^2 = 2.5v^2$.
- Biến thiên cơ năng: $A_{ms} = \Delta W_t + \Delta W_d \Rightarrow -8x = -10x + 2.5v^2 \Rightarrow 2x = 2.5v^2 \Rightarrow v^2 = 0.8x$.
- Mặt khác, trong chuyển động nhanh dần đều từ nghỉ: $v^2 = 2ax$.
- So sánh: $2a = 0.8 \Rightarrow a = 0.4 \text{ (m/s}^2\text{)}$.
[/GIAI]

**Bài 15 (Vận dụng cao):** Kéo một vật $m = 2 \text{ kg}$ đi quãng đường $s = 5 \text{ m}$ trên mặt ngang với lực $F = 10 \text{ N}$ nghiêng $60^\circ$ lên trên. Biết sau 5m vật đạt $v = 4 \text{ m/s}$ (vật xuất phát từ nghỉ). Tính công của lực ma sát và suy ra hệ số $\mu$. ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Công lực kéo: $A_k = Fs\cos 60^\circ = 10 \cdot 5 \cdot 0.5 = 25 \text{ (J)}$.
- Động năng lúc sau: $W_d = \frac{1}{2}mv^2 = \frac{1}{2} \cdot 2 \cdot 16 = 16 \text{ (J)}$.
- Định lý Động năng: $A_k + A_{ms} = W_d \Rightarrow 25 + A_{ms} = 16 \Rightarrow A_{ms} = -9 \text{ (J)}$.
- Lực ma sát: $F_{ms} = \frac{-A_{ms}}{s} = \frac{9}{5} = 1.8 \text{ (N)}$.
- Tính phản lực: $N = mg - F\sin 60^\circ = 20 - 10 \cdot \frac{\sqrt{3}}{2} = 20 - 5\sqrt{3} \approx 11.34 \text{ (N)}$.
- Hệ số ma sát: $\mu = \frac{F_{ms}}{N} = \frac{1.8}{11.34} \approx 0.158$.
[/GIAI]

---

### Phần 2: Trắc nghiệm Vận dụng & Nâng cao (5 Bài)

[QUIZ]
Câu 16: Một động cơ có công suất P không đổi dùng để kéo một ô tô khối lượng m tăng tốc trên đường ngang (cản không đáng kể). Vận tốc của xe v phụ thuộc vào thời gian t theo quy luật tỉ lệ nào?
[A] v tỉ lệ với t.
[B] v tỉ lệ với $t^2$.
[*C] v tỉ lệ với $\sqrt{t}$.
[D] v tỉ lệ nghịch với t.
[/QUIZ]

[QUIZ]
Câu 17: Một con lắc lò xo treo thẳng đứng. Kéo vật xuống dưới vị trí cân bằng một đoạn rồi thả nhẹ. Chọn mốc thế năng trọng trường và mốc thế năng đàn hồi đều tại vị trí lò xo không biến dạng. Khi vật ở vị trí cân bằng, cơ năng của hệ bằng:
[A] 0
[B] Thế năng đàn hồi tại đó.
[*C] Tổng động năng, thế năng trọng trường và thế năng đàn hồi tại đó (bằng hằng số ở mọi điểm).
[D] Chỉ gồm động năng.
[/QUIZ]

[QUIZ]
Câu 18: Lực $\vec{F}$ tác dụng lên một vật biến thiên theo tọa độ $x$ với phương trình $F = 50 - 10x \text{ (N)}$. Công của lực F khi vật đi từ $x = 0$ đến $x = 5 \text{ m}$ là:
[A] $250 \text{ J}$
[B] $0 \text{ J}$
[*C] $125 \text{ J}$
[D] $-125 \text{ J}$
[/QUIZ]
*(Gợi ý giải C18: Diện tích tam giác vuông có cạnh góc vuông là 5 và 50: $0.5 \cdot 5 \cdot 50 = 125 \text{ J}$)*.

[QUIZ]
Câu 19: Một hệ máy bơm đưa nước lên cao gồm động cơ điện có hiệu suất $80\%$ và máy bơm có hiệu suất $70\%$. Hiệu suất tổng cộng của hệ thống này là:
[A] $150\%$
[B] $75\%$
[*C] $56\%$
[D] $10\%$
[/QUIZ]

[QUIZ]
Câu 20: Trong bài toán vật trượt trên vòng xiếc thẳng đứng (Loop-the-loop) có bán kính $R$, để vật lên đến đỉnh mà KHÔNG rơi, vận tốc tại điểm thấp nhất của vòng phải thỏa mãn:
[A] $v \ge \sqrt{gR}$
[B] $v \ge \sqrt{2gR}$
[C] $v \ge \sqrt{3gR}$
[*D] $v \ge \sqrt{5gR}$
[/QUIZ]
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DB_PHY_10_CH4_ADVANCED;
}