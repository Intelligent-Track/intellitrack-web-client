import { Component, OnInit } from '@angular/core';
import { OperatorService } from '../_services/operator.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-operador',
  templateUrl: './edit-profile-operador.component.html',
  styleUrls: ['./edit-profile-operador.component.css']
})
export class EditProfileOperadorComponent implements OnInit {

  constructor(private router: Router,private operatorService: OperatorService) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
