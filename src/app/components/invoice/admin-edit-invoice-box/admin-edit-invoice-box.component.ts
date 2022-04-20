import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { Invoice } from '../invoice.model';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-admin-edit-invoice-box',
  templateUrl: './admin-edit-invoice-box.component.html',
  styleUrls: ['./admin-edit-invoice-box.component.css']
})
export class AdminEditInvoiceBoxComponent implements OnInit {

  invoice: Invoice = {
    id: this.data.id,
    user: '',
    value: null,
    dueDate: '',
    pdf: ''
  }

  fileType: string = 'application/pdf, application/x-pdf'

  constructor(
    private dialogRef: MatDialogRef<AdminEditInvoiceBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private invoiceService: InvoiceService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.invoiceService.getInvoice(this.data.id).subscribe(
      (response) => {
        this.invoice.user = response.user
        this.invoice.value = response.value
        this.invoice.dueDate = response.dueDate
        this.invoice.pdf = response.pdf
      }
    )

  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit(): void {
    this.invoiceService.adminEditInvoice(this.invoice).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['admin/fatura']);
        });
        this.dialogRef.close()
      }
    )
  }

  onFileChange(event: any): void {

    const file:File = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file as Blob)
    reader.onloadend = (e) =>  {
      reader.result as string

      if (reader.result) {
        this.invoice.pdf = reader.result
      }
      
    }

  }

}
