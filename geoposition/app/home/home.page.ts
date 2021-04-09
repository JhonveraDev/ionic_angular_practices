import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  latitud: number;
  longitud: number;

  async obtenerCoordenadas(){
    const obtenerCoordenada = await Geolocation.getCurrentPosition();
    this.latitud = obtenerCoordenada.coords.latitude;
    this.longitud = obtenerCoordenada.coords.longitude;
  }

  constructor() {}

}
