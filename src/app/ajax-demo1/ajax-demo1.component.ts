import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ajax-demo1',
  templateUrl: './ajax-demo1.component.html',
  styleUrls: ['./ajax-demo1.component.css'],
})
export class AjaxDemo1Component implements OnInit {
  allUsers: any;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((response) => {
        this.allUsers = response;
        console.log(response);
      });
  }
}
