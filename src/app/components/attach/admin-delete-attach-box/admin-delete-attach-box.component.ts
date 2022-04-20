import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CommonService } from '../../common.service';
import { AttachService } from '../attach.service';

@Component({
  selector: 'app-admin-delete-attach-box',
  templateUrl: './admin-delete-attach-box.component.html',
  styleUrls: ['./admin-delete-attach-box.component.css']
})
export class AdminDeleteAttachBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AdminDeleteAttachBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private attachService: AttachService,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit() {
    this.attachService.adminDeleteAttach(this.data).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.dialogRef.close()
      }
    )
  }

}
