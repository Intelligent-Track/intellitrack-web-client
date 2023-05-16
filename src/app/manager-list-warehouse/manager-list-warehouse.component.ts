import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../model/warehouse';
import { WarehouseService } from '../_services/warehouse.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';
import { City } from '../model/city';
import { Type } from '../model/type';

@Component({
  selector: 'app-manager-list-warehouse',
  templateUrl: './manager-list-warehouse.component.html',
  styleUrls: ['./manager-list-warehouse.component.css']
})
export class ManagerListWarehouseComponent implements OnInit {


  infoWarehouses: Warehouse[] | undefined;
  wares: Warehouse[] | undefined;
  cities: City[] | undefined;
  types: Type[] | undefined;
  selectedCity: City | undefined;
  selectedType: Type | undefined;
  capacity: number | undefined;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private warehouseService: WarehouseService,
    private storageService: StorageService
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

  onAddSubmit(){

  }

  deleteWarehouse(infoWarehouse: Warehouse){
    this.warehouseService.deleteWarehouseById(infoWarehouse.id).subscribe(()=>{
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['manager-list-warehouse']);
      });
    })

  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
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
