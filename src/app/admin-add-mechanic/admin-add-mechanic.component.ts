import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../_services/manager.service';
import { Operator } from '../model/operator';
import { Manager } from '../model/manager';
import { MechanicService } from '../_services/mechanic.service';
import { Mechanic } from '../model/mechanic';

@Component({
  selector: 'app-admin-add-mechanic',
  templateUrl: './admin-add-mechanic.component.html',
  styleUrls: ['./admin-add-mechanic.component.css']
})
export class AdminAddMechanicComponent implements OnInit {

  selectedManager: string | undefined;
  managerList: Manager[] | undefined;
  nameMech: string = "";
  idMech: number | undefined;
  emailMech: string = "";
  locationMech: string = ""; 
  phoneMech: number | undefined;

  constructor(
    private router: Router,
    private managerService: ManagerService,
    private mechanicService: MechanicService
  ) { }

  ngOnInit(): void {
    this.managerService.listAllManagers().subscribe(mang => {
      this.managerList = mang
    })
  }

  onSubmit() {
    if(this.nameMech && this.idMech && this.emailMech && this.locationMech && this.phoneMech && this.selectedManager) {
      this.mechanicService.createMechanic(new Mechanic(this.nameMech, this.emailMech, this.idMech, this.phoneMech, this.locationMech, this.selectedManager)).subscribe(() =>{
        this.router.navigate(['operator-list'])
      });
    }
  }

}
