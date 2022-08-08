import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { CatImg} from "./cats";


const CAT_IMG_URL = 'https://cataas.com/cat?json=true';

@Injectable({
    providedIn: 'root',
})

export class CatService{

    constructor(private HttpClient: HttpClient){}

    getRandomImageJson(): Observable<CatImg>{
        return this.HttpClient.get<CatImg>(CAT_IMG_URL);
    }

    getRandomImages(): string[]{
        let images: string[] =[];
        for (let i = 0; i < 3; i++){
            this.getRandomImageJson().subscribe({
                next: imageJson => {
                  images.push('https://cataas.com/cat/'+imageJson.id)
                },
                error: err => {console.log(err);}
              })
        }

        return images;
    }

}