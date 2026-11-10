/* ==========================================================================
   S-NOTE 2026 - KHO DỮ LIỆU TOÁN 10 MASTER CHUYÊN SÂU & CHI TIẾT
   Bộ sách: Kết nối tri thức với cuộc sống
   Chương II: Bất phương trình và hệ BPT bậc nhất hai ẩn (Đã bổ sung lý thuyết và bài tập)
   ========================================================================== */

const DATA_TOAN10_CH2 = {
    "MATH10-CH2-01": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương II: Bất phương trình và hệ BPT bậc nhất hai ẩn",
        title: "Bài 1: Bất phương trình bậc nhất hai ẩn",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương II", "Bài 1"],
        theory: `
### 1. Biểu diễn Miền nghiệm trên Mặt phẳng Tọa độ
📌 **Định nghĩa & Ý nghĩa Hình học:**
- Bất phương trình bậc nhất hai ẩn $x, y$ có dạng tổng quát là $ax + by \le c$ (hoặc $<, >, \ge$), trong đó $a$ và $b$ không đồng thời bằng 0.
- Về mặt hình học, mỗi đường thẳng $\Delta: ax + by + c = 0$ chia mặt phẳng tọa độ $Oxy$ thành hai nửa mặt phẳng bờ $\Delta$. Một nửa là miền nghiệm của $ax + by + c > 0$, nửa kia là miền nghiệm của $ax + by + c < 0$.

📌 **Quy trình chuẩn biểu diễn miền nghiệm:**
- **Bước 1:** Vẽ đường thẳng $\Delta: ax + by + c = 0$ trên mặt phẳng tọa độ.
- **Bước 2:** Chọn một điểm thử $M(x_0; y_0)$ không nằm trên $\Delta$. (Thường chọn gốc $O(0;0)$ nếu $c \neq 0$).
- **Bước 3:** Thay tọa độ $M$ vào BPT. 
  - Nếu kết quả đúng, nửa mặt phẳng bờ $\Delta$ chứa điểm $M$ là miền nghiệm.
  - Nếu kết quả sai, nửa mặt phẳng bờ $\Delta$ **không** chứa điểm $M$ là miền nghiệm.

---

### 2. Bổ sung Lý thuyết & Chú ý chuyên sâu (Dành cho Giáo viên & Học sinh Giỏi)
📌 **Biểu diễn biên (Bờ của miền nghiệm):**
- BPT chứa dấu $\le$ hoặc $\ge$: Miền nghiệm lấy cả đường biên (Vẽ nét liền).
- BPT chứa dấu $<$ hoặc $>$: Miền nghiệm KHÔNG lấy đường biên (Vẽ nét đứt). Học sinh rất hay bị trừ điểm trình bày ở lỗi này.

📌 **BPT chứa tham số $m$:**
- Dạng toán tìm $m$ để một điểm $A(x_A; y_A)$ thuộc miền nghiệm của BPT: Chỉ cần thay tọa độ $(x_A; y_A)$ vào BPT, ta sẽ thu được một BPT mới với ẩn là $m$, từ đó giải ra $m$.
        `,
        tips: `
- 💡 **Mẹo chọn điểm thử nhanh:** Luôn ưu tiên chọn $O(0;0)$. Nếu đường thẳng đi qua $O(0;0)$ (tức $c = 0$), hãy chọn các điểm nằm trên trục tọa độ như $M(1;0)$ hoặc $N(0;1)$ để thay số nhanh nhất.
- 💡 **Loại trừ nhanh trắc nghiệm:** Nếu $a>0$, miền nghiệm của $ax+by+c > 0$ thường có xu hướng nằm về phía bên phải của đường thẳng (khi nhìn dọc theo trục $Ox$).
        `,
        practice: `
### Bài toán Mẫu Cốt lõi:
Biểu diễn miền nghiệm của bất phương trình $2x - 3y + 6 \le 0$.

* **Lời giải chi tiết:**
  - **Bước 1:** Vẽ đường thẳng $\Delta: 2x - 3y + 6 = 0$. 
    Cho $x = 0 \Rightarrow y = 2 \Rightarrow A(0; 2)$. 
    Cho $y = 0 \Rightarrow x = -3 \Rightarrow B(-3; 0)$. 
    Vẽ đường thẳng đi qua $A, B$ bằng **nét liền** (do có dấu $\le$).
  - **Bước 2:** Chọn điểm thử $O(0;0) \notin \Delta$.
  - **Bước 3:** Thay $x=0, y=0$ vào vế trái BPT: $2(0) - 3(0) + 6 = 6$.
    Vì $6 \le 0$ là mệnh đề SAI, nên miền nghiệm là nửa mặt phẳng bờ $\Delta$ **không chứa** gốc tọa độ $O$ (kể cả bờ $\Delta$). Ta gạch bỏ phần chứa $O$.
    
---

### Bài tập Vận dụng (5 bài)
1. **Cơ bản:** Điểm $M(1; -2)$ có thuộc miền nghiệm của bất phương trình $3x - y - 4 > 0$ không? Giải thích.
2. **Cơ bản:** Biểu diễn miền nghiệm của các bất phương trình sau trên mặt phẳng tọa độ: 
   a) $x + 2y < 4$
   b) $y \ge -2$
3. **Vận dụng:** Tìm tất cả các giá trị của tham số $m$ để điểm $A(-1; 3)$ thuộc miền nghiệm của bất phương trình: $(m+1)x - 2y + m^2 > 0$.
4. **Vận dụng cao:** Cho hai bất phương trình $x + y - 2 \ge 0$ và $2x - y + 3 \le 0$. Hãy tìm một điểm $M$ có tọa độ nguyên thuộc miền nghiệm chung của cả hai bất phương trình trên.
5. **Nâng cao:** Biểu diễn miền nghiệm của bất phương trình $|x| + |y| \le 2$. (Gợi ý: Phá dấu GTTĐ để chia thành 4 góc phần tư, kết quả miền nghiệm là một hình vuông).
        `
    },

    "MATH10-CH2-02": {
        grade: "10", subject: "MATH", subjectName: "Toán 10",
        chapter: "Chương II: Bất phương trình và hệ BPT bậc nhất hai ẩn",
        title: "Bài 2: Hệ BPT bậc nhất hai ẩn & Quy hoạch tuyến tính",
        breadcrumbs: ["Lớp 10", "Toán 10", "Chương II", "Bài 2"],
        theory: `
### 1. Hệ Bất phương trình bậc nhất hai ẩn
📌 **Định nghĩa & Miền nghiệm:**
- Miền nghiệm của một hệ BPT là **giao** của các miền nghiệm của từng BPT trong hệ.
- Trong mặt phẳng tọa độ, miền nghiệm thường là một đa giác (lồi) bị giới hạn, hoặc một miền không bị chặn.

---

### 2. Định lý Cực trị & Quy hoạch Tuyến tính
📌 **Định lý Đỉnh Đa giác (Minkowski - Weyl):**
- Giá trị lớn nhất (Max) hoặc nhỏ nhất (Min) của biểu thức mục tiêu (hàm mục tiêu) $F(x, y) = ax + by$ trên một miền đa giác lồi đóng $D$ **luôn đạt được tại một trong các đỉnh** của đa giác đó.

📌 **Quy trình giải bài toán Tối ưu hóa (Quy hoạch tuyến tính):**
- **Bước 1:** Gọi $x, y$ là các đại lượng cần tìm (đặt điều kiện $x \ge 0, y \ge 0$ nếu là bài toán thực tế).
- **Bước 2:** Lập hệ BPT ràng buộc từ các giả thiết (vốn, nguyên liệu, thời gian...).
- **Bước 3:** Thiết lập hàm mục tiêu $F(x,y)$ (lợi nhuận, chi phí...).
- **Bước 4:** Vẽ miền nghiệm của hệ BPT, xác định tọa độ các đỉnh của đa giác miền nghiệm.
- **Bước 5:** Tính giá trị của $F(x,y)$ tại tất cả các đỉnh. Kết luận Max/Min.

---

### 3. Bổ sung Lý thuyết & Chú ý chuyên sâu
📌 **Chú ý miền không bị chặn (Vô hạn):**
- Nếu đa giác miền nghiệm không bị vây kín (kéo dài tới vô cực), biểu thức $F(x,y)$ có thể tiến tới $\pm\infty$. Trong trường hợp này, bài toán có thể chỉ có Min mà không có Max (hoặc ngược lại).
📌 **Xác định tọa độ đỉnh nhanh:**
- Tọa độ đỉnh đa giác thực chất là nghiệm của hệ phương trình bậc nhất hai ẩn tạo bởi 2 đường thẳng biên cắt nhau. Dùng máy tính bấm hệ (Mode 5 1) để tìm nhanh mà không cần đo đạc trên hình.
        `,
        tips: `
- 💡 **Mẹo giải trắc nghiệm:** Không cần vẽ miền nghiệm quá nắn nót. Chỉ cần phác thảo nhanh để biết được đa giác có những đỉnh nào (là giao của những đường thẳng nào). Sau đó bấm máy tính giải hệ tìm tọa độ đỉnh và thử thẳng vào hàm $F(x,y)$.
        `,
        practice: `
### Bài toán Mẫu VDC (Quy hoạch tuyến tính): 
Tìm Min của hàm mục tiêu $F(x, y) = 3x - 2y$ trên miền $D$ được cho bởi hệ BPT:
$$\begin{cases} x + y \le 5 \\ x - y \ge -1 \\ x \ge 1 \\ y \ge 0 \end{cases}$$

* **Lời giải chi tiết:**
  - **Bước 1:** Vẽ 4 đường thẳng biên: $d_1: x+y=5$, $d_2: x-y=-1$, $d_3: x=1$, $d_4: y=0$. Xác định phần giao của các nửa mặt phẳng.
  - **Bước 2:** Miền nghiệm $D$ là một tứ giác có 4 đỉnh. Ta tìm tọa độ các đỉnh bằng cách giải các hệ phương trình giao điểm:
    - Đỉnh $A = d_3 \cap d_4 \Rightarrow A(1; 0)$.
    - Đỉnh $B = d_1 \cap d_4 \Rightarrow B(5; 0)$.
    - Đỉnh $C = d_1 \cap d_2 \Rightarrow \begin{cases} x+y=5 \\ x-y=-1 \end{cases} \Rightarrow C(2; 3)$.
    - Đỉnh $D = d_3 \cap d_2 \Rightarrow \begin{cases} x=1 \\ x-y=-1 \end{cases} \Rightarrow D(1; 2)$.
  - **Bước 3:** Tính giá trị $F(x,y)$ tại các đỉnh:
    - $F(A) = 3(1) - 2(0) = 3$
    - $F(B) = 3(5) - 2(0) = 15$
    - $F(C) = 3(2) - 2(3) = 0$
    - $F(D) = 3(1) - 2(2) = -1$
  - **Kết luận:** $\min F = -1$ đạt được tại $D(1; 2)$.

---

### Bài tập Vận dụng (5 bài)
1. **Cơ bản:** Biểu diễn miền nghiệm của hệ bất phương trình: $\begin{cases} 2x + y \le 4 \\ x > 0 \\ y \ge 0 \end{cases}$. Tìm tọa độ các đỉnh của miền nghiệm.
2. **Cơ bản:** Cho miền $D$ là tam giác với các đỉnh $M(0; 0), N(0; 4), P(3; 0)$. Tìm giá trị lớn nhất của $F(x, y) = 2x + 5y$ trên $D$.
3. **Vận dụng:** Một gia đình cần ít nhất 900g protein và 400g lipit trong khẩu phần ăn mỗi ngày. Biết thịt bò chứa 80% protein, 20% lipit; thịt lợn chứa 60% protein, 40% lipit. Gọi $x, y$ lần lượt là lượng thịt bò và thịt lợn cần mua. Hãy lập hệ BPT thể hiện các điều kiện bài toán.
4. **Vận dụng cao:** Tiếp nối bài 3. Biết giá thịt bò là 250 nghìn đồng/kg, thịt lợn là 160 nghìn đồng/kg. Gia đình nên mua bao nhiêu kg mỗi loại để chi phí là nhỏ nhất mà vẫn đảm bảo dinh dưỡng?
5. **Nâng cao:** Tìm giá trị nhỏ nhất của $F(x,y) = x + 2y$ trên miền nghiệm của hệ $\begin{cases} x - y \le 2 \\ 2x + y \ge 4 \\ x \ge 0 \end{cases}$. Tại sao bài toán này không có Max?
        `
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = DATA_TOAN10_CH2;
}
