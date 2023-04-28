import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Warehouse } from '../model/warehouse';
import { WarehouseService } from '../_services/warehouse.service';
import { Package } from '../model/package';
import { DtoWarehousePackage } from '../dto/dto-warehouse-package';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-warehouse-info',
  templateUrl: './warehouse-info.component.html',
  styleUrls: ['./warehouse-info.component.css']
})
export class WarehouseInfoComponent implements OnInit {

  warehouse: Warehouse | undefined;
  volume: number | undefined;
  initDate: string | undefined;
  finalDate: string | undefined;
  quote: number | undefined;
  totalReservation: number = 0;
  totalVolume: number = 0;

  packAdd: boolean = false;
  volumeErr: boolean = false;

  packages: Package[] = [];
  namePackage: string | undefined;
  weightPackage: number | undefined;
  volumePackage: number | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private warehouseService: WarehouseService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => this.warehouseService.warehouseById(+params.get("id")!))
    ).subscribe(war => {
      this.warehouse = war
    })
  }

  onSubmit() {
    if (this.warehouse && this.volume) {
      this.quote = this.warehouse.costPerM3 * this.volume
      this.packAdd = false
    }
  }

  addPackage() {
    if (this.warehouse && this.namePackage && this.volumePackage && this.weightPackage && this.volumePackage <= this.warehouse.capacity) {
      this.packages.push(new Package(0, this.warehouse.address, this.namePackage, this.volumePackage, this.weightPackage, this.storageService.getUser().id));
      this.totalReservation += this.warehouse.costPerM3 * this.volumePackage
      this.totalVolume += this.volumePackage
      this.namePackage = "";
      this.volumePackage = undefined;
      this.weightPackage = undefined;
      this.volumeErr = false;
    } else if (this.warehouse && this.volumePackage && this.volumePackage > this.warehouse.capacity) {
      this.volumeErr = true;
    }
  }

  deletePackage(pack: Package) {
    const index = this.packages.indexOf(pack, 0);
    if (index > -1 && this.warehouse) {
      this.packages.splice(index, 1);
      this.totalReservation -= this.warehouse.costPerM3 * pack.volume
      this.totalVolume -= pack.volume
    }
  }

  packageInWarehouse() {
    if (this.warehouse && this.packages && this.totalVolume <= this.warehouse.capacity) {

      this.warehouseService.addPackageinWarehouse(new DtoWarehousePackage(this.warehouse.id, this.packages)).subscribe(() => {
        this.router.navigate(['warehouse-list'])
      })
    
    }else if(this.warehouse && this.totalVolume > this.warehouse.capacity){
      alert('El total del volumen supera la capacidad de la bodega');
    }
  }

}
