import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../model/manager';
import { DtoManager } from '../dto/dto-manager';
import { environment } from 'src/environments/environment';
import { Driver } from '../model/driver';
import { Operator } from '../model/operator';
import { DtoLinkOperatorManager } from '../dto/dto-link-operator-manager';

const SERVICE_PATH = "users/api/adm"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private httpOptions = {
    headers : new HttpHeaders({
      "Content-Type" : "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  //Gerentes

  listAllManagers(): Observable<Manager[]> {
    return this.http.get<Manager[]>(`${environment.apiUrl}/${SERVICE_PATH}/GetManager`, this.httpOptions);
  }

  //Conductores
  
  listAllDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${environment.apiUrl}/${SERVICE_PATH}/GetDrivers`, this.httpOptions);
  }

  createDriver(driver: Driver){
    return this.http.post<Driver>(`${environment.apiUrl}/${SERVICE_PATH}/driver`, driver, this.httpOptions);
  }

  //Operadores

  
  listAllOperators(): Observable<Operator[]>{
    return this.http.get<Operator[]>(`${environment.apiUrl}/${SERVICE_PATH}/GetOperators`, this.httpOptions);
  }

  deleteOperator(id: number){
    return this.http.delete<Operator>(`${environment.apiUrl}/${SERVICE_PATH}/operator/` + id, this.httpOptions);
  }

  createOperator(operator: Operator){
    return this.http.post<Operator>(`${environment.apiUrl}/${SERVICE_PATH}/OperatorCreate`, operator, this.httpOptions);
  }

  unlinkManagerOperator(idOperator: number, idManager: number){
    return this.http.put(`${environment.apiUrl}/${SERVICE_PATH}/unlinkOperatorManager`, new DtoLinkOperatorManager(idManager, idOperator), this.httpOptions);
  }

}
