import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], texto:string = ''): any[] {

    if(texto === ''){
      return value
    }

    if(!value){
      return value
    }

    texto = texto.toLocaleLowerCase();

    // console.log(value)
    // console.log(texto)
    
    return value.filter(
      item => item.name.toLowerCase().includes(texto)
    ) ;
  }

}
