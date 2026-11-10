window.ARENA_EXAMS = window.ARENA_EXAMS || [];

window.ARENA_EXAMS.push({
    roomId: "DE_THAM_KHAO_2_TOAN8",
    type: "public",
    grade: "8",
    subject: "Toán",
    roomName: "Đề Tham Khảo Số 2 - Giữa HK1 Toán 8 (2026-2027) - THCS Lê Quý Đôn", 
    durationMinutes: 60,
    participants: 0,
    questions: [
        {
            id: "Q1",
            type: "single",
            q: "Biểu thức nào sau đây là đơn thức?",
            a: ["$x+y$", "$3x^2y$", "$\\frac{x}{y}$", "$2x-1$"],
            correct: 1,
            explanation: "Đơn thức là biểu thức đại số chỉ gồm một số, một biến hoặc một tích giữa các số và các biến. $3x^2y$ thỏa mãn điều kiện này, còn $x+y$ và $2x-1$ là đa thức, $\\frac{x}{y}$ chứa phép chia cho biến."
        },
        {
            id: "Q2",
            type: "single",
            q: "Kết quả của phép nhân $2x^2y \\cdot (-3xy^2)$ là:",
            a: ["$6x^3y^3$", "$-x^3y^3$", "$-6x^2y^3$", "$-6x^3y^3$"],
            correct: 3,
            explanation: "$2x^2y \\cdot (-3xy^2) = 2 \\cdot (-3) \\cdot (x^2 \\cdot x) \\cdot (y \\cdot y^2) = -6x^3y^3$"
        },
        {
            id: "Q3",
            type: "single",
            q: "Giá trị của biểu thức $x^2y - 2x$ tại $x=-1, y=3$ là:",
            a: ["$5$", "$1$", "$-1$", "$-5$"],
            correct: 0,
            explanation: "Thay $x = -1, y = 3$ vào biểu thức ta được: $(-1)^2 \\cdot 3 - 2 \\cdot (-1) = 1 \\cdot 3 + 2 = 5$."
        },
        {
            id: "Q4",
            type: "single",
            q: "Kết quả của phép chia $12x^4y^3 : 4x^2y$ là:",
            a: ["$8x^2y^2$", "$3x^6y^4$", "$3x^2y^2$", "$3x^2y^3$"],
            correct: 2,
            explanation: "$12x^4y^3 : 4x^2y = (12:4) \\cdot (x^4:x^2) \\cdot (y^3:y) = 3x^2y^2$"
        },
        {
            id: "Q5",
            type: "single",
            q: "Tổng số đo bốn góc của một tứ giác bằng:",
            a: ["$180^\\circ$", "$270^\\circ$", "$540^\\circ$", "$360^\\circ$"],
            correct: 3,
            explanation: "Theo định lí tổng các góc của một tứ giác, tổng số đo 4 góc luôn bằng $360^\\circ$."
        },
        {
            id: "Q6",
            type: "single",
            q: "Trong hình thang cân, khẳng định nào sau đây đúng?",
            a: ["Hai đường chéo vuông góc với nhau", "Hai đường chéo bằng nhau", "Hai cạnh bên song song với nhau", "Hai đáy bằng nhau"],
            correct: 1,
            explanation: "Tính chất đặc trưng của hình thang cân là có hai đường chéo bằng nhau và hai góc kề một đáy bằng nhau."
        },
        {
            id: "Q7",
            type: "single",
            q: "Tứ giác có hai đường chéo cắt nhau tại trung điểm của mỗi đường là:",
            a: ["hình bình hành", "hình thang cân", "hình thang vuông", "hình thoi"],
            correct: 0,
            explanation: "Theo dấu hiệu nhận biết, tứ giác có hai đường chéo cắt nhau tại trung điểm mỗi đường là hình bình hành."
        },
        {
            id: "Q8",
            type: "single",
            q: "Hình bình hành có hai đường chéo bằng nhau là:",
            a: ["hình thoi", "hình vuông", "hình chữ nhật", "hình thang có hai đáy không bằng nhau"],
            correct: 2,
            explanation: "Theo dấu hiệu nhận biết, hình bình hành có hai đường chéo bằng nhau là hình chữ nhật."
        },
        {
            id: "Q9",
            type: "short",
            q: "Tìm bậc của đa thức $P = 4x^2y - 3xy^2 + 2xy - 5$.",
            correct: "3",
            explanation: "Hạng tử $4x^2y$ có bậc $2+1=3$, hạng tử $-3xy^2$ có bậc $1+2=3$. Bậc cao nhất là 3, nên bậc của đa thức P là 3."
        },
        {
            id: "Q10",
            type: "short",
            q: "Tính giá trị của đa thức $P = 4x^2y - 3xy^2 + 2xy - 5$ tại $x=2, y=-1$.",
            correct: "-31",
            explanation: "Thay $x=2, y=-1$ vào đa thức: $4(2)^2(-1) - 3(2)(-1)^2 + 2(2)(-1) - 5 = 4 \\cdot 4 \\cdot (-1) - 3 \\cdot 2 \\cdot 1 - 4 - 5 = -16 - 6 - 4 - 5 = -31$."
        },
        {
            id: "Q11",
            type: "tf",
            q: "Một mảnh vườn hình chữ nhật có chiều dài $2x+3$ (m) và chiều rộng $x+1$ (m) ($x > 0$). Xét tính đúng sai của các mệnh đề sau:",
            statements: [
                "a) Đa thức biểu thị chu vi mảnh vườn là $6x+8$.",
                "b) Đa thức biểu thị diện tích mảnh vườn là $2x^2+5x+3$.",
                "c) Dành một phần đất hình vuông cạnh $x+1$ trồng hoa, phần còn lại trồng rau. Đa thức diện tích trồng rau là $x^2+3x+2$.",
                "d) Với $x=5$, số tiền cần chi để trồng rau (chi phí 20.000đ/m2) là 800.000 đồng."
            ],
            correct: ["T", "T", "T", "F"],
            explanation: "a) Đúng. Chu vi $C = 2(2x+3+x+1) = 2(3x+4) = 6x+8$. b) Đúng. Diện tích $S = (2x+3)(x+1) = 2x^2+2x+3x+3 = 2x^2+5x+3$. c) Đúng. $S_{rau} = (2x^2+5x+3) - (x+1)^2 = 2x^2+5x+3 - (x^2+2x+1) = x^2+3x+2$. d) Sai. Khi $x=5$, $S_{rau} = 5^2+3(5)+2 = 42$ m$^2$. Số tiền là $42 \\times 20.000 = 840.000$ đồng (chứ không phải 800.000)."
        },
        {
            id: "Q12",
            type: "tf",
            q: "Cho tam giác $ABC$ vuông tại $A$, $M$ là trung điểm của $BC$. Kẻ $MD \\perp AB$ tại $D$, $ME \\perp AC$ tại $E$. Xét tính đúng sai của các mệnh đề sau:",
            statements: [
                "a) Tứ giác $ADME$ là hình chữ nhật.",
                "b) Gọi $K$ là điểm đối xứng với $M$ qua $D$. Tứ giác $AMBK$ là hình thoi.",
                "c) Để tứ giác $ADME$ là hình vuông thì tam giác $ABC$ cần điều kiện là tam giác cân tại $A$.",
                "d) Tứ giác $ADME$ luôn là hình vuông với mọi tam giác $ABC$ vuông tại $A$."
            ],
            correct: ["T", "T", "T", "F"],
            explanation: "a) Đúng. Tứ giác $ADME$ có 3 góc vuông (tại A, D, E) nên là hình chữ nhật. b) Đúng. $MD \\perp AB$ và $M$ là trung điểm $BC$ nên $D$ là trung điểm $AB$. Lại có $D$ là trung điểm $MK$ nên $AMBK$ là hình bình hành có hai đường chéo vuông góc ($AB \\perp MK$), suy ra là hình thoi. c) Đúng. Để $ADME$ là hình vuông thì $AM$ là phân giác góc $A$, suy ra tam giác $ABC$ vuông cân tại $A$. d) Sai. $ADME$ chỉ là hình chữ nhật trong trường hợp tổng quát."
        }
    ]
});