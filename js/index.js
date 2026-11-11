// Bỏ dấu tiếng Việt để tìm kiếm dễ hơn
function boDau(s){
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/đ/g,"d").toLowerCase();
}

const oTimKiem = document.getElementById("timkiem");
const oKhuVuc  = document.getElementById("khuvuc");
const oLoai    = document.getElementById("loai");
const oSapXep  = document.getElementById("sapxep");
const oDanhSach = document.getElementById("danhsach");
const oKetQua  = document.getElementById("ketqua");
const oBanDo   = document.getElementById("bando");

// Đổ danh sách khu vực vào ô chọn
const cacKhuVuc = [...new Set(KHACHSAN.map(k => k.khuvuc))];
oKhuVuc.innerHTML = "<option value=''>Toàn tỉnh</option>" +
  cacKhuVuc.map(v => "<option>" + v + "</option>").join("");

// Lọc, sắp xếp rồi hiện ra
function hienThi(){
  const tuKhoa = boDau(oTimKiem.value);
  let ds = KHACHSAN.filter(k =>
    boDau(k.ten + " " + k.diachi).includes(tuKhoa) &&
    (oKhuVuc.value === "" || k.khuvuc === oKhuVuc.value) &&
    (oLoai.value === "" || k.loai === oLoai.value)
  );

  if (oSapXep.value === "sao") ds.sort((a, b) => b.sao - a.sao);
  else ds.sort((a, b) => a.ten.localeCompare(b.ten, "vi"));

  oKetQua.textContent = "Tìm thấy " + ds.length + " chỗ lưu trú";

  oDanhSach.innerHTML = ds.map(k => `
    <a class="khachsan" href="hotel.html?id=${k.id}">
      <h3>${k.ten}</h3>
      <p>${k.diachi} – ${k.khuvuc}</p>
      <p><span class="sao">${k.sao} ★</span> ${k.luot} đánh giá · ${k.loai}</p>
    </a>`).join("") || "<p>Không có kết quả.</p>";
}

// Bản đồ Google chung cho cả tỉnh
oBanDo.src = "https://maps.google.com/maps?q=" + encodeURIComponent("khách sạn Vĩnh Long") + "&z=10&hl=vi&output=embed";

[oTimKiem, oKhuVuc, oLoai, oSapXep].forEach(o => o.addEventListener("input", hienThi));
hienThi();