import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { CommonService } from '../../common.service';
import { Plantao } from '../plantao.model';
import { PlantaoService } from '../plantao.service';

@Component({
  selector: 'app-user-new-plantao-box',
  templateUrl: './user-new-plantao-box.component.html',
  styleUrls: ['./user-new-plantao-box.component.css']
})
export class UserNewPlantaoBoxComponent implements OnInit {

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
    dstart: '',
    hstart: '',
    other: '',
    duration: null,
    value: null,
    company: ''
  }

  isEnable: any = false

  constructor(
    private dialogRef: MatDialogRef<UserNewPlantaoBoxComponent>,
    private plantaoService: PlantaoService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit(): void {
    this.plantaoService.userRegisterPlantao(this.plantao).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['plantao']);
        });
        this.dialogRef.close()
      }
    )
  }

  onChange(type: any): void {
    if (type == "Outros") {
      this.isEnable = true
    } else {
      this.plantao.other = ''
      this.isEnable = false
    }
  }

}
