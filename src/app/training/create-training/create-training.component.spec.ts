import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTarining } from './create-training.component';

describe('CreateTariningComponent', () => {
  let component: CreateTarining;
  let fixture: ComponentFixture<CreateTarining>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateTarining]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateTarining);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
