import { Injectable } from '@angular/core';
import { Constantes } from '../utils/constantes';
import { StateService } from './state.service';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private stateService : StateService) { }

  clean(): void {
    window.sessionStorage.clear()

  }

  saveUser(user: any): void {
    window.sessionStorage.removeItem(Constantes.USER_COOKIE)
    window.sessionStorage.setItem(Constantes.USER_COOKIE, JSON.stringify(user))
    this.stateService.changeLoggedState(true)
  }

  getUser() {
    let user  = window.sessionStorage.getItem(Constantes.USER_COOKIE)
    if(user){
      return JSON.parse(user)
    }
  }

  isLoggedIn(): boolean {
    let user  = window.sessionStorage.getItem(Constantes.USER_COOKIE)

    if(user)
      return true
    return false
  }
}
