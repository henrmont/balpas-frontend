import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-admin-status-invoice-box',
  templateUrl: './admin-status-invoice-box.component.html',
  styleUrls: ['./admin-status-invoice-box.component.css']
})
export class AdminStatusInvoiceBoxComponent implements OnInit {

  isPaid!: boolean

  constructor(
    private dialogRef: MatDialogRef<AdminStatusInvoiceBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private invoiceService: InvoiceService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.invoiceService.getInvoice(this.data.id).subscribe(
      (response) => {
        this.isPaid = response.isPaid
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit() {
    this.invoiceService.adminStatusInvoice(this.data).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['admin/fatura']);
        });
        this.dialogRef.close()
      }
    )
  }

}
