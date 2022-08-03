import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { HomeComponent } from './components/home/home.component';
import { MyproductsComponent } from './components/myproducts/myproducts.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { ProductsComponent } from './components/products/products.component';
import { UserComponent } from './components/user/user.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { HasChangesGuard } from './has-changes.guard';
import { ProductResolverService } from './product-resolver.service';
import { StudentGuard } from './student.guard';
import { TeacherGuard } from './teacher.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'aboutus',
    component: AboutusComponent,
    canDeactivate: [HasChangesGuard],
  },
  {
    path: 'careers',
    component: CareersComponent,
    canActivateChild: [StudentGuard],
    children: [
      { path: 'permanent', component: PermanentJobsComponent },
      { path: 'contract', component: ContractJobsComponent },
    ],
  },
  {
    path: 'products',
    component: ProductsComponent,
    canActivate: [TeacherGuard],
  },
  { path: 'productdetails', component: ProductdetailsComponent },
  { path: 'users', component: UserComponent },
  { path: 'userdetails/:id', component: UserdetailsComponent },
  {
    path: 'myproducts',
    component: MyproductsComponent,
    resolve: { products: ProductResolverService },
  },
  { path: '', component: HomeComponent },
  {
    path: 'customers',
    loadChildren: () =>
      import('./customers/customers.module').then((m) => m.CustomersModule),
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
