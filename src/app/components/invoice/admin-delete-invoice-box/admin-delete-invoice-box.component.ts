import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-admin-delete-invoice-box',
  templateUrl: './admin-delete-invoice-box.component.html',
  styleUrls: ['./admin-delete-invoice-box.component.css']
})
export class AdminDeleteInvoiceBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AdminDeleteInvoiceBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private invoiceService: InvoiceService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit() {
    this.invoiceService.adminDeleteInvoice(this.data).subscribe(
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
