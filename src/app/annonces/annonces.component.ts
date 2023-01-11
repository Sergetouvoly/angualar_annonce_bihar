import { Component, OnInit } from '@angular/core';
import { AnnonceService } from '../_service/annonce.service';
import * as moment from 'moment'

@Component({
  selector: 'app-annonces',
  templateUrl: './annonces.component.html',
  styleUrls: ['./annonces.component.scss']
})
export class AnnoncesComponent implements OnInit  {

  annonces : Array<Annonce> = []

  constructor(private annonceService : AnnonceService){}

  ngOnInit(): void {
    this.annonceService.getAnnonces().subscribe({
      next: data => {
        console.log(data);

        // this.annonces = data
        data.forEach((elt: Object) => {
          this.annonces.push(new Annonce(elt))
        });
      },
      error : err =>{
        console.log("error", err);
      }
    })
  }

}

class Annonce {
  title : String = ""
  description : String = ""
  price : number = 0.0
  isActive : Boolean = true
  lastUpdated : number = 0

  constructor(data : any){
    this.title = data['title']
    this.description = data['description']
    this.price = data['price']
    this.lastUpdated =  moment(data['lastUpdated']).diff(new Date(), 'days')
  }
}
