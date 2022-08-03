import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, from, interval, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo1',
  templateUrl: './observable-demo1.component.html',
  styleUrls: ['./observable-demo1.component.css'],
})
export class ObservableDemo1Component implements OnInit {
  publisher2: any;

  constructor(private httpCLient: HttpClient) {}

  ngOnInit(): void {
    // this.f1();
    this.f2();
    this.f3();
  }
  f1() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((finalData) => console.log(finalData));
  }
  f2() {
    const usersObservable = this.httpCLient.get(
      'https://jsonplaceholder.typicode.com/users'
    );
    usersObservable.subscribe({
      next: (val) => console.log(val),
      error: (err) => console.error(err),
      complete: () => console.info('completed'),
    });
  }

  f3() {
    const publisher1 = new Observable(function (observer) {
      observer.next('AAAAA');
      observer.next('BBBBB');
      observer.next('CCCCC');
      observer.next('DDDDD');
      observer.complete();
    });
    const subscriber1 = publisher1.subscribe({
      next: (val) => console.log(val, ' partial data'),
      error: (err) => console.error(err),
      complete: () => console.info('completed'),
    });

    const cars = ['tata', 'honda', 'maruti'];
    const carsObservable = from(cars);
    carsObservable.subscribe((car) => console.log(car));

    this.publisher2 = interval(1000);
    // this.publisher2.subscribe((val: any) => console.log(val));
    const publisher2_1 = this.publisher2.pipe(take(5));
    publisher2_1.subscribe((val: any) => console.log(val));
  }
}
