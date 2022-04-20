import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PlantaoService } from '../plantao.service';

@Component({
  selector: 'app-user-today-plantao-box',
  templateUrl: './user-today-plantao-box.component.html',
  styleUrls: ['./user-today-plantao-box.component.css']
})
export class UserTodayPlantaoBoxComponent implements OnInit {

  plantoes: any

  constructor(
    private plantaoService: PlantaoService,
    private dialogRef: MatDialogRef<UserTodayPlantaoBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  ngOnInit(): void {
    this.plantaoService.getTodayPlantoesSchedule(this.data.date).subscribe(
      (response) => {
        console.log(response)
        this.plantoes = response
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

}
