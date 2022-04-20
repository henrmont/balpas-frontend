import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as FileSaver from 'file-saver';
import { Attach } from '../../attach/attach.model';
import { AttachService } from '../../attach/attach.service';

@Component({
  selector: 'app-user-attach-plantao-box',
  templateUrl: './user-attach-plantao-box.component.html',
  styleUrls: ['./user-attach-plantao-box.component.css']
})
export class UserAttachPlantaoBoxComponent implements OnInit {

  attachs!: any[]
  fileType: string = 'image/png, image/jpeg, application/pdf, application/x-pdf'

  attach: Attach = {
    id: this.data.id,
    name: '',
    file: ''
  }

  constructor(
    private dialogRef: MatDialogRef<UserAttachPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private attachService: AttachService,
  ) { }

  ngOnInit(): void {
    this.attachService.adminGetAttachs(this.data.id).subscribe(
      (response) => {
        this.attachs = response
      }
    )
  }

  close(): void {
    this.dialogRef.close()
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
