import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data = Array(100);
  constructor(private menuCtrl:MenuController) {}

  mostrarMenu(){
    this.menuCtrl.open()
  }

}
