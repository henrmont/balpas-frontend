import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-item-liquido',
  templateUrl: './item-liquido.component.html',
  styleUrls: ['./item-liquido.component.css']
})
export class ItemLiquidoComponent implements OnInit {

  liquido!: any

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getValuesData().subscribe(
      (response) => {
        this.liquido = response[0].value
      }
    )
  }

}
