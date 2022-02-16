import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFaturaComponent } from './item-fatura.component';

describe('ItemFaturaComponent', () => {
  let component: ItemFaturaComponent;
  let fixture: ComponentFixture<ItemFaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemFaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
