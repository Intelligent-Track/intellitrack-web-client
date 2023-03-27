import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-manager-edit-profile',
  templateUrl: './manager-edit-profile.component.html',
  styleUrls: ['./manager-edit-profile.component.css']
})
export class ManagerEditProfileComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.perfilForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telefono: ['', Validators.required],
      direccion: ['', Validators.required]
    });
  }

  get f() { return this.perfilForm.controls; }

  onSubmit() {
    this.submitted = true;

    if (this.perfilForm.invalid) {
      return;
    }

    // Código para actualizar los datos del perfil en la base de datos
  }
}
