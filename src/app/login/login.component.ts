import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../_service/auth.service';
import {StorageService} from '../_service/storage.service'
import { TitleService } from '../_service/title.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

login: string = "admin"
password:string="admin"
isLoginFailed : boolean = true
isLoggedIn: boolean = false
message : string = "test"

constructor(
  private authService : AuthService,
  private storageService : StorageService,
  private router : Router,
  private titleService : TitleService
  ){
}

  ngOnInit(): void {
    this.titleService.changeTitle("Page de connexion")
  }


doLogin(){
  this.authService.login(this.login, this.password).subscribe({
    next : data => {
      console.log(data)
      this.storageService.saveUser(data)
      this.isLoggedIn = true
      this.isLoginFailed = false
      this.router.navigate(['annonces'])
    },
    error : err => {
      this.isLoginFailed = true
      this.message = "identifiants incorrects"
      console.log("erreur login")
    }
  })
}
}
