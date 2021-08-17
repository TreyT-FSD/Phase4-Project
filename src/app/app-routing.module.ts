import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { ShoppingComponent } from './shopping/shopping.component';

const routes: Routes = [
  
  { path: 'shopping', component: ShoppingComponent},
  { path: 'cart', component: CartComponent},
  { path: '', redirectTo: '/shopping', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
