import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { Account } from '../account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-admin-edit-user-box',
  templateUrl: './admin-edit-user-box.component.html',
  styleUrls: ['./admin-edit-user-box.component.css']
})
export class AdminEditUserBoxComponent implements OnInit {

  user: Account = {
    id: this.data.id,
    name: '',
    phone: null,
    address: '',
  }

  isEnable: any = false

  constructor(
    private dialogRef: MatDialogRef<AdminEditUserBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountService: AccountService,
    private commonService: CommonService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.accountService.getAdminUserInfo(this.data.id).subscribe(
      (response) => {
        this.user.name = response.name
        this.user.phone = response.phone
        this.user.address = response.address
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit(): void {
    this.accountService.updateUserInfo(this.user).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['admin/users']);
        });
        this.dialogRef.close()
      }
    )
  }

}
