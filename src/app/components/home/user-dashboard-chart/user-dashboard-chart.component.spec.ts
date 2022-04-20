import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardChartComponent } from './user-dashboard-chart.component';

describe('UserDashboardChartComponent', () => {
  let component: UserDashboardChartComponent;
  let fixture: ComponentFixture<UserDashboardChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDashboardChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDashboardChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
