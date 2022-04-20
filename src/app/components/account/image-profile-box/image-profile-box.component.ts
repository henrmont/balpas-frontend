import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { CommonService } from '../../common.service';
import { Account } from '../account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-image-profile-box',
  templateUrl: './image-profile-box.component.html',
  styleUrls: ['./image-profile-box.component.css']
})
export class ImageProfileBoxComponent implements OnInit {
  
  imgChangeEvt: any = this.data.event
  cropImgPreview: any = ''

  user: Account = {
    image: ''
  }

  constructor(
    private dialogRef: MatDialogRef<ImageProfileBoxComponent>,
    private accountService: AccountService,
    private commonService: CommonService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (!this.data.event.target.files[0]) {
      this.dialogRef.close()
    }
  }
  
  cropImg(e: ImageCroppedEvent) {
      this.cropImgPreview = e.base64
  }

  imgLoad() {
      // display cropper tool
  }

  initCropper() {
      // init cropper
  }
  
  imgFailed() {
      // error msg
  }

  uploadImage() {
    this.user.image = this.cropImgPreview
    this.accountService.setProfileImage(this.user).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.dialogRef.close()
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['settings']);
        });
      }
    )
  }

}
