import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import {ScheduleService} from "../schedule.service";
import {InfoPlantaoBoxComponent} from "../../plantao/info-plantao-box/info-plantao-box.component";
import {MatDialog} from "@angular/material/dialog";
import {TodayBoxComponent} from "../today-box/today-box.component";

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    navLinks: true,
    navLinkDayClick: (date) => {
      this.infoToday(date.toISOString())
    },
    eventTimeFormat: {
      hour: 'numeric',
      minute: '2-digit',
      meridiem: false
    }
  };

  constructor(
    private scheduleService: ScheduleService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.scheduleService.getAllPlantaoSchedule().subscribe(
      (response) => {
        this.calendarOptions.events = response
      }
    )
  }

  infoToday(date: any): void {
    const dialogRef = this.dialog.open(TodayBoxComponent, {
      width: '35rem',
      data: {
        date: date
      }
    });
  }
}
