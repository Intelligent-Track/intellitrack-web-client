import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-services',
  templateUrl: './quote-services.component.html',
  styleUrls: ['./quote-services.component.css']
})
export class QuoteServicesComponent implements OnInit {
  cities = ['Medellín', 'Bogotá', 'Monteria', 'Cali', 'Cartagena', 'Barranquilla', 'Valledupar', 'Santa Marta', 'Bucaramanga'];
  typeLoad = ['Pequeña', 'Medianas', 'Grandes o en estibas', 'Voluminosas', 'De dimensiones especiales']
  
  selectedOrigin: string = "";
  selectedDes: string = "";
  selectedLoad: string = "";
  weightLoad: number = 0;

  selectedDate: string ="";


  constructor() { }

  ngOnInit(): void {
  }

}
