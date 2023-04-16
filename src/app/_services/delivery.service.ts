import { Shipment } from './../model/shipment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { City } from '../model/city';
import { DtoShipment } from '../dto/dto-shipment';

const SERVICE_PATH = "package/api/del"

@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) {}

  listAllProgramDeliveries(): Observable<Shipment[]>{
    return this.http.get<Shipment[]>(`${environment.apiUrl}/${SERVICE_PATH}/allDeliverysProgramed`, this.httpOptions)
  }

  createDelivery( shipment:DtoShipment){
    return this.http.post<number>(`${environment.apiUrl}/${SERVICE_PATH}/programDelivery`, shipment, this.httpOptions);
  }


}
