import { Component, OnInit } from '@angular/core';
import { DtoManager } from '../dto/dto-manager';
import { ManagerService } from '../_services/manager.service';
import { AdminService } from '../_services/admin.service';
import { Manager } from '../model/manager';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {

  infoManagers: Manager[] | undefined;

  managerSearch: string | undefined;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.listAllManagers().subscribe(mans => {
      this.infoManagers = mans
    });
  }

  onSubmit(){

  }

  onAddSubmit(){

  }

}
