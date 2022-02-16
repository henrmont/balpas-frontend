import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTaxesPlantaoBoxComponent } from './new-taxes-plantao-box.component';

describe('NewTaxesPlantaoBoxComponent', () => {
  let component: NewTaxesPlantaoBoxComponent;
  let fixture: ComponentFixture<NewTaxesPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTaxesPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTaxesPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
