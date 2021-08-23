import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { Product } from '../models/product';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: Array<Product>;
  cartItemCount: number;
  total: string;
  customer: Customer;

  constructor() {
    this.customer = new Customer();

    let sessionCart = sessionStorage.getItem("cart");
    this.total = "";

    if (sessionCart != null) {
      this.cart = JSON.parse(sessionCart);
      this.total = this.getCartTotal().toFixed(2);
    }
    else {
      this.cart = new Array<Product>();
      this.total = "0.00";
    }
    this.cartItemCount=this.cart.length;
  }

  ngOnInit(): void { }

  getCartTotal(): number {
    let total = 0;
    this.cart.forEach(cartItem => {
      total += cartItem.price;
    });
    // total.toFixed(2);
    return total;
  }

  checkout(): void{
    //console.log(this.customer);
    //clear the cart
    sessionStorage.removeItem("cart");
  }

}
