import { Component, OnInit } from '@angular/core';
import { City } from '../model/city';
import { QuoteService } from '../_services/quote.service';
import { DtoQuote } from '../dto/dto-quote';

interface Button {
  title: string;
  textP: string;
  textD: string;
  imageUrl: string;
  selected: boolean;
  precio: number;
}

interface Option {
  label: string;
  value: string;
}

@Component({
  selector: 'app-client-quote-services',
  templateUrl: './client-quote-services.component.html',
  styleUrls: ['./client-quote-services.component.css']
})
export class ClientQuoteServicesComponent implements OnInit {
  cities: City[] | undefined;
  typeLoad = ['Pequeña', 'Medianas', 'Grandes o en estibas', 'Voluminosas', 'De dimensiones especiales']
  selectedOrigin: City | undefined;
  selectedDes: City | undefined;
  selectedLoad: string = "";
  weightLoad: number = 0;
  volumeLoad: number = 0;
  cantidad: number = 0;
  selectedArriveDate: string ="";
  selectedDepartureDate: string ="";
  price: number = 0;
  selectedTime: string = "";
  selectedTipoEnvio: string = "";
  selectedTerminos: string = "";
  showPrice= false;
  priceTarifa: number = 0;
  priceEnvio: number = 0;
  priceImpuestos: number = 0;
  priceAdicional: number = 0;
  priceTransporte: number = 0;

  buttons: Button[] = [
    {title: 'camioneta', textP:'$50.000', textD:'Hasta 100 kg', imageUrl: 'assets/camioneta.png', selected: false, precio: 50000},
    {title: 'van', textP:'$150.000', textD:'Hasta 200 kg', imageUrl: 'assets/van.png', selected: false, precio: 150000},
    {title: 'camion', textP:'$350.000', textD:'Hasta 500 kg', imageUrl: 'assets/camionr.png', selected: false, precio: 350000},
    {title: 'tractomula', textP:'$550.000', textD:'Hasta 1000 kg', imageUrl: 'assets/tractomula.png', selected: false, precio: 550000},
    {title: 'van', textP:'$1.150.000', textD:'Hasta 5000 kg', imageUrl: 'assets/avionr.png', selected: false, precio: 1150000},
  ]

  options: Option[] = [
    {label: "Estandar", value: '1'},
    {label: "Urgente", value: '2'},
  ]

  constructor(private quoteService :QuoteService) { }

  ngOnInit(): void {
    this.quoteService.listAllCities().subscribe(listCities => {
      this.cities = listCities
    });
  }

  quoteHome(selectedLoad: string, selectedOrigin: City | undefined, selectedDes: City | undefined, weightLoad: number, selectedArriveDate: string , selectedDepartureDate: string):void{
    if (selectedOrigin?.name !== 'Ciudad de origen' && selectedDes?.name !== 'Ciudad de destino' && weightLoad !== null && selectedArriveDate!== null && selectedDepartureDate!== null && selectedLoad !== null) {
      const quote = new DtoQuote(selectedLoad,selectedOrigin!, selectedDes!,  weightLoad, this.volumeLoad, selectedArriveDate, selectedDepartureDate)
      this.quoteService.quoteDelivery(quote).subscribe((pr: number) => {
        this.price = pr;
        this.showPrice = true
      })
    }
  }

  selectedButton(button: Button){
    for(let b in this.buttons){
      if(this.buttons[b].selected) {
        this.buttons[b].selected = false;
      }
    }
    button.selected = true;
    this.priceTransporte = button.precio;
  }

}
