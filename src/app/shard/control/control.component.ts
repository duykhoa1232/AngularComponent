import { Component, ElementRef, HostBinding, inject, input, ViewEncapsulation, viewChild, contentChild, AfterContentInit, afterRender, afterNextRender } from '@angular/core'; // note: Import các decorator và tính năng cần thiết từ Angular.

@Component({
  selector: 'app-control', // note: Tên selector để sử dụng thành phần này trong HTML.
  standalone: true, // note: Thành phần này là standalone, không cần khai báo trong NgModule.
  imports: [], // note: Không có thành phần hoặc module nào được nhập khẩu ở đây.
  templateUrl: './control.component.html', // note: Đường dẫn đến file HTML của thành phần.
  styleUrls: ['./control.component.css'], // note: Đường dẫn đến file CSS của thành phần.
  encapsulation: ViewEncapsulation.None, // note: CSS của thành phần này sẽ không bị giới hạn phạm vi.
  host: {
    // note: Đã sửa lỗi cú pháp ở đây
    class: 'control', //note: Tự động thêm lớp CSS `control` vào thẻ HTML của thành phần.
    '(click)': 'onClick()',
  },
})
export class ControlComponent implements AfterContentInit {
  private el = inject(ElementRef);
  label = input.required<string>();

  private control =
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');
  // note: Tạo một instance của `HTMLInputElement` để truy cập vào phần tử input của thành phần.
  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });
    afterNextRender(() => {
      console.log('afterNextRender ');
    }
    );
  }

  ngAfterContentInit(){
  }
  onClick() {
    console.log('click');
    console.log(this.el);
    console.log(this.control());
  }
}
