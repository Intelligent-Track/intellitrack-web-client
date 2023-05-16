import { Component, OnInit } from '@angular/core';
import { City } from '../model/city';
import { Type } from '../model/type';
import { WarehouseService } from '../_services/warehouse.service';
import { Package } from '../model/package';
import { DtoWarehouse } from '../dto/dto-warehouse';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-warehouse-create',
  templateUrl: './warehouse-create.component.html',
  styleUrls: ['./warehouse-create.component.css']
})
export class WarehouseCreateComponent implements OnInit {

  cities: City[] = [];
  selectedCity: City | undefined;
  location: string | undefined;
  capacity: number | undefined;
  types: Type[] = [];
  selectedType: Type | undefined;
  costPerM3: number | undefined;

  packages: Package[] = [];

  constructor(
    private warehouseService: WarehouseService,
    private router: Router,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.warehouseService.listAllCities().subscribe(listCities => {
      this.cities = listCities
    });
    this.warehouseService.listAllTypes().subscribe(listTypes => {
      this.types = listTypes
    });
  }

  onSubmit() {
    if (this.location && this.capacity && this.costPerM3 && this.selectedCity && this.selectedType) {
      this.warehouseService.addWarehouse(new DtoWarehouse(this.selectedCity, this.location, this.capacity, this.selectedType, this.costPerM3, this.packages)).subscribe({
        next: data => {
          this.router.navigate(['manager-list-warehouse'])
        },
        error: err => {
          this.router.navigate(['manager-list-warehouse'])
        }

      }   );
    }
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

}
