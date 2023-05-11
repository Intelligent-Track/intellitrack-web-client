import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  form: any = {

    password: "",
    password1:"",


    //validaciones de los campos
    passwordMismatch: false,
    passwordisValid: false,

  };
  token: any;
  errorMessage = '';
  showPassword = false;
  isValid = true;

  constructor(private route: ActivatedRoute, private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token');
  }

  validatePasswords() {
    if (this.form.password !== this.form.password1) {
      this.form.passwordMismatch = true;
    } else {
      this.form.passwordMismatch = false;
    }
  }

  Change(){
  if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,}/.test(this.form.password)){
    this.isValid = false;
    this.form.passwordisValid = true;
  }else{
    this.form.passwordisValid= false;
  }
  if (this.isValid) {
    console.log("numero");

      const { password } = this.form;


    this.authService.ResetPasswordChange(password,this.token).subscribe({
      next: data => {
        console.log(this.token)
      },
      error: err => {
        console.log(this.token);

      }
    });


  }
 }
}

