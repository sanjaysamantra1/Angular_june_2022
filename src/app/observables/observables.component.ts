import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  filter,
  forkJoin,
  from,
  interval,
  Observable,
  range,
  map,
  of,
  mergeMap,
  concatMap,
  tap,
  fromEvent,
  debounceTime,
  distinctUntilChanged,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css'],
})
export class ObservablesComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}
  ngOnInit(): void {}

  // producer1 = new Observable(function (observer) {
  //   observer.next('aaaaaa');
  //   observer.next('bbbbbb');
  //   observer.next('cccccc');
  //   observer.complete();
  // });
  // subscriber1 = this.producer1.subscribe({
  //   next: (v) => console.log(v),
  //   error: (e) => console.error(e),
  //   complete: () => console.info('completed'),
  // });

  // producer2 = interval(1000);
  // subscriber2 = this.producer2.subscribe((val) => {
  //   console.log(val);
  // });

  // arr = [10, 20, 30, 40, 50];
  // producer3 = from(this.arr);
  // subscriber3 = this.producer3.subscribe((val) => {
  //   console.log(val);
  // });

  // producer4 = range(30, 20); // start from 30 give next 20 values
  // subscriber4 = this.producer4.subscribe((val) => {
  //   console.log(val);
  // });

  // producer4_1 = this.producer4.pipe(filter((ele) => ele % 2 == 0));
  // subscriber4_1 = this.producer4_1.subscribe((val) => {
  //   console.log(val);
  // });

  // producer5 = new Observable<string>((observer) => {
  //   setInterval(() => {
  //     const currentTime = new Date().toLocaleTimeString();
  //     observer.next(currentTime);
  //   }, 1000);
  // });

  // fetchDataFromMultipleAPIs() {
  //   let request1 = this.httpClient.get(
  //     'https://jsonplaceholder.typicode.com/todos'
  //   );
  //   let request2 = this.httpClient.get(
  //     'https://jsonplaceholder.typicode.com/comments'
  //   );
  //   let request3 = this.httpClient.get(
  //     'https://jsonplaceholder.typicode.com/users'
  //   );

  //   forkJoin([request1, request2, request3]).subscribe(([res1, res2, res3]) => {
  //     console.log(res1, res2, res3);
  //   });
  // }

  // producer6 = range(1, 5);
  // producer6_square = this.producer6.pipe(map((ele) => ele * ele));
  // subscriber6 = this.producer6_square.subscribe((data) => {
  //   console.log(data);
  // });

  // without mergeMap()
  // usersProducer = of(1, 2, 3, 4);
  // usersSubscriber = this.usersProducer.subscribe((user) => {
  //   console.log(user);
  //   const url = `https://jsonplaceholder.typicode.com/users/${user}`;
  //   this.httpClient.get(url).subscribe((userData) => {
  //     console.log(userData);
  //   });
  // });

  //with mergeMap()
  // usersSubscriber2 = this.usersProducer.pipe(
  //     mergeMap((user) => {
  //       const url =`https://jsonplaceholder.typicode.com/users/${user}`;
  //       return this.httpClient.get(url); //inner observable
  //     })
  //   ).subscribe((userData) => {
  //     console.log(userData);
  //   });
}
