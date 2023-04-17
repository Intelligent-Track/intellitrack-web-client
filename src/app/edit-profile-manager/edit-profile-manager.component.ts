import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../_services/manager.service';
import { Manager } from '../model/manager';

@Component({
  selector: 'app-edit-profile-manager',
  templateUrl: './edit-profile-manager.component.html',
  styleUrls: ['./edit-profile-manager.component.css']
})
export class EditProfileManagerComponent implements OnInit {

  mailOpt: string =""
  numberOpt: number =0
  constructor(private router: Router, private managerService: ManagerService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.mailOpt! ){
      this.managerService.editProfile(new Manager(0,"","",0,0,"","",false,"")).subscribe(() => {
        this.router.navigate(['home'])
      }
      );
    }else if (this.numberOpt!){
      this.managerService.editProfile(new Manager(0,"","",0,this.numberOpt,"","",false,"")).subscribe(() => {
        this.router.navigate(['home'])
      }
      );
    }
  }

}
