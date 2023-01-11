import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private loggedInBase = new BehaviorSubject(false)
  isLoggedIn = this.loggedInBase.asObservable()

  constructor() { }

  changeLoggedState(isLoggedIn: boolean){
    this.loggedInBase.next(isLoggedIn)
  }

}
