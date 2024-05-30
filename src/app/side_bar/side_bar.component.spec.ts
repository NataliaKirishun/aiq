import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppBar } from './side_bar.component';

describe('AppBar', () => {
  let component: AppBar;
  let fixture: ComponentFixture<AppBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBar]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
