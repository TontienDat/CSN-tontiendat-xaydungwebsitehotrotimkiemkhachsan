// Dữ liệu khách sạn MẪU. Muốn thêm/sửa khách sạn, chỉnh trong mảng này.
// n: tên | a: khu vực | s: số sao | p: giá/đêm (VND) | r: điểm đánh giá
// rv: số lượt đánh giá | am: tiện nghi | e: biểu tượng | c: màu nền | d: mô tả
const H = [
  {n:"Khách sạn Sông Hậu View", a:"TP. Vĩnh Long", s:4, p:850000, r:8.8, rv:412,
   am:["Wifi","Hồ bơi","Bữa sáng","Bãi đỗ xe","Nhà hàng"], e:"🌅", c:"#2f9bed",
   d:"Phòng nhìn ra sông Cổ Chiên, gần bến Bình Minh và chợ nổi."},

  {n:"Mekong Garden Lodge", a:"Long Hồ", s:3, p:520000, r:8.5, rv:230,
   am:["Wifi","Bữa sáng","Bãi đỗ xe","Xe đạp miễn phí"], e:"🌴", c:"#12a150",
   d:"Nhà nghỉ vườn trái cây, tour thuyền và nhà vườn ngay trước cửa."},

  {n:"Vĩnh Long Riverside Hotel", a:"TP. Vĩnh Long", s:5, p:1650000, r:9.1, rv:598,
   am:["Wifi","Hồ bơi","Bữa sáng","Spa","Bãi đỗ xe","Nhà hàng","Phòng gym"], e:"🏙️", c:"#6c4fe0",
   d:"Khách sạn cao cấp trung tâm thành phố, phòng suite rộng, quầy bar tầng thượng."},

  {n:"Nhà nghỉ Cái Bè Xưa", a:"Bình Minh", s:2, p:280000, r:7.9, rv:88,
   am:["Wifi","Bãi đỗ xe"], e:"🏠", c:"#a07a3d",
   d:"Phòng sạch, giá mềm, thuận tiện đi bến phà và khu công nghiệp."},

  {n:"Bình Minh Palace", a:"Bình Minh", s:4, p:780000, r:8.4, rv:201,
   am:["Wifi","Bữa sáng","Bãi đỗ xe","Nhà hàng","Phòng gym"], e:"🏨", c:"#2f6fed",
   d:"Gần cầu Cần Thơ, phù hợp khách công tác và gia đình."},

  {n:"Tam Bình Homestay", a:"Tam Bình", s:2, p:350000, r:8.6, rv:120,
   am:["Wifi","Bữa sáng","Xe đạp miễn phí"], e:"🛖", c:"#e08a2f",
   d:"Homestay miệt vườn, bữa tối cơm quê và đờn ca tài tử theo yêu cầu."},

  {n:"Trà Vinh Central Hotel", a:"TP. Trà Vinh", s:4, p:720000, r:8.7, rv:340,
   am:["Wifi","Hồ bơi","Bữa sáng","Bãi đỗ xe","Nhà hàng"], e:"🏛️", c:"#0aa5a5",
   d:"Gần Ao Bà Om và chùa Âng, đi bộ ra khu ẩm thực đêm."},

  {n:"Ao Bà Om Boutique", a:"TP. Trà Vinh", s:3, p:480000, r:8.3, rv:156,
   am:["Wifi","Bữa sáng","Bãi đỗ xe"], e:"🌳", c:"#3a9d5d",
   d:"Khách sạn nhỏ yên tĩnh, thiết kế mang phong cách Khmer."},

  {n:"Resort Biển Ba Động", a:"Duyên Hải", s:4, p:1100000, r:8.5, rv:187,
   am:["Wifi","Hồ bơi","Bữa sáng","Bãi đỗ xe","Nhà hàng","Spa"], e:"🏖️", c:"#1890d8",
   d:"Nghỉ dưỡng gần biển Ba Động, có bãi tắm riêng và hải sản tươi."},

  {n:"Bến Tre Coconut Hotel", a:"TP. Bến Tre", s:4, p:900000, r:8.9, rv:365,
   am:["Wifi","Hồ bơi","Bữa sáng","Bãi đỗ xe","Nhà hàng"], e:"🥥", c:"#7dbb2a",
   d:"Giữa xứ dừa, gần chợ và bến đi cồn Phụng, cồn Tàu."},

  {n:"Homestay Cồn Phụng", a:"TP. Bến Tre", s:2, p:420000, r:8.2, rv:97,
   am:["Wifi","Bữa sáng","Xe đạp miễn phí"], e:"🛶", c:"#d9822b",
   d:"Lưu trú trên cù lao, trải nghiệm kẹo dừa và thuyền chèo."},

  {n:"Ba Tri Garden Resort", a:"Ba Tri", s:3, p:610000, r:8.0, rv:74,
   am:["Wifi","Hồ bơi","Bãi đỗ xe","Nhà hàng"], e:"🌿", c:"#2c9a7a",
   d:"Resort vườn rộng, yên tĩnh, gần khu di tích Nguyễn Đình Chiểu."}
];