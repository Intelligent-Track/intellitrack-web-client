import { Component } from '@angular/core';
import { WarehouseService } from '../_services/warehouse.service';
import { Warehouse } from '../model/warehouse';
import { City } from '../model/city';
import { Type } from '../model/type';

@Component({
  selector: 'app-warehouse-list-client',
  templateUrl: './warehouse-list-client.component.html',
  styleUrls: ['./warehouse-list-client.component.css']
})
export class WarehouseListClientComponent {
  
  infoWarehouses: Warehouse[] | undefined;
  wares: Warehouse[] | undefined;
  cities: City[] | undefined;
  types: Type[] | undefined;
  selectedCity: City | undefined;
  selectedType: Type | undefined;
  capacity: number | undefined;

  constructor(
    private warehouseService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.warehouseService.listAllWarehouse().subscribe(listWarehouse => {
      this.infoWarehouses = listWarehouse
      this.wares = listWarehouse
    });
    this.warehouseService.listAllCities().subscribe(listCities => {
      this.cities = listCities
    });
    this.warehouseService.listAllTypes().subscribe(listTypes =>{
      this.types = listTypes
    });
  }

  onSearchSubmit(){
    if(!this.capacity && !this.selectedType && this.selectedCity){
      this.warehouseService.listWarehouseByCity(this.selectedCity!.id).subscribe(listWarehouse => {
        this.infoWarehouses = listWarehouse
        this.selectedCity = undefined
      })
    }else if(!this.selectedCity && !this.capacity && this.selectedType){
      this.warehouseService.listWarehouseByType(this.selectedType!.id).subscribe(listWarehouse => {
        this.infoWarehouses = listWarehouse
        this.selectedType = undefined
      })
    }else if(!this.selectedCity && !this.selectedType && this.capacity){
      this.warehouseService.listWarehouseByCapacity(this.capacity!).subscribe(listWarehouse => {
        this.infoWarehouses = listWarehouse
        this.capacity = undefined
      })
    }else{
      this.infoWarehouses = this.wares
      this.capacity = undefined
      this.selectedType = undefined
      this.selectedCity = undefined
    }
  }
}
