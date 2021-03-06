import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {tokenNotExpired} from 'angular2-jwt';

@Injectable()
export class AuthService {
  isDev:boolean;
  authToken: any;
  user: any;

  constructor(private http:Http) { }
  authenticateUser(user){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    let ep = this.prepEndpoint('users/authenticate');
    return this.http.post(ep, user,{headers: headers})
      .map(res => res.json());
  }
  loadToken(){
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }
  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  loggedIn(){
    return tokenNotExpired();
  }
  role(){
    const newUser = JSON.parse(localStorage.getItem('user'));
    return newUser.role;
  }
  logout(){
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }
  prepEndpoint(ep){
    if(this.isDev){
      return ep;
    } else {
      return 'http://localhost:8080/'+ep;
    }
  }
}
