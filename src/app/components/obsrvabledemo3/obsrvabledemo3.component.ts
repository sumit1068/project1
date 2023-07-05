import { Component, OnInit } from '@angular/core';
import { from, interval } from 'rxjs';

@Component({
  selector: 'app-obsrvabledemo3',
  templateUrl: './obsrvabledemo3.component.html',
  styleUrls: ['./obsrvabledemo3.component.css']
})
export class Obsrvabledemo3Component implements OnInit {
  myObservable1: any;
  ngOnInit(): void {
//this.arrayToObservable();
this.intervalDemo();  
}
  arrayToObservable() {
    let arr = [10, 20, 30, 40, 50, 60];

    // Convert an array to Observable
    let observable1 = from(arr);
    observable1.subscribe((res) => {
      console.log(res);
    });

  }
 intervalDemo() {
    this.myObservable1 = interval(1000);
    
    let mySubscription1 = this.myObservable1.subscribe((res:any) => {
      console.log(res);
    });
    setTimeout(()=>{
      console.log('un subscribed');
      mySubscription1.unsubscribe()
    },5000);
  }
}
