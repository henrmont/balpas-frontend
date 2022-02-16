import { Router } from '@angular/router';
import { PlantaoService } from './../plantao.service';
import { AttachPlantaoBoxComponent } from './../attach-plantao-box/attach-plantao-box.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, Input, ViewChild, Inject, AfterViewInit } from '@angular/core';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-list-attach',
  templateUrl: './list-attach.component.html',
  styleUrls: ['./list-attach.component.css']
})
export class ListAttachComponent implements AfterViewInit {

  displayedColumns: string[] = ['arquivo', 'action'];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private dialogRef: MatDialogRef<AttachPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private plantaoService: PlantaoService,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.plantaoService.getAllAttach(this.data.id).subscribe(
      (response) => {
        this.dataSource.data = response
      }
    )
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
  }

  downloadAttach(filename: any) {
    const url = this.plantaoService.downloadAttach(filename)
    // const file = new File([url], "attach.pdf", {
    //   type: "application/pdf",
    // })
    // window.location.href = url
    // window.open(url, '_download')
    saveAs(url)
  }

  removeAttach(id: any) {
    this.plantaoService.removeAttach(id).subscribe(
      (response) => {
        this.plantaoService.showMessage(response.message)
        this.dialogRef.close()
      }
    )
  }

}
