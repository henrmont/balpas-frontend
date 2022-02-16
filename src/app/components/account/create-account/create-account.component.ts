import { Router } from '@angular/router';
import { AccountService } from './../account.service';
import { Account } from './../account.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  user: Account = {
    username: '',
    password: ''
  }

  cpassword: string = ''

  constructor(
    private accountService: AccountService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.user.password === this.cpassword) {
      this.accountService.createAccount(this.user).subscribe((response) => {
        this.accountService.showMessage(response.message)
        if (response.status == 1) {
          this.router.navigate([''])
        } 
      })
    } else {
      this.accountService.showMessage('Senhas diferentes')
    }
  }

}
