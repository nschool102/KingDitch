
// Dữ liệu DECISION MAKER
const decisionDetails = [
  {ID:1, detail: "Bạn cần sớm đưa ra quyết định"},
{ID:2, detail: "Bạn cần thích nghi"},
{ID:3, detail: "Bạn sẽ hạnh phúc với những gì đã làm"},
{ID:4, detail: "Bạn sẽ phải thỏa hiệp"},
{ID:5, detail: "Bình tĩnh và suy nghĩ cẩn trọng"},
{ID:6, detail: "Buông bỏ và hòa vào dòng chảy"},
{ID:7, detail: "Các sự kiện đáng kinh ngạc có thể xảy ra"},
{ID:8, detail: "Cái gì nhanh đến thì nhanh đi"},
{ID:9, detail: "Cam kết càng mạnh mẽ, càng dễ thành công"},
{ID:10, detail: "Can đảm lên!"},
{ID:11, detail: "Cân nhắc lại"},
{ID:12, detail: "Chắc chắn"},
{ID:13, detail: "Chuyện không như bạn nghĩ"},
{ID:14, detail: "Có!"},
{ID:15, detail: "Cứ đặt cược vào nó"},
{ID:16, detail: "Cứ đợi xem chuyện gì sẽ xảy ra"},
{ID:17, detail: "Cứ tận hưởng"},
{ID:18, detail: "Cứ tin vào trực giác"},
{ID:19, detail: "Cười về điều đó"},
{ID:20, detail: "Đặt 1 mục tiêu mới"},
{ID:21, detail: "Điểm yếu của bạn sẽ bộc lộ"},
{ID:22, detail: "Điều đó ảnh hưởng đến cách người khác nhìn nhận bạn"},
{ID:23, detail: "Điều tốt đẹp sẽ đến vào lúc bạn không mong đợi"},
{ID:24, detail: "Đó là 1 sự lãng phí tiền bạc"},
{ID:25, detail: "Đó là điều hiển nhiên phải làm"},
{ID:26, detail: "Đôi khi cần tham vọng hơn"},
{ID:27, detail: "Dù bạn làm gì, hệ quả cũng lâu dài"},
{ID:28, detail: "Đừng bỏ qua điều hiển nhiên"},
{ID:29, detail: "Đừng cố chống lại sự thay đổi"},
{ID:30, detail: "Đừng để ý kiến của người khác ảnh hưởng"},
{ID:31, detail: "Đừng đổ lỗi cho chính mình"},
{ID:32, detail: "Đừng lo lắng"},
{ID:33, detail: "Đừng quá thận trọng"},
{ID:34, detail: "Đừng tò mò"},
{ID:35, detail: "Giữ nó cho riêng bạn"},
{ID:36, detail: "Giữ thái độ tích cực"},
{ID:37, detail: "Hạ thấp cái tôi và bạn sẽ được nhiều hơn mất"},
{ID:38, detail: "Hãy chờ đợi"},
{ID:39, detail: "Hãy quyết đoán"},
{ID:40, detail: "Hãy quyết liệt"},
{ID:41, detail: "Không thuận lợi ở thời điểm này"},
{ID:42, detail: "Không!"},
{ID:43, detail: "Kiểm soát cảm xúc"},
{ID:44, detail: "Kiên trì sẽ được đền đáp"},
{ID:45, detail: "Loại bỏ giải pháp đầu tiên"},
{ID:46, detail: "Mặc kệ đi"},
{ID:1, detail: "Mở lòng đón nhận"},
{ID:48, detail: "Mọi thứ tiến triển tốt"},
{ID:49, detail: "Một điều mới mẻ sẽ tới"},
{ID:50, detail: "Muộn còn hơn không"},
{ID:51, detail: "Nâng cấp bằng mọi cách bạn có thể"},
{ID:52, detail: "Nghĩ thoáng ra"},
{ID:53, detail: "Ngưng phán xét"},
{ID:54, detail: "Niềm vui chỉ là tạm thời"},
{ID:55, detail: "Rắc rối đã qua"},
{ID:56, detail: "Rủi ro rất có thể xảy ra"},
{ID:57, detail: "Sắp có bước tiến mới"},
{ID:58, detail: "Sẽ ổn thôi"},
{ID:59, detail: "Tận dụng trí tưởng tượng"},
{ID:60, detail: "Tập trung vào điều thực sự quan trọng"},
{ID:61, detail: "Thời điểm hoàn hảo"},
{ID:62, detail: "Thời điểm tốt để bắt đầu những thứ mới mẻ"},
{ID:63, detail: "Thứ bạn kì vọng sẽ khiến bạn thất vọng"},
{ID:64, detail: "Tìm kiếm sự thật"},
{ID:65, detail: "Tìm kiếm thêm các lựa chọn khác"},
{ID:66, detail: "Tốt hơn là không kì vọng"},
{ID:67, detail: "Tốt hơn là tiếp tục chờ đợi"},
{ID:68, detail: "Trong vài tuần tới"},
{ID:69, detail: "Trừ khi bạn chỉ có 1 mình"},
{ID:70, detail: "Tùy vào bạn"},
{ID:71, detail: "Ưu tiên những gì quan trọng"},
{ID:72, detail: "Vượt tầm kiểm soát của bạn"},
{ID:73, detail: "Xem xét lại cách tiếp cận của bạn"},
{ID:74, detail: "Không thể chấp nhận"},
{ID:75, detail: "Chấp nhận thôi"},
{ID:76, detail: "Đừng cứng nhắc"},
{ID:77, detail: "Đừng nhu nhược"},
{ID:78, detail: "Ai cũng như ai"},
{ID:79, detail: "Nên ưu tiên"},
{ID:80, detail: "Từ bỏ là tốt"},
{ID:81, detail: "Theo đuổi tới cùng"},
{ID:82, detail: "Rõ trước mắt"},
{ID:83, detail: "Suy nghĩ thật kĩ"},
{ID:84, detail: "Phải đánh đổi"},
{ID:85, detail: "Không cần đánh đổi"},
{ID:86, detail: "Thận trọng"},
{ID:87, detail: "Phụ thuộc chính bạn"},
{ID:88, detail: "Tìm sự giúp đỡ"},
{ID:89, detail: "Cần cố gắn thêm"},
{ID:90, detail: "Đã quá đủ"},
{ID:91, detail: "Bạn đủ sức"},
{ID:92, detail: "Bạn không đủ sức"},
{ID:93, detail: "Tin vào chính mình"},
{ID:94, detail: "Lắng nghe người khác"},
{ID:95, detail: "Không cần thích nghi"},
{ID:96, detail: "Có thể can thiệp"},
{ID:97, detail: "Không thể làm gì"},
{ID:98, detail: "Có còn hơn không"},
{ID:99, detail: "Không đáng để thử"},
{ID:100, detail: "Chắc chắn đúng"},
{ID:101, detail: "Hình như chưa đúng"},
{ID:102, detail: "Sẽ có rủi ro"},
{ID:103, detail: "Sẽ thành công"},
{ID:104, detail: "Vui lên đi"},
{ID:105, detail: "Đừng vui sớm quá"},
{ID:106, detail: "Suy nghĩ tích cực"},
{ID:107, detail: "Đừng quá lạc quan"},
{ID:108, detail: "Sẽ rất lâu"},
{ID:109, detail: "Trong thời gian ngắn"},
{ID:110, detail: "Cần can đảm hơn"},
{ID:111, detail: "Đừng liều lĩnh"},
{ID:112, detail: "Vô ích thôi"},
{ID:113, detail: "Cố gắng một chút"},
{ID:114, detail: "Chú ý điều nhỏ"},
{ID:115, detail: "Đừng quá bận tâm"},
{ID:116, detail: "Bạn sẽ thích"},
{ID:117, detail: "Bạn sẽ không thích"},
{ID:118, detail: "Cứ tận hưởng"},
{ID:119, detail: "Nên lo lắng"},
{ID:120, detail: "Sẽ còn thú vị"},
{ID:121, detail: "Niềm vui ngắn ngủi"},
{ID:122, detail: "Nhanh lên"},
{ID:123, detail: "Chậm mà chắc"},
{ID:124, detail: "Tốt"},
{ID:125, detail: "Xấu"},
{ID:126, detail: "Sẽ như mong đợi"},
{ID:127, detail: "Không như mong đợi"},
{ID:128, detail: "Kiên trì một chút"},
{ID:129, detail: "Ngay và liền"},
{ID:130, detail: "Đừng quá tự tin"},
{ID:131, detail: "Đừng quá tự ti"},
{ID:132, detail: "Thuận theo chiều gió"},
{ID:133, detail: "Đừng nghi ngờ"},
{ID:134, detail: "Đừng tin tuyệt đối"},
{ID:135, detail: "Hãy thư giãn nào"},
{ID:136, detail: "Chuẩn bị tinh thần"},
{ID:137, detail: "Cần nhẹ nhàng"},
{ID:138, detail: "Quyết liệt"},
{ID:139, detail: "Mọi thứ sẽ tốt"},
{ID:140, detail: "Vẫn không ổn"},
{ID:141, detail: "Sao cũng được"},
{ID:142, detail: "Tự lượng sức mình"},
{ID:143, detail: "Đừng chống cự"},
{ID:144, detail: "Phải cố gắng"},
{ID:145, detail: "Suy nghĩ kĩ"},
{ID:146, detail: "Không cần suy nghĩ"},
{ID:147, detail: "Chậm rãi thư thả"},
{ID:148, detail: "Càng nhanh càng tốt"},
{ID:149, detail: "Tìm mục tiêu mới"},
{ID:150, detail: "Kiên nhẫn"},
{ID:151, detail: "Không cần ý kiến"},
{ID:152, detail: "Cần quyết định"},
{ID:153, detail: "Có chút hi vọng"},
{ID:154, detail: "Không có hi vọng"},
{ID:155, detail: "Không phải sự thật"},
{ID:156, detail: "Đã là sự thật"},
{ID:157, detail: "Không phải lúc này"},
{ID:158, detail: "Thời điểm tốt"},
{ID:159, detail: "Đừng tìm hiểu"},
{ID:160, detail: "Tìm hiểu kĩ"},
{ID:161, detail: "Cẩn trọng"},
{ID:162, detail: "Đừng quá nghi ngờ"},
{ID:163, detail: "Nằm ngoài tầm tay"},
{ID:164, detail: "Cố gắng sẽ được"},
{ID:165, detail: "Giữ lại"},
{ID:166, detail: "Bỏ đi"},
{ID:167, detail: "Không hợp lí"},
{ID:168, detail: "Khá phù hợp"},
{ID:169, detail: "Chưa chắc không"},
{ID:170, detail: "Không"},
{ID:171, detail: "Thay đổi bản thân"},
{ID:172, detail: "Hãy là chính mình"},
{ID:173, detail: "Cần quan tâm hơn"},
{ID:174, detail: "Bạn sai rồi"},
{ID:175, detail: "Bạn làm đúng"},
{ID:176, detail: "Không phải tại bạn"},
{ID:177, detail: "Xem lại bản thân"},
{ID:178, detail: "Thử suy nghĩ xem"},
{ID:179, detail: "Đừng suy nghĩ nữa"},
{ID:180, detail: "Cứng rắn lên"},
{ID:181, detail: "Sẽ phải thỏa hiệp"},
{ID:182, detail: "Chắc chắn"},
{ID:183, detail: "Không chắc chắn"},
{ID:184, detail: "Có nhiều khó khăn"},
{ID:185, detail: "Sẽ dễ dàng"},
{ID:186, detail: "Chưa có thay đổi"},
{ID:187, detail: "Sắp có thay đổi"},
{ID:188, detail: "Trong dự tính"},
{ID:189, detail: "Không lường trước được"},
{ID:190, detail: "Rất cần"},
{ID:191, detail: "Không cần"},
{ID:192, detail: "Ảnh hưởng lâu dài"},
{ID:193, detail: "Không quá quan trọng"},
{ID:194, detail: "Dồn hết sức"},
{ID:195, detail: "Thoải mái đi nào"},
{ID:196, detail: "Điều tốt chưa đến"},
{ID:197, detail: "Đây là tốt nhất"},
{ID:198, detail: "Lúc này chưa"},
{ID:199, detail: "Ngay bây giờ"},
{ID:200, detail: "Đừng chờ đợi"},
{ID:201, detail: "Tiếp tục chờ đợi"},
{ID:202, detail: "Đừng nghĩ quá"},
{ID:203, detail: "Cần nghĩ xa hơn"},
{ID:204, detail: "Bằng mọi cách"},
{ID:205, detail: "Đừng quá kiên quyết"},
{ID:206, detail: "Sẽ có chuyện lạ"},
{ID:207, detail: "Không có gì lạ"},
{ID:208, detail: "Đừng quá cảm tính"},
{ID:209, detail: "Tin vào trực giác"},
{ID:210, detail: "Không có giá trị"},
{ID:211, detail: "Khó nhưng đáng giá"}
];

// Dữ liệu Can Chi
const THIEN_CAN_ARRAY = [
  {ten: "Giáp", so:1, nguHanh: "Mộc"}, {ten: "Ất", so:2, nguHanh: "Mộc"},
  {ten: "Bính", so:3, nguHanh: "Hỏa"}, {ten: "Đinh", so:4, nguHanh: "Hỏa"},
  {ten: "Mậu", so:5, nguHanh: "Thổ"}, {ten: "Kỉ", so:6, nguHanh: "Thổ"},
  {ten: "Canh", so:7, nguHanh: "Kim"}, {ten: "Tân", so:8, nguHanh: "Kim"},
  {ten: "Nhâm", so:9, nguHanh: "Thủy"}, {ten: "Quí", so:10, nguHanh: "Thủy"}
];

const DIA_CHI_ARRAY = [
  {ten: "Tí", nguHanh: "Thủy", so: 1}, {ten: "Sửu", nguHanh: "Thổ", so: 2},
  {ten: "Dần", nguHanh: "Mộc", so: 3}, {ten: "Mão", nguHanh: "Mộc", so: 4},
  {ten: "Thìn", nguHanh: "Thổ", so: 5}, {ten: "Tị", nguHanh: "Hỏa", so: 6},
  {ten: "Ngọ", nguHanh: "Hỏa", so: 7}, {ten: "Mùi", nguHanh: "Thổ", so: 8},
  {ten: "Thân", nguHanh: "Kim", so: 9}, {ten: "Dậu", nguHanh: "Kim", so: 10},
  {ten: "Tuất", nguHanh: "Thổ", so: 11}, {ten: "Hợi", nguHanh: "Thủy", so: 12}
];

const BAT_QUAI_OBJECT = {
  1: {code: "111", ten: "CÀN", tuong: "Thiên", nguHanh: "Kim", chi1: "Tí", chi2: "Dần", chi3: "Thìn", chi4: "Ngọ", chi5: "Thân", chi6: "Tuất" },
  2: {code: "110", ten: "ĐOÀI", tuong: "Trạch", nguHanh: "Kim", chi1: "Tị", chi2: "Mão", chi3: "Sửu", chi4: "Hợi", chi5: "Dậu", chi6: "Mùi" },
  3: {code: "101", ten: "LI", tuong: "Hỏa", nguHanh: "Hỏa", chi1: "Mão", chi2: "Sửu", chi3: "Hợi", chi4: "Dậu", chi5: "Mùi", chi6: "Tị" },
  4: {code: "100", ten: "CHẤN", tuong: "Lôi", nguHanh: "Mộc", chi1: "Tí", chi2: "Dần", chi3: "Thìn", chi4: "Ngọ", chi5: "Thân", chi6: "Tuất" },
  5: {code: "011", ten: "TỐN", tuong: "Phong", nguHanh: "Mộc", chi1: "Sửu", chi2: "Hợi", chi3: "Dậu", chi4: "Mùi", chi5: "Tị", chi6: "Mão" },
  6: {code: "010", ten: "KHẢM", tuong: "Thủy", nguHanh: "Thủy", chi1: "Dần", chi2: "Thìn", chi3: "Ngọ", chi4: "Thân", chi5: "Tuất", chi6: "Tí" },
  7: {code: "001", ten: "CẤN", tuong: "Sơn", nguHanh: "Thổ", chi1: "Thìn", chi2: "Ngọ", chi3: "Thân", chi4: "Tuất", chi5: "Tí", chi6: "Dần" },
  8: {code: "000", ten: "KHÔN", tuong: "Địa", nguHanh: "Thổ", chi1: "Mùi", chi2: "Tị", chi3: "Mão", chi4: "Sửu", chi5: "Hợi", chi6: "Dậu" }
};

const QUE_DICH_OBJECT = {
"111111": {tenS: "THUẦN CÀN", cung: "CÀN", nguHanh: "KIM", trieu: "KHỐN LONG ĐẮC THỦY", the:6, ung: 3, loaiQue: "LỤC XUNG", diem: 0.95, ghiChu: "Đại cát, sức mạnh sáng tạo, nhưng cần biết cương nhu", haoPhuc: ""},
"111110": {tenS: "CẤU", cung: "CÀN", nguHanh: "KIM", trieu: "THA HƯƠNG NGỘ HỮU", the:1, ung: 4, loaiQue: "", diem: 0.52, ghiChu: "Gặp gỡ – trung tính, cần thận trọng", haoPhuc: "2-Tài-Dần-Mộc"},
"111100": {tenS: "ĐỘN", cung: "CÀN", nguHanh: "KIM", trieu: "NÙNG VÂN TẾ NHẬT", the:2, ung: 5, loaiQue: "", diem: 0.5, ghiChu: "Thoái lui – trung tính, cát nếu lui đúng lúc", haoPhuc: "1-Tử-Tí-Thủy|2-Tài-Dần-Mộc"},
"111000": {tenS: "BĨ", cung: "CÀN", nguHanh: "KIM", trieu: "HỔ LẠC HÀM KHANH", the:3, ung: 6, loaiQue: "LỤC HỢP", diem: 0.1, ghiChu: "Đại hung, bế tắc, âm dương cách biệt", haoPhuc: "1-Tử-Tí-Thủy"},
"110000": {tenS: "QUÁN", cung: "CÀN", nguHanh: "KIM", trieu: "HẠN BỒNG PHÙNG HÀ", the:4, ung: 1, loaiQue: "", diem: 0.6, ghiChu: "Quan sát, chờ thời – trung tính, tùy hành động", haoPhuc: "1-Tử-Tí-Thủy|5-Huynh-Thân-Kim"},
"100000": {tenS: "BÁC", cung: "CÀN", nguHanh: "KIM", trieu: "ƯNG THUỘC ĐÔNG LÂM", the:5, ung: 2, loaiQue: "", diem: 0.15, ghiChu: "Suy tàn, bóc lột – đại hung, chỉ còn chờ thời", haoPhuc: "5-Huynh-Thân-Kim"},
"101000": {tenS: "TẤN", cung: "CÀN", nguHanh: "KIM", trieu: "SỬ ĐỊA ĐẮC KIM", the:4, ung: 1, loaiQue: "DU HỒN", diem: 0.85, ghiChu: "Tiến lên, được quý nhân – đại cát", haoPhuc: "1-Tử-Tí-Thủy"},
"101111": {tenS: "ĐẠI HỮU", cung: "CÀN", nguHanh: "KIM", trieu: "NHUYỄN MỘC NÔ TƯỚC", the:3, ung: 6, loaiQue: "QUI HỒN", diem: 0.9, ghiChu: "Giàu có, thành tựu, đại cát", haoPhuc: ""},
"011011": {tenS: "THUẦN ĐOÀI", cung: "ĐOÀI", nguHanh: "KIM", trieu: "LƯỠNG TRẠCH TƯƠNG TỨ", the:6, ung: 3, loaiQue: "LỤC XUNG", diem: 0.75, ghiChu: "Vui vẻ, hòa hợp – cát", haoPhuc: ""},
"011010": {tenS: "KHỐN", cung: "ĐOÀI", nguHanh: "KIM", trieu: "LOÁT HÃN DU THÊ", the:1, ung: 4, loaiQue: "LỤC HỢP", diem: 0.12, ghiChu: "Khốn đốn, kiệt sức – đại hung", haoPhuc: ""},
"011000": {tenS: "TỤY", cung: "ĐOÀI", nguHanh: "KIM", trieu: "NGỰ HÓA VI LONG", the:2, ung: 5, loaiQue: "", diem: 0.86, ghiChu: "Tụ họp, sum vầy – đại cát", haoPhuc: ""},
"011100": {tenS: "HÀM", cung: "ĐOÀI", nguHanh: "KIM", trieu: "NANH NHA XUẤT THỔ", the:3, ung: 6, loaiQue: "", diem: 0.8, ghiChu: "Cảm ứng, tình cảm – đại cát cho quan hệ", haoPhuc: "2-Tài-Mão-Mộc"},
"010100": {tenS: "KIỂN", cung: "ĐOÀI", nguHanh: "KIM", trieu: "VŨ TUYẾT TẢI ĐỔ", the:4, ung: 1, loaiQue: "", diem: 0.22, ghiChu: "Gian nan, khó khăn trước mắt – hung", haoPhuc: "2-Tài-Mão-Mộc"},
"000100": {tenS: "KHIÊM", cung: "ĐOÀI", nguHanh: "KIM", trieu: "NHỊ NHÂN PHÂN KIM", the:5, ung: 2, loaiQue: "", diem: 0.96, ghiChu: "Cực cát, khiêm tốn thì mọi việc hanh thông", haoPhuc: "2-Tài-Mão-Mộc"},
"001100": {tenS: "TIỂU QUÁ", cung: "ĐOÀI", nguHanh: "KIM", trieu: "PHI ĐIỂU DI ÂM", the:4, ung: 1, loaiQue: "DU HỒN", diem: 0.38, ghiChu: "Lỗi nhỏ – hung nhẹ, cẩn thận", haoPhuc: "2-Tài-Mão-Mộc|4-Tử-Hợi-Thủy"},
"001011": {tenS: "QUI MUỘI", cung: "ĐOÀI", nguHanh: "KIM", trieu: "DUYÊN MỘC CẦU NGƯ", the:3, ung: 6, loaiQue: "QUI HỒN", diem: 0.45, ghiChu: "Gái về nhà chồng – trung tính, dễ không bền", haoPhuc: "4-Tử-Hợi-Thủy"},
"101101": {tenS: "THUẦN LI", cung: "LI", nguHanh: "HỎA", trieu: "THIÊN QUAN TỨ PHƯỚC", the:6, ung: 3, loaiQue: "LỤC XUNG", diem: 0.75, ghiChu: "Sáng suốt, nương tựa – cát", haoPhuc: ""},
"101100": {tenS: "LỮ", cung: "LI", nguHanh: "HỎA", trieu: "TỨC ĐIỂU PHẪN SÀO", the:1, ung: 4, loaiQue: "LỤC HỢP", diem: 0.35, ghiChu: "Lữ khách, xa nhà – hung nhẹ, cẩn thận", haoPhuc: "1-Phụ-Mão-Mộc|3-Quan-Hợi-Thủy"},
"101110": {tenS: "ĐỈNH", cung: "LI", nguHanh: "HỎA", trieu: "NGƯ ÔNG ĐẮC LỢI", the:2, ung: 5, loaiQue: "", diem: 0.83, ghiChu: "Vững bền, đổi mới – đại cát", haoPhuc: "1-Phụ-Mão-Mộc"},
"101010": {tenS: "VỊ TẾ", cung: "LI", nguHanh: "HỎA", trieu: "TIỂU HỒ NGẬT TẾ", the:3, ung: 6, loaiQue: "", diem: 0.48, ghiChu: "Chưa thành – trung tính, vẫn còn hy vọng", haoPhuc: "3-Quan-Hợi-Thủy"},
"100010": {tenS: "MÔNG", cung: "LI", nguHanh: "HỎA", trieu: "TIỂU QUỈ THÂN TIÊN", the:4, ung: 1, loaiQue: "", diem: 0.4, ghiChu: "Mờ ám, cần học hỏi, trung tính – nghiêng hơi hung", haoPhuc: "4-Tài-Dậu-Kim"},
"110010": {tenS: "HOÁN", cung: "LI", nguHanh: "HỎA", trieu: "CÁCH HÀ VỌNG KIM", the:5, ung: 2, loaiQue: "", diem: 0.55, ghiChu: "Tan rã – trung tính, có thể tụ lại nếu biết cách", haoPhuc: "3-Quan-Hợi-Thủy|4-Tài-Dậu-Kim"},
"111010": {tenS: "TỤNG", cung: "LI", nguHanh: "HỎA", trieu: "NHỊ NHÂN TRANH LỘ", the:4, ung: 1, loaiQue: "DU HỒN", diem: 0.25, ghiChu: "Tranh tụng, bất lợi, hung – chỉ thoát nếu dừng lại", haoPhuc: "3-Quan-Hợi-Thủy"},
"111101": {tenS: "ĐỒNG NHÂN", cung: "LI", nguHanh: "HỎA", trieu: "TIÊN NHÂN CHỈ LỘ", the:3, ung: 6, loaiQue: "QUI HỒN", diem: 0.85, ghiChu: "Đồng lòng, hợp tác, đại cát trong quan hệ", haoPhuc: ""},
"001001": {tenS: "THUẦN CHẤN", cung: "CHẤN", nguHanh: "MỘC", trieu: "THIÊN HẠ DƯƠNG DANH", the:6, ung: 3, loaiQue: "LỤC XUNG", diem: 0.6, ghiChu: "Sợ hãi, nhưng tỉnh thức – trung tính hướng cát", haoPhuc: ""},
"001000": {tenS: "DỰ", cung: "CHẤN", nguHanh: "MỘC", trieu: "THANH LONG ĐẮC VỊ", the:1, ung: 4, loaiQue: "LỤC HỢP", diem: 0.7, ghiChu: "Vui vẻ, nhưng dễ sinh trễ nải – cát nhưng phải cảnh giác", haoPhuc: "1-Phụ-Tí-Thủy"},
"001010": {tenS: "GIẢI", cung: "CHẤN", nguHanh: "MỘC", trieu: "NGŨ QUAN THOÁT NẠN", the:2, ung: 5, loaiQue: "", diem: 0.68, ghiChu: "Giải thoát – cát sau khó khăn", haoPhuc: "1-Phụ-Tí-Thủy"},
"001110": {tenS: "HẰNG", cung: "CHẤN", nguHanh: "MỘC", trieu: "NGƯ LAI CHÒNG VÕNG", the:3, ung: 6, loaiQue: "", diem: 0.78, ghiChu: "Bền lâu, ổn định – cát", haoPhuc: "2-Huynh-Dần-Mộc"},
"000110": {tenS: "THĂNG", cung: "CHẤN", nguHanh: "MỘC", trieu: "CHỈ NHẬT CAO THĂNG", the:4, ung: 1, loaiQue: "", diem: 0.88, ghiChu: "Thăng tiến – đại cát", haoPhuc: "2-Huynh-Dần-Mộc|4-Tử-Ngọ-Hỏa"},
"010110": {tenS: "TỈNH", cung: "CHẤN", nguHanh: "MỘC", trieu: "KHÊ TỈNH SINH TUYỀN", the:5, ung: 2, loaiQue: "", diem: 0.42, ghiChu: "Giếng – có nhưng khó dùng, trung tính nghiêng hung", haoPhuc: "2-Huynh-Dần-Mộc|4-Tử-Ngọ-Hỏa"},
"011110": {tenS: "ĐẠI QUÁ", cung: "CHẤN", nguHanh: "MỘC", trieu: "DẠ MỘNG KIM NGÂN", the:4, ung: 1, loaiQue: "DU HỒN", diem: 0.35, ghiChu: "Quá mức, nguy hiểm – hung, nhưng có thể vượt nếu linh hoạt", haoPhuc: "2-Huynh-Dần-Mộc|4-Tử-Ngọ-Hỏa"},
"011001": {tenS: "TÙY", cung: "CHẤN", nguHanh: "MỘC", trieu: "SUY XA KHẢO NHA", the:3, ung: 6, loaiQue: "QUI HỒN", diem: 0.78, ghiChu: "Tùy thời, tùy người – cát nếu biết theo chính đạo", haoPhuc: "4-Tử-Ngọ-Hỏa"},
"110110": {tenS: "THUẦN TỐN", cung: "TỐN", nguHanh: "MỘC", trieu: "CÔ CHU ĐẮC THỦY", the:6, ung: 3, loaiQue: "LỤC XUNG", diem: 70, ghiChu: "Thuận nhập, khiêm tốn – cát", haoPhuc: ""},
"110111": {tenS: "TIỂU SÚC", cung: "TỐN", nguHanh: "MỘC", trieu: "MẬT VÂN BẤT VŨ", the:1, ung: 4, loaiQue: "", diem: 0.65, ghiChu: "Tích lũy nhỏ, chưa thông, nhưng tiến dần", haoPhuc: "3-Quan-Dậu-Kim"},
"110101": {tenS: "GIA NHÂN", cung: "TỐN", nguHanh: "MỘC", trieu: "QUAN THỦ LÂN CHI", the:2, ung: 5, loaiQue: "", diem: 0.88, ghiChu: "Gia đình hòa thuận – đại cát", haoPhuc: "3-Quan-Dậu-Kim"},
"110001": {tenS: "ÍCH", cung: "TỐN", nguHanh: "MỘC", trieu: "KHÔ MỘC KHAI HOA", the:3, ung: 6, loaiQue: "", diem: 0.82, ghiChu: "Ích lợi, gia tăng – đại cát", haoPhuc: "3-Quan-Dậu-Kim"},
"111001": {tenS: "VÔ VỌNG", cung: "TỐN", nguHanh: "MỘC", trieu: "ĐIỂU BỊ LŨNG LAO", the:4, ung: 1, loaiQue: "", diem: 0.68, ghiChu: "Không hư vọng, hành động chân chính thì cát", haoPhuc: ""},
"101001": {tenS: "PHỆ HẠP", cung: "TỐN", nguHanh: "MỘC", trieu: "CÔ NHÂN NGỘ THỰC", the:5, ung: 2, loaiQue: "", diem: 0.55, ghiChu: "Cắn xé, giải quyết tranh chấp – cát nếu dứt khoát", haoPhuc: ""},
"100001": {tenS: "DI", cung: "TỐN", nguHanh: "MỘC", trieu: "VỊ THỦY PHONG HIỀN", the:4, ung: 1, loaiQue: "DU HỒN", diem: 0.58, ghiChu: "Nuôi dưỡng – trung tính, cát nếu nuôi chính đạo", haoPhuc: "5-Tử-Tị-Hỏa|3-Quan-Dậu-Kim"},
"100110": {tenS: "CỔ", cung: "TỐN", nguHanh: "MỘC", trieu: "SÚY MA PHÂN ĐAO", the:3, ung: 6, loaiQue: "QUI HỒN", diem: 0.3, ghiChu: "Hư hỏng, nhưng có cơ hội sửa chữa – trung tính nghiêng hung", haoPhuc: "5-Tử-Tị-Hỏa"},
"010010": {tenS: "THUẦN KHẢM", cung: "KHẢM", nguHanh: "THỦY", trieu: "HẢI ĐÊ LAO NGUYỆT", the:6, ung: 3, loaiQue: "LỤC XUNG", diem: 0.2, ghiChu: "Hiểm trở chồng hiểm – đại hung, nhưng học được cách vượt", haoPhuc: ""},
"010011": {tenS: "TIẾT", cung: "KHẢM", nguHanh: "THỦY", trieu: "TRẢM TƯỚNG PHONG THẦN", the:1, ung: 4, loaiQue: "LỤC HỢP", diem: 0.62, ghiChu: "Tiết chế – cát nếu biết vừa phải", haoPhuc: ""},
"010001": {tenS: "TRUÂN", cung: "KHẢM", nguHanh: "THỦY", trieu: "LOẠN TU VÔ ĐẦU", the:2, ung: 5, loaiQue: "", diem: 0.45, ghiChu: "Khó khăn ban đầu, nhưng có hy vọng nếu kiên nhẫn", haoPhuc: "3-Tài-Ngọ-Hỏa"},
"010101": {tenS: "KÍ TẾ", cung: "KHẢM", nguHanh: "THỦY", trieu: "KIM BẢNG ĐỀ DANH", the:3, ung: 6, loaiQue: "", diem: 0.9, ghiChu: "Đã thành công – đại cát, nhưng cảnh báo suy", haoPhuc: "3-Tài-Ngọ-Hỏa"},
"011101": {tenS: "CÁCH", cung: "KHẢM", nguHanh: "THỦY", trieu: "HẠN MIÊU ĐẮC VŨ", the:4, ung: 1, loaiQue: "", diem: 0.72, ghiChu: "Cách mạng, thay đổi – cát nếu đúng thời", haoPhuc: "3-Tài-Ngọ-Hỏa"},
"001101": {tenS: "PHONG", cung: "KHẢM", nguHanh: "THỦY", trieu: "CỔ KÍNH TRÙNG MINH", the:5, ung: 2, loaiQue: "", diem: 0.8, ghiChu: "Phong phú – đại cát, nhưng dễ suy nếu chủ quan", haoPhuc: ""},
"000101": {tenS: "MINH DI", cung: "KHẢM", nguHanh: "THỦY", trieu: "QUA HÀ CHIẾT KIỀU", the:4, ung: 1, loaiQue: "DU HỒN", diem: 0.18, ghiChu: "Thương tổn, minh quân bị ám – đại hung, phải ẩn nhẫn", haoPhuc: "3-Tài-Ngọ-Hỏa"},
"000010": {tenS: "SƯ", cung: "KHẢM", nguHanh: "THỦY", trieu: "MÃ ĐÁO THÀNH CÔNG", the:3, ung: 6, loaiQue: "QUI HỒN", diem: 0.5, ghiChu: "Chiến tranh, trung tính – cát nếu chính danh, hung nếu phi nghĩa", haoPhuc: ""},
"100100": {tenS: "THUẦN CẤN", cung: "CẤN", nguHanh: "THỔ", trieu: "SƠN TRẠCH TRÙNG ĐIỆP", the:6, ung: 3, loaiQue: "LỤC XUNG", diem: 0.52, ghiChu: "Dừng lại – trung tính, cát nếu dừng đúng chỗ", haoPhuc: ""},
"100101": {tenS: "BÍ", cung: "CẤN", nguHanh: "THỔ", trieu: "TRẦN THẾ ĐẮC KHAI", the:1, ung: 4, loaiQue: "LỤC HỢP", diem: 0.65, ghiChu: "Trang sức, hình thức – trung tính, không nên quá chú trọng ngoại hình", haoPhuc: "2-Phụ-Ngọ-Hỏa|3-Tử-Thân-Kim"},
"100111": {tenS: "ĐẠI SÚC", cung: "CẤN", nguHanh: "THỔ", trieu: "HỈ KHÍ DOANH MÔN", the:2, ung: 5, loaiQue: "", diem: 0.84, ghiChu: "Tích lũy lớn, hàm dưỡng – đại cát", haoPhuc: "2-Phụ-Ngọ-Hỏa|3-Tử-Thân-Kim"},
"100011": {tenS: "TỔN", cung: "CẤN", nguHanh: "THỔ", trieu: "TỔN KỈ LỢI NHÂN", the:3, ung: 6, loaiQue: "", diem: 0.48, ghiChu: "Tổn hao – trung tính, tổn ít để được nhiều", haoPhuc: "3-Tử-Thân-Kim"},
"101011": {tenS: "KHUÊ", cung: "CẤN", nguHanh: "THỔ", trieu: "THÁI CÔNG BẤT NGỘ", the:4, ung: 1, loaiQue: "", diem: 0.32, ghiChu: "Chia rẽ, trái ngược – hung, nhưng có thể dung hòa", haoPhuc: "5-Tài-Tí-Thủy"},
"111011": {tenS: "LÍ", cung: "CẤN", nguHanh: "THỔ", trieu: "PHƯỢNG MINH KÌ SƠN", the:5, ung: 2, loaiQue: "", diem: 0.75, ghiChu: "Cẩn trọng hành động, theo đuổi lẽ phải thì cát", haoPhuc: "5-Tài-Tí-Thủy"},
"110011": {tenS: "TRUNG PHU", cung: "CẤN", nguHanh: "THỔ", trieu: "HÀNH TẨU BẠC BĂNG", the:4, ung: 1, loaiQue: "DU HỒN", diem: 0.88, ghiChu: "Trung tín, thành thật – đại cát", haoPhuc: "3-Tử-Thân-Kim|5-Tài-Tí-Thủy"},
"110100": {tenS: "TIỆM", cung: "CẤN", nguHanh: "THỔ", trieu: "HỒNG NHẠN CAO PHI", the:3, ung: 6, loaiQue: "QUI HỒN", diem: 0.85, ghiChu: "Tiến dần, ổn định – đại cát", haoPhuc: "5-Tài-Tí-Thủy"},
"000000": {tenS: "THUẦN KHÔN", cung: "KHÔN", nguHanh: "THỔ", trieu: "NGẠ HỔ ĐẮC THỰC", the:6, ung: 3, loaiQue: "LỤC XUNG", diem: 0.92, ghiChu: "Đại cát, thuận hòa, bao dung, hậu đắc", haoPhuc: ""},
"000001": {tenS: "PHỤC", cung: "KHÔN", nguHanh: "THỔ", trieu: "PHU THÊ PHẢN MỤC", the:1, ung: 4, loaiQue: "LỤC HỢP", diem: 0.72, ghiChu: "Quay lại, hồi phục – cát, hy vọng sau khó khăn", haoPhuc: "2-Phụ-Tị-Hỏa"},
"000011": {tenS: "LÂM", cung: "KHÔN", nguHanh: "THỔ", trieu: "PHÁT CHÍNH THI NHÂN", the:2, ung: 5, loaiQue: "", diem: 0.82, ghiChu: "Tiếp cận, giám sát – cát, hanh thông", haoPhuc: ""},
"000111": {tenS: "THÁI", cung: "KHÔN", nguHanh: "THỔ", trieu: "HỈ BÁO TAM NGUYÊN", the:3, ung: 6, loaiQue: "LỤC HỢP", diem: 0.98, ghiChu: "Đại cát, âm dương giao hòa, hanh thông tuyệt đối", haoPhuc: "2-Phụ-Tị-Hỏa"},
"001111": {tenS: "ĐẠI TRÁNG", cung: "KHÔN", nguHanh: "THỔ", trieu: "CỘNG SỰ ĐẮC MỘC", the:4, ung: 1, loaiQue: "", diem: 0.62, ghiChu: "Cường thịnh – cát nhưng dễ quá mức", haoPhuc: ""},
"011111": {tenS: "QUẢI", cung: "KHÔN", nguHanh: "THỔ", trieu: "DU PHONG THOÁT VÕNG", the:5, ung: 2, loaiQue: "", diem: 0.55, ghiChu: "Quyết đoán, dứt khoát – cát nếu đúng lúc", haoPhuc: "2-Phụ-Tị-Hỏa"},
"010111": {tenS: "NHU", cung: "KHÔN", nguHanh: "THỔ", trieu: "MINH CHÂU XUẤT THỔ", the:4, ung: 1, loaiQue: "DU HỒN", diem: 0.7, ghiChu: "Chờ đợi, có thực lực, sẽ thành nếu biết nhẫn nại", haoPhuc: "2-Phụ-Tị-Hỏa"},
"010000": {tenS: "TỈ", cung: "KHÔN", nguHanh: "THỔ", trieu: "THUYỀN ĐẮC THUẬN PHONG", the:3, ung: 6, loaiQue: "QUI HỒN", diem: 0.8, ghiChu: "Kết thân, thân cận – cát, nhưng phải chọn đúng người", haoPhuc: ""}
};

// Bảng tra cứu mối quan hệ Lục Thân dựa trên Ngũ hành Quẻ Chủ và Ngũ hành của Hào
const QUAN_HE_OBJECT = {
  "KIM": { "Kim": "Huynh Đệ", "Thủy": "Tử Tôn", "Mộc": "Thê Tài", "Hỏa": "Quan Quỷ", "Thổ": "Phụ Mẫu" },
  "MỘC": { "Mộc": "Huynh Đệ", "Hỏa": "Tử Tôn", "Thổ": "Thê Tài", "Kim": "Quan Quỷ", "Thủy": "Phụ Mẫu" },
  "THỦY": { "Thủy": "Huynh Đệ", "Mộc": "Tử Tôn", "Hỏa": "Thê Tài", "Thổ": "Quan Quỷ", "Kim": "Phụ Mẫu" },
  "HỎA": { "Hỏa": "Huynh Đệ", "Thổ": "Tử Tôn", "Kim": "Thê Tài", "Thủy": "Quan Quỷ", "Mộc": "Phụ Mẫu" },
  "THỔ": { "Thổ": "Huynh Đệ", "Kim": "Tử Tôn", "Thủy": "Thê Tài", "Mộc": "Quan Quỷ", "Hỏa": "Phụ Mẫu" }
};

const LUC_THAN_ARRAY = ["Huynh đệ", "Tử tôn", "Thê tài", "Quan quỷ", "Phụ mẫu"];

const LUC_THU_ARRAY = ["Thanh Long", "Chu Tước", "Câu Trần", "Đằng Xà", "Bạch Hổ", "Huyền Vũ"];



/*-- ------------------------------------- THUẬT TOÁN LẬP QUẺ BẰNG MAI HOA ------------------------------------- --*/
/**
 * gọi hàm tính mai hoa:
 *    nếu có tham số năm, tháng, ngày, giờ: getMaiHoa(28, 4, 2026, 16);
 *    nếu để trống thì nó sẽ lấy thời điểm hiện tại: getMaiHoa();
 */
function getMaiHoa(timeData) {
  const data = timeData.lunar;
  const A = data.am.ngay + data.am.thang + data.namAm.chiIndex;
  const B = A + data.gio.chiIndex;
  const mhTren = mod(A, 8);
  const mhDuoi = mod(B, 8);
  const mhDong = mod(B, 6);

  return {
    fullCode: rev(BAT_QUAI_OBJECT[mhTren].code) + rev(BAT_QUAI_OBJECT[mhDuoi].code),
    haoDong: [mhDong]
  };
}

/*-- ------------------------------------- END OF THUẬT TOÁN LẬP QUẺ BẰNG MAI HOA ------------------------------------- --*/


/*-- ------------------------------------- DỊCH DÙNG CHUNG- KHÔNG XÓA, KHÔNG SỬA ------------------------------------- --*/
/**
 * Hàm chạy đầy đủ: Lấy kết quả quẻ và tạo mô tả văn bản
 * @param {string} method - "MaiHoa" hoặc "LucHao"
 * @param {Object} timeInput - Dữ liệu thời gian {dd, mm, yy, hh, tz}
 * @param {Object} methodParams - Các thông số riêng (nếu có): {upCode, downCode, haoDong}
 */
function RUN_QUE_FULL(method, timeInput, options = {}) {
  const timeData = CHUAN_HOA_THOI_GIAN(timeInput);
  let rawResult;

  if (method === "MaiHoa") {
    rawResult = getMaiHoa(timeData); // Phải đảm bảo getMaiHoa trả về {fullCode, haoDong}
  } else if (method === "LucHao") {
    rawResult = {
      fullCode: (rev(options.upCode) || "") + (rev(options.downCode) || ""),
      haoDong: options.haoDong || [] // Gán luôn vào đây
    };
  }

  // Truyền nguyên cục rawResult vào CHI_TIET_QUE
  const fullResult = CHI_TIET_QUE(timeData, rawResult);

    // 3. XÁC ĐỊNH HÀO ĐỘNG (Logic ưu tiên)
  // - Ưu tiên 1: Dữ liệu do Engine tính toán (result.chinh.haoDong)
  // - Ưu tiên 2: Dữ liệu người dùng nhập (options.haoDong)
  // - Mặc định: Không có hào động ([])
  const finalHaoDong = fullResult?.chinh?.haoDong || options?.haoDong || [];

  // 4. Tạo đoạn mô tả
  // Truyền finalHaoDong đã xác định vào
  const moTa = MO_TA_QUE(timeData, fullResult, finalHaoDong);

  return {
    time: timeData,
    data: fullResult,
    text: moTa
  };
} // END RUN_QUE_FULL

/**
 * CHUẨN HÓA THỜI GIAN
 *  Hàm chuẩn hóa thời gian: Đảm bảo dữ liệu luôn đầy đủ
 *  @param {Object} input - Dữ liệu đầu vào: {dd, mm, yy, hh, tz}
 */
function CHUAN_HOA_THOI_GIAN(input) {
  const now = new Date();
    
    // Sử dụng optional chaining (?.) để lấy giá trị hoặc mặc định
    const dd = input?.dd || now.getDate();
    const mm = input?.mm || (now.getMonth() + 1);
    const yy = input?.yy || now.getFullYear();
    const hh = input?.hh || now.getHours();
    const tz = input?.tz !== undefined ? input.tz : (-now.getTimezoneOffset() / 60);

    // Tính toán Âm lịch 1 lần duy nhất tại đây
    const lunar = lunarDate(dd, mm, yy, hh, tz);

    return { dd, mm, yy, hh, tz, lunar };
} // END CHUAN_HOA_THOI_GIAN

function MO_TA_QUE(timeData, result, haoDong) {
  const { lunar } = timeData;
  const { chinh, ho, bien } = result;
  
  // 1. CHUẨN HÓA DỮ LIỆU
  let dongList = [];
  if (Array.isArray(haoDong)) {
    dongList = haoDong;
  } else if (haoDong !== undefined && haoDong !== null) {
    dongList = [haoDong];
  }

  // 2. TẠO CÂU CHỮ LINH HOẠT
  const dongText = dongList.length === 1 
    ? `động hào ${dongList[0]}` 
    : `động các hào: ${dongList.join(", ")}`;

  // 3. Dòng tiêu đề
  let desc = `Ngày ${lunar.ngayAm.can} ${lunar.ngayAm.chi}, tháng ${lunar.thangAm.can} ${lunar.thangAm.chi}, năm ${lunar.namAm.can} ${lunar.namAm.chi}, lập được quẻ ${chinh.tenS}, ${dongText}; quẻ hỗ ${ho.tenS}, quẻ biến ${bien.tenS}.\n\n`;
  
  // 4. Thông tin các hào của quẻ CHÍNH (không hiển thị lục thú)
  desc += "Thông tin các hào của quẻ chính như sau:\n";
  chinh.data.forEach((h) => {
    // Xác định các thành phần
    let textKhong = h.isKhong ? "(lâm không)" : "";
    let textTheUng = "";
    if (h.isThe) textTheUng = "trì Thế";
    else if (h.isUng) textTheUng = "trì Ứng";
    
    let textPhuc = "";
    if (h.hasPhuc !== false && h.hasPhuc) {
      textPhuc = "(" + h.hasPhuc + " phục)";
    }
    
    // Xây dựng dòng mô tả (không có lucThu)
    let line = `Hào ${h.hao}: ${h.lucThan} ${h.tenChi}-${h.nguHanh}`;
    if (textTheUng) line += ` ${textTheUng}`;
    if (textKhong) line += ` ${textKhong}`;
    if (textPhuc) line += ` ${textPhuc}`;
    
    desc += line + "\n";
  });
  desc += "\n";
  
  // 5. Thông tin các hào của quẻ BIẾN (có hiển thị lục thú)
  desc += "Thông tin các hào của quẻ biến như sau:\n";
  bien.data.forEach((h) => {
    let textKhong = h.isKhong ? "(lâm không)" : "";
    
    // Xây dựng dòng mô tả (có lucThu)
    let line = `Hào ${h.hao}: ${h.lucThan} ${h.tenChi}-${h.nguHanh}`;
    if (textKhong) line += ` ${textKhong}`;
    line += ` ${h.lucThu}`;
    
    desc += line + "\n";
  });
  desc += "\n";

  // 6. Chi tiết hào động
  if (dongList.length > 0) {
    desc += "Thông tin hào động:\n";
    dongList.forEach(d => {
      const hDong = chinh.data.find(h => h.hao === d);
      const hBien = bien.data.find(h => h.hao === d);
      if (hDong && hBien) {
        desc += `- Hào ${hDong.hao} ${hDong.lucThan} ${hDong.tenChi}-${hDong.nguHanh} động hóa ${hBien.lucThan} ${hBien.tenChi}-${hBien.nguHanh} lâm ${hBien.lucThu}.\n`;
      }
    });
    desc += "\n";
  }
  desc += "Hãy phân tích quẻ trên bằng các phương pháp Mai hoa, Lục hào và Thể dụng sinh khắc để đưa ra kết luận cho vấn đề (kèm theo ứng kì và hướng - nếu có): "; 
  return desc;
} // END MO_TA_QUE

function CHI_TIET_QUE(timeData, RESULT) {
  // Giải nén dữ liệu đầu vào
  const { fullCode: codeQueChinh, haoDong } = RESULT;
  const { lunar } = timeData;
  
  // 1. TÍNH TOÁN DỮ LIỆU CHUNG (Tuần Không, Lục Thú)
  const listTuanKhong = getTuanKhong(lunar.ngayAm.can, lunar.ngayAm.chi);
  const listLucThu = getLucThu(lunar.ngayAm.can);
  
  // 2. XỬ LÝ QUẺ CHÍNH
  const queChinhObj = QUE_DICH_OBJECT[codeQueChinh];
  const upChinh = rev(codeQueChinh.slice(0, 3));
  const downChinh = rev(codeQueChinh.slice(3, 6));
  
  const listDiaChiChinh = anDiaChi(upChinh, downChinh);
  const dataChinh = napLucThan(listDiaChiChinh, queChinhObj.nguHanh, listTuanKhong, listLucThu);
  
  // Thêm isThe, isUng, hasPhuc vào dataChinh
  const listHaoPhuc = getDanhSachHaoPhuc(queChinhObj.haoPhuc);
  
  dataChinh.forEach(hao => {
    hao.isThe = (hao.hao === queChinhObj.the);
    hao.isUng = (hao.hao === queChinhObj.ung);
    // Tìm hào phục nằm dưới hào hiện tại
    const phuc = listHaoPhuc.find(p => p.haoViTri === hao.hao);
    // hasPhuc: false nếu không có, hoặc chuỗi "Lục thân Địa chi-Ngũ hành" nếu có
    hao.hasPhuc = phuc ? `${phuc.lucThan} ${phuc.tenChi}-${phuc.nguHanh}` : false;
  });
  
  // 3. XỬ LÝ QUẺ HỖ
  const codeQueHo = getQueHo(codeQueChinh);
  const queHoObj = QUE_DICH_OBJECT[codeQueHo];
  
  // 4. XỬ LÝ QUẺ BIẾN
  const codeQueBien = getQueBien(codeQueChinh, haoDong);
  const queBienObj = QUE_DICH_OBJECT[codeQueBien];
  
  const upBien = rev(codeQueBien.slice(0, 3));
  const downBien = rev(codeQueBien.slice(3, 6));
  const listDiaChiBien = anDiaChi(upBien, downBien);
  const dataBien = napLucThan(listDiaChiBien, queChinhObj.nguHanh, listTuanKhong, listLucThu);
  
  // 5. TRẢ VỀ KẾT QUẢ TỔNG HỢP
  return {
    chinh: { 
      tenS: queChinhObj.tenS,
      cung: queChinhObj.cung,
      nguHanh: queChinhObj.nguHanh,
      trieu: queChinhObj.trieu,
      the: queChinhObj.the,
      ung: queChinhObj.ung,
      loaiQue: queChinhObj.loaiQue || "",
      diem: queChinhObj.diem,
      ghiChu: queChinhObj.ghiChu,
      data: dataChinh,
      haoDong: haoDong || []
    },
    ho: { 
      tenS: queHoObj.tenS,
      cung: queHoObj.cung,
      nguHanh: queHoObj.nguHanh,
      trieu: queHoObj.trieu,
      the: queHoObj.the,
      ung: queHoObj.ung,
      loaiQue: queHoObj.loaiQue || "",
      diem: queHoObj.diem,
      ghiChu: queHoObj.ghiChu
    },
    bien: { 
      tenS: queBienObj.tenS,
      cung: queBienObj.cung,
      nguHanh: queBienObj.nguHanh,
      trieu: queBienObj.trieu,
      the: queBienObj.the,
      ung: queBienObj.ung,
      loaiQue: queBienObj.loaiQue || "",
      diem: queBienObj.diem,
      ghiChu: queBienObj.ghiChu,
      data: dataBien
    }
  };
} // END CHI_TIET_QUE

/** 1. TÍNH TUẦN KHÔNG
 * Xác định 2 địa chi bị Tuần Không dựa trên Can Chi ngày
 * @param {string} tenCan - Tên Can ngày (vừa tính được từ getCanChiNgay)
 * @param {string} tenChi - Tên Chi ngày
 * @returns {string[]} Mảng 2 địa chi bị Không
 */
function getTuanKhong(tenCan, tenChi) {
  const canIdx = THIEN_CAN_ARRAY.find(c => c.ten === tenCan).so; // 1-10
  const chiIdx = DIA_CHI_ARRAY.find(c => c.ten === tenChi).so;   // 1-12
  
  let diff = chiIdx - canIdx;
  if (diff < 0) diff += 12;
  
  // Cách đơn giản nhất bằng bảng tra cứu theo đầu Giáp:
  const danhSachGiap = ["Tí", "Tuất", "Thân", "Ngọ", "Thìn", "Dần"];
  const capKhong = [["Tuất", "Hợi"], ["Thân", "Dậu"], ["Ngọ", "Mùi"], ["Thìn", "Tị"], ["Dần", "Mão"], ["Tí", "Sửu"]];
  
  return capKhong[danhSachGiap.indexOf(DIA_CHI_ARRAY[(diff) % 12].ten)] || [];
} // END 1. TÍNH TUẦN KHÔNG

/* ************************************************************************************* */

/** 2. TÍNH LỤC THÚ
 * Xác định danh sách Lục Thú dựa trên Can ngày
 * @param {string} tenCanNgay - Tên Can của ngày (Giáp, Ất, Bính...)
 * @returns {string[]} Mảng 6 Lục Thú từ hào 6 xuống hào 1
 */
function getLucThu(tenCanNgay) {
  const danhSachGoc = ["Thanh Long", "Chu Tước", "Câu Trần", "Đằng Xà", "Bạch Hổ", "Huyền Vũ"];
  let indexBatDau = 0;

  // Xác định vị trí bắt đầu tại Hào 1 dựa trên Can ngày
  switch (tenCanNgay) {
    case "Giáp": case "Ất": 
      indexBatDau = 0; break; // Khởi Thanh Long
    case "Bính": case "Đinh": 
      indexBatDau = 1; break; // Khởi Chu Tước
    case "Mậu": 
      indexBatDau = 2; break;             // Khởi Câu Trần
    case "Kỉ": 
      indexBatDau = 3; break;              // Khởi Đằng Xà
    case "Canh": case "Tân": 
      indexBatDau = 4; break; // Khởi Bạch Hổ
    case "Nhâm": case "Quí": 
      indexBatDau = 5; break; // Khởi Huyền Vũ
  }

  let ketQua = [];
  for (let i = 0; i < 6; i++) {
    ketQua.push(danhSachGoc[(indexBatDau + i) % 6]);
  }

  // Vì bạn đang render từ hào 6 xuống hào 1, chúng ta cần đảo ngược mảng
  // để hào khởi (indexBatDau) nằm ở cuối mảng (hào 1)
  return ketQua.reverse();
} // END 2. TÍNH LỤC THÚ

