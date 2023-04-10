import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DtoLinkOperatorManager } from '../dto/dto-link-operator-manager';
import { DtoOperator } from '../dto/dto-operator';
import { Operator } from '../model/operator';
import { environment } from 'src/environments/environment';

const SERVICE_PATH = "users/api/opt"

@Injectable({
  providedIn: 'root'
})
export class OperatorService {

  private httpOptions = {
    headers : new HttpHeaders({
      "Content-Type" : "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  listAllOperators(): Observable<Operator[]>{
    return this.http.get<Operator[]>(`${environment.apiUrl}/${SERVICE_PATH}/allOperators`, this.httpOptions);
  }

  deleteOperator(id: number){
    return this.http.delete<Operator>(`${environment.apiUrl}/${SERVICE_PATH}/operator/` + id, this.httpOptions);
  }

  createOperator(operator: Operator){
    return this.http.post<Operator>(`${environment.apiUrl}/${SERVICE_PATH}/operator`, operator, this.httpOptions);
  }

  unlinkManagerOperator(idOperator: number, idManager: number){
    return this.http.put(`${environment.apiUrl}/${SERVICE_PATH}/unlinkOperatorManager`, new DtoLinkOperatorManager(idManager, idOperator), this.httpOptions);
  }

  listInfoOperators(): Observable<DtoOperator[]>{
    return this.http.get<DtoOperator[]>(`${environment.apiUrl}/${SERVICE_PATH}/infoOperators`, this.httpOptions);
  }
}
