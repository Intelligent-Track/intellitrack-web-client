import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Operator } from '../model/operator';
import { OperatorService } from '../_services/operator.service';

@Component({
  selector: 'app-operator-create',
  templateUrl: './operator-create.component.html',
  styleUrls: ['./operator-create.component.css']
})
export class OperatorCreateComponent implements OnInit {

  nameOpt: string = "";
  idOpt: number | undefined;
  locationOpt: string = ""; 
  phoneOpt: number = -1;
  emailOpt: string = "";

  constructor(
    private operatorService: OperatorService,
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  onSubmit(){
    if(this.nameOpt && this.idOpt && this.emailOpt && this.emailOpt){
      this.operatorService.createOperator(new Operator(this.idOpt!, this.nameOpt, this.emailOpt, this.locationOpt)).subscribe(() => {
        this.router.navigate(['operator-list'])
      }
      );
    }
  }

}
