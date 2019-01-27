import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import { ProductService } from './product.service';
import { Product } from "./product.model";
import {Response} from "@angular/http";

@Component({
  selector: "app-allProducts",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductsComponent{
  //data: Product = {};
  products : Array < Product >;

  constructor(private prodService : ProductService) {
    this.products = Array < Product >();
      this.getData();
      console.log(this.products);
  }

  getData(){
    this.prodService.getAll().subscribe((resp: Response) => {this.products = resp.json();});
  }
  
  save(form: NgForm) {
   // debugger;
  //   this.userServ.post(form.value)
  //     .subscribe((data: any) => {
  //       if (data.Succeeded == true) {
  //         //this.resetForm(form);
  //         //this.toastr.success('User registration successful');
  //       }
  //       else
  //       {}
  //         //this.toastr.error(data.Errors[0]);
  //     });
  }
}

