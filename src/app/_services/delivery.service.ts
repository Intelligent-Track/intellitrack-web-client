import { Shipment } from './../model/shipment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DtoProduct } from '../dto/dto-product';

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
    return this.http.get<Shipment[]>(`${environment.apiUrl}/${SERVICE_PATH}/allDeliveriesProgramed`, this.httpOptions)
  }

  createDelivery(selectedOrigin: number, selectedDes: number, deliveryType: string, arriveDate: string, departureDate: string,  products: DtoProduct[]) {
    const params = new HttpParams()
      .set('originId', selectedOrigin.toString())
      .set('destinationId', selectedDes.toString())
      .set('type', deliveryType)
      .set('arriveDate', arriveDate)
      .set('departureDate', departureDate);
  
    return this.http.post<number>(`${environment.apiUrl}/${SERVICE_PATH}/program`, products, { params: params });
  }
  

  deleteDelivery( shipment: Shipment){
    return this.http.delete<Shipment>(`${environment.apiUrl}/${SERVICE_PATH}/cancelDelivery` + shipment, this.httpOptions);
  }


}
