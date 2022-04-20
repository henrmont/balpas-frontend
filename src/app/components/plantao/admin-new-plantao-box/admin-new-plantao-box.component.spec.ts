import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNewPlantaoBoxComponent } from './admin-new-plantao-box.component';

describe('AdminNewPlantaoBoxComponent', () => {
  let component: AdminNewPlantaoBoxComponent;
  let fixture: ComponentFixture<AdminNewPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNewPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNewPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
