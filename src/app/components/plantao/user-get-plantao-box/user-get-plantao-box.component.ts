import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { PlantaoService } from '../plantao.service';

@Component({
  selector: 'app-user-get-plantao-box',
  templateUrl: './user-get-plantao-box.component.html',
  styleUrls: ['./user-get-plantao-box.component.css']
})
export class UserGetPlantaoBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<UserGetPlantaoBoxComponent>,
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
    this.plantaoService.userPegaPlantao(this.data).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['pega/plantao']);
        });
        this.dialogRef.close()
      }
    )
  }

}
