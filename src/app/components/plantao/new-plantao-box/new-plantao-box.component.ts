import { Router } from '@angular/router';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { PlantaoService } from './../plantao.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import {Plantao} from "../plantao.model";

export const DATE_FORMAT = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-new-plantao-box',
  templateUrl: './new-plantao-box.component.html',
  styleUrls: ['./new-plantao-box.component.css'],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMAT},
  ]
})
export class NewPlantaoBoxComponent implements OnInit {

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
    private dialogRef: MatDialogRef<NewPlantaoBoxComponent>,
    private plantaoService: PlantaoService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit(): void {
    this.plantaoService.registerPlantao(this.plantao).subscribe(
      (response) => {
        this.plantaoService.showMessage(response.message)
        this.dialogRef.close()
      },
      (err) => {
        this.plantaoService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

  onChange(type: any): void {
    if (type == "Outros") {
      this.isEnable = true
    } else {
      this.isEnable = false
    }
  }

}
