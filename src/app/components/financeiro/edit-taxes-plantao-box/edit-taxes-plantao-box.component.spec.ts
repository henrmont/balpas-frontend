import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaxesPlantaoBoxComponent } from './edit-taxes-plantao-box.component';

describe('EditTaxesPlantaoBoxComponent', () => {
  let component: EditTaxesPlantaoBoxComponent;
  let fixture: ComponentFixture<EditTaxesPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTaxesPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaxesPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
