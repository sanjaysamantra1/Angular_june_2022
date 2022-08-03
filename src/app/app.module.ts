import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CenterComponent } from './components/center/center.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { LoginModule } from './login/login.module';
import { SearchModule } from './search/search.module';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { ProductsComponent } from './components/products/products.component';
import { NumberonlyDirective } from './custom-directives/numberonly.directive';
import { HighlightDirective } from './custom-directives/highlight.directive';
import { GreetComponent } from './components/greet/greet.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RemainingPipe } from './custom-pipes/remaining.pipe';
import { SortAscPipe } from './custom-pipes/sort-asc.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { MathComponent } from './components/math/math.component';
import { MathService } from './services/math.service';
import { AjaxDemo1Component } from './ajax-demo1/ajax-demo1.component';
import { UserComponent } from './components/user/user.component';
import { MyInterceptor } from './my-interceptor';
import { GlobalHttpInterceptorService } from './global-http-interceptor-service';
import { SucessInterceptor } from './sucess-interceptor';
import { ObservableDemo1Component } from './components/observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from './components/observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from './components/observable-demo3/observable-demo3.component';
import { Formdemo1Component } from './components/formdemo1/formdemo1.component';
import { Formdemo2Component } from './components/formdemo2/formdemo2.component';
import { Formdemo3Component } from './components/formdemo3/formdemo3.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { MyproductsComponent } from './components/myproducts/myproducts.component';

@NgModule({
  // components, pipes , directives
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    NavbarComponent,
    CarouselComponent,
    DatabindingComponent,
    DirectivesComponent,
    ProductsComponent,
    NumberonlyDirective,
    HighlightDirective,
    GreetComponent,
    PipesComponent,
    RemainingPipe,
    SortAscPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    MathComponent,
    AjaxDemo1Component,
    UserComponent,
    ObservableDemo1Component,
    ObservableDemo2Component,
    ObservableDemo3Component,
    Formdemo1Component,
    Formdemo2Component,
    Formdemo3Component,
    HomeComponent,
    AboutusComponent,
    CareersComponent,
    NotfoundComponent,
    UserdetailsComponent,
    ProductdetailsComponent,
    PermanentJobsComponent,
    ContractJobsComponent,
    MyproductsComponent,
  ],
  // modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SearchModule,
    FormsModule,
    NgxPaginationModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  // services/Injectables
  providers: [
    MathService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GlobalHttpInterceptorService,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SucessInterceptor,
      multi: true,
    },
  ],
  // entry component
  bootstrap: [AppComponent],
})
export class AppModule {}
