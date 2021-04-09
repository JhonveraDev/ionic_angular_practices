import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.page.html',
  styleUrls: ['./refresh.page.scss'],
})
export class RefreshPage implements OnInit {

  items:any[]=[];

  constructor() { }

  ngOnInit() {
  }

  doRefresh(event){

    setTimeout(()=>{
      console.log(event)
      this.items = Array(20)
      event.target.complete()

    },1500);
  }

}
