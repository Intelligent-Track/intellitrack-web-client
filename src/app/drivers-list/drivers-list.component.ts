import { Component, OnInit } from '@angular/core';
import { DtoDriver} from '../dto/dto-driver';
import { DriverService } from '../_services/driver.service';
import { Driver } from '../model/driver';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  infoDrivers: Driver[] | undefined;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.listAllDrivers().subscribe(driver => {
      this.infoDrivers = driver
    });
  }

  editDriver():void{
    
  }

}
