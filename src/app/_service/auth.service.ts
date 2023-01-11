import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs'

const BASE_API = "http://localhost:9898/api/"
const LOGIN = BASE_API + "login"
const LOGOUT = BASE_API + "logout"
const httpOptions = {
  headers: new HttpHeaders({'content-type' : 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }


  login(username : string, password:string): Observable <any>
  {

    return this.http.post(
      LOGIN,
      {
        username,
        password
      },
      httpOptions
    )
  }
  logout():Observable <any> {

    return this.http.post(LOGOUT, {})
  }
}