/* ************************************************************************************* */

/** 3. AN ĐỊA CHI 
/**
 * Hàm An Địa Chi: Trả về mảng 6 Object địa chi (từ hào 6 xuống hào 1)
 * @param {string|number} up - Mã code hoặc Số của quẻ Thượng
 * @param {string|number} down - Mã code hoặc Số của quẻ Hạ
 */
function anDiaChi(up, down) {
  const upQuai = timBatQuai(up);
  const downQuai = timBatQuai(down);
  
  if (!upQuai || !downQuai) return [];

  // Quy tắc nạp: Thượng (6,5,4) - Hạ (3,2,1)
  const tenChiHao = [
    upQuai.chi6, upQuai.chi5, upQuai.chi4, 
    downQuai.chi3, downQuai.chi2, downQuai.chi1
  ];

  // Chuyển tên chi thành Object từ DIA_CHI_ARRAY để lấy Ngũ hành
  return tenChiHao.map(ten => {
    return DIA_CHI_ARRAY.find(item => item.ten === ten);
  });
} // END 3. AN ĐỊA CHI

/* ************************************************************************************* */

/** 4. NẠP LỤC THÂN
 * Hàm Nạp Lục Thân & Đánh dấu Tuần Không
 * @param {Object[]} danhSachChi - Mảng 6 đối tượng địa chi hào
 * @param {string} nguHanhQueChu - Ngũ hành họ quẻ (Kim, Mộc, Thủy, Hỏa, Thổ)
 * @param {string[]} haiChiKhong - Mảng 2 địa chi bị Không (VD: ["Tuất", "Hợi"])
 * @param {string[]} dsLucThu - Mảng 6 Lục thú tương ứng
 */
function napLucThan(danhSachChi, nguHanhQueChu, haiChiKhong, dsLucThu) {
  // Kiểm tra bảng quan hệ
  if (!QUAN_HE_OBJECT[nguHanhQueChu]) {
    return [];
  }

  const listKhong = haiChiKhong || [];
  const listLucThu = dsLucThu || []; // Mảng lục thú (nếu có)

  return danhSachChi.map((chiObj, index) => {
    const tenLucThan = QUAN_HE_OBJECT[nguHanhQueChu][chiObj.nguHanh];
    const isKhong = listKhong.includes(chiObj.ten);

    return {
      hao: 6 - index,
      tenChi: chiObj.ten,
      nguHanh: chiObj.nguHanh,
      lucThan: tenLucThan,
      isKhong: isKhong,
      // Chỉ nạp lục thú nếu mảng listLucThu có dữ liệu
      lucThu: listLucThu.length > 0 ? listLucThu[index] : "" 
    };
  });
} // END 4. NẠP LỤC THÂN

/* ************************************************************************************* */

/** 5. TÍNH HÀO PHỤC 
 * Xác định các hào phục cho quẻ chính từ chuỗi haoPhuc
 * @param {string} haoPhucStr - Chuỗi hào phục từ QUE_DICH_OBJECT (định dạng: "2-Tài-Dần-Mộc|3-Quan-Hợi-Thủy")
 * @returns {Array} Danh sách hào phục
 */

function getDanhSachHaoPhuc(haoPhucStr) {
  // Nếu không có chuỗi hào phục hoặc chuỗi rỗng
  if (!haoPhucStr || haoPhucStr === "") {
    return [];
  }
  
  // Parse chuỗi hào phục
  // Định dạng: "2-Tài-Dần-Mộc|3-Quan-Hợi-Thủy"
  const phucItems = haoPhucStr.split("|");
  const ketQua = [];
  
  // Mapping lục thân từ tên viết tắt sang tên đầy đủ
  const mappingLucThan = {
    "Phụ": "Phụ Mẫu",
    "Mẫu": "Phụ Mẫu",
    "Tử": "Tử Tôn",
    "Tài": "Thê Tài",
    "Quan": "Quan Quỷ",
    "Huynh": "Huynh Đệ"
  };
  
  for (let item of phucItems) {
    // Parse định dạng: "2-Tài-Dần-Mộc"
    const parts = item.split("-");
    if (parts.length >= 4) {
      const haoViTri = parseInt(parts[0]); // Hào phục nằm dưới hào mấy
      const lucThanVietTat = parts[1];
      const tenChi = parts[2];
      const nguHanh = parts[3];
      
      // Chuyển đổi tên lục thân
      const lucThan = mappingLucThan[lucThanVietTat] || lucThanVietTat;
      
      ketQua.push({
        haoViTri: haoViTri,
        tenChi: tenChi,
        nguHanh: nguHanh,
        lucThan: lucThan
      });
    }
  }
  
  return ketQua;
} // END 5. TÍNH HÀO PHỤC

/* ************************************************************************************* */

/** TÍNH QUẺ HỖ DỰA TRÊN codeChinh
 * 
 */
function getQueHo(codeChinh) {
  // Tách các bit theo vị trí (Lưu ý: bit1 của bạn là hào 6 - index 0)
  var b2 = codeChinh[1]; // Hào 5
  var b3 = codeChinh[2]; // Hào 4
  var b4 = codeChinh[3]; // Hào 3
  var b5 = codeChinh[4]; // Hào 2

  // Quy tắc bạn đưa ra:
  var b1Ho = b5; // Hào 5 Chính
  var b2Ho = b4; // Hào 4 Chính
  var b3Ho = b3; // Hào 3 Chính
  var b4Ho = b4; // Hào 4 Chính
  var b5Ho = b3; // Hào 3 Chính
  var b6Ho = b2; // Hào 2 Chính

  // Ghép lại theo thứ tự từ bit 6 đến bit 1 (Hào 1 đến Hào 6 ngược lại)
  return b6Ho + b5Ho + b4Ho + b3Ho + b2Ho + b1Ho;
} // END function getQueHo

/** TÍNH QUẺ BIẾN DỰA TRÊN codeChinh và DANH SÁCH HÀO ĐỘNG
 *  TRUY CẬP:
 *    Trường hợp có 1 hào động: 
 *      getQueBien("110101", 4)
 * 
 *    Trường hợp có nhiều hào động:
 *      getQueBien("110101", [1,3,6])
 */
function getQueBien(codeChinh, ds) {

  const arr = codeChinh.split("");

  // luôn thành mảng + loại trùng
  const haos = new Set([].concat(ds));

  for (let h of haos) {
    const idx = 6 - h;
    if (idx >= 0 && idx < 6) {
      arr[idx] = arr[idx] === "1" ? "0" : "1";
    }
  }

  return arr.join("");
} // END function getQueBien

function timBatQuai(input) {
  // 1. Nếu input là số (ví dụ: 1), tìm trực tiếp qua Key của Object
  if (typeof input === 'number') {
    return BAT_QUAI_OBJECT[input];
  } 
  
  // 2. Nếu input là chuỗi mã quẻ (ví dụ: "111"), tìm bằng cách duyệt qua các giá trị
  else if (typeof input === 'string') {
    return Object.values(BAT_QUAI_OBJECT).find(q => q.code === input);
  }
  
  return null; // Trả về null nếu không tìm thấy gì
} // end function timBatQuai

// Hàm mod (tránh lỗi chia 0)
function mod(a, b) {
  var result = a % b;
  return result === 0 ? b : result;
} // END function mod

// hàm đảo ngược chuỗi
function rev(s) { 
  return s.split('').reverse().join(''); 
} // END function rev

/*-- ------------------------------------- END OF DỊCH DÙNG CHUNG  ------------------------------------- --*/


