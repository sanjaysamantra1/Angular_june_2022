import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-rxjs4',
  templateUrl: './rxjs4.component.html',
  styleUrls: ['./rxjs4.component.css'],
})
export class Rxjs4Component implements OnInit {
  constructor() {}
  ngOnInit(): void {
    this.f1();
  }
  subject1: any;
  f1() {
    this.subject1 = new AsyncSubject<any>();
    this.subject1.next('aaa');
    this.subject1.next('bbb');
    this.subject1.subscribe((data: any) => {
      console.log('subscriber-1 ', data);
    });
    this.subject1.next('ccc');
    this.subject1.subscribe((data: any) => {
      console.log('subscriber-2 ', data);
    });
    this.subject1.next('ddd');
    this.subject1.complete();
  }
}
