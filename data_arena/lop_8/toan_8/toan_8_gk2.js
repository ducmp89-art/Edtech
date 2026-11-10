window.ARENA_EXAMS = window.ARENA_EXAMS || [];

window.ARENA_EXAMS.push({
    roomId: "GK1_TOAN8_LEQUYDON",
    type: "public",
    grade: "8",
    subject: "Toán",
    roomName: "Đề kiểm tra giữa học kì 1 Toán 8 (2026-2027) - TH&THCS Lê Quý Đôn", 
    durationMinutes: 90,
    participants: 0,
    questions: [
        {
            id: "Q1",
            type: "short",
            q: "Rút gọn biểu thức sau: $A=2x(x-y)+2y(x+y)-(x-y)(x+y)$",
            correct: "x^2+3y^2",
            explanation: "$A = 2x^2 - 2xy + 2xy + 2y^2 - (x^2 - y^2) = 2x^2 + 2y^2 - x^2 + y^2 = x^2 + 3y^2$"
        },
        {
            id: "Q2",
            type: "short",
            q: "Rút gọn biểu thức sau: $B=(x-4)^2+(x+2)^2-2x(x-1)$",
            correct: "-2x+20",
            explanation: "$B = (x^2 - 8x + 16) + (x^2 + 4x + 4) - (2x^2 - 2x) = x^2 - 8x + 16 + x^2 + 4x + 4 - 2x^2 + 2x = -2x + 20$"
        },
        {
            id: "Q3",
            type: "short",
            q: "Rút gọn biểu thức sau: $C=(4-x)(4+x)+(3x^4-6x^3+9x^2):(3x^2)$",
            correct: "19-2x",
            explanation: "$C = (16 - x^2) + (x^2 - 2x + 3) = 16 - x^2 + x^2 - 2x + 3 = 19 - 2x$"
        },
        {
            id: "Q4",
            type: "short",
            q: "Tính nhanh: $96^2-16$",
            correct: "9200",
            explanation: "$96^2 - 4^2 = (96-4)(96+4) = 92 \\times 100 = 9200$"
        },
        {
            id: "Q5",
            type: "short",
            q: "Tính nhanh: $28^2+72^2+28.144$",
            correct: "10000",
            explanation: "$28^2 + 2 \\times 28 \\times 72 + 72^2 = (28 + 72)^2 = 100^2 = 10000$"
        },
        {
            id: "Q6",
            type: "short",
            q: "Tìm $x$, biết: $3(x^2-x)-3x^2-18=0$",
            correct: "-6",
            explanation: "$3x^2 - 3x - 3x^2 - 18 = 0 \\Rightarrow -3x = 18 \\Rightarrow x = -6$"
        },
        {
            id: "Q7",
            type: "single",
            q: "Tìm $x$, biết: $(2x+1)^2-4(x-1)^2=17$",
            a: ["$x=\\frac{5}{3}$", "$x=\\frac{3}{5}$", "$x=-\\frac{5}{3}$", "$x=-\\frac{3}{5}$"],
            correct: 0,
            explanation: "$(4x^2 + 4x + 1) - (4x^2 - 8x + 4) = 17 \\Rightarrow 4x^2 + 4x + 1 - 4x^2 + 8x - 4 = 17 \\Rightarrow 12x = 20 \\Rightarrow x = \\frac{20}{12} = \\frac{5}{3}$"
        },
        {
            id: "Q8",
            type: "single",
            q: "Tìm $x$, biết: $16-4(x+1)^2=0$",
            a: ["$x=1$ và $x=3$", "$x=1$ và $x=-3$", "$x=-1$ và $x=3$", "$x=-1$ và $x=-3$"],
            correct: 1,
            explanation: "$4(x+1)^2 = 16 \\Rightarrow (x+1)^2 = 4$. Trường hợp 1: $x+1=2 \\Rightarrow x=1$. Trường hợp 2: $x+1=-2 \\Rightarrow x=-3$."
        },
        {
            id: "Q9",
            type: "short",
            q: "Bạn Nguyên dự định mua vở với giá 15 nghìn đồng một quyển và bút với giá 5 nghìn đồng một chiếc. Biết bạn Nguyên mua 10 quyển vở và 12 chiếc bút. Bạn Nguyên có 300 nghìn đồng, sau khi trả tiền cho người bán hàng thì Nguyên còn lại bao nhiêu tiền? (Điền số, đơn vị nghìn đồng)",
            correct: "90",
            explanation: "Số tiền bạn Nguyên phải trả: $15 \\times 10 + 5 \\times 12 = 210$ (nghìn đồng). Số tiền còn lại: $300 - 210 = 90$ (nghìn đồng)."
        },
        {
            id: "Q10",
            type: "tf",
            q: "Mặt trước của một công trình xây dựng được làm bằng kính có dạng hình bình hành $EFGH$ với $M$ là giao điểm của hai đường chéo. Cho biết $EF=40m$, $EM=36m$, $HM=16m$. Xét tính đúng sai của các mệnh đề sau:",
            statements: [
                "a) Độ dài cạnh $HG = 40m$.",
                "b) $M$ là trung điểm của đoạn thẳng $EG$ và $HF$.",
                "c) Độ dài đường chéo $EG = 36m$.",
                "d) Độ dài đường chéo $HF = 32m$."
            ],
            correct: ["T", "T", "F", "T"],
            explanation: "a) Đúng, $EFGH$ là hình bình hành nên $HG = EF = 40m$. b) Đúng, theo tính chất hình bình hành hai đường chéo cắt nhau tại trung điểm mỗi đường. c) Sai, $EG = 2EM = 2 \\times 36 = 72m$. d) Đúng, $HF = 2HM = 2 \\times 16 = 32m$."
        },
        {
            id: "Q11",
            type: "tf",
            q: "Cho tam giác $ABC$ vuông tại $A$ ($AB < AC$), lấy điểm $M$ bất kỳ thuộc $BC$ ($M$ khác $B, C$). Kẻ $MD \\perp AB$ tại $D$, $ME \\perp AC$ tại $E$. Xét tính đúng sai của các mệnh đề sau:",
            statements: [
                "a) Tứ giác $ADME$ là hình chữ nhật.",
                "b) Gọi $G$ là điểm sao cho $D$ là trung điểm của $MG$. Tứ giác $AGDE$ là hình bình hành.",
                "c) Qua $A$ kẻ tia $Ax \\parallel DE$ cắt tia $ME$ tại $F$. Tứ giác $ADEF$ là hình bình hành và $A$ là trung điểm của $GF$.",
                "d) Gọi $H$ là chân đường cao hạ từ $A$ của tam giác $ABC$. Góc $\\widehat{DHE} = 90^\\circ$."
            ],
            correct: ["T", "T", "T", "T"],
            explanation: "a) Tứ giác $ADME$ có 3 góc vuông nên là hình chữ nhật. b) $ADME$ là HCN $\\Rightarrow AM=DE, AM \\parallel DE$. c) $Ax \\parallel DE, AD \\parallel EF \\Rightarrow ADEF$ là hình bình hành. $AF=DE, AG=DE \\Rightarrow A$ là trung điểm $GF$. d) $\\widehat{DHE}=90^\\circ$ do $HO = \\frac{DE}{2}$ trong tam giác vuông $DHE$."
        },
        {
            id: "Q12",
            type: "short",
            q: "Cho $a,b,c$ thỏa mãn $a+b+c=0$ và $ab+bc+ac=0$. Tính giá trị của biểu thức $A=(a-1)^{2023}+b^{2024}+(c+1)^{2025}$.",
            correct: "0",
            explanation: "Từ $a+b+c=0 \\Rightarrow (a+b+c)^2=0 \\Rightarrow a^2+b^2+c^2+2(ab+bc+ac)=0$. Mà $ab+bc+ac=0 \\Rightarrow a^2+b^2+c^2=0 \\Rightarrow a=b=c=0$. Thay vào $A$: $A=(-1)^{2023} + 0^{2024} + 1^{2025} = -1 + 0 + 1 = 0$."
        }
    ]
});