import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-item-imposto',
  templateUrl: './item-imposto.component.html',
  styleUrls: ['./item-imposto.component.css']
})
export class ItemImpostoComponent implements OnInit {

  imposto!: any

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit(): void {
    this.homeService.getValuesData().subscribe(
      (response) => {
        this.imposto = response[1].value
      }
    )
  }

}
