import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../model/register';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const SERVICE_PATH = "users/api/reg";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  addNewRequest(request: Register){
    return this.http.post<Register>(`${environment.apiUrl}/${SERVICE_PATH}/addRequest`, request, this.httpOptions);
  }

  listAllManagers(): Observable<Register[]> {
    return this.http.get<Register[]>(`${environment.apiUrl}/${SERVICE_PATH}/allRequests`, this.httpOptions);
  }

  manageRequest(request: Register){
    return this.http.post<Register>(`${environment.apiUrl}/${SERVICE_PATH}/manageRequest`, request, this.httpOptions);
  }
}
