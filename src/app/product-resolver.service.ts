import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root',
})
export class ProductResolverService implements Resolve<any> {
  constructor(private productService: ProductService) {}
  resolve(route: ActivatedRouteSnapshot) {
    console.log('Called Get Product in resolver...', route);
    return this.productService.getProducts().pipe(
      catchError((error) => {
        return of('No data');
      })
    );
  }
}
