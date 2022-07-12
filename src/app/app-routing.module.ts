import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { MyGuard2Guard } from './my-guard2.guard';
import { MyGuard3Guard } from './my-guard3.guard';
import { MyGuard } from './my.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductResolverService } from './product-resolver.service';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'aboutus',
    component: AboutusComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [MyGuard],
    resolve: { products: ProductResolverService },
  },
  {
    path: 'productdetails/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'productdetails',
    component: ProductDetailsComponent,
  },
  {
    path: '', //empty
    component: HomeComponent,
  },
  {
    path: '**', //Wrong
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
