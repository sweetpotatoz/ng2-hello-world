import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//added
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router'; 
import 'rxjs/Rx';

//components
import { AppComponent } from './app.component';
//import { HelloWorld1Component } from './helloworld/helloworld.component'; 
//added
import { HelloWorld1Component } from './helloworld';
import { PageProductsComponent } from './pageproducts';
import { PageProductDetailComponent } from './page-product-detail';

//routing
import { appRoutes } from './app.routing';

//services
import { ProductService, ProductImplService } from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorld1Component, //add
    PageProductsComponent,
    PageProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: ProductService, useClass: ProductImplService }
    //ProductService //service
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
