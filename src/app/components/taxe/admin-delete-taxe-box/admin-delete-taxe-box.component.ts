import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../common.service';
import { TaxeService } from '../taxe.service';

@Component({
  selector: 'app-admin-delete-taxe-box',
  templateUrl: './admin-delete-taxe-box.component.html',
  styleUrls: ['./admin-delete-taxe-box.component.css']
})
export class AdminDeleteTaxeBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AdminDeleteTaxeBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private taxeService: TaxeService,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit() {
    this.taxeService.adminDeleteTaxe(this.data).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.dialogRef.close()
      }
    )
  }

}
