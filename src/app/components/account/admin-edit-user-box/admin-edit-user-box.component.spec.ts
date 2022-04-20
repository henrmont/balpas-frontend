import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditUserBoxComponent } from './admin-edit-user-box.component';

describe('AdminEditUserBoxComponent', () => {
  let component: AdminEditUserBoxComponent;
  let fixture: ComponentFixture<AdminEditUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditUserBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
