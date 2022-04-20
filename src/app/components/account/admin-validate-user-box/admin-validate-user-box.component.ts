import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { Account } from '../account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-admin-validate-user-box',
  templateUrl: './admin-validate-user-box.component.html',
  styleUrls: ['./admin-validate-user-box.component.css']
})
export class AdminValidateUserBoxComponent implements OnInit {

  isValid: boolean = false

  user: Account = {
    id: this.data.id,
  }

  constructor(
    private dialogRef: MatDialogRef<AdminValidateUserBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountService: AccountService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accountService.getAdminUserInfo(this.data.id).subscribe(
      (response) => {
        if (response.isActive) {
          this.isValid = true
        }
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit() {
    this.accountService.adminUpdateUserValid(this.user).subscribe(
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
