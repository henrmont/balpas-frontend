import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { AccountService } from '../../account/account.service';
import { CommonService } from '../../common.service';
import { Invoice } from '../invoice.model';
import { InvoiceService } from '../invoice.service';

@Component({
  selector: 'app-admin-new-invoice-box',
  templateUrl: './admin-new-invoice-box.component.html',
  styleUrls: ['./admin-new-invoice-box.component.css']
})
export class AdminNewInvoiceBoxComponent implements OnInit {

  formControl = new FormControl();
  options!: any[]

  isAttached: boolean = false
  isUser: boolean = false

  invoice: Invoice = {
    user: '',
    value: null,
    dueDate: '',
    pdf: ''
  }

  fileType: string = 'application/pdf, application/x-pdf'

  constructor(
    private dialogRef: MatDialogRef<AdminNewInvoiceBoxComponent>,
    private accountService: AccountService,
    private invoiceService: InvoiceService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

  onKeyUp(): void {
    this.accountService.getFiltredUsers(this.invoice).subscribe(
      (response) => {
        this.options = response
      }
    )
  }

  onBlur(): void {
    this.accountService.getFiltredValidUsers(this.invoice).subscribe(
      (response) => {
        this.isUser = response.valid
      }
    )
  }


  onSubmit(): void {
    this.invoiceService.adminRegisterInvoice(this.invoice).subscribe(
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
        this.isAttached = true
      }
      
    }

  }

}
