import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'aiq-overlay-window',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './overlay-window.component.html',
  styleUrl: './overlay-window.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OverlayWindow {

}
