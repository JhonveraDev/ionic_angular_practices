import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AlbumesService } from 'src/app/services/albumes.service';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  constructor( private serviceHero: AlbumesService) { }

  superHeros: Observable<any>

  ngOnInit() {  
    this.superHeros = this.serviceHero.getHeros()
    
  }

  segmentChanged(event){
    console.log(event.detail.value)
  }

}
