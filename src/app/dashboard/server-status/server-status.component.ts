import { Component, DestroyRef, effect, inject, OnDestroy, OnInit, signal } from '@angular/core'; // note: Import decorator `Component` từ Angular.
import { interval } from 'rxjs';

@Component({
  selector: 'app-server-status', // note: Tên selector để sử dụng thành phần này trong HTML.
  standalone: true, // note: Thành phần này là standalone, không cần khai báo trong NgModule.
  imports: [], // note: Không có thành phần hoặc module nào được nhập khẩu ở đây.
  templateUrl: './server-status.component.html', // note: Đường dẫn đến file HTML của thành phần.
  styleUrls: ['./server-status.component.css'], // note: Đường dẫn đến file CSS của thành phần.
})
export class ServerStatusComponent implements OnInit {
  // note: Component implements OnInit
  currentStatus = signal<'online' | 'offline' | 'unknown'>('offline');
  // note: signal dùng để tạo một giá trị có thể thay đổi.
  // signal là một giá trị có thể thay đổi, nó giống như một biến nhưng có thể được cập nhật bất cứ lúc nào.
  // signal là một giá trị có thể thay đổi, nó giống như một biến nhưng có thể được cập nhật bất cứ lúc nào.
  // signal là một giá trị có thể thay đổi, nó giống như một biến nhưng có thể được cập nhật bất cứ lúc nào.
  // signal là một giá trị có thể thay đổi, nó giống như
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect(() => {

    console.log(this.currentStatus());
  });
}
  // note: Thuộc tính lưu trạng thái hiện tại của máy chủ.

  ngOnInit() {
    console.log('ngOnInit');

    // note: Đây là phương thức ngOnInit đúng tên và vị trí
    const interval = setInterval(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval); // note: Đóng interval trước khi hủy component.
    });
  }

  // note: Thay đổi trạng thái sau 5 giây (đã sửa chú thích cho đúng).

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // ngOnDestroy() {
  //   clearTimeout(this.interval); // note: Đóng interval trước khi hủy component.
  // }
}


