import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlantaoBoxComponent } from './edit-plantao-box.component';

describe('EditPlantaoBoxComponent', () => {
  let component: EditPlantaoBoxComponent;
  let fixture: ComponentFixture<EditPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
