import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-from1',
  templateUrl: './template-driven-from1.component.html',
  styleUrls: ['./template-driven-from1.component.css']
})
export class TemplateDrivenFrom1Component {

  logForm(myForm:any){
    console.log(myForm);
  }
  
  resetForm(myForm :NgForm) {
    console.log('Do Something...');
    myForm.resetForm();
  }
}
