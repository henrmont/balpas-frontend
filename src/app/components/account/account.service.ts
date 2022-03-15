import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Account } from './account.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

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

  registerAccount(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/register/account`, user)
  }

  getValidToken(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/get/valid/token`, user)
  }

  confirmEmail(token: any) {
    return this.http.post<Account>(`${environment.baseUrl}/confirm/email`, token)
  }

  requestResetPassword(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/request/reset/password`, user)
  }

  resetPassword(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/reset/password`, user)
  }

  getValidUser(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/get/valid/user`, user)
  }

  login(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/api/login_check`, user)
  }

  getUserInfo(): Observable<Account> {
    return this.http.get<Account>(`${environment.baseUrl}/api/get/user/info`)
  }
  
}
