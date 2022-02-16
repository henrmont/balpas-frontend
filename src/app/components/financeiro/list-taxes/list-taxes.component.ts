import { RemoveTaxesPlantaoBoxComponent } from './../remove-taxes-plantao-box/remove-taxes-plantao-box.component';
import { EditTaxesPlantaoBoxComponent } from './../edit-taxes-plantao-box/edit-taxes-plantao-box.component';
import { Router } from '@angular/router';
import { FinanceiroService } from './../financeiro.service';
import { TaxesPlantaoBoxComponent } from './../taxes-plantao-box/taxes-plantao-box.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, ViewChild, Inject } from '@angular/core';

@Component({
  selector: 'app-list-taxes',
  templateUrl: './list-taxes.component.html',
  styleUrls: ['./list-taxes.component.css']
})
export class ListTaxesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'type', 'value', 'action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialogRef: MatDialogRef<TaxesPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private financeiroService: FinanceiroService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngAfterViewInit() {
    this.financeiroService.getAllImposto(this.data.id).subscribe(
      (response) => {
        this.dataSource.data = response
      }
    )
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {

  }

  editImposto(id: number): void {
    const dialogRef = this.dialog.open(EditTaxesPlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id
      }
    });
  }

  removeImposto(id: number): void {
    const dialogRef = this.dialog.open(RemoveTaxesPlantaoBoxComponent, {
      width: '35rem',
      data: {
        id: id
      }
    });
  }
}
