/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU VẬT LÝ 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Chương III: Động lực học (Bản Nâng Cấp Master - 10 Bài tập/Bài học)
   Bộ sách: Kết nối tri thức / Chân trời sáng tạo / Cánh diều
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
### 1. Khái niệm Lực và Hệ lực
- **Lực ($\vec{F}$):** Là đại lượng vectơ đặc trưng cho tác dụng của vật này lên vật khác, kết quả là truyền gia tốc cho vật hoặc làm vật biến dạng. Đơn vị: Newton (N).
- **Hệ lực đồng quy:** Các lực tác dụng có giá cùng đi qua một điểm.

### 2. Tổng hợp lực và Phân tích lực
- **Quy tắc hình bình hành (Tổng hợp lực):** $\vec{F} = \vec{F}_1 + \vec{F}_2$.
  Độ lớn: $F = \sqrt{F_1^2 + F_2^2 + 2F_1 F_2 \cos \alpha}$
  + Cùng chiều ($\alpha = 0^\circ$): $F = F_1 + F_2$ (Max).
  + Ngược chiều ($\alpha = 180^\circ$): $F = |F_1 - F_2|$ (Min).
  + Vuông góc ($\alpha = 90^\circ$): $F = \sqrt{F_1^2 + F_2^2}$.
- **Phân tích lực trên hệ trục tọa độ vuông góc $Oxy$:** 
  Một lực $\vec{F}$ hợp với trục $Ox$ góc $\alpha$ được phân tích thành:
  $F_x = F \cos \alpha$ và $F_y = F \sin \alpha$.

### 3. Điều kiện cân bằng của chất điểm
- Khi chất điểm đứng yên hoặc chuyển động thẳng đều, hợp lực tác dụng lên nó bằng 0.
  $$\vec{F}_{hl} = \vec{F}_1 + \vec{F}_2 + ... + \vec{F}_n = \vec{0}$$
- Trên hệ trục $Oxy$: $\sum F_x = 0$ và $\sum F_y = 0$.

---
### 4. 💎 Chuyên đề Master: Định lý Lami và Cân bằng hệ phức tạp (VDC)
📌 **Định lý Lami (Quy tắc Sin cho 3 lực cân bằng):**
Nếu 3 lực $\vec{F}_1, \vec{F}_2, \vec{F}_3$ đồng quy và cân bằng nhau, ta có:
  $$\frac{F_1}{\sin \alpha_1} = \frac{F_2}{\sin \alpha_2} = \frac{F_3}{\sin \alpha_3}$$
*(Trong đó $\alpha_1$ là góc giữa $\vec{F}_2$ và $\vec{F}_3$; $\alpha_2$ là góc giữa $\vec{F}_1$ và $\vec{F}_3$...)*
Đây là công cụ giải cực nhanh cho bài toán treo vật bằng 2 sợi dây mà không cần phân tích lực theo trục $Oxy$.

📌 **Vật cầu nằm giữa hai mặt phẳng nứt/nghiêng:**
- Phân tích lực: Trọng lực $\vec{P}$ hướng xuống, các phản lực $\vec{N}_1, \vec{N}_2$ vuông góc với bề mặt tiếp xúc.
- Tịnh tiến các lực về tâm quả cầu và áp dụng Định lý Lami hoặc chiếu hệ trục $Oxy$.
        `,
        tips: String.raw`
- 💡 **Mẹo chiếu lực nhanh:** Lực nào cùng chiều trục $\rightarrow$ Dấu "+". Lực ngược chiều trục $\rightarrow$ Dấu "-". Lực vuông góc với trục $\rightarrow$ Hình chiếu bằng 0.
- 💡 **Mẹo tính nhẩm:** Nếu 2 lực $F_1 = F_2 = F$ hợp với nhau góc $120^\circ$ thì hợp lực $F_{hl} = F$. Nếu hợp với nhau góc $90^\circ$ thì $F_{hl} = F\sqrt{2}$. Nếu hợp góc $60^\circ$ thì $F_{hl} = F\sqrt{3}$.
        `,
        practice: String.raw`
### Dạng 1: Các bài toán tổng hợp lực cơ bản
**Bài 1 (Cơ bản):** Hai lực đồng quy có độ lớn $F_1 = 6 \text{ N}$ và $F_2 = 8 \text{ N}$. Tính độ lớn của hợp lực $\vec{F}$ trong các trường hợp góc giữa hai lực là $0^\circ, 90^\circ, 180^\circ$.
[GIAI]
**Lời giải chi tiết:**
- Góc $0^\circ$ (Cùng chiều): $F = F_1 + F_2 = 6 + 8 = 14 \text{ (N)}$.
- Góc $90^\circ$ (Vuông góc): $F = \sqrt{F_1^2 + F_2^2} = \sqrt{6^2 + 8^2} = 10 \text{ (N)}$.
- Góc $180^\circ$ (Ngược chiều): $F = |F_1 - F_2| = |6 - 8| = 2 \text{ (N)}$.
[/GIAI]

**Bài 2 (Cơ bản):** Hai lực $F_1 = 15 \text{ N}$ và $F_2 = 15 \text{ N}$ đồng quy và hợp với nhau một góc $120^\circ$. Tìm độ lớn của hợp lực.
[GIAI]
**Lời giải chi tiết:**
- Hai lực có độ lớn bằng nhau, áp dụng công thức: 
  $$F = 2F_1 \cos \left(\frac{\alpha}{2}\right) = 2 \cdot 15 \cdot \cos 60^\circ = 30 \cdot 0.5 = 15 \text{ (N)}$$
- (Hoặc dùng mẹo: 2 lực bằng nhau hợp góc $120^\circ$ thì hợp lực bằng chính nó).
[/GIAI]

