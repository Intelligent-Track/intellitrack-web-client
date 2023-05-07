import { Component, OnInit } from '@angular/core';
import { DtoManager } from '../dto/dto-manager';
import { ManagerService } from '../_services/manager.service';
import { AdminService } from '../_services/admin.service';
import { Manager } from '../model/manager';
import { Router } from '@angular/router';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-manager-list',
  templateUrl: './manager-list.component.html',
  styleUrls: ['./manager-list.component.css']
})
export class ManagerListComponent implements OnInit {

  infoManagers: Manager[] = [];

  managerSearch: string | undefined;

  constructor(
    private adminService: AdminService,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminService.listAllManagers().subscribe(mans => {
      mans.forEach(manager => {
        if(manager.managerUsername == this.storageService.getUser().username){
          this.infoManagers.push(manager);
        }
      });
    });
  }

  onSubmit() {

  }

  deleteManager(manager: Manager) {
    this.adminService.deleteManager(manager.username).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/manager-list'])
      })
    });
  }

  onAddSubmit() {

  }

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

}
