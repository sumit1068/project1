import { Component } from '@angular/core';
import { MessgaeService } from 'src/app/services/messgae.service';

@Component({
  selector: 'app-receive-message2',
  templateUrl: './receive-message2.component.html',
  styleUrls: ['./receive-message2.component.css']
})
export class ReceiveMessage2Component {
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
