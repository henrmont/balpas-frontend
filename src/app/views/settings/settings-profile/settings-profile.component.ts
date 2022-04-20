import { Component, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Account } from 'src/app/components/account/account.model';
import { AccountService } from 'src/app/components/account/account.service';
import { DeleteImageProfileBoxComponent } from 'src/app/components/account/delete-image-profile-box/delete-image-profile-box.component';
import { ImageProfileBoxComponent } from 'src/app/components/account/image-profile-box/image-profile-box.component';
import { CommonService } from 'src/app/components/common.service';

@Component({
  selector: 'app-settings-profile',
  templateUrl: './settings-profile.component.html',
  styleUrls: ['./settings-profile.component.css']
})
export class SettingsProfileComponent implements OnInit {

  user: Account = {
    image: '',
    name: '',
    phone: null,
    address: ''
  }

  imageFileType: string = "image/jpeg, image/png"

  constructor(
    private dialog: MatDialog,
    private accountService: AccountService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(
      (response) => {
        this.user.image = response.image
        this.user.name = response.name
        this.user.phone = response.phone
        this.user.address = response.address
      }
    )
  }

  deleteImageProfile(): void {
    const dialogRef = this.dialog.open(DeleteImageProfileBoxComponent, {
      width: '35rem',
      disableClose: true
    });
  }

  onImageChange(event: any): void {
    const dialogRef = this.dialog.open(ImageProfileBoxComponent, {
      width: '70%',
      data: {
        event: event,
        image: this.user.image
      }
    });
  }

  onSubmit(): void {
    this.accountService.updateUserInfo(this.user).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['settings']);
        });
      }
    )
  }

}
