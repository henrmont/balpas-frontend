import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteAttachBoxComponent } from './admin-delete-attach-box.component';

describe('AdminDeleteAttachBoxComponent', () => {
  let component: AdminDeleteAttachBoxComponent;
  let fixture: ComponentFixture<AdminDeleteAttachBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteAttachBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteAttachBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
