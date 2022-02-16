import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayBoxComponent } from './today-box.component';

describe('TodayBoxComponent', () => {
  let component: TodayBoxComponent;
  let fixture: ComponentFixture<TodayBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
