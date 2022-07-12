import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css'],
})
export class Form1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  submitMyForm(form: any) {
    console.log(form);
    const user = form.value;
    alert(`Name: ${user.name} Age: ${user.age}`);
  }
  user: any = { name: 'sachin', age: 44 };
}
