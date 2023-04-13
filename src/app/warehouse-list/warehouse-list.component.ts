import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../model/warehouse';
import { WarehouseService } from '../_services/warehouse.service';
import { City } from '../model/city';
import { Type } from '../model/type';
import { Router } from '@angular/router';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {

  infoWarehouses: Warehouse[] | undefined= [new Warehouse(1,new City(1,"bogota"),"call57'12", 1000,new Type(1,"Carga"), 120000)];
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
    });
    this.warehouseService.listAllCities().subscribe(listCities => {
      this.cities = listCities
    });
    this.warehouseService.listAllTypes().subscribe(listTypes =>{
      this.types = listTypes
    });
  }

  onSearchSubmit(){
    if(!this.capacity && !this.selectedType){
      this.warehouseService.listWarehouseByCity(this.selectedCity!.id).subscribe(listWarehouse => {
        this.infoWarehouses = listWarehouse
      })
    }else if(!this.selectedCity && !this.capacity){
      this.warehouseService.listWarehouseByType(this.selectedType!.id).subscribe(listWarehouse => {
        this.infoWarehouses = listWarehouse
      })
    }else{
      this.warehouseService.listWarehouseByCapacity(this.capacity!).subscribe(listWarehouse => {
        this.infoWarehouses = listWarehouse
      })
    }
  }

}
