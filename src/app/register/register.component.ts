import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';
import { RegisterService } from '../_services/register.service';
import { Register } from '../model/register';
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
    password1: "",
    phonenumber: "",
    nit: "",
    nit2: "",
    position: "",
    representative: "",
    empresa: "",

    //validaciones de los campos
    passwordMismatch: false,
    passwordisValid: false,
    usernameisValid: false,
    cedulaisValid: false,
    emailisValid: false,
    enterprisenameisValid: false,
    phonenumberisValid: false,
    nitisValid: false,
    nit2isValid: false,
    positionisValid: false,
    representativeisValid: false,
  };
  loading = false;
  isValid = true;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  showPassword = false;


  constructor(private authService: AuthService, private router: Router, private registerService: RegisterService) { }

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

  onNitInput() {
    if (this.form.nit.toString().length === 9) {
      const nit2Input = document.getElementsByName('nit2')[0] as HTMLInputElement;
      nit2Input.focus();
    }
  }


  register() {
    this.isValid = true;
    // Validar los campos
    if (this.form.username.toString().length < 3 || this.form.username.toString().length > 20) {
      this.isValid = false;
      this.form.usernameisValid = true;
      // Mostrar un mensaje de error
    } else {
      this.form.usernameisValid = false;
    }
    if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{10,}/.test(this.form.password)) {
      this.isValid = false;
      this.form.passwordisValid = true;
    } else {
      this.form.passwordisValid = false;
    }
    if (this.form.phonenumber.toString().length != 10) {
      this.isValid = false;
      this.form.phonenumberisValid = true;
    } else {
      this.form.phonenumberisValid = false;
    }
    if (this.form.cedula.toString().length < 10) {
      this.isValid = false;
      this.form.cedulaisValid = true;
    } else {
      this.form.cedulaisValid = false;
    }
    if (!this.form.email.includes('@')) {
      this.isValid = false;
      this.form.emailisValid = true;
    } else {
      this.form.emailisValid = false;
    }
    if (this.form.empresa.toString().length < 3 || this.form.empresa.toString().length > 20) {
      this.isValid = false;
      this.form.enterprisenameisValid = true;
    } else {
      this.form.enterprisenameisValid = false;
    }
    if (this.form.nit.toString().length != 9) {
      this.isValid = false;
      this.form.nitisValid = true;
    } else {
      this.form.nitisValid = false;
    }
    if (this.form.nit2.toString().length != 1) {
      this.isValid = false;
      this.form.nit2isValid = true;
    } else {
      this.form.nit2isValid = false;
    }
    if (this.isValid) {
      try {
        this.loading = true; // muestra el spinner
        const { username, email, password, enterprisename, cedula, phonenumber, nit, nit2, position, empresa } = this.form;

        this.registerService.addNewRequest(new Register(username, email, password, cedula, phonenumber, "Cliente ADM", position, true, "", empresa, nit + nit2, false)).subscribe(() => {
          this.authService.register(username, email, phonenumber, nit + nit2, password, empresa, cedula).subscribe({
            next: data => {
              this.isSuccessful = true;
              this.isSignUpFailed = false;
              this.loading = false;
              this.router.navigate(['/confirm-email', email]);
            },
            error: err => {
              this.errorMessage = err.error;
              this.isSignUpFailed = true;
              this.loading = false;
            }
          })
        });
        // función que toma algún tiempo en ejecutarse
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    }
  }
}
