import { Router } from '@angular/router';
import { AccountService } from './../../components/account/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(
      (response) => {
        
      },
      (err) => {
        this.accountService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }


}
