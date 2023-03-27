import { Component, OnInit } from '@angular/core';
import { DtoDriver} from '../dto/dto-driver';
import { DriverService } from '../_services/driver.service';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  infoDrivers: DtoDriver[] | undefined;

  constructor(private driverService: DriverService) { }

  ngOnInit(): void {
    this.driverService.listInfoDrivers().subscribe(driver => {
      this.infoDrivers = driver
    });
  }

  editDriver():void{
    
  }

}
