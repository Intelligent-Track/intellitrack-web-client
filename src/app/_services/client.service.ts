import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../model/client';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

const SERVICE_PATH = "users/api/cli"


@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private httpOptions = {
    headers : new HttpHeaders({
      "Content-Type" : "application/json"
    })
  }

  constructor(private http: HttpClient) { }

  updateClient(client: Client) {
    return this.http.put<Client>(`${environment.apiUrl}/${SERVICE_PATH}/updateClient`, client, this.httpOptions);
  }

  searchClientById(id: number): Observable<Client>{
    return this.http.get<Client>(`${environment.apiUrl}/${SERVICE_PATH}/searchClient/` + id, this.httpOptions);
  }
}
