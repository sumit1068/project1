import { Component } from '@angular/core';
import { MessgaeService } from 'src/app/services/messgae.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {
  constructor(private messageService: MessgaeService) {}

  ngOnInit(): void {}

  sendMessage(msg: string) {
    this.messageService.sendMessage(msg);
  }
  clearMessage(){
    this.messageService.clearMessages();
  }
}
