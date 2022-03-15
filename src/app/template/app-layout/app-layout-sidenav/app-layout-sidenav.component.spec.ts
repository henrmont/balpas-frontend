import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutSidenavComponent } from './app-layout-sidenav.component';

describe('AppLayoutSidenavComponent', () => {
  let component: AppLayoutSidenavComponent;
  let fixture: ComponentFixture<AppLayoutSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayoutSidenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
