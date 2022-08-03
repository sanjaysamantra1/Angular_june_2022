import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-myproducts',
  templateUrl: './myproducts.component.html',
  styleUrls: ['./myproducts.component.css'],
})
export class MyproductsComponent implements OnInit {
  myProducts: any = [];

  // constructor(private httpClient: HttpClient) {}
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    // this.httpClient
    //   .get('https://dummyjson.com/products')
    //   .subscribe((response: any) => {
    //     this.myProducts = response.products;
    //   });
    this.activatedRoute.data.subscribe((response: any) => {
      this.myProducts = response.products.products; // to be shown in UI
    });
  }
}
