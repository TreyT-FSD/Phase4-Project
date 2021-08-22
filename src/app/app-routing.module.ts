import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductComponent } from './product/product.component';
import { AuthGaurd } from './services/auth-gaurd.service';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  
  { path: 'shopping', component: ShoppingComponent},
  { path: 'cart', component: CartComponent},
  { path: 'admin', component: AdminComponent, canActivate:[AuthGaurd]},
  { path: 'admin-login', component: AdminLoginComponent},
  { path: 'admin/product-add', component: ProductAddComponent, canActivate:[AuthGaurd]},
  { path: '', redirectTo: '/shopping', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
