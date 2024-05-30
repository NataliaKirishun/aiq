import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SideNavGroup } from './side_nav_item';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'aiq-side-nav',
  standalone: true,
  imports: [ MatListModule, RouterModule, MatIconModule, MatDividerModule],
  templateUrl: './side_nav.component.html',
  styleUrl: './side_nav.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNav {
  protected isExpanded = false;
  protected readonly sideNavConfig = [
    [
      {
        icon: 'home',
        text: 'Home Page',
        path: 'home',
      }
    ],
    [
      {
        icon: 'monitoring',
        text: 'Home Page',
        path: 'home4',
      },
      {
        icon: 'analytics',
        text: 'Home Page',
        path: 'home5',
      }
    ],
    [
      {
        icon: 'settings',
        text: 'Home Page',
        path: 'home6',
      },
      {
        icon: 'calendar_month',
        text: 'Home Page',
        path: 'home7',
      }
    ]
  ] as const satisfies SideNavGroup[];

  public toggleSideBar() {
    console.log('*** toggleSideBar');
    this.isExpanded = !this.isExpanded;
  }
}
