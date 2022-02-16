import { StatusPaymentBoxComponent } from './../status-payment-box/status-payment-box.component';
import { TaxesPlantaoBoxComponent } from './../taxes-plantao-box/taxes-plantao-box.component';
import { AttachPlantaoBoxComponent } from './../../plantao/attach-plantao-box/attach-plantao-box.component';
import { FinanceiroService } from './../financeiro.service';
import { Component, OnInit } from '@angular/core';
import {DatePipe} from "@angular/common";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-list-plantao-financeiro',
  templateUrl: './list-plantao-financeiro.component.html',
  styleUrls: ['./list-plantao-financeiro.component.css']
})
export class ListPlantaoFinanceiroComponent implements OnInit {
  data: any
  note: any
  
  constructor(
    private financeiroService: FinanceiroService,
    private dialog: MatDialog
  ) { }

  ngOnInit(){
    this.financeiroService.getAllPlantao().subscribe(
      (response) => {
        this.data = response
      }
    )
  }

  attachPlantao(id: number): void {
    const dialogRef = this.dialog.open(AttachPlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id
      }
    });
  }

  taxesPlantao(id: number): void {
    const dialogRef = this.dialog.open(TaxesPlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id
      }
    });
  }

  statusPayment(id: number): void {
    const dialogRef = this.dialog.open(StatusPaymentBoxComponent, {
      width: '35rem',
      data: {
        id: id
      }
    });
  }

}