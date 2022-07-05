import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { LoginModule } from './login/login.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CenterComponent } from './center/center.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { Demo1Component } from './demo1/demo1.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectivesComponent } from './directives/directives.component';
import { ProductsComponent } from './products/products.component';
import { NumberonlyDirective } from './customdirectives/numberonly.directive';
import { BackButtonDirective } from './customdirectives/back-button.directive';
import { GreetComponent } from './greet/greet.component';
import { PipesComponent } from './pipes/pipes.component';
import { RemainingPipe } from './remaining.pipe';
import { MySort1Pipe } from './my-sort1.pipe';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductcardComponent } from './productcard/productcard.component';
import { Demo2Component } from './demo2/demo2.component';
import { CommentsComponent } from './comments/comments.component';
import { UserlistComponent } from './userlist/userlist.component';
import { EmployeecrudComponent } from './employeecrud/employeecrud.component';
import { MyInterceptor } from './my-interceptor';
import { ObservablesComponent } from './observables/observables.component';
import { Rxjs1Component } from './rxjs1/rxjs1.component';
import { Rxjs2Component } from './rxjs2/rxjs2.component';
import { Rxjs3Component } from './rxjs3/rxjs3.component';
import { Rxjs4Component } from './rxjs4/rxjs4.component';
import { TodoAddComponent } from './todo-add/todo-add.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@NgModule({
  // components, pipes, directives
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CenterComponent,
    NavbarComponent,
    CarouselComponent,
    Demo1Component,
    DatabindingComponent,
    DirectivesComponent,
    ProductsComponent,
    NumberonlyDirective,
    BackButtonDirective,
    GreetComponent,
    PipesComponent,
    RemainingPipe,
    MySort1Pipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    ProductlistComponent,
    ProductcardComponent,
    Demo2Component,
    CommentsComponent,
    UserlistComponent,
    EmployeecrudComponent,
    ObservablesComponent,
    Rxjs1Component,
    Rxjs2Component,
    Rxjs3Component,
    Rxjs4Component,
    TodoAddComponent,
    TodoListComponent,
  ],
  // modules
  imports: [
    BrowserModule,
    LoginModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  // export something to other module
  exports: [],
  // services
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MyInterceptor,
      multi: true,
    },
  ],
  // load - which component to load
  bootstrap: [AppComponent],
})
export class AppModule {}
