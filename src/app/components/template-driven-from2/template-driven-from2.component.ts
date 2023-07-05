import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-from2',
  templateUrl: './template-driven-from2.component.html',
  styleUrls: ['./template-driven-from2.component.css']
})
export class TemplateDrivenFrom2Component {
  user={fname:'joy',lname:'das','email':'s@das'};
  logForm(myForm:any){
    console.log(myForm);
  }
  
  resetForm(myForm :NgForm) {
    console.log('Do Something...');
    myForm.resetForm();
  }
}
