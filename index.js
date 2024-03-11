console.log("tôi là external!!!");
// ------------------------------ biến (Variable)---------------------
// lưu ý 1 : tên biến không được phép ghi số ở đầu dòng
// lưu ý 2 : tên biến không được có khoảng cách
// Lưu ý 3 : tên biến viết theo kiểu camel case
// lưu ý 4 : tên biến phải có ý nghĩa
// lưu ý 5 : tên biến phân biệt chữ hoa với chữ thường
// lưu ý 6 : tên biến không được đặt trùng với các từ khóa đặt biệt
// ------------------------------ Kết thúc ---------------------------
/**Tôi đang comment nhiều dòng
 * dòng 1
 * dòng 2
 * dòng 3
 * -------------------------------------------------------------------
 */
var tuoiMe = 49;
var contentNumber = "tôi là màu cam";
var contentnumber = "tôi là màu đỏ"
console.log(contentNumber);
console.log(contentNumber);
console.log(contentNumber);


//---------------------- kiểu dữ liệu---------------------------------
// kiểu dữ liệu chuổi
var hoTen = "Tấn Khải";
// kiểu dữ liệu number
var diemToan = 8;
// phương pháp cộng chuỗi
console.log(hoTen + " đi học được có " + diemToan + "đ");
// kiểu dữ liệu luận lý
var checkPhat = false;
var checkPhat_img = true;
// toán tử
var  tienLuong = (500000*28 - 5*300000 + 1000000)/28;
console.log(tienLuong);
//  lưu ý về phép tăng 1 và giảm 1: Nếu như phép tăng 1 hoặc giảm 1
//  được ghi ở sau biến thì sau khi đi qua đoạn code đó,
//  mới thực hiện tăng 1 đơn vị, còn nếu được ghi ở trước thì
//  sẽ tăng hoặc giảm 1 đơn vị ngay tai vị trí đó
var ketQuaDu = (50*34 + 265 - 367)% 2;
console.log(ketQuaDu);
var diemVan= 5;
var ketQua = ++diemVan + 8;
console.log(ketQua);
console.log(diemVan);
var diemHoa = 2;
diemHoa = 9;
console.log(diemHoa);
// các công thức +=, -=, *=, /= sẽ giúp gộp giá trị vào biến
var diemTrungBinh = diemHoa;
diemTrungBinh = (diemTrungBinh + diemToan + diemVan)/3;
diemTrungBinh -=5;
console.log(diemTrungBinh);
// Phép toán mới
var a = 3;
var b = 4;
// Hằng số  ~ const



//-------------------------- kết thúc------------------------------------------------------
// bài tập tính tiền vé xem phim

// 1 rạp vé xem phim có 2 xuất chiếu là trẻ em và người lớn
// với người lướn thì vé xem phim là 75000
// con đối với trẻ em thì vé xem phi là 50000
// Hãy tính toán giúp rạp vé xem nguyên toaang nay có 45 người lớn và
//  26 trẻ em xem phim, vậy số tiền nhận được là bao nhiêu
/**Phân tính mô hình 3 khối
 * Bước 1: phân tích đầu vào:
 * - có 2 loại xuất chiếu và giá tiền cho mỗi xuấ laoij chiếu là 75k và 50k
 * - Tuần này có 45 người lớn và 26 trẻ em đi xem phim
 * Bước 2: các bước xử lý dữ liệu để xuất kết quả:
 * - Tạo 1 biến chứa giá trị tổng tiền vé
 * - Tính xem với suất chiếu người lớn, tổng tiền nhận được là = số người lớn  * 75k
 * - Tính xem với suất chiếu trẻ em, tổng tiền nhận được là = số trẻ em  * 50k
 * 
 * 
 * 
 */
var soTienThuDUoc = 0;
const giaVeNguoiLon = 75000;
const giaVeTreEm = 50000;
var soNguoiLon = 45;
var soTreEM = 26;
soTienThuDuoc = giaVeNguoiLon*soNguoiLon + giaVeTreEm*soTreEM;
console.log("tổng tiền vé bán được trong tuần là " + soTienThuDuoc + " nghìn đồng!")










