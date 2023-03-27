import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DtoLinkOperatorManager } from '../dto/dto-link-operator-manager';
import { DtoOperator } from '../dto/dto-operator';
import { Operator } from '../model/operator';

const MANAGER_API = 'http://localhost:8080/api/opt/';

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
    return this.http.get<Operator[]>(MANAGER_API + 'allOperators', this.httpOptions);
  }

  deleteOperator(id: number){
    return this.http.delete<Operator>(MANAGER_API + 'operator/' + id, this.httpOptions);
  }

  createOperator(operator: Operator){
    return this.http.post<Operator>(MANAGER_API + "operator", operator, this.httpOptions);
  }

  unlinkManagerOperator(idOperator: number, idManager: number){
    return this.http.put(MANAGER_API + "unlinkOperatorManager", new DtoLinkOperatorManager(idManager, idOperator), this.httpOptions);
  }

  listInfoOperators(): Observable<DtoOperator[]>{
    return this.http.get<DtoOperator[]>(MANAGER_API + 'infoOperators', this.httpOptions);
  }
}
