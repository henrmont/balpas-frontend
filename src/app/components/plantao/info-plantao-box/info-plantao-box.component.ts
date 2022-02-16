import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {PlantaoService} from "../plantao.service";
import {Router} from "@angular/router";
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Plantao} from "../plantao.model";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-info-plantao-box',
  templateUrl: './info-plantao-box.component.html',
  styleUrls: ['./info-plantao-box.component.css']
})
export class InfoPlantaoBoxComponent implements OnInit {

  plantao: Plantao = {
    type: '',
    local: '',
    dinicio: '',
    hinicio: '',
  }

  constructor(
    private dialogRef: MatDialogRef<InfoPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private plantaoService: PlantaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.plantaoService.getById(this.data.id).subscribe(
      (response) => {
        this.plantao.type = response.description
        this.plantao.local = response.local
        this.plantao.dinicio = this.plantao.hinicio = response.inicio
      },
      (err) => {
        this.dialogRef.close()
        this.plantaoService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

}
