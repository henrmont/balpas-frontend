import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteInvoiceBoxComponent } from './admin-delete-invoice-box.component';

describe('AdminDeleteInvoiceBoxComponent', () => {
  let component: AdminDeleteInvoiceBoxComponent;
  let fixture: ComponentFixture<AdminDeleteInvoiceBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteInvoiceBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteInvoiceBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
