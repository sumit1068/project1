import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
apiUrl:string='http://localhost:3000/employees';
  constructor(private httpObj:HttpClient) { 

  }
     /*getAllEmployees(): Observable<Employee[]> {
    return this.httpObj.get<Employee[]>(this.apiUrl);
  } */
  getAllEmployees(): Observable<Employee[]> {
    return this.httpObj.get<Employee[]>(this.apiUrl).pipe(
      map((response: Employee[]) => {
        return response.map((emp: Employee) => {
          return new Employee(emp.id, emp.first_name, emp.last_name, emp.email);
        });
      })
    );
  }

  deleteEmployees(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`; // Replace with your API endpoint
    return this.httpObj.delete(url);
  }
  addaEmployee(empObj:any){
    return this.httpObj.post(this.apiUrl,empObj);
  }
}
