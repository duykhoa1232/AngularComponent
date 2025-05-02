import { Component, input, output, signal } from '@angular/core';
import { Ticket } from './ticket.module';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  data=input.required<Ticket>();
  detailsVisible=signal(false);
  close=output();
  onToggleDetail(){
    this.detailsVisible.update((wasVisible)=> !wasVisible);
  }
  onMarkAsCompleted(){
    this.close.emit();
  }
}
