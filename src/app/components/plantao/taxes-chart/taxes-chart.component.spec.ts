import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesChartComponent } from './taxes-chart.component';

describe('TaxesChartComponent', () => {
  let component: TaxesChartComponent;
  let fixture: ComponentFixture<TaxesChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxesChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
