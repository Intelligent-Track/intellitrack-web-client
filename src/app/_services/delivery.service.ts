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

  createDelivery(selectedOrigin: number, selectedDes: number, deliveryType: string, arriveDate: string, departureDate: string,  comments: string, nit:string,  products: DtoProduct[]) {
    const params = new HttpParams()
      .set('originId', selectedOrigin.toString())
      .set('destinationId', selectedDes.toString())
      .set('type', deliveryType)
      .set('arriveDate', arriveDate)
      .set('departureDate', departureDate)
      .set('comments', comments)
      .set('nit', nit);

    return this.http.post<number>(`${environment.apiUrl}/${SERVICE_PATH}/program`, products, { params: params });
  }


  deleteDelivery( id: number){
    return this.http.delete<Shipment>(`${environment.apiUrl}/${SERVICE_PATH}/cancelDelivery/`+ id,  this.httpOptions);
  }

  listAllDeliveriesByNit(nit: string): Observable<Shipment[]>{
    return this.http.get<Shipment[]>(`${environment.apiUrl}/${SERVICE_PATH}/deliveriesByNit/`+ nit, this.httpOptions)
  }

  listAllDeliveriesByNitWare(nit: string): Observable<Shipment[]>{
    return this.http.get<Shipment[]>(`${environment.apiUrl}/${SERVICE_PATH}/deliveriesInWarehouse/`+ nit, this.httpOptions)
  }

  listAllDeliveriesByNitWay(nit: string): Observable<Shipment[]>{
    return this.http.get<Shipment[]>(`${environment.apiUrl}/${SERVICE_PATH}/deliveriesOnTheWay/`+ nit, this.httpOptions)
  }

  listAllDeliveriesByNitDel(nit: string): Observable<Shipment[]>{
    return this.http.get<Shipment[]>(`${environment.apiUrl}/${SERVICE_PATH}/deliveriesDelivered/`+ nit, this.httpOptions)
  }

  //
  listAllDeliveriesByDriWare(id: number): Observable<Shipment[]>{
    return this.http.get<Shipment[]>(`${environment.apiUrl}/${SERVICE_PATH}/deliveriesByDriverIdInWarehouse/`+ id, this.httpOptions)
  }

  listAllDeliveriesByDriWay(id: number): Observable<Shipment[]>{
    return this.http.get<Shipment[]>(`${environment.apiUrl}/${SERVICE_PATH}/deliveriesByDriverIdOnTheWay/`+ id, this.httpOptions)
  }

  listAllDeliveriesByDriDel(id: number): Observable<Shipment[]>{
    return this.http.get<Shipment[]>(`${environment.apiUrl}/${SERVICE_PATH}/deliveriesByDriverIdDelivered/`+ id, this.httpOptions)
  }



  updateDelivery(shipment: Shipment){
    return this.http.put<Shipment>(`${environment.apiUrl}/${SERVICE_PATH}/updateDelivery` + shipment, this.httpOptions);
  }


}
