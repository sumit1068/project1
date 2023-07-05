import { Component } from '@angular/core';

@Component({
  selector: 'app-tektutorialshub-template-driven-form1',
  templateUrl: './tektutorialshub-template-driven-form1.component.html',
  styleUrls: ['./tektutorialshub-template-driven-form1.component.css']
})
export class TektutorialshubTemplateDrivenForm1Component {

  title = 'Template driven forms';
 
  countryList:country[] = [
    new country("1", "India","kolkata","AJC Bose Road",700109),
    new country('2', 'USA',"kolkata","AJC Bose Road",700109),
    new country('3', 'England',"kolkata","AJC Bose Road",700109)
  ];

  onSubmit(contactForm:any) {
    console.log(contactForm.value);
  }
}


export class country {
  id:string;
  name:string;
  city!: string;
  street!: string;
  pincode!: number;
  constructor(id:string, name:string, city: string,street:string,pincode:number) {
    this.id=id;
    this.name=name;
    this.city=city;
    this.street=street;
    this.pincode=pincode;
    
  }
  
}

