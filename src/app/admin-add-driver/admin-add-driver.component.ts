import { ManagerService } from './../_services/manager.service';
import { Component, OnInit } from '@angular/core';
import { DriverService } from '../_services/driver.service';
import { Router } from '@angular/router';
import { DtoManager } from '../dto/dto-manager';
import { Driver } from '../model/driver';

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
  managerList: DtoManager[] |undefined;

  constructor(
    private driverService: DriverService,
    private router: Router,
    private managerService : ManagerService
  ) { }

  ngOnInit(): void {
    this.managerService.listInfoManagers().subscribe(mans => {
      this.managerList = mans
    });
  }

  onSubmit(){
    if(this.nameDri && this.emailDri && this.locationDri && this.phoneDri && this.selectedCity && this.selectedMan){
      this.driverService.createDriver(new Driver(this.nameDri, this.emailDri, this.phoneDri, this.locationDri, this.selectedMan)).subscribe(() => {
        this.router.navigate(['operator-list'])
      }
      );
    }
  }

}
