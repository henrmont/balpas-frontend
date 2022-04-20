import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminStatusPlantaoBoxComponent } from './admin-status-plantao-box.component';

describe('AdminStatusPlantaoBoxComponent', () => {
  let component: AdminStatusPlantaoBoxComponent;
  let fixture: ComponentFixture<AdminStatusPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminStatusPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminStatusPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
