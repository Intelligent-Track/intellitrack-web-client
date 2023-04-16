import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../_services/manager.service';

@Component({
  selector: 'app-edit-profile-manager',
  templateUrl: './edit-profile-manager.component.html',
  styleUrls: ['./edit-profile-manager.component.css']
})
export class EditProfileManagerComponent implements OnInit {

  constructor(private router: Router, private managerService: ManagerService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    /*if(this.plateOpt && this.modeloOpt && this.typeOpt && this.volumCapacityOpt && this.weightCapacityOpt){
      this.vehicleService.createVehicle(new Vehicle(0, this.modeloOpt, this.plateOpt, this.typeOpt, "", "", this.volumCapacityOpt,  this.weightCapacityOpt)).subscribe(() => {
        this.router.navigate(['vehicle-list'])
      }
      );
    }else{

    }*/
  }

}
