import { Router } from '@angular/router';
import { AccountService } from './../../../components/account/account.service';
import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  roles: any[] = []

  @ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;
  @Output() public sidenavToggle = new EventEmitter();

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(
      (response) => {
        this.roles = response.roles
        console.log(this.roles)
      },
      (err) => {
        this.accountService.showMessage('A sessão expirou')
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
