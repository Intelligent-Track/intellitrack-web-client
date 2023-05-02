import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from '../model/warehouse';
import { environment } from 'src/environments/environment';
import { City } from '../model/city';
import { Type } from '../model/type';
import { DtoWarehouse } from '../dto/dto-warehouse';
import { DtoWarehousePackage } from '../dto/dto-warehouse-package';
import { Package } from '../model/package';

const SERVICE_PATH = "package/api/ware"

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  listAllWarehouse(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${environment.apiUrl}/${SERVICE_PATH}/allWarehouses`, this.httpOptions);
  }

  listWarehouseByCity(city: number): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${environment.apiUrl}/${SERVICE_PATH}/allWarehousesByCity/` + city, this.httpOptions);
  }

  listWarehouseByType(type: number): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${environment.apiUrl}/${SERVICE_PATH}/allWarehousesByType/` + type, this.httpOptions);
  }

  listWarehouseByCapacity(capacity: number): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${environment.apiUrl}/${SERVICE_PATH}/allWarehousesByCapacity/` + capacity, this.httpOptions);
  }

  listAllCities(): Observable<City[]> {
    return this.http.get<City[]>(`${environment.apiUrl}/${SERVICE_PATH}/allCities`, this.httpOptions);
  }

  listAllTypes(): Observable<Type[]> {
    return this.http.get<Type[]>(`${environment.apiUrl}/${SERVICE_PATH}/allTypes`, this.httpOptions);
  }

  warehouseById(id: number): Observable<Warehouse>{
    return this.http.get<Warehouse>(`${environment.apiUrl}/${SERVICE_PATH}/warehouse/` + id, this.httpOptions);
  }

  addWarehouse(warehouse: DtoWarehouse){
    return this.http.post<DtoWarehouse>(`${environment.apiUrl}/${SERVICE_PATH}/warehouseCreate`, warehouse, this.httpOptions);
  }

  addPackageinWarehouse(dtopackware: DtoWarehousePackage){
    return this.http.put<DtoWarehousePackage>(`${environment.apiUrl}/${SERVICE_PATH}/warehouse-package`, dtopackware, this.httpOptions);
  }

  listAllPackageByIdWarehouses(id: number): Observable<Package[]> {
    return this.http.get<Package[]>(`${environment.apiUrl}/${SERVICE_PATH}/pack-warehouse/` + id, this.httpOptions);
  }

  deletePackageinWarehouse(idWare: number, idPack: number){
    return this.http.delete(`${environment.apiUrl}/${SERVICE_PATH}/warehouse-package/` + idWare + `/` +idPack , this.httpOptions)
  }

  deleteWarehouseById(idWare: number){
    return this.http.delete(`${environment.apiUrl}/${SERVICE_PATH}/warehouse/` + idWare , this.httpOptions)
  }

}
