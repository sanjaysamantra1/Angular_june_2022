import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formdemo2',
  templateUrl: './formdemo2.component.html',
  styleUrls: ['./formdemo2.component.css'],
})
export class Formdemo2Component implements OnInit {
  registerForm: any;

  constructor() {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstname: new FormControl('sachin', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('[a-z]+'),
      ]),
      lastname: new FormControl('tendulkar', {
        validators: [Validators.required, Validators.minLength(3)],
        updateOn: 'submit',
      }),
      email: new FormControl('sachin@gmail.com'),
      address: new FormGroup({
        street: new FormControl('marathalli'),
        city: new FormControl('Bangalore'),
        pin: new FormControl('560037'),
      }),
    });
  }
}
