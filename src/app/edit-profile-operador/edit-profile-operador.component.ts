import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../_services/operator.service';
import { Router } from '@angular/router';
import { Operator } from '../model/operator';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-edit-profile-operador',
  templateUrl: './edit-profile-operador.component.html',
  styleUrls: ['./edit-profile-operador.component.css']
})
export class EditProfileOperadorComponent implements OnInit {


  mailOpt: string =""
  numberOpt: number =0
  constructor(private router: Router,private operatorService: OperatorService, private storageService: StorageService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.mailOpt! ){
      this.operatorService.editProfile(new Operator(0,"","",0,0,"","","")).subscribe(() => {
        this.router.navigate(['home'])
      }
      );
    }else if (this.numberOpt!){
      this.operatorService.editProfile(new Operator(0,"","",0,this.numberOpt,"","","")).subscribe(() => {
        this.router.navigate(['home'])
      }
      );
    }
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }
  
}
