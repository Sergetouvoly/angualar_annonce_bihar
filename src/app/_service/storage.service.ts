import { Injectable } from '@angular/core';


const USER_COOKIE = 'user'
@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }
  clean(): void {
    window.sessionStorage.clear()

  }

  saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_COOKIE)
    window.sessionStorage.setItem(USER_COOKIE, JSON.stringify(user))
  }

  getUser(): void {
    let user  = window.sessionStorage.getItem(USER_COOKIE)
    if(user){
      return JSON.parse(user)
    }


  }

  isLoggedIn(): boolean {
    let user  = window.sessionStorage.getItem(USER_COOKIE)

    if(user)
      return true
    return false
  }
}
