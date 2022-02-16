import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlantaoBtnComponent } from './new-plantao-btn.component';

describe('NewPlantaoBtnComponent', () => {
  let component: NewPlantaoBtnComponent;
  let fixture: ComponentFixture<NewPlantaoBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlantaoBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlantaoBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
