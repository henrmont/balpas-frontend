import { CalendarOptions } from '@fullcalendar/angular';
import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/components/account/account.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PlantaoService } from 'src/app/components/plantao/plantao.service';
import { UserTodayPlantaoBoxComponent } from 'src/app/components/plantao/user-today-plantao-box/user-today-plantao-box.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
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
    private accountService: AccountService,
    private plantaoService: PlantaoService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accountService.getUserInfo().subscribe(
      (response) => {
        if (response.roles.indexOf("ROLE_USER") == -1) {
          this.router.navigateByUrl('/', {skipLocationChange: true}).then(() => {
            this.router.navigate(['admin']);
          });
        }
      }
    )
    this.plantaoService.getPlantoesSchedule().subscribe(
      (response) => {
        this.calendarOptions.events = response
      }
    )
  }

  infoToday(date: any): void {
    const dialogRef = this.dialog.open(UserTodayPlantaoBoxComponent, {
      width: '35rem',
      data: {
        date: date
      },
      disableClose: true
    });
  }

}
