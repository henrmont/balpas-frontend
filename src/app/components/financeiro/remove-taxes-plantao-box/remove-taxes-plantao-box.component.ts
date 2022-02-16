import { Router } from '@angular/router';
import { FinanceiroService } from './../financeiro.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-remove-taxes-plantao-box',
  templateUrl: './remove-taxes-plantao-box.component.html',
  styleUrls: ['./remove-taxes-plantao-box.component.css']
})
export class RemoveTaxesPlantaoBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<RemoveTaxesPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private financeiroService: FinanceiroService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.financeiroService.removeImposto(this.data.id).subscribe(
      (response) => {
        this.financeiroService.showMessage(response.message)
        this.dialogRef.close()
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

}
