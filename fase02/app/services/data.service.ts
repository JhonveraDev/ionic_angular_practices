import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataTotal } from '../models/interfaz.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }


  getData(){
    return this.http.get<DataTotal[]>('https://jsonplaceholder.typicode.com/users')
  }
}
