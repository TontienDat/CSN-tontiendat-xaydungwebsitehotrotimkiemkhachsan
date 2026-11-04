// ===== Hàm tiện ích =====
const $ = id => document.getElementById(id);
const fmt = v => v.toLocaleString("vi-VN") + " ₫";
const iso = d => d.toISOString().slice(0, 10);
const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };

// ===== Khởi tạo bộ lọc từ dữ liệu =====
const AMENITIES = [...new Set(H.flatMap(h => h.am))];
const AREAS = [...new Set(H.map(h => h.a))];

AREAS.forEach(a => $("area").add(new Option(a, a)));

$("starf").innerHTML = [5, 4, 3, 2].map(s =>
  `<label class="chk"><input type="checkbox" class="sf" value="${s}">${"★".repeat(s)}</label>`
).join("");

$("amf").innerHTML = AMENITIES.map(a =>
  `<label class="chk"><input type="checkbox" class="af" value="${a}">${a}</label>`
).join("");

// ===== Ngày mặc định: nhận phòng ngày mai, trả phòng ngày kia =====
const today = new Date();
$("cin").value = iso(addDays(today, 1));
$("cout").value = iso(addDays(today, 2));
$("cin").min = iso(today);

// Tính số đêm (tối thiểu 1)
function nights() {
  const n = Math.round((new Date($("cout").value) - new Date($("cin").value)) / 864e5);
  return n > 0 ? n : 1;
}

// ===== Hiển thị danh sách khách sạn =====
function render() {
  $("pv").textContent = "Đến " + fmt(+$("price").value);

  const stars = [...document.querySelectorAll(".sf:checked")].map(x => +x.value);
  const amens = [...document.querySelectorAll(".af:checked")].map(x => x.value);

  // Lọc
  let list = H.filter(h =>
    (!$("area").value || h.a === $("area").value) &&
    h.p <= +$("price").value &&
    (!stars.length || stars.includes(h.s)) &&
    amens.every(a => h.am.includes(a))
  );

  // Sắp xếp
  const sort = $("sort").value;
  if (sort === "pa") list.sort((a, b) => a.p - b.p);
  if (sort === "pd") list.sort((a, b) => b.p - a.p);
  if (sort === "rt") list.sort((a, b) => b.r - a.r);

  $("count").textContent = list.length + " chỗ nghỉ phù hợp";

  $("list").innerHTML = list.length
    ? list.map(h => {
        const i = H.indexOf(h);
        return `
        <article class="card">
          <div class="img" style="background:linear-gradient(135deg,${h.c},${h.c}99)">${h.e}</div>
          <div class="body">
            <h2>${h.n}</h2>
            <div class="stars">${"★".repeat(h.s)}</div>
            <div class="muted">📍 ${h.a}, Vĩnh Long</div>
            <p class="muted" style="margin:6px 0 0">${h.d}</p>
            <div class="tags">${h.am.map(a => `<span class="tag">${a}</span>`).join("")}</div>
          </div>
          <div class="side">
            <div>
              <span class="score">${h.r}</span>
              <div class="muted">${h.rv} đánh giá</div>
            </div>
            <div>
              <div class="price">${fmt(h.p)}</div>
              <div class="muted">/ đêm</div>
              <button class="sel" onclick="book(${i})">Chọn phòng</button>
            </div>
          </div>
        </article>`;
      }).join("")
    : `<div class="empty">Không tìm thấy chỗ nghỉ phù hợp. Hãy thử nới lỏng bộ lọc.</div>`;
}

// ===== Mở hộp thoại đặt phòng =====
function book(i) {
  const h = H[i], n = nights(), total = h.p * n;

  $("dbody").innerHTML = `
    <h2 style="margin:0 0 4px">${h.n}</h2>
    <div class="muted">${h.a}, Vĩnh Long</div>
    <hr style="border:0;border-top:1px solid var(--line);margin:12px 0">
    <div class="row"><span>Nhận phòng</span><b>${$("cin").value}</b></div>
    <div class="row"><span>Trả phòng</span><b>${$("cout").value}</b></div>
    <div class="row"><span>Số khách</span><b>${$("guests").value}</b></div>
    <div class="row"><span>${n} đêm × ${fmt(h.p)}</span><b>${fmt(total)}</b></div>
    <div class="row" style="font-size:17px">
      <span>Tổng cộng</span><b style="color:var(--accent)">${fmt(total)}</b>
    </div>
    <div class="f" style="margin-top:12px"><label>Họ tên</label><input id="bn"></div>
    <div class="f" style="margin-top:8px"><label>Số điện thoại</label><input id="bp" type="tel"></div>
    <div style="display:flex;gap:8px;margin-top:14px">
      <button class="btn" style="flex:1" onclick="confirmBook(${i})">Xác nhận đặt phòng</button>
      <button class="sel" style="background:var(--muted)" onclick="$('dlg').close()">Đóng</button>
    </div>`;

  $("dlg").showModal();
}

// ===== Xác nhận đặt phòng (bản demo, chưa lưu dữ liệu thật) =====
function confirmBook(i) {
  const name = $("bn").value.trim();
  const phone = $("bp").value.trim();

  if (!name || !/^[0-9+ ]{9,13}$/.test(phone)) {
    alert("Vui lòng nhập họ tên và số điện thoại hợp lệ.");
    return;
  }

  const code = "VL" + Math.floor(100000 + Math.random() * 900000);
  const safeName = name.replace(/[<>&]/g, "");   // chống chèn mã HTML

  $("dbody").innerHTML = `
    <div style="text-align:center">
      <div style="font-size:48px">✅</div>
      <h2>Đặt phòng thành công</h2>
      <p>Cảm ơn ${safeName}. Mã đặt phòng của bạn: <b>${code}</b></p>
      <p class="muted">Đây là bản demo, chưa có giao dịch thật.</p>
      <button class="sel" onclick="$('dlg').close()">Đóng</button>
    </div>`;
}

// ===== Gắn sự kiện =====
$("go").addEventListener("click", render);
$("price").addEventListener("input", render);
$("sort").addEventListener("input", render);
$("area").onchange = render;
document.querySelectorAll(".sf,.af").forEach(x => x.onchange = render);

// Ngày trả phòng luôn sau ngày nhận phòng
$("cin").onchange = () => {
  if ($("cout").value <= $("cin").value) {
    $("cout").value = iso(addDays(new Date($("cin").value), 1));
  }
};

// Nút xóa bộ lọc
$("reset").onclick = () => {
  document.querySelectorAll(".sf,.af").forEach(x => x.checked = false);
  $("price").value = 2000000;
  $("area").value = "";
  $("sort").value = "rec";
  render();
};

// Hiển thị lần đầu
render();