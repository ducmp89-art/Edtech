window.ARENA_EXAMS.push({
  roomId: "TOAN8GK2",
  roomName: "Đề thi Giữa học kì 2 - Toán 8 - Đề số 4 - Kết nối tri thức",
  type: "public",
  subject: "Toán",
  grade: "8",
  durationMinutes: 90,
  questions: [
    {
      id: "C1",
      type: "single",
      subject: "math",
      q: "Phân thức bằng với phân thức $\\frac{x}{x-1}$ là:",
      a: [
        "$\\frac{x+y}{x-1+y}$",
        "$\\frac{x+1}{x}$",
        "$\\frac{2x}{2x-2}$",
        "$\\frac{x^{2}}{(x-1)^{2}}$"
      ],
      correct: 2,
      explain: "Ta có: $\\frac{x}{x-1} = \\frac{2x}{2(x-1)} = \\frac{2x}{2x-2}$ nên phân thức $\\frac{2x}{2x-2} = \\frac{x}{x-1}$."
    },
    {
      id: "C2",
      type: "single",
      subject: "math",
      q: "Phân thức nghịch đảo của phân thức $\\frac{x-y}{x+y}$ là:",
      a: [
        "$\\frac{x}{x+y}$",
        "$\\frac{y}{x+y}$",
        "$\\frac{y-x}{x+y}$",
        "$\\frac{x+y}{x-y}$"
      ],
      correct: 3,
      explain: "Phân thức nghịch đảo của phân thức $\\frac{A}{B}$ là $\\frac{B}{A}$. Vậy phân thức nghịch đảo của $\\frac{x-y}{x+y}$ là $\\frac{x+y}{x-y}$."
    },
    {
      id: "C3",
      type: "single",
      subject: "math",
      q: "Giá trị của phân thức $\\frac{x^{2}+4x+4}{x^{2}+2x}$ khi $x=-2$ là:",
      a: [
        "0.",
        "-1.",
        "4.",
        "Không xác định."
      ],
      correct: 3,
      explain: "Để phân thức xác định thì $x^{2}+2x \\ne 0 \\Rightarrow x(x+2) \\ne 0 \\Rightarrow x \\ne 0$ và $x \\ne -2$. Vì $x=-2$ không thỏa mãn điều kiện nên tại $x=-2$ phân thức không xác định."
    },
    {
      id: "C4",
      type: "single",
      subject: "math",
      q: "Kết quả phép tính $\\frac{x+1}{x-1}-\\frac{x-4}{x-1}$ là:",
      a: [
        "$\\frac{5}{x-1}$",
        "$\\frac{5(x-1)}{(x-1)^{2}}$",
        "$\\frac{-3}{x-1}$",
        "$\\frac{2x-3}{x-1}$"
      ],
      correct: 0,
      explain: "Ta có: $\\frac{x+1}{x-1} - \\frac{x-4}{x-1} = \\frac{x+1-(x-4)}{x-1} = \\frac{x+1-x+4}{x-1} = \\frac{5}{x-1}$."
    },
    {
      id: "C5",
      type: "single",
      subject: "math",
      q: "Cho hình vẽ dưới đây, biết $AB//DE$. Giá trị của x là:",
      image: "cau5_hinhve.png",
      a: [
        "8.",
        "10.",
        "12.",
        "14."
      ],
      correct: 3,
      explain: "Ta có: $AB//DE$ nên $\\Delta ABC \\sim \\Delta DEC$ (định lí hai tam giác đồng dạng). Do đó: $\\frac{AC}{CD} = \\frac{AB}{DE} \\Rightarrow \\frac{x-2}{20} = \\frac{6}{10} \\Rightarrow x-2 = 20 \\times \\frac{6}{10} = 12 \\Rightarrow x = 14$."
    },
    {
      id: "C6",
      type: "single",
      subject: "math",
      q: "Cho tam giác ABC vuông tại A. Gọi M là trung điểm của AB, N là trung điểm của BC. Biết $AB = 3\\text{cm}, BC = 5\\text{cm}$. Khi đó MN bằng:",
      a: [
        "1,5cm.",
        "2cm.",
        "2,5cm.",
        "4cm."
      ],
      correct: 1,
      explain: "Áp dụng định lí Pythagore vào tam giác vuông ABC: $AC^{2} = BC^{2} - AB^{2} = 5^{2} - 3^{2} = 16 \\Rightarrow AC = 4\\text{cm}$. Vì M, N là trung điểm của AB, BC nên MN là đường trung bình của tam giác ABC $\\Rightarrow MN = \\frac{1}{2}AC = \\frac{1}{2} \\times 4 = 2\\text{cm}$."
    },
    {
      id: "C7",
      type: "single",
      subject: "math",
      q: "Một sân chơi có hình tam giác như hình dưới. Kích thước ba cạnh của sân lần lượt là 300m, 350m và 550m. Phía ngoài sân chơi có một con đường tạo thành một tam giác đồng dạng với sân chơi. Biết cạnh ngắn nhất của con đường là 450m. Tổng chiều dài của con đường đó là:",
      image: "cau7_sanchoi.png",
      a: [
        "1200m.",
        "1500m.",
        "1800m.",
        "2100m."
      ],
      correct: 2,
      explain: "Gọi tam giác sân chơi là ABC và tam giác con đường là A'B'C'. Ta có: $\\frac{AB}{A'B'} = \\frac{AC}{A'C'} = \\frac{BC}{B'C'} = \\frac{300}{450} = \\frac{2}{3}$. Áp dụng tính chất dãy tỉ số bằng nhau: $\\frac{2}{3} = \\frac{300+350+550}{A'B'+A'C'+B'C'} = \\frac{1200}{\\text{Chu vi con đường}} \\Rightarrow \\text{Chu vi} = 1200 : \\frac{2}{3} = 1800\\text{m}$."
    },
    {
      id: "C8",
      type: "single",
      subject: "math",
      q: "Cho $\\Delta ABC \\sim \\Delta MNP$ theo tỉ số đồng dạng 3. Gọi H, K lần lượt là trung điểm của AC, MP. Tỉ số $\\frac{BH}{NK}$ bằng:",
      a: [
        "$\\frac{1}{3}$",
        "$\\frac{1}{9}$",
        "3.",
        "9."
      ],
      correct: 2,
      explain: "Vì H, K là trung điểm của AC, MP nên BH và NK là hai đường trung tuyến tương ứng của hai tam giác đồng dạng. Tỉ số hai đường trung tuyến tương ứng bằng tỉ số đồng dạng nên $\\frac{BH}{NK} = 3$."
    },
    {
      id: "C9a",
      type: "essay",
      subject: "math",
      q: "Thực hiện phép tính: $\\frac{1}{x+1} + \\frac{2}{1-x} + \\frac{5x-1}{x^{2}-1}$",
      correct: "Giáo viên chấm",
      explain: "$\\frac{1}{x+1} - \\frac{2}{x-1} + \\frac{5x-1}{(x+1)(x-1)} = \\frac{x-1-2(x+1)+5x-1}{(x+1)(x-1)} = \\frac{4x-4}{(x+1)(x-1)} = \\frac{4(x-1)}{(x+1)(x-1)} = \\frac{4}{x+1}$."
    },
    {
      id: "C9b",
      type: "essay",
      subject: "math",
      q: "Thực hiện phép tính: $\\frac{2x+6}{x^{3}-8} : \\frac{(x+3)^{3}}{2x-4}$",
      correct: "Giáo viên chấm",
      explain: "$\\frac{2(x+3)}{(x-2)(x^{2}+2x+4)} \\times \\frac{2(x-2)}{(x+3)^{3}} = \\frac{4}{(x^{2}+2x+4)(x+3)^{2}}$."
    },
    {
      id: "C10a",
      type: "essay",
      subject: "math",
      q: "Cho hai biểu thức $P = \\frac{x^{2}-2}{x^{2}+2x} + \\frac{1}{x+2}$ và $Q = \\frac{x+1}{x}$ (với $x \\ne 0; x \\ne -2; x \\ne -1$). Tính giá trị của Q khi $x=-3$.",
      correct: "Giáo viên chấm",
      explain: "Khi $x=-3$ (thỏa mãn điều kiện), $Q = \\frac{-3+1}{-3} = \\frac{-2}{-3} = \\frac{2}{3}$."
    },
    {
      id: "C10b",
      type: "essay",
      subject: "math",
      q: "Rút gọn biểu thức $P = \\frac{x^{2}-2}{x^{2}+2x} + \\frac{1}{x+2}$.",
      correct: "Giáo viên chấm",
      explain: "$P = \\frac{x^{2}-2}{x(x+2)} + \\frac{x}{x(x+2)} = \\frac{x^{2}+x-2}{x(x+2)} = \\frac{(x-1)(x+2)}{x(x+2)} = \\frac{x-1}{x}$."
    },
    {
      id: "C10c",
      type: "essay",
      subject: "math",
      q: "Tìm x để $P : Q = \\frac{5}{2}$.",
      correct: "Giáo viên chấm",
      explain: "$P : Q = \\frac{x-1}{x} : \\frac{x+1}{x} = \\frac{x-1}{x+1}$. Khi $\\frac{x-1}{x+1} = \\frac{5}{2} \\Rightarrow 2(x-1) = 5(x+1) \\Rightarrow 2x-2 = 5x+5 \\Rightarrow 3x = -7 \\Rightarrow x = -\\frac{7}{3}$ (thỏa mãn)."
    },
    {
      id: "C10d",
      type: "essay",
      subject: "math",
      q: "Tìm x nguyên để P có giá trị nguyên.",
      correct: "Giáo viên chấm",
      explain: "$P = \\frac{x-1}{x} = 1 - \\frac{1}{x}$. Để P nguyên thì $\\frac{1}{x}$ nguyên $\\Rightarrow x \\in \\{-1; 1\\}$. Kết hợp điều kiện $x \\ne -1$ nên ta nhận $x = 1$."
    },
    {
      id: "C11",
      type: "essay",
      subject: "math",
      q: "Bóng của một tháp trên mặt đất có độ dài $BC=63\\text{m}$. Cùng thời điểm đó, một cây cột DE cao 2 mét cắm vuông góc với mặt đất có bóng dài 3 mét. Tính chiều cao của tháp?",
      image: "bai3_thap.png",
      correct: "Giáo viên chấm",
      explain: "Vì tháp và cây cột đều vuông góc với mặt đất nên $AB \\perp BC$ và $DE \\perp EC$, ánh sáng mặt trời tạo các tia song song nên $\\Delta ABC \\sim \\Delta DEC$. Suy ra $\\frac{AB}{DE} = \\frac{BC}{EC} \\Rightarrow \\frac{AB}{2} = \\frac{63}{3} = 21 \\Rightarrow AB = 42\\text{m}$. Chiều cao tháp là 42m."
    },
    {
      id: "C12",
      type: "essay",
      subject: "math",
      q: "Cho tam giác ABC vuông tại A ($AB>AC$), đường cao AH. Từ B kẻ tia $Bx \\perp AB$, tia Bx cắt AH tại K.\n\na) Tứ giác ABKC là hình gì? Tại sao?\nb) Chứng minh $\\Delta ABK \\sim \\Delta CHA$. Từ đó suy ra $AB \\cdot AC = AK \\cdot CH$.\nc) Chứng minh $AH^{2} = HB \\cdot HC$.\nd) Giả sử $BH = 9\\text{cm}, HC = 16\\text{cm}$. Tính AB, AH.",
      correct: "Giáo viên chấm",
      explain: "a) $AC \\perp AB$, $BK \\perp AB \\Rightarrow AC // BK$. Tứ giác ABKC là hình thang. Mà $\\widehat{A} = 90^{\\circ}$ nên ABKC là hình thang vuông.\nb) $AC // BK \\Rightarrow \\widehat{CAH} = \\widehat{AKB}$ (so le trong). Xét $\\Delta ABK$ và $\\Delta CHA$ có $\\widehat{B} = \\widehat{H} = 90^{\\circ}$, $\\widehat{CAH} = \\widehat{AKB}$ $\\Rightarrow \\Delta ABK \\sim \\Delta CHA$ (g.g). Suy ra $\\frac{AB}{AK} = \\frac{CH}{CA} \\Rightarrow AB \\cdot AC = AK \\cdot CH$.\nc) $\\widehat{HAC} + \\widehat{ACH} = 90^{\\circ}$ và $\\widehat{ABC} + \\widehat{ACH} = 90^{\\circ} \\Rightarrow \\widehat{HAC} = \\widehat{ABC}$. Xét $\\Delta AHB$ và $\\Delta CHA$ có $\\widehat{AHB} = \\widehat{CHA} = 90^{\\circ}$, $\\widehat{ABH} = \\widehat{CAH}$ $\\Rightarrow \\Delta AHB \\sim \\Delta CHA$ (g.g). Suy ra $\\frac{AH}{HB} = \\frac{CH}{AH} \\Rightarrow AH^{2} = HB \\cdot HC$.\nd) $AH^{2} = 9 \\times 16 = 144 \\Rightarrow AH = 12\\text{cm}$. Áp dụng định lí Pythagore cho $\\Delta AHB$: $AB^{2} = AH^{2} + HB^{2} = 12^{2} + 9^{2} = 225 \\Rightarrow AB = 15\\text{cm}$."
    },
    {
      id: "C13",
      type: "essay",
      subject: "math",
      q: "Chứng minh rằng: Nếu $x=by+cz$; $y=ax+cz$; $z=ax+by$ và $x+y+z \\ne 0$ thì $\\frac{1}{1+a} + \\frac{1}{1+b} + \\frac{1}{1+c} = 2$.",
      correct: "Giáo viên chấm",
      explain: "Ta có: $\\frac{1}{1+a} = \\frac{x}{x+ax} = \\frac{by+cz}{by+cz+ax}$. Tương tự $\\frac{1}{1+b} = \\frac{ax+cz}{ax+by+cz}$ và $\\frac{1}{1+c} = \\frac{ax+by}{ax+by+cz}$. Cộng 3 vế lại: $\\frac{by+cz+ax+cz+ax+by}{ax+by+cz} = \\frac{2(ax+by+cz)}{ax+by+cz} = 2$."
    }
  ]
});