import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {
name='sachin abcdefgh';
mySal=5000;
today=new Date();
user={id:1,name:'sumit',sal:5000,company:'tcs'}
arr=[10,20,25,30,35,40]
msg: string='';
employees=['ram','sham','jodu']
employees2 = [
  { id: 1, name: 'John Doe', position: 'Manager' },
  { id: 2, name: 'Jane Smith', position: 'Developer' },
  { id: 3, name: 'Bob Johnson', position: 'Designer' },
  // Add more employee objects as needed
];
searchText = '';


}
