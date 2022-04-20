import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../common.service';
import { Taxe } from '../taxe.model';
import { TaxeService } from '../taxe.service';

@Component({
  selector: 'app-admin-edit-taxe-box',
  templateUrl: './admin-edit-taxe-box.component.html',
  styleUrls: ['./admin-edit-taxe-box.component.css']
})
export class AdminEditTaxeBoxComponent implements OnInit {

  type: any[] = [
    {value: false, viewValue: 'Integral'},
    {value: true, viewValue: 'Percentual'},
  ];

  taxe: Taxe = {
    id: this.data.id,
    name: '',
    type: false,
    value: 0,
  }

  constructor(
    private dialogRef: MatDialogRef<AdminEditTaxeBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taxeService: TaxeService,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
    this.taxeService.getTaxe(this.data.id).subscribe(
      (response) => {
        this.taxe.name = response.name
        this.taxe.type = response.type
        this.taxe.value = response.value
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit(): void {
    this.taxeService.adminEditTaxe(this.taxe).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.dialogRef.close()
      }
    )
  }

}
