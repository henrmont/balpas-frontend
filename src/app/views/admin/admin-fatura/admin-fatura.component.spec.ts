import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFaturaComponent } from './admin-fatura.component';

describe('AdminFaturaComponent', () => {
  let component: AdminFaturaComponent;
  let fixture: ComponentFixture<AdminFaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminFaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
