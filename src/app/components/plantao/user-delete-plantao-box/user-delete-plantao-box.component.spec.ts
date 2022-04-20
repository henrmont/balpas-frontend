import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDeletePlantaoBoxComponent } from './user-delete-plantao-box.component';

describe('UserDeletePlantaoBoxComponent', () => {
  let component: UserDeletePlantaoBoxComponent;
  let fixture: ComponentFixture<UserDeletePlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDeletePlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDeletePlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
