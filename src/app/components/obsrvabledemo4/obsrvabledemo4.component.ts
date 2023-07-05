import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concatMap, forkJoin, map, mergeMap, of, range, tap, zip } from 'rxjs';

@Component({
  selector: 'app-obsrvabledemo4',
  templateUrl: './obsrvabledemo4.component.html',
  styleUrls: ['./obsrvabledemo4.component.css']
})
export class Obsrvabledemo4Component  implements OnInit {
  constructor(private httpClient:HttpClient){}
  ngOnInit(): void {
    //this.zipDemo();
//    this.pipeDemo();
  //this.tapDemo();
//  this.forkJoinDemo();
//this.mergeMapDemo();
this.concatMapDemo();
  }
  zipDemo(){
    let publisher1=of(32,31,34);
    let publisher2=of('joy','sujoy','sanjay');
    let publisher3=of('bang','hyd','chennai');
    let finalPublisher = zip(publisher1, publisher2, publisher3).pipe(
      map(([age, name, add]) => ({ age, name, add }))
    );
    finalPublisher.subscribe((response)=>console.log(response));
  }

  pipeDemo() {
    let publisher = range(1, 10);
    let square = publisher.pipe(map((ele) => ele * ele));
    square.subscribe((response) => console.log(response));
  }
  tapDemo() {
    let publisher = of(10, 20, 30);
     publisher.pipe(
      tap((ele) => {
        console.log(ele + ' is published');
      })
    );
    publisher.subscribe((response) => console.log(response));
  }

  forkJoinDemo() {
    let request1 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    let request2 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    let request3 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    forkJoin([request1, request2, request3]).subscribe({
      next: function (response) {
        console.log(response);
      },
      error: function (error) {
        console.log('something is wrong', error);
      },
    });
  }

  mergeMapDemo() {
    let usersPublisher = of(1, 2, 3, 4);

    usersPublisher
      .pipe(
        mergeMap((user) => {
          const url = `https://jsonplaceholder.typicode.com/users/${user}`;
          return this.httpClient.get(url); //inner observable
        })
      )
      .subscribe((userData) => {
        console.log(userData);
      });
  }
  concatMapDemo() {
    let usersPublisher = of(2,1,4,3);

    usersPublisher
      .pipe(
        concatMap((user) => {
          const url = `https://jsonplaceholder.typicode.com/users/${user}`;
          return this.httpClient.get(url); //inner observable will be resolved in a order
        })
      )
      .subscribe((userData) => {
        console.log(userData);
      });
  }
}
