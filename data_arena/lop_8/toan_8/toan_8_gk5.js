window.ARENA_EXAMS = window.ARENA_EXAMS || [];

window.ARENA_EXAMS.push({
    roomId: "GK1_TOAN8_QUEVO_V2",
    type: "public",
    grade: "8",
    subject: "Toán",
    roomName: "Đề kiểm tra giữa học kỳ 1 Toán 8 (2026-2027) - THCS Quế Võ (V2)", 
    durationMinutes: 90,
    participants: 0,
    questions: [
        {
            id: "Q1",
            type: "single",
            q: "Trong các biểu thức sau, đâu là đơn thức?",
            a: ["$\\frac{2x}{\\sqrt{y}}$", "$-5xy^2$", "$x^2+3y^2-4$", "$3y\\sqrt{xy}$"],
            correct: 1,
            explain: "$-5xy^2$ là đơn thức vì nó là tích của một số thực và các biến có số mũ nguyên dương. Các đáp án A, D chứa căn bậc hai của biến, đáp án C là đa thức."
        },
        {
            id: "Q2",
            type: "single",
            q: "Giá trị của biểu thức $A = x^2 + 4x + 4$ tại $x = 98$ bằng",
            a: ["1000", "10", "10000", "100"],
            correct: 2,
            explain: "$A = x^2 + 4x + 4 = (x+2)^2$. Tại $x=98$, $A = (98+2)^2 = 100^2 = 10000$."
        },
        {
            id: "Q3",
            type: "single",
            q: "Đơn thức $B$ thoả mãn: $-3xy \\cdot B = 6x^2y^2$ là",
            a: ["$2xy$", "$-3xy$", "$-\\frac{1}{2}xy$", "$-2xy$"],
            correct: 3,
            explain: "$B = (6x^2y^2) : (-3xy) = -2xy$."
        },
        {
            id: "Q4",
            type: "single",
            q: "Bậc của đơn thức $-2^2x^2y^2z$ là",
            a: ["5", "6", "7", "4"],
            correct: 0,
            explain: "Bậc của đơn thức là tổng số mũ của các biến: $2 + 2 + 1 = 5$."
        },
        {
            id: "Q5",
            type: "single",
            q: "Bậc của đa thức $P=2x^5-x^2y^2-2x^5+x^3-xy^2+15$ bằng",
            a: ["5", "4", "3", "2"],
            correct: 1,
            explain: "Thu gọn $P = (2x^5-2x^5) - x^2y^2 + x^3 - xy^2 + 15 = -x^2y^2 + x^3 - xy^2 + 15$. Hạng tử có bậc cao nhất là $-x^2y^2$ với bậc là $2+2=4$."
        },
        {
            id: "Q6",
            type: "single",
            q: "Kết quả phép chia đa thức $6x^3+4x^2-2x$ cho đơn thức $(-2x)$ là",
            a: ["$3x^2-2x+1$", "$-3x^2+2x+1$", "$-3x^2-2x+1$", "$-3x^2-2x-1$"],
            correct: 2,
            explain: "$(6x^3+4x^2-2x) : (-2x) = -3x^2 - 2x + 1$."
        },
        {
            id: "Q7",
            type: "single",
            q: "Đa thức $3x^3y^3 - 4x^2y^2 - xy$ chia hết cho đơn thức nào sau đây?",
            a: ["$2xy^2$", "$-xyz$", "$\\frac{5}{2}yx^2$", "$2xy$"],
            correct: 3,
            explain: "Để đa thức chia hết cho đơn thức, bậc của mỗi biến trong đơn thức chia không vượt quá bậc nhỏ nhất của biến đó trong các hạng tử của đa thức. Hạng tử có bậc biến nhỏ nhất là $xy$, nên đa thức chia hết cho các đơn thức có chứa $x$ hoặc $y$ hoặc $xy$, đáp án phù hợp là $2xy$."
        },
        {
            id: "Q8",
            type: "single",
            q: "Kết quả của phép nhân $(x-3)(x^2+3x+9)$ bằng",
            a: ["$x^3-27$", "$x^3+27$", "$x^3+9$", "$x^3-9$"],
            correct: 0,
            explain: "$(x-3)(x^2+3x+9) = x^3 - 3^3 = x^3 - 27$ (hằng đẳng thức hiệu hai lập phương)."
        },
        {
            id: "Q9",
            type: "single",
            q: "Để đơn thức $4xy^3$ chia hết cho đơn thức $-3x^ny$ thì $n$ bằng",
            a: ["3", "2", "1", "4"],
            correct: 2,
            explain: "Để $4xy^3$ chia hết cho $-3x^ny$, số mũ của biến $x$ trong đơn thức chia phải nhỏ hơn hoặc bằng số mũ của $x$ trong đơn thức bị chia, tức là $n \\le 1$. Do $n \\in \\mathbb{N}$, nên $n=1$ hoặc $n=0$. Trong các đáp án, chọn $n=1$."
        },
        {
            id: "Q10",
            type: "single",
            q: "Tứ giác $MNPQ$ có $MN \\parallel PQ$ là hình thang cân cần có thêm điều kiện nào sau đây?",
            a: ["$\\widehat{M} = \\widehat{P}$", "$\\widehat{N} = \\widehat{Q}$", "$\\widehat{M} = \\widehat{N}$", "$MQ = NP$"],
            correct: 2,
            explain: "Hình thang $MNPQ$ (với $MN \\parallel PQ$) là hình thang cân khi hai góc kề một đáy bằng nhau, tức là $\\widehat{M} = \\widehat{N}$ hoặc $\\widehat{P} = \\widehat{Q}$."
        },
        {
            id: "Q11",
            type: "single",
            q: "Giá trị của đơn thức $A = -\\frac{1}{2}x^2yz^3$ tại $x=2$, $y=z=-1$ là",
            a: ["1", "2", "-2", "-1"],
            correct: 2,
            explain: "Thay số: $A = -\\frac{1}{2} \\cdot 2^2 \\cdot (-1) \\cdot (-1)^3 = -\\frac{1}{2} \\cdot 4 \\cdot (-1) \\cdot (-1) = -2$."
        },
        {
            id: "Q12",
            type: "single",
            q: "Kết quả phép nhân $(5-x)(x+5)$ bằng",
            a: ["$x^2+25$", "$x^2-25$", "$10-x^2$", "$25-x^2$"],
            correct: 3,
            explain: "$(5-x)(x+5) = (5-x)(5+x) = 5^2 - x^2 = 25 - x^2$."
        },
        {
            id: "Q13",
            type: "single",
            q: "Điền vào ô trống sau: $(x-2)^2 = x^2 - \\Box + 4$",
            a: ["2x", "4x", "2", "4"],
            correct: 1,
            explain: "$(x-2)^2 = x^2 - 2 \\cdot x \\cdot 2 + 2^2 = x^2 - 4x + 4$. Vậy ô trống điền $4x$."
        },
        {
            id: "Q14",
            type: "single",
            q: "Tứ giác $ABCD$ có $\\widehat{A} = 50^\\circ, \\widehat{B} = 120^\\circ, \\widehat{D} = 20^\\circ$. Số đo của góc $C$ là",
            a: ["$160^\\circ$", "$170^\\circ$", "$150^\\circ$", "$130^\\circ$"],
            correct: 1,
            explain: "Tổng 4 góc tứ giác là $360^\\circ \\Rightarrow \\widehat{C} = 360^\\circ - (50^\\circ + 120^\\circ + 20^\\circ) = 360^\\circ - 190^\\circ = 170^\\circ$."
        },
        {
            id: "Q15",
            type: "single",
            q: "Kết quả khai triển biểu thức $(2x+1)^2$ bằng",
            a: ["$2x^2+4x+1$", "$4x^2+1$", "$4x^2+2x+1$", "$4x^2+4x+1$"],
            correct: 3,
            explain: "$(2x+1)^2 = (2x)^2 + 2 \\cdot 2x \\cdot 1 + 1^2 = 4x^2 + 4x + 1$."
        },
        {
            id: "Q16",
            type: "single",
            q: "Cho hình bình hành $ABCD$ có $\\widehat{A} = 130^\\circ$. Số đo góc $C$ bằng:",
            a: ["$50^\\circ$", "$130^\\circ$", "$60^\\circ$", "$110^\\circ$"],
            correct: 1,
            explain: "Trong hình bình hành, hai góc đối bằng nhau, do đó $\\widehat{C} = \\widehat{A} = 130^\\circ$."
        },
        {
            id: "Q17",
            type: "single",
            q: "Cho tam giác $ABC$ vuông tại $A$, $BC=10cm$. Độ dài đường trung tuyến $AM$ ứng với cạnh huyền $BC$ bằng:",
            a: ["$5cm$", "$10cm$", "$15cm$", "$20cm$"],
            correct: 0,
            explain: "Trong tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền: $AM = \\frac{BC}{2} = \\frac{10}{2} = 5cm$."
        },
        {
            id: "Q18",
            type: "single",
            q: "Tứ giác $ABCD$ có hai đường chéo $AC$ và $BD$ cắt nhau tại trung điểm của mỗi đường và $AC \\perp BD$. Tứ giác $ABCD$ là hình gì?",
            a: ["Hình thoi", "Hình vuông", "Hình chữ nhật", "Hình thang cân"],
            correct: 0,
            explain: "Tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường là hình bình hành. Hình bình hành có hai đường chéo vuông góc là hình thoi."
        },
        {
            id: "Q19",
            type: "single",
            q: "Hình thoi $ABCD$ có thêm điều kiện nào sau đây thì trở thành hình vuông?",
            a: ["Hai đường chéo vuông góc với nhau", "Hai đường chéo bằng nhau", "Hai cạnh kề bằng nhau", "Hai đường chéo cắt nhau tại trung điểm mỗi đường"],
            correct: 1,
            explain: "Hình thoi có hai đường chéo bằng nhau là hình vuông."
        },
        {
            id: "Q20",
            type: "single",
            q: "Hình bình hành $ABCD$ có điều kiện nào sau đây thì là hình thoi?",
            a: ["Hai đường chéo bằng nhau", "Hai đường chéo vuông góc với nhau", "Hai góc đối bằng nhau", "Hai cạnh đối bằng nhau"],
            correct: 1,
            explain: "Hình bình hành có hai đường chéo vuông góc với nhau là hình thoi."
        },
        {
            id: "Q21",
            type: "short",
            q: "Thực hiện phép tính: $x(xy-3x+5)$",
            correct: "x^2y-3x^2+5x",
            explain: "$x(xy-3x+5) = x \\cdot xy - x \\cdot 3x + x \\cdot 5 = x^2y - 3x^2 + 5x$."
        },
        {
            id: "Q22",
            type: "short",
            q: "Thực hiện phép tính: $(3x^3y^3-6x^2y^2-12xy):3xy$",
            correct: "x^2y^2-2xy-4",
            explain: "$(3x^3y^3:3xy) - (6x^2y^2:3xy) - (12xy:3xy) = x^2y^2 - 2xy - 4$."
        },
        {
            id: "Q23",
            type: "short",
            q: "Tính nhanh: $2027^2+2026^2-4054 \\cdot 2026$",
            correct: "1",
            explain: "$2027^2 + 2026^2 - 2 \\cdot 2027 \\cdot 2026 = (2027 - 2026)^2 = 1^2 = 1$."
        },
        {
            id: "Q24",
            type: "short",
            q: "Tìm đa thức $M$, biết $M-(x^2+2xy-3) = x^2-xy-7$.",
            correct: "2x^2+xy-10",
            explain: "$M = (x^2-xy-7) + (x^2+2xy-3) = x^2 - xy - 7 + x^2 + 2xy - 3 = 2x^2 + xy - 10$."
        },
        {
            id: "Q25",
            type: "short",
            q: "Rút gọn biểu thức: $P = (x-10)(x+10) - (x-10)^2$.",
            correct: "20x-200",
            explain: "$P = (x^2-100) - (x^2-20x+100) = x^2 - 100 - x^2 + 20x - 100 = 20x - 200$."
        },
        {
            id: "Q26",
            type: "tf",
            q: "Cho tam giác $ABC$ vuông tại $A$, đường cao $AH$. Từ $H$ kẻ $HD \\perp AB$, $HE \\perp AC$. Gọi $O$ là trung điểm của $HC$. Trên tia đối của tia $OA$ lấy điểm $G$ sao cho $O$ là trung điểm của $AG$. Xét tính đúng sai của các mệnh đề sau:",
            statements: [
                "a) Tứ giác $ADHE$ là hình chữ nhật.",
                "b) Tứ giác $AHGC$ là hình bình hành.",
                "c) Đường thẳng $AC$ song song với đường thẳng $HG$.",
                "d) Ba điểm $D, H, G$ thẳng hàng."
            ],
            correct: ["T", "T", "T", "T"],
            explain: "a) Đúng. Tứ giác $ADHE$ có ba góc vuông tại $A, D, E$ nên là hình chữ nhật. b) Đúng. Tứ giác $AHGC$ có hai đường chéo $AG$ và $HC$ cắt nhau tại trung điểm $O$ của mỗi đường nên là hình bình hành. c) Đúng. Từ tính chất hình bình hành $AHGC \\Rightarrow AC \\parallel HG$. d) Đúng. Do $AC \\parallel HG$ và $HE \\perp AC$ nên $HE \\perp HG \\Rightarrow \\widehat{EHG}=90^\\circ$. Lại có $\\widehat{DHE}=90^\\circ$ (do $ADHE$ là hcn). Tổng $\\widehat{DHE}+\\widehat{EHG} = 180^\\circ$ nên $D, H, G$ thẳng hàng."
        },
        {
            id: "Q27",
            type: "short",
            q: "Tìm giá trị nhỏ nhất của biểu thức $A=2x^2+4y^2+6x-4y-4xy+2031$.",
            correct: "2026",
            explain: "$A = (x^2+4x+4) + (x^2+4y^2+1+2x-4xy-4y) + 2026 = (x+2)^2 + (x-2y+1)^2 + 2026 \\ge 2026$. Dấu '=' xảy ra khi $x=-2, y=-\\frac{1}{2}$."
        }
    ]
});
