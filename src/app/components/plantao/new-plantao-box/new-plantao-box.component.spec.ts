import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPlantaoBoxComponent } from './new-plantao-box.component';

describe('NewPlantaoBoxComponent', () => {
  let component: NewPlantaoBoxComponent;
  let fixture: ComponentFixture<NewPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
