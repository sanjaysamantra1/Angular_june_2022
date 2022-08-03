import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formdemo1',
  templateUrl: './formdemo1.component.html',
  styleUrls: ['./formdemo1.component.css'],
})
export class Formdemo1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  registerForm: any = {
    firstName: 'aa',
    lastName: 'bbb',
    email: 'ccc',
    address: { street: 'dd', city: 'ee', pin: 'ff' },
  };

  storeFormData(myForm: any) {
    console.log(myForm);
    // this.registerForm = myForm.value;
  }
}
