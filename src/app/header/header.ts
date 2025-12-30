import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
private router = inject(Router);

  logout(): void {
    // clear auth later, e.g. localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
