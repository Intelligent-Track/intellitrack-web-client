import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../_services/driver.service';
import { Driver } from '../model/driver';

@Component({
  selector: 'app-edit-profile-driver',
  templateUrl: './edit-profile-driver.component.html',
  styleUrls: ['./edit-profile-driver.component.css']
})
export class EditProfileDriverComponent implements OnInit {

  constructor(private router: Router, private driverService: DriverService) { }

  mailDri: string = ""
  numberDri: number = 0
  locationDri: number = 0


  ngOnInit(): void {
  }

  onSubmit(){
    if(this.mailDri! ){
      this.driverService.editProfile(new Driver(0,"","",0,this.numberDri,"","",false,"", "", "", "")).subscribe(() => {
        this.router.navigate(['home'])
      }
      );
    }else if (this.numberDri!){
      //public id: number, public name: string, public username: string, public document: number,2 public phone: number, public job: string, public location: string, public directo: Boolean, public managerUsername: string, public placaVehiculo: string, public licencia: string, public revisionAutoMec: string
      this.driverService.editProfile(new Driver(0,"","",0,this.numberDri,"","",false,"", "", "", "")).subscribe(() => {
        this.router.navigate(['home'])
      }
      );
    }
  }

}
