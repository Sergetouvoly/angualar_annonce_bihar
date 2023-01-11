import { Component } from '@angular/core';
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
  private storageService : StorageService
  ){

}
doLogin(){
  this.authService.login(this.login, this.password).subscribe({
    next : data => {
      console.log(data)
      this.storageService.saveUser(data)
      this.isLoggedIn = true
      this.isLoginFailed = false
    },
    error : err => {
      this.isLoginFailed = true
      this.message = "identifiants incorects"
      console.log("erreur login")
    }
  })
}
}
