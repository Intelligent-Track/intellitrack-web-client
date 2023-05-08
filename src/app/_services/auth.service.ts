import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const SERVICE_PATH = "users/api/auth"
const SERVICE_PATH1 = "users/api/reg";

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
  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    return this.http.post(
      //`${environment.apiUrl}/${SERVICE_PATH}/signin`,
      "http://localhost:8080/api/auth/signin",
      {
        username,
        password,
      },

      httpOptions
    );
  }

  register(name: string, username: string, phone: string, nit: string,password: string,companyName: string,document: string): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/${SERVICE_PATH1}/ClientCreate`,
      //'http://localhost:8080/api/cli/ClientCreate',
      {
        name,
        username,
        phone,
        nit,
        password,
        companyName,
        document,
      },
      //httpOptions
      {responseType: 'text'}
    );
  }

  Verify(code: string): Observable<any> {
    console.log("llegue")
    return this.http.post(
      //"http://localhost:8080/api/cli/verifyUser",
      `${environment.apiUrl}/${SERVICE_PATH1}/verifyUser`,
      {
        code
      },
      {responseType: 'text'}
    );
  }

  logout(): Observable<any> {
    return this.http.post(`${environment.apiUrl}/${SERVICE_PATH}/signout`, { }, httpOptions);
  }
}
