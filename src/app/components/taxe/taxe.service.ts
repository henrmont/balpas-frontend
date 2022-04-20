import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaxeService {

  constructor(
    private http: HttpClient,
  ) { }

  adminGetTaxes(id: number): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/admin/get/taxes/` + id)
  }

  getTaxe(id: number): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/taxe/` + id);
  }

  adminRegisterTaxe(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/register/taxe`, data)
  }

  adminEditTaxe(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/edit/taxe`, data)
  }

  adminDeleteTaxe(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/delete/taxe`, data)
  }
}
