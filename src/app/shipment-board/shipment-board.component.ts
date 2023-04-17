import { DeliveryService } from './../_services/delivery.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Shipment } from '../model/shipment';
import { PackagesService } from '../_services/packages.service';

@Component({
  selector: 'app-shipment-board',
  templateUrl: './shipment-board.component.html',
  styleUrls: ['./shipment-board.component.css']
})
export class ShipmentBoardComponent implements OnInit {
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
  router: any;
  
  constructor(
    private packageService: PackagesService, private deliveryService: DeliveryService
  ) { }

  ngOnInit(): void {
    this.deliveryService.listAllProgramDeliveries().subscribe(listDeliveries => {
      this.infoShipments = listDeliveries
    });
  }

  showProgress(){
    console.log("me haz clickeado")
  }

  onCancel(ship :Shipment){
    this.deliveryService.deleteDelivery(ship).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/shipment-board'])
      })
    });
  }

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
