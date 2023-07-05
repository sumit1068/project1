import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-obsrvabledemo1',
  templateUrl: './obsrvabledemo1.component.html',
  styleUrls: ['./obsrvabledemo1.component.css']
})
export class Obsrvabledemo1Component implements OnInit {
  constructor(private httpObj:HttpClient){

  }
  ngOnInit(): void {
  //this.fetchUsers();
  //this.fetchComments();
  this.fetchPhotos();
  }
  fetchComments() {
    let commentObservable = this.httpObj.get('https://jsonplaceholder.typicode.com/comments');
    commentObservable.subscribe((response)=>{console.log(response)},
    (error)=>{console.log(error)});
  }
  fetchUsers(){
    let userPromise = fetch('https://jsonplaceholder.typicode.com/users');
    userPromise.then(
      (response)=>{console.log(response.body)},
    (error)=>{console.log(error);});
  }
  fetchPhotos(){
    this.httpObj.get('https://jsonplaceholder.typicode.com/photos').subscribe({
      next:(response)=>{console.log(response)},
      error:(error: any)=>{console.log('something went wrong',error)},
      complete:()=>{console.log('complete....')}
    });
  
  }
    
}

