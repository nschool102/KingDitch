/*-- ------------------------------------- RENDER THÔNG TIN QUẺ DỊCH ------------------------------------- --*/

function getNguHanhClass(h) {
    const map = { "Mộc": "moc", "MỘC": "moc", "Hỏa": "hoa", "HỎA": "hoa", "Thổ": "tho", "THỔ": "tho", "Kim": "kim", "KIM": "kim", "Thủy": "thuy", "THỦY": "thuy" };
    return map[h] || "";
}

function getColor(s) {
    if (s <= 40) return "#333";
    if (s <= 70) return "#3498db";
    if (s <= 85) return "#2ecc71";
    return "#e74c3c";
}

function createQueLayout(targetId) {
    // Luôn render vào div con có id="result-display" để không mất form
    const container = document.getElementById(targetId);
    let display = container.querySelector('#result-display');
    if (!display) {
        display = document.createElement('div');
        display.id = 'result-display';
        container.appendChild(display);
    }
    
    display.innerHTML = `
        <div class="app">
            <div class="header-info"></div>
            <div class="header" id="headerBox"></div>
            <table class="table" id="table"></table>
            <div style="display:flex; justify-content:flex-end; margin-top:10px;">
                <button class="btn-copy" style="padding:8px 14px; border:none; border-radius:8px; background:#1976d2; color:white; cursor:pointer;">📋 Copy</button>
            </div>
            <textarea class="textResult" rows="5" readonly></textarea>
        </div>
    `;
    display.querySelector('.btn-copy').onclick = () => {
        navigator.clipboard.writeText(display.querySelector('.textResult').value);
        alert("✅ Đã copy!");
    };
}

function renderBox(q) {
    if (!q) return `<div class="que-box">No Data</div>`;
    const score = Math.round((q.diem || 0) * 100);
    const c = getColor(score);
    return `
        <div class="que-box">
            <div class="que-name ${getNguHanhClass(q.nguHanh)}">${q.tenS || "?"}</div>
            Họ <span class="${getNguHanhClass(q.nguHanh)}">${q.cung} ${q.nguHanh || ""}</span>
            <div style="font-size:14px"><b>${q.trieu || ""}</b></div>
            <div class="score-wrap">
                <div class="donut" style="background: conic-gradient(${c} ${score}%, #eee ${score}%)">
                    <span style="color:${c}">${score}%</span>
                </div>
            </div>
            <div style="font-size:14px">${q.ghiChu || ""}<br><b>${q.loaiQue || ""}</b></div>
        </div>
    `;
}

function renderResult(res, containerId = "result-display") {
    const container = document.getElementById(containerId);
    if (!res || !res.data) return;
    if (!container) return;

    const info = container.querySelector(".header-info");
    const header = container.querySelector(".header");
    const table = container.querySelector(".table");
    const textarea = container.querySelector(".textResult");

    const d = res.data;
    const ch = [...(d.chinh.data || [])].sort((a, b) => b.hao - a.hao);
    const bi = [...(d.bien.data || [])].sort((a, b) => b.hao - a.hao);
    const haoDong = d.chinh.haoDong || [];
    const t = res.time || {};
    const lunar = t.lunar || {};

    info.innerHTML = `
        <div style="display:flex; flex-direction:column; gap:8px; line-height:1.8; font-size:14px;">
            <div><b>Dương lịch:</b> ${t.hh || ""}h ${t.dd || ""}/${t.mm || ""}/${t.yy || ""} (<b>Âm lịch:</b> ${lunar.am.ngay || ""}/${lunar.am.thang || ""}/${lunar.am.nam || ""})</div>
        </div>
    `;

    header.innerHTML = `${renderBox(d.chinh)} ${renderBox(d.ho)} ${renderBox(d.bien)}`;

    let html = `<thead><tr><th colspan="6">${d.chinh.tenS}</th><th colspan="4">${d.bien.tenS}</th></tr></thead><tbody>`;
    ch.forEach(h => {
        const b = bi.find(x => x.hao == h.hao) || {};
        const isDong = haoDong.includes(h.hao);
        html += `<tr class="${isDong ? "dong" : ""}">
            <td><b>${h.hao}</b></td><td>${h.isThe?"Thế":""}${h.isUng?"Ứng":""}</td><td>${h.lucThan || ""}</td>
            <td><span class="${getNguHanhClass(h.nguHanh)}">${h.tenChi}-${h.nguHanh}</span></td>
            <td>${h.hasPhuc ? `<span style="font-style:italic">${h.hasPhuc}</span>` : ""}</td>
            <td>${h.isKhong ? '<span class="khong-badge">K</span>' : ""}</td>
            <td>${b.lucThan || ""}</td>
            <td><span class="${getNguHanhClass(b.nguHanh)}">${b.tenChi || ""}-${b.nguHanh || ""}</span></td>
            <td>${b.isKhong ? '<span class="khong-badge">K</span>' : ""}</td>
            <td>${b.lucThu || ""}</td>
        </tr>`;
    });
    table.innerHTML = html + "</tbody>";
    textarea.value = res.text || "";
}

function copyTextResult(containerId) {
    const container = document.getElementById(containerId);
    navigator.clipboard.writeText(container.querySelector(".textResult").value).then(() => alert("✅ Đã copy"));
}

/*-- ------------------------------------- FullCustom & SwitchTab ------------------------------------- --*/

