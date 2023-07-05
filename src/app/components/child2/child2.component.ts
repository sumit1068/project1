import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output,DoCheck } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],

  
})
export class Child2Component {
@Input()
a : any;
@Input()
f2:any;
@Input()
child1:any;
  @Input()
  array: any[] = [];
  @Input()
  dataArray: any[]=[];
@Output() 
dataSaved: EventEmitter<any> = new EventEmitter<any>();

addEmp(eId:any,name:any,sal:any,gender:any){
  if (eId && name && sal && gender) {
      let newEmp = { eId, name, sal, gender };
      this.dataSaved.emit(newEmp);
     
  }  

}
constructor(private cdr:ChangeDetectorRef) {
  console.log('child2 constructor');
}



  ngDoCheck() {
    console.log('Change detected in dataArray:', this.dataArray);
  }


}
