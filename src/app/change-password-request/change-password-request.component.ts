import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password-request',
  templateUrl: './change-password-request.component.html',
  styleUrls: ['./change-password-request.component.css']
})
export class ChangePasswordRequestComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  constructor() { }

  ngOnInit(): void {
  }

  changePassword(){

  }

}
