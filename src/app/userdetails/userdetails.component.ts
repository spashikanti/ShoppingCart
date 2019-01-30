import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';

import { UserService } from '../registration/user.service';
import {Response} from '@angular/http';
import {Observable} from 'rxjs';
import { User1 } from './user1.model';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
   user: User1;
  users: Array < User1 >;
  canChange: boolean;
  canEdit: boolean;
  tableHeaders: Array < string >;

  constructor(private userServ: UserService) {
    this.user = new User1();
    this.users = new Array < User1 > ();
    this.canChange = false;
    this.canEdit = false;
   
  }

  ngOnInit() {

    //this.clearInputs();
    this.loadData();
  }


  private loadData() {
    // debugger;
    this
      .userServ
      .getAll()
      .subscribe((resp: Response) => {
        this.users = resp.json();
      });
  }

  add() {
    this.user = new User1();
    this.canChange = true;
  }

  edit(p: User1) {
    this.user = p;
    this.canEdit = true;
    this.canChange = true;
  }

  save() {
   debugger;
    if (!this.canEdit) {
        this
            .userServ
            .post(this.user)
            .subscribe((resp: Response) => {
                this
                    .users
                    .push(resp.json());
                this.canChange = false;
            });
    } else {
      debugger;
        this
        .userServ
        .put(this.user.id, this.user)
        .subscribe((resp: Response) => {
            this
                .users
                .push(resp.json());
            this.canChange = false;
            this.canEdit = false;
        });

    }
}


clearInputs() {
  this.user.id = '';
  this.user.firstName = '';
  this.user.lastName = '';
  this.user.contact = '';
  this.user.emailID = '';
  this.user.password = '';
}

  delete(p: User1) {
    this.userServ.delete(p.id).subscribe((resp: Response) => {
      this.loadData();
    });
  }
}
