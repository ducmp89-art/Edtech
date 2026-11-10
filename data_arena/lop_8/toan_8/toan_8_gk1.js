window.ARENA_EXAMS = window.ARENA_EXAMS || [];

window.ARENA_EXAMS.push({
    roomId: "KHAOSAT_TOAN10_NANGCAO",
    type: "public",
    grade: "10",
    subject: "Toán",
    roomName: "Đề Khảo Sát Toán 10 Nâng Cao - Chuẩn BGD 2025", 
    durationMinutes: 45,
    participants: 0,
    questions: [
        {
            id: "Q1",
            type: "single",
            q: "Cho hai tập hợp $A = \\{x \\in \\mathbb{R} \\mid -2 \\le x < 5\\}$ và $B = \\{x \\in \\mathbb{R} \\mid x > 1\\}$. Tập hợp $A \\cap B$ là:",
            a: ["$[-2; 1)$", "$(1; 5)$", "$(1; 5]$", "$[-2; +\\infty)$"],
            correct: 1,
            explanation: "Ta có $A = [-2; 5)$ và $B = (1; +\\infty)$. Giao của hai tập hợp là phần tử chung: $A \\cap B = (1; 5)$."
        },
        {
            id: "Q2",
            type: "tf",
            q: "Cho hàm số bậc hai $y = x^2 - 4x + 3$ có đồ thị $(P)$. Xét tính đúng sai của các mệnh đề sau:",
            statements: [
                "a) Đỉnh của parabol $(P)$ có tọa độ là $I(2; -1)$.",
                "b) Hàm số đồng biến trên khoảng $(-\\infty; 2)$.",
                "c) Đồ thị $(P)$ cắt trục hoành tại hai điểm phân biệt có hoành độ dương.",
                "d) Giá trị nhỏ nhất của hàm số trên đoạn $[0; 4]$ bằng $3$."
            ],
            correct: ["T", "F", "T", "F"],
            explanation: "a) Đúng, hoành độ đỉnh $x_I = -\\frac{-4}{2 \\cdot 1} = 2$, tung độ $y_I = -1$. b) Sai, hàm số đồng biến trên $(2; +\\infty)$. c) Đúng, phương trình $x^2 - 4x + 3 = 0$ có nghiệm $x=1, x=3$ đều dương. d) Sai, trên $[0;4]$, GTNN đạt tại đỉnh là $-1$."
        },
        {
            id: "Q3",
            type: "short",
            q: "Trong mặt phẳng tọa độ $Oxy$, cho ba điểm $A(1; 2)$, $B(-2; 1)$ và $C(3; -1)$. Tìm tọa độ điểm $D$ sao cho tứ giác $ABCD$ là hình bình hành. (Viết dưới dạng (x;y) không khoảng trắng).",
            correct: "(6;0)",
            explanation: "Tứ giác $ABCD$ là hình bình hành khi $\\vec{AB} = \\vec{DC}$. Ta có $\\vec{AB} = (-3; -1)$. Giả sử $D(x; y)$, $\\vec{DC} = (3-x; -1-y)$. Suy ra $3-x = -3 \\Rightarrow x=6$ và $-1-y = -1 \\Rightarrow y=0$. Vậy $D(6;0)$."
        }
    ]
});