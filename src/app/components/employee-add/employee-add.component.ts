import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit{
constructor(private employeeService:EmployeeService){

}
  ngOnInit(): void {
   
  }
  addEmp(eId:any,name:any,sal:any,gender:any){
    let emp={eId,name,sal,gender}
    this.employeeService.addEmployees(emp);

  }

}
