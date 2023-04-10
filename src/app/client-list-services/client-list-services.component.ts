import { Component, OnInit } from '@angular/core';
import { Service } from '../model/service';

@Component({
  selector: 'app-client-list-services',
  templateUrl: './client-list-services.component.html',
  styleUrls: ['./client-list-services.component.css']
})
export class ClientListServicesComponent implements OnInit {


  infoservice: Service[] | undefined;
  constructor() { }

  ngOnInit(): void {
  }


  editDriver():void{
    
  }


}