### Dạng 2: Phân tích lực và Cân bằng cơ bản
**Bài 3 (Vận dụng):** Một quả cầu khối lượng $m = 2 \text{ kg}$ được treo bằng một sợi dây. Gió thổi ngang làm quả cầu lệch đi một góc $30^\circ$ so với phương thẳng đứng và đứng yên ở vị trí đó. Lấy $g = 10 \text{ m/s}^2$. Tính lực đẩy của gió và lực căng của sợi dây.
[GIAI]
**Lời giải chi tiết:**
- Quả cầu chịu 3 lực cân bằng: Trọng lực $\vec{P}$ (hướng xuống), Lực đẩy gió $\vec{F}$ (nằm ngang), Lực căng dây $\vec{T}$ (dọc theo dây).
- Điều kiện cân bằng: $\vec{P} + \vec{F} + \vec{T} = \vec{0} \Rightarrow \vec{P} + \vec{F} = -\vec{T}$.
- Hợp lực của $\vec{P}$ và $\vec{F}$ vuông góc với nhau và cân bằng với $\vec{T}$, tạo thành tam giác vuông với góc $30^\circ$ ở đỉnh (giữa $\vec{P}$ và trục dọc dây $\vec{T}$).
- Trọng lượng $P = mg = 20 \text{ N}$.
- Từ tam giác lực: 
  $$\tan 30^\circ = \frac{F}{P} \Rightarrow F = P \cdot \tan 30^\circ = 20 \cdot \frac{\sqrt{3}}{3} = \frac{20\sqrt{3}}{3} \text{ (N)}$$
  $$\cos 30^\circ = \frac{P}{T} \Rightarrow T = \frac{P}{\cos 30^\circ} = \frac{20}{\sqrt{3}/2} = \frac{40\sqrt{3}}{3} \text{ (N)}$$
[/GIAI]

**Bài 4 (Vận dụng):** Một vật khối lượng $m = 4 \text{ kg}$ đặt đứng yên trên một mặt phẳng nghiêng góc $30^\circ$ so với phương ngang. Hãy phân tích trọng lực của vật thành 2 thành phần và tính độ lớn của 2 thành phần đó ($g = 10 \text{ m/s}^2$). Vật đứng yên là nhờ có lực ma sát, tính lực ma sát đó.
[GIAI]
**Lời giải chi tiết:**
- Trọng lượng $P = 4 \cdot 10 = 40 \text{ N}$.
- Phân tích $\vec{P}$ thành:
  + Thành phần song song mặt nghiêng (có xu hướng kéo vật trượt xuống): $P_x = P \sin 30^\circ = 40 \cdot 0.5 = 20 \text{ N}$.
  + Thành phần vuông góc mặt nghiêng (ép vật vào mặt): $P_y = P \cos 30^\circ = 40 \cdot \frac{\sqrt{3}}{2} = 20\sqrt{3} \text{ N}$.
- Do vật đứng yên, lực ma sát nghỉ phải cân bằng với thành phần kéo trượt:
  $$F_{msn} = P_x = 20 \text{ (N)}$$
[/GIAI]

### Dạng 3: Bài toán Cân bằng Master (Áp dụng Định lý Lami)
**Bài 5 (Vận dụng cao):** Một chiếc đèn trọng lượng $P = 100 \text{ N}$ được treo vào trần nhà nhờ hai sợi dây $OA$ và $OB$. Dây $OA$ tạo với trần một góc $60^\circ$, dây $OB$ tạo với trần một góc $30^\circ$. Tính lực căng của hai sợi dây.
[GIAI]
**Lời giải chi tiết:**
- Phương pháp sử dụng Định lý Lami. Ta có 3 lực $\vec{P}$, $\vec{T}_A, \vec{T}_B$ đồng quy tại $O$.
- Góc giữa các lực:
  + Góc giữa dây $OA$ và dây $OB$: $\gamma = 180^\circ - (60^\circ + 30^\circ) = 90^\circ$. (Tức là $\vec{T}_A \perp \vec{T}_B$).
  + Góc giữa dây $OA$ và trọng lực $\vec{P}$ (kéo thẳng đứng xuống): $\beta = 90^\circ + (90^\circ - 60^\circ) = 120^\circ$.
  + Góc giữa dây $OB$ và trọng lực $\vec{P}$: $\alpha = 90^\circ + (90^\circ - 30^\circ) = 150^\circ$.
- Áp dụng Định lý Lami:
  $$\frac{P}{\sin \gamma} = \frac{T_A}{\sin \alpha} = \frac{T_B}{\sin \beta} \Rightarrow \frac{100}{\sin 90^\circ} = \frac{T_A}{\sin 150^\circ} = \frac{T_B}{\sin 120^\circ}$$
- Từ đó:
  $$T_A = 100 \cdot \sin 150^\circ = 100 \cdot 0.5 = 50 \text{ (N)}$$
  $$T_B = 100 \cdot \sin 120^\circ = 100 \cdot \frac{\sqrt{3}}{2} = 50\sqrt{3} \text{ (N)}$$
[/GIAI]

**Bài 6 (Vận dụng cao):** Một thanh đồng chất, tiết diện đều, trọng lượng $P = 60 \text{ N}$ được tựa vào tường trơn nhẵn thẳng đứng và một điểm tựa $A$ trên sàn nhám ngang. Thanh hợp với mặt sàn góc $45^\circ$. Xác định phản lực của tường tác dụng lên thanh (giả sử thanh đang ở trạng thái cân bằng).
[GIAI]
**Lời giải chi tiết:**
- Thanh cân bằng chịu tác dụng của 3 lực: Trọng lực $\vec{P}$ (đặt tại trung điểm $G$, thẳng đứng xuống), Phản lực của tường $\vec{N}_1$ (vuông góc với tường, tức là nằm ngang), và Phản lực tại sàn $\vec{R}_2$ (hợp của phản lực pháp tuyến $\vec{N}_2$ và ma sát $\vec{F}_{ms}$).
- Đối với thanh cân bằng dưới tác dụng của 3 lực không song song, giá của 3 lực phải **đồng quy** tại một điểm.
- Kéo dài $\vec{N}_1$ và $\vec{P}$ cắt nhau tại điểm $I$. Khi đó $\vec{R}_2$ cũng phải hướng qua $I$.
- Khoảng cách ngang từ $I$ đến tường chính là khoảng cách từ tâm $G$ đến tường. Nếu gọi chiều dài thanh là $L$, khoảng ngang là $\frac{L}{2} \cos 45^\circ$.
- Dùng quy tắc momen lực đối với điểm tựa $A$:
  Tổng momen lực làm thanh quay theo chiều kim đồng hồ = ngược chiều kim đồng hồ.
  $$P \cdot (\frac{L}{2} \cos 45^\circ) = N_1 \cdot (L \sin 45^\circ)$$
  $$\Rightarrow 60 \cdot \frac{L}{2} \cdot \frac{\sqrt{2}}{2} = N_1 \cdot L \cdot \frac{\sqrt{2}}{2} \Rightarrow 30 = N_1$$
- Phản lực của tường là $N_1 = 30 \text{ N}$.
[/GIAI]

**Bài 7 (Nâng cao):** Quả cầu khối lượng $m = 3 \text{ kg}$ đặt trong một góc tạo bởi 2 mặt phẳng nghiêng góc $\alpha = 30^\circ$ và $\beta = 60^\circ$ so với phương ngang. Bỏ qua ma sát. $g = 10 \text{ m/s}^2$. Tính áp lực của quả cầu lên mỗi mặt phẳng.
[GIAI]
**Lời giải chi tiết:**
- Quả cầu chịu 3 lực đồng quy tại tâm: Trọng lượng $\vec{P}$ (hướng xuống), phản lực $\vec{N}_1 \perp$ mp 1, $\vec{N}_2 \perp$ mp 2.
- Vì $\alpha + \beta = 30^\circ + 60^\circ = 90^\circ$, 2 mặt phẳng vuông góc với nhau. $\Rightarrow \vec{N}_1 \perp \vec{N}_2$.
- Phản lực $\vec{N}_1$ hợp với phương thẳng đứng góc $\alpha = 30^\circ$. Phản lực $\vec{N}_2$ hợp với phương thẳng đứng góc $\beta = 60^\circ$.
- Vẽ hình chữ nhật lực, ta có $P$ là đường chéo.
  $$N_1 = P \cos 30^\circ = mg \cos 30^\circ = 30 \cdot \frac{\sqrt{3}}{2} = 15\sqrt{3} \text{ (N)}$$
  $$N_2 = P \cos 60^\circ = mg \cos 60^\circ = 30 \cdot 0.5 = 15 \text{ (N)}$$
- (Theo ĐL III Newton, áp lực bằng độ lớn với phản lực).
[/GIAI]

**Bài 8 (Nâng cao):** Một vật $m = 5 \text{ kg}$ đứng yên trên mặt phẳng nghiêng $30^\circ$ nhờ một lực đẩy $F$ nằm ngang. Tính độ lớn lực $F$ và phản lực $N$ của mặt phẳng nghiêng. Bỏ qua ma sát. ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Trọng lượng $P = 50 \text{ N}$.
- Chọn hệ trục $Oxy$: $Ox$ song song mp nghiêng (hướng lên), $Oy$ vuông góc mp nghiêng (hướng lên).
- Phân tích $\vec{P}$: $P_x = -P\sin 30^\circ$, $P_y = -P\cos 30^\circ$.
- Lực $\vec{F}$ nằm ngang. Phân tích $\vec{F}$:
  + Phương $Ox$: $F_x = F \cos 30^\circ$ (hướng lên dọc mặt phẳng).
  + Phương $Oy$: $F_y = -F \sin 30^\circ$ (hướng xuống ép vào mặt phẳng).
- Cân bằng theo $Ox$: $F_x - P_x = 0 \Rightarrow F \cos 30^\circ = P \sin 30^\circ \Rightarrow F = P \tan 30^\circ = 50 \cdot \frac{\sqrt{3}}{3} = \frac{50\sqrt{3}}{3} \text{ (N)}$.
- Cân bằng theo $Oy$: $N - P_y - F_y = 0 \Rightarrow N = P \cos 30^\circ + F \sin 30^\circ$.
  $$N = 50 \cdot \frac{\sqrt{3}}{2} + \left( \frac{50\sqrt{3}}{3} \right) \cdot \frac{1}{2} = 25\sqrt{3} + \frac{25\sqrt{3}}{3} = \frac{100\sqrt{3}}{3} \text{ (N)}$$
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Cho ba lực đồng quy $\vec{F}_1, \vec{F}_2, \vec{F}_3$ có độ lớn lần lượt là $4 \text{ N}, 5 \text{ N}, 10 \text{ N}$. Ba lực này có thể giữ cho một chất điểm đứng yên được không?
[A] Được, nếu góc giữa chúng là $120^\circ$.
[B] Được, vì có 3 lực.
[*C] Không được, vì tổng của 2 lực bất kỳ luôn nhỏ hơn lực thứ ba.
[D] Không được, vì chúng không phải là lực đàn hồi.
[/QUIZ]

[QUIZ]
Câu 10: Hai lực $\vec{F}_1$ và $\vec{F}_2$ vuông góc với nhau có độ lớn tương ứng là $F_1 = 3 \text{ N}$ và $F_2 = 4 \text{ N}$. Hợp lực của hai lực này hợp với $\vec{F}_1$ một góc xấp xỉ bao nhiêu độ?
[A] $37^\circ$
[*B] $53^\circ$
[C] $90^\circ$
[D] $45^\circ$
[/QUIZ]
        `
    },

    "PHY10-CH3-02": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương III: Động lực học",
        title: "Bài 2: Ba định luật Newton & Hệ vật liên kết",
        theory: String.raw`
### 1. Ba định luật Newton
- **Định luật 1 (Quán tính):** Vật sẽ giữ nguyên trạng thái đứng yên hoặc CĐT đều nếu tổng lực bằng 0. Khối lượng đặc trưng cho mức quán tính.
- **Định luật 2:** $\vec{a} = \frac{\vec{F}_{hl}}{m}$. Hợp lực cùng hướng với gia tốc.
- **Định luật 3:** Tương tác giữa 2 vật A và B luôn sinh ra cặp lực và phản lực: $\vec{F}_{AB} = -\vec{F}_{BA}$. Cặp lực này trực đối, khác điểm đặt (đặt vào 2 vật khác nhau), xuất hiện và biến mất đồng thời.

