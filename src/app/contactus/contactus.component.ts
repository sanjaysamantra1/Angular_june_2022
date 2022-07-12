import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent implements OnInit {
  constructor(private routerObj: Router) {}

  ngOnInit(): void {}

  doSomethingAndGoToHome() {
    console.log('I am doing something...');

    this.routerObj.navigate(['/home']);
  }
}
