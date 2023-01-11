import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnnonceService } from 'src/app/_service/annonce.service';
import { TitleService } from 'src/app/_service/title.service';

@Component({
  selector: 'app-annoncecreate',
  templateUrl: './annoncecreate.component.html',
  styleUrls: ['./annoncecreate.component.scss']
})
export class AnnoncecreateComponent implements OnInit {

  title : string = ""
  description : string = ""
  price : number = 0
  isActive : Boolean = true
  fileToUpload: File | null = null;

  message : string = ""

  constructor(private http : HttpClient,
    private annonceService : AnnonceService,
    private router : Router,
    private titleService : TitleService
    ){}

    ngOnInit(): void {
      this.titleService.changeTitle('Annonce')
    }


  createAnnonce(){
    this.annonceService.createAnnonce(this.title, this.description, this.price, this.isActive, this.fileToUpload).subscribe({
      next : data => {
        console.log("add annonce ok : ", data);

        this.router.navigate(['annonces'])
      },
      error : err => {
        console.log("add annonce error : ", err);
        this.message = "Une erreur est survenue !"
      }
    })
  }

  handleFileInput(e: any) {
    this.fileToUpload = e.files[0];
    console.log("file => ", this.fileToUpload);

}

//   handleFileInput(files: FileList) {
//     this.fileToUpload = files.item(0);
// }


}
