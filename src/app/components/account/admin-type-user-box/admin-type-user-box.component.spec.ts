import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTypeUserBoxComponent } from './admin-type-user-box.component';

describe('AdminTypeUserBoxComponent', () => {
  let component: AdminTypeUserBoxComponent;
  let fixture: ComponentFixture<AdminTypeUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTypeUserBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTypeUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
