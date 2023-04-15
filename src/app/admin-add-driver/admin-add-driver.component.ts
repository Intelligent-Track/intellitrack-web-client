import { ManagerService } from './../_services/manager.service';
import { Component, OnInit } from '@angular/core';
import { DriverService } from '../_services/driver.service';
import { Router } from '@angular/router';
import { DtoManager } from '../dto/dto-manager';
import { Driver } from '../model/driver';
import { AdminService } from '../_services/admin.service';
import { Manager } from '../model/manager';

@Component({
  selector: 'app-admin-add-driver',
  templateUrl: './admin-add-driver.component.html',
  styleUrls: ['./admin-add-driver.component.css']
})
export class AdminAddDriverComponent implements OnInit {
  cities = ['Medellín', 'Bogotá', 'Monteria', 'Cali', 'Cartagena', 'Barranquilla', 'Valledupar', 'Santa Marta', 'Bucaramga'];
  
  selectedCity: string | undefined;
  selectedMan: string | undefined;
  nameDri: string = "";
  locationDri: string = ""; 
  phoneDri: number = -1;
  emailDri: string = "";
  managerList: Manager[] |undefined;

  constructor(
    private router: Router,
    private adminService : AdminService
  ) { }

  ngOnInit(): void {
    this.adminService.listAllManagers().subscribe(mans => {
      this.managerList = mans
    });
  }

  onSubmit(){
    if(this.nameDri && this.emailDri && this.locationDri && this.phoneDri && this.selectedCity && this.selectedMan){
      this.adminService.createDriver(new Driver(0, this.nameDri, this.emailDri, 0 ,this.phoneDri, "", this.locationDri, true, this.selectedMan, "", "", "")).subscribe(() => {
        this.router.navigate(['operator-list'])
      }
      );
    }
  }

}
