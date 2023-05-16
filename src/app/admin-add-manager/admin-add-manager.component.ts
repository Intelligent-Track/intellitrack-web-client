import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import { DtoManager } from '../dto/dto-manager';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-admin-add-manager',
  templateUrl: './admin-add-manager.component.html',
  styleUrls: ['./admin-add-manager.component.css']
})
export class AdminAddManagerComponent implements OnInit {

  name: string | undefined;
  email: string | undefined;
  password: string | undefined;
  phone: number | undefined;
  document: number | undefined;
  location: string | undefined;

  general: boolean = false;
  validPassword: boolean = false;

  constructor(
    public adminService: AdminService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.name && this.email && this.password && this.phone && this.document && this.location) {
      if (this.password.length < 10) {
        this.validPassword = true;
      } else {
        this.adminService.createManager(new DtoManager(this.name, this.password, this.email, this.document, this.phone, "Manager", this.location, this.general, this.storageService.getUser().username)).subscribe(() => {
          this.router.navigate(['manager-list'])
        })
      }
    }
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

}
