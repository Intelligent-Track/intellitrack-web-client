import { Component, OnInit } from '@angular/core';
import { DtoDriver} from '../dto/dto-driver';
import { DriverService } from '../_services/driver.service';
import { Driver } from '../model/driver';
import { AdminService } from '../_services/admin.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  infoDrivers: Driver[] = [];

  constructor(
    private adminService: AdminService,
    private storageService: StorageService,
    ) { }

  ngOnInit(): void {
    this.adminService.listAllDrivers().subscribe(driver => {
      driver.forEach(dr => {
        if(dr.managerUsername == this.storageService.getUser().username){
          this.infoDrivers.push(dr)
        }
      });
    });
  }

  editDriver():void{
    
  }

}
