import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Child2Component } from '../child2/child2.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent {
  x: number;

  @ViewChild('myInputBox') myBox: any;
  @ViewChild(Child2Component) child2Obj: any;

  constructor(private http: HttpClient) {
    this.x = 10;
    console.log('Parent constructor');
    // this.inputBox.nativeElement.focus(); // DOM IS not yet ready
  }
  ngOnInit() {
    console.log('Parent ngOnInit');
  }
  ngOnChanges() {
    console.log('Parent ngOnChanges');
  }
  ngDoCheck() {
    console.log('Parent ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked');
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.myBox);
    this.myBox.nativeElement.focus();

    console.log(this.child2Obj);
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }

  a = 10;
  user = {
    id: 1,
    name: 'sanjay',
    username: 'sanjay',
    email: 'Sanjay@gmail.com',
  };

  product: any;
  getDataFromChild(data: any) {
    this.product = data;
  }
}
