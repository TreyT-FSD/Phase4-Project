import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<Product>;

  constructor() {
    let sessionCart = sessionStorage.getItem("cart");

    if (sessionCart != null) {
      this.cart = JSON.parse(sessionCart);
    }
    else {
      this.cart = new Array<Product>();
    }
  }

  ngOnInit(): void {
    //get the current cart
  }

}
