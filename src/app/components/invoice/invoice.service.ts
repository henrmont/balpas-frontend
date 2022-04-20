import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private http: HttpClient,
  ) { }

  adminRegisterInvoice(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/register/invoice`, data)
  }

  adminGetInvoices(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/admin/get/invoices`)
  }

  getInvoice(id: number): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/invoice/` + id);
  }

  adminEditInvoice(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/edit/invoice`, data)
  }

  adminDeleteInvoice(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/delete/invoice`, data)
  }

  adminStatusInvoice(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/status/invoice`, data)
  }

  getLatestInvoice(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/get/latest/invoice`)
  }
}
