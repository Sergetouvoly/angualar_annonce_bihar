import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../_service/state.service';
import { StorageService } from '../_service/storage.service';
import {TitleService} from '../_service/title.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title : string = "Titre par defaut"
  displayLogout = false

  constructor(private titleService : TitleService,
    private storageService : StorageService,
  private router : Router,
  private stateService : StateService) {

  }
  ngOnInit ():void {
    this.titleService.currentTitle.subscribe(title => this.title = title)
    this.stateService.isLoggedIn.subscribe(isLoggedIn => this.displayLogout= isLoggedIn)
  }


  logout() : void{
    this.storageService.clean()
    this.router.navigate(['login'])
    this.stateService.changeLoggedState(false)
  }
}
