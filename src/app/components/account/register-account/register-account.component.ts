import { Router } from '@angular/router';
import { CommonService } from './../../common.service';
import { AccountService } from './../account.service';
import { Account } from './../account.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-account',
  templateUrl: './register-account.component.html',
  styleUrls: ['./register-account.component.css']
})
export class RegisterAccountComponent implements OnInit {

  user: Account = {
    username: '',
    password: ''
  }

  cpassword: string = ''

  constructor(
    private accountService: AccountService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.user.password === this.cpassword) {
      this.accountService.registerAccount(this.user).subscribe(
        (response) => {
          console.log(response.message)
          this.commonService.showMessage(response.message)
          this.router.navigate([''])
        }
      )
    } else {
      this.commonService.showMessage('Senhas diferentes')
    }
  }

}
