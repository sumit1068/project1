import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent {

  //user={fname:'joy',lname:'das',email:'s@das'};
  user = {
    fname: 'joy',
    lname:'das',
    email: 's@das',
    gender: '',
    hobbies: {
      reading: false,
      gaming: false,
      sports: false
    },
    country: '',
    message: ''
  };
  logForm(myForm:any){
    console.log(myForm);
  }
  
  resetForm(myForm :NgForm) {
    console.log('Do Something...');
    myForm.resetForm();
  }
}
