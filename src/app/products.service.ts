import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url = 'https://dummyjson.com/products';

  constructor(public http: HttpClient) {}

  getProducts() {
    return this.http.get(this.url);
  }
}
