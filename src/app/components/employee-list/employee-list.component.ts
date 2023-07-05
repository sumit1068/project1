import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements OnInit {
  employees:any = [];
  constructor(private employeeService:EmployeeService){}
  ngOnInit(): void {}
  
  getAllEmp(){
    this.employees= this.employeeService.getAllEmployees();
  } 
  getAllFeMaleEmp(){
    this.employees=this.employeeService.getFeMaleEmployees();
  }
  getAllMaleEmp(){
    this.employees=this.employeeService.getMaleEmployees();
  }
}
