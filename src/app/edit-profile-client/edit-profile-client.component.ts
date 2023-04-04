import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-profile-client',
  templateUrl: './edit-profile-client.component.html',
  styleUrls: ['./edit-profile-client.component.css']
})
export class EditProfileClientComponent implements OnInit {

  nameClt: string = "";
  emailClt: string = "";
  phoneClt: string = "";
  dirClt: string = "";
  nitClt: string = "";
  socialClt: string = "";
  
  passwordOld: string = "";
  passwordNew: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

  onPasswordSubmit(){

  }
}
