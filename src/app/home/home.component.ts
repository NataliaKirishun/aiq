import { Component, ChangeDetectionStrategy } from '@angular/core';
import { OverlayWindow } from '../overlay-window/overlay-window.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'aiq-home',
  standalone: true,
  imports: [OverlayWindow, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {

}
