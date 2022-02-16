import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveTaxesPlantaoBoxComponent } from './remove-taxes-plantao-box.component';

describe('RemoveTaxesPlantaoBoxComponent', () => {
  let component: RemoveTaxesPlantaoBoxComponent;
  let fixture: ComponentFixture<RemoveTaxesPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveTaxesPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoveTaxesPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
