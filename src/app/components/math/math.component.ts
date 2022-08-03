import { Component, OnInit } from '@angular/core';
import { MathService } from 'src/app/services/math.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css'],
})
export class MathComponent implements OnInit {
  // Dependency Injection
  constructor(private mathService: MathService) {}
  ngOnInit(): void {}

  calculate(num1: any, num2: any) {
    console.log('Addition Result', this.mathService.add(+num1, +num2));
    console.log('Subtraction Result', this.mathService.sub(num1, num2));
    console.log('Multiplication Result', this.mathService.mul(num1, num2));
    console.log('Division Result', this.mathService.div(num1, num2));
  }
}
