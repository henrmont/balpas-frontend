import { NewTaxesPlantaoBoxComponent } from './../new-taxes-plantao-box/new-taxes-plantao-box.component';
import { Router } from '@angular/router';
import { FinanceiroService } from './../financeiro.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-taxes-plantao-box',
  templateUrl: './taxes-plantao-box.component.html',
  styleUrls: ['./taxes-plantao-box.component.css']
})
export class TaxesPlantaoBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<TaxesPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private financeiroService: FinanceiroService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.financeiroService.getById(this.data.id).subscribe(
      (response) => {
        
      },
      (err) => {
        this.dialogRef.close()
        this.financeiroService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

  onSubmit(): void {
    // this.plantaoService.removePlantao(this.data.id).subscribe(
    //   (response) => {
    //     this.plantaoService.showMessage(response.message)
    //     this.dialogRef.close()
    //   }
    // )
  }

  newTaxesPlantao(id: number): void {
    const dialogRef = this.dialog.open(NewTaxesPlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id
      }
    });
  }

  close(): void {
    this.dialogRef.close()
  }

}
