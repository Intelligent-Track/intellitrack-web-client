import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle';
import { VehicleService } from '../_services/vehicle.service';
import { City } from '../model/city';
import { Router } from '@angular/router';
@Component({
  selector: 'app-vehicle-list-crud',
  templateUrl: './vehicle-list-crud.component.html',
  styleUrls: ['./vehicle-list-crud.component.css']
})
export class VehicleListCRUDComponent implements OnInit {

  constructor(private vehicleService: VehicleService, private router: Router) { }

  vehicleArray: Vehicle[] = [];
  cities: City[] | undefined;
  selectedVehicle: Vehicle = new Vehicle(0, "","","","",0,0);
  selectedCity: City | undefined;

  ngOnInit(): void {
    this.vehicleService.listAllVehicles().subscribe(listVehicle => {this.vehicleArray = listVehicle});
  }

  agregar(){
    this.router.navigate(['vehicle-create'])
  }

  deleteVehicle(id: number){
    if(confirm("¿Esta seguro que desea eliminar ese vehiculo?")){
      this.vehicleArray = this.vehicleArray.filter(x => x != this.selectedVehicle);
      this.selectedVehicle = new Vehicle(0, "","","","",0,0);
      console.log(id);
    }

  }

  onSearchSubmit(){
      this.vehicleService.listVehicleByCity(this.selectedCity!.id).subscribe(listVehicle => {
        this.vehicleArray = listVehicle
      })

  }
}
