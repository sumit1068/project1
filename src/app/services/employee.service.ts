import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'male' },
  ];

  getAllEmployees(){
    return this.employees;
  }
  getMaleEmployees(){
    return this.employees.filter(emp=>emp.gender==='male')
  }
  getFeMaleEmployees(){
    return this.employees.filter(emp=>emp.gender==='female')
  }
  addEmployees(emp:any){
    this.employees.push(emp);
  }
}
