import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehicle } from '../model/vehicle';
import { environment } from 'src/environments/environment';

const SERVICE_PATH = "package/api/vehi"

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  listAllVehicles(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${environment.apiUrl}/${SERVICE_PATH}/allVehicles`, this.httpOptions);
  }
  listVehicleByCity(city: number): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${environment.apiUrl}/${SERVICE_PATH}/allWarehousesByCity/` + city, this.httpOptions);
  }
  createVehicle(vehicle: Vehicle) {
    return this.http.post<Vehicle>(`${environment.apiUrl}/${SERVICE_PATH}/VehicleCreate`, vehicle, this.httpOptions);
  }


}
