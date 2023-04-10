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
    enterprisename:"",
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
  isValid = true;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const { username, email, password , enterprisename, desciption} = this.form;

    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
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
    }
    if (this.form.password.length < 6) {
      this.isValid = false;
      this.form.passwordisValid = true;
    }
    if (this.form.password !== this.form.password1) {
      this.isValid = false;
      this.form.passwordMismatch = true;
    } else {
      this.form.passwordMismatch = true;
    }
    if (this.form.phonenumber.length < 3 || this.form.phonenumber.length > 20) {
      this.isValid = false;
      this.form.phonenumberisValid= true;
    }
    if (this.form.cedula.length < 3 || this.form.cedula.length > 20) {
      this.isValid = false;
      this.form.cedulaisValid= true;
    }
    if (!this.form.email.includes('@')) {
      this.isValid = false;
      this.form.emailisValid= true;
    }
    if (this.form.enterprisename.length < 3 || this.form.enterprisename.length > 20) {
      this.isValid = false;
      this.form.enterprisenameisValid= true;
    }
    if (this.form.nit.length < 3 || this.form.nit.length > 20) {
      this.isValid = false;
      this.form.nitisValid= true;
    }
    if (this.form.position.length < 3 || this.form.position.length > 20) {
      this.isValid = false;
      this.form.positionisValid= true;
    }

    if (this.isValid) {
      // Realizar el registro
      alert('Registro exitoso');
    }
  }
}