import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovePlantaoBoxComponent } from './remove-plantao-box.component';

describe('RemovePlantaoBoxComponent', () => {
  let component: RemovePlantaoBoxComponent;
  let fixture: ComponentFixture<RemovePlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemovePlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovePlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
