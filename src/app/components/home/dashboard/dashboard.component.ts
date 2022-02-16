import { HomeService } from './../home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id: any = 0
  chart: any = {
    data: [],
    view: [600,400],
    legendPosition: "below",
    legendTitle: "Legenda"
  }

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getUserInfo().subscribe(
      (response) => {
        this.homeService.getDashboardData(response.id).subscribe(
          (response) => {
            this.chart.data = response
            console.log(response)
          }
        )
      }
    )
    
  }

  
  
}
