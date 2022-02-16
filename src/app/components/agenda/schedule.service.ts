import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  showMessage(message: string) {
    this.snackbar.open(message, 'Fechar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  getAllPlantaoSchedule(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/all/plantao/schedule`)
  }

  getTodayPlantaoSchedule(data: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/today/plantao/schedule/${data}`)
  }


}
