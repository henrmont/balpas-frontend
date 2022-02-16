import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemLiquidoComponent } from './item-liquido.component';

describe('ItemLiquidoComponent', () => {
  let component: ItemLiquidoComponent;
  let fixture: ComponentFixture<ItemLiquidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemLiquidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemLiquidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
