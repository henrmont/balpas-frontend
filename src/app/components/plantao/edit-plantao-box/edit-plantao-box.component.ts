import {Component, Inject, OnInit} from '@angular/core';
import {Plantao} from "../plantao.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {PlantaoService} from "../plantao.service";
import {Router} from "@angular/router";
import {NgxMaterialTimepickerTheme} from "ngx-material-timepicker";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-edit-plantao-box',
  templateUrl: './edit-plantao-box.component.html',
  styleUrls: ['./edit-plantao-box.component.css']
})
export class EditPlantaoBoxComponent implements OnInit {

  balpas: NgxMaterialTimepickerTheme = {
    container: {
      bodyBackgroundColor: '#fff',
      buttonColor: 'rgb(40, 43, 98)'
    },
    dial: {
      dialBackgroundColor: 'rgb(231, 64, 84)',
    },
    clockFace: {
      clockFaceBackgroundColor: '#ddd',
      clockHandColor: 'rgb(231, 64, 84)',
      clockFaceTimeInactiveColor: 'rgb(40, 43, 98)'
    }
  }

  types: any[] = [
    {value: 'Enfermaria', viewValue: 'Enfermaria'},
    {value: 'UTI', viewValue: 'UTI'},
    {value: 'Pronto atendimento', viewValue: 'Pronto Atendimento'},
    {value: 'Transporte', viewValue: 'Transporte'},
    {value: 'Especialidades', viewValue: 'Especialidades'},
    {value: 'Outros', viewValue: 'Outros...'},
  ];

  plantao: Plantao = {
    type: '',
    local: '',
    dinicio: '',
    hinicio: '',
    other: '',
    duration: 0,
    value: 0,
    company: ''
  }

  isEnable: any = false

  constructor(
    private dialogRef: MatDialogRef<EditPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private plantaoService: PlantaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.plantaoService.getById(this.data.id).subscribe(
      (response) => {
        this.plantao.type = response.type
        this.plantao.other = response.other
        this.plantao.type = response.description
        this.plantao.local = response.local
        this.plantao.dinicio = this.plantao.hinicio = response.inicio
        this.plantao.duration = response.duration
        this.plantao.value = response.value
        this.plantao.company = response.company
      },
      (err) => {
        this.dialogRef.close()
        this.plantaoService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

  onSubmit(): void {
    this.plantaoService.editPlantao(this.data.id, this.plantao).subscribe(
      (response) => {
        this.plantaoService.showMessage(response.message)
        this.dialogRef.close()
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

  onChange(type: any): void {
    if (type == "Outros") {
      this.isEnable = true
    } else {
      this.isEnable = false
    }
  }

}
