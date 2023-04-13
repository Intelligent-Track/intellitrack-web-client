import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Warehouse } from '../model/warehouse';
import { WarehouseService } from '../_services/warehouse.service';

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


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private warehouseService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => this.warehouseService.warehouseById(+params.get("id")!))
    ).subscribe(war => {
      this.warehouse = war
    })
  }

  onSubmit(){
    if(this.warehouse && this.volume){
      this.quote = this.warehouse.costPerM3 * this.volume
      console.log(this.quote)
    }
  }

}
