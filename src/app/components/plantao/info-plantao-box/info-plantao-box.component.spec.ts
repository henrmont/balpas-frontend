import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPlantaoBoxComponent } from './info-plantao-box.component';

describe('InfoPlantaoBoxComponent', () => {
  let component: InfoPlantaoBoxComponent;
  let fixture: ComponentFixture<InfoPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
