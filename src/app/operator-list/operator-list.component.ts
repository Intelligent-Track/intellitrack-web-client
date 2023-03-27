import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { skip } from 'rxjs';
import { DtoOperator } from '../dto/dto-operator';
import { Operator } from '../model/operator';
import { OperatorService } from '../_services/operator.service';

@Component({
  selector: 'app-operator-list',
  templateUrl: './operator-list.component.html',
  styleUrls: ['./operator-list.component.css']
})
export class OperatorListComponent implements OnInit {

  operators: Operator[] | undefined;
  infoOperators: DtoOperator[] | undefined;
  operatorSearch: string | undefined;

  constructor(
    private operatorService: OperatorService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.operatorService.listInfoOperators().subscribe(listInfo => {
      this.infoOperators = listInfo
    });
    
  }

  deleteOperator(operator: DtoOperator){
    this.operatorService.unlinkManagerOperator(operator.id ,operator.managerId).subscribe(() => {
      this.operatorService.deleteOperator(operator.id).subscribe(() => {
        this.router.navigateByUrl('/', { skipLocationChange: true}).then(() => {
          this.router.navigate(['/operator-list'])
        })
      })
    });
    
  }

  onSubmit(){

  }

  onAddSubmit(){
    this.router.navigate(['operator-create']);
  }

}
