import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeleteTaxeBoxComponent } from './admin-delete-taxe-box.component';

describe('AdminDeleteTaxeBoxComponent', () => {
  let component: AdminDeleteTaxeBoxComponent;
  let fixture: ComponentFixture<AdminDeleteTaxeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeleteTaxeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeleteTaxeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
