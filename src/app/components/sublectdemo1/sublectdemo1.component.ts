import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-sublectdemo1',
  templateUrl: './sublectdemo1.component.html',
  styleUrls: ['./sublectdemo1.component.css']
})
export class Sublectdemo1Component implements OnInit{
  constructor(){}
  ngOnInit(): void {
   //this.subjectDemo();
 this.behaviourSubject();
 //this.replySubjectDemo();
  }
  replySubjectDemo() {
    let car_publisher = new ReplaySubject();
    car_publisher.next('Tata');
    let subscriber1 = car_publisher.subscribe((car) => {
      console.log('Subscriber-1', car);
    });
    car_publisher.next('Honda');
    let subscriber2 = car_publisher.subscribe((car) => {
      console.log('Subscriber-2', car);
    });
    car_publisher.next('Maruti');
    car_publisher.next('Toyota');
  }
  behaviourSubject() {
    let car_publisher=new BehaviorSubject('Initial Car');
    car_publisher.next('tata');
    let car_subscriber=car_publisher.subscribe(car=>{console.log('subscriber-1',car)});
    car_publisher.next('Honda');
    let car_subscriber2=car_publisher.subscribe(car=>{console.log('subscriber-2',car)});
    car_publisher.next('Toyota');
 
  }
  subjectDemo() {
   let car_publisher=new Subject();
   car_publisher.next('tata');
   let car_subscriber=car_publisher.subscribe(car=>{console.log('subscriber-1',car)});
   car_publisher.next('Honda');
   let car_subscriber2=car_publisher.subscribe(car=>{console.log('subscriber-2',car)});
   car_publisher.next('Toyota');
  }

}
