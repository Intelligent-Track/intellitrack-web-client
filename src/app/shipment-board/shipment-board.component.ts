import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Shipment } from '../model/shipment';

@Component({
  selector: 'app-shipment-board',
  templateUrl: './shipment-board.component.html',
  styleUrls: ['./shipment-board.component.css']
})
export class ShipmentBoardComponent implements OnInit {
  typeReason = [];
  selectedReason: string = "";
  origin: string="";
  destiny: string="";
  date: Date | undefined;
  type: string= "";
  infoProducts: Product[] | undefined;
  numbers = [1, 2, 3, 4];
  infoShipments: Shipment[] |undefined;
  infoShip = false;
  showTruck = true;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  showProgress(){
    console.log("me haz clickeado")
  }

  onCancel(){

  }

  showInfoShipment( ship: number){
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
