import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTaxesPlantaoBoxComponent } from './admin-taxes-plantao-box.component';

describe('AdminTaxesPlantaoBoxComponent', () => {
  let component: AdminTaxesPlantaoBoxComponent;
  let fixture: ComponentFixture<AdminTaxesPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTaxesPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTaxesPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
