import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesPlantaoBoxComponent } from './taxes-plantao-box.component';

describe('TaxesPlantaoBoxComponent', () => {
  let component: TaxesPlantaoBoxComponent;
  let fixture: ComponentFixture<TaxesPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxesPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxesPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
