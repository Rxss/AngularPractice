import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import { CalendarOptions, EventInput } from '@fullcalendar/core';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [FullCalendarModule],
  templateUrl: './calendar.html',
})
export class Calendar {

  @Input() events: EventInput[] = [];

  // rename to avoid confusion with DOM events
  @Output() daySelected = new EventEmitter<string>();

  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, interactionPlugin],
    initialView: 'dayGridMonth',
    dateClick: (arg: DateClickArg) => this.daySelected.emit(arg.dateStr),
  };

  ngOnChanges(): void {
    this.calendarOptions = {
      ...this.calendarOptions,
      events: this.events
    };
  }
}
