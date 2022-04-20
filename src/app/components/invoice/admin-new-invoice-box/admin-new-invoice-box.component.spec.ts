import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewInvoiceBoxComponent } from './admin-new-invoice-box.component';

describe('AdminNewInvoiceBoxComponent', () => {
  let component: AdminNewInvoiceBoxComponent;
  let fixture: ComponentFixture<AdminNewInvoiceBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewInvoiceBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewInvoiceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
