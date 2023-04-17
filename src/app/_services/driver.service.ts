import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DtoDriver } from '../dto/dto-driver';
import { Driver } from '../model/driver';
import { environment } from 'src/environments/environment';

const SERVICE_PATH = "users/api/dri"

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private httpOptions = {
    headers : new HttpHeaders({
      "Content-Type" : "application/json"
    })
  }
  constructor(private http: HttpClient) { }

  editProfile(driver: Driver){
    return this.http.put<Driver>(`${environment.apiUrl}/${SERVICE_PATH}/driverEdit`, driver, this.httpOptions)
  }

}
