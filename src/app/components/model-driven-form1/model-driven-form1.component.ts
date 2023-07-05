import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-model-driven-form1',
  templateUrl: './model-driven-form1.component.html',
  styleUrls: ['./model-driven-form1.component.css']
})
export class ModelDrivenForm1Component implements OnInit {
 
  constructor(private formBuilder: FormBuilder){
    
  }
  registerForm:any;
  ngOnInit(): void {
    //this.initializeMyForm();
    this.initializeMyFormUsingFormBuilder();

}
  initializeMyFormUsingFormBuilder() {
    this.registerForm = this.formBuilder.group(
      {
        firstName: new FormControl('Sachin', [
          Validators.required,
          Validators.minLength(5),
        ]),
        lastName: new FormControl('',[Validators.required,]),
        email: new FormControl('Sachin@gmail.com', [
          Validators.required,
          Validators.email,
        ]),
        address: new FormGroup({
          street: new FormControl('',[Validators.required,]),
          city: new FormControl('',[Validators.required,]),
          pin: new FormControl(123456, [
            Validators.required,
            Validators.pattern('[0-9]{6}'),
          ]),
        }),
      },
      { updateOn: 'submit' }
    );
  }
  initializeMyForm() {
    this.registerForm = new FormGroup({
      firstName: new FormControl('Sachin', [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastName: new FormControl('',[Validators.required,]),
      email: new FormControl('Sachin@gmail.com', [
        Validators.required,
        Validators.email,
      ]),
      address: new FormGroup({
        street: new FormControl('East Station Road Agarpara',[Validators.required,]),
        city: new FormControl('Kol',[Validators.required]),
        pin: new FormControl(123456, [
          Validators.required,
          Validators.pattern('[0-9]{6}'),
        ]),
      }),
    });
  }
submitMyForm(form:any){
  console.log(form);
}
}
