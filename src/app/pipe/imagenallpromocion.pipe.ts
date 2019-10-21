import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.imgPath;

@Pipe({
  name: 'imagenallpromocion'
})
export class ImagenallpromocionPipe implements PipeTransform {

  transform(img:any): string {
       
    if ( !img['promotionImage'] ) {
      return './assets/img/imagenblanco.jpg';
    }

    const imagenUrl = `${URL}/${img['profileId']}/p/${img['promotionId']}/${img['promotionImage']}`;    

    return imagenUrl;
    
  }

}
