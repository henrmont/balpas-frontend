import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Router} from "@angular/router";
import {ScheduleService} from "../schedule.service";

@Component({
  selector: 'app-today-box',
  templateUrl: './today-box.component.html',
  styleUrls: ['./today-box.component.css']
})
export class TodayBoxComponent implements OnInit {

  plantoes: any

  constructor(
    private dialogRef: MatDialogRef<TodayBoxComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private scheduleService: ScheduleService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.scheduleService.getTodayPlantaoSchedule(this.data.date).subscribe(
      (response) => {
        this.plantoes = response
      },
      (err) => {
        this.dialogRef.close()
        this.scheduleService.showMessage('A sessão expirou')
        this.router.navigate(['logout'])
      }
    )
  }

  close(): void {
    this.dialogRef.close()
  }

}
