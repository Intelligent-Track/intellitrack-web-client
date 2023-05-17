import { ManagerService } from './../_services/manager.service';
import { Component, OnInit } from '@angular/core';
import { DriverService } from '../_services/driver.service';
import { Router } from '@angular/router';
import { DtoManager } from '../dto/dto-manager';
import { Driver } from '../model/driver';
import { AdminService } from '../_services/admin.service';
import { Manager } from '../model/manager';
import { DtoDriver } from '../dto/dto-driver';
import { DtoDriverBasic } from '../dto/dto-driver-basic';
import { StorageService } from '../_services/storage.service';

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
  phoneDri: number | undefined;
  emailDri: string = "";
  plateDri: string = "";
  documentDri: number | undefined;
  managerList: Manager[] | undefined;

  driverExt: boolean = false;
  fileToUpload: File | null = null;
  photoToUpload: File | null = null;

  constructor(
    private router: Router,
    private adminService: AdminService,
    private driverService: DriverService,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.adminService.listAllManagers().subscribe(mans => {
      this.managerList = mans
    });
  }

  onSubmit() {
    if (this.nameDri && this.emailDri && this.locationDri && this.phoneDri && this.documentDri && this.plateDri) {
      this.adminService.createDriver(new DtoDriverBasic(this.documentDri, this.nameDri, this.emailDri, "Driver", this.phoneDri, this.locationDri, this.driverExt, this.plateDri, this.storageService.getUser().username)).subscribe(() => {
        if (this.driverExt) {
          this.driverService.findByUsername(this.emailDri).subscribe(driver => {
            if (this.fileToUpload && this.photoToUpload) {
              const formData: FormData = new FormData();
              formData.append('id', "" + driver.id);
              formData.append('licPhoto', this.photoToUpload);
              formData.append('mecPhoto', this.fileToUpload);
              this.adminService.uploadFiles(formData).subscribe(() => {
                this.router.navigate(['drivers-list'])
              })
            }
          });
        } else {
          this.router.navigate(['drivers-list'])
        }
      });

    }
  }

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  onFilePhotoSelected(event: any) {
    this.photoToUpload = event.target.files[0];
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

}
