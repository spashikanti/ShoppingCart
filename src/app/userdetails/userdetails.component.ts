import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { User } from '../registration/user.model';
import { UserService } from '../registration/user.service';
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import { User1 } from './user1.model';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
 
  user : User1;
  users : Array < User1 >;
  canChange : boolean;
  canEdit : boolean; 
  tableHeaders : Array < string >;
  
  constructor(private userServ : UserService) { 
    
    this.user = new User1();
    this.users = new Array < User1 > ();    
    this.canChange = false;
    this.canEdit = false;
    this.tableHeaders = new Array < string > ();
  }

  ngOnInit() {

    //this.clearInputs();
    this.loadData();
    this.createTableHeaders();
  }
 
  private createTableHeaders() {
debugger;
    for (let p in this.user) {
      this
        .tableHeaders
        .push(p);
    }
  }

  private loadData() {
    debugger;
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
    if (!this.canEdit) {
        this
            .userServ
            .post(this.user)
            .subscribe((resp : Response) => {
                this
                    .users
                    .push(resp.json());
                this.canChange = false;
            });
    } else {
        this
        .userServ
        .put(this.user.id,this.user)
        .subscribe((resp : Response) => {
            this
                .users
                .push(resp.json());
            this.canChange = false;
            this.canEdit = false;
        });

    }
}

  delete(p: User1) {
    this.userServ.delete(p.id).subscribe((resp: Response) => {
      this.loadData();
    });
  }
}
