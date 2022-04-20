import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AdminDeleteAttachBoxComponent } from '../../attach/admin-delete-attach-box/admin-delete-attach-box.component';
import { Attach } from '../../attach/attach.model';
import { AttachService } from '../../attach/attach.service';
import { CommonService } from '../../common.service';
import { PlantaoService } from '../plantao.service';
import * as FileSaver from 'file-saver';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin-attach-plantao-box',
  templateUrl: './admin-attach-plantao-box.component.html',
  styleUrls: ['./admin-attach-plantao-box.component.css']
})
export class AdminAttachPlantaoBoxComponent implements OnInit {

  interval!: any
  attachs!: any[]
  fileType: string = 'image/png, image/jpeg, application/pdf, application/x-pdf'

  attach: Attach = {
    id: this.data.id,
    name: '',
    file: ''
  }

  constructor(
    private dialogRef: MatDialogRef<AdminAttachPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialog,
    private attachService: AttachService,
    private plantaoService: PlantaoService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.attachService.adminGetAttachs(this.data.id).subscribe(
      (response) => {
        this.attachs = response
      }
    )
    this.interval = setInterval(
      () => {
        this.attachService.adminGetAttachs(this.data.id).subscribe(
          (response) => {
            this.attachs = response
          }
        )
      }, environment.interval
    )
  }

  close(): void {
    this.dialogRef.close()
  }

  deleteAttach(id: number): void {
    const dialogRef = this.dialog.open(AdminDeleteAttachBoxComponent, {
      width: '35rem',
      data: {
        id: id
      },
      disableClose: true
    });
  }

  onFileChange(event: any): void {

    const file:File = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file as Blob)
    reader.onloadend = (e) =>  {
      reader.result as string

      if (reader.result) {
        this.attach.name = event.target.files[0].name
        this.attach.file = reader.result

        this.attachService.adminRegisterAttach(this.attach).subscribe(
          (response) => {
            this.commonService.showMessage(response.message)
            this.dialogRef.close()
          }
        )
      }
      
    }

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
