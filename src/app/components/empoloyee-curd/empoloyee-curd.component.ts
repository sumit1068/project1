import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-empoloyee-curd',
  templateUrl: './empoloyee-curd.component.html',
  styleUrls: ['./empoloyee-curd.component.css']
})
export class EmpoloyeeCurdComponent {

  selectedEmployee:any={};
  display:any;
  isShow = true;
  noshow=false;
  viewEmp(emp:any){
    this.selectedEmployee=emp;
  }
  updateEmp(emp:any){
  this.isShow = false;
  this.noshow=true;
  this.selectedEmployee=emp;
  }
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'male' },
  ];

  openModelDialog(){
    this.display='block';
  }
  closeModelDialog(){
    this.display='none';
  }
  addEmp(eId:any,name:any,sal:any,gender:any){
    if (eId && name && sal && gender) {
      // Check if employee with the same eId already exists
      const existingEmployee = this.employees.find(employees => employees.eId === eId);
      
      if (existingEmployee) {
        Swal.fire(name, 'EmployeeId already exists!', 'error');
      } else {
        let newEmp = { eId, name, sal, gender };
        this.employees.push(newEmp);
        Swal.fire(name, 'EmployeeId added!', 'success');
      }
    }  
  
  }

  deleteEmp(ind :any ){
    const isConfirmed=confirm('Are you sure you want to confirm');
    if(isConfirmed)
    this.employees.splice(ind,1);
  }
 

 insertEmployee(){
  let eId =+ ((document.getElementById("eId") as HTMLInputElement).value);
  var name = ((document.getElementById("name") as HTMLInputElement).value);
let  sal =+((document.getElementById("sal") as HTMLInputElement).value);
  var gender = ((document.getElementById("gender") as HTMLInputElement).value);


  if (eId && name && sal && gender) {
    // Check if employee with the same eId already exists
    const existingEmployee = this.employees.find(employees => employees.eId === eId && employees.name=== employees.name && employees.sal===sal && employees.gender===gender);
    
    if (existingEmployee) {
      Swal.fire(name, 'EmployeeId already exists!', 'error');
    } else {
      let newEmp = { eId, name, sal, gender };
      this.employees.push(newEmp);
      Swal.fire(name, 'EmployeeId added!', 'success');
    }
  }
 }
  

  updateEmployee(){
    let eId =+ ((document.getElementById("eId") as HTMLInputElement).value);
    var name = ((document.getElementById("name") as HTMLInputElement).value);
  let  sal =+((document.getElementById("sal") as HTMLInputElement).value);
    var gender = ((document.getElementById("gender") as HTMLInputElement).value);
  
  
    if (eId && name && sal && gender) {
      // Check if employee with the same eId already exists
      const existingEmployee = this.employees.find(employees => employees.eId === eId && employees.name=== employees.name && employees.sal===sal && employees.gender===gender);
      
     
        this.employees.forEach(element => {
          this.employees.splice(element.eId,1);
          let newEmp = { eId, name, sal, gender };
        this.employees.push(newEmp);
        Swal.fire(name, 'EmployeeId added!', 'success');
 
        });
             
    }
    
}
}