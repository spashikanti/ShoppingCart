import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from "../../product/product.model";
@Injectable()
export class AddProductService {
  readonly rootUrl = "http://localhost:4050/api/ProductApi/";
  constructor(private http: Http) {}

  getAll(): Observable<Response> {
    var res = this.http.get(`${this.rootUrl}/User/All`);
    return res;
  }

  // add user to DB.
  post(product: Product): Observable<Response> {
    debugger;
    var headers = new Headers({ "Content-Type": "application/json" });
    var options = new RequestOptions();
    options.headers = headers;
    var res = this.http.post(`${this.rootUrl}/CreateProduct`, product, options);
    return res;
  }

  // update user to DB.
  put(id: string, per: Product): Observable<Response> {
    var headers = new Headers({ "Content-Type": "application/json" });
    var options = new RequestOptions();
    options.headers = headers;
    var res = this.http.put(
      `${this.rootUrl}/UpdateProduct/${id}`,
      JSON.stringify(per),
      options
    );
    return res;
  }
  // delete user from DB.
  delete(id: string): Observable<Response> {
    var res = this.http.delete(`${this.rootUrl}/DeleteProduct/${id}`);
    return res;
  }
}
