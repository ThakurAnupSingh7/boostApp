import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _baseUrl = "http://35.173.187.82/boost/public/api";

  constructor(private _http: HttpClient) {}

  createUser(formData) {
    return this._http.post<any>(this._baseUrl + "/create-user", formData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
  getPubliciybyId(id){
    return this._http.get<any>(this._baseUrl + "/get-activity?publicity_id="+id);
  }
  getUser() {
    return this._http.get<any>(this._baseUrl + "/all-users");
  }
  getActiveUser() {
    return this._http.get<any>(this._baseUrl + "/running-publicities");
  }
  getCompleteUser() {
    return this._http.get<any>(this._baseUrl + "/completed-publicities");
  }

  getPublicities() {
    return this._http.get<any>(this._baseUrl + "/all-publicities");
  }

  postPublicities(formData) {
    return this._http.post<any>(this._baseUrl + "/assign-publicity", formData, {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      })
    });
  }
}
