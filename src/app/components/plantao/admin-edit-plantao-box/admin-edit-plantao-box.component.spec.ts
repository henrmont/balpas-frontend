import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPlantaoBoxComponent } from './admin-edit-plantao-box.component';

describe('AdminEditPlantaoBoxComponent', () => {
  let component: AdminEditPlantaoBoxComponent;
  let fixture: ComponentFixture<AdminEditPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
