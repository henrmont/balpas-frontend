import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayoutNavComponent } from './app-layout-nav.component';

describe('AppLayoutNavComponent', () => {
  let component: AppLayoutNavComponent;
  let fixture: ComponentFixture<AppLayoutNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLayoutNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
