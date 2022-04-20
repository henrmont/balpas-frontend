import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAttachPlantaoBoxComponent } from './user-attach-plantao-box.component';

describe('UserAttachPlantaoBoxComponent', () => {
  let component: UserAttachPlantaoBoxComponent;
  let fixture: ComponentFixture<UserAttachPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserAttachPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAttachPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
