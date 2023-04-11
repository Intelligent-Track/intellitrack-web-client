import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from '../model/warehouse';
import { environment } from 'src/environments/environment';

const SERVICE_PATH = "package/api/ware"

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private httpOptions = {
    headers : new HttpHeaders({
      "Content-Type" : "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  listAllWarehouse(): Observable<Warehouse[]>{
    return this.http.get<Warehouse[]>(`${environment.apiUrl}/${SERVICE_PATH}/allWarehouses`, this.httpOptions);
  }

  listWarehouseByCity(city: string): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${environment.apiUrl}/${SERVICE_PATH}/allWarehousesByCity/` + city, this.httpOptions);
  }

  listWarehouseByType(type: string): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${environment.apiUrl}/${SERVICE_PATH}/allWarehousesByType/` + type, this.httpOptions);
  }

  listWarehouseByCapacity(capacity: number): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${environment.apiUrl}/${SERVICE_PATH}/allWarehousesByCapacity/` + capacity, this.httpOptions);
  }

}
