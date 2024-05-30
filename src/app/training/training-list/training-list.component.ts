import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'aiq-training-list',
  standalone: true,
  imports: [],
  templateUrl: './training-list.component.html',
  styleUrl: './training-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrainingList {

}
