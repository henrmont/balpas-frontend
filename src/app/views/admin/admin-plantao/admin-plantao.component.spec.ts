import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlantaoComponent } from './admin-plantao.component';

describe('AdminPlantaoComponent', () => {
  let component: AdminPlantaoComponent;
  let fixture: ComponentFixture<AdminPlantaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPlantaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlantaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
