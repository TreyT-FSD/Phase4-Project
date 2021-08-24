import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent implements OnInit {

  allProducts: Array<Product> = new Array<Product>();

  products: Array<Product> = new Array<Product>();

  cart: Array<Product> = new Array<Product>();

  searchTerm: string = "";

  constructor(private _productSvc: ProductService) {

    this._productSvc.getProducts().subscribe(
      result => {
        this.allProducts = result;
        this.products = result;
      },
      error => {
        console.log(error);
      });

    let sessionCart = sessionStorage.getItem("cart");

    if (sessionCart != null) {
      this.cart = JSON.parse(sessionCart);
    }
    else {
      this.cart = new Array<Product>();
    }

  }

  ngOnInit(): void { }

  addProductToCart(id: number): void {
    //get the product
    //console.log(id);
    this._productSvc.getProductById(id).subscribe(
      result => {
        // console.log(result);
        this.cart.push(result);
        sessionStorage.setItem("cart", JSON.stringify(this.cart));
        alert(result.name + " was added to the cart.")
      },
      error => {
        console.log(error);
      });
  }

  filterProducts(search: string): void {
    //console.log(this.searchTerm);

    let productSubset = new Array<Product>();

    //if searchTerm not empty
    if (search != "") {
      this.allProducts.forEach(element => {
        if (element.name.toLowerCase().includes(search.toLowerCase())) {
          productSubset.push(element);
        }
      });
      //console.log(productSubset);
      this.products = productSubset;
    }
    else {
      this.searchTerm = "";
      this.products=this.allProducts;
    }

  }

}
