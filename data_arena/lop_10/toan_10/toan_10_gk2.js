window.ARENA_EXAMS = window.ARENA_EXAMS || [];

window.ARENA_EXAMS.push({
    roomId: "GK1_TOAN10_2026",
    type: "public",
    grade: "10",
    subject: "Toán",
    roomName: "Đề kiểm tra giữa học kì 1 Toán 10", 
    durationMinutes: 45,
    participants: 0,
    questions: [
        {
            id: "Q1",
            type: "single",
            q: "Mệnh đề phủ định của mệnh đề $P: \"\\forall x \\in \\mathbb{R}, x^2 + 1 > 0\"$ là:",
            a: ["$\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 > 0\"$", "$\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$", "$\\overline{P}: \"\\forall x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$", "$\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 < 0\"$"],
            correct: 1,
            explain: "Phủ định của lượng từ $\\forall$ là $\\exists$, phủ định của $>$ là $\\le$. Do đó $\\overline{P}: \"\\exists x \\in \\mathbb{R}, x^2 + 1 \\le 0\"$."
        },
        {
            id: "Q2",
            type: "single",
            q: "Cho hai tập hợp $A = \\{1; 2; 3; 4\\}$ và $B = \\{3; 4; 5\\}$. Tập hợp $A \\cup B$ là:",
            a: ["$\\{3; 4\\}$", "$\\{1; 2; 3; 4; 5\\}$", "$\\{1; 2\\}$", "$\\{5\\}$"],
            correct: 1,
            explain: "Tập hợp $A \\cup B$ gồm tất cả các phần tử thuộc A hoặc thuộc B, do đó $A \\cup B = \\{1; 2; 3; 4; 5\\}$."
        },
        {
            id: "Q3",
            type: "single",
            q: "Cặp số $(x; y)$ nào sau đây là một nghiệm của bất phương trình $x + 2y < 4$?",
            a: ["$(2; 1)$", "$(1; 2)$", "$(0; 1)$", "$(4; 0)$"],
            correct: 2,
            explain: "Thay $(x; y) = (0; 1)$ vào vế trái ta có $0 + 2 \\cdot 1 = 2 < 4$ (đúng). Các đáp án khác đều cho kết quả $\\ge 4$."
        },
        {
            id: "Q4",
            type: "tf",
            q: "Cho tam giác $ABC$ có $AB=3$, $AC=4$, $\\widehat{A}=60^\\circ$. Xét tính đúng sai của các mệnh đề sau:",
            statements: [
                "a) Diện tích tam giác $ABC$ bằng $6\\sqrt{3}$.",
                "b) Độ dài cạnh $BC$ bằng $\\sqrt{13}$.",
                "c) Bán kính đường tròn ngoại tiếp $R = \\frac{\\sqrt{39}}{3}$.",
                "d) Chiều cao $h_a$ kẻ từ $A$ bằng $\\frac{12\\sqrt{3}}{\\sqrt{13}}$."
            ],
            correct: ["F", "T", "T", "F"],
            explain: "a) $S = \\frac{1}{2}bc \\sin A = \\frac{1}{2} \\cdot 4 \\cdot 3 \\cdot \\frac{\\sqrt{3}}{2} = 3\\sqrt{3}$ (Sai). b) $BC^2 = 3^2 + 4^2 - 2 \\cdot 3 \\cdot 4 \\cdot \\cos 60^\\circ = 9 + 16 - 12 = 13 \\Rightarrow BC = \\sqrt{13}$ (Đúng). c) $R = \\frac{a}{2\\sin A} = \\frac{\\sqrt{13}}{2 \\cdot \\frac{\\sqrt{3}}{2}} = \\frac{\\sqrt{13}}{\\sqrt{3}} = \\frac{\\sqrt{39}}{3}$ (Đúng). d) $h_a = \\frac{2S}{a} = \\frac{2 \\cdot 3\\sqrt{3}}{\\sqrt{13}} = \\frac{6\\sqrt{39}}{13}$ (Sai)."
        },
        {
            id: "Q5",
            type: "tf",
            q: "Cho hình bình hành $ABCD$ tâm $O$. Xét tính đúng sai của các mệnh đề sau:",
            statements: [
                "a) $\\vec{AB} + \\vec{AD} = \\vec{AC}$.",
                "b) $\\vec{OA} + \\vec{OB} + \\vec{OC} + \\vec{OD} = \\vec{0}$.",
                "c) $\\vec{AB} - \\vec{AD} = \\vec{BD}$.",
                "d) $\\vec{MA} + \\vec{MC} = 2\\vec{MB}$ với mọi điểm $M$."
            ],
            correct: ["T", "T", "F", "F"],
            explain: "a) Đúng theo quy tắc hình bình hành. b) Đúng vì $O$ là trung điểm của $AC$ và $BD$ nên $\\vec{OA}+\\vec{OC}=\\vec{0}$ và $\\vec{OB}+\\vec{OD}=\\vec{0}$. c) Sai, $\\vec{AB} - \\vec{AD} = \\vec{DB}$. d) Sai, $\\vec{MA} + \\vec{MC} = 2\\vec{MO}$ với $O$ là trung điểm $AC$."
        },
        {
            id: "Q6",
            type: "short",
            q: "Cho tập hợp $X = \\{a; b; c\\}$. Tập hợp $X$ có tất cả bao nhiêu tập hợp con?",
            correct: "8",
            explain: "Số tập con của tập hợp có $n$ phần tử là $2^n$. Tập $X$ có $3$ phần tử nên số tập con là $2^3 = 8$."
        },
        {
            id: "Q7",
            type: "short",
            q: "Cho tam giác $ABC$ có ba cạnh lần lượt là $13$, $14$, $15$. Tính diện tích tam giác $ABC$.",
            correct: "84",
            explain: "Nửa chu vi $p = (13+14+15)/2 = 21$. Áp dụng công thức Heron: $S = \\sqrt{p(p-a)(p-b)(p-c)} = \\sqrt{21(21-13)(21-14)(21-15)} = \\sqrt{21 \\cdot 8 \\cdot 7 \\cdot 6} = 84$."
        }
    ]
});