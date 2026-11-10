/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU VẬT LÝ 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Chương VII: Biến dạng của vật rắn. Áp suất chất lỏng
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP TỰ LUẬN + TRẮC NGHIỆM)
   ========================================================================== */

const DB_PHY_10_CH7 = {
    "PHY10-CH7-01": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương VII: Biến dạng của vật rắn. Áp suất chất lỏng",
        title: "Bài 33: Biến dạng của vật rắn. Định luật Hooke",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương VII", "Bài 33"],
        theory: String.raw`
### 1. Biến dạng đàn hồi và biến dạng dẻo
- **Biến dạng đàn hồi:** Là biến dạng mà vật có khả năng lấy lại hình dạng và kích thước ban đầu khi ngoại lực ngừng tác dụng (ví dụ: lò xo, dây cao su).
- **Biến dạng dẻo (không đàn hồi):** Là biến dạng mà vật không thể tự lấy lại hình dạng ban đầu khi ngừng tác dụng lực (ví dụ: đất sét, thanh chì).
- **Giới hạn đàn hồi:** Là giới hạn của ngoại lực mà nếu vượt qua, vật sẽ mất tính đàn hồi và chuyển sang biến dạng dẻo.

### 2. Các loại biến dạng cơ bản của vật rắn
- **Biến dạng kéo:** Xảy ra khi ngoại lực tác dụng dọc theo trục của vật, làm chiều dài của vật tăng lên so với ban đầu.
- **Biến dạng nén:** Xảy ra khi ngoại lực tác dụng dọc theo trục của vật, làm chiều dài của vật giảm đi.

### 3. Định luật Hooke (Húc)
- **Nội dung:** Trong giới hạn đàn hồi, độ lớn lực đàn hồi của lò xo tỉ lệ thuận với độ biến dạng của lò xo.
- **Công thức:**
  $$F_{đh} = k|\Delta l|$$
- Trong đó:
  + $F_{đh}$: Độ lớn lực đàn hồi (N).
  + $\Delta l = l - l_0$: Độ biến dạng (độ dãn hoặc nén) của lò xo (m).
  + $k$: Độ cứng (hay hệ số đàn hồi) của lò xo (N/m). Giá trị $k$ phụ thuộc vào bản chất vật liệu, cấu tạo và kích thước của lò xo.
- **Đặc điểm của lực đàn hồi:**
  + Điểm đặt: Tại vị trí tiếp xúc với vật gây biến dạng.
  + Phương: Trùng với trục của lò xo.
  + Chiều: Luôn ngược chiều với sự biến dạng (có xu hướng đưa vật về trạng thái chưa biến dạng).

---

### 4. 💎 Chuyên đề Master: Ghép lò xo và Cắt lò xo (VDC)
📌 **Cắt lò xo:** 
- Một lò xo đồng chất có độ cứng $k_0$, chiều dài tự nhiên $l_0$. Nếu cắt thành các lò xo ngắn hơn có chiều dài $l_1, l_2...$ thì độ cứng của mỗi đoạn tỉ lệ nghịch với chiều dài tự nhiên của nó.
  $$k_0 \cdot l_0 = k_1 \cdot l_1 = k_2 \cdot l_2 = \text{const}$$

📌 **Ghép lò xo:**
- **Ghép nối tiếp (kéo dài lò xo):** Lực tác dụng lên các lò xo như nhau, độ biến dạng tổng cộng bằng tổng các độ biến dạng.
  $$\frac{1}{k_{nt}} = \frac{1}{k_1} + \frac{1}{k_2} + ... + \frac{1}{k_n}$$
  *(Độ cứng của hệ giảm đi).*
- **Ghép song song (các lò xo cạnh nhau):** Độ biến dạng của các lò xo bằng nhau, lực kéo tổng cộng bằng tổng các lực.
  $$k_{ss} = k_1 + k_2 + ... + k_n$$
  *(Độ cứng của hệ tăng lên).*
        `,
        tips: String.raw`
- 💡 **Mẹo tính nhanh khi treo vật:** 
  Khi treo vật khối lượng $m$ vào lò xo thẳng đứng, ở vị trí cân bằng, lực đàn hồi cân bằng với trọng lực: 
  $$P = F_{đh} \Leftrightarrow mg = k\Delta l \Rightarrow \Delta l = \frac{mg}{k}$$
- ⚠️ **Lỗi sai thường gặp:** 
  - Quên đổi đơn vị của $\Delta l$ từ cm sang mét (m) trước khi tính toán lực hoặc năng lượng.
  - Sử dụng sai khối lượng tính bằng gam (g), phải luôn đổi sang kg ($1 \text{ g} = 10^{-3} \text{ kg}$).
        `,
        practice: String.raw`
### Dạng 1: Áp dụng cơ bản định luật Hooke
**Bài 1 (Cơ bản):** Một lò xo có độ cứng $k = 100 \text{ N/m}$, chiều dài tự nhiên $l_0 = 20 \text{ cm}$. Khi bị kéo dãn đến chiều dài $l = 24 \text{ cm}$ thì lực đàn hồi của lò xo có độ lớn bằng bao nhiêu?
[GIAI]
**Lời giải chi tiết:**
- Đổi đơn vị: $l_0 = 20 \text{ cm} = 0.2 \text{ m}$, $l = 24 \text{ cm} = 0.24 \text{ m}$.
- Độ biến dạng của lò xo: 
  $$\Delta l = |l - l_0| = |0.24 - 0.2| = 0.04 \text{ (m)}$$
- Áp dụng định luật Hooke, lực đàn hồi của lò xo:
  $$F_{đh} = k\Delta l = 100 \cdot 0.04 = 4 \text{ (N)}$$
[/GIAI]

**Bài 2 (Cơ bản):** Khi treo một vật có khối lượng $200 \text{ g}$ vào một lò xo treo thẳng đứng thì lò xo dãn ra $2 \text{ cm}$. Lấy $g = 10 \text{ m/s}^2$. Tính độ cứng của lò xo.
[GIAI]
**Lời giải chi tiết:**
- Đổi đơn vị: $m = 200 \text{ g} = 0.2 \text{ kg}$; $\Delta l = 2 \text{ cm} = 0.02 \text{ m}$.
- Ở vị trí cân bằng, trọng lực của vật cân bằng với lực đàn hồi của lò xo:
  $$P = F_{đh} \Rightarrow mg = k\Delta l$$
- Độ cứng của lò xo:
  $$k = \frac{mg}{\Delta l} = \frac{0.2 \cdot 10}{0.02} = \frac{2}{0.02} = 100 \text{ (N/m)}$$
[/GIAI]

### Dạng 2: Bài toán lập hệ phương trình tìm $k$ và $l_0$
**Bài 3 (Vận dụng):** Một lò xo có chiều dài tự nhiên $l_0$. Khi chịu lực kéo $F_1 = 2 \text{ N}$ thì chiều dài của lò xo là $l_1 = 22 \text{ cm}$. Khi chịu lực kéo $F_2 = 4 \text{ N}$ thì chiều dài của lò xo là $l_2 = 24 \text{ cm}$. Tính chiều dài tự nhiên $l_0$ và độ cứng $k$ của lò xo.
[GIAI]
**Lời giải chi tiết:**
- Đổi đơn vị: $l_1 = 0.22 \text{ m}$, $l_2 = 0.24 \text{ m}$.
- Ta có hệ phương trình theo định luật Hooke:
  $$\begin{cases} F_1 = k(l_1 - l_0) \\ F_2 = k(l_2 - l_0) \end{cases} \Rightarrow \begin{cases} 2 = k(0.22 - l_0) \quad (1) \\ 4 = k(0.24 - l_0) \quad (2) \end{cases}$$
- Lấy (2) chia (1) vế theo vế:
  $$\frac{4}{2} = \frac{0.24 - l_0}{0.22 - l_0} \Rightarrow 2(0.22 - l_0) = 0.24 - l_0$$
  $$0.44 - 2l_0 = 0.24 - l_0 \Rightarrow l_0 = 0.2 \text{ (m)} = 20 \text{ (cm)}$$
- Thay $l_0$ vào (1):
  $$2 = k(0.22 - 0.2) = 0.02k \Rightarrow k = 100 \text{ (N/m)}$$
[/GIAI]

### Dạng 3: Lò xo trên mặt phẳng nghiêng, thang máy
**Bài 4 (Vận dụng cao):** Một vật khối lượng $m = 500 \text{ g}$ được gắn vào một đầu lò xo có độ cứng $k = 50 \text{ N/m}$, đầu kia của lò xo được giữ cố định. Hệ được đặt trên mặt phẳng nghiêng một góc $\alpha = 30^\circ$ so với phương ngang. Bỏ qua ma sát. Lấy $g = 10 \text{ m/s}^2$. Tính độ dãn của lò xo khi vật cân bằng.
[GIAI]
**Lời giải chi tiết:**
- Các lực tác dụng lên vật dọc theo mặt phẳng nghiêng gồm: thành phần trọng lực $P_x$ kéo xuống và lực đàn hồi $F_{đh}$ giữ lại.
- Ở trạng thái cân bằng: 
  $$F_{đh} = P_x = mg \sin \alpha$$
- Thay số ($m = 0.5 \text{ kg}$):
  $$k\Delta l = mg \sin 30^\circ \Rightarrow 50 \cdot \Delta l = 0.5 \cdot 10 \cdot 0.5$$
  $$50 \Delta l = 2.5 \Rightarrow \Delta l = \frac{2.5}{50} = 0.05 \text{ (m)} = 5 \text{ (cm)}$$
[/GIAI]

**Bài 5 (Vận dụng cao):** Một người treo vật $m = 1 \text{ kg}$ vào lò xo độ cứng $100 \text{ N/m}$ trong thang máy. Thang máy đang đi lên nhanh dần đều với gia tốc $a = 2 \text{ m/s}^2$. Lấy $g = 10 \text{ m/s}^2$. Tính độ dãn của lò xo.
[GIAI]
**Lời giải chi tiết:**
- Chọn chiều dương hướng lên (cùng chiều chuyển động và gia tốc).
- Các lực tác dụng lên vật: Lực đàn hồi $F_{đh}$ (hướng lên) và Trọng lực $P$ (hướng xuống).
- Áp dụng định luật II Newton:
  $$F_{đh} - P = m \cdot a \Rightarrow F_{đh} = P + ma = m(g + a)$$
- Thay vào công thức định luật Hooke:
  $$k\Delta l = m(g + a) \Rightarrow 100 \cdot \Delta l = 1(10 + 2) = 12$$
  $$\Delta l = \frac{12}{100} = 0.12 \text{ (m)} = 12 \text{ (cm)}$$
[/GIAI]

### Dạng 4: Cắt, ghép lò xo
**Bài 6 (Nâng cao):** Một lò xo đồng chất có chiều dài tự nhiên $l_0 = 60 \text{ cm}$ và độ cứng $k_0 = 40 \text{ N/m}$. Người ta cắt lò xo này thành hai đoạn có chiều dài $l_1 = 20 \text{ cm}$ và $l_2 = 40 \text{ cm}$. Tính độ cứng $k_1$ và $k_2$ của hai đoạn lò xo.
[GIAI]
**Lời giải chi tiết:**
- Đặc tính của lò xo khi bị cắt: $k_0 \cdot l_0 = k_1 \cdot l_1 = k_2 \cdot l_2$.
- Tính $k_1$:
  $$k_1 = \frac{k_0 \cdot l_0}{l_1} = \frac{40 \cdot 60}{20} = 120 \text{ (N/m)}$$
- Tính $k_2$:
  $$k_2 = \frac{k_0 \cdot l_0}{l_2} = \frac{40 \cdot 60}{40} = 60 \text{ (N/m)}$$
- Nhận xét: Lò xo càng ngắn thì độ cứng càng lớn (càng khó biến dạng).
[/GIAI]

**Bài 7 (Nâng cao):** Có hai lò xo $k_1 = 100 \text{ N/m}$ và $k_2 = 150 \text{ N/m}$. Người ta móc nối tiếp hai lò xo lại với nhau rồi treo vật $m = 1.2 \text{ kg}$. Lấy $g = 10 \text{ m/s}^2$. Tính độ cứng tương đương của hệ lò xo và độ dãn tổng cộng của hệ.
[GIAI]
**Lời giải chi tiết:**
- Khi hai lò xo ghép nối tiếp, độ cứng tương đương $k_{nt}$ được tính bằng:
  $$\frac{1}{k_{nt}} = \frac{1}{k_1} + \frac{1}{k_2} = \frac{1}{100} + \frac{1}{150} = \frac{3 + 2}{300} = \frac{5}{300} \Rightarrow k_{nt} = 60 \text{ (N/m)}$$
- Ở vị trí cân bằng, lực đàn hồi của hệ bằng trọng lực:
  $$F_{đh} = mg = 1.2 \cdot 10 = 12 \text{ (N)}$$
- Độ dãn tổng cộng của hệ:
  $$\Delta l = \frac{F_{đh}}{k_{nt}} = \frac{12}{60} = 0.2 \text{ (m)} = 20 \text{ (cm)}$$
[/GIAI]

**Bài 8 (Nâng cao):** Hai lò xo $k_1 = 50 \text{ N/m}$ và $k_2 = 75 \text{ N/m}$ được ghép song song (hai lò xo treo cạnh nhau) để treo một vật $m = 5 \text{ kg}$. Tính độ dãn chung của hệ lò xo. Lấy $g = 10 \text{ m/s}^2$.
[GIAI]
**Lời giải chi tiết:**
- Khi ghép song song, độ cứng tương đương của hệ là:
  $$k_{ss} = k_1 + k_2 = 50 + 75 = 125 \text{ (N/m)}$$
- Trọng lượng của vật: $P = mg = 5 \cdot 10 = 50 \text{ (N)}$.
- Độ dãn chung của hệ:
  $$\Delta l = \frac{P}{k_{ss}} = \frac{50}{125} = 0.4 \text{ (m)} = 40 \text{ (cm)}$$
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Phát biểu nào sau đây về định luật Hooke là đúng?
[A] Lực đàn hồi luôn tỉ lệ thuận với bình phương độ biến dạng.
[*B] Trong giới hạn đàn hồi, lực đàn hồi của lò xo tỉ lệ thuận với độ biến dạng của nó.
[C] Độ cứng của lò xo tỉ lệ thuận với độ biến dạng của lò xo.
[D] Lực đàn hồi luôn có chiều cùng chiều với chiều làm lò xo biến dạng.
[/QUIZ]

[QUIZ]
Câu 10: Nếu cắt một lò xo thành hai nửa bằng nhau thì độ cứng của mỗi nửa lò xo so với lò xo ban đầu sẽ:
[A] Giảm đi một nửa.
[B] Không thay đổi.
[*C] Tăng lên gấp đôi.
[D] Tăng lên gấp bốn lần.
[/QUIZ]
        `
    },

    "PHY10-CH7-02": {
        grade: "10", 
        subject: "PHY", 
        subjectName: "Vật lý 10",
        chapter: "Chương VII: Biến dạng của vật rắn. Áp suất chất lỏng",
        title: "Bài 34: Khối lượng riêng. Áp suất chất lỏng",
        breadcrumbs: ["Lớp 10", "Vật lý 10", "Chương VII", "Bài 34"],
        theory: String.raw`
### 1. Khối lượng riêng ($\rho$)
- **Khái niệm:** Khối lượng riêng của một chất là khối lượng của một đơn vị thể tích chất đó.
- **Công thức:** 
  $$\rho = \frac{m}{V}$$
- **Đơn vị:** $\text{kg/m}^3$ hoặc $\text{g/cm}^3$. ($1 \text{ g/cm}^3 = 1000 \text{ kg/m}^3$).
  (Ví dụ: Khối lượng riêng của nước là $\rho \approx 1000 \text{ kg/m}^3$).

### 2. Áp lực và Áp suất
- **Áp lực ($F$):** Là lực ép có phương vuông góc với mặt bị ép.
- **Áp suất ($p$):** Là độ lớn của áp lực trên một đơn vị diện tích bị ép. Đặc trưng cho tác dụng xuyên sâu của áp lực.
- **Công thức:**
  $$p = \frac{F}{S}$$
- **Đơn vị:** Pascal (Pa). $1 \text{ Pa} = 1 \text{ N/m}^2$.
  Các đơn vị khác: $1 \text{ atm} \approx 1.013 \cdot 10^5 \text{ Pa}$, $1 \text{ bar} = 10^5 \text{ Pa}$.

### 3. Áp suất chất lỏng
- Chất lỏng gây ra áp suất theo mọi phương lên đáy, thành bình và các vật ở trong nó.
- **Công thức áp suất dư (áp suất thủy tĩnh) tại một điểm cách mặt thoáng độ sâu $h$:**
  $$p = \rho \cdot g \cdot h$$
- **Áp suất tuyệt đối tại độ sâu $h$:**
  $$p_{tuyetdoi} = p_0 + \rho g h$$
  Trong đó: $p_0$ là áp suất khí quyển trên mặt thoáng, $\rho$ là khối lượng riêng của chất lỏng, $h$ là độ sâu.

### 4. Nguyên lí Pascal & Máy nén thủy lực
- **Nguyên lí Pascal:** Độ tăng áp suất lên một chất lỏng chứa trong bình kín được truyền nguyên vẹn cho mọi điểm của chất lỏng và thành bình.
- **Máy nén thủy lực:** Dựa trên nguyên lí Pascal, áp suất tại 2 pít-tông là bằng nhau ($p_1 = p_2$).
  $$\frac{F_1}{S_1} = \frac{F_2}{S_2} \Rightarrow \frac{F_2}{F_1} = \frac{S_2}{S_1}$$
  *(Lực nâng ở pít-tông lớn tỉ lệ thuận với diện tích của nó).*

---

### 5. 💎 Chuyên đề Master: Bình thông nhau và ống chữ U (VDC)
📌 **Bình thông nhau chứa một chất lỏng:** Mặt thoáng của chất lỏng ở các nhánh luôn ở cùng một độ cao, không phụ thuộc vào hình dạng bình.
📌 **Ống chữ U chứa nhiều chất lỏng không hòa tan:**
- Chọn một đường nằm ngang đi qua mặt phân cách thấp nhất giữa 2 chất lỏng làm mốc. 
- Áp suất tại 2 điểm trên cùng một mặt phẳng ngang trong cùng một chất lỏng tĩnh luôn bằng nhau ($p_A = p_B$).
- Thiết lập phương trình: $p_0 + \rho_1 g h_1 = p_0 + \rho_2 g h_2$.
        `,
        tips: String.raw`
- 💡 **Phân biệt độ cao và độ sâu:** Trong công thức $p = \rho g h$, $h$ là khoảng cách tính từ **mặt thoáng** chất lỏng xuống điểm đang xét, chứ không phải độ cao từ đáy bình lên.
- ⚠️ **Lỗi sai:** 
  - Thường nhầm $\text{cm}^2$ sang $\text{m}^2$. Phải nhớ $1 \text{ cm}^2 = 10^{-4} \text{ m}^2$.
  - Tính lực ép thủy lực nhưng quên không quy đổi diện tích ra cùng một hệ đơn vị.
        `,
        practice: String.raw`
### Dạng 1: Khối lượng riêng và Áp suất chất rắn
**Bài 1 (Cơ bản):** Một khối sắt có thể tích $50 \text{ cm}^3$, khối lượng riêng của sắt là $\rho = 7800 \text{ kg/m}^3$. Tính khối lượng của khối sắt.
[GIAI]
**Lời giải chi tiết:**
- Đổi đơn vị thể tích: $V = 50 \text{ cm}^3 = 50 \cdot 10^{-6} \text{ m}^3 = 5 \cdot 10^{-5} \text{ m}^3$.
- Áp dụng công thức khối lượng riêng:
  $$m = \rho \cdot V = 7800 \cdot 5 \cdot 10^{-5} = 0.39 \text{ (kg)} = 390 \text{ (g)}$$
[/GIAI]

**Bài 2 (Cơ bản):** Một cái thùng gỗ khối lượng $20 \text{ kg}$ đặt trên sàn nhà. Diện tích đáy thùng tiếp xúc với sàn là $0.5 \text{ m}^2$. Lấy $g = 10 \text{ m/s}^2$. Tính áp suất của thùng tác dụng lên sàn nhà.
[GIAI]
**Lời giải chi tiết:**
- Áp lực do thùng tác dụng lên sàn bằng trọng lượng của thùng:
  $$F = P = mg = 20 \cdot 10 = 200 \text{ (N)}$$
- Áp suất tác dụng lên sàn:
  $$p = \frac{F}{S} = \frac{200}{0.5} = 400 \text{ (Pa)}$$
[/GIAI]

### Dạng 2: Áp suất chất lỏng (Thủy tĩnh)
**Bài 3 (Vận dụng):** Một tàu ngầm đang lặn ở độ sâu $150 \text{ m}$ dưới mực nước biển. Cho khối lượng riêng của nước biển là $1030 \text{ kg/m}^3$, lấy $g = 10 \text{ m/s}^2$ và áp suất khí quyển $p_0 = 10^5 \text{ Pa}$. 
a) Tính áp suất tuyệt đối tác dụng lên vỏ tàu.
b) Cửa sập của tàu có diện tích $0.8 \text{ m}^2$. Tính áp lực của nước biển tác dụng lên cửa sập này.
[GIAI]
**Lời giải chi tiết:**
a) Áp suất do nước biển gây ra tại độ sâu $h = 150 \text{ m}$:
   $$p_{nước} = \rho g h = 1030 \cdot 10 \cdot 150 = 1545000 \text{ (Pa)} = 1.545 \cdot 10^6 \text{ (Pa)}$$
   Áp suất tuyệt đối tác dụng lên vỏ tàu:
   $$p = p_0 + p_{nước} = 10^5 + 1.545 \cdot 10^6 = 1.645 \cdot 10^6 \text{ (Pa)}$$
b) Trong tàu ngầm duy trì áp suất khí quyển $p_0$ để phi hành đoàn sinh sống. Nên chênh lệch áp suất tạo ra áp lực từ ngoài vào cửa sập chính là áp suất của cột nước $p_{nước}$.
   Áp lực tác dụng lên cửa sập:
   $$F = p_{nước} \cdot S = 1.545 \cdot 10^6 \cdot 0.8 = 1.236 \cdot 10^6 \text{ (N)}$$
[/GIAI]

**Bài 4 (Vận dụng):** Một bình hình trụ chứa nước cao $60 \text{ cm}$. Khối lượng riêng của nước là $1000 \text{ kg/m}^3$, $g = 10 \text{ m/s}^2$. 
a) Tính áp suất của nước lên đáy bình.
b) Tính áp suất của nước tại một điểm cách mặt nước $20 \text{ cm}$.
c) Tính áp suất của nước tại một điểm cách đáy bình $15 \text{ cm}$.
[GIAI]
**Lời giải chi tiết:**
a) Chiều cao cột nước: $h = 60 \text{ cm} = 0.6 \text{ m}$.
   Áp suất lên đáy bình: $p_đ = \rho g h = 1000 \cdot 10 \cdot 0.6 = 6000 \text{ (Pa)}$.
b) Điểm cách mặt nước $h_1 = 20 \text{ cm} = 0.2 \text{ m}$:
   $p_1 = \rho g h_1 = 1000 \cdot 10 \cdot 0.2 = 2000 \text{ (Pa)}$.
c) Điểm cách đáy bình $15 \text{ cm} \Rightarrow$ Độ sâu cách mặt nước là $h_2 = 60 - 15 = 45 \text{ cm} = 0.45 \text{ m}$.
   $p_2 = \rho g h_2 = 1000 \cdot 10 \cdot 0.45 = 4500 \text{ (Pa)}$.
[/GIAI]

### Dạng 3: Máy nén thủy lực
**Bài 5 (Vận dụng):** Một máy nén thủy lực có pít-tông nhỏ diện tích $S_1 = 20 \text{ cm}^2$ và pít-tông lớn diện tích $S_2 = 600 \text{ cm}^2$. Tác dụng lên pít-tông nhỏ một lực $F_1 = 150 \text{ N}$. Tính lực $F_2$ thu được ở pít-tông lớn có thể nâng được một vật có khối lượng tối đa bao nhiêu? ($g = 10 \text{ m/s}^2$).
[GIAI]
**Lời giải chi tiết:**
- Do cùng tỉ lệ, ta không cần đổi đơn vị $S$ sang $\text{m}^2$, dùng luôn $\text{cm}^2$:
  $$\frac{F_1}{S_1} = \frac{F_2}{S_2} \Rightarrow F_2 = F_1 \cdot \frac{S_2}{S_1}$$
- Thay số:
  $$F_2 = 150 \cdot \frac{600}{20} = 150 \cdot 30 = 4500 \text{ (N)}$$
- Trọng lượng tối đa của vật có thể nâng: $P = F_2 = 4500 \text{ N}$.
- Khối lượng tối đa: $m = \frac{P}{g} = \frac{4500}{10} = 450 \text{ (kg)}$.
[/GIAI]

**Bài 6 (Vận dụng cao):** Tiếp tục với máy nén ở bài 5. Nếu pít-tông nhỏ đi xuống một đoạn $h_1 = 30 \text{ cm}$ thì pít-tông lớn đi lên một đoạn $h_2$ bằng bao nhiêu? Tính công sinh ra ở hai pít-tông và so sánh.
[GIAI]
**Lời giải chi tiết:**
- Chất lỏng không chịu nén, nên thể tích nước bị đẩy ở pít-tông nhỏ bằng thể tích nước dâng lên ở pít-tông lớn: $V_1 = V_2 \Rightarrow S_1 h_1 = S_2 h_2$.
- Độ dịch chuyển của pít-tông lớn:
  $$h_2 = h_1 \cdot \frac{S_1}{S_2} = 30 \cdot \frac{20}{600} = 30 \cdot \frac{1}{30} = 1 \text{ (cm)} = 0.01 \text{ (m)}$$
- Công thực hiện ở pít-tông nhỏ (đổi $h_1 = 0.3 \text{ m}$):
  $$A_1 = F_1 \cdot h_1 = 150 \cdot 0.3 = 45 \text{ (J)}$$
- Công thu được ở pít-tông lớn:
  $$A_2 = F_2 \cdot h_2 = 4500 \cdot 0.01 = 45 \text{ (J)}$$
- Nhận xét: $A_1 = A_2$. Máy dùng chất lỏng cho ta lợi về lực bao nhiêu lần thì thiệt về đường đi bấy nhiêu lần, không có lợi về công (Định luật bảo toàn công).
[/GIAI]

### Dạng 4: Ống chữ U và Bình thông nhau
**Bài 7 (Nâng cao):** Một ống chữ U chứa thủy ngân (khối lượng riêng $\rho_1 = 13600 \text{ kg/m}^3$). Đổ thêm vào nhánh trái một cột nước cao $h_2 = 27.2 \text{ cm}$ (khối lượng riêng của nước $\rho_2 = 1000 \text{ kg/m}^3$). Tính độ chênh lệch mặt thoáng của thủy ngân ở hai nhánh.
[GIAI]
**Lời giải chi tiết:**
- Chọn mặt phẳng ngang đi qua mặt phân cách giữa nước và thủy ngân ở nhánh trái làm chuẩn.
- Gọi $h_1$ là độ cao của cột thủy ngân ở nhánh phải so với mặt phẳng chuẩn này. (Đây cũng chính là chênh lệch mực thủy ngân ở 2 nhánh).
- Áp suất tại 2 điểm trên mặt phẳng chuẩn là bằng nhau ($p_A = p_B$):
  $$p_0 + \rho_2 \cdot g \cdot h_2 = p_0 + \rho_1 \cdot g \cdot h_1$$
- Rút gọn $p_0$ và $g$:
  $$\rho_2 h_2 = \rho_1 h_1$$
- Tính độ chênh lệch $h_1$:
  $$h_1 = h_2 \cdot \frac{\rho_2}{\rho_1} = 27.2 \cdot \frac{1000}{13600} = 2 \text{ (cm)}$$
[/GIAI]

**Bài 8 (Nâng cao):** Một ống chữ U có hai nhánh giống nhau. Đổ nước vào ống sao cho mực nước bằng nửa chiều cao của ống. Sau đó đổ dầu (có khối lượng riêng $\rho_d = 800 \text{ kg/m}^3$) vào nhánh phải cho đến khi đầy miệng ống. Biết chiều cao tổng cộng của ống là $H = 40 \text{ cm}$. Khối lượng riêng của nước là $1000 \text{ kg/m}^3$. Chiều cao cột dầu đã rót vào là bao nhiêu?
[GIAI]
**Lời giải chi tiết:**
- Gọi $h$ là chiều cao cột dầu rót vào nhánh phải.
- Khi rót dầu vào, mực nước ở nhánh phải tụt xuống một đoạn $x$, mực nước nhánh trái dâng lên một đoạn $x$ tương ứng (do tiết diện 2 nhánh bằng nhau).
- Mặt phân cách nước - dầu ở nhánh phải tụt xuống so với ban đầu đoạn $x$.
- Chênh lệch mực nước giữa 2 nhánh bây giờ là $2x$.
- Áp dụng nguyên lí bình thông nhau tại mặt phân cách: 
  $$\rho_n \cdot g \cdot (2x) = \rho_d \cdot g \cdot h \Rightarrow 2x = h \cdot \frac{\rho_d}{\rho_n} = h \cdot \frac{800}{1000} = 0.8h \quad (1)$$
- Mặt khác, nhánh phải đầy dầu, độ sâu từ đỉnh ống đến mặt phân cách chính là chiều cao cột dầu $h$. 
  Mực nước cũ cách miệng ống là $H/2 = 20 \text{ cm}$. Mặt phân cách mới thấp hơn mặt nước cũ là $x$.
  Nên chiều cao cột dầu là: $h = 20 + x \quad (2)$.
- Từ (1): $x = 0.4h$. Thế vào (2):
  $$h = 20 + 0.4h \Rightarrow 0.6h = 20 \Rightarrow h = \frac{20}{0.6} = \frac{100}{3} \approx 33.33 \text{ (cm)}$$
- Vậy đã rót vào một cột dầu cao $33.33 \text{ cm}$.
[/GIAI]

### Trắc nghiệm vận dụng
[QUIZ]
Câu 9: Áp suất của chất lỏng tại một điểm tĩnh trong bình hở có tính chất nào sau đây?
[A] Tỉ lệ thuận với diện tích mặt thoáng của bình.
[*B] Tăng dần theo độ sâu tính từ mặt thoáng.
[C] Phụ thuộc vào hình dạng của bình chứa.
[D] Tỉ lệ nghịch với khối lượng riêng của chất lỏng.
[/QUIZ]

[QUIZ]
Câu 10: Theo nguyên lí Pascal, trong máy nén thủy lực, nếu ta muốn tăng lực nâng ở pít-tông lớn lên 2 lần (lực nén ở pít-tông nhỏ không đổi) thì ta cần:
[A] Tăng diện tích pít-tông nhỏ lên 2 lần.
[*B] Tăng diện tích pít-tông lớn lên 2 lần.
[C] Giảm diện tích pít-tông lớn đi 2 lần.
[D] Tăng lực tác dụng ở pít-tông nhỏ lên 4 lần.
[/QUIZ]
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DB_PHY_10_CH7;
}