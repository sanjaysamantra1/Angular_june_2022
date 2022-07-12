import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {
    console.log(activatedRoute);
  }

  sub: any;
  id: any;
  myObj: any;
  prod: any;

  ngOnInit() {
    // read path param
    this.activatedRoute.params.subscribe((params) => {
      this.id = +params['id'];

      this.httpClient
        .get(`https://dummyjson.com/products/${this.id}`)
        .subscribe((response) => {
          this.prod = response;
        });
    });

    // Read Query param
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.myObj = { ...params };
    });
  }
}
