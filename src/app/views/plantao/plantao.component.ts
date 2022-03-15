import { Component, OnInit } from '@angular/core';

export var single = [
  {
    "name": "Líquido",
    "value": 8940000
  },
  {
    "name": "Imposto 1",
    "value": 2000000
  },
  {
    "name": "Imposto 2",
    "value": 2000000
  },
  {
    "name": "Imposto 3",
    "value": 2000000
  }
];

@Component({
  selector: 'app-plantao',
  templateUrl: './plantao.component.html',
  styleUrls: ['./plantao.component.css']
})
export class PlantaoComponent implements OnInit {

  single!: any;
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

  constructor() {
    Object.assign(this, { single });
  }

  ngOnInit(): void {
    
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

}