---
### 2. 💎 Chuyên đề Master: Bài toán Hệ vật liên kết (VDC)
Trong thực tế, ta thường gặp một hệ gồm nhiều vật liên kết với nhau bằng dây nối hoặc ép sát vào nhau. 
📌 **Nguyên tắc giải bài toán hệ vật:**
1. **Xét toàn hệ:** Khối lượng hệ $m = m_1 + m_2 + ...$ Các lực tương tác giữa các vật trong hệ được gọi là **Nội lực**, chúng trực đối và sẽ triệt tiêu nhau khi viết phương trình cho toàn hệ. 
   Gia tốc chung của hệ: $a = \frac{\sum \text{Ngoại lực hướng cđ} - \sum \text{Ngoại lực cản}}{m_{tổng}}$.
2. **Xét từng vật lẻ:** Tách riêng một vật ra để tính **Nội lực** (lực căng dây $T$, lực tương tác $F_{12}$, $N_{12}$). Dùng gia tốc $a$ vừa tìm được ở bước 1, áp dụng Định luật 2 cho riêng vật đó.

📌 **Một số hệ vật kinh điển:**
- **Vật kéo vật trên mặt ngang bằng dây:** Dây không dãn nên $v_1=v_2, a_1=a_2=a$. Lực căng dây $T$ ở 2 đầu là như nhau (nếu bỏ qua khối lượng dây).
- **Hệ ép sát nhau:** Đẩy vật $m_1$ bằng lực $F$, $m_1$ ép vào $m_2$ một lực $N_{12}$, $m_2$ ép lại $m_1$ lực $N_{21}$. $N_{12} = N_{21} = N$. (Tính $a$ toàn hệ, rồi xét riêng $m_2$ để tìm $N$).
- **Máy Atwood (Ròng rọc cố định treo 2 vật):** Lực căng dây 2 bên là $T$. Hệ chuyển động về phía vật nặng hơn. 
  Gia tốc hệ: $a = \frac{|P_1 - P_2|}{m_1 + m_2} = \frac{|m_1 - m_2|g}{m_1 + m_2}$.
        `,
        tips: String.raw`
- 💡 **Quy tắc vàng cho Hệ ròng rọc:** Nếu vướng mắc, hãy kéo "duỗi thẳng" toàn bộ hệ thống các vật và dây nối thành một đường thẳng nằm ngang. Khối lượng tổng là $M_{tổng}$. Lực kéo hệ chính là Trọng lực của vật bị treo thõng. Lực cản là Ma sát của vật đặt trên bàn.
- ⚠️ **Lỗi sai:** Khi dùng phương trình $\vec{F}_{hl} = m\vec{a}$, học sinh thường nhầm lẫn giữa Lực Căng Dây ($T$) và Trọng lực ($P$). Dây nằm ngang thì lực kéo là $T$, nhưng nhiều bạn lại lấy bằng $mg$ của vật treo. Hãy nhớ $T \neq mg$ nếu vật treo đang chuyển động có gia tốc! ($T = m(g \pm a)$).
        `,
        practice: String.raw`
### Dạng 1: Áp dụng cơ bản Định luật 2 và 3 Newton
**Bài 1 (Cơ bản):** Một xe đẩy siêu thị có khối lượng $20 \text{ kg}$. Để truyền cho xe một gia tốc $1.5 \text{ m/s}^2$ trên sàn ngang, cần tác dụng một lực đẩy theo phương ngang bằng bao nhiêu? (Bỏ qua ma sát).
[GIAI]
**Lời giải chi tiết:**
- Áp dụng ĐL 2 Newton: $F = m \cdot a = 20 \cdot 1.5 = 30 \text{ (N)}$.
[/GIAI]

**Bài 2 (Vận dụng):** Một viên bi A khối lượng $200 \text{ g}$ đang chuyển động với vận tốc $5 \text{ m/s}$ thì va chạm vào viên bi B khối lượng $300 \text{ g}$ đang đứng yên. Sau va chạm bi A bật ngược trở lại với vận tốc $1 \text{ m/s}$. Thời gian va chạm là $0.05 \text{ s}$. 
a) Tính lực do bi B tác dụng lên bi A.
b) Tính vận tốc của bi B ngay sau va chạm.
[GIAI]
**Lời giải chi tiết:**
a) Chọn chiều dương là chiều chuyển động ban đầu của A. $v_{0A} = 5, v_A = -1$.
   Gia tốc bi A: $a_A = \frac{v_A - v_{0A}}{t} = \frac{-1 - 5}{0.05} = -120 \text{ (m/s}^2\text{)}$.
   Lực B tác dụng lên A: $F_{BA} = m_A \cdot a_A = 0.2 \cdot (-120) = -24 \text{ (N)}$. (Độ lớn $24 \text{ N}$, hướng ngược chiều ban đầu).
b) Theo ĐL 3 Newton, lực A tác dụng lên B: $F_{AB} = -F_{BA} = 24 \text{ (N)}$.
   Gia tốc bi B: $a_B = \frac{F_{AB}}{m_B} = \frac{24}{0.3} = 80 \text{ (m/s}^2\text{)}$.
   Vận tốc bi B: $v_B = v_{0B} + a_B \cdot t = 0 + 80 \cdot 0.05 = 4 \text{ (m/s)}$.
[/GIAI]

### Dạng 2: Bài toán Hệ vật đặt sát nhau
**Bài 3 (Vận dụng cao):** Hai vật $m_1 = 3 \text{ kg}$ và $m_2 = 2 \text{ kg}$ được đặt sát nhau trên một mặt bàn nằm ngang không ma sát. Một lực $F = 20 \text{ N}$ tác dụng theo phương ngang đẩy vào khối $m_1$.
a) Tính gia tốc của hệ.
b) Tính lực tương tác (lực ép) giữa hai vật.
[GIAI]
**Lời giải chi tiết:**
a) Xét toàn hệ $(m_1 + m_2)$, nội lực tương tác triệt tiêu, chỉ có ngoại lực đẩy $F$.
   Gia tốc chung: $a = \frac{F}{m_1 + m_2} = \frac{20}{3 + 2} = 4 \text{ (m/s}^2\text{)}$.
b) Xét riêng khối $m_2$: Lực duy nhất đẩy $m_2$ di chuyển là lực ép $N_{12}$ do $m_1$ tác dụng lên nó.
   Áp dụng ĐL 2 Newton cho $m_2$: 
   $$N_{12} = m_2 \cdot a = 2 \cdot 4 = 8 \text{ (N)}$$
   (Vậy lực tương tác giữa 2 vật là $8 \text{ N}$, nhỏ hơn lực đẩy $F$ ban đầu).
