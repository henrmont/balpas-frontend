import { Router } from '@angular/router';
import { FinanceiroService } from './../financeiro.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-status-payment-box',
  templateUrl: './status-payment-box.component.html',
  styleUrls: ['./status-payment-box.component.css']
})
export class StatusPaymentBoxComponent implements OnInit {

  status: any = {
    note: 0,
    payment: 0
  }

  notes: any[] = [
    {value: 0, viewValue: 'Não emitida'},
    {value: 1, viewValue: 'Emitida'},
    {value: 2, viewValue: 'Sem nota'},
  ]

  payments: any[] = [
    {value: 0, viewValue: 'Não realizado'},
    {value: 1, viewValue: 'Realizado'},
  ]

  constructor(
    private dialogRef: MatDialogRef<StatusPaymentBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private financeiroService: FinanceiroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.financeiroService.statusPagamento(this.data.id, this.status).subscribe(
      (response) => {
        this.financeiroService.showMessage(response.message)
        this.dialogRef.close()
      },
      (err) => {
        this.financeiroService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

}
