import { CommonService } from './../../../components/common.service';
import { Router } from '@angular/router';
import { AccountService } from './../../../components/account/account.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserNewPlantaoBoxComponent } from 'src/app/components/plantao/user-new-plantao-box/user-new-plantao-box.component';
import { Account } from 'src/app/components/account/account.model';

@Component({
  selector: 'app-app-layout-header',
  templateUrl: './app-layout-header.component.html',
  styleUrls: ['./app-layout-header.component.css']
})
export class AppLayoutHeaderComponent implements OnInit {

  isAdmin: boolean = true
  isUser: boolean = true
  isActive: boolean = true

  user: Account = {
    username: '',
    image: '',
    name: '',
    phone: null,
    address: ''
  }

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private accountService: AccountService,
    private commonService: CommonService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(
      (response) => {
        if (response.roles.indexOf("ROLE_ADMIN") == -1) {
          this.isAdmin = false
        }
        if (response.roles.indexOf("ROLE_USER") == -1) {
          this.isUser = false
        }
        if (!response.isActive) {
          this.isActive = false
        }
        this.user.image = response.image
        this.user.username = response.username
        this.user.name = response.name
      },
      (err) => {
        this.commonService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

  public onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  showMenu() {
    this.trigger.openMenu();
  }

  newPlantao(): void {
    const dialogRef = this.dialog.open(UserNewPlantaoBoxComponent, {
      width: '35rem',
    });
  }



}
