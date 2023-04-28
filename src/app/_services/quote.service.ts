import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../model/city';
import { environment } from 'src/environments/environment';
import { DtoQuote } from '../dto/dto-quote';

const SERVICE_PATH = "package/api/qte"

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  }

  constructor(private http: HttpClient) {}

  listAllCities(): Observable<City[]> {
    return this.http.get<City[]>(`${environment.apiUrl}/${SERVICE_PATH}/allCities`, this.httpOptions);
  }

  quoteDelivery( quote : DtoQuote) {
    console.log(quote)
    return this.http.post<number>(`${environment.apiUrl}/${SERVICE_PATH}/quoteDelivery`, quote, this.httpOptions);
  }
}
