import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDeletePlantaoBoxComponent } from './admin-delete-plantao-box.component';

describe('AdminDeletePlantaoBoxComponent', () => {
  let component: AdminDeletePlantaoBoxComponent;
  let fixture: ComponentFixture<AdminDeletePlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminDeletePlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminDeletePlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
