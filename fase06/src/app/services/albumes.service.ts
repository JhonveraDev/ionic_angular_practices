import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlbumesService {

  constructor(private http:HttpClient) { }

  getAlbumes(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')

  }

  getHeros(){
    return this.http.get<string[]>('/assets/data/superheroes.json')

  }
 
}
