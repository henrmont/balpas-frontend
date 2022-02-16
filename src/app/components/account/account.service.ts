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

  getValidUser(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/get/valid/user`, user)
  }

  getValidToken(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/get/valid/token`, user)
  }

  getUserInfo(): Observable<Account> {
    return this.http.get<Account>(`${environment.baseUrl}/api/get/user/info`)
  }

  requestResetPassword(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/request/reset/password`, user)
  }

  resetPassword(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/reset/password`, user)
  }

  verifyEmail(token: any) {
    return this.http.post<Account>(`${environment.baseUrl}/verify/email`, token)
  }

  login(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/api/login_check`, user)
  }

  createAccount(user: Account): Observable<Account> {
    return this.http.post<Account>(`${environment.baseUrl}/register/account`, user)
  }
}
