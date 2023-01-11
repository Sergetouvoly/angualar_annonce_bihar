import { Component, OnInit} from '@angular/core';
import {TitleService} from '../_service/title.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title : string = "Titre par defaut"

  constructor(private titleService : TitleService) {

  }
  ngOnInit ():void {
    this.titleService.currentTitle.subscribe(title => this.title = title)
  }
}
