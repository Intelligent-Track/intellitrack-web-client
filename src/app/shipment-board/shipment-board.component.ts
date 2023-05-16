import { DeliveryService } from './../_services/delivery.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Shipment } from '../model/shipment';
import { ClientService } from '../_services/client.service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipment-board',
  templateUrl: './shipment-board.component.html',
  styleUrls: ['./shipment-board.component.css']
})
export class ShipmentBoardComponent implements OnInit {
  origin: string="";
  destiny: string="";
  date: Date | undefined;
  type: string= "";
  infoProducts: Product[] | undefined;
  infoShipments: Shipment[] |undefined;
  infoShipWare: Shipment[] |undefined;
  infoShipWay: Shipment[] |undefined;
  infoShipDel: Shipment[] |undefined;
  infoShip = false;
  showTruck = true;
  showproducts = false
  selectedShip: Shipment | undefined;
  nitClt: string = "";
  cancel = true;
  comment: string ='';
  warehouseState = true;
  modDepartureDate: Date = new Date();
  modArriveDate: Date = new Date();

  constructor(
    private router: Router,
    private deliveryService: DeliveryService,
    public clientService: ClientService,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    try{
      this.clientService.searchClientById(this.storageService.getUser().username).subscribe(clt =>{
        if(clt !=null){
          this.nitClt = clt.nit
          console.log(this.nitClt)

          this.deliveryService.listAllDeliveriesByNitWare(this.nitClt).subscribe(deliveries=>{
            if(deliveries != null){
              this.infoShipWare = deliveries
            }else{
              console.log("Error al cargar los envíos.")
            }
          })

          this.deliveryService.listAllDeliveriesByNitWay(this.nitClt).subscribe(deliveries=>{
            if(deliveries != null){
              this.infoShipWay = deliveries
            }else{
              console.log("Error al cargar los envíos.")
            }
          })

          this.deliveryService.listAllDeliveriesByNitDel(this.nitClt).subscribe(deliveries=>{
            if(deliveries != null){
              this.infoShipDel = deliveries
            }else{
              console.log("Error al cargar los envíos.")
            }
          })

        }else{
          console.log("error")
        }
      });
    }catch{
      console.log("No hay deliveries en esta empresa.")
    }

  }

  //enviar info extra
  onSubmit(shipEdits : Shipment){
    if (shipEdits.status == 'IN_WAREHOUSE'){
      shipEdits.comments.concat(this.comment)
      shipEdits.departureDate = this.modDepartureDate;
      shipEdits.arriveDate = this.modArriveDate;
      this.deliveryService.updateDelivery(shipEdits)
    }

  }



  //
  onCancel(ship :Shipment){
    console.log(ship.id)
    this.deliveryService.deleteDelivery(ship.id).subscribe(() => {
      this.refreshPage()
    });
  }

  refreshPage() {
    // Recargue la ruta actual para actualizar el componente y la pantalla
    window.location.reload();
  }

  showInfoShipment( ship: Shipment, otp: string){
    this.selectedShip = ship;
    this.infoShip = true
    this.showTruck = false
    if(otp == 'n'){
      this.cancel = false
    }else{
      this.cancel = true
    }
  }

  showing(){
    if (this.infoShip == true && this.showTruck == false && this.cancel == false){
      this.infoShip = false
      this.showTruck = true
      this.cancel = true
    }
  }



  showinig(){
    if (this.infoShip == true && this.showTruck == false ){
      this.infoShip = false
      this.showTruck = true
      this.cancel = false
    }
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

}
