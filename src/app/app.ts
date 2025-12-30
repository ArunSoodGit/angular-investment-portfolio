import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SidebarComponent} from './core/navigation/sidebar-component/sidebar-component';
import {NavbarComponent} from './core/navigation/navbar-component/navbar-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, NavbarComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-managment');
}
