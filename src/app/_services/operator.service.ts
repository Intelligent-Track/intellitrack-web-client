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

  editProfile(operator: Operator){

  }

}
