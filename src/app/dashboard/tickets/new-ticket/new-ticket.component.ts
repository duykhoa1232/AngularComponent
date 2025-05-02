import { AfterContentInit, AfterViewInit, Component, ElementRef, output, Output, viewChild, ViewChild } from '@angular/core'; // note: Import decorator `Component` từ Angular.
import { ButtonComponent } from '../../../shard/button/button.component'; // note: Import thành phần `ButtonComponent`.
import { ControlComponent } from '../../../shard/control/control.component'; // note: Import thành phần `ControlComponent`.
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-ticket', // note: Tên selector để sử dụng thành phần này trong HTML.
  standalone: true, // note: Thành phần này là standalone, không cần khai báo trong NgModule.
  imports: [ButtonComponent, ControlComponent, FormsModule], // note: Thêm các thành phần phụ thuộc vào mảng `imports`.
  templateUrl: './new-ticket.component.html', // note: Đường dẫn đến file HTML của thành phần.
  styleUrls: ['./new-ticket.component.css'], // note: Đường dẫn đến file CSS của thành phần.
})
export class NewTicketComponent implements AfterViewInit {
  // @ViewChild('form') form?:ElementRef<HTMLFormElement>;

  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  enteredTitle = '';
  enterText='';
  add = output<{ title: string; text: string }>();
  ngAfterViewInit() {
    console.log('After view init');
    console.log(this.form?.nativeElement);
  }
  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.form?.nativeElement);
  }
  onSubmit() {
    this.add.emit({ title: this.enteredTitle,text: this.enterText });
    this.enterText='';
    this.enteredTitle = '';

    // this.form?.nativeElement.reset();
    // const enteredTitle=titleElement.value;
    // console.log('Entered title:' + enteredTitle);
  }
  // note: Đây là thành phần chính để tạo giao diện "New Ticket".
}
