import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminValidatePlantaoBoxComponent } from './admin-validate-plantao-box.component';

describe('AdminValidatePlantaoBoxComponent', () => {
  let component: AdminValidatePlantaoBoxComponent;
  let fixture: ComponentFixture<AdminValidatePlantaoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminValidatePlantaoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminValidatePlantaoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
