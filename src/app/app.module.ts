import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './registration/user.service';
import { HttpModule } from "@angular/http";
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ProductsComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { AddproductComponent } from './admin/addProduct/addproduct.component';

//configure routing 
const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'AboutUs', component: AboutusComponent },
  { path: 'ContactUs', component: ContactusComponent },
  { path: 'SignUp', component: RegistrationComponent },
  { path: 'UserDetails', component: UserdetailsComponent },
  // { path: 'AddProduct', component: AddproductComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AboutusComponent,
    ContactusComponent,
    HomeComponent,
    UserdetailsComponent,
    ProductsComponent
    // ,AddproductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpModule
  ],
  providers: [UserService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
