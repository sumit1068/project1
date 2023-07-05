import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  constructor() {}
  ngOnInit() {
    
  } 
a:number=4;
myBlue={color:'blue'};
myRed={color:'red'};
daynumber:number =new Date().getDay();
cities: string[] = ['Mumbai', 'Chennai', 'Delhi', 'Pune', 'Hyderabad'];
names: string[] = ['KOL', 'BLORE', 'DEL', 'MUM', 'HYD'];
employees = [
  { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
  { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
  { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
  { eId: 102, name: 'sita', sal: 9000, gender: 'male' },
];
addEmployee() {
  this.employees = [
      { eId: 101, name: 'joy', sal: 1000, gender: 'male' },
      { eId: 102, name: 'ria', sal: 2000, gender: 'female' },
      { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
      { eId: 104, name: 'sita', sal: 9000, gender: 'male' },
      { eId: 105, name: 'joy', sal: 1000, gender: 'male' },
      { eId: 106, name: 'ria', sal: 2000, gender: 'female' },
      { eId: 107, name: 'ranjan', sal: 7000, gender: 'female' },
      { eId: 108, name: 'sita', sal: 9000, gender: 'male' },
      
  ];
}
trackByEmpId(employee: any) {
  return employee.eId;
}
change:number=70;
getClass(){
  if(this.change>150){
    return 'doubleextrahigh';
  }else 
  if(this.change>100){
    return 'extrahigh';
  }else if(this.change>70){
  return 'high';
}else if(this.change>50){
  return 'medium'
}else{
  return 'low';
}
}
}
