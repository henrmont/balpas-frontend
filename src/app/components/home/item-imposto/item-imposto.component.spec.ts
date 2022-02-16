import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemImpostoComponent } from './item-imposto.component';

describe('ItemImpostoComponent', () => {
  let component: ItemImpostoComponent;
  let fixture: ComponentFixture<ItemImpostoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemImpostoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemImpostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
