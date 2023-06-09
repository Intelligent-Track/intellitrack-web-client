import { Component, OnInit } from '@angular/core';
import { DtoDriver } from '../dto/dto-driver';
import { DriverService } from '../_services/driver.service';
import { Driver } from '../model/driver';
import { AdminService } from '../_services/admin.service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drivers-list',
  templateUrl: './drivers-list.component.html',
  styleUrls: ['./drivers-list.component.css']
})
export class DriversListComponent implements OnInit {

  infoDrivers: Driver[] = [];
  sManager: string = "";

  constructor(
    private router: Router,
    private adminService: AdminService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.adminService.listAllDrivers().subscribe(driver => {
      driver.forEach(dr => {
        if (dr.managerUsername == this.storageService.getUser().username) {
          this.infoDrivers.push(dr)
        }
      });
    });
  }

  deleteDriver(infoDriver: Driver): void {
    this.adminService.deleteDriver(infoDriver.username).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/drivers-list/']);
      });
    })
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

  searchDriver() {
    if (this.sManager) {
      this.adminService.listDriversByName(this.sManager).subscribe(drivs => {
        this.infoDrivers = []
        drivs.forEach(dr => {
          if (dr.managerUsername == this.storageService.getUser().username) {
            this.infoDrivers.push(dr)
          }
        });
      })
    } else {
      this.adminService.listAllDrivers().subscribe(driver => {
        this.infoDrivers = []
        driver.forEach(dr => {
          if (dr.managerUsername == this.storageService.getUser().username) {
            this.infoDrivers.push(dr)
          }
        });
      });
    }
  }

}
