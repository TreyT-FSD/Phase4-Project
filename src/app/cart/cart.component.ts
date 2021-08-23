import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Array<Product>;
  total: number;

  constructor() {
    let sessionCart = sessionStorage.getItem("cart");
    this.total=0;

    if (sessionCart != null) {
      this.cart = JSON.parse(sessionCart);
      this.cart.forEach(cartItem =>{
        this.total+=cartItem.price;
      })
    }
    else {
      this.cart = new Array<Product>();
    }
  }

  ngOnInit(): void {
    //get the current cart
  }

  removeProduct(id:number): void {
    let tempCart = new Array<Product>();

    this.cart.forEach(element => {
      if(element.id != id){
        tempCart.push(element);
      }
    });
    this.cart=tempCart;
  }

}