[/GIAI]

**Bài 4 (Vận dụng cao):** Vẫn giữ nguyên giả thiết bài 3, nhưng bây giờ lực $F = 20 \text{ N}$ được đổi lại, đẩy vào khối $m_2$ (tức là $m_2$ sẽ đẩy $m_1$). Hỏi lực tương tác giữa hai khối bây giờ là bao nhiêu? So sánh với kết quả câu trên và rút ra nhận xét.
[GIAI]
**Lời giải chi tiết:**
- Gia tốc của hệ không đổi: $a = 4 \text{ m/s}^2$.
- Lần này đẩy vào $m_2$, nên lực duy nhất trực tiếp đẩy khối $m_1$ di chuyển phía trước là lực $N_{21}$ do $m_2$ tác dụng lên $m_1$.
- Xét riêng khối $m_1$: 
  $$N_{21} = m_1 \cdot a = 3 \cdot 4 = 12 \text{ (N)}$$
- Nhận xét: Lực ép giữa các khối phụ thuộc vào việc ta đẩy khối nào. Khối lượng bị đẩy càng lớn thì lực tương tác (chịu tải) càng lớn. Lực truyền qua mặt tiếp xúc đã thay đổi từ $8 \text{ N}$ thành $12 \text{ N}$.
[/GIAI]

### Dạng 3: Hệ vật nối bằng dây trên mặt phẳng ngang
**Bài 5 (Vận dụng cao):** Hai xe lăn A ($m_A = 4 \text{ kg}$) và B ($m_B = 6 \text{ kg}$) được nối với nhau bằng một sợi dây nhẹ, không dãn. Kéo xe B bằng một lực ngang $F = 30 \text{ N}$. Bỏ qua ma sát. Tính lực căng của sợi dây nối 2 xe.
[GIAI]
**Lời giải chi tiết:**
- Gia tốc toàn hệ: $a = \frac{F}{m_A + m_B} = \frac{30}{4 + 6} = 3 \text{ (m/s}^2\text{)}$.
- Xét riêng xe A (xe đi sau): Lực duy nhất kéo xe A là lực căng dây $T$.
  $$T = m_A \cdot a = 4 \cdot 3 = 12 \text{ (N)}$$
- (Thử lại với xe B: Lực kéo $F$ hướng tới, lực căng dây $T$ giật ngược lại. $F - T = m_B \cdot a \Rightarrow 30 - T = 6 \cdot 3 \Rightarrow T = 12 \text{ N}$. Chính xác).
[/GIAI]

**Bài 6 (Nâng cao):** Hai vật $m_1 = 3 \text{ kg}$ đặt trên mặt bàn phẳng ngang và $m_2 = 2 \text{ kg}$ được nối với nhau bằng sợi dây nhẹ vắt qua ròng rọc cố định ở mép bàn. Vật $m_2$ treo lơ lửng bên ngoài. Hệ số ma sát giữa $m_1$ và mặt bàn là $\mu = 0.1$. Lấy $g = 10 \text{ m/s}^2$. 
a) Tính gia tốc của hệ.
b) Tính lực căng của sợi dây.
[GIAI]
**Lời giải chi tiết:**
a) Duỗi thẳng hệ, lực phát động kéo hệ đi là trọng lượng của vật treo: $P_2 = m_2 g = 20 \text{ N}$.
   Lực cản hệ là ma sát ở mặt bàn: $F_{ms1} = \mu \cdot m_1 \cdot g = 0.1 \cdot 3 \cdot 10 = 3 \text{ N}$.
   Gia tốc hệ:
   $$a = \frac{P_2 - F_{ms1}}{m_1 + m_2} = \frac{20 - 3}{3 + 2} = \frac{17}{5} = 3.4 \text{ (m/s}^2\text{)}$$
b) Xét riêng vật $m_2$ (đi xuống): Trọng lực kéo xuống, Lực căng $T$ kéo lên.
   $$P_2 - T = m_2 a \Rightarrow T = P_2 - m_2 a = 20 - 2 \cdot 3.4 = 20 - 6.8 = 13.2 \text{ (N)}$$
   *(Thử lại với $m_1$: $T - F_{ms1} = m_1 a \Rightarrow 13.2 - 3 = 3 \cdot 3.4 \Rightarrow 10.2 = 10.2$. Khớp!)*
[/GIAI]

### Dạng 4: Máy Atwood (2 vật treo ròng rọc)
**Bài 7 (Nâng cao):** Một sợi dây vắt qua một ròng rọc cố định (bỏ qua khối lượng ròng rọc và ma sát trục). Hai đầu dây treo 2 quả cân $m_1 = 300 \text{ g}$ và $m_2 = 200 \text{ g}$. Lấy $g = 10 \text{ m/s}^2$. Thả cho hệ chuyển động. 
a) Tính gia tốc của mỗi quả cân.
b) Tính lực căng dây.
c) Áp lực của dây tác dụng lên trục ròng rọc bằng bao nhiêu?
[GIAI]
**Lời giải chi tiết:**
- Đổi: $m_1 = 0.3 \text{ kg}, m_2 = 0.2 \text{ kg}$. Trọng lượng $P_1 = 3 \text{ N}, P_2 = 2 \text{ N}$.
a) Vì $P_1 > P_2$, vật 1 đi xuống, vật 2 đi lên với cùng gia tốc $a$.
   Gia tốc hệ:
   $$a = \frac{P_1 - P_2}{m_1 + m_2} = \frac{3 - 2}{0.3 + 0.2} = \frac{1}{0.5} = 2 \text{ (m/s}^2\text{)}$$
b) Xét vật $m_1$ (đi xuống):
   $$P_1 - T = m_1 a \Rightarrow T = P_1 - m_1 a = 3 - 0.3 \cdot 2 = 2.4 \text{ (N)}$$
