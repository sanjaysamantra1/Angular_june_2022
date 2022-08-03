import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-databinding',
  // template: '<div>this is databinding component</div>',
  templateUrl: './databinding.component.html',
  // styles: ['input{border-radius:10px}'],
  styleUrls: ['./databinding.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class DatabindingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  name: string = 'sachin tendulkar';
  img_url: string = 'assets/images/sachin.jpg';
  flag: boolean = false;
  num1: number = 0;
  num2: number = 0;

  f1() {
    alert('i am f1');
  }
  toggle() {
    this.flag = !this.flag;
  }

  addition(num1: any, num2: any) {
    alert(+num1 + +num2);
  }
  myType: string = 'password';
  togglePassword() {
    this.flag = !this.flag;
    this.myType = this.flag ? 'text' : 'password';
  }

  n: number = 6;
  isEven = this.n % 2 == 0;
}
