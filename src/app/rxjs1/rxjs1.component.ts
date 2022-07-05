import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-rxjs1',
  templateUrl: './rxjs1.component.html',
  styleUrls: ['./rxjs1.component.css'],
})
export class Rxjs1Component implements OnInit {
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
