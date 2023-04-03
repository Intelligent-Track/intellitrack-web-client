import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DtoDriver } from '../dto/dto-driver';
import { Driver } from '../model/driver';

const DRIVER_API = 'http://localhost:8080/api/driver/';

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

  listAllDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(DRIVER_API + 'allDrivers', this.httpOptions);
  }

  listInfoDrivers(): Observable<DtoDriver[]> {
    return this.http.get<DtoDriver[]>(DRIVER_API + 'allDrivers', this.httpOptions);
  }

  createDriver(driver: Driver){
    return this.http.post<Driver>(DRIVER_API + "driver", driver, this.httpOptions);
  }
}
