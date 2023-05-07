import { Component, OnInit } from '@angular/core';
import { Register } from '../model/register';
import { StorageService } from '../_services/storage.service';
import { RegisterService } from '../_services/register.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css']
})
export class RegistrationRequestsComponent implements OnInit {

  infoRegisters: Register[] = [];

  constructor(
    private registerService: RegisterService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.registerService.listAllManagers().subscribe(requests => {
      this.infoRegisters = requests
    })
  }

  acceptRequest(infoRegister: Register){
    infoRegister.accepted = true;
    infoRegister.managerUsername = this.storageService.getUser().username;
    this.registerService.manageRequest(infoRegister).subscribe(()=>{
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['client-requests']);
      });
    })
  }

  declineRequest(infoRegister: Register){
    infoRegister.accepted = false;
    infoRegister.managerUsername = this.storageService.getUser().username;
    this.registerService.manageRequest(infoRegister).subscribe(()=>{
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['client-requests']);
      });
    })
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }


}
