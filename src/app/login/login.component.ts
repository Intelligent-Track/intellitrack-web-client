import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { StorageService } from '../_services/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  loading = false;
  isLoggedIn = false;
  isLoginFaile = false;
  errorMessage = '';
  roles: string = '';

  constructor(private authService: AuthService, private storageService: StorageService, private router: Router) { }

  navegarAPantallaDestino(parametro: String): void {
    const navigationExtras = {
      queryParams: {
        miParametro: parametro
      }
    };
    if (navigationExtras.queryParams.miParametro == "ROLE_ADMIN") {
      this.router.navigate(['/operator-list']);
    } else if (navigationExtras.queryParams.miParametro == "ROLE_CLIENTEREPRE" || navigationExtras.queryParams.miParametro == "ROLE_CLIENTEADM") {
      this.router.navigate(['/warehouse-list']);
    } else if (navigationExtras.queryParams.miParametro == "ROLE_CONDUCTOR" || navigationExtras.queryParams.miParametro == "ROLE_CONDUCTORVIS") {
      this.router.navigate(['/driver-board']);
    } else {
      this.router.navigate(['/home'], navigationExtras);
    }
  }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
      this.navegarAPantallaDestino(this.roles)
    }
  }

  navegarAPantallaSingUp() {
    this.router.navigateByUrl('/register');
  }

  navegarAPantallaNuevoManager() {
    this.router.navigateByUrl('/EditProfileOperador');
  }

  onSubmit(): void {
    try {
      this.loading = true; // muestra el spinner
      const { username, password } = this.form;
      this.authService.login(username, password).subscribe({
        next: data => {
          this.storageService.saveUser(data);
          this.isLoggedIn = true;
          this.roles = this.storageService.getUser().roles;
          this.navegarAPantallaDestino(this.roles)
          this.reloadPage();
          this.loading = false;
        },
        error: err => {
          this.errorMessage = err.error;
          this.isLoginFaile = true;
          this.loading = false;
        }
      });
    } catch (error) {
      console.error(error);
      this.isLoginFaile = true;
      this.loading = false;
    }

  }

  reloadPage(): void {
    window.location.reload();
  }

}
