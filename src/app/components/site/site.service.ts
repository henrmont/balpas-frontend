import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

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

  registerInscricao(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/register/inscricao`, data)
  }
}
