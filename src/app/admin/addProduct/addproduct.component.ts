import { Component, OnInit } from "@angular/core";

import { NgForm } from "@angular/forms";
import { AddProductService } from "./addProduct.service";
import { Product } from "../../product/product.model";

@Component({
  selector: "app-addproductForm",
  templateUrl: "./addproduct.component.html",
  styleUrls: ["./addproduct.component.css"]
})
export class AddproductComponent implements OnInit {
  product: Product;
  constructor(private prodServ: AddProductService) {}

  ngOnInit() {}

  save(form: NgForm) {
    this.prodServ.post(form.value).subscribe((data: any) => {
      if (data.status === 200) {
        alert("Product Added Successfully!!");
      } else {
        alert("Unable to add the product");
      }
    });
  }

  resetForm() {}
}
