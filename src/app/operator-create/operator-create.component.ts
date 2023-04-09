import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operator } from '../model/operator';
import { OperatorService } from '../_services/operator.service';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-operator-create',
  templateUrl: './operator-create.component.html',
  styleUrls: ['./operator-create.component.css']
})
export class OperatorCreateComponent implements OnInit {

  nameOpt: string = "";
  idOpt: number | undefined;
  locationOpt: string = ""; 
  phoneOpt: number | undefined;
  emailOpt: string = "";
  documentOpt: string = "";

  constructor(
    private adminService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(){
    if(this.nameOpt && this.idOpt && this.emailOpt ){
      this.adminService.createOperator(new Operator(this.idOpt!, this.nameOpt, this.emailOpt, this.idOpt, this.phoneOpt!, "Operator",this.locationOpt, "")).subscribe(() => {
        this.router.navigate(['operator-list'])
      }
      );
    }
  }

}
