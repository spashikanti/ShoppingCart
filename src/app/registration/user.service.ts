import { Injectable } from '@angular/core';
import { Http, Request, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from "rxjs";
import { User } from './user.model';
@Injectable()
export class UserService {
  readonly rootUrl = "http://localhost:4050/api/UserDetailsApi/"
  constructor(private http: Http) { }

  getAll(): Observable<Response> {
    var res = this.http.get(`${this.rootUrl}/User/All`);
    return res;
  }

  // add user to DB.
  post(user: User): Observable<Response> {
    debugger;
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions();
    options.headers = headers;
    var res = this.http.post(`${this.rootUrl}/User/Create`, user, options);
    //if(res.)
    return res; 
  }

  // update user to DB.
  put(id: string, per: User): Observable<Response> {
    debugger;
    var headers = new Headers({ 'Content-Type': 'application/json' });
    var options = new RequestOptions();
    options.headers = headers;
    var res = this.http.put(`${this.rootUrl}/User/Update/${id}`, JSON.stringify(per), options);
    return res;
  }
  // delete user from DB.
  delete(id: string): Observable<Response> {
    var res = this.http.delete(`${this.rootUrl}/User/Delete/${id}`);
    return res;
  }


}
