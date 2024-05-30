import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Logo } from '../logo/logo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'aiq-app-bar',
  standalone: true,
  imports: [ MatButtonModule, Logo, MatToolbarModule ],
  templateUrl: './app_bar.component.html',
  styleUrl: './app_bar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppBar {
  private router = inject(Router);

  protected openCreateTrainigPage(): void {
    this.router.navigate(['training', 'create']);
  }
}
