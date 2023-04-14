import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mechanic } from '../model/mechanic';
import { DtoMechanic } from '../dto/dto-mechanic';
import { DtoLinkMechanicManager } from '../dto/dto-link-mechanic-manager';

const ADMIN_API = 'http://localhost:8080/api/adm/MechanicCreate'

@Injectable({
  providedIn: 'root'
})
export class MechanicService {

  private httpOptions = {
    headers : new HttpHeaders({
      "Content-Type" : "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  listAllMechanics(): Observable<Mechanic[]>{
    return this.http.get<Mechanic[]>(ADMIN_API + 'allOperators', this.httpOptions);
  }

  deleteMechanic(id: number){
    return this.http.delete<Mechanic>(ADMIN_API + 'operator/' + id, this.httpOptions);
  }

  createMechanic(mechanic: Mechanic){
    return this.http.post<Mechanic>(ADMIN_API + "operator", mechanic, this.httpOptions);
  }

  unlinkManagerMechanic(idMechanic: number, idManager: number){
    return this.http.put(ADMIN_API + "unlinkOperatorManager", new DtoLinkMechanicManager(idManager, idMechanic), this.httpOptions);
  }

  listInfoMechanics(): Observable<DtoMechanic[]>{
    return this.http.get<DtoMechanic[]>(ADMIN_API + 'infoOperators', this.httpOptions);
  }
}
