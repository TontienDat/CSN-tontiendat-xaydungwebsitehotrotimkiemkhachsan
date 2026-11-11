// Dữ liệu lấy từ Google Maps (Google Places) ngày 11/11/2026
const KHACHSAN = [
 {id:1, ten:"The Grand Hotel Vĩnh Long", diachi:"67F Võ Văn Kiệt, Long Châu", lat:10.2514866, lng:105.9429471, sao:4.7, luot:64,  sdt:"+84 786 796 339", khuvuc:"TP. Vĩnh Long", loai:"Khách sạn"},
 {id:2, ten:"Khách sạn Sài Gòn – Vĩnh Long", diachi:"02 Trưng Nữ Vương, Long Châu", lat:10.2560957, lng:105.9688998, sao:4.2, luot:669, sdt:"+84 270 3879 988", khuvuc:"TP. Vĩnh Long", loai:"Khách sạn"},
 {id:3, ten:"Phuoc Thanh IV Hotel", diachi:"116B, 120 Nguyễn Huệ, Long Châu", lat:10.24755, lng:105.959883, sao:4.3, luot:339, sdt:"+84 270 3868 779", khuvuc:"TP. Vĩnh Long", loai:"Khách sạn"},
 {id:4, ten:"Ruby Hotel Vĩnh Long", diachi:"255A Nguyễn Văn Thiệt", lat:10.2407797, lng:105.9727183, sao:4.3, luot:166, sdt:"+84 942 086 080", khuvuc:"TP. Vĩnh Long", loai:"Khách sạn"},
 {id:5, ten:"Van Trang Garden Hotel 2", diachi:"27C/7 Phan Văn Đáng, Tân Hạnh", lat:10.2417342, lng:105.940367, sao:4.3, luot:220, sdt:"+84 707 664 664", khuvuc:"TP. Vĩnh Long", loai:"Khách sạn"},
 {id:6, ten:"Phước Hưng 2", diachi:"44A Trưng Nữ Vương, Long Châu", lat:10.2545765, lng:105.970343, sao:4.3, luot:91, sdt:"+84 270 2208 888", khuvuc:"TP. Vĩnh Long", loai:"Khách sạn"},
 {id:7, ten:"Phước Hưng 3", diachi:"40 Trưng Nữ Vương, Long Châu", lat:10.2547297, lng:105.9702, sao:4.3, luot:70, sdt:"+84 270 2207 979", khuvuc:"TP. Vĩnh Long", loai:"Khách sạn"},
 {id:8, ten:"One Hotel – Massage Tokuda", diachi:"34 Trưng Nữ Vương, Long Châu", lat:10.2549271, lng:105.9700433, sao:4.0, luot:46, sdt:"+84 270 3888 966", khuvuc:"TP. Vĩnh Long", loai:"Khách sạn"},
 {id:9, ten:"Paris Hôtel & Café", diachi:"Trần Phú, Phước Hậu", lat:10.2307185, lng:105.98762, sao:4.4, luot:113, sdt:"+84 938 126 216", khuvuc:"Long Hồ", loai:"Khách sạn"},
 {id:10, ten:"Bình An Village", diachi:"394E Phước Ngươn A, Phước Hậu", lat:10.2305664, lng:105.9830584, sao:4.8, luot:75, sdt:"+84 773 507 078", khuvuc:"Long Hồ", loai:"Homestay"},
 {id:11, ten:"Mekong Riverside Homestay An Bình", diachi:"145a ấp Bình Lương, An Bình", lat:10.2631267, lng:105.9618374, sao:4.5, luot:123, sdt:"+84 907 747 305", khuvuc:"Long Hồ", loai:"Homestay"},
 {id:12, ten:"Phuong Thao Homestay", diachi:"An Thanh, An Bình", lat:10.2716647, lng:105.9825606, sao:4.2, luot:203, sdt:"+84 908 195 350", khuvuc:"Long Hồ", loai:"Homestay"},
 {id:13, ten:"Khách sạn Triều Thuận Thành", diachi:"12 tổ 12, khóm 1, Cái Vồn", lat:10.0704615, lng:105.8218181, sao:4.1, luot:52, sdt:"+84 270 3767 767", khuvuc:"Bình Minh", loai:"Khách sạn"},
 {id:14, ten:"Nhà nghỉ Gạo", diachi:"Đường Nguyễn Văn Tồn, Bình Tân", lat:10.1060774, lng:105.7575601, sao:5.0, luot:144, sdt:"+84 939 048 496", khuvuc:"Bình Tân", loai:"Nhà nghỉ"},
 {id:15, ten:"Khách sạn Như Ý – Vũng Liêm", diachi:"Trung Thanh, Vũng Liêm", lat:10.0808498, lng:106.1913535, sao:4.2, luot:95, sdt:"+84 907 366 225", khuvuc:"Vũng Liêm", loai:"Khách sạn"},
 {id:16, ten:"Khách sạn Trung Tính", diachi:"100 A1, khu 2 thị trấn Trà Ôn", lat:9.9641877, lng:105.9228009, sao:2.8, luot:9, sdt:"+84 385 553 167", khuvuc:"Trà Ôn", loai:"Khách sạn"},
 {id:17, ten:"Homestay Bảo Bình", diachi:"156 Bến Tre", lat:10.2450554, lng:106.3304515, sao:4.7, luot:120, sdt:"+84 938 855 951", khuvuc:"Bến Tre (cũ)", loai:"Homestay"}
];