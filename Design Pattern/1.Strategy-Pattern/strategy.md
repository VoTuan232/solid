# Document 
https://toihocdesignpattern.com/chuong-1-strategy-pattern-chao-mung-den-voi-design-patterns.html

# Thiết kế hành vi của Duck
VẬY LÀM THẾ NÀO CHÚNG TA SẼ THIẾT KẾ BỘ CÁC LỚP THỰC HIỆN CÁC HÀNH VI FLY() VÀ QUACK()?

==> Từ giờ trở đi, các `hành vi` của `Vịt` sẽ đặt trong một `lớp riêng biệt`, Một lớp implement một interface hành vi cụ thể.
Theo cách đó, các lớp Vịt không cần phải biết bất kỳ implementation chi tiết nào thực hiện cho hành vi của nó.

==> áp dụng `nguyên tắc thiết kế số 2`

==> Chúng tôi sẽ sử dụng một interface để thể hiện từng hành vi – ví dụ: `FlyBehavior` và `QuackBehavior` – và mỗi lần cần một hành vi thì sẽ implement một trong những interface đó.