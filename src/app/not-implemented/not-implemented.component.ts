import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-not-implemented',
  templateUrl: './not-implemented.component.html',
  styleUrls: ['./not-implemented.component.css']
})
export class NotImplementedComponent {

  constructor(
    private router: Router,
    private storageService: StorageService,
    private _location: Location
  ) { }

  backClicked() {
    this._location.back();
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

}
