import { Component, OnInit } from '@angular/core';
import { AlbumesService } from 'src/app/services/albumes.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {

  album:any[]=[]
  textoBuscar:string= ""

  constructor(private data:AlbumesService) { 
    this.data.getAlbumes().subscribe(resp=>{this.album=resp})
  }

  ngOnInit() {
    
  }
  onSearchChange(event){
    this.textoBuscar = event.detail.value
    console.log(this.textoBuscar)

  }

}
