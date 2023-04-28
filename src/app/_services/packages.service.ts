import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Shipment } from '../model/shipment';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { Package } from '../model/package';

const SERVICE_PATH = "package/api/pack"
@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) {}

  listAllPackagesByDeliveryId(id: number): Observable<Product[]>{
    return this.http.get<Product[]>(`${environment.apiUrl}/${SERVICE_PATH}/packagesBydeliveryId`+ id, this.httpOptions)
  }

  listAllPackagesByClientId(id: number): Observable<Package[]>{
    return this.http.get<Package[]>(`${environment.apiUrl}/${SERVICE_PATH}/packagesByClientId/`+ id, this.httpOptions)
  }

}
