import { Component, OnInit } from '@angular/core';
import {
  AsyncSubject,
  BehaviorSubject,
  ReplaySubject,
  Subject,
  Subscription,
} from 'rxjs';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-observable-demo3',
  templateUrl: './observable-demo3.component.html',
  styleUrls: ['./observable-demo3.component.css'],
})
export class ObservableDemo3Component implements OnInit {
  allMessages: any[] = [];
  subscriber1: Subscription = new Subscription();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.f1();
    this.getMessagesFromService();
  }
  getMessagesFromService() {
    this.subscriber1 = this.messageService.getMessage().subscribe((msgObj) => {
      if (msgObj) {
        this.allMessages.push(msgObj);
      } else {
        this.allMessages = [];
      }
    });
  }
  f1() {
    const publisher1 = new AsyncSubject();
    publisher1.next('AAAAA');
    publisher1.next('BBBBB');
    const subscriber1 = publisher1.subscribe((val) =>
      console.log('subscriber-1 ', val)
    );
    publisher1.next('CCCCC');
    publisher1.next('DDDDD');
    const subscriber2 = publisher1.subscribe((val) =>
      console.log('subscriber-2 ', val)
    );
    publisher1.next('EEEEE');
    const subscriber3 = publisher1.subscribe((val) =>
      console.log('subscriber-3 ', val)
    );
    publisher1.next('FFFFF');
    publisher1.next('GGGGG');
    publisher1.complete();
  }
  ngOnDestroy() {
    this.subscriber1.unsubscribe();
  }
}
