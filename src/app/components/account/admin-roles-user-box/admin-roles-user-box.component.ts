import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { Account } from '../account.model';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-admin-roles-user-box',
  templateUrl: './admin-roles-user-box.component.html',
  styleUrls: ['./admin-roles-user-box.component.css']
})
export class AdminRolesUserBoxComponent implements OnInit {

  roles: any[] = [
    {value: ['ROLE_USER'], viewValue: 'Apenas usuário'},
    {value: ['ROLE_ADMIN'], viewValue: 'Apenas administrador'},
    {value: ['ROLE_USER','ROLE_ADMIN'], viewValue: 'Usuário e administrador'},
  ];

  user: Account = {
    id: this.data.id,
    roles: []
  }

  constructor(
    private dialogRef: MatDialogRef<AdminRolesUserBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private accountService: AccountService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accountService.getAdminUserInfo(this.data.id).subscribe(
      (response) => {
        this.user.roles = response.roles
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit(): void {
    this.accountService.adminUpdateUserRoles(this.user).subscribe(
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
