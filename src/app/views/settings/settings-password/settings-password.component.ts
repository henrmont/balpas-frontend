import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Account } from 'src/app/components/account/account.model';
import { AccountService } from 'src/app/components/account/account.service';
import { CommonService } from 'src/app/components/common.service';

@Component({
  selector: 'app-settings-password',
  templateUrl: './settings-password.component.html',
  styleUrls: ['./settings-password.component.css']
})
export class SettingsPasswordComponent implements OnInit {

  npassword: string = ''
  ncpassword: string = ''

  user: Account = {
    password: ''
  }

  constructor(
    private accountService: AccountService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.npassword == this.ncpassword) {
      this.user.password = this.npassword
      this.accountService.updateUserPassword(this.user).subscribe(
        (response) => {
          this.commonService.showMessage(response.message)
          this.router.navigate(['logout']);
        }
      )
    } else {
      this.commonService.showMessage('Senhas diferentes')
    }
  }

}
