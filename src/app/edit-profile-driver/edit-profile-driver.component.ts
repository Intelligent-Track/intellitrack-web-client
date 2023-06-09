import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../_services/driver.service';
import { Driver } from '../model/driver';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-edit-profile-driver',
  templateUrl: './edit-profile-driver.component.html',
  styleUrls: ['./edit-profile-driver.component.css']
})
export class EditProfileDriverComponent implements OnInit {

  nameDri: string = "";
  emailDri: string = "";
  documentDri: number | undefined;
  phoneDri: number | undefined;
  locDri: string = "";
  license: string = "";
  plate: string = "";
  revisionAut: string = "";
  visible: boolean = false;
  
  passwordOld: string = "";
  passwordNew: string = "";

  constructor(
    private router: Router,
    public driverService: DriverService,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    console.log(this.storageService.getUser().id)
    this.driverService.searchClientById(this.storageService.getUser().id).subscribe(dri =>{
      this.nameDri = dri.name
      this.emailDri = dri.username
      this.documentDri = dri.document
      this.phoneDri = dri.phone
      this.locDri = dri.location
      this.plate = dri.vehiclePlate
      this.license = ""
      this.revisionAut = ""
    });
  }

  onSubmit(){
    let driver: Driver = new Driver (this.storageService.getUser().id, this.nameDri, this.emailDri, this.documentDri!, this.phoneDri!, "Conductor", this.locDri, true, "gabss@gmail.com", this.plate, new FormData, new FormData);
    
    this.driverService.updateDriver(driver).subscribe(() => {
      this.visible = true
    });
  }

  onPasswordSubmit(){
    this.storageService.getUser().id;
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

}
