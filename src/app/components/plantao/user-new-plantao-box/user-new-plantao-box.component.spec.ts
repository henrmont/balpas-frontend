import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNewPlantaoBoxComponent } from './user-new-plantao-box.component';

describe('UserNewPlantaoBoxComponent', () => {
  let component: UserNewPlantaoBoxComponent;
  let fixture: ComponentFixture<UserNewPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserNewPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNewPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
