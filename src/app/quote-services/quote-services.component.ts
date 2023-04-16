import { City } from './../model/city';
import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../_services/quote.service';
import { DtoQuote } from '../dto/dto-quote';


@Component({
  selector: 'app-quote-services',
  templateUrl: './quote-services.component.html',
  styleUrls: ['./quote-services.component.css']
})
export class QuoteServicesComponent implements OnInit {
  cities: City[] | undefined;
  typeLoad = ['Pequeña', 'Medianas', 'Grandes o en estibas', 'Voluminosas', 'De dimensiones especiales']
  selectedOrigin: City | undefined;
  selectedDes: City | undefined;
  selectedLoad: string = "";
  weightLoad: number = 0;
  selectedDate: string ="";
  price: number = 0;
  showPrice= false;


  constructor(private quoteService :QuoteService) { }

  ngOnInit(): void {
    this.quoteService.listAllCities().subscribe(listCities => {
      this.cities = listCities
    });
  }

  quoteHome(selectedLoad: string, selectedOrigin: City | undefined, selectedDes: City | undefined, weightLoad: number, selectedDate: string):void{
    if (selectedOrigin?.name !== 'Ciudad de origen' && selectedDes?.name !== 'Ciudad de destino' && weightLoad !== null && selectedDate!== 'Tipo de envío' && selectedLoad !== null) {
      const quote = new DtoQuote(selectedLoad,selectedOrigin!, selectedDes!,  weightLoad, selectedDate)
      this.quoteService.quoteDelivery(quote).subscribe((pr: number) => {
        this.price = pr;
        this.showPrice = true
      })
    }
  }

}
