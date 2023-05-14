import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const SERVICE_PATH = "users/api/auth"
const SERVICE_PATH1 = "users/api/adm";
const SERVICE_PATH2 = "users/api/cli";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const httpOptions2 = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
  responseType: 'text' // Set the responseType to 'text'
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) { }

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

  register(name: string, username: string, phone: string, nit: string, password: string, companyName: string, document: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/${SERVICE_PATH2}/ClientCreate`,
      {
        name,
        username,
        phone,
        nit,
        password,
        companyName,
        document,
      },
      { responseType: 'text' }
    );
  }

  Verify(code: string, username: string): Observable<any> {

    return this.http.post(

      `${environment.apiUrl}/${SERVICE_PATH2}/verifyUser`, //address to check on server
      {
        code,
        username
      },
      { responseType: 'text' }
    );
  }

  GetPendingAprov(): Observable<any> {

    return this.http.get(

      `${environment.apiUrl}/${SERVICE_PATH1}/ClientstoAccept`, //address to check on server
    )
  }

  ApproveAnswer(accepted: boolean, username: string): Observable<any> {
    return this.http.post(

      `${environment.apiUrl}/${SERVICE_PATH1}/AcceptUser`, //address to check on server
      {
        username,
        accepted
      },
      { responseType: 'text' }
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

  ResetPasswordChange(username: string, token: string): Observable<any> {
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
    return this.http.post(`${environment.apiUrl}/${SERVICE_PATH}/signout`, {}, httpOptions);
  }
}
