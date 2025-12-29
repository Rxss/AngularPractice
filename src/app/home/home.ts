import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Calendar } from '../calendar/calendar';
import { EventInput } from '@fullcalendar/core';

@Component({
  selector: 'app-home',
  imports: [Calendar],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private router: Router) { }

  goToTasks(): void {
    this.router.navigate(['/tasks']);
  }

  calendarEvents: EventInput[] = [
    { title: 'Plan tomorrow', date: '2025-12-29' }
  ];

  onDaySelected(dateStr: string): void {
    console.log('Selected date:', dateStr);
  }
}
