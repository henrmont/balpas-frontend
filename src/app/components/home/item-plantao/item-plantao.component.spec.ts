import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPlantaoComponent } from './item-plantao.component';

describe('ItemPlantaoComponent', () => {
  let component: ItemPlantaoComponent;
  let fixture: ComponentFixture<ItemPlantaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPlantaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
