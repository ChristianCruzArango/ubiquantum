import { Pipe, PipeTransform } from '@angular/core';
import { ServicesService } from '../services/services.service';


@Pipe({
  name: 'filtrarPromociones'
})
export class FiltrarPromocionesPipe implements PipeTransform {

  constructor(private _services:ServicesService){}

  transform(arreglo: any[],texto: string,columna:string): any[] {   

    const fecha = new Date();
    const fechaActual = fecha.getFullYear() + "-"  + fecha.getMonth()  + "-" +  fecha.getDate() ;
    
      return arreglo.filter(item=>{

        if ( texto == "Activos" && fechaActual <= item['promotionEnd'] ){
            return item;
        }
        
        
        if( texto == "Inactivos" && fechaActual >= item['promotionEnd']){
          return item;
        }
        
      });


    return;
  }

}
