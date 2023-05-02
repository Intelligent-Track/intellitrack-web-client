import { Component, NgModule, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    // other imports
    FormsModule
  ],
  // other module code
})

export class AppModule { }

@Component({
  selector: 'app-email-confirm',
  templateUrl: './email-confirm.component.html',
  styleUrls: ['./email-confirm.component.css']
})



export class EmailConfirmComponent implements OnInit {

  Email : any;
  errorMessage = '';
  code: string = '';
  successMessage = "";
  form: any = {
  code1: "",
  code2: "",
  code3: "",
  code4: "",
  code5: "",

}
  constructor(private route: ActivatedRoute,private authService: AuthService, private router: Router ) {}

  ngOnInit(): void {
    this.Email = this.route.snapshot.paramMap.get('data') == null? 'Prueba@hotmail.com':this.route.snapshot.paramMap.get('data');
  }

  isAllCodeFilled(): boolean {
    return this.form.code1 && this.form.code2 && this.form.code3 && this.form.code4 && this.form.code5;
  }

  iniciarSesion(){

    this.authService.Verify(this.code).subscribe({
      next: data=>{
       // console.log(this.code);
       console.log(data);
       this.successMessage = 'Cliente verificado con exito';
       this.router.navigateByUrl('/login');

      },
      error: err => {
        this.errorMessage = err.error;
        //this.router.navigate(['/confirm-email', email]);
      }
    });
  // función que toma algún tiempo en ejecutarse
      }


  moveFocus() {


    if (this.form.code1.toString().length === 1) {
      const code1 = document.getElementsByName('code1')[0] as HTMLInputElement;
      this.code = code1.value;
      const code2 = document.getElementsByName('code2')[0] as HTMLInputElement;
      this.code += code2.value;
      code2.focus();
    }
    if (this.form.code2.toString().length === 1) {
      const code3 = document.getElementsByName('code3')[0] as HTMLInputElement;
      this.code += code3.value;
      code3.focus();
    }
    if (this.form.code3.toString().length === 1) {
      const code4 = document.getElementsByName('code4')[0] as HTMLInputElement;
      this.code += code4.value;
      code4.focus();
    }
    if (this.form.code4.toString().length === 1) {
      const code5 = document.getElementsByName('code5')[0] as HTMLInputElement;
      this.code += code5.value;
      code5.focus();
    }

    console.log(this.code)

  }

}

