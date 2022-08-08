import { Component, OnInit } from '@angular/core';
import { DogService } from './dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})


export class DogsComponent implements OnInit {

  imgs:string[] = [];

  constructor(private DogService: DogService) { }

  ngOnInit(): void {
    this.getRandomImages();
  }

  getRandomImages(){
    return this.DogService.getRandomImages().subscribe({
      next: imgsJson => {
        this.imgs = imgsJson.message;
      },
    })
  }

}
