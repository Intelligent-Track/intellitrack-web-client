import { Component, OnInit } from '@angular/core';
import { AdminService } from '../_services/admin.service';
import { DtoManager } from '../dto/dto-manager';
import { Router } from '@angular/router';

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

  constructor(
    public adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.name)
    console.log(this.email)
    console.log(this.password)
    console.log(this.phone)
    console.log(this.document)
    console.log(this.location)
    if(this.name && this.email && this.password && this.phone && this.document && this.location){
      this.adminService.createManager(new DtoManager(this.name, this.password, this.email, this.document, this.phone, "Manager", this.location, this.general, "gabss@gmail.com")).subscribe(() => {
        this.router.navigate(['manager-list'])
      })
    }
  }
}
