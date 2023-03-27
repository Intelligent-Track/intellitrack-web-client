import { Component, OnInit } from '@angular/core';
import { DtoManager } from '../dto/dto-manager';
import { ManagerService } from '../_services/manager.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {

  infoManagers: DtoManager[] | undefined;

  constructor(private managerService: ManagerService) { }

  ngOnInit(): void {
    this.managerService.listInfoManagers().subscribe(mans => {
      this.infoManagers = mans
    });
  }

}
