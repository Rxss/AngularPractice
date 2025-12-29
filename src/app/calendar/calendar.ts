import { Component } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarOptions } from '@fullcalendar/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar.html',
})
export class Calendar {

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',

    selectable: true,
    dateClick: this.onDateClick.bind(this),
    events: [
      { title: 'Task 1', date: '2025-12-29' }
    ]
  };

  onDateClick(arg: any) {
    alert(`Clicked date: ${arg.dateStr}`);
  }
}
