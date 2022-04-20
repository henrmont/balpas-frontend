import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { PlantaoService } from '../plantao.service';

@Component({
  selector: 'app-user-delete-plantao-box',
  templateUrl: './user-delete-plantao-box.component.html',
  styleUrls: ['./user-delete-plantao-box.component.css']
})
export class UserDeletePlantaoBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<UserDeletePlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private plantaoService: PlantaoService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit() {
    this.plantaoService.userDeletePlantao(this.data).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['plantao']);
        });
        this.dialogRef.close()
      }
    )
  }

}
