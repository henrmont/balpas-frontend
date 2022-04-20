import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminValidateUserBoxComponent } from './admin-validate-user-box.component';

describe('AdminValidateUserBoxComponent', () => {
  let component: AdminValidateUserBoxComponent;
  let fixture: ComponentFixture<AdminValidateUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminValidateUserBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminValidateUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
