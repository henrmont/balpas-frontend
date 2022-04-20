import { Component, OnInit } from '@angular/core';
import { PlantaoService } from '../../plantao/plantao.service';

@Component({
  selector: 'app-item-plantao',
  templateUrl: './item-plantao.component.html',
  styleUrls: ['./item-plantao.component.css']
})
export class ItemPlantaoComponent implements OnInit {

  plantao: any = {
    local: '',
    startAt: null
  }

  constructor(
    private plantaoService: PlantaoService
  ) { }

  ngOnInit(): void {
    this.plantaoService.getLatestPlantao().subscribe(
      (response) => {
        this.plantao.local = response[0].local
        this.plantao.startAt = response[0].startAt
      }
    )
  }

}
