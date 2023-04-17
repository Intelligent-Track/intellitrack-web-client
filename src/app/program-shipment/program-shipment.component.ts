import { QuoteService } from './../_services/quote.service';
import { DeliveryService } from '../_services/delivery.service';
import { DtoProduct } from '../dto/dto-product';
import { DtoShipment } from '../dto/dto-shipment';
import { City } from '../model/city';
import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../_services/warehouse.service';

@Component({
  selector: 'app-program-shipment',
  templateUrl: './program-shipment.component.html',
  styleUrls: ['./program-shipment.component.css']
})
export class ProgramShipmentComponent implements OnInit {
  cities: City[] | undefined;
  selectedOrigin: City | null = null;
  selectedDes: City | null = null;
  categories = ["General", "Grande", "Peligrosa", "Perecedera"];
  deliveryType: string ="";
  deliveryTypes = ["Normal", "Prioritario", "Acelerado"];
  selectedCategory: string = "";
  products: DtoProduct[] = [];
  tableUpdated = false;
  weight: number | undefined;
  volume: number | undefined;
  name: string = "";
  date: string ="";
  price: number = 0;
  showprice =false;

  constructor(
    private deliveryService: DeliveryService, private warehouse: WarehouseService
  ) { }

  ngOnInit(): void {
    this.warehouse.listAllCities().subscribe(listCities => {
      this.cities = listCities
    });
  }

  addProduct(selectedCategory: string, name: string, weight: number, volume: number) {
    if (selectedCategory !== 'Categoria' && name !== '' && weight !== null && volume !== null) {
      const proc = new DtoProduct(selectedCategory, name, weight, volume);
      this.products.push(proc);
      this.tableUpdated = true;
    }
  }
  
  deleteProduct(product: DtoProduct) {
    this.products = this.products.filter(p => p !== product);
    this.tableUpdated = true;
  }

  program(selectedOrigin: City | undefined, selectedDes: City | undefined, date: string, deliveryType: string) {
    if (selectedOrigin?.name !== 'Ciudad de origen' && selectedDes?.name !== 'Ciudad de destino' && date !== null && deliveryType !== 'Tipo de envío' && this.products.length > 0) {
      const delivery = new DtoShipment(selectedOrigin?.id!, selectedDes?.id!, deliveryType, date, this.products)
      this.deliveryService.createDelivery(delivery).subscribe((pr: number) => {
        this.price = pr;
        this.showprice = true;
      })
    }
  }

}
