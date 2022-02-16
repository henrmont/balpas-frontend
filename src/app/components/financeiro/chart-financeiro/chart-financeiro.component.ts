import { FinanceiroService } from './../financeiro.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chart-financeiro',
  templateUrl: './chart-financeiro.component.html',
  styleUrls: ['./chart-financeiro.component.css']
})
export class ChartFinanceiroComponent implements OnInit {

  @Input() id = []
  chart: any = {
    data: [],
    view: [500,300],
    legendPosition: "below",
    legendTitle: "Legenda"
  }

  constructor(
    private financeiroService: FinanceiroService
  ) {}

  ngOnInit(): void {
    this.financeiroService.getChartData(this.id).subscribe(
      (response) => {
        this.chart.data = response
        console.log(this.chart.data)
        console.log(response)
      }
    )
  }
}