function switchTab(pageName) {
    const containerId = `${pageName}-container`;
    // Ẩn tất cả panels
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    // Hiển thị panel được chọn
    const container = document.getElementById(containerId);
    if(container) container.classList.add('active');

    if (pageName === "fullcustom") {
        // Gọi hàm khởi tạo các sự kiện cho form có sẵn trong HTML
        initFullCustom();
    } else if (pageName === "maihoa") {
        createQueLayout(containerId);
        renderResult(RUN_QUE_FULL("MaiHoa", null), containerId);
    }
}
/*
function switchTab(pageName) {
    const containerId = `${pageName}-container`;
    const container = document.getElementById(containerId);
    if (!container) return;

    switch(pageName) {
        case "maihoa":
            createQueLayout(containerId);
            const data = RUN_QUE_FULL("MaiHoa", null);
            data.reverseOrder = true;
            renderResult(data, containerId);
            break;

        case "fullcustom":
            if (container.innerHTML === "") {
                container.innerHTML = `
                    <div id="fullcustom-ui" style="padding:15px;">
                        <input type="checkbox" id="fc-now" checked> Lấy giờ hiện tại<br>
                        <select id="fc-method">
                            <option value="MaiHoa">Mai Hoa</option>
                            <option value="LucHao">Lục Hào</option>
                        </select>
                        
                        <div id="time-inputs" style="margin:10px 0;">
                            <select id="fc-hour"></select>h
                            <select id="fc-day"></select>/<select id="fc-month"></select>/<select id="fc-year"></select>
                        </div>

                        <div id="lucHaoBox" style="display:none; border:1px solid #ccc; padding:10px;">
                            <input type="text" id="fc-up" placeholder="Quẻ Thượng (VD: 1)">
                            <input type="text" id="fc-down" placeholder="Quẻ Hạ (VD: 2)">
                            <div>Chọn hào động:</div>
                            <div id="hao-list">
                                <input type="checkbox" class="hao-cb" value="1">1 <input type="checkbox" class="hao-cb" value="2">2...
                            </div>
                        </div>

                        <button id="btnSubmit" style="margin-top:10px;">Xem Kết Quả</button>
                    </div>



                `;
                initFullCustom(); // Gọi hàm khởi tạo sau khi HTML đã nằm trong DOM
            }
            break;

        case "tarot":
            container.innerHTML = `<div style="padding:20px; text-align:center;">🔮 Nội dung Tarot đang được xây dựng...</div>`;
            break;

        case "decision":
            container.innerHTML = `<div style="padding:20px; text-align:center;">🎡 Nội dung Decision đang được xây dựng...</div>`;
            break;
    }
}
*/
function initFullCustom() {
    initTimeSelects(); toggleTimeInputs(); toggleMethodUI();
    document.getElementById("fc-now").onchange = toggleTimeInputs;
    document.getElementById("fc-method").onchange = toggleMethodUI;
    document.getElementById("btnMaiHoa").onclick = submitMaiHoa;
    document.getElementById("btnLucHao").onclick = submitLucHao;
}

function initTimeSelects() {
    const now = new Date(); const c = document.getElementById("fullcustom-container");
    const h = c.querySelector('#fc-hour'), d = c.querySelector('#fc-day'), m = c.querySelector('#fc-month'), y = c.querySelector('#fc-year');
    [h, d, m, y].forEach(el => el.innerHTML = '');
    for(let i=0;i<24;i++) h.add(new Option(String(i).padStart(2,'0'), i, i===now.getHours(), i===now.getHours()));
    for(let i=1;i<=31;i++) d.add(new Option(i, i, i===now.getDate(), i===now.getDate()));
    for(let i=1;i<=12;i++) m.add(new Option(i, i, i===now.getMonth()+1, i===now.getMonth()+1));
    [now.getFullYear()-1,now.getFullYear(),now.getFullYear()+1].forEach(yr => y.add(new Option(yr, yr, yr===now.getFullYear(), yr===now.getFullYear())));
}

function toggleTimeInputs() {
    const c = document.getElementById("fullcustom-container");
    const disabled = c.querySelector('#fc-now').checked;
    ['fc-hour','fc-day','fc-month','fc-year'].forEach(id => c.querySelector('#'+id).disabled = disabled);
}

function getTimeInput() {
    const c = document.getElementById("fullcustom-container");
    if(c.querySelector('#fc-now').checked) {
        const n = new Date();
        return { dd: n.getDate(), mm: n.getMonth()+1, yy: n.getFullYear(), hh: n.getHours() };
    }
    return { dd: Number(c.querySelector('#fc-day').value), mm: Number(c.querySelector('#fc-month').value), yy: Number(c.querySelector('#fc-year').value), hh: Number(c.querySelector('#fc-hour').value) };
}

function submitMaiHoa() {
    createQueLayout("fullcustom-container");
    renderResult(RUN_QUE_FULL("MaiHoa", getTimeInput()), "fullcustom-container");
}


function toggleMethodUI() {
    const m = document.getElementById('fc-method').value;
    document.getElementById('lucHaoBox').style.display = (m === 'LucHao') ? 'block' : 'none';
    document.getElementById('maiHoaBox').style.display = (m === 'MaiHoa') ? 'block' : 'none';
}


function submitLucHao() {
    const timeInput = getTimeInput();
    // Lấy giá trị từ form của bạn
    const upCode = document.getElementById("fc-up").value;
    const downCode = document.getElementById("fc-down").value;
    // Lấy các hào động đã check
    const haoDong = [...document.querySelectorAll(".hao-cb:checked")].map(el => Number(el.value));

    createQueLayout("fullcustom-container"); // Reset khu vực hiển thị kết quả
    try {
        const res = RUN_QUE_FULL("LucHao", timeInput, { upCode, downCode, haoDong });
        renderResult(res, "fullcustom-container");
    } catch (err) {
        alert(err.message || err);
    }
}
