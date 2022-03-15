import { Account } from './../account.model';
import { CommonService } from './../../common.service';
import { AccountService } from './../account.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.component.html',
  styleUrls: ['./confirm-email.component.css']
})
export class ConfirmEmailComponent implements OnInit {

  user: Account = {
    token: null
  }

  constructor(
    private router: Router,
    private arouter: ActivatedRoute,
    private accountService: AccountService,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
    this.user.token = this.arouter.snapshot.paramMap.get('token')
    this.accountService.getValidToken(this.user).subscribe(
      (response) => {
        if(!response.valid){
          this.commonService.showMessage('Link Inválido')
          this.router.navigate(['login'])
        } else {
          this.accountService.confirmEmail(this.user).subscribe((response) => {
            this.commonService.showMessage(response.message)
            if (response.status == 1) {
              this.router.navigate(['login'])
            } 
          })
        }
      }
    )
  }

}
