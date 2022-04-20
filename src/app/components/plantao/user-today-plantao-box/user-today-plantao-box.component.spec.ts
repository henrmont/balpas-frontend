import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTodayPlantaoBoxComponent } from './user-today-plantao-box.component';

describe('UserTodayPlantaoBoxComponent', () => {
  let component: UserTodayPlantaoBoxComponent;
  let fixture: ComponentFixture<UserTodayPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserTodayPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTodayPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
