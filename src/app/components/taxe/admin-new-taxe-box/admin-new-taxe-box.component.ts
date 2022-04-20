import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../common.service';
import { Taxe } from '../taxe.model';
import { TaxeService } from '../taxe.service';

@Component({
  selector: 'app-admin-new-taxe-box',
  templateUrl: './admin-new-taxe-box.component.html',
  styleUrls: ['./admin-new-taxe-box.component.css']
})
export class AdminNewTaxeBoxComponent implements OnInit {

  type: any[] = [
    {value: false, viewValue: 'Integral'},
    {value: true, viewValue: 'Percentual'},
  ];

  taxe: Taxe = {
    id: this.data.id,
    name: '',
    type: false,
    value: null,
  }

  constructor(
    private dialogRef: MatDialogRef<AdminNewTaxeBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taxeService: TaxeService,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit(): void {
    this.taxeService.adminRegisterTaxe(this.taxe).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.dialogRef.close()
      }
    )
  }

}
