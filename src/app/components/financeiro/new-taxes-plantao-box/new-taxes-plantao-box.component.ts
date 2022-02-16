import { Router } from '@angular/router';
import { FinanceiroService } from './../financeiro.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-new-taxes-plantao-box',
  templateUrl: './new-taxes-plantao-box.component.html',
  styleUrls: ['./new-taxes-plantao-box.component.css']
})
export class NewTaxesPlantaoBoxComponent implements OnInit {

  imposto = {
    name: '',
    type: 0,
    value: 0
  }

  types: any[] = [
    {value: 0, viewValue: 'Valor fixo'},
    {value: 1, viewValue: 'Percentual'},
  ];

  constructor(
    private dialogRef: MatDialogRef<NewTaxesPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private financeiroService: FinanceiroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    console.log(this.data.id)
  }

  onSubmit(): void {
    this.financeiroService.addImposto(this.data.id, this.imposto).subscribe(
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
