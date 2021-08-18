import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ProductService } from './services/product.service';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGaurd } from './services/auth-gaurd.service';
import { AdminService } from './services/admin.service';

@NgModule({
  declarations: [    
    MainComponent, PageNotFoundComponent, ProductComponent, ShoppingComponent, CartComponent, AdminComponent, AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService, AuthGaurd, AdminService],
  bootstrap: [MainComponent]
})
export class AppModule { }
