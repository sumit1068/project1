import { ChangeDetectionStrategy, Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Child1Component } from '../child1/child1.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush,
})
export class ParentComponent implements OnInit,AfterViewInit  {
  @ViewChild('myInputBox')
  inputBox: ElementRef | undefined;
  @ViewChild(Child1Component)
  child1Component: Child1Component = new Child1Component;


a:number=10;
num = 0;
  myName: string='';
  savedData: any;
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000, gender: 'male' },
    { eId: 104, name: 'geeta', sal: 8000, gender: 'female' },
    { eId: 103, name: 'ranjan', sal: 7000, gender: 'female' },
    { eId: 102, name: 'sita', sal: 9000, gender: 'male' },
  ];
  arr=[10,12,13,14];
 
  f1(msg:string){
  console.log('I am f1 from Parent Component',msg);
}

f2(msg:string){
  console.log('I am f2 from Parent Component',msg);
}
receiveDataFromChild(name: string) {
  this.myName = name;
}


parentArray: any[] = [10, 20, 30,40];
  newElement: string = '';

  addElement() {
    this.parentArray.push(this.newElement);
    this.newElement = ''; // Reset the input field after adding the element
  }

  handleData(data: any) {
    // Save the data received from the child component
    this.savedData = data;
    this.employees.push(this.savedData);
  }

  constructor() {
    console.log("Parent constructor")
  }
  ngAfterViewInit(): void {
    if (this.inputBox) {
      this.inputBox.nativeElement.focus();
      
    }
    
  
      if (this.child1Component) {
        console.log("inside ngAfterViewInit");
        console.log(this.child1Component.name);
        console.log(this.child1Component.employees);
        console.log(this.child1Component.aChild);
      }
    
    
  }
      //console.log(this.inputBox)
      //console.log(this.child1Component);
      ngOnInit() {
    console.log('Parent ngOnInit');
  }
  
  increment() {
    this.num++;
  }
}