/*-- ------------------------------------- THUẬT TOÁN TÍNH NGÀY ÂM LỊCH - KHÔNG XÓA, KHÔNG SỬA ------------------------------------- --*/
function lunarDate(dd, mm, yy, hh, tz) {
  // ===== ÂM LỊCH =====
  const lunar = convertSolar2Lunar(dd, mm, yy, tz);
  const lunarD = lunar[0];
  const lunarM = lunar[1];
  const lunarY = lunar[2];

  // ===== JD =====
  const jd = jdFromDate(dd, mm, yy);

  // ===== CAN CHI NGÀY ÂM (thực ra giống ngày dương vì cùng JD) =====
  const canD_am = THIEN_CAN_ARRAY[(jd + 9) % 10];
  const chiD_am = DIA_CHI_ARRAY[(jd + 1) % 12];

  // ===== CAN CHI THÁNG ÂM =====
  const canM_am = THIEN_CAN_ARRAY[(lunarY * 12 + lunarM + 3) % 10];
  const chiM_am = DIA_CHI_ARRAY[(lunarM + 1) % 12];
  
  // ===== CAN CHI NĂM ÂM =====
  const canY_am = THIEN_CAN_ARRAY[(lunarY + 6) % 10];
  const chiY_am = DIA_CHI_ARRAY[(lunarY + 8) % 12];

  // ===== CAN CHI GIỜ =====
  const chiIndexH = Math.floor((hh + 1) / 2) % 12;
  const chiH = DIA_CHI_ARRAY[chiIndexH];

  const canIndexD = (jd + 9) % 10;
  const canIndexH = (canIndexD * 2 + chiIndexH) % 10;
  const canH = THIEN_CAN_ARRAY[canIndexH];

  return {
    duong: `${dd}/${mm}/${yy} ${hh}h`,

    am: {
      ngay: lunarD, 
      thang: lunarM,
      nam: lunarY
    },

    ngayAm: {
      can: canD_am.ten,
      chi: chiD_am.ten,
      nguHanhCan: canD_am.nguHanh,
      nguHanhChi: chiD_am.nguHanh
    },

    thangAm: {
      can: canM_am.ten,
      chi: chiM_am.ten,
      nguHanhCan: canM_am.nguHanh,
      nguHanhChi: chiM_am.nguHanh,
      chiIndex: chiM_am.so
    },

    namAm: {
      can: canY_am.ten,
      chi: chiY_am.ten,
      nguHanhCan: canY_am.nguHanh,
      nguHanhChi: chiY_am.nguHanh,
      chiIndex: chiY_am.so
    },

    gio: {
      can: canH.ten,
      chi: chiH.ten,
      nguHanhCan: canH.nguHanh,
      nguHanhChi: chiH.nguHanh,
      chiIndex: chiH.so
    }
  };
}

// KHÔNG SỬA TỪ ĐÂY TRỞ XUỐNG

// tính hoàng đạo
const HOANGDAO={
"Tí":[0,1,3,6,8,9],
"Sửu":[2,3,5,8,10,11],
"Dần":[0,1,4,5,7,10],
"Mão":[2,3,6,7,9,0],
"Thìn":[4,5,8,9,11,2],
"Tị":[6,7,10,11,1,4],
"Ngọ":[8,9,0,1,3,6],
"Mùi":[10,11,2,3,5,8],
"Thân":[0,1,4,5,7,10],
"Dậu":[2,3,6,7,9,0],
"Tuất":[4,5,8,9,11,2],
"Hợi":[6,7,10,11,1,4]
}

function isHoangDao(dd,mm,yy){

var chiDay=CHI[(jdFromDate(dd,mm,yy)+1)%12]

var lunar=convertSolar2Lunar(dd,mm,yy,7)
var chiMonth=CHI[(lunar[1]+1)%12]

var good=HOANGDAO[chiMonth]

var idx=CHI.indexOf(chiDay)

return good.includes(idx)
}

// hàm tổng hợp giống lịch vạn niên
function LICH(dd,mm,yy){

var lunar=convertSolar2Lunar(dd,mm,yy,7)

return{
duong:dd+"/"+mm+"/"+yy,
am:lunar[0]+"/"+lunar[1]+"/"+lunar[2],
canChiDay:canChiDay(dd,mm,yy),
canChiMonth:canChiMonth(lunar[1],lunar[2]),
canChiYear:canChiYear(lunar[2]),
hoangDao:isHoangDao(dd,mm,yy)?"Hoàng đạo":"Hắc đạo"
}

}

function INT(d) {
  return Math.floor(d);
}

function jdFromDate(dd, mm, yy) {
  var a = INT((14 - mm) / 12);
  var y = yy + 4800 - a;
  var m = mm + 12 * a - 3;
  var jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
  if (jd < 2299161) {
    jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - 32083;
  }
  return jd;
}

function jdToDate(jd) {
  var a, b, c, d, e, m;
  if (jd > 2299160) {
    a = jd + 32044;
    b = INT((4 * a + 3) / 146097);
    c = a - INT((b * 146097) / 4);
  } else {
    b = 0;
    c = jd + 32082;
  }
  d = INT((4 * c + 3) / 1461);
  e = c - INT((1461 * d) / 4);
  m = INT((5 * e + 2) / 153);
  var day = e - INT((153 * m + 2) / 5) + 1;
  var month = m + 3 - 12 * INT(m / 10);
  var year = b * 100 + d - 4800 + INT(m / 10);
  return [day, month, year];
}

function getNewMoonDay(k, timeZone) {
  var T = k / 1236.85;
  var T2 = T * T;
  var T3 = T2 * T;
  var dr = Math.PI / 180;

  var Jd1 = 2415020.75933 + 29.53058868 * k
      + 0.0001178 * T2
      - 0.000000155 * T3;

  Jd1 += 0.00033 *
      Math.sin((166.56 + 132.87 * T - 0.009173 * T2) * dr);

  var M = 359.2242 + 29.10535608 * k
      - 0.0000333 * T2
      - 0.00000347 * T3;

  var Mpr = 306.0253 + 385.81691806 * k
      + 0.0107306 * T2
      + 0.00001236 * T3;

  var F = 21.2964 + 390.67050646 * k
      - 0.0016528 * T2
      - 0.00000239 * T3;

  var C1 = (0.1734 - 0.000393 * T) * Math.sin(M * dr)
      + 0.0021 * Math.sin(2 * dr * M)
      - 0.4068 * Math.sin(Mpr * dr)
      + 0.0161 * Math.sin(2 * dr * Mpr)
      - 0.0004 * Math.sin(3 * dr * Mpr)
      + 0.0104 * Math.sin(2 * dr * F)
      - 0.0051 * Math.sin((M + Mpr) * dr)
      - 0.0074 * Math.sin((M - Mpr) * dr)
      + 0.0004 * Math.sin((2 * F + M) * dr)
      - 0.0004 * Math.sin((2 * F - M) * dr)
      - 0.0006 * Math.sin((2 * F + Mpr) * dr)
      + 0.0010 * Math.sin((2 * F - Mpr) * dr)
      + 0.0005 * Math.sin((2 * Mpr + M) * dr);

  var deltaT = T < -11
      ? 0.001 + 0.000839 * T + 0.0002261 * T2
      : -0.000278 + 0.000265 * T + 0.000262 * T2;

  var JdNew = Jd1 + C1 - deltaT;

  return INT(JdNew + 0.5 + timeZone / 24);
}

function getSunLongitude(jdn, timeZone) {
  var T = (jdn - 2451545.5 - timeZone / 24) / 36525;
  var T2 = T * T;
  var dr = Math.PI / 180;

  var M = 357.52910 + 35999.05030 * T
      - 0.0001559 * T2
      - 0.00000048 * T * T2;

  var L0 = 280.46645 + 36000.76983 * T
      + 0.0003032 * T2;

  var DL = (1.914600 - 0.004817 * T - 0.000014 * T2)
      * Math.sin(dr * M);

  DL += (0.019993 - 0.000101 * T)
      * Math.sin(2 * dr * M);

  DL += 0.000290 * Math.sin(3 * dr * M);

  var L = L0 + DL;
  L = L * dr;
  L = L - Math.PI * 2 * INT(L / (Math.PI * 2));

  return INT(L / Math.PI * 6);
}

function getLunarMonth11(yy, timeZone) {
  var off = jdFromDate(31, 12, yy) - 2415021;
  var k = INT(off / 29.530588853);
  var nm = getNewMoonDay(k, timeZone);
  var sunLong = getSunLongitude(nm, timeZone);

  if (sunLong >= 9) {
    nm = getNewMoonDay(k - 1, timeZone);
  }

  return nm;
}

function getLeapMonthOffset(a11, timeZone) {
  var k = INT((a11 - 2415021.076998695) / 29.530588853);
  var last = 0;
  var i = 1;
  var arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);

  do {
    last = arc;
    i++;
    arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
  } while (arc != last && i < 14);

  return i - 1;
}

function convertSolar2Lunar(dd, mm, yy, timeZone) {

  var dayNumber = jdFromDate(dd, mm, yy);
  var k = INT((dayNumber - 2415021.076998695) / 29.530588853);

  var monthStart = getNewMoonDay(k + 1, timeZone);

  if (monthStart > dayNumber) {
    monthStart = getNewMoonDay(k, timeZone);
  }

  var a11 = getLunarMonth11(yy, timeZone);
  var b11 = a11;
  var lunarYear;

  if (a11 >= monthStart) {
    lunarYear = yy;
    a11 = getLunarMonth11(yy - 1, timeZone);
  } else {
    lunarYear = yy + 1;
    b11 = getLunarMonth11(yy + 1, timeZone);
  }

  var lunarDay = dayNumber - monthStart + 1;
  var diff = INT((monthStart - a11) / 29);
  var lunarLeap = 0;
  var lunarMonth = diff + 11;

  if (b11 - a11 > 365) {
    var leapMonthDiff = getLeapMonthOffset(a11, timeZone);

    if (diff >= leapMonthDiff) {
      lunarMonth = diff + 10;

      if (diff == leapMonthDiff) {
        lunarLeap = 1;
      }
    }
  }

  if (lunarMonth > 12) {
    lunarMonth = lunarMonth - 12;
  }

  if (lunarMonth >= 11 && diff < 4) {
    lunarYear -= 1;
  }

  return [lunarDay, lunarMonth, lunarYear, lunarLeap];
}

/*-- ------------------------------------- END OF THUẬT TOÁN TÍNH NGÀY ÂM LỊCH ------------------------------------- --*/
