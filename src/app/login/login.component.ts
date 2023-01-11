import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService} from '../_service/auth.service';
import {StorageService} from '../_service/storage.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

login: string = ""
password:string=""
isLoginFailed : boolean = false
isLoggedIn: boolean = false
message : string = ""

constructor(
  private authService : AuthService,
  private storageService : StorageService,
  private router : Router
  ){

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
