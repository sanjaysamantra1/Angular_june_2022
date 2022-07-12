import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css'],
})
export class Form2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  get firstname() {
    return this.registerForm.get('firstname');
 } 

  registerForm = new FormGroup({
    firstname: new FormControl('sachin', [
      Validators.required,
      Validators.minLength(5),
    ]),
    lastname: new FormControl('tendulkar', [Validators.required]),
    email: new FormControl('tendulkar@gmail.com'),
    address: new FormGroup({
      street: new FormControl('MG Road'),
      city: new FormControl('bangalore'),
      pin: new FormControl('123456'),
    }),
  });
}
