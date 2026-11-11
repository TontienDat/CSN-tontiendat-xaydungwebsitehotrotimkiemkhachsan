// Lấy id từ địa chỉ: hotel.html?id=3
const id = Number(new URLSearchParams(location.search).get("id"));
const ks = KHACHSAN.find(k => k.id === id);

if (!ks) {
  document.getElementById("thongtin").innerHTML =
    "<p>Không tìm thấy khách sạn. <a href='index.html'>Về trang chủ</a></p>";
} else {
  document.title = ks.ten;

  const sdtSo = ks.sdt.replace(/[^\d+]/g, "");
  document.getElementById("thongtin").innerHTML = `
    <h2>${ks.ten}</h2>
    <p>${ks.diachi} – ${ks.khuvuc}</p>
    <p><span class="sao">${ks.sao} ★</span> ${ks.luot} đánh giá · ${ks.loai}</p>
    <p>
      <a class="btn vang" href="tel:${sdtSo}">Gọi ${ks.sdt}</a>
      <a class="btn" target="_blank" href="https://www.google.com/maps/dir/?api=1&destination=${ks.lat},${ks.lng}">Chỉ đường</a>
    </p>`;

  // Bản đồ Google đúng vị trí khách sạn
  document.getElementById("bando").src =
    "https://maps.google.com/maps?q=" + ks.lat + "," + ks.lng + "&z=16&hl=vi&output=embed";

  // Ngày mặc định: hôm nay và ngày mai
  const homNay = new Date().toISOString().slice(0, 10);
  const ngayMai = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  document.getElementById("ngayden").value = homNay;
  document.getElementById("ngaydi").value = ngayMai;

  // Nút sao chép yêu cầu đặt phòng
  document.getElementById("nutcopy").onclick = function () {
    const v = id => document.getElementById(id).value;
    if (v("ngaydi") <= v("ngayden")) {
      document.getElementById("thongbao").textContent = "Ngày trả phòng phải sau ngày nhận phòng.";
      return;
    }
    const noiDung =
      "Xin chào " + ks.ten + ", tôi muốn đặt phòng:\n" +
      "- Nhận phòng: " + v("ngayden") + "\n" +
      "- Trả phòng: " + v("ngaydi") + "\n" +
      "- " + v("sophong") + " phòng, " + v("songuoi") + " khách\n" +
      "- Tên: " + (v("hoten") || "(chưa nhập)") + "\n" +
      "- SĐT: " + (v("sdtkhach") || "(chưa nhập)") + "\n" +
      (v("ghichu") ? "- Ghi chú: " + v("ghichu") + "\n" : "") +
      "Xin báo giúp tôi giá và tình trạng phòng. Cảm ơn!";
    navigator.clipboard.writeText(noiDung)
      .then(() => document.getElementById("thongbao").textContent = "Đã sao chép! Hãy gửi cho khách sạn.")
      .catch(() => prompt("Sao chép nội dung này:", noiDung));
  };
}