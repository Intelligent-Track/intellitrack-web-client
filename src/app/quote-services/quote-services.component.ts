import { City } from './../model/city';
import { Component, OnInit } from '@angular/core';
import { QuoteService } from '../_services/quote.service';
import { DtoQuote } from '../dto/dto-quote';
import { WarehouseService } from '../_services/warehouse.service';


@Component({
  selector: 'app-quote-services',
  templateUrl: './quote-services.component.html',
  styleUrls: ['./quote-services.component.css']
})
export class QuoteServicesComponent implements OnInit {
  cities: City[] | undefined;
  typeLoad = ['Pequeña', 'Medianas', 'Grandes o en estibas', 'Voluminosas', 'De dimensiones especiales']
  selectedOrigin: City | null = null;
  selectedDes: City | null = null;
  selectedLoad: string = "";
  selectedOriginIndex: number | null = null;
  selectedDesIndex: number | null = null;
  weight: number | undefined;
  volume: number | undefined;
  selectedDepartureDate: string ="";
  selectedArriveDate: string ="";
  price: string = "0";
  showPrice= false;
  today: string;

  
  constructor(private quoteService :QuoteService, private wareService : WarehouseService) { 
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = ('0' + (currentDate.getMonth() + 1)).slice(-2);
    const day = ('0' + currentDate.getDate()).slice(-2);
    this.today = `${year}-${month}-${day}`;
  }

  ngOnInit(): void {
    this.wareService.listAllCities().subscribe(listCities => {
      this.cities = listCities
    });
  }

  quoteHome(selectedLoad: string,selectedOriginIndex: number | null, selectedDesIndex: number | null, weight: number, volume: number, selectedArriveDate: string, selectedDepartureDate: string):void{
    if (selectedOriginIndex !== null && selectedDesIndex !== null) {
      const selectedOrigin = this.cities![selectedOriginIndex];
      const selectedDes = this.cities![selectedDesIndex];
      console.log('selectedLoad', selectedLoad);
      console.log('selectedOrigin', selectedOrigin);
      console.log('selectedDes', selectedDes);
      console.log('weight', weight);
      console.log('volume', volume);
      console.log('selectedArriveDate', selectedArriveDate);
      console.log('selectedDepartureDate', selectedDepartureDate);

      if (weight !== null && volume!== null&& selectedArriveDate!== null && selectedDepartureDate!== null && selectedLoad !== null) {
        this.quoteService.quoteDelivery(new DtoQuote(selectedLoad,selectedOrigin!, selectedDes!,  weight, volume,  selectedArriveDate, selectedDepartureDate)).subscribe((pr: number) => {
          console.log(pr);
          this.price = "$" + pr;
          this.showPrice = true
        })
      }
    }
    
  }

}
