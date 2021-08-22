import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  newProduct: Product = new Product();

  constructor(private _productSvc: ProductService) { }

  ngOnInit(): void {
    this._productSvc.getProducts().subscribe(
      result => {
        this.products = result;
      },
      error => {
        console.log(error);
      });
  }

  removeProduct(id: number): void {
    console.log("Deleting product");
    this._productSvc.removeProductById(id)
      .subscribe(
        (result) => {
          console.log("Product deleted");
          this.ngOnInit();
        },
        (error) => {
          console.log(error);
        });
  }

  addProduct(): void{
    


    this.newProduct = new Product();
  }

}
