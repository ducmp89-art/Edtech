/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương IX: Tính xác suất theo định nghĩa cổ điển
   (ĐÃ BƠM LÝ THUYẾT MASTER & NÂNG CẤP 10 BÀI TẬP MẪU/BÀI HỌC)
   ========================================================================== */

const DATA_TOAN10_CH9 = {
    "MATH10-CH9-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương IX: Xác suất",
        title: "Bài 1: Phép thử ngẫu nhiên, Biến cố & Xác suất cổ điển",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương IX", "Bài 1"],
        theory: `
### 1. Phép thử ngẫu nhiên và Không gian mẫu
- **Phép thử ngẫu nhiên:** Là một phép thử mà ta không đoán trước được kết quả của nó, nhưng biết được tập hợp tất cả các kết quả có thể xảy ra.
- **Không gian mẫu ($\Omega$):** Là tập hợp tất cả các kết quả có thể xảy ra của phép thử.
  *Ví dụ:* Gieo một con xúc xắc, $\Omega = \{1, 2, 3, 4, 5, 6\}$. Ký hiệu $n(\Omega)$ là số phần tử của không gian mẫu.

### 2. Biến cố
- **Biến cố ($A$):** Là một tập con của không gian mẫu $\Omega$. Nói cách khác, biến cố là một hiện tượng (sự kiện) liên quan đến phép thử, xảy ra hay không phụ thuộc vào kết quả của phép thử.
- Số phần tử của biến cố $A$ ký hiệu là $n(A)$ (số kết quả thuận lợi cho $A$).
- Biến cố chắc chắn: Chính là $\Omega$. Biến cố không thể: Ký hiệu là $\emptyset$.

### 3. Định nghĩa cổ điển của Xác suất
- Nếu phép thử có các kết quả đồng khả năng (khả năng xảy ra như nhau), thì xác suất của biến cố $A$ được tính bằng:
  **$$P(A) = \frac{n(A)}{n(\Omega)}$$**
- Tính chất:
  - $0 \le P(A) \le 1$.
  - $P(\Omega) = 1$ (Xác suất của biến cố chắc chắn).
  - $P(\emptyset) = 0$ (Xác suất của biến cố không thể).

---

### 4. 💎 Chuyên đề Master: Không gian mẫu Đa chiều & Bốc mẫu (VDC)
📌 **Phân biệt mô hình chọn mẫu (Lấy bi, rút bài):**
- **Lấy đồng thời $k$ phần tử từ $n$ phần tử:** Không có thứ tự $\rightarrow$ Dùng Tổ hợp $C_n^k$.
- **Lấy lần lượt từng phần tử (không hoàn lại):** Có thứ tự $\rightarrow$ Dùng Chỉnh hợp $A_n^k$.
- **Lấy lần lượt từng phần tử (có hoàn lại):** Chọn $k$ lần, mỗi lần có $n$ cách $\rightarrow$ Không gian mẫu là $n^k$.

📌 **Xác suất đếm Hình học (Tạo đa giác, tam giác):**
- Không gian mẫu: Số cách chọn 3 đỉnh từ $n$ đỉnh là $C_n^3$.
- Biến cố tam giác vuông: 1 cạnh là đường kính, đỉnh còn lại nằm trên đường tròn.
- Biến cố tam giác cân, đều: Đếm dựa trên tính đối xứng của đa giác đều nội tiếp.
        `,
        tips: `
- 💡 **Mẹo tính xác suất tung đồng xu/xúc xắc:** Tung 1 đồng xu $n$ lần thì $n(\Omega) = 2^n$. Tung 1 xúc xắc $n$ lần thì $n(\Omega) = 6^n$. Tung 2 xúc xắc cùng lúc GIỐNG HỆT việc tung 1 xúc xắc 2 lần.
- ⚠️ **Lỗi chia trường hợp:** Khi đếm $n(A)$, nếu chia thành các trường hợp, học sinh thường mắc lỗi "các trường hợp giao nhau" (bị trùng). Hãy chắc chắn các TH là rời rạc!
- 🚀 **Thủ thuật Master:** Thay vì tính xác suất $A$ trực tiếp quá dài, hãy dùng biến cố đối $\overline{A}$. (Chi tiết sẽ học ở bài sau, nhưng có thể dùng ngay tư duy: Số cách = Tổng số cách - Số cách không thỏa mãn).
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Gieo một con xúc xắc cân đối và đồng chất. Tính xác suất để xuất hiện mặt có số chấm là một số nguyên tố.
* **Lời giải:**
  - Không gian mẫu: $\Omega = \{1, 2, 3, 4, 5, 6\} \Rightarrow n(\Omega) = 6$.
  - Gọi A là biến cố "Xuất hiện mặt có số chấm là số nguyên tố".
  - Các số nguyên tố trong $\Omega$ là 2, 3, 5. $\Rightarrow A = \{2, 3, 5\} \Rightarrow n(A) = 3$.
  - $P(A) = \frac{3}{6} = \frac{1}{2}$.

**Bài 2 (Cơ bản):** Một hộp chứa 4 bi đỏ và 3 bi xanh. Lấy ngẫu nhiên đồng thời 2 viên bi. Tính xác suất để 2 viên bi lấy ra có cùng màu đỏ.
* **Lời giải:**
  - Lấy 2 bi từ 7 bi $\Rightarrow n(\Omega) = C_7^2 = 21$.
  - Gọi B là biến cố "Cả 2 bi đều màu đỏ".
  - Lấy 2 bi đỏ từ 4 bi đỏ $\Rightarrow n(B) = C_4^2 = 6$.
  - $P(B) = \frac{6}{21} = \frac{2}{7}$.

**Bài 3 (Vận dụng):** Gieo 2 con xúc xắc cân đối và đồng chất. Tính xác suất để tổng số chấm trên 2 mặt bằng 8.
* **Lời giải:**
  - $n(\Omega) = 6 \times 6 = 36$.
  - Các kết quả để tổng bằng 8 là: $(2; 6), (3; 5), (4; 4), (5; 3), (6; 2)$.
  - Có 5 kết quả thuận lợi $\Rightarrow n(A) = 5$.
  - $P(A) = \frac{5}{36}$.

**Bài 4 (Vận dụng):** Từ các chữ số $1, 2, 3, 4, 5$, lập các số tự nhiên có 3 chữ số đôi một khác nhau. Chọn ngẫu nhiên 1 số vừa lập, tính xác suất để số đó là số chẵn.
* **Lời giải:**
  - Không gian mẫu (lập số 3 chữ số phân biệt từ 5 số): $n(\Omega) = A_5^3 = 60$.
  - Gọi số chẵn cần lập là $\overline{abc}$. $c \in \{2, 4\} \Rightarrow c$ có 2 cách chọn.
  - Chọn $a, b$ từ 4 chữ số còn lại $\Rightarrow A_4^2 = 12$ cách.
  - Số các số chẵn là: $n(C) = 2 \times 12 = 24$.
  - $P(C) = \frac{24}{60} = \frac{2}{5}$.

**Bài 5 (Vận dụng):** Một lớp có 20 nam và 15 nữ. Chọn ngẫu nhiên 3 học sinh làm ban cán sự. Tính xác suất để trong 3 người được chọn có đúng 1 nữ.
* **Lời giải:**
  - Tổng số HS là 35. $n(\Omega) = C_{35}^3 = 6545$.
  - Biến cố D: "Có đúng 1 nữ" $\Rightarrow$ Cần bốc 1 nữ và 2 nam.
  - $n(D) = C_{15}^1 \times C_{20}^2 = 15 \times 190 = 2850$.
  - $P(D) = \frac{2850}{6545} = \frac{570}{1309}$.

**Bài 6 (Vận dụng cao):** Gieo đồng thời 3 đồng xu cân đối và đồng chất. Tính xác suất để có đúng 2 đồng xu xuất hiện mặt sấp.
* **Lời giải:**
  - Mỗi đồng xu có 2 kết quả (S, N). Gieo 3 đồng xu $\Rightarrow n(\Omega) = 2^3 = 8$.
  - Gọi E là biến cố "Có đúng 2 mặt Sấp". Các kết quả thuận lợi là 1 hoán vị của (S, S, N).
  - $E = \{(S, S, N); (S, N, S); (N, S, S)\}$. $\Rightarrow n(E) = 3$.
  - $P(E) = \frac{3}{8}$.

**Bài 7 (Vận dụng cao):** Có 4 tấm thẻ được đánh số từ 1 đến 4. Rút ngẫu nhiên lần lượt 2 thẻ không hoàn lại. Tính xác suất để tổng hai số ghi trên 2 thẻ là một số chẵn.
* **Lời giải:**
  - Lấy lần lượt 2 thẻ (có thứ tự): $n(\Omega) = A_4^2 = 12$.
  - Tổng 2 số là chẵn khi cả 2 thẻ cùng chẵn (2, 4) hoặc cùng lẻ (1, 3).
  - TH1 (Cùng chẵn): Có $A_2^2 = 2$ cách.
  - TH2 (Cùng lẻ): Có $A_2^2 = 2$ cách.
  - $n(F) = 2 + 2 = 4$.
  - $P(F) = \frac{4}{12} = \frac{1}{3}$.
  - *(Lưu ý: Nếu giải theo cách lấy đồng thời (không thứ tự) thì $n(\Omega)=C_4^2=6, n(F)=C_2^2+C_2^2=2 \Rightarrow P=2/6=1/3$, kết quả không đổi).*

**Bài 8 (Vận dụng cao):** Từ bộ bài Tú lơ khơ 52 lá, rút ngẫu nhiên 3 lá bài. Tính xác suất để 3 lá bài tạo thành 1 bộ ba lá cùng một số hoặc chữ (ví dụ 3 lá 10).
* **Lời giải:**
  - $n(\Omega) = C_{52}^3 = 22100$.
  - Một bộ bài có 13 cấp độ. Để tạo 1 bộ ba lá giống số:
    + Chọn 1 cấp độ trong 13 cấp độ: $C_{13}^1 = 13$ cách.
    + Trong cấp độ đó có 4 lá, lấy ra 3 lá: $C_4^3 = 4$ cách.
  - $n(G) = 13 \times 4 = 52$.
  - $P(G) = \frac{52}{22100} = \frac{1}{425}$.

**Bài 9 (Vận dụng cao):** Một nhóm 10 người gồm 6 nam và 4 nữ ngồi quanh một bàn tròn có 10 ghế. Tính xác suất để không có 2 người nữ nào ngồi cạnh nhau.
* **Lời giải:**
  - Xếp 10 người vào bàn tròn $\Rightarrow n(\Omega) = (10-1)! = 9! = 362880$.
  - Để 4 nữ không ngồi cạnh nhau, ta xếp 6 nam trước (tạo thành một vòng tròn).
  - Số cách xếp 6 nam vào bàn tròn là: $(6-1)! = 5! = 120$.
  - 6 nam tạo ra 6 khe trống (giữa các nam).
  - Chọn 4 khe trống từ 6 khe và xếp 4 nữ vào đó (có thứ tự): $A_6^4 = 360$.
  - Số cách xếp thuận lợi: $n(H) = 120 \times 360 = 43200$.
  - $P(H) = \frac{43200}{362880} = \frac{5}{42}$.

**Bài 10 (Vận dụng cao):** Cho đa giác đều 20 đỉnh nội tiếp đường tròn. Chọn ngẫu nhiên 3 đỉnh của đa giác. Tính xác suất để 3 đỉnh tạo thành một tam giác vuông.
* **Lời giải:**
  - Chọn 3 đỉnh từ 20 đỉnh: $n(\Omega) = C_{20}^3 = 1140$.
  - Tam giác nội tiếp là tam giác vuông $\Leftrightarrow$ có 1 cạnh là đường kính của đường tròn.
  - Đa giác đều 20 đỉnh có $\frac{20}{2} = 10$ đường kính.
  - Để lập tam giác vuông, ta chọn 1 đường kính (có 10 cách) và chọn đỉnh thứ 3 từ 18 đỉnh còn lại (có 18 cách).
  - Số tam giác vuông: $n(K) = 10 \times 18 = 180$.
  - $P(K) = \frac{180}{1140} = \frac{3}{19}$.
        `
    },
    "MATH10-CH9-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương IX: Xác suất",
        title: "Bài 2: Các quy tắc tính xác suất (Cộng, Nhân, Biến cố đối)",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương IX", "Bài 2"],
        theory: `
### 1. Biến cố đối
- **Định nghĩa:** Biến cố $\overline{A}$ là biến cố "Không xảy ra A". $A$ và $\overline{A}$ là hai tập hợp bù nhau trong $\Omega$.
- **Quy tắc:** $P(A) + P(\overline{A}) = 1 \Rightarrow P(A) = 1 - P(\overline{A})$.
- **Dấu hiệu nhận biết:** Bài toán có các cụm từ "Ít nhất một...", "Không quá...", làm trực tiếp mất nhiều thời gian chia trường hợp.

### 2. Biến cố hợp & Quy tắc cộng xác suất
- **Biến cố hợp ($A \cup B$):** Là biến cố "Xảy ra A hoặc xảy ra B" (xảy ra ít nhất một trong hai).
- **Hai biến cố xung khắc:** $A$ và $B$ không bao giờ cùng xảy ra ($A \cap B = \emptyset$).
- **Quy tắc cộng (cho biến cố xung khắc):** 
  $$P(A \cup B) = P(A) + P(B)$$
- **Quy tắc cộng tổng quát (mở rộng):** Nếu $A, B$ bất kỳ:
  $$P(A \cup B) = P(A) + P(B) - P(AB)$$ (với $AB$ là ký hiệu biến cố giao $A \cap B$).

### 3. Biến cố giao & Quy tắc nhân xác suất
- **Biến cố giao ($AB$ hoặc $A \cap B$):** Là biến cố "Xảy ra cả A và B".
- **Hai biến cố độc lập:** Việc xảy ra hay không xảy ra của $A$ không làm ảnh hưởng tới xác suất xảy ra của $B$.
- **Quy tắc nhân (cho biến cố độc lập):**
  $$P(AB) = P(A) \cdot P(B)$$

---

### 4. 💎 Chuyên đề Master: Sơ đồ cây & Xác suất ứng dụng (VDC)
📌 **Sử dụng Sơ đồ cây cho Phép thử nhiều giai đoạn:**
- Rất hiệu quả cho các bài toán "lấy lần lượt không hoàn lại" hoặc "chuyển bi từ hộp này sang hộp kia".
- **Quy tắc đọc cây:** Đi dọc theo một nhánh thì NHÂN các xác suất. Có nhiều nhánh thỏa mãn thì CỘNG các nhánh lại.

📌 **Xác suất Bắn súng / Mạch điện / Hỏng máy (Ứng dụng thực tế):**
- Bài toán 2 xạ thủ bắn độc lập ($A$ và $B$).
- P(Cả 2 trúng) = $P(AB) = P(A)P(B)$.
- P(Đúng 1 người trúng) = $P(A\overline{B} \cup \overline{A}B) = P(A)P(\overline{B}) + P(\overline{A})P(B)$.
- P(Có ít nhất 1 người trúng) = $1 - P(\overline{A}\overline{B}) = 1 - P(\overline{A})P(\overline{B})$.
        `,
        tips: `
- ⚠️ **Sai lầm thường gặp:** Nhầm lẫn giữa "Xung khắc" và "Độc lập". 
  + Xung khắc: Không thể cùng xảy ra. Liên quan đến phép **Hoặc** (Quy tắc Cộng).
  + Độc lập: Có thể cùng xảy ra, chỉ là không ảnh hưởng nhau. Liên quan đến phép **Và** (Quy tắc Nhân).
- 💡 **Thần chú Dịch nghĩa:** Chữ "VÀ" đổi thành dấu "NHÂN". Chữ "HOẶC" đổi thành dấu "CỘNG" (nếu đã chia các trường hợp rời rạc).
        `,
        practice: `
### Bài tập Mẫu (10 bài từ Cơ bản đến Vận dụng cao)

**Bài 1 (Cơ bản):** Xác suất để học sinh A thi đỗ môn Toán là 0.8. Tính xác suất để học sinh A thi trượt môn Toán.
* **Lời giải:**
  - Gọi E là biến cố "Học sinh A thi đỗ môn Toán". Ta có $P(E) = 0.8$.
  - Việc thi trượt là biến cố đối $\overline{E}$.
  - $P(\overline{E}) = 1 - P(E) = 1 - 0.8 = 0.2$.

**Bài 2 (Cơ bản):** Hai xạ thủ A và B cùng bắn vào bia một cách độc lập. Xác suất bắn trúng của A là 0.7 và của B là 0.6. Tính xác suất để cả 2 người cùng bắn trúng bia.
* **Lời giải:**
  - Gọi A là biến cố "Xạ thủ A bắn trúng", $P(A) = 0.7$.
  - Gọi B là biến cố "Xạ thủ B bắn trúng", $P(B) = 0.6$.
  - Cả 2 cùng bắn trúng là biến cố giao $AB$. Do độc lập nên:
  - $P(AB) = P(A) \cdot P(B) = 0.7 \times 0.6 = 0.42$.

**Bài 3 (Vận dụng):** Từ một hộp chứa 5 bi đỏ và 4 bi xanh, lấy ngẫu nhiên 3 viên bi. Tính xác suất để có ít nhất 1 viên bi đỏ.
* **Lời giải:**
  - Không gian mẫu: $n(\Omega) = C_9^3 = 84$.
  - Gọi $A$ là biến cố "Có ít nhất 1 bi đỏ". Biến cố đối $\overline{A}$ là "Không có bi đỏ nào" (tức là cả 3 bi đều xanh).
  - $n(\overline{A}) = C_4^3 = 4$.
  - $P(\overline{A}) = \frac{4}{84} = \frac{1}{21}$.
  - $P(A) = 1 - P(\overline{A}) = 1 - \frac{1}{21} = \frac{20}{21}$.

**Bài 4 (Vận dụng):** Cho hai biến cố A và B độc lập. Biết $P(A) = 0.4$ và $P(B) = 0.5$. Tính xác suất để có ít nhất 1 trong 2 biến cố xảy ra (tức là $P(A \cup B)$).
* **Lời giải:**
  - Cách 1 (Dùng công thức mở rộng): 
    $P(A \cup B) = P(A) + P(B) - P(AB) = P(A) + P(B) - P(A)P(B)$
    $= 0.4 + 0.5 - (0.4 \times 0.5) = 0.9 - 0.2 = 0.7$.
  - Cách 2 (Dùng biến cố đối): 
    "Ít nhất 1 xảy ra" đối lập với "Không cái nào xảy ra" ($\overline{A}\overline{B}$).
    $P(\overline{A}) = 0.6; P(\overline{B}) = 0.5 \Rightarrow P(\overline{A}\overline{B}) = 0.6 \times 0.5 = 0.3$.
    $P(A \cup B) = 1 - 0.3 = 0.7$.

**Bài 5 (Vận dụng):** Hai máy bơm cùng hoạt động độc lập. Xác suất để máy I hỏng là 0.1, máy II hỏng là 0.15. Tính xác suất để chỉ có đúng 1 máy hỏng.
* **Lời giải:**
  - Gọi $A$ là máy I hỏng ($P(A)=0.1 \Rightarrow P(\overline{A})=0.9$).
  - Gọi $B$ là máy II hỏng ($P(B)=0.15 \Rightarrow P(\overline{B})=0.85$).
  - "Đúng 1 máy hỏng" là $(A \cap \overline{B}) \cup (\overline{A} \cap B)$.
  - $P = P(A)P(\overline{B}) + P(\overline{A})P(B) = (0.1 \times 0.85) + (0.9 \times 0.15)$
  - $P = 0.085 + 0.135 = 0.22$.

**Bài 6 (Vận dụng cao):** Một hộp chứa 3 thẻ xanh và 2 thẻ đỏ. Lấy lần lượt từng thẻ ra ngoài (không hoàn lại) cho đến khi lấy được thẻ đỏ thì dừng. Tính xác suất để việc lấy dừng lại ở lần thứ 3.
* **Lời giải:**
  - Để dừng ở lần thứ 3, thì kết quả phải là: Lần 1 Xanh, Lần 2 Xanh, Lần 3 Đỏ. (X-X-Đ).
  - Tính theo quy tắc nhân xác suất (có phụ thuộc):
    + Xác suất lần 1 Xanh: $\frac{3}{5}$. (Còn 2 X, 2 Đ).
    + Xác suất lần 2 Xanh: $\frac{2}{4} = \frac{1}{2}$. (Còn 1 X, 2 Đ).
    + Xác suất lần 3 Đỏ: $\frac{2}{3}$.
  - Vậy xác suất cần tìm là: $P = \frac{3}{5} \times \frac{1}{2} \times \frac{2}{3} = \frac{6}{30} = \frac{1}{5} = 0.2$.

**Bài 7 (Vận dụng cao):** Có hai hộp. Hộp I có 4 bi trắng và 5 bi đen. Hộp II có 3 bi trắng và 6 bi đen. Lấy ngẫu nhiên mỗi hộp 1 viên bi. Tính xác suất để 2 viên bi lấy ra CÙNG MÀU.
* **Lời giải:**
  - Gọi $T_1, Đ_1$ là lấy được bi Trắng, Đen ở hộp I. ($P(T_1)=\frac{4}{9}, P(Đ_1)=\frac{5}{9}$).
  - Gọi $T_2, Đ_2$ là lấy được bi Trắng, Đen ở hộp II. ($P(T_2)=\frac{3}{9}, P(Đ_2)=\frac{6}{9}$).
  - Biến cố cùng màu $M = (T_1 \cap T_2) \cup (Đ_1 \cap Đ_2)$.
  - $P(M) = P(T_1)P(T_2) + P(Đ_1)P(Đ_2) = \frac{4}{9} \cdot \frac{3}{9} + \frac{5}{9} \cdot \frac{6}{9} = \frac{12}{81} + \frac{30}{81} = \frac{42}{81} = \frac{14}{27}$.

**Bài 8 (Vận dụng cao):** Ba người cùng bắn vào một mục tiêu độc lập với nhau. Xác suất trúng đích của từng người lần lượt là $0.6$; $0.7$; $0.8$. Tính xác suất để mục tiêu bị tiêu diệt, biết rằng mục tiêu bị tiêu diệt khi có ít nhất một người bắn trúng.
* **Lời giải:**
  - Gọi A là biến cố "Mục tiêu bị tiêu diệt (ít nhất 1 trúng)".
  - Biến cố đối $\overline{A}$: "Mục tiêu không bị tiêu diệt (cả 3 đều trượt)".
  - Xác suất trượt của 3 người lần lượt là: $1-0.6=0.4$; $1-0.7=0.3$; $1-0.8=0.2$.
  - $P(\overline{A}) = 0.4 \times 0.3 \times 0.2 = 0.024$.
  - $P(A) = 1 - P(\overline{A}) = 1 - 0.024 = 0.976$.

**Bài 9 (Vận dụng cao):** Một lớp học có 40% học sinh giỏi Toán, 30% học sinh giỏi Lý, 15% học sinh giỏi cả Toán và Lý. Chọn ngẫu nhiên một học sinh. Tính xác suất để học sinh đó KHÔNG giỏi môn nào trong 2 môn trên.
* **Lời giải:**
  - Gọi T là biến cố "Giỏi Toán", L là biến cố "Giỏi Lý".
  - $P(T) = 0.4; P(L) = 0.3; P(TL) = 0.15$.
  - Xác suất học sinh đó giỏi Ít nhất 1 môn là: 
    $P(T \cup L) = P(T) + P(L) - P(TL) = 0.4 + 0.3 - 0.15 = 0.55$.
  - Biến cố "Không giỏi môn nào" là biến cố đối của "Giỏi ít nhất 1 môn".
  - Xác suất cần tìm: $1 - 0.55 = 0.45$ (hay 45%).

**Bài 10 (Nâng cao):** Một hộp A chứa 3 bi đỏ và 2 bi xanh. Lấy ngẫu nhiên 1 viên bi từ hộp A bỏ vào hộp B (hộp B ban đầu rỗng). Sau đó, lại lấy ngẫu nhiên 1 viên bi từ hộp A (đang còn 4 viên) bỏ vào hộp B. Cuối cùng rút ngẫu nhiên 1 viên bi từ hộp B. Tính xác suất viên bi rút ra từ hộp B là bi đỏ.
* **Lời giải:**
  - Bản chất, 2 viên bi chuyển sang hộp B chính là việc lấy ngẫu nhiên 2 viên bi từ hộp A. Việc bốc 1 viên bi từ B lúc sau (trong 2 viên) thực chất mang xác suất bằng với việc bốc 1 viên bi đỏ thẳng từ hộp A từ đầu.
  - Ta có thể chứng minh bằng sơ đồ cây:
    + TH1: Bốc 2 Đỏ từ A sang B (xác suất $\frac{C_3^2}{C_5^2} = \frac{3}{10}$). 
      Hộp B lúc này có 2 Đỏ. Bốc 1 từ B được Đỏ có xác suất $\frac{2}{2} = 1$. $\Rightarrow P_1 = \frac{3}{10} \times 1 = \frac{3}{10}$.
    + TH2: Bốc 1 Đỏ, 1 Xanh từ A sang B (xs $\frac{C_3^1 C_2^1}{10} = \frac{6}{10}$). 
      Hộp B có 1 Đỏ, 1 Xanh. Bốc Đỏ từ B có xác suất $\frac{1}{2}$. $\Rightarrow P_2 = \frac{6}{10} \times \frac{1}{2} = \frac{3}{10}$.
    + TH3: Bốc 2 Xanh từ A sang B (xs $\frac{1}{10}$). Bốc Đỏ từ B có xác suất 0. $\Rightarrow P_3 = 0$.
  - $P = P_1 + P_2 + P_3 = \frac{3}{10} + \frac{3}{10} + 0 = \frac{6}{10} = \frac{3}{5}$.
  - Trùng khớp hoàn toàn với xác suất bốc thẳng 1 viên đỏ từ hộp A ($\frac{3}{5}$).
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH9;
}
