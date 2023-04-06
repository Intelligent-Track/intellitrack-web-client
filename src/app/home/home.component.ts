import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';
import { AuthService } from '../_services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  content?: string;
  private roles: string[] = [];
  isLoggedIn = false;
  initLogin = false;
  showrout = false;
  showAdminBoard = false;
  showManagerBoard = false;
  showDriverBoard = false;
  showOperarioBoard = false;
  showCustumerBoard = false;
  username?: string;
  activeMenu: string = 'perfil';
  isScrolled = false;

  constructor(private storageService: StorageService, private authService: AuthService, private router: Router, private route: ActivatedRoute) { }


  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled  = false;
    }
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      switch (params['miParametro']) {
        case 'Admin':
          this.showAdminBoard = true;
          break;
        case 'Manager':
          this.showManagerBoard = true;
          break;
        case 'Driver':
          this.showDriverBoard = true;
          break;
        case 'Operario':
          this.showOperarioBoard = true;
          break;
        case 'Custumer':
          this.showCustumerBoard = true;
          break;
        default:
          break;
      }
    });
    this.isLoggedIn = this.storageService.isLoggedIn();
    this.initLogin = false;
    if (this.isLoggedIn) {
      const user = this.storageService.getUser();
      this.roles = user.roles;
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.username = user.username;
    }
  }
  
  navegarAPantallaLogin() {
    // Ocultar la barra de navegación
    // ...
    this.initLogin = true
    // Navegar a la pantalla limpia
    this.router.navigateByUrl('/login');
  }

  navegarAappbarr() {
    // Ocultar la barra de navegación
    // ...
    this.initLogin = false
    // Navegar a la pantalla limpia
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }

  scrollTo(target: string) {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error('El elemento no existe');
    }
     
  }
}
