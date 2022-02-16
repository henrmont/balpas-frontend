import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvalPlantaoBoxComponent } from './eval-plantao-box.component';

describe('EvalPlantaoBoxComponent', () => {
  let component: EvalPlantaoBoxComponent;
  let fixture: ComponentFixture<EvalPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvalPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvalPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
