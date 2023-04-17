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

  updateDriver(driver: Driver) {
    return this.http.put<Driver>(`${environment.apiUrl}/${SERVICE_PATH}/updateDriver`, driver, this.httpOptions);
  }

  searchClientById(id: number): Observable<Driver>{
    return this.http.get<Driver>(`${environment.apiUrl}/${SERVICE_PATH}/searchDriver/` + id, this.httpOptions);
  }

}
