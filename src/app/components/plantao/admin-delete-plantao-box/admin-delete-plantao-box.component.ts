import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonService } from '../../common.service';
import { PlantaoService } from '../plantao.service';

@Component({
  selector: 'app-admin-delete-plantao-box',
  templateUrl: './admin-delete-plantao-box.component.html',
  styleUrls: ['./admin-delete-plantao-box.component.css']
})
export class AdminDeletePlantaoBoxComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<AdminDeletePlantaoBoxComponent>,
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
    this.plantaoService.adminDeletePlantao(this.data).subscribe(
      (response) => {
        this.commonService.showMessage(response.message)
        if (this.data.isAdmin) {
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['admin/plantao']);
          });
        } else {
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['plantao']);
          });
        }
        this.dialogRef.close()
      }
    )
  }

}
