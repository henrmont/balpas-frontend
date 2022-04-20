import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatusInvoiceBoxComponent } from './admin-status-invoice-box.component';

describe('AdminStatusInvoiceBoxComponent', () => {
  let component: AdminStatusInvoiceBoxComponent;
  let fixture: ComponentFixture<AdminStatusInvoiceBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatusInvoiceBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatusInvoiceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
