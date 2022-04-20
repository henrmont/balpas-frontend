import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserGetPlantaoBoxComponent } from './user-get-plantao-box.component';

describe('UserGetPlantaoBoxComponent', () => {
  let component: UserGetPlantaoBoxComponent;
  let fixture: ComponentFixture<UserGetPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserGetPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserGetPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
