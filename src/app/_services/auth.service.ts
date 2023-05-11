import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const SERVICE_PATH = "users/api/auth"
const SERVICE_PATH1 = "users/api/auth"
const SERVICE_PATH2 = "users/api/cli"

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/${SERVICE_PATH}/signin`,
      {
        username,
        password,
      },
      httpOptions
    );
  }

  register(name: string, username: string, phone: string, nit: string,password: string,companyName: string,document: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/${SERVICE_PATH}/signup`,
      {
        name,
        username,
        phone,
        nit,
        password,
        companyName,
        document,
      },
      httpOptions
    );
  }

  RequestPasswordChange(username: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/${SERVICE_PATH}/forgotPassword`,

      {
        username,
      },
      httpOptions
    );
  }

  ResetPasswordChange(username: string, token:string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/${SERVICE_PATH}/ResetPassword/${token}`,
      {
        username,
        token
      },
      httpOptions
    );
  }


  logout(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${SERVICE_PATH}/signout`, { }, httpOptions);
  }
}
