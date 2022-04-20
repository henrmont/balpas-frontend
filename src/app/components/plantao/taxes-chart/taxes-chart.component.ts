import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlantaoService } from '../plantao.service';

@Component({
  selector: 'app-taxes-chart',
  templateUrl: './taxes-chart.component.html',
  styleUrls: ['./taxes-chart.component.css']
})
export class TaxesChartComponent implements OnInit {

  chartData: any

  @Input() id!: number
  interval: any
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
    private plantaoService: PlantaoService
  ) { }

  ngOnInit(): void {
    this.plantaoService.getPlantaoValue(this.id).subscribe(
      (response) => {
        this.chartData = response
      }
    )
    this.interval = setInterval(
      () => {
        this.plantaoService.getPlantaoValue(this.id).subscribe(
          (response) => {
            this.chartData = response
          }
        )
      }, environment.interval
    )
  }

}
