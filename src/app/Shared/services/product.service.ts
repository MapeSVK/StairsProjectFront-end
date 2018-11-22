import { Injectable } from '@angular/core';
import {Product} from '../Models/product';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // product service handles data
  apiUrl = 'https://stairsprojectproduction.azurewebsites.net/api/products';

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {
  }

  getProducts(): Observable<Product[]> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.get < Product[]>(this.apiUrl, httpOptions);
  }

  addProduct(product: Product): Observable<Product> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<Product>(this.apiUrl, product, httpOptions);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get <Product>(this.apiUrl + '/' + id, httpOptions);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(this.apiUrl + '/' + product.id, product, httpOptions);
  }

  deleteProduct(id: number): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.delete(this.apiUrl + '/' + id, httpOptions);
  }
}
