import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../_services/warehouse.service';

@Component({
  selector: 'app-board-moderator',
  templateUrl: './board-moderator.component.html',
  styleUrls: ['./board-moderator.component.css']
})
export class BoardModeratorComponent implements OnInit {

  constructor(
    private warehouseService: WarehouseService
  ) { }

  ngOnInit(): void {
    this.warehouseService.listAllWarehouse().subscribe(allw => console.log(allw))
  }

}
