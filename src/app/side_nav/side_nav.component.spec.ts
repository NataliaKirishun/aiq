import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNav } from './side_nav.component';

describe('SideNavBarComponent', () => {
  let component: SideNav;
  let fixture: ComponentFixture<SideNav>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SideNav]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SideNav);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
