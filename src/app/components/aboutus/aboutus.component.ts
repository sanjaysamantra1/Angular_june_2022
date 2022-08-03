import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css'],
})
export class AboutusComponent implements OnInit {
  constructor(private routerObj: Router) {}

  ngOnInit(): void {}

  doSomethingAndGoToHome() {
    console.log('I am doing something.......');
    this.routerObj.navigate(['/home']);
  }
}
