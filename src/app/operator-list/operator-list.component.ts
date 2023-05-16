import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Operator } from '../model/operator';
import { AdminService } from '../_services/admin.service';
import { StorageService } from '../_services/storage.service';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.css']
})
export class OperatorListComponent implements OnInit {

  operators: Operator[] | undefined;
  infoOperators: Operator[] = [];
  operatorSearch: string | undefined;
  filterOperators: Operator[] = [];
  sOperator: string = "";

  constructor(
    private adminService: AdminService,
    private route: ActivatedRoute,
    private storageService: StorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.adminService.listAllOperators().subscribe(listInfo => {
      listInfo.forEach(operator=> {
        if(operator.managerUsername == this.storageService.getUser().username){
          this.infoOperators.push(operator);
        }
      })
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

  logout(): void {
    this.storageService.clean();
    this.router.navigate(['home'])
  }

  searchOperator(){
    if(this.sOperator){
      this.adminService.listOperatorsByName(this.sOperator).subscribe(ops => {
        this.infoOperators = []
        ops.forEach(operator=>{
          if(operator.managerUsername == this.storageService.getUser().username){
            this.infoOperators.push(operator);
          }
        })
      })
    }else{
      this.adminService.listAllOperators().subscribe(listInfo => {
        this.infoOperators = []
        listInfo.forEach(operator=> {
          if(operator.managerUsername == this.storageService.getUser().username){
            this.infoOperators.push(operator);
          }
        })
      }); 
    }
  }

}
