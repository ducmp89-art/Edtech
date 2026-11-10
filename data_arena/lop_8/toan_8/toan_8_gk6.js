window.ARENA_EXAMS = window.ARENA_EXAMS || [];

window.ARENA_EXAMS.push({
    roomId: "CK1_TOAN8_HATMON",
    type: "public",
    grade: "8",
    subject: "Toán",
    roomName: "Đề kiểm tra cuối kỳ I Toán 8 - THCS Hát Môn (2025-2026)", 
    durationMinutes: 90,
    participants: 0,
    questions: [
        {
            id: "Q1",
            type: "single",
            q: "Phân tích đa thức $4x^2-1$ thành nhân tử ta được kết quả là",
            a: ["$(2x-1)(2x+1)$", "$(4x-1)^2$", "$(2x-1)^2$", "$(4x-1)(4x+1)$"],
            correct: 0,
            explain: "Áp dụng hằng đẳng thức $A^2 - B^2 = (A-B)(A+B)$. Ta có $4x^2 - 1 = (2x)^2 - 1^2 = (2x-1)(2x+1)$."
        },
        {
            id: "Q2",
            type: "single",
            q: "Giữa hai điểm $B$ và $C$ bị ngăn cách bởi hồ nước. Hãy xác định độ dài $BC$ mà không cần phải bơi qua hồ. Biết rằng đoạn thẳng $KI$ dài 25m và $K$ là trung điểm của $AB$, $I$ là trung điểm của $AC$.",
            a: ["25m", "20m", "12,5m", "50m"],
            correct: 3,
            explain: "Vì $K, I$ lần lượt là trung điểm của $AB$ và $AC$ nên $KI$ là đường trung bình của $\\Delta ABC$. Suy ra $BC = 2KI = 2 \\times 25 = 50m$."
        },
        {
            id: "Q3",
            type: "single",
            q: "Kết quả sau khi thu gọn của đơn thức: $(-4x^2y) \\cdot \\frac{1}{2}x^3y^2$ là",
            a: ["$2x^6y^2$", "$2x^5y^3$", "$-2x^5y^2$", "$-2x^5y^3$"],
            correct: 3,
            explain: "$(-4x^2y) \\cdot \\frac{1}{2}x^3y^2 = (-4 \\cdot \\frac{1}{2})(x^2 \\cdot x^3)(y \\cdot y^2) = -2x^5y^3$."
        },
        {
            id: "Q4",
            type: "single",
            q: "Tỉ số của đoạn thẳng $AB = 10dm$ và đoạn thẳng $CD = 5m$ là:",
            a: ["$\\frac{1}{5}$", "2", "5", "$\\frac{1}{2}$"],
            correct: 0,
            explain: "Đổi $CD = 5m = 50dm$. Tỉ số $AB/CD = 10/50 = 1/5$."
        },
        {
            id: "Q5",
            type: "single",
            q: "Thu thập số liệu về yêu thích một số môn học được kết quả như sau: Toán (60%), Ngữ Văn (30%), KHTN (45%), HĐ Trải nghiệm (94%), Giáo dục thể chất (69%), Tin (95%), GDCD (55%). Học sinh yêu thích môn học nào nhất?",
            a: ["Toán.", "Hoạt động trải nghiệm.", "Tin.", "Giáo dục thể chất."],
            correct: 2,
            explain: "Môn Tin có tỉ lệ yêu thích cao nhất là 95%."
        },
        {
            id: "Q6",
            type: "single",
            q: "Cho hình thang cân $ABCD$ có $AB \\parallel CD$ và $\\widehat{A}=125^\\circ$. Khi đó $\\widehat{B}$ bằng",
            a: ["$65^\\circ$", "$90^\\circ$", "$125^\\circ$", "$55^\\circ$"],
            correct: 2,
            explain: "Trong hình thang cân, hai góc kề một đáy bằng nhau. Do $AB \\parallel CD$ nên $A, B$ là hai góc kề đáy lớn, suy ra $\\widehat{B} = \\widehat{A} = 125^\\circ$."
        },
        {
            id: "Q7",
            type: "single",
            q: "Phân tích đa thức $3x(x-y)-5x+5y$ thành nhân tử ta được kết quả là",
            a: ["$(x-y)(3x+5)$", "$(3x-5)(x-y)$", "$(x+y)(3x-5)$", "$(x+y)(3x+5)$"],
            correct: 1,
            explain: "$3x(x-y)-5x+5y = 3x(x-y) - 5(x-y) = (x-y)(3x-5)$."
        },
        {
            id: "Q8",
            type: "single",
            q: "Lập phương một tổng của $2x$ và $3y$ là:",
            a: ["$(2x-3y)^3$", "$2x^3+3y^3$", "$(2x+3y)^3$", "$(2x+3y)^2$"],
            correct: 2,
            explain: "Lập phương của một tổng của $A$ và $B$ là $(A+B)^3$. Do đó lập phương tổng của $2x$ và $3y$ là $(2x+3y)^3$."
        },
        {
            id: "Q9",
            type: "single",
            q: "Dựa vào biểu đồ Nhiệt độ trong tuần, ngày nào trong tuần đó có nhiệt độ cao nhất?",
            a: ["Thứ Tư.", "Thứ Ba.", "Thứ Năm.", "Thứ Sáu."],
            correct: 0,
            explain: "Theo biểu đồ, nhiệt độ cao nhất là $32^\\circ C$ vào ngày Thứ Tư."
        },
        {
            id: "Q10",
            type: "single",
            q: "Kết quả rút gọn biểu thức $A = (a+b)^3 + (a-b)^3 - 6ab^2$ bằng",
            a: ["$2b^3$", "$2a^3$", "$-2b^3$", "$-2a^3$"],
            correct: 1,
            explain: "$A = (a^3+3a^2b+3ab^2+b^3) + (a^3-3a^2b+3ab^2-b^3) - 6ab^2 = 2a^3 + 6ab^2 - 6ab^2 = 2a^3$."
        },
        {
            id: "Q11",
            type: "single",
            q: "Kết quả của phép chia $(x^6y^4 : x^3y)$ là",
            a: ["$x^3y^3$", "$x^4y^2$", "$x^2y^4$", "$x^3y^4$"],
            correct: 0,
            explain: "$x^6y^4 : x^3y = x^{6-3} \\cdot y^{4-1} = x^3y^3$."
        },
        {
            id: "Q12",
            type: "single",
            q: "Cho $\\Delta ABC$ phân giác $AD (D \\in BC)$, biết: $AB=10cm, AC=19cm, BD=5cm$. Độ dài đoạn thẳng $CD$ bằng:",
            a: ["20cm", "38cm", "9,5cm", "$\\frac{50}{19}cm$"],
            correct: 2,
            explain: "Theo tính chất đường phân giác: $\\frac{BD}{CD} = \\frac{AB}{AC} \\Rightarrow \\frac{5}{CD} = \\frac{10}{19} \\Rightarrow CD = \\frac{5 \\cdot 19}{10} = 9,5cm$."
        },
        {
            id: "Q13",
            type: "tf",
            q: "Cho đa thức $G = (7x^5y^4z^3 - 3x^4yz^2 + 2x^2y^2z) : x^2yz$. Đa thức $A$ thỏa mãn $A + 14x^3y^3z^2 - 6x^2z = G$. Xét tính đúng sai của các mệnh đề sau:",
            statements: [
                "a) Bậc của đa thức $G$ là 8.",
                "b) Giá trị của biểu thức $G$ tại $x=1; y=-1; z=1$ là 12.",
                "c) Đa thức $A$ có hạng tử tự do là 2.",
                "d) Tổng của hai đa thức $A$ và $G$ là một đơn thức."
            ],
            correct: ["T", "F", "F", "T"],
            explain: "Ta có $G = 7x^3y^3z^2 - 3x^2z + 2y$. a) Bậc của G là $3+3+2 = 8$ (Đúng). b) Tại $x=1, y=-1, z=1$, $G = 7(1)(-1)(1) - 3(1)(1) + 2(-1) = -7 - 3 - 2 = -12$ (Sai). c) $A = G - 14x^3y^3z^2 + 6x^2z = -7x^3y^3z^2 + 3x^2z + 2y$. $A$ không có hạng tử tự do (hệ số tự do bằng 0) (Sai). d) $A + G = -14x^3y^3z^2 + 6x^2z + 2G = -14x^3y^3z^2 + 6x^2z + 14x^3y^3z^2 - 6x^2z + 4y = 4y$ (đơn thức) (Đúng)."
        },
        {
            id: "Q14",
            type: "short",
            q: "Cho biểu thức $M = (x+3)^3 - (x+9)(x^2+3)$. Giá trị của biểu thức $M$ bằng bao nhiêu? (Nhập biểu thức thu gọn của M)",
            correct: "24x",
            explain: "$M = (x^3 + 9x^2 + 27x + 27) - (x^3 + 3x + 9x^2 + 27) = 24x$."
        },
        {
            id: "Q15",
            type: "short",
            q: "Viết tổng sau thành tích: $27x^3+8$. (Ghi dạng (A)(B), viết liền không dấu cách)",
            correct: "(3x+2)(9x^2-6x+4)",
            explain: "$27x^3+8 = (3x)^3 + 2^3 = (3x+2)((3x)^2 - 3x \\cdot 2 + 2^2) = (3x+2)(9x^2-6x+4)$."
        },
        {
            id: "Q16",
            type: "short",
            q: "Cho tam giác $ABC$ có $AB=6cm, AC=15cm$. Điểm $E$ trên $BC$ sao cho $EC=4cm$, $AE$ là phân giác góc $BAC$. Tìm $x = BE$ (cm). (Nhập số thập phân)",
            correct: "1,6",
            explain: "Vì $AE$ là phân giác $\\widehat{BAC}$ nên $\\frac{BE}{EC} = \\frac{AB}{AC} \\Rightarrow \\frac{x}{4} = \\frac{6}{15} \\Rightarrow x = \\frac{24}{15} = 1,6$ cm."
        },
        {
            id: "Q17",
            type: "essay",
            q: "Cho dữ liệu như bảng sau:\n- Chùa Hương: Hà Nội\n- Chùa Bái Đính: Ninh Bình\n- Chùa Bà Đen: Tây Ninh\n- Chùa Thiên Mụ: Thừa Thiên Huế\nDữ liệu thu thập trong bảng trên là loại dữ liệu gì?",
            correct: "Dữ liệu không là số và không thể sắp xếp theo thứ tự.",
            explain: "Đây là dữ liệu định tính (chữ), cụ thể là tên địa danh, không thể sắp xếp theo thứ tự toán học lớn bé."
        },
        {
            id: "Q18",
            type: "essay",
            q: "Doanh thu (đơn vị: tỉ đồng) của hai chi nhánh một công ty trong năm 2021 và 2022 được cho trong bảng sau: Hà Nội (2021: 6, 2022: 8); TP.HCM (2021: 10, 2022: 12).\na) Em hãy lựa chọn dạng biểu đồ thích hợp rồi vẽ biểu đồ đã chọn để so sánh doanh thu của hai chi nhánh này trong hai năm 2021 và 2022?\nb) Trong giai đoạn 2021-2022 doanh thu của hai chi nhánh là bao nhiêu?",
            correct: "a) Biểu đồ cột kép.\nb) 36 tỉ đồng.",
            explain: "a) Để so sánh dữ liệu của 2 đối tượng trong 2 năm, dùng biểu đồ cột kép là thích hợp nhất.\nb) Tổng doanh thu = 6 + 8 + 10 + 12 = 36 (tỉ đồng)."
        },
        {
            id: "Q19",
            type: "short",
            q: "Tính nhanh giá trị của biểu thức $A = m^2 - 2mn + n^2$ tại $m=168$ và $n=68$.",
            correct: "10000",
            explain: "$A = (m-n)^2$. Thay $m=168, n=68$ vào ta được $A = (168-68)^2 = 100^2 = 10000$."
        },
        {
            id: "Q20",
            type: "essay",
            q: "Phân tích đa thức sau thành nhân tử $B = (x^2-16) + xy + 4y$.",
            correct: "B = (x+4)(x-4+y)",
            explain: "$B = (x-4)(x+4) + y(x+4) = (x+4)(x-4+y)$."
        },
        {
            id: "Q21",
            type: "short",
            q: "Tìm các giá trị của $x$, biết: $2(x+3)-x^2-3x=0$. (Ví dụ: -1; 2. Sắp xếp tăng dần, cách nhau bởi dấu chấm phẩy và 1 khoảng trắng)",
            correct: "-3; 2",
            explain: "$2(x+3) - x(x+3) = 0 \\Rightarrow (x+3)(2-x) = 0 \\Rightarrow x=-3$ hoặc $x=2$."
        },
        {
            id: "Q22",
            type: "essay",
            q: "Cho tam giác $ABC$ vuông cân tại $A$. Gọi $M, N, P$ lần lượt là trung điểm của $AB, BC, AC$.\na) Chứng minh $MN \\parallel AC$.\nb) Chứng minh tứ giác $AMNP$ là hình vuông.\nc) Đường phân giác $BE$ của tam giác $ABC$ cắt đường thẳng $AN$ tại $I$. Chứng minh $CE = 2NI$.",
            correct: "a) MN là đường trung bình tam giác ABC. b) AMNP là hình chữ nhật có 2 cạnh kề bằng nhau. c) Dùng định lý đường phân giác trong tam giác ABC và ABN.",
            explain: "a) $M, N$ là trung điểm $AB, BC \\Rightarrow MN$ là đường trung bình $\\Delta ABC \\Rightarrow MN \\parallel AC$.\nb) $MN \\parallel AP$ và $MN = \\frac{AC}{2} = AP \\Rightarrow AMNP$ là hình bình hành. Lại có $\\widehat{A}=90^\\circ \\Rightarrow AMNP$ là hình chữ nhật. Có $AM = \\frac{AB}{2} = \\frac{AC}{2} = AP \\Rightarrow$ Hình chữ nhật $AMNP$ là hình vuông.\nc) $\\Delta ABC$ có $BE$ phân giác $\\Rightarrow \\frac{EA}{EC} = \\frac{AB}{BC}$. $\\Delta ABN$ có $BI$ phân giác $\\Rightarrow \\frac{IA}{IN} = \\frac{AB}{BN} = \\frac{2AB}{BC}$. Suy ra $\\frac{IA}{IN} = 2\\frac{EA}{EC}$. $\\Delta AEI$ cân tại A $\\Rightarrow AI = AE \\Rightarrow \\frac{AE}{IN} = 2\\frac{AE}{EC} \\Rightarrow CE = 2NI$."
        },
        {
            id: "Q23",
            type: "short",
            q: "Cho các số thực $x, y, z$ thỏa mãn $x+y+z=9$ và $x^2+y^2+z^2=27$. Tính giá trị biểu thức $P = (x-2)^{22} + (y-3)^{23} + (z-4)^{24}$.",
            correct: "2",
            explain: "Ta có: $(x+y+z)^2 = 9^2 = 81$ và $3(x^2+y^2+z^2) = 3 \\cdot 27 = 81$. Do đó $(x+y+z)^2 = 3(x^2+y^2+z^2) \\Leftrightarrow 2x^2+2y^2+2z^2-2xy-2yz-2zx = 0 \\Leftrightarrow (x-y)^2 + (y-z)^2 + (z-x)^2 = 0 \\Leftrightarrow x=y=z$. Kết hợp $x+y+z=9 \\Rightarrow x=y=z=3$. Thay vào $P$: $P = (3-2)^{22} + (3-3)^{23} + (3-4)^{24} = 1 + 0 + (-1)^{24} = 2$."
        }
    ]
});
