import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products/products-list/products-list.component';
import { NavbarComponent } from './Shared/navbar/navbar.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ProductAddComponent } from './products/product-add/product-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import { ProductUpdateComponent } from './products/product-update/product-update.component';
import {HttpClientModule} from '@angular/common/http';
import {ButtonsModule} from 'ngx-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {Guard} from './guards/authGuard';
import {AuthenticationService} from './Shared/services/authentication.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    NavbarComponent,
    WelcomeComponent,
    ProductDetailsComponent,
    ProductAddComponent,
    ProductUpdateComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonsModule.forRoot()
  ],
  providers: [
    Guard,
    AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
