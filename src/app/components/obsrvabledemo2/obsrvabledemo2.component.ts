import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obsrvabledemo2',
  templateUrl: './obsrvabledemo2.component.html',
  styleUrls: ['./obsrvabledemo2.component.css']
})
export class Obsrvabledemo2Component  implements OnInit{
  constructor(private httpObj:HttpClient){}
  ngOnInit(): void {
    //this.fun1();
    this.fetchStudents();
  }
  fun1(){
    let observable1=new Observable(function (publisher){
      publisher.next('Response 1..');
      publisher.next('Response 1..');
      publisher.next('Response 1..');
      publisher.next('Response 1..');
      publisher.complete();
    });
    observable1.subscribe({
      next:(response)=>{console.log('next called'),console.log(response)},
      error:(error: any)=>{console.log('something went wrong',error)},
      complete:()=>{console.log('complete....')}
    });

  }
  fetchStudents(){
    let studentObservable = new Observable(function(publisher){
      publisher.next(['Sumit','Ajit','ramesh']);
      publisher.next(['Sanjay','Sameer','Deepak']);
      publisher.next(['Manoj','Bikash']);
      publisher.complete();
    });
    let students:any = []
    studentObservable.subscribe({
     next:(response:any)=>{console.log('next called',response),students.push(...response);},
     error:(error: any)=>{console.log('something went wrong',error)},
     complete:()=>{console.log('complete....',students)}
   

    });
  }
  
}
