import { PlantaoService } from './../plantao.service';
import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";
import {EvalPlantaoBoxComponent} from "../eval-plantao-box/eval-plantao-box.component";
import {EditPlantaoBoxComponent} from "../edit-plantao-box/edit-plantao-box.component";
import {RemovePlantaoBoxComponent} from "../remove-plantao-box/remove-plantao-box.component";
import {AttachPlantaoBoxComponent} from "../attach-plantao-box/attach-plantao-box.component";

@Component({
  selector: 'app-list-plantao',
  templateUrl: './list-plantao.component.html',
  styleUrls: ['./list-plantao.component.css']
})
export class ListPlantaoComponent implements OnInit {
  data: any

  constructor(
    private plantaoService: PlantaoService,
    private dialog: MatDialog
  ) { }

  ngOnInit(){
    this.plantaoService.getAllPlantao().subscribe(
      (response) => {
        this.data = response
      }
    )
  }

  beforeStartDate(date: any): any {
    const tz = new DatePipe('en-US')
    tz.transform(date, 'en-US');
    if(Date.now() < Date.parse(date)) {
      return true
    } else {
      return false
    }
  }

  afterStartDate(date: any): any {
    const tz = new DatePipe('en-US')
    tz.transform(date, 'en-US');
    if(Date.now() < Date.parse(date)) {
      return false
    } else {
      return true
    }
  }

  evalPlantao(id: number): void {
    const dialogRef = this.dialog.open(EvalPlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id
      }
    });
  }

  editPlantao(id: number): void {
    const dialogRef = this.dialog.open(EditPlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id
      }
    });
  }

  removePlantao(id: number): void {
    const dialogRef = this.dialog.open(RemovePlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id
      }
    });
  }

  attachPlantao(id: number): void {
    const dialogRef = this.dialog.open(AttachPlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id
      }
    });
  }

}
