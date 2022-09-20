# 1.Nguyên lí thiết kế 
`Identify the aspects of your application that vary and seperate them from what stays the same`
- Xác định các khía cạnh ứng dụng 
- `Tách` các `phần hay thay đổi` ra khỏi `phần giữ nguyên`
==>  nếu bạn có một số đoạn code đang thay đổi, hãy xem xét với tất cả những yêu cầu mới, sau đó bạn biết bạn sẽ có một hành vi cần phải được tách ra khỏi tất cả những thứ không thay đổi.
==>  lấy các thành phần thay đổi và `đóng gói` chúng, để sau này bạn có thể thay đổi hoặc mở rộng các thành phần khác nhau mà không ảnh hưởng đến những phần còn lại
==> Tất cả các `mẫu` cung cấp một cách để cho một phần của hệ thống thay đổi độc lập với tất cả các phần khác.

# 2.Nguyên tắc thiết kế 
`Program to an interface, not an implementation`
- Lập trình giao diện, không phải triển khai 
`“PROGRAM TO AN INTERFACE” THỰC SỰ CÓ NGHĨA LÀ “PROGRAM TO A SUPERTYPE”`

# 3. Nguyên tắc thiết kế 
`Favor composition over inheritance `
- Kết hợp rất linh hoạt
- HAS-A có thể tốt hơn IS-A  
- Mỗi con vịt `CÓ MỘT` hành vi bay và hành vi kêu mà nó ủy nhiệm bay và kêu.