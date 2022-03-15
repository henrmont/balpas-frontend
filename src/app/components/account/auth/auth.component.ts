import { CommonService } from './../../common.service';
import { Account } from './../account.model';
import { AccountService } from './../account.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  user: Account = {
    username: '',
    password: ''
  }

  constructor(
    private accountService: AccountService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.accountService.login(this.user).subscribe(
      (response) => {
        this.accountService.getValidUser(this.user).subscribe(
          (user) => {
            if (user.valid) {
              window.localStorage.setItem('token', response.token)
              this.router.navigate(['inicio'])
            } else {
              this.commonService.showMessage('Usuário inválido')      
            }
          }
        )
      },
      (err) => {
        this.commonService.showMessage('Credenciais inválida')
      }
    )
  }

}
