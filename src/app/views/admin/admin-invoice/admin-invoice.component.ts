import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AdminDeleteInvoiceBoxComponent } from 'src/app/components/invoice/admin-delete-invoice-box/admin-delete-invoice-box.component';
import { AdminEditInvoiceBoxComponent } from 'src/app/components/invoice/admin-edit-invoice-box/admin-edit-invoice-box.component';
import { AdminNewInvoiceBoxComponent } from 'src/app/components/invoice/admin-new-invoice-box/admin-new-invoice-box.component';
import { AdminStatusInvoiceBoxComponent } from 'src/app/components/invoice/admin-status-invoice-box/admin-status-invoice-box.component';
import { InvoiceService } from 'src/app/components/invoice/invoice.service';

@Component({
  selector: 'app-admin-invoice',
  templateUrl: './admin-invoice.component.html',
  styleUrls: ['./admin-invoice.component.css']
})
export class AdminInvoiceComponent implements OnInit {

  invoices: any

  constructor(
    private invoiceService: InvoiceService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.invoiceService.adminGetInvoices().subscribe(
      (response) => {
        this.invoices = response
      }
    )
  }

  newInvoice(): void {
    const dialogRef = this.dialog.open(AdminNewInvoiceBoxComponent, {
      width: '35rem',
      disableClose: true
    });
  }

  editInvoice(id: number): void {
    const dialogRef = this.dialog.open(AdminEditInvoiceBoxComponent, {
      width: '35rem',
      data: {
        id: id,
      },
      disableClose: true
    });
  }

  deleteInvoice(id: number): void {
    const dialogRef = this.dialog.open(AdminDeleteInvoiceBoxComponent, {
      width: '35rem',
      data: {
        id: id,
      },
      disableClose: true
    });
  }

  statusInvoice(id: number): void {
    const dialogRef = this.dialog.open(AdminStatusInvoiceBoxComponent, {
      width: '35rem',
      data: {
        id: id,
      },
      disableClose: true
    });
  }

}
