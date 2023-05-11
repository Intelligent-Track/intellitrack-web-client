import { Component, OnInit } from '@angular/core';
import { City } from '../model/city';
import { Type } from '../model/type';
import { Router } from '@angular/router';
import { Package } from '../model/package';
import { PackagesService } from '../_services/packages.service';
import { StorageService } from '../_services/storage.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {

  infoPackages: Package[] | undefined;
  cities: City[] | undefined;
  types: Type[] | undefined;
  selectedCity: City | undefined;
  selectedType: Type | undefined;
  capacity: number | undefined;

  constructor(
    private packageService: PackagesService,
    private storageService: StorageService,
    public authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.packageService.listAllPackagesByClientId(this.storageService.getUser().id).subscribe(packs => {
      this.infoPackages = packs
    });
  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

}
