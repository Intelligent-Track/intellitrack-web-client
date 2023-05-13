import { Component, OnInit } from '@angular/core';
import { Register } from '../model/register';
import { StorageService } from '../_services/storage.service';
import { RegisterService } from '../_services/register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css']
})
export class RegistrationRequestsComponent implements OnInit {

  infoRegisters: Register[] = [];
  clients: any[] = [];
  errorMessage = '';
  isSuccessful = false;
  isFailed = false;
  successMessage = "";

  constructor(
    private registerService: RegisterService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router,
    private storageService: StorageService,
  ) { }

  ngOnInit(): void {
    this.authService.GetPendingAprov().subscribe((data: any[]) => {
      this.clients = data;
    })

  }

  acceptRequest(username: string) {
    this.authService.ApproveAnswer(true, username).subscribe(
      (data) => { // handle positive response
        console.log(data);
        this.successMessage = "Usuario validado";
        this.isSuccessful = true;

      },
      (error) => { // handle negative response
        console.log(error);
        this.errorMessage = error.error;
        this.isFailed = true;
      }
    );
  }

  declineRequest(username: string) {
    this.authService.ApproveAnswer(false, username).subscribe(
      (data) => { // handle positive response
        console.log(data);
        this.successMessage = "Usuario no validado";
        this.isSuccessful = true;
      },
      (error) => { // handle negative response
        console.log(error);
        this.errorMessage = error.error;
        this.isFailed = true;
      }
    );
  }


  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }


}
