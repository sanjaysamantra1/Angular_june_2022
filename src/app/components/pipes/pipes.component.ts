import { Component, OnInit } from '@angular/core';
import { RemainingPipe } from 'src/app/custom-pipes/remaining.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const pipeObj = new RemainingPipe();
    const remainingChar = pipeObj.transform('hello', 100);
    console.log(remainingChar);
  }

  name: string = 'SachIn tenDuLkAr';
  mySal: number = 5000;

  today: Date = new Date();
  user: any = { id: 101, name: 'sanjay', add: 'bangalore' };

  cars: string[] = ['tata', 'honda', 'maruti', 'hundai', 'toyota'];
  msg: string = '';

  arr = [10, 50, 20, 30, 40];
}
