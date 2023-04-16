import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Mechanic } from '../model/mechanic';
import { DtoMechanic } from '../dto/dto-mechanic';
import { DtoLinkMechanicManager } from '../dto/dto-link-mechanic-manager';

const SERVICE_PATH = 'users/api/adm'

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
    return this.http.get<Mechanic[]>(`${environment.apiUrl}/${SERVICE_PATH}/GetMecanics`, this.httpOptions);
  }

  deleteMechanic(fullName: string){
    return this.http.delete<Mechanic>(`${environment.apiUrl}/${SERVICE_PATH}/DeleteMecanic/` + fullName, this.httpOptions);
  }

  createMechanic(mechanic: Mechanic){
    return this.http.post<Mechanic>(`${environment.apiUrl}/${SERVICE_PATH}/MecanicCreate`, mechanic, this.httpOptions);
  }

  listInfoMechanics(): Observable<DtoMechanic[]>{
    return this.http.get<DtoMechanic[]>(`${environment.apiUrl}/${SERVICE_PATH}/infoOperators`, this.httpOptions);
  }
}
