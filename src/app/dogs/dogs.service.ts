import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { DogImg } from "./dogs";


const DOG_IMG_URL = 'https://dog.ceo/api/breeds/image/random/3';

@Injectable({
    providedIn: 'root',
})

export class DogService{

    constructor(private HttpClient: HttpClient){}

    getRandomImages(): Observable<DogImg>{
        return this.HttpClient.get<DogImg>(DOG_IMG_URL)
    }
}