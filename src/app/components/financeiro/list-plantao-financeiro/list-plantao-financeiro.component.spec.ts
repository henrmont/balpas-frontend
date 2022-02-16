import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlantaoFinanceiroComponent } from './list-plantao-financeiro.component';

describe('ListPlantaoFinanceiroComponent', () => {
  let component: ListPlantaoFinanceiroComponent;
  let fixture: ComponentFixture<ListPlantaoFinanceiroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlantaoFinanceiroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlantaoFinanceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
