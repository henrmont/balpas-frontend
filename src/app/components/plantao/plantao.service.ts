import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlantaoService {

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

  adminRegisterPlantao(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/register/plantao`, data)
  }

  adminGetPlantoes(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/admin/get/plantoes`)
  }

  getPlantao(id: number): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/plantao/` + id);
  }

  adminEditPlantao(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/edit/plantao`, data)
  }

  adminDeletePlantao(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/delete/plantao`, data)
  }

  adminStatusPlantao(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/status/plantao`, data)
  }

  adminValidatePlantao(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/validate/plantao`, data)
  }

  getPlantaoValue(id: number): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/plantao/value/` + id);
  }

  getPlantoes(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/plantoes`)
  }

  userDeletePlantao(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/delete/plantao`, data)
  }

  getPegaPlantoes(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/pega/plantoes`)
  }

  userPegaPlantao(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/pega/plantao`, data)
  }

  userRegisterPlantao(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/register/plantao`, data)
  }

  getPlantoesSchedule(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/plantoes/schedule`)
  }

  getTodayPlantoesSchedule(data: any): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/today/plantoes/schedule/` + data)
  }

  getLatestPlantao(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/latest/plantao`)
  }





  registerPlantao(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/register/plantao`, data)
  }

  editPlantao(data: any, plantao: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/edit/plantao/${data}`, plantao)
  }

  removePlantao(data: any): Observable<any> {
    return this.http.delete<any>(`${environment.baseUrl}/api/remove/plantao/${data}`)
  }

  evalutePlantao(data: any, plantao: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/evalute/plantao/${data}`, plantao)
  }

  attachPlantao(data: any, plantao: any, filename: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/attach/plantao/${plantao}/${filename}`, data)
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
}
