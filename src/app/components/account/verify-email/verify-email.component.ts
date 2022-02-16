import { AccountService } from './../account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from './../account.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  user: Account = {
    token: null
  }

  constructor(
    private router: Router,
    private arouter: ActivatedRoute,
    private accountService: AccountService
  ) { }

  ngOnInit(): void {
    this.user.token = this.arouter.snapshot.paramMap.get('token')
    this.accountService.getValidToken(this.user).subscribe(
      (response) => {
        if(!response.valid){
          this.accountService.showMessage('Link Inválido')
          this.router.navigate(['login'])
        } else {
          this.accountService.verifyEmail(this.user).subscribe((response) => {
            this.accountService.showMessage(response.message)
            if (response.status == 1) {
              this.router.navigate(['login'])
            } 
          })
        }
      }
    )
  }

}
