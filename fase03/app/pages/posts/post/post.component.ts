import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input('data') mensajes:any;

  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    console.log(this.mensajes.id)
  }

}
