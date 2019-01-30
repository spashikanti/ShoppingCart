import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { AddProductService } from './addProduct.service';
import { Product } from '../../product/product.model';

@Component({
  selector: 'app-addproductForm',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  // product: Product;
  constructor(private prodServ : AddProductService) { }

  ngOnInit() {
  }
  
  save(form: NgForm) {
    // this.prodServ.post(form.value)
    //   .subscribe((data: any) => {
    //     if (data.Succeeded == true) {
    //       alert("submitted");
    //     }
    //     else
    //     {
    //       alert("failed");
    //     }
    //       //this.toastr.error(data.Errors[0]);
    //   });
  }
 
  resetForm()
  {
    
  }
  
}