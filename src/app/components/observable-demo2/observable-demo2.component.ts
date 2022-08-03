import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { concatMap, forkJoin, map, mergeMap, range } from 'rxjs';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-observable-demo2',
  templateUrl: './observable-demo2.component.html',
  styleUrls: ['./observable-demo2.component.css'],
})
export class ObservableDemo2Component implements OnInit {
  newMsg: string = '';

  constructor(
    private httpClient: HttpClient,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    // this.fetchDataFromMultipleAPIs();
    this.f1();
    this.mergeAllExample();
  }

  fetchDataFromMultipleAPIs() {
    let request1 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/todos'
    );
    let request2 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    let request3 = this.httpClient.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    forkJoin([request1, request2, request3]).subscribe(([res1, res2, res3]) => {
      console.log(res1, res2, res3);
    });
  }

  f1() {
    const publisher1 = range(1, 5).pipe(map((x) => x * x));
    publisher1.subscribe((val) => console.log(val));
  }

  mergeAllExample() {
    const movieObservable = this.httpClient.get('http://localhost:4000/movies');
    movieObservable
      .pipe(
        mergeMap((movies: any) => {
          let requests = [];
          for (let movie of movies) {
            const url = this.httpClient.get(
              `http://localhost:4001/imdb/${movie.id}`
            );
            requests.push(url);
          }
          return requests; //inner observable
        })
      )
      .subscribe((movieData) => {
        console.log(movieData);
        movieData.subscribe((val) => console.log(val));
      });
  }

  sendMessage() {
    this.messageService.sendMessage(this.newMsg);
  }
  clearMessages() {
    this.messageService.clearMessages();
  }
}
