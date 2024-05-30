import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './side_bar/side_bar.component';
import { AppBar } from './app_bar/app_bar.component';

@Component({
  selector: 'aiq-root',
  standalone: true,
  imports: [ SideBar, AppBar, RouterOutlet ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'aiq';
}
