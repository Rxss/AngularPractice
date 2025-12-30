import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Footer } from './footer/footer';
import { Header } from './header/header';

@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [RouterOutlet, RouterLink, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Planner');
}
