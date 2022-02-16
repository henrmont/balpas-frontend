import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlantaoComponent } from './list-plantao.component';

describe('ListPlantaoComponent', () => {
  let component: ListPlantaoComponent;
  let fixture: ComponentFixture<ListPlantaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPlantaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
