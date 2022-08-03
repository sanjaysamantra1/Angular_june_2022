import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductsService } from './products.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<any> {
  constructor(private productService: ProductsService) {}

  resolve() {
    return this.productService.getProducts();
  }
}
