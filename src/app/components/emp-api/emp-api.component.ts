import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmpService } from 'src/app/services/emp.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emp-api',
  templateUrl: './emp-api.component.html',
  styleUrls: ['./emp-api.component.css']
})
export class EmpApiComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private empService:EmpService){

  }
  ngOnInit(): void {
   this.getAllEmployees();
  }
  getAllEmployees(){
      this.empService.getAllEmployees().subscribe((response: Employee[]) => {
      console.log(response)
      this.employees = response;
    });
  }

  deleteEmp(id:any){
    const flag=confirm('Are you sure you want to delete?');
if(flag){
  this.empService.deleteEmployees(id).subscribe(() => {
    // Handle successful deletion
    console.log('Element deleted successfully');
  },
  (error:any) => {
    // Handle error
    console.error('Error occurred while deleting element:', error);
  });
    
 this. getAllEmployees();
}
  }
  addEmp(id:any,first_name:any,last_name:any,email:any)
  {
    const newEmp={id,first_name,last_name,email};
    this.empService.addaEmployee(newEmp).subscribe((response:any)=>{
      Swal.fire('Employee added successfully!!!!');
    });
    this.getAllEmployees();
  }
}
