import { Component } from '@angular/core';
import { Warehouse } from '../model/warehouse';
import { ActivatedRoute, Router } from '@angular/router';
import { WarehouseService } from '../_services/warehouse.service';
import { switchMap } from 'rxjs';
import { Package } from '../model/package';
import { DtoWarehousePackage } from '../dto/dto-warehouse-package';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-warehouse-info-admin',
  templateUrl: './warehouse-info-admin.component.html',
  styleUrls: ['./warehouse-info-admin.component.css']
})
export class WarehouseInfoAdminComponent {

  warehouse: Warehouse | undefined;
  volume: number | undefined;
  initDate: string | undefined;
  finalDate: string | undefined;
  quote: number | undefined;

  packages: Package[] | undefined;


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private warehouseService: WarehouseService,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => this.warehouseService.warehouseById(+params.get("id")!))
    ).subscribe(war => {
      this.warehouse = war
      this.warehouseService.listAllPackageByIdWarehouses(this.warehouse.id).subscribe(packs => {
        this.packages = packs
      })
    })
  }

  onSubmit(){
    if(this.warehouse && this.volume){
      this.quote = this.warehouse.costPerM3 * this.volume
      console.log(this.quote)
    }
  }

  deletePackage(infoPackage: Package){
    if(this.warehouse){
      this.warehouseService.deletePackageinWarehouse(this.warehouse.id, infoPackage.id).subscribe(() =>{
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          if(this.warehouse){
            this.router.navigate(['/warehouse-info-admin/', this.warehouse.id]);
          }
        });
      })
    }
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

}
