import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar
  ) { }

  getDashboardData(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/dashboard/chart/data`)
  }

  getValuesData(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/values/data`)
  }

  getAdminDashboardData(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/admin/dashboard/chart/data`)
  }

}
