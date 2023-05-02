import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Shipment } from '../model/shipment';
import { Product } from '../model/product';
import { DeliveryService } from './../_services/delivery.service';


@Component({
  selector: 'app-extra-info-shipment',
  templateUrl: './extra-info-shipment.component.html',
  styleUrls: ['./extra-info-shipment.component.css']
})
export class ExtraInfoShipmentComponent {

  shipEdit = new Shipment(0,'','',new Date,new Date,0,0,'','',0,0,'',[]);
  comment: string ='';

  constructor(private deliveryService: DeliveryService, private router: Router ) {}

  ngOnInit(): void {
  }

  onSubmit(){
    this.shipEdit.comments = this.comment
    this.deliveryService.updateDelivery(this.shipEdit)
  }

  onCancel(){
    this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
      this.router.navigate(['/shipment-board'])
    })
  }
}
