import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Manager } from '../model/manager';
import { DtoManager } from '../dto/dto-manager';
import { environment } from 'src/environments/environment';
import { Driver } from '../model/driver';
import { Operator } from '../model/operator';
import { DtoLinkOperatorManager } from '../dto/dto-link-operator-manager';
import { DtoOperator } from '../dto/dto-operator';
import { DtoDriver } from '../dto/dto-driver';
import { DtoDriverBasic } from '../dto/dto-driver-basic';

const SERVICE_PATH = "users/api/adm"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  //Gerentes

  listAllManagers(): Observable<Manager[]> {
    return this.http.get<Manager[]>(`${environment.apiUrl}/${SERVICE_PATH}/GetManager`, this.httpOptions);
  }

  deleteManager(username: string) {
    return this.http.delete<Manager>(`${environment.apiUrl}/${SERVICE_PATH}/DeleteManager/` + username, this.httpOptions);
  }

  createManager(manager: DtoManager){
    return this.http.post<DtoManager>(`${environment.apiUrl}/${SERVICE_PATH}/ManagerCreate`, manager, this.httpOptions);
  }

  //Conductores

  listAllDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${environment.apiUrl}/${SERVICE_PATH}/GetDrivers`, this.httpOptions);
  }

  createDriver(driver: DtoDriverBasic) {
    return this.http.post<DtoDriverBasic>(`${environment.apiUrl}/${SERVICE_PATH}/DriverCreate`, driver, this.httpOptions);
  }

  //Operadores


  listAllOperators(): Observable<Operator[]> {
    return this.http.get<Operator[]>(`${environment.apiUrl}/${SERVICE_PATH}/GetOperators`, this.httpOptions);
  }

  deleteOperator(username: string) {
    return this.http.delete<Operator>(`${environment.apiUrl}/${SERVICE_PATH}/DeleteOperator/` + username, this.httpOptions);
  }

  createOperator(operator: DtoOperator) {
    return this.http.post<Operator>(`${environment.apiUrl}/${SERVICE_PATH}/OperatorCreate`, operator, this.httpOptions);
  }

  uploadFiles(form: FormData): Observable<Driver>{
    return this.http.put<Driver>(`${environment.apiUrl}/${SERVICE_PATH}/uploadDriverFiles`, form);
  }



}
