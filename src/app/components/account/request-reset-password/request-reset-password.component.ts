import { CommonService } from './../../common.service';
import { AccountService } from './../account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Account } from '../account.model';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestResetPasswordComponent implements OnInit {

  user: Account = {
    username: ''
  }

  constructor(
    private router: Router,
    private accountService: AccountService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.accountService.requestResetPassword(this.user).subscribe((response) => {
      this.commonService.showMessage(response.message)
      if (response.status == 1) {
        this.router.navigate(['login'])
      } 
    })
  }

}
