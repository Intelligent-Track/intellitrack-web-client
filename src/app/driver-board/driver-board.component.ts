import { Component, OnInit } from '@angular/core';
import { Shipment } from '../model/shipment';
import { Product } from '../model/product';
import { DriverService } from '../_services/driver.service';
import { DeliveryService } from '../_services/delivery.service';
import { StorageService } from '../_services/storage.service';
import { ClientService } from '../_services/client.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-driver-board',
  templateUrl: './driver-board.component.html',
  styleUrls: ['./driver-board.component.css']
})

export class DriverBoardComponent implements OnInit {

  origin: string = "";
  destiny: string = "";
  date: Date | undefined;
  type: string = "";
  infoProducts: Product[] | undefined;
  infoShipments: Shipment[] | undefined;
  infoShipWare: Shipment[] | undefined;
  infoShipWay: Shipment[] | undefined;
  infoShipDel: Shipment[] | undefined;
  infoShip = false;
  showTruck = true;
  showproducts = false
  selectedShip: Shipment | undefined;
  idDri: number = 0;
  cancel = true;

  constructor(
    private router: Router,
    private deliveryService: DeliveryService,
    public clientService: ClientService,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    try {
      this.clientService.searchClientById(this.storageService.getUser().username).subscribe(dri => {
        if (dri != null) {
          this.idDri = dri.id
          console.log(this.idDri)

          this.deliveryService.listAllDeliveriesByDriWare(this.idDri).subscribe(deliveries => {
            if (deliveries != null) {
              this.infoShipWare = deliveries
            } else {
              console.log("Error al cargar los envíos.")
            }
          })

          this.deliveryService.listAllDeliveriesByDriWay(this.idDri).subscribe(deliveries => {
            if (deliveries != null) {
              this.infoShipWay = deliveries
            } else {
              console.log("Error al cargar los envíos.")
            }
          })

          this.deliveryService.listAllDeliveriesByDriDel(this.idDri).subscribe(deliveries => {
            if (deliveries != null) {
              this.infoShipDel = deliveries
            } else {
              console.log("Error al cargar los envíos.")
            }
          })

        } else {
          console.log("error")
        }
      });
    } catch {
      console.log("No hay deliveries en esta empresa.")
    }

  }


  onCancel(ship: Shipment) {
    console.log(ship)
    this.deliveryService.deleteDelivery(ship.id).subscribe(() => {
      this.refreshPage()
    });
  }

  refreshPage() {
    // Recargue la ruta actual para actualizar el componente y la pantalla
    window.location.reload();
  }

  showInfoShipment(ship: Shipment) {
    this.selectedShip = ship;
    this.infoShip = true
    this.showTruck = false
  }

  showing() {
    if (this.infoShip == true && this.showTruck == false && this.cancel == false) {
      this.infoShip = false
      this.showTruck = true
    }
  }

  showinig() {
    if (this.infoShip == true && this.showTruck == false) {
      this.infoShip = false
      this.showTruck = true
    }
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

}
