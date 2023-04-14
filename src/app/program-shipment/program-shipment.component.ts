import { DeliveryService } from '../_services/delivery.service';
import { DtoProduct } from '../dto/dto-product';
import { DtoShipment } from '../dto/dto-shipment';
import { City } from '../model/city';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-shipment',
  templateUrl: './program-shipment.component.html',
  styleUrls: ['./program-shipment.component.css']
})
export class ProgramShipmentComponent implements OnInit {
  cities: City[] | undefined;
  selectedOrigin: string = "";
  selectedDes: string = "";
  categories = ["General", "Grande", "Peligrosa", "Perecedera"];
  deliveryType: string ="";
  deliveryTypes = ["Normal", "Prioritario", "Acelerado"];
  selectedCategory: string = "";
  products: DtoProduct[] = [];
  tableUpdated = false;
  weight: number = 0;
  name: string = "";
  date: Date | undefined;
  price: number = 0;
  showprice =false;

  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit(): void {
    this.deliveryService.listAllCities().subscribe(listCities => {
      this.cities = listCities
    });
  }

  addProduct(selectedCategory: string, name: string, weight: number) {
    if (selectedCategory !== 'Categoria' && name !== '' && weight !== 0) {
      const proc = new DtoProduct(selectedCategory, name, weight);
      this.products.push(proc);
      this.tableUpdated = true;
    }
  }
  
  deleteProduct(product: DtoProduct) {
    this.products = this.products.filter(p => p !== product);
    this.tableUpdated = true;
  }

  program(selectedOrigin: string, selectedDes: string, date: Date, deliveryType: string) {
    if (selectedOrigin !== 'Ciudad de origen' && selectedDes !== 'Ciudad de destino' && date !== null && deliveryType !== 'Tipo de envío' && this.products.length > 0) {
      const delivery = new DtoShipment(selectedOrigin, selectedDes, deliveryType, date, this.products)
      this.deliveryService.createDelivery(delivery).subscribe((pr: number) => {
        this.price = pr;
      })
    }
  }

}
