import { Component } from "@angular/core";

declare var $: any;
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Shopping Cart";
  showLogin() {
    $("#loginModal").show();
  }

  closeLoginModel() {
    $("#loginModal").hide();
  }
}
