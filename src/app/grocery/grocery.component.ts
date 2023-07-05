import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grocery',
  templateUrl: './grocery.component.html',
  styleUrls: ['./grocery.component.css']
})
export class GroceryComponent implements OnInit{
  constructor(){
    console.log('GroceryComponent loaded...inside constructor')
  }
  ngOnInit(): void {
console.log('GroceryComponent loaded...')
  }

}
