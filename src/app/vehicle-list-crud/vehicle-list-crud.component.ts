import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { VehicleService } from '../_services/vehicle.service';
@Component({
  selector: 'app-vehicle-list-crud',
  templateUrl: './vehicle-list-crud.component.html',
  styleUrls: ['./vehicle-list-crud.component.css']
})
export class VehicleListCRUDComponent implements OnInit {

  constructor(private vehicleService: VehicleService) { }

  vehicleArray: Vehicle[] = [];

  selectedVehicle: Vehicle = new Vehicle(0, "","","","",0,0);

  ngOnInit(): void {
    this.vehicleService.listAllVehicles().subscribe(vehicle => {this.vehicleArray = vehicle});
  }


  editPanther(vehicle:  Vehicle){
    this.selectedVehicle = vehicle;

  }

  agregar(){
    if(this.selectedVehicle.id === 0){
      this.selectedVehicle.id = this.vehicleArray.length + 1
      this.vehicleArray.push(this.selectedVehicle);
    }
    this.selectedVehicle = new Vehicle(0, "","","","",0,0);
  }

  deletePanther(id: number){
    if(confirm("¿Esta seguro que desea eliminar ese traje?")){
      this.vehicleArray = this.vehicleArray.filter(x => x != this.selectedVehicle);
      this.selectedVehicle = new Vehicle(0, "","","","",0,0);
      console.log(id);
    }

  }
}
