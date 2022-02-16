import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartFinanceiroComponent } from './chart-financeiro.component';

describe('ChartFinanceiroComponent', () => {
  let component: ChartFinanceiroComponent;
  let fixture: ComponentFixture<ChartFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartFinanceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
