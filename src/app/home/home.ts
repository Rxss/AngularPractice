import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [],
  standalone: true,
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  constructor(private router: Router) { }

  goToTasks(): void {
    this.router.navigate(['/tasks']);
  }
}
