import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditInvoiceBoxComponent } from './admin-edit-invoice-box.component';

describe('AdminEditInvoiceBoxComponent', () => {
  let component: AdminEditInvoiceBoxComponent;
  let fixture: ComponentFixture<AdminEditInvoiceBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditInvoiceBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditInvoiceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
