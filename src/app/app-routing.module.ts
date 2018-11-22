import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './welcome/welcome.component';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import {ProductAddComponent} from './products/product-add/product-add.component';
import {ProductUpdateComponent} from './products/product-update/product-update.component';
import {LoginComponent} from './auth/login/login.component';
import {RegisterComponent} from './auth/register/register.component';
import {Guard} from './guards/authGuard';

const routes: Routes = [
  { path: 'products', component: ProductsListComponent, canActivate: [Guard]},
  { path: 'products/:id', component: ProductDetailsComponent, canActivate: [Guard]},
  { path: 'product-add', component: ProductAddComponent, canActivate: [Guard]},
  { path: '', component: WelcomeComponent},
  { path: 'product-update/:id', component: ProductUpdateComponent, canActivate: [Guard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
