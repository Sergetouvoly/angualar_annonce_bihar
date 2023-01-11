import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Constantes } from '../utils/constantes';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService  {

  token =""
  httpOptions = {
    headers: new HttpHeaders({'content-type' : 'multipart/form-data', 'Accept': 'application/json'})
  }

  constructor(private http : HttpClient, private router : Router, private storageService : StorageService) {
    if(this.storageService.isLoggedIn()){
      this.token =  this.storageService.getUser()['access_token']
      this.httpOptions.headers = this.httpOptions.headers.set("Authorization", "Bearer " + this.token)
    }
    else{
      this.router.navigate(['login'])
    }
   }


  getAnnonces() : Observable <any>{
    return this.http.get("http://localhost:8080/api/" + "annonces", this.httpOptions)
  }

  createAnnonce(title: string, description: string, price : number, isActive: Boolean, illustrations: any): Observable<any>{
    const formData: FormData = new FormData();
    formData.append('illustrations', illustrations, illustrations.name);
    return this.http.post(Constantes.BASE_API + "annonces", {title, description, price, isActive, formData}, this.httpOptions)
  }

}
