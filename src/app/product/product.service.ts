import { Injectable } from "@angular/core";
import { Http,Request,RequestOptions,Headers,Response } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
  readonly rootUrl = "http://localhost:4050/api/ProductApi/";
  constructor(private http: Http) {}

  //get all products
  getAll(): Observable<Response> {
    var res = this.http.get(`${this.rootUrl}/GetAllProducts`);
    return res;
  }

  // add product to DB.
  post(product: Product): Observable<Response> {
    debugger;
    var headers = new Headers({ "Content-Type": "application/json" });
    var options = new RequestOptions();
    options.headers = headers;
    var res = this.http.post(`${this.rootUrl}/User/Create`, product, options);
    //if(res.)
    return res;
  }
}
