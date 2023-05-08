import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../model/warehouse';
import { WarehouseService } from '../_services/warehouse.service';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-manager-list-warehouse',
  templateUrl: './manager-list-warehouse.component.html',
  styleUrls: ['./manager-list-warehouse.component.css']
})
export class ManagerListWarehouseComponent implements OnInit {


  infoWarehouses: Warehouse[] | undefined;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private warehouseService: WarehouseService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.warehouseService.listAllWarehouse().subscribe(listWarehouse => {
      this.infoWarehouses = listWarehouse
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
}
