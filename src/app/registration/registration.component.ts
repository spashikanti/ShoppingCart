import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //userModel= new User("ss","rob" ,"rob" ,"rob" ,"rob" ,"rob")
  user: User;
  constructor(private userServ : UserService) { }

  ngOnInit() {
  }
  
  save(form: NgForm) {
    debugger;
    this.userServ.post(form.value)
      .subscribe((data: any) => {
        if (data.Succeeded == true) {
          //this.resetForm(form);
          //this.toastr.success('User registration successful');
        }
        else
        {}
          //this.toastr.error(data.Errors[0]);
      });
  }

  resetForm()
  {
    
  }
  
}
