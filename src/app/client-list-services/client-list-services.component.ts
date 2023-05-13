import { Component, OnInit } from '@angular/core';
import { Service } from '../model/service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list-services',
  templateUrl: './client-list-services.component.html',
  styleUrls: ['./client-list-services.component.css']
})
export class ClientListServicesComponent implements OnInit {


  infoservice: Service[] | undefined;
  constructor(
    public storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  editDriver():void{
    
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }


}