c) Lực căng dây ở 2 nhánh bằng nhau và đều bằng $T = 2.4 \text{ N}$, kéo trục ròng rọc xuống.
   Áp lực lên trục ròng rọc: $Q = 2T = 4.8 \text{ (N)}$.
   *(Nhận xét: Áp lực lên trục lúc hệ đang chuyển động là $4.8 \text{ N}$, nhỏ hơn tổng trọng lượng 2 vật là $5 \text{ N}$.)*
[/GIAI]

**Bài 8 (Nâng cao):** Cho cơ hệ như bài 7 nhưng khối lượng các vật là $m_1$ và $m_2$ chưa biết ($m_1 > m_2$). Khi thả tay, hệ bắt đầu chuyển động và sau $1 \text{ giây}$, vật $m_1$ đi xuống được quãng đường $1 \text{ m}$. Biết lực căng dây khi chuyển động là $T = 24 \text{ N}$. Lấy $g = 10 \text{ m/s}^2$. Tính $m_1$ và $m_2$.
[GIAI]
**Lời giải chi tiết:**
- Vật đi từ nghỉ, quãng đường $s = \frac{1}{2}at^2 \Rightarrow 1 = \frac{1}{2} \cdot a \cdot 1^2 \Rightarrow a = 2 \text{ (m/s}^2\text{)}$.
- Xét vật $m_1$ (đi xuống): $m_1 g - T = m_1 a \Rightarrow 10m_1 - 24 = 2m_1 \Rightarrow 8m_1 = 24 \Rightarrow m_1 = 3 \text{ (kg)}$.
- Xét vật $m_2$ (đi lên): $T - m_2 g = m_2 a \Rightarrow 24 - 10m_2 = 2m_2 \Rightarrow 12m_2 = 24 \Rightarrow m_2 = 2 \text{ (kg)}$.
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Hiện tượng nào sau đây không thể giải thích bằng định luật quán tính?
[A] Bụi rũ ra khỏi thảm khi đập mạnh bằng gậy.
[B] Đầu búa lún sâu vào cán búa khi gõ mạnh đuôi cán búa xuống sàn.
[*C] Quả táo rụng từ trên cây xuống đất.
[D] Hành khách chúi người về trước khi xe phanh gấp.
[/QUIZ]

[QUIZ]
Câu 10: Theo định luật 3 Newton, "lực" và "phản lực" có đặc điểm nào sau đây?
[A] Tác dụng vào cùng một vật.
[B] Triệt tiêu nhau, làm vật đứng yên.
[C] Khác nhau về độ lớn tùy vào khối lượng 2 vật tương tác.
[*D] Tác dụng vào hai vật khác nhau.
[/QUIZ]
        `
    },

    "PHY10-CH3-03": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương III: Động lực học",
        title: "Bài 3: Trọng lực, Ma sát, Dây căng & Lực quán tính",
        theory: String.raw`
### 1. Trọng lực, Phản lực và Lực ma sát
- **Trọng lực:** $P = mg$. Trọng lượng thay đổi theo gia tốc trọng trường $g$ ở các vị trí địa lý khác nhau.
- **Phản lực pháp tuyến ($N$):** Luôn vuông góc với mặt tiếp xúc.
- **Lực ma sát trượt:** $F_{mst} = \mu \cdot N$. (Lưu ý: Tính $N$ bằng phương trình cân bằng vuông góc hướng cđ).
- **Lực ma sát nghỉ:** Giữ vật đứng yên khi có xu hướng trượt. Độ lớn ma sát nghỉ bằng đúng với ngoại lực kéo. Giá trị ma sát nghỉ cực đại: $F_{msn(\max)} = \mu_n \cdot N$ (thường $\mu_n > \mu_t$).

### 2. Lực căng dây ($\vec{T}$)
- Luôn hướng về phía điểm giữa của sợi dây, chống lại xu hướng dây bị kéo dãn.
- Đối với dây nhẹ, không dãn và ròng rọc trơn, lực căng $T$ truyền đi nguyên vẹn dọc theo sợi dây.

---
### 3. 💎 Chuyên đề Master: Lực quán tính trong HQC phi quán tính (VDC)
Hệ quy chiếu (HQC) phi quán tính là HQC đang chuyển động CÓ GIA TỐC $\vec{a}$ so với mặt đất (VD: xe đang tăng tốc, thang máy đang đi lên nhanh dần).
📌 **Định luật 2 Newton trong HQC phi quán tính:**
- Khi người quan sát đứng trong HQC có gia tốc $\vec{a}$, họ phải đưa thêm vào một lực ảo gọi là **Lực quán tính** ($\vec{F}_{qt}$) tác dụng lên mọi vật có khối lượng $m$.
  $$\vec{F}_{qt} = -m\vec{a}$$
- Lực quán tính luôn **NGƯỢC CHIỀU** với gia tốc của hệ quy chiếu.
- Phương trình động lực học mới: $\vec{F}_{thực} + \vec{F}_{qt} = m\vec{a}_{tương\_đối}$.

📌 **Bài toán kinh điển:**
- **Thang máy:** Vật treo trong thang máy. Thang đi lên nhanh dần đều ($\vec{a}$ hướng lên $\Rightarrow \vec{F}_{qt}$ hướng xuống cộng vào $P$). Trọng lượng biểu kiến: $P' = m(g + a)$ (Tăng trọng). Thang đi xuống nhanh dần $\Rightarrow P' = m(g - a)$ (Giảm trọng).
- **Con lắc treo trong xe tăng tốc ngang:** Xe có gia tốc $a$ tới trước $\Rightarrow \vec{F}_{qt}$ kéo vật lùi ra sau. Vị trí cân bằng mới của dây treo bị lệch góc $\alpha$: $\tan \alpha = \frac{F_{qt}}{P} = \frac{ma}{mg} = \frac{a}{g}$.
        `,
        tips: String.raw`
- 💡 **Mẹo tính Phản lực $N$:**
  + Mặt ngang, không lực xiên: $N = mg$.
  + Kéo xiên LÊN góc $\alpha$: $N = mg - F\sin\alpha$.
  + Đẩy xiên XUỐNG góc $\alpha$: $N = mg + F\sin\alpha$.
  + Mặt phẳng nghiêng góc $\alpha$: $N = mg\cos\alpha$.
