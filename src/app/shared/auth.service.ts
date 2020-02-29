import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Datum } from '../model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _baseUrl = "http://35.173.187.82/boost/public/api/login";

  constructor(private _http: HttpClient, private _router: Router) {}

  logIn(user) {
    return this._http.post<Datum>(this._baseUrl, user);
  }

  loggedIn() {
    return !!localStorage.getItem("token");
  }

  logOut() {
    localStorage.removeItem("token");
    this._router.navigate(['/login'])
  }
  getToken(){
    return localStorage.getItem('token')
  }
}
