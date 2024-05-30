import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayWindowComponent } from './overlay-window.component';

describe('OverlayWindowComponent', () => {
  let component: OverlayWindowComponent;
  let fixture: ComponentFixture<OverlayWindowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OverlayWindowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OverlayWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