- ⚠️ **Lỗi sai:** Khi vật nằm trên xe chuyển động có gia tốc, ma sát nghỉ giữ vật đứng yên so với xe, nó đóng vai trò truyền gia tốc cho vật. Nên $F_{msn} = ma$. Rất nhiều người nhầm $F_{msn} = \mu mg$.
        `,
        practice: String.raw`
### Dạng 1: Bài toán Ma sát có thay đổi Phản lực
**Bài 1 (Cơ bản):** Người ta dùng một lực $50 \text{ N}$ kéo một khúc gỗ $10 \text{ kg}$ trượt đều trên sàn ngang. Tính hệ số ma sát trượt giữa gỗ và sàn. ($g = 10 \text{ m/s}^2$). Dây kéo nằm ngang.
[GIAI]
**Lời giải chi tiết:**
- Trượt đều $\Rightarrow a = 0 \Rightarrow F = F_{ms} = 50 \text{ N}$.
- Phản lực $N = mg = 100 \text{ N}$.
- Hệ số ma sát: $\mu = \frac{F_{ms}}{N} = \frac{50}{100} = 0.5$.
[/GIAI]

**Bài 2 (Vận dụng):** Một vật khối lượng $5 \text{ kg}$ đặt trên mặt bàn nằm ngang. Hệ số ma sát trượt là $\mu = 0.2$. Người ta kéo vật bằng một lực $F = 20 \text{ N}$ hợp với phương ngang góc $30^\circ$ chếch lên. Tính gia tốc của vật. ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Phân tích lực $F$: 
  Thành phần ngang (kéo): $F_x = F \cos 30^\circ = 20 \cdot \frac{\sqrt{3}}{2} = 10\sqrt{3} \text{ (N)}$.
  Thành phần dọc (nhấc lên): $F_y = F \sin 30^\circ = 20 \cdot 0.5 = 10 \text{ (N)}$.
- Phản lực $N$ giảm do lực nhấc lên:
  $N = P - F_y = 50 - 10 = 40 \text{ (N)}$.
- Lực ma sát: $F_{ms} = \mu \cdot N = 0.2 \cdot 40 = 8 \text{ (N)}$.
- Gia tốc vật: 
  $$a = \frac{F_x - F_{ms}}{m} = \frac{10\sqrt{3} - 8}{5} = 2\sqrt{3} - 1.6 \approx 3.46 - 1.6 = 1.86 \text{ (m/s}^2\text{)}$$
[/GIAI]

### Dạng 2: Khảo sát chuyển động trên Mặt Phẳng Nghiêng
**Bài 3 (Vận dụng):** Thả một khối gỗ từ đỉnh một mặt phẳng nghiêng góc $30^\circ$ so với phương ngang. Biết hệ số ma sát $\mu = 0.3$. Lấy $g = 10 \text{ m/s}^2$. Tính gia tốc trượt xuống của khối gỗ.
[GIAI]
**Lời giải chi tiết:**
- Thành phần trọng lực kéo xuống: $P_x = mg \sin 30^\circ = m \cdot 10 \cdot 0.5 = 5m$.
- Phản lực: $N = mg \cos 30^\circ = m \cdot 10 \cdot \frac{\sqrt{3}}{2} = 5m\sqrt{3}$.
- Lực ma sát: $F_{ms} = \mu N = 0.3 \cdot 5m\sqrt{3} = 1.5m\sqrt{3}$.
- Áp dụng ĐL 2 Newton: 
  $$P_x - F_{ms} = m \cdot a \Rightarrow 5m - 1.5m\sqrt{3} = m \cdot a$$
  $$a = 5 - 1.5\sqrt{3} \approx 5 - 1.5 \cdot 1.732 = 5 - 2.598 = 2.4 \text{ (m/s}^2\text{)}$$
[/GIAI]

**Bài 4 (Vận dụng cao):** Đẩy một vật khối lượng $m$ lên một mặt phẳng nghiêng góc $\alpha = 45^\circ$ bằng một lực $F$ song song với mặt nghiêng. Biết vận tốc ban đầu là $v_0 = 10 \text{ m/s}$, và vật trượt lên được quãng đường dài nhất là $5 \text{ m}$ (chỉ do đà, lực đẩy ngưng tác dụng từ lúc bắt đầu trượt). Tính hệ số ma sát. ($g=10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Khi đẩy xong, lực $F=0$. Vật trượt lên bằng quán tính, chậm dần đều.
- Cả thành phần $P_x$ và $F_{ms}$ đều hướng thẳng xuống dưới theo mặt phẳng nghiêng.
  Gia tốc: $a = \frac{- (P_x + F_{ms})}{m} = - (g \sin 45^\circ + \mu g \cos 45^\circ)$.
- Tìm $a$ từ động học: $v^2 - v_0^2 = 2as \Rightarrow 0 - 100 = 2 \cdot a \cdot 5 \Rightarrow a = -10 \text{ (m/s}^2\text{)}$.
- Ta có: $-10 = - 10 \cdot \frac{\sqrt{2}}{2} - \mu \cdot 10 \cdot \frac{\sqrt{2}}{2}$
  $$1 = \frac{\sqrt{2}}{2} + \mu \frac{\sqrt{2}}{2} \Rightarrow \frac{\sqrt{2}}{2} (1 + \mu) = 1 \Rightarrow 1 + \mu = \frac{2}{\sqrt{2}} = \sqrt{2} \approx 1.414$$
  $$\mu = \sqrt{2} - 1 \approx 0.414$$
[/GIAI]

### Dạng 3: Bài toán Thang máy (Lực quán tính trục dọc)
**Bài 5 (Vận dụng cao):** Một người có khối lượng $60 \text{ kg}$ đứng trên một cái cân lò xo đặt trong thang máy. Hỏi số chỉ của cân thay đổi như thế nào trong các trường hợp sau: ($g = 10 \text{ m/s}^2$)
a) Thang máy đi lên nhanh dần đều với gia tốc $2 \text{ m/s}^2$.
b) Thang máy đi lên chậm dần đều với gia tốc $2 \text{ m/s}^2$.
[GIAI]
**Lời giải chi tiết:**
- Số chỉ của cân chính là Áp lực của người đè lên cân, bằng với Phản lực $N$ của cân đẩy lại người.
- HQC thang máy gia tốc $\vec{a}$. Lực quán tính $\vec{F}_{qt} = -m\vec{a}$ tác dụng lên người. Trọng lượng biểu kiến: $\vec{P}' = \vec{P} + \vec{F}_{qt}$.
a) Đi lên nhanh dần đều $\Rightarrow \vec{v}$ hướng lên, $\vec{a}$ hướng lên cùng chiều $\Rightarrow \vec{F}_{qt}$ hướng thẳng XUỐNG DƯỚI (cùng chiều với $P$).
   $$N = P + F_{qt} = m(g + a) = 60(10 + 2) = 720 \text{ (N)}$$ (Tăng trọng).
