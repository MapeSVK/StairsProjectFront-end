import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Login} from '../Models/login';
import {AuthenticationService} from './authentication.service';
import {Product} from '../Models/product';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://stairsprojectproduction.azurewebsites.net/api/users';
  constructor(private http: HttpClient, private authenticationService: AuthenticationService) { }
  register(registerDetails: Login): Observable<any> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());
    return this.http.post<Product>(this.apiUrl, registerDetails, httpOptions);
  }
}
