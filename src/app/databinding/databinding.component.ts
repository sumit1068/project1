import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styles:['div{color:blue}']
  //styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = 'Sumit';
  img_url: string ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpBjDTneFYcSKUgs7CmIIOXAiJRzCfuPbvRC0xa38XJWMrr52Cm18Q3ifWVS7YJrsLPM8&usqp=CAU';
  flag: boolean = false;
  a: number = 100;
  b: number = 200;

  f1() {
    alert('This is f1 function...');
  }
  add(){
    var c=this.a+this.b;
    alert('Result='+c);
  }
  addMore(a: any,b: any) {
    alert(`Sum of ${this.a} and ${this.b} is ${this.a + this.b}`);
    alert(`Sum of ${a} and ${b} is ${a + b}`);
  }
   toGgle(){
    
   }
   seletedString:string ='';
   msg:string='';
   number1: number = 0;
   number2: number = 0;
    
   addFlag=true;
   subFlag=true;
   mulFlag=true;
   divFlag=true;
   ADD(){
  this.addFlag=false;
  this.subFlag=true;
  this.mulFlag=true;
   this.divFlag=true;
  }
  
   SUB(){
      this.subFlag=false;
      this.addFlag=true;
      this.mulFlag=true;
      this.divFlag=true;
  }
  
   MUL(){
    this.mulFlag=false;
    this.subFlag=true;
    this.addFlag=true;
    this.divFlag=true;
  }

   DIV(){
      this.divFlag=false;
     this.subFlag=true;
      this.addFlag=true;
      this.mulFlag=true;
    
  }
}

