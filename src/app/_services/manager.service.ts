import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DtoManager } from '../dto/dto-manager';
import { Manager } from '../model/manager';

const MANAGER_API = 'http://localhost:8080/api/man/';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  private httpOptions = {
    headers : new HttpHeaders({
      "Content-Type" : "application/json"
    })
  }
  constructor(private http: HttpClient) { }

  listAllManagers(): Observable<Manager[]> {
    return this.http.get<Manager[]>(MANAGER_API + 'allManagers', this.httpOptions);
  }

  listInfoManagers(): Observable<DtoManager[]> {
    return this.http.get<DtoManager[]>(MANAGER_API + 'allManagers', this.httpOptions);
  }

}
