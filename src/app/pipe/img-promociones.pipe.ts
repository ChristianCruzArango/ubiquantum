import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

const URL = environment.imgPath;

@Pipe({
  name: 'imgPromociones'
})
export class ImgPromocionesPipe implements PipeTransform {

  transform(img:any): string {
       
    if ( !img['image'] ) {
      return './assets/img/imagenblanco.jpg';
    }

    const imagenUrl = `${URL}/${img['profile']}/p/${img['id']}/${img['image']}`;     

    return imagenUrl;
    
  }

}
