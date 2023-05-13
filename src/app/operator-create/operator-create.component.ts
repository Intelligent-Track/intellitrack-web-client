import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operator } from '../model/operator';
import { OperatorService } from '../_services/operator.service';
import { AdminService } from '../_services/admin.service';
import { DtoOperator } from '../dto/dto-operator';
import { StorageService } from '../_services/storage.service';

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
  passwordOpt: string = "";

  constructor(
    private adminService: AdminService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(){
    if(this.nameOpt && this.idOpt && this.emailOpt && this.phoneOpt && this.passwordOpt && this.locationOpt){
      this.adminService.createOperator(new DtoOperator(this.nameOpt, this.emailOpt, this.passwordOpt, this.idOpt, this.phoneOpt!, "Operator",this.locationOpt, this.storageService.getUser().username)).subscribe(() => {
        this.router.navigate(['operator-list'])
      }
      );
    }else{

    }
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

}
