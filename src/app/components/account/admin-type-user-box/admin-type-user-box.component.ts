import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { Account } from '../account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-admin-type-user-box',
  templateUrl: './admin-type-user-box.component.html',
  styleUrls: ['./admin-type-user-box.component.css']
})
export class AdminTypeUserBoxComponent implements OnInit {

  resident: any[] = [
    {value: false, viewValue: 'Usuário Normal'},
    {value: true, viewValue: 'Usuário Residênte'},
  ];

  user: Account = {
    id: this.data.id,
    isResident: false
  }

  constructor(
    private dialogRef: MatDialogRef<AdminTypeUserBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountService: AccountService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accountService.getAdminUserInfo(this.data.id).subscribe(
      (response) => {
        this.user.isResident = response.isResident
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit(): void {
    this.accountService.adminUpdateUserType(this.user).subscribe(
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
