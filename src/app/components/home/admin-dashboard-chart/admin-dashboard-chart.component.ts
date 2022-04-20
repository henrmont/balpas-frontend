import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-admin-dashboard-chart',
  templateUrl: './admin-dashboard-chart.component.html',
  styleUrls: ['./admin-dashboard-chart.component.css']
})
export class AdminDashboardChartComponent implements OnInit {

  chartData: any

  view: any = [500, 300];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = true;
  legendPosition: any = 'below'

  colorScheme: any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getAdminDashboardData().subscribe(
      (response) => {
        this.chartData = response
      }
    )
  }

}
