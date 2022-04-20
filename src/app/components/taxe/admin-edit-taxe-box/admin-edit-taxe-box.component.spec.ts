import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditTaxeBoxComponent } from './admin-edit-taxe-box.component';

describe('AdminEditTaxeBoxComponent', () => {
  let component: AdminEditTaxeBoxComponent;
  let fixture: ComponentFixture<AdminEditTaxeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditTaxeBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditTaxeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
