import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VehicleService } from '../_services/vehicle.service';
import { Vehicle } from '../model/vehicle';

@Component({
  selector: 'app-vehicle-create',
  templateUrl: './vehicle-create.component.html',
  styleUrls: ['./vehicle-create.component.css']
})
export class VehicleCreateComponent implements OnInit {

  placaOpt: string = ""
  modeloOpt: string = ""
  tipoOpt: string = ""
  capacidadVolumenOpt: number | undefined
  capacidadPesoOpt: number | undefined
  constructor(private router: Router,private vehicleService: VehicleService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.placaOpt && this.modeloOpt && this.tipoOpt && this.capacidadVolumenOpt && this.capacidadPesoOpt){
      this.vehicleService.createVehicle(new Vehicle(0, this.modeloOpt, this.placaOpt, this.tipoOpt, "", this.capacidadPesoOpt,  this.capacidadVolumenOpt)).subscribe(() => {
        this.router.navigate(['vehicle-list'])
      }
      );
    }else{

    }
  }
}
