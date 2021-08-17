import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  products: Array<Product>;

  cart: Array<Product>;

  constructor(private _productSvc: ProductService) {

    let sessionCart = sessionStorage.getItem("cart");

    if (sessionCart != null) {
      this.cart = JSON.parse(sessionCart);
    }
    else {
      this.cart = new Array<Product>();
    }

    //get the products from the service
    this.products = new Array<Product>();

    _productSvc.getProducts().subscribe(
      result => {
        this.products = result;
      },
      error => {
        console.log(error);
      });

  }

  ngOnInit(): void {
  }

  addProductToCart(id: number): void {
    //get the product
    console.log(id);
    this._productSvc.getProductById(id).subscribe(
      result=>{
        console.log(result);
        this.cart.push(result);
        sessionStorage.setItem("cart", JSON.stringify(this.cart));
      }, 
      error=>{
        console.log(error);
      });
  }


}
