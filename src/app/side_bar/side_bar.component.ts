import { ChangeDetectionStrategy, Component, viewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { SideNav } from '../side_nav/side_nav.component';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'aiq-side-bar',
  standalone: true,
  imports: [ MatToolbarModule, MatIconModule, SideNav, MatButtonModule ],
  templateUrl: './side_bar.component.html',
  styleUrl: './side_bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideBar {
  private readonly sideNav = viewChild.required(SideNav);

  protected toggleSideBar() {
    this.sideNav().toggleSideBar();
  }
}
