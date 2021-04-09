import { Component } from '@angular/core';
import { DataTotal } from '../models/interfaz.model';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  arrayData: DataTotal[]=[];
  textoBuscar = '';

  constructor(private dataService: DataService) {
    this.dataService.getData().subscribe(resp => this.arrayData = resp);
  }

  buscarData( event ){
    const text = event.target.value;
    this.textoBuscar = text;

  }

  show(event){
    console.log(event)

  }
}
