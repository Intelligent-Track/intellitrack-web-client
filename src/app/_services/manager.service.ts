import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DtoManager } from '../dto/dto-manager';
import { Manager } from '../model/manager';
import { environment } from 'src/environments/environment';

const SERVICE_PATH = "users/api/man"

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

  editProfile(manager: Manager){
    return this.http.put<Manager>(`${environment.apiUrl}/${SERVICE_PATH}/managerEdit`, manager, this.httpOptions)
  }

}
