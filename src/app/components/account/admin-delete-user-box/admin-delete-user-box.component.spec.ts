import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteUserBoxComponent } from './admin-delete-user-box.component';

describe('AdminDeleteUserBoxComponent', () => {
  let component: AdminDeleteUserBoxComponent;
  let fixture: ComponentFixture<AdminDeleteUserBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteUserBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteUserBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
