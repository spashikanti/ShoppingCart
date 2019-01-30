import { Injectable } from '@angular/core';
import { Http,Request,RequestOptions,Headers,Response } from "@angular/http";
import { Observable } from "rxjs";
import { Product } from '../../product/product.model';
@Injectable()
export class AddProductService {
readonly rootUrl ="http://localhost:4050/api/ProductApi/"
  constructor( private http: Http) { }
  
  //get all users
  // getAll():Observable<Response>{
  //   var res = this.http.get(`${this.rootUrl}/rootUrl/All`);
  //   return res;
  // }

  getAll():Observable<Response>{
    var res = this.http.get(`${this.rootUrl}/User/All`);
    return res;
  }

  // add user to DB.
  post(product:Product):Observable<Response>{
    debugger;
    var headers = new Headers({'Content-Type':'application/json'});
    var options = new RequestOptions();
    options.headers = headers;
    var res = this.http.post(`${this.rootUrl}/CreateProduct`,product,options);
    return res;
}

 // update user to DB.
put(id:string,per:Product):Observable<Response>{
  var headers = new Headers({'Content-Type':'application/json'});
  var options = new RequestOptions();
  options.headers = headers;
  var res = this.http.put(`${this.rootUrl}/User/Update/${id}`,JSON.stringify(per),options);
  return res;
}
// delete user from DB.
delete(id:string):Observable<Response>{
  var res = this.http.delete(`${this.rootUrl}/User/Delete/${id}`);
  return res;
}
  

}
