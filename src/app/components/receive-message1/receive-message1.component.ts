import { Component, OnInit } from '@angular/core';
import { MessgaeService } from 'src/app/services/messgae.service';

@Component({
  selector: 'app-receive-message1',
  templateUrl: './receive-message1.component.html',
  styleUrls: ['./receive-message1.component.css']
})
export class ReceiveMessage1Component implements OnInit {
  messages: any[] = [];
  isStruckOut: boolean = false;
  constructor(private messageService: MessgaeService) {}

  ngOnInit(): void {
    this.messageService.getMessage().subscribe((message) => {
      if(message){
        this.messages.push(message);
      }else{
        this.messages = [];
      }
    });
  }
  clearMessage(){
    this.messageService.clearMessages();
  
}
toggleStrikeOut() {
  this.isStruckOut = !this.isStruckOut;
}
}
