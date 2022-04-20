import { Component, Input, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-user-dashboard-chart',
  templateUrl: './user-dashboard-chart.component.html',
  styleUrls: ['./user-dashboard-chart.component.css']
})
export class UserDashboardChartComponent implements OnInit {

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
    this.homeService.getDashboardData().subscribe(
      (response) => {
        this.chartData = response
      }
    )
  }

}
