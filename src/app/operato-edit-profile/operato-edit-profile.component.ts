import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-operato-edit-profile',
  templateUrl: './operato-edit-profile.component.html',
  styleUrls: ['./operato-edit-profile.component.css']
})
export class OperatoEditProfileComponent implements OnInit {

  profileForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      edad: ['', Validators.required],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(8)]],
      confirmarContrasena: ['', Validators.required],

    });
  }

  onSubmit() {
    // Aquí se enviaría el formulario al servidor
    console.warn(this.profileForm.value);
  }
}
