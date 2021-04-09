import { Pipe, PipeTransform } from '@angular/core';
import { DataTotal } from '../models/interfaz.model';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(data: DataTotal[], text: string): DataTotal[] {
    if(text.length === 0){return data}
      text = text.toLocaleLowerCase()

      return data.filter( dato =>{
        //Filtro de busqueda para distintos datos
        return dato.name.toLocaleLowerCase().includes(text) || 
        dato.address.city.toLocaleLowerCase().includes(text) ||
        dato.address.street.toLocaleLowerCase().includes(text) || 
        dato.id.toString().includes(text)
      })
    }
  }


