import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: any = {
    username: "",
    cedula: "",
    email: "",
    password: "",
    password1:"",
    enterpriseName:"",
    phonenumber:"",
    nit:"",
    position:"",
    representative:"",

    //validaciones de los campos
    passwordMismatch: false,
    passwordisValid: false,
    usernameisValid: false,
    cedulaisValid: false,
    emailisValid: false,
    enterprisenameisValid: false,
    phonenumberisValid: false,
    nitisValid: false,
    positionisValid: false,
    representativeisValid: false,
  };
  loading = false;
  isValid = true;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
  }

  navegarAPantallaInicial() {
    // Ocultar la barra de navegación
    // ...
    // Navegar a la pantalla limpia
    this.router.navigateByUrl('');
  }

  validatePasswords() {
    if (this.form.password !== this.form.password1) {
      this.form.passwordMismatch = true;
    } else {
      this.form.passwordMismatch = false;
    }
  }


  register() {
    // Validar los campos
    if (this.form.username.length < 3 || this.form.username.length > 20) {
      this.isValid = false;
      this.form.usernameisValid= true;
      // Mostrar un mensaje de error
    }else{
      this.form.usernameisValid= false;
    }
    if (this.form.password.length < 6) {
      this.isValid = false;
      this.form.passwordisValid = true;
    }else{
      this.form.passwordisValid= false;
    }
    if (this.form.password !== this.form.password1) {
      this.isValid = false;
      this.form.passwordMismatch = true;
    }
    if (this.form.phonenumber.length < 3 || this.form.phonenumber.length > 20) {
      this.isValid = false;
      this.form.phonenumberisValid= true;
    }else{
      console.log(this.form.phonenumber);
      this.form.phonenumberisValid= false;
    }
    if (this.form.cedula.length < 3 || this.form.cedula.length > 20) {
      this.isValid = false;
      this.form.cedulaisValid= true;
    }else{
      this.form.cedulaisValid= false;
    }
    if (!this.form.email.includes('@')) {
      this.isValid = false;
      this.form.emailisValid= true;
    }else{
      this.form.emailisValid= false;
    }
    /*if (this.form.enterpriseName.length < 3 || this.form.enterpriseName.length > 20) {
      console.log(this.form.enterpriseName);
      
      this.isValid = false;
      this.form.enterprisenameisValid= true;
    }else{
      this.form.enterprisenameisValid= false;
    }*/
    if (this.form.nit.length < 3 || this.form.nit.length > 20) {
      this.isValid = false;
      this.form.nitisValid= true;
    }else{
      this.form.nitisValid= false;
    }
    /*if (this.form.position.length < 3 || this.form.position.length > 20) {
      this.isValid = false;
      this.form.positionisValid= true;
    }else{
      this.form.positionisValid= false;
    }*/

    if (this.isValid) {
      try {
        this.loading = true; // muestra el spinner
        const { username, email, password , enterprisename,cedula,phonenumber,nit} = this.form;

    this.authService.register(username,email,phonenumber,nit,password,enterprisename,cedula).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.loading = false; 
        this.router.navigate(['/confirm-email', email]);
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        this.loading = false; 
        //this.router.navigate(['/confirm-email', email]);
      }
    });// función que toma algún tiempo en ejecutarse
      } catch (error) {
        console.error(error);
        //this.router.navigate(['/confirm-email', "otroEmail.com"]);
        this.loading = false; 
      }
    }
  }
}