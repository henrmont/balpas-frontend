import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-delete-image-profile-box',
  templateUrl: './delete-image-profile-box.component.html',
  styleUrls: ['./delete-image-profile-box.component.css']
})
export class DeleteImageProfileBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<DeleteImageProfileBoxComponent>,
    private accountService: AccountService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit() {
    this.accountService.deleteProfileImage().subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
          this.router.navigate(['settings']);
        });
        this.dialogRef.close()
      }
    )
  }

}
