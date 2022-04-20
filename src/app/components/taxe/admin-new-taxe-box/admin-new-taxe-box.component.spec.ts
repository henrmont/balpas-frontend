import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewTaxeBoxComponent } from './admin-new-taxe-box.component';

describe('AdminNewTaxeBoxComponent', () => {
  let component: AdminNewTaxeBoxComponent;
  let fixture: ComponentFixture<AdminNewTaxeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewTaxeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewTaxeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
