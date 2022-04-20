import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CommonService } from '../../common.service';
import { AdminDeleteTaxeBoxComponent } from '../../taxe/admin-delete-taxe-box/admin-delete-taxe-box.component';
import { AdminEditTaxeBoxComponent } from '../../taxe/admin-edit-taxe-box/admin-edit-taxe-box.component';
import { AdminNewTaxeBoxComponent } from '../../taxe/admin-new-taxe-box/admin-new-taxe-box.component';
import { TaxeService } from '../../taxe/taxe.service';
import { PlantaoService } from '../plantao.service';

@Component({
  selector: 'app-admin-taxes-plantao-box',
  templateUrl: './admin-taxes-plantao-box.component.html',
  styleUrls: ['./admin-taxes-plantao-box.component.css']
})
export class AdminTaxesPlantaoBoxComponent implements OnInit {

  interval!: any
  taxes!: any[]
  values!: any[]

  constructor(
    private dialogRef: MatDialogRef<AdminTaxesPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private taxeService: TaxeService,
    private plantaoService: PlantaoService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.plantaoService.getPlantaoValue(this.data.id).subscribe(
      (response) => {
        this.values = response
      }
    )
    this.taxeService.adminGetTaxes(this.data.id).subscribe(
      (response) => {
        this.taxes = response
      }
    )
    this.interval = setInterval(
      () => {
        this.plantaoService.getPlantaoValue(this.data.id).subscribe(
          (response) => {
            this.values = response
          }
        )
        this.taxeService.adminGetTaxes(this.data.id).subscribe(
          (response) => {
            this.taxes = response
          }
        )
      }, environment.interval
    )
  }

  close(): void {
    this.dialogRef.close()
  }

  newTaxe(): void {
    const dialogRef = this.dialog.open(AdminNewTaxeBoxComponent, {
      width: '35rem',
      data: {
        id: this.data.id
      },
      disableClose: true
    });
  }

  editTaxe(id: number): void {
    const dialogRef = this.dialog.open(AdminEditTaxeBoxComponent, {
      width: '35rem',
      data: {
        id: id
      },
      disableClose: true
    });
  }

  deleteTaxe(id: number): void {
    const dialogRef = this.dialog.open(AdminDeleteTaxeBoxComponent, {
      width: '35rem',
      data: {
        id: id
      },
      disableClose: true
    });
  }

}
