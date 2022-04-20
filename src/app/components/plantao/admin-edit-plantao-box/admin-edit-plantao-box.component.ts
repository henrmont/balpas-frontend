import { Component, Inject, LOCALE_ID, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { CommonService } from '../../common.service';
import { Plantao } from '../plantao.model';
import { PlantaoService } from '../plantao.service';

@Component({
  selector: 'app-admin-edit-plantao-box',
  templateUrl: './admin-edit-plantao-box.component.html',
  styleUrls: ['./admin-edit-plantao-box.component.css']
})
export class AdminEditPlantaoBoxComponent implements OnInit {

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
    id: this.data.id,
    type: '',
    local: '',
    dstart: '',
    hstart: '',
    other: '',
    duration: 0,
    value: 0,
    company: ''
  }

  isEnable: any = false

  constructor(
    private dialogRef: MatDialogRef<AdminEditPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private plantaoService: PlantaoService,
    private commonService: CommonService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.plantaoService.getPlantao(this.data.id).subscribe(
      (response) => {
        this.plantao.type = response.type
        this.plantao.other = response.other
        this.plantao.local = response.local
        this.plantao.duration = response.duration
        this.plantao.value = response.value
        this.plantao.company = response.company
        this.plantao.dstart = response.startAt

        this.onChange(this.plantao.type)
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit(): void {
    this.plantaoService.adminEditPlantao(this.plantao).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        if (this.data.isAdmin) {
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['admin/plantao']);
          });
        } else {
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['plantao']);
          });
        }
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
