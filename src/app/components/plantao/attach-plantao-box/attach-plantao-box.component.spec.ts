import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachPlantaoBoxComponent } from './attach-plantao-box.component';

describe('AttachPlantaoBoxComponent', () => {
  let component: AttachPlantaoBoxComponent;
  let fixture: ComponentFixture<AttachPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttachPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
