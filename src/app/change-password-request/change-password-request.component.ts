import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password-request',
  templateUrl: './change-password-request.component.html',
  styleUrls: ['./change-password-request.component.css']
})
export class ChangePasswordRequestComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  changePassword(){
    const { username } = this.form;
    this.authService.RequestPasswordChange(username).subscribe({
      next: data => {
        console.log("yup")
      },
      error: err => {
        console.log("EjecutaEL Errro");

      }
    });



  }

}
