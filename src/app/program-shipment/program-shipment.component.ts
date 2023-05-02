import { QuoteService } from './../_services/quote.service';
import { DeliveryService } from '../_services/delivery.service';
import { DtoProduct } from '../dto/dto-product';
import { DtoShipment } from '../dto/dto-shipment';
import { City } from '../model/city';
import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../_services/warehouse.service';
import { ClientService } from '../_services/client.service';
import { StorageService } from '../_services/storage.service';

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
  comment: string = "";
  name: string = "";
  arriveDate: string ="";
  departureDate: string ="";
  price: number = 0;
  showprice =false;
  nitClt: string = "";
  msge = false;
  msgeer = false;

  constructor(
    private deliveryService: DeliveryService, private warehouse: WarehouseService, public clientService: ClientService,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.clientService.searchClientById(this.storageService.getUser().username).subscribe(clt =>{
      if(clt !=null){
        this.nitClt = clt.nit
        console.log(this.nitClt)
      }
    })

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

  program(selectedOrigin: City | undefined, selectedDes: City | undefined, arriveDate: string, departureDate: string, comments:string, deliveryType: string) {
    if (selectedOrigin?.name != 'Ciudad de origen' && selectedDes?.name != 'Ciudad de destino' && arriveDate != null && departureDate != null && deliveryType != 'Tipo de envío' && comments != '' && this.products.length > 0) {
      this.msgeer = false; 
      console.log(selectedOrigin?.id, selectedDes?.id, deliveryType, arriveDate, departureDate, comments,this.nitClt, this.products)
      this.deliveryService.createDelivery(selectedOrigin?.id!, selectedDes?.id!, deliveryType, arriveDate, departureDate, comments, this.nitClt, this.products).subscribe((pr: number) => {
        if(pr != null){
          this.price = pr;
          this.showprice = true;
          this.msge = false;
        }else{
          this.msge = true;
        }
      })
    }else{
      this.msgeer = true;
    }
  }

}
