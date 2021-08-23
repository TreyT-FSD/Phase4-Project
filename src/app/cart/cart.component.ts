import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<Product>;
  total: string;

  constructor() {
    let sessionCart = sessionStorage.getItem("cart");
    this.total = "";

    if (sessionCart != null) {
      this.cart = JSON.parse(sessionCart);
      this.total = this.getCartTotal().toFixed(2);
    }
    else {
      this.cart = new Array<Product>();
    }
  }

  ngOnInit(): void {
  }

  removeProduct(index: number): void {
    this.cart.splice(index, 1);
    this.total=this.getCartTotal().toFixed(2);
    sessionStorage.setItem("cart", JSON.stringify(this.cart));
  }

  getCartTotal(): number {
    let total = 0;
    this.cart.forEach(cartItem => {
      total += cartItem.price;
    });
    // total.toFixed(2);
    return total;
  }

}
