import { Component, input } from '@angular/core'; // note: Import decorator `Component` và `input` từ Angular.

@Component({
  selector: 'app-dashboard-item', // note: Tên selector để sử dụng thành phần này trong HTML.
  standalone: true, // note: Thành phần này là standalone, không cần khai báo trong NgModule.
  imports: [], // note: Không có thành phần hoặc module nào được nhập khẩu ở đây.
  templateUrl: './dashboard-item.component.html', // note: Đường dẫn đến file HTML của thành phần.
  styleUrl: './dashboard-item.component.css' // note: Đường dẫn đến file CSS của thành phần.
})
export class DashboardItemComponent {
  image = input.required<{ src: string; alt: string }>(); // note: Thuộc tính `image` nhận dữ liệu hình ảnh từ thành phần cha, bao gồm đường dẫn (`src`) và mô tả (`alt`).
  title = input.required<string>(); // note: Thuộc tính `title` nhận tiêu đề từ thành phần cha.
}
