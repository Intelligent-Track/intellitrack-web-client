import { OperatorService } from './../_services/operator.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../_services/manager.service';
import { Operator } from '../model/operator';
import { Manager } from '../model/manager';

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
    private operatorService: OperatorService
  ) { }

  ngOnInit(): void {
    this.managerService.listAllManagers().subscribe(mang => {
      this.managerList = mang
    })
  }

  onSubmit() {
    if(this.nameMech && this.idMech && this.emailMech && this.locationMech && this.phoneMech && this.selectedManager) {
      this.operatorService.createOperator(new Operator(this.idMech, this.nameMech, this.emailMech, this.locationMech)).subscribe(() =>{
        this.router.navigate(['operator-list'])
      });
    }
  }

}
