import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
  inputs:['aChild','f1','childNum'],
  outputs: ['eventObj'],
})
export class Child1Component implements OnInit  {

  
  aChild:any;
  f1:any;
  name:string='Sachin Tendulkar';
   @Input()
  employees: any[] = [];
  childNum:any;
eventObj=new EventEmitter();
sendDataToParent(){
  console.log('this.name is',this.name)
  this.eventObj.emit(this.name);
}

constructor() {
  console.log('child1 constructor');
}
ngOnInit() {
  console.log('child1 ngOnInit');
}
ngOnChanges() {
  console.log('child1 ngOnChanges');
}
ngDoCheck() {
  console.log('child1 ngDoCheck');
}
ngAfterContentInit() {
  console.log('child1 ngAfterContentInit');
}
ngAfterContentChecked() {
  console.log('child1 ngAfterContentChecked')
}
ngAfterViewInit() {
  console.log('child1 ngAfterViewInit');
}
ngAfterViewChecked() {
  console.log('child1 ngAfterViewChecked');
}
ngOnDestroy() {
  console.log('child1 ngOnDestory');
}
}
