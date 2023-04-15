import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skip } from 'rxjs';
import { DtoOperator } from '../dto/dto-operator';
import { Operator } from '../model/operator';
import { OperatorService } from '../_services/operator.service';
import { ManagerService } from '../_services/manager.service';
import { AdminService } from '../_services/admin.service';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.css']
})
export class OperatorListComponent implements OnInit {

  operators: Operator[] | undefined;
  infoOperators: Operator[] | undefined;
  operatorSearch: string | undefined;

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminService.listAllOperators().subscribe(listInfo => {
      this.infoOperators = listInfo
    });
    
  }

  deleteOperator(operator: Operator){
    this.adminService.deleteOperator(operator.username).subscribe(() => {
      this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
        this.router.navigate(['/operator-list'])
      })
    });
  }

  onSubmit(){

  }

  onAddSubmit(){
    this.router.navigate(['operator-create']);
  }

}
