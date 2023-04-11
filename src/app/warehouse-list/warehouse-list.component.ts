import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../model/warehouse';
import { WarehouseService } from '../_services/warehouse.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {

  infoWarehouses: Warehouse[] | undefined;
  cities: string[] | undefined;
  types: string[] | undefined;
  selectedCity: string | undefined;
  selectedType: string | undefined;
  capacity: number | undefined;

  constructor(
    private warehouseService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.warehouseService.listAllWarehouse().subscribe(listWarehouse => {
      this.infoWarehouses = listWarehouse
    });
  }

  onSearchSubmit(){
    if(!this.capacity && !this.selectedType){
      this.warehouseService.listWarehouseByCity(this.selectedCity!).subscribe(listWarehouse => {
        this.infoWarehouses = listWarehouse
      })
    }else if(!this.selectedCity && !this.capacity){
      this.warehouseService.listWarehouseByType(this.selectedType!).subscribe(listWarehouse => {
        this.infoWarehouses = listWarehouse
      })
    }else{
      this.warehouseService.listWarehouseByCapacity(this.capacity!).subscribe(listWarehouse => {
        this.infoWarehouses = listWarehouse
      })
    }
  }

  onAddSubmit(){
    
  }

}
