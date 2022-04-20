import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { PlantaoService } from '../plantao.service';

@Component({
  selector: 'app-admin-validate-plantao-box',
  templateUrl: './admin-validate-plantao-box.component.html',
  styleUrls: ['./admin-validate-plantao-box.component.css']
})
export class AdminValidatePlantaoBoxComponent implements OnInit {

  isValid!: boolean

  constructor(
    private dialogRef: MatDialogRef<AdminValidatePlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private plantaoService: PlantaoService,
    private commonService: CommonService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.plantaoService.getPlantao(this.data.id).subscribe(
      (response) => {
        this.isValid = response.isValid
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

  onSubmit() {
    this.plantaoService.adminValidatePlantao(this.data).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['admin/plantao']);
        });
        this.dialogRef.close()
      }
    )
  }

}
