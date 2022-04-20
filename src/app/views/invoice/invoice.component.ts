import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { AccountService } from 'src/app/components/account/account.service';
import { InvoiceService } from 'src/app/components/invoice/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  invoices: any

  constructor(
    private accountService: AccountService,
    private invoiceService: InvoiceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(
      (response) => {
        if (response.roles.indexOf("ROLE_USER") == -1) {
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['admin']);
          });
        }
      }
    )
    this.invoiceService.adminGetInvoices().subscribe(
      (response) => {
        this.invoices = response
      }
    )
  }

  fileSave(data: any, filename: string) {
    const arr = data.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }

    const file =  new File([u8arr], filename, { type: mime });
    
    FileSaver.saveAs(file, filename);
  }

}
