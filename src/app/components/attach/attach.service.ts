import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AttachService {

  constructor(
    private http: HttpClient,
  ) { }

  adminGetAttachs(id: number): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/admin/get/attachs/` + id)
  }

  adminRegisterAttach(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/register/attach`, data)
  }

  adminDeleteAttach(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/delete/attach`, data)
  }

}
