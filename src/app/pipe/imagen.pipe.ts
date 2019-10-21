import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment.prod';


const URL = environment.imgPath;

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img:any): string {

       
    if ( !img['logo'] ) {
      return './assets/img/icono-empresas.png';
    }

    const imagenUrl = `${URL}/${img['id']}/${img['logo']}`;    

    return imagenUrl;
    
  }

}
