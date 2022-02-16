import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {
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

  getAllAttach(plantao: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/all/attach/${plantao}`)
  }

  downloadAttach(filename: any) {
    return `${environment.baseUrl}/uploads/attach/${filename}`
  }

  removeAttach(id: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/remove/attach/${id}`)
  }

  getAllPlantao(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/all/plantao`)
  }

  getAllUser(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/all/user`)
  }

  getById(id: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/by/id/plantao/` + id);
  }

  addImposto(id: any, data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/imposto/add/` + id, data)
  }

  getAllImposto(plantao: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/all/imposto/${plantao}`)
  }

  getImposto(id: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/imposto/${id}`)
  }

  editImposto(id: any, data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/imposto/edit/` + id, data)
  }

  removeImposto(id: any): Observable<any> {
    return this.http.delete<any>(`${environment.baseUrl}/api/imposto/remove/` + id)
  }

  statusPagamento(id: any, data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/status/payment/` + id, data)
  }

  getChartData(id: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/chart/data/` + id)
  }
}
