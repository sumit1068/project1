import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './todo';
@Component({
  selector: 'app-products-api',
  templateUrl: './products-api.component.html',
  styleUrls: ['./products-api.component.css']
})
export class ProductsApiComponent  implements OnInit{
  result: any=[];
  flag: boolean = true;
  constructor(private http:HttpClient){

  }
  employees:any=[];
  employeeId: number=0;
  ngOnInit(): void {
  let url='http://localhost:3000/employees';
  this.http.get(url).subscribe((response:any)=>{
    this.employees=response.employee;
  });

  this.http.get('https://jsonplaceholder.typicode.com/comments')
  .subscribe((response) => {
    console.log(response);
    this.result = response;
  });
  }
  getAllEmp():void{
    let url='http://localhost:3000/employees';
    this.http.get(url).subscribe((response:any)=>{
      this.employees=response.employee;
    });
  }
  getAllTodos(): Observable<Todo[]> {
  return  this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos')
  }
 
    insertData(eId:any,fname:any,lname:any) {
      if (eId && fname  && lname) {
        const newEmployee = {
          id: eId,
          firstName: fname,
          lastName: lname
        };
    
      this.http.patch('http://localhost:3000/employees', this.employees)
        .subscribe(
          response => {
            console.log('Data inserted successfully!', response);
          },
          error => {
            console.error('Error inserting data:', error);
          }
        );
    }


  }

  deleteEmployee() {
    if (!this.employeeId) {
      console.log('Employee ID is required.');
      return;
    }

    this.http.delete<any>(`http://localhost:3000/employees/${this.employeeId}`)
      .subscribe(
        response => {
          console.log('Employee deleted successfully');
        },
        error => {
          console.error('Error deleting employee:', error);
        }
      );
  }
}
