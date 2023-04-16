import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Warehouse } from '../model/warehouse';
import { WarehouseService } from '../_services/warehouse.service';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {


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

}
