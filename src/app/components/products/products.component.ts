import { Component, OnInit } from '@angular/core';
import * as data from './products.json';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  p: any;
  myProducts = (data as any).default;

  constructor() {
    console.log(data);
  }
  ngOnInit(): void {}
}
