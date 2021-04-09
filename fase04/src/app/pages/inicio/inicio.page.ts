import { Component, OnInit } from '@angular/core';

interface Compomponente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Compomponente[]=[
    {
      icon:'american-football',
      name:'Action Sheet',
      redirecTo:'/advance'
    },
    {
      icon:'football-outline',
      name:'Action Sheet',
      redirecTo:'/advance'
    },
    {
      icon:'person-circle-outline',
      name:'Action Sheet',
      redirecTo:'/avatar'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
