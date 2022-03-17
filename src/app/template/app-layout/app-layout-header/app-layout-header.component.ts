import { CommonService } from './../../../components/common.service';
import { Router } from '@angular/router';
import { AccountService } from './../../../components/account/account.service';
import { MatMenuTrigger } from '@angular/material/menu';
import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-layout-header',
  templateUrl: './app-layout-header.component.html',
  styleUrls: ['./app-layout-header.component.css']
})
export class AppLayoutHeaderComponent implements OnInit {

  roles: any[] = []

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private accountService: AccountService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(
      (response) => {
        this.roles = response.roles
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

}
