import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductService } from './services/product.service';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [    
    MainComponent, PageNotFoundComponent, ProductComponent, ShoppingComponent, CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [MainComponent]
})
export class AppModule { }
