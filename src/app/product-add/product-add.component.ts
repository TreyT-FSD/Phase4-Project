import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = new Product();

  constructor(private _productSvc: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(): void {
    // console.log(this.product);
    if(this.product.imgPath== ""){
      this.product.imgPath="assets/Default.png"
    }
    
    this._productSvc.addProduct(this.product).subscribe(
      (result)=>{
        //console.log(result);
      },
      (error)=>{
        console.log(error);
      });
  }

}
