import { Component, OnInit } from '@angular/core';
import { CatService } from './cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  images:string[] = [];

  constructor(private CatService: CatService) { }

  ngOnInit(): void {
    this.getRandomImages();
  }

  getRandomImages(): void{
    this.images.length = 0;
    for (let i = 0; i < 3; i++){
        this.CatService.getRandomImageJson().subscribe({
            next: imageJson => {
              this.images.push('https://cataas.com/cat/'+imageJson.id);
            },
            error: err => {console.log(err);}
          })
    }
}
  
}
