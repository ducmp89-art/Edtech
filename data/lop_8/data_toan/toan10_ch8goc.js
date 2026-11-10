/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương VIII: Đại số tổ hợp (Giải chi tiết 100%)
   ========================================================================== */

const DATA_TOAN10_CH8 = {
    "MATH10-CH8-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương VIII: Đại số tổ hợp",
        title: "Bài 1: Quy tắc đếm, Hoán vị, Chỉnh hợp & Tổ hợp",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương VIII", "Bài 1"],
        theory: `
### 1. Quy tắc đếm Cơ bản
📌 **Quy tắc cộng (Hành động có nhiều phương án ĐỘC LẬP):**
- Nếu một công việc có thể thực hiện theo $k$ phương án khác nhau, phương án 1 có $n_1$ cách, phương án 2 có $n_2$ cách... thì tổng số cách là $n_1 + n_2 + ... + n_k$.

📌 **Quy tắc nhân (Hành động có nhiều CÔNG ĐOẠN liên tiếp):**
- Nếu một công việc phải trải qua $k$ công đoạn liên tiếp, công đoạn 1 có $n_1$ cách, công đoạn 2 có $n_2$ cách... thì tổng số cách là $n_1 \times n_2 \times ... \times n_k$.

---

### 2. Hoán vị, Chỉnh hợp, Tổ hợp
📌 **Hoán vị ($P_n$):** Sắp xếp $n$ phần tử vào $n$ vị trí.
- $P_n = n! = n(n-1)(n-2)...1$

📌 **Chỉnh hợp ($A_n^k$):** Chọn $k$ phần tử từ $n$ phần tử và **CÓ SẮP XẾP** (phân công chức vụ, xếp hàng).
- $A_n^k = \frac{n!}{(n-k)!}$

📌 **Tổ hợp ($C_n^k$):** Chọn $k$ phần tử từ $n$ phần tử và **KHÔNG SẮP XẾP** (chọn một nhóm, bốc bi ngẫu nhiên).
- $C_n^k = \frac{n!}{k!(n-k)!}$

---

### 3. Kỹ thuật Đếm Nâng cao (Dành cho Vận dụng cao)
📌 **1. Phương pháp Chèn khe (Slotting Method):**
- Dùng để giải bài toán: "Xếp các phần tử sao cho không có 2 phần tử nào (của một nhóm) đứng cạnh nhau".
- **Bước 1:** Xếp nhóm không bị giới hạn trước.
- **Bước 2:** Các phần tử vừa xếp sẽ tạo ra các "khe hở" (ở giữa và hai đầu). Chọn các khe hở này để xếp nhóm bị giới hạn vào.

📌 **2. Bổ đề Chia kẹo Euler (Vách ngăn):**
- Bài toán: Có $n$ viên kẹo giống nhau, chia cho $k$ đứa trẻ sao cho mỗi đứa có **ít nhất 1 viên**.
- Công thức: $C_{n-1}^{k-1}$ cách. (Tưởng tượng đặt $k-1$ vách ngăn vào $n-1$ khoảng trống giữa $n$ viên kẹo).
        `,
        tips: `
- 💡 **Thần chú phân biệt A và C:** Đọc đề lên thấy có hành động "xếp hàng", "phân công chức vụ", "làm số tự nhiên" $\Rightarrow$ Dùng $A$ (Chỉnh hợp). Nếu chỉ "chọn ra đi lao động", "chọn ra một tập con", "bốc bi" $\Rightarrow$ Dùng $C$ (Tổ hợp).
- 💡 **Xử lý số 0 khi lập số tự nhiên:** Số tự nhiên $\overline{a b c d...}$ thì **bắt buộc $a \neq 0$**. Luôn phải trừ đi trường hợp $a=0$ hoặc chọn $a$ đầu tiên.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Một nhà hàng có 5 món mặn, 3 món canh và 4 loại nước uống. Một khách hàng muốn chọn một suất ăn gồm đúng 1 món mặn, 1 món canh và 1 loại nước uống. Hỏi có bao nhiêu cách chọn?
* **Lời giải:**
  - Việc chọn suất ăn là một hành động gồm 3 công đoạn liên tiếp:
    - Công đoạn 1: Chọn món mặn (có 5 cách).
    - Công đoạn 2: Chọn món canh (có 3 cách).
    - Công đoạn 3: Chọn nước uống (có 4 cách).
  - Áp dụng quy tắc nhân, tổng số cách chọn là: $5 \times 3 \times 4 = 60$ (cách).

**Bài 2 (Cơ bản):** Một lớp học có 15 học sinh nam và 20 học sinh nữ.
a) Có bao nhiêu cách chọn ra 3 học sinh đi trực nhật?
b) Có bao nhiêu cách chọn ra 3 học sinh để làm Lớp trưởng, Lớp phó và Bí thư?
* **Lời giải:**
  - Tổng số học sinh của lớp là $15 + 20 = 35$ học sinh.
  - a) Chọn 3 học sinh đi trực nhật (không phân biệt thứ tự/chức vụ): Dùng Tổ hợp.
    Số cách chọn là $C_{35}^3 = 6545$ (cách).
  - b) Chọn 3 học sinh để phân 3 chức vụ khác nhau (có thứ tự): Dùng Chỉnh hợp.
    Số cách chọn là $A_{35}^3 = 39270$ (cách).

**Bài 3 (Vận dụng):** Từ các chữ số $0, 1, 2, 3, 4, 5$ có thể lập được bao nhiêu số tự nhiên chẵn có 4 chữ số đôi một khác nhau?
* **Lời giải:**
  - Gọi số cần tìm có dạng $\overline{abcd}$ ($a \neq 0, a, b, c, d$ phân biệt).
  - Vì số là số chẵn nên $d \in \{0, 2, 4\}$. Ta chia làm 2 trường hợp:
  - **TH1: $d = 0$** (Tận cùng là số 0).
    - $d$ có 1 cách chọn.
    - Chọn 3 chữ số còn lại xếp vào $a, b, c$ từ 5 chữ số $\{1, 2, 3, 4, 5\}$: Có $A_5^3 = 60$ cách.
    $\Rightarrow$ TH1 có $1 \times 60 = 60$ (số).
  - **TH2: $d \in \{2, 4\}$**
    - $d$ có 2 cách chọn.
    - Chọn $a \neq 0$ và $a \neq d$: Tập số còn 4 chữ số, nên $a$ có 4 cách chọn.
    - Chọn $b, c$ từ 4 chữ số còn lại: $A_4^2 = 12$ cách.
    $\Rightarrow$ TH2 có $2 \times 4 \times 12 = 96$ (số).
  - Kết luận: Có tổng cộng $60 + 96 = 156$ số tự nhiên chẵn thỏa mãn.

**Bài 4 (Vận dụng cao - Phương pháp chèn khe):** Có 5 học sinh nam và 3 học sinh nữ. Có bao nhiêu cách xếp 8 học sinh này thành một hàng ngang sao cho không có 2 học sinh nữ nào đứng cạnh nhau?
* **Lời giải:**
  - **Bước 1:** Xếp 5 học sinh nam thành một hàng ngang. Số cách xếp là $P_5 = 5! = 120$ (cách).
  - **Bước 2:** 5 học sinh nam vừa được xếp sẽ tạo ra 6 "khe hở" (gồm 4 khe ở giữa các bạn nam và 2 khe ở hai đầu hàng).
  - **Bước 3:** Để các bạn nữ không đứng cạnh nhau, ta phải xếp 3 bạn nữ vào 3 khe hở khác nhau được chọn từ 6 khe hở trên. Số cách chọn và xếp là $A_6^3 = 120$ (cách).
  - Kết luận: Áp dụng quy tắc nhân, số cách xếp thỏa mãn là $120 \times 120 = 14400$ (cách).

**Bài 5 (Nâng cao - Chia kẹo Euler):** Cô giáo có 10 viên kẹo giống hệt nhau muốn chia cho 3 em học sinh. Hỏi có bao nhiêu cách chia sao cho mỗi em nhận được ít nhất 1 viên kẹo?
* **Lời giải:**
  - Bài toán tương đương với việc tìm số nghiệm nguyên dương của phương trình: $x_1 + x_2 + x_3 = 10$ ($x_i \ge 1, i = 1, 2, 3$).
  - Tưởng tượng ta đặt 10 viên kẹo thành một hàng ngang. Giữa 10 viên kẹo có $10 - 1 = 9$ khoảng trống (khe).
  - Để chia kẹo thành 3 phần, ta cần dùng 2 "vách ngăn" đặt vào 2 khoảng trống bất kỳ trong 9 khoảng trống đó.
  - Số cách đặt vách ngăn chính là số cách chọn 2 vị trí từ 9 vị trí: $C_9^2$.
  - Tính toán: $C_9^2 = \frac{9 \times 8}{2} = 36$.
  - Vậy có 36 cách chia kẹo.
        `
    },

    "MATH10-CH8-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương VIII: Đại số tổ hợp",
        title: "Bài 2: Nhị thức Newton",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương VIII", "Bài 2"],
        theory: `
### 1. Khai triển Nhị thức Newton cơ bản ($n=4, 5$)
📌 **Công thức tổng quát:**
- $(a+b)^n = C_n^0 a^n b^0 + C_n^1 a^{n-1} b^1 + ... + C_n^k a^{n-k} b^k + ... + C_n^n a^0 b^n$.

📌 **Trường hợp cụ thể SGK (n=4 và n=5):**
- $(a+b)^4 = a^4 + 4a^3b + 6a^2b^2 + 4ab^3 + b^4$.
- $(a+b)^5 = a^5 + 5a^4b + 10a^3b^2 + 10a^2b^3 + 5ab^4 + b^5$.
- *(Hệ số được lấy từ Tam giác Pascal).*

📌 **Số hạng tổng quát (RẤT QUAN TRỌNG):**
- Số hạng thứ $k+1$ trong khai triển là: **$T_{k+1} = C_n^k a^{n-k} b^k$** ($0 \le k \le n$).

---

### 2. Chuyên đề Nâng cao: Ứng dụng Nhị thức Newton tính tổng Tổ hợp
- Xét khai triển $(1 + x)^n = C_n^0 + C_n^1 x + C_n^2 x^2 + ... + C_n^n x^n$.
- Thay $x = 1$, ta có tổng toàn bộ các hệ số:
  $$C_n^0 + C_n^1 + C_n^2 + ... + C_n^n = 2^n$$
- Thay $x = -1$, ta có tổng đan dấu bằng 0:
  $$C_n^0 - C_n^1 + C_n^2 - ... + (-1)^n C_n^n = 0$$
        `,
        tips: `
- 💡 **Bẫy dấu trừ:** Khi khai triển $(a - b)^n$, bản chất là $(a + (-b))^n$. Do đó, số hạng thứ hai $b$ luôn phải đi kèm dấu âm, biểu thức sẽ có dấu $+ - + -$ đan xen nhau.
- 💡 **Mẹo làm bài tìm hệ số:** Luôn viết công thức $T_{k+1}$ ra, sau đó tách toàn bộ "Phần số" ra phía trước, "Phần biến x" gom ra phía sau rồi cộng trừ số mũ.
        `,
        practice: `
### Bài tập Vận dụng (Có lời giải chi tiết)

**Bài 1 (Cơ bản):** Khai triển biểu thức sau: $(2x - 1)^4$.
* **Lời giải:**
  - Áp dụng công thức với $n=4, a = 2x, b = -1$.
  - $(2x - 1)^4 = C_4^0 (2x)^4 (-1)^0 + C_4^1 (2x)^3 (-1)^1 + C_4^2 (2x)^2 (-1)^2 + C_4^3 (2x)^1 (-1)^3 + C_4^4 (2x)^0 (-1)^4$
  - $= 1 \cdot 16x^4 \cdot 1 + 4 \cdot 8x^3 \cdot (-1) + 6 \cdot 4x^2 \cdot 1 + 4 \cdot 2x \cdot (-1) + 1 \cdot 1 \cdot 1$
  - $= 16x^4 - 32x^3 + 24x^2 - 8x + 1$.

**Bài 2 (Cơ bản):** Tìm hệ số của số hạng chứa $x^3$ trong khai triển của biểu thức $(x + 2)^5$.
* **Lời giải:**
  - Số hạng tổng quát thứ $k+1$ là: $T_{k+1} = C_5^k x^{5-k} 2^k = C_5^k \cdot 2^k \cdot x^{5-k}$.
  - Đề bài yêu cầu tìm hệ số của $x^3$, suy ra số mũ của $x$ phải bằng 3:
    $5 - k = 3 \Leftrightarrow k = 2$.
  - Thay $k=2$ vào phần hệ số: $C_5^2 \cdot 2^2 = 10 \cdot 4 = 40$.
  - Vậy hệ số cần tìm là 40.

**Bài 3 (Vận dụng):** Tìm số hạng không chứa $x$ trong khai triển của biểu thức $\left(x - \frac{2}{x}\right)^4$.
* **Lời giải:**
  - Số hạng tổng quát: $T_{k+1} = C_4^k x^{4-k} \left(-\frac{2}{x}\right)^k$.
  - $T_{k+1} = C_4^k \cdot x^{4-k} \cdot (-2)^k \cdot x^{-k} = C_4^k \cdot (-2)^k \cdot x^{4-2k}$.
  - Yêu cầu số hạng không chứa $x$ (tức là $x^0$):
    $4 - 2k = 0 \Leftrightarrow 2k = 4 \Leftrightarrow k = 2$.
  - Thay $k=2$ vào phần hệ số để tìm số hạng đó:
    $T_3 = C_4^2 \cdot (-2)^2 = 6 \cdot 4 = 24$.
  - Vậy số hạng không chứa $x$ là 24.

**Bài 4 (Vận dụng cao):** Tính giá trị của biểu thức tổng sau: 
  $$S = C_5^0 - 3C_5^1 + 3^2 C_5^2 - 3^3 C_5^3 + 3^4 C_5^4 - 3^5 C_5^5$$
* **Lời giải:**
  - Nhận xét cấu trúc của $S$ hoàn toàn khớp với khai triển Nhị thức Newton:
    $(a+b)^n = C_n^0 a^n + C_n^1 a^{n-1} b + ... + C_n^n b^n$.
  - Ở đây, ta thấy $n=5$, $b$ đang tăng dần lũy thừa là số $-3$. $a$ có lũy thừa luôn bằng 1, tức là $a=1$.
  - Thay $n=5, a=1, b=-3$ vào công thức Nhị thức Newton, ta có:
    $(1 + (-3))^5 = C_5^0 1^5 + C_5^1 1^4 (-3)^1 + C_5^2 1^3 (-3)^2 + ... + C_5^5 (-3)^5$.
  - Biểu thức này chính là $S$.
  - Vậy $S = (1 - 3)^5 = (-2)^5 = -32$.

**Bài 5 (Nâng cao):** Cho đẳng thức chứng minh được: $k \cdot C_n^k = n \cdot C_{n-1}^{k-1}$. Áp dụng đẳng thức đó, hãy tính tổng:
  $$M = C_5^1 + 2C_5^2 + 3C_5^3 + 4C_5^4 + 5C_5^5$$
* **Lời giải:**
  - Áp dụng đẳng thức đã cho với $n=5$:
    $1 \cdot C_5^1 = 5 \cdot C_4^0$
    $2 \cdot C_5^2 = 5 \cdot C_4^1$
    $3 \cdot C_5^3 = 5 \cdot C_4^2$
    $4 \cdot C_5^4 = 5 \cdot C_4^3$
    $5 \cdot C_5^5 = 5 \cdot C_4^4$
  - Cộng vế theo vế các đẳng thức trên, ta được:
    $M = 5(C_4^0 + C_4^1 + C_4^2 + C_4^3 + C_4^4)$.
  - Theo tính chất tổng các hệ số nhị thức, ta có $C_n^0 + C_n^1 + ... + C_n^n = 2^n$.
  - Do đó: $C_4^0 + C_4^1 + C_4^2 + C_4^3 + C_4^4 = 2^4 = 16$.
  - Kết luận: $M = 5 \times 16 = 80$.
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH8;
}
