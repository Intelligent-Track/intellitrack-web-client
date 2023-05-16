import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../_services/vehicle.service';
import { Vehicle } from '../model/vehicle';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {

  plateOpt: number = 0
  modeloOpt: string = ""
  typeOpt: string = ""
  volumCapacityOpt: number | undefined
  weightCapacityOpt: number | undefined
  constructor(private router: Router,private vehicleService: VehicleService, public storageService: StorageService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.plateOpt && this.modeloOpt && this.typeOpt && this.volumCapacityOpt && this.weightCapacityOpt){
      this.vehicleService.createVehicle(new Vehicle(0, this.modeloOpt, this.plateOpt, this.typeOpt, "", "", this.volumCapacityOpt,  this.weightCapacityOpt)).subscribe(() => {
        this.router.navigate(['vehicle-list'])
      }
      );
    }else{

    }
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }
}
