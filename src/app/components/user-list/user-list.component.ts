import { Component } from '@angular/core';
import * as data from './product.json';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  myProducts = (data as any).default;
  p:number=0;
  searchText:string='';
  flag:boolean=false;
f1(){}
ascending(){
  this.myProducts.sort((p1:any,p2:any)=>p1.price-p2.price);
}
descending(){
  this.myProducts.sort((p1:any,p2:any)=>p2.price-p1.price);
}
test(){
  Swal.fire('Good job SONU!', 'You clicked the button!', 'success');
}

}
