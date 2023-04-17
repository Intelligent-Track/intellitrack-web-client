import { Component, OnInit } from '@angular/core';
import { Warehouse } from '../model/warehouse';

@Component({
  selector: 'app-manager-list-warehouse',
  templateUrl: './manager-list-warehouse.component.html',
  styleUrls: ['./manager-list-warehouse.component.css']
})
export class ManagerListWarehouseComponent implements OnInit {


  infoWarehouse: Warehouse[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
