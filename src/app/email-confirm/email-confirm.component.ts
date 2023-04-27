import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email-confirm',
  templateUrl: './email-confirm.component.html',
  styleUrls: ['./email-confirm.component.css']
})
export class EmailConfirmComponent implements OnInit {

  Email : any;
  constructor(private route: ActivatedRoute,private router: Router ) {}
  ngOnInit(): void {
    this.Email = this.route.snapshot.paramMap.get('data') == null? 'Prueba@hotmail.com':this.route.snapshot.paramMap.get('data');
  }

  iniciarSesion(){
    this.router.navigateByUrl('/login');
  }

}
