import { Observable } from 'rxjs';
import { environment } from './../../../environments/environment';
import { Account } from './account.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  showMessage(message: string) {
    this.snackbar.open(message, 'Fechar', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    })
  }

  checkAccount() {
    this.getUserInfo().subscribe(
      (response) => {
        if (!response.isActive) {
          window.localStorage.removeItem('token')
          this.router.navigate(['planos'])
        }
      }
    )
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

  getAdminUserInfo(id: number): Observable<Account> {
    return this.http.get<Account>(`${environment.baseUrl}/api/get/admin/user/info/${id}`)
  }

  getFiltredUsers(user: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/get/filtred/users`, user)
  }

  getFiltredValidUsers(user: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/get/filtred/valid/user`, user)
  }

  getAdminUsers(): Observable<Account> {
    return this.http.get<Account>(`${environment.baseUrl}/api/get/admin/users`)
  }

  setProfileImage(image: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/set/profile/image`, image)
  }

  deleteProfileImage(): Observable<any> {
    return this.http.get<any>(`${environment.baseUrl}/api/delete/profile/image`)
  }

  updateUserInfo(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/update/user/info`, data)
  }

  updateUserPassword(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/update/user/password`, data)
  }

  adminUpdateUserInfo(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/update/user/info`, data)
  }

  adminUpdateUserType(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/update/user/type`, data)
  }

  adminUpdateUserValid(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/update/user/valid`, data)
  }

  adminUpdateUserRoles(data: any): Observable<any> {
    return this.http.post<any>(`${environment.baseUrl}/api/admin/update/user/roles`, data)
  }
  
}
