import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../models/product";

@Injectable()
export class ProductService {

    PRODUCT_API_URL: string = "http://localhost:3000";

    constructor(private _http: HttpClient) { }

    getProducts(): Observable<Product[]> {
        return this._http.get<Product[]>(this.PRODUCT_API_URL + "/product");
    }

    getProductById(id: number): Observable<Product> {
        return this._http.get<Product>(this.PRODUCT_API_URL + "/product/" + id);
    }

    removeProductById(id: number): Observable<Product> {
        return this._http.delete<Product>(this.PRODUCT_API_URL + "/product/" + id);
    }

    addProduct(product: Product): Observable<Product>{
        return this._http.post<Product>(this.PRODUCT_API_URL + "/product", product);
    }


}