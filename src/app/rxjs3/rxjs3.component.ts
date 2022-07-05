import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-rxjs3',
  templateUrl: './rxjs3.component.html',
  styleUrls: ['./rxjs3.component.css'],
})
export class Rxjs3Component implements OnInit {
  messages: any[] = [];
  subscription: Subscription | undefined;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.subscription = this.messageService
      .getMessage()
      .subscribe((message) => {
        if (message) {
          this.messages.push(message);
        } else {
          // clear messages when empty message received
          this.messages = [];
        }
      });
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}
