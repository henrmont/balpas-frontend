import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AccountService } from 'src/app/components/account/account.service';
import { AdminDeleteUserBoxComponent } from 'src/app/components/account/admin-delete-user-box/admin-delete-user-box.component';
import { AdminEditUserBoxComponent } from 'src/app/components/account/admin-edit-user-box/admin-edit-user-box.component';
import { AdminRolesUserBoxComponent } from 'src/app/components/account/admin-roles-user-box/admin-roles-user-box.component';
import { AdminTypeUserBoxComponent } from 'src/app/components/account/admin-type-user-box/admin-type-user-box.component';
import { AdminValidateUserBoxComponent } from 'src/app/components/account/admin-validate-user-box/admin-validate-user-box.component';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

  users: any

  constructor(
    private dialog: MatDialog,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.accountService.getAdminUsers().subscribe(
      (response) => {
        this.users = response
      }
    )
  }

  editUser(id: number): void {
    const dialogRef = this.dialog.open(AdminEditUserBoxComponent, {
      width: '35rem',
      data: {
        id: id,
      },
      disableClose: true
    });
  }

  rolesUser(id: number): void {
    const dialogRef = this.dialog.open(AdminRolesUserBoxComponent, {
      width: '35rem',
      data: {
        id: id,
      },
      disableClose: true
    });
  }

  typeUser(id: number): void {
    const dialogRef = this.dialog.open(AdminTypeUserBoxComponent, {
      width: '35rem',
      data: {
        id: id,
      },
      disableClose: true
    });
  }

  validateUser(id: number): void {
    const dialogRef = this.dialog.open(AdminValidateUserBoxComponent, {
      width: '35rem',
      data: {
        id: id,
      },
      disableClose: true
    });
  }

}
