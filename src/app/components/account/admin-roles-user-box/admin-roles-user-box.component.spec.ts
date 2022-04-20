import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRolesUserBoxComponent } from './admin-roles-user-box.component';

describe('AdminRolesUserBoxComponent', () => {
  let component: AdminRolesUserBoxComponent;
  let fixture: ComponentFixture<AdminRolesUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminRolesUserBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRolesUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
