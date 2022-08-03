import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  flag: boolean = false;
  n: number = 5;
  dayNumber = new Date().getDay();
  cars: string[] = ['tata', 'honda', 'maruti', 'hundai'];
  employees = [
    { eId: 101, name: 'sanjay', sal: 5000 },
    { eId: 104, name: 'deepak', sal: 8000 },
    { eId: 103, name: 'ranjan', sal: 7000 },
    { eId: 102, name: 'manoj', sal: 9000 },
  ];
  getNewEmps() {
    this.employees = [
      { eId: 101, name: 'sanjay', sal: 5000 },
      { eId: 104, name: 'deepak', sal: 8000 },
      { eId: 103, name: 'ranjan', sal: 7000 },
      { eId: 102, name: 'manoj', sal: 9000 },
      { eId: 105, name: 'rekha', sal: 2500 },
    ];
  }
  f1(employee: any) {
    return employee.eId;
  }
}
