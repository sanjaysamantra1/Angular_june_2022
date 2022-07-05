import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-rxjs2',
  templateUrl: './rxjs2.component.html',
  styleUrls: ['./rxjs2.component.css'],
})
export class Rxjs2Component implements OnInit {
  newMsg: any;

  constructor(private messageService: MessageService) {}
  
  ngOnInit() {}

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage(this.newMsg);
  }

  clearMessages(): void {
    // clear messages
    this.messageService.clearMessages();
  }
}