b) Đi lên chậm dần đều $\Rightarrow \vec{v}$ hướng lên, $\vec{a}$ hướng XUỐNG ngược chiều $\Rightarrow \vec{F}_{qt}$ hướng thẳng LÊN TRÊN (ngược chiều $P$).
   $$N = P - F_{qt} = m(g - a) = 60(10 - 2) = 480 \text{ (N)}$$ (Giảm trọng).
[/GIAI]

**Bài 6 (Nâng cao):** Một thang máy rơi tự do đứt cáp. Một người bên trong cầm một vật và buông tay ra. Vật sẽ chuyển động như thế nào đối với người đó? Giải thích bằng lực quán tính.
[GIAI]
**Lời giải chi tiết:**
- Thang máy rơi tự do nên có gia tốc $\vec{a}$ bằng $\vec{g}$ (hướng xuống).
- Trong hệ quy chiếu thang máy, mọi vật đều chịu thêm một lực quán tính $\vec{F}_{qt} = -m\vec{a} = -m\vec{g}$ (có hướng lên trên).
- Lực tổng cộng tác dụng lên vật trong HQC thang máy:
  $$\vec{P}_{biểu\_kiến} = \vec{P} + \vec{F}_{qt} = m\vec{g} - m\vec{g} = \vec{0}$$
- Vì lực tổng cộng bằng 0, vật ở trạng thái không trọng lượng. Đối với người trong thang máy, khi buông tay, vật sẽ **lơ lửng, đứng yên** tại chỗ so với họ.
[/GIAI]

### Dạng 4: Bài toán Lực quán tính trục ngang
**Bài 7 (Nâng cao):** Một xe tải đang chuyển động trên mặt đường nằm ngang với gia tốc $a = 5 \text{ m/s}^2$. Trên trần xe có treo một con lắc đơn gồm vật nặng $m = 200 \text{ g}$ và sợi dây nhẹ. Tính góc lệch của dây treo so với phương thẳng đứng khi con lắc ở vị trí cân bằng tương đối với xe và lực căng của sợi dây. ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Trong HQC xe (đang tăng tốc), vật $m$ chịu thêm lực quán tính $\vec{F}_{qt}$ nằm ngang ngược chiều chuyển động. $F_{qt} = ma = 0.2 \cdot 5 = 1 \text{ N}$.
- Vị trí cân bằng mới: Tổng 3 lực $\vec{P} + \vec{F}_{qt} + \vec{T} = \vec{0}$.
- Hợp lực của $\vec{P}$ và $\vec{F}_{qt}$ được gọi là trọng lực biểu kiến $\vec{P}'$. Sợi dây sẽ căng dọc theo phương của $\vec{P}'$.
- Góc lệch $\alpha$:
  $$\tan \alpha = \frac{F_{qt}}{P} = \frac{ma}{mg} = \frac{a}{g} = \frac{5}{10} = 0.5 \Rightarrow \alpha \approx 26.56^\circ$$
- Lực căng dây $T$ bằng độ lớn trọng lượng biểu kiến $P'$:
  $$T = \sqrt{P^2 + F_{qt}^2} = \sqrt{(mg)^2 + (ma)^2} = m\sqrt{g^2 + a^2} = 0.2\sqrt{100 + 25} = 0.2 \cdot \sqrt{125} \approx 2.24 \text{ (N)}$$
[/GIAI]

**Bài 8 (Nâng cao):** Một vật khối lượng $m$ đặt trên sàn của một chiếc xe tải thùng hở. Hệ số ma sát nghỉ giữa vật và sàn xe là $\mu_n = 0.4$. Hỏi xe tải có thể khởi hành với gia tốc tối đa bằng bao nhiêu để vật không bị trượt về phía sau thùng xe? ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Khi xe tăng tốc với gia tốc $\vec{a}$ tới trước, trong HQC của xe, vật $m$ chịu lực quán tính $\vec{F}_{qt} = -m\vec{a}$ kéo ngược về sau.
- Để vật không trượt về sau, lực ma sát nghỉ (hướng tới trước) phải cân bằng với lực quán tính này:
  $$F_{msn} = F_{qt} = m \cdot a$$
- Lực ma sát nghỉ cực đại: $F_{msn(\max)} = \mu_n \cdot N = \mu_n \cdot mg$.
- Điều kiện không trượt: $F_{msn} \le F_{msn(\max)}$.
  $$ma \le \mu_n mg \Rightarrow a \le \mu_n g = 0.4 \cdot 10 = 4 \text{ (m/s}^2\text{)}$$
- Gia tốc tối đa xe tải có thể đạt được để vật không trượt là $4 \text{ m/s}^2$.
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Khi thang máy đi xuống nhanh dần đều, một người đứng trên cân trong thang máy sẽ thấy số chỉ của cân:
[A] Lớn hơn trọng lượng thực của mình.
[*B] Nhỏ hơn trọng lượng thực của mình.
[C] Bằng đúng trọng lượng thực.
[D] Tăng giảm liên tục.
[/QUIZ]

[QUIZ]
Câu 10: Nhận xét nào sau đây ĐÚNG về lực quán tính?
[A] Là lực thực do Trái Đất tác dụng lên vật.
[B] Xuất hiện trong cả hệ quy chiếu quán tính và phi quán tính.
[*C] Là lực giả (ảo) được đưa vào hệ quy chiếu có gia tốc để định luật 2 Newton vẫn đúng.
[D] Luôn cùng chiều với gia tốc của hệ quy chiếu.
[/QUIZ]
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DB_PHY_10_CH3_MASTER;
}