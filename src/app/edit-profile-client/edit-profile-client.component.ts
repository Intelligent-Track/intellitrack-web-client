import { Component, OnInit } from '@angular/core';
import { ClientService } from '../_services/client.service';
import { StorageService } from '../_services/storage.service';
import { Client } from '../model/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile-client',
  templateUrl: './edit-profile-client.component.html',
  styleUrls: ['./edit-profile-client.component.css']
})
export class EditProfileClientComponent implements OnInit {

  nameClt: string = "";
  emailClt: string = "";
  documentClt: number | undefined;
  phoneClt: number | undefined;
  dirClt: string = "";
  nitClt: string = "";
  socialClt: string = "";
  visible: boolean = false;

  client: Client | undefined;
  
  passwordOld: string = "";
  passwordNew: string = "";

  constructor(
    private router: Router,
    public clientService: ClientService,
    public storageService: StorageService
  ) { }

  ngOnInit(): void {
    console.log(this.storageService.getUser().username)
    this.clientService.searchClientById(this.storageService.getUser().username).subscribe(clt =>{
      this.client = clt
      this.nameClt = clt.name
      this.emailClt = clt.username
      this.documentClt = clt.document
      this.phoneClt = clt.phone
      this.dirClt = clt.location
      this.nitClt = clt.nit
      this.socialClt = clt.companyName
    });
  }

  onSubmit(){
    if(this.client){
      let cliente: Client = new Client (this.client.id, this.nameClt, this.emailClt, this.documentClt!, this.phoneClt!, "Cliente ADM", this.dirClt, true, "gabss@gmail.com", this.socialClt, this.nitClt);
      this.clientService.updateClient(cliente).subscribe(() => {
        this.visible = true
      });
    }
  }

  onPasswordSubmit(){
    this.storageService.getUser().id;
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

}
