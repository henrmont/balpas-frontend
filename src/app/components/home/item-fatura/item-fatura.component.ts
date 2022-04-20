import { Component, OnInit } from '@angular/core';
import * as FileSaver from 'file-saver';
import { InvoiceService } from '../../invoice/invoice.service';

@Component({
  selector: 'app-item-fatura',
  templateUrl: './item-fatura.component.html',
  styleUrls: ['./item-fatura.component.css']
})
export class ItemFaturaComponent implements OnInit {

  invoice: any = {
    status: false,
    vencimento: null,
    pdf: ''
  }

  constructor(
    private invoiceService: InvoiceService
  ) { }

  ngOnInit(): void {
    this.invoiceService.getLatestInvoice().subscribe(
      (response) => {
        console.log(response)
        this.invoice.vencimento = response.dueDate
        this.invoice.status = response.isPaid
        this.invoice.pdf = response.pdf
        // this.invoice = response[0]
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
