import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';
import { ModalModule } from 'ngx-bootstrap/modal';
// import { CollapseModule } from 'ngx-bootstrap/collapse';
// import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    Header,
    Navbar,
    ModalModule 
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('portfolio_project--no-standalone');
}
