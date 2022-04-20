import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAttachPlantaoBoxComponent } from './admin-attach-plantao-box.component';

describe('AdminAttachPlantaoBoxComponent', () => {
  let component: AdminAttachPlantaoBoxComponent;
  let fixture: ComponentFixture<AdminAttachPlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminAttachPlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminAttachPlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
