import { Component, OnInit } from '@angular/core';
import { Shipment } from '../model/shipment';
import { Product } from '../model/product';
import { DriverService } from '../_services/driver.service';

@Component({
  selector: 'app-driver-board',
  templateUrl: './driver-board.component.html',
  styleUrls: ['./driver-board.component.css']
})
export class DriverBoardComponent implements OnInit {

  typeReason = ["Problemas de intinerario", "Error de especificación del envío", "Otro"];
  selectedReason: string = "";
  origin: string="";
  destiny: string="";
  date: Date | undefined;
  type: string= "";
  infoProducts: Product[] | undefined;
  infoShipments: Shipment[] |undefined;
  infoShip = false;
  showTruck = true;
  showproducts = false
  selectedShip: Shipment | undefined;
  infoDeliveries: Shipment[] |undefined;
  router: any;
  
  constructor(
    private driverService: DriverService
  ) { }

  ngOnInit(): void {
    this.driverService.listAllDeliveries().subscribe(listDeliveries => {
      this.infoDeliveries = listDeliveries
    });

  }

  showProgress(){
    console.log("me haz clickeado")
  }

  /*
  onCancel(ship :Shipment){
    this.driverService.deleteDelivery(ship).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/shipment-board'])
      })
    });
  }*/

  showInfoShipment( ship: Shipment){
    this.selectedShip = ship;
    this.infoShip = true
    this.showTruck = false
  }

  showing(){
    if (this.infoShip == true && this.showTruck == false){
      this.infoShip = false
      this.showTruck = true
    }

  }

}
