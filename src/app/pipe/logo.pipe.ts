import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

const URL = environment.imgPath;


@Pipe({
  name: 'logo'
})
export class LogoPipe implements PipeTransform {

  transform(img:any): string {

       
    if ( !img['profileLogo'] ) {
      return './assets/img/icono-empresas.png';
    }

    const imagenUrl = `${URL}/${img['profileId']}/${img['profileLogo']}`;    

    return imagenUrl;
    
  }

}
