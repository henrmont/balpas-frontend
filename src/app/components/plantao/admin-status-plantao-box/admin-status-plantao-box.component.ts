import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { Plantao } from '../plantao.model';
import { PlantaoService } from '../plantao.service';

@Component({
  selector: 'app-admin-status-plantao-box',
  templateUrl: './admin-status-plantao-box.component.html',
  styleUrls: ['./admin-status-plantao-box.component.css']
})
export class AdminStatusPlantaoBoxComponent implements OnInit {

  note: any[] = [
    {value: false, viewValue: 'Nota não solicitada'},
    {value: true, viewValue: 'Nota emitida'},
    {value: null, viewValue: 'Sem nota'},
  ];

  payment: any[] = [
    {value: false, viewValue: 'Pendente'},
    {value: true, viewValue: 'Pago'},
  ];

  plantao: Plantao = {
    id: this.data.id,
    note: false,
    payment: false
  }

  constructor(
    private dialogRef: MatDialogRef<AdminStatusPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private plantaoService: PlantaoService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.plantaoService.getPlantao(this.data.id).subscribe(
      (response) => {
        this.plantao.note = response.note
        this.plantao.payment = response.payment
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit(): void {
    this.plantaoService.adminStatusPlantao(this.plantao).subscribe(
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

}
