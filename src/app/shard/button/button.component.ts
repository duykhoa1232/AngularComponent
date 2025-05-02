import { Component } from '@angular/core'; // note: Import decorator `Component` từ Angular.

@Component({
  selector: 'button[appButton],a[appButton]', // note: Selector cho phép sử dụng thành phần này trên thẻ `button` hoặc `a`.
  standalone: true, // note: Thành phần này là standalone, không cần khai báo trong NgModule.
  imports: [], // note: Không có thành phần hoặc module nào được nhập khẩu ở đây.
  templateUrl: './button.component.html', // note: Đường dẫn đến file HTML của thành phần.
  styleUrls: ['./button.component.css'] // note: Đường dẫn đến file CSS của thành phần.
})
export class ButtonComponent {
  // note: Thành phần này không có logic, chỉ dùng để tùy chỉnh giao diện nút bấm.
}
