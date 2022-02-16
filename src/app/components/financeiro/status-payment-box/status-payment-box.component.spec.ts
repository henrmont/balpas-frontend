import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusPaymentBoxComponent } from './status-payment-box.component';

describe('StatusPaymentBoxComponent', () => {
  let component: StatusPaymentBoxComponent;
  let fixture: ComponentFixture<StatusPaymentBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusPaymentBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusPaymentBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
