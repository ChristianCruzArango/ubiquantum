import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { ImgPromocionesPipe } from './img-promociones.pipe';
import { ImagenallpromocionPipe } from './imagenallpromocion.pipe';
import { FiltrarPromocionesPipe } from './filtrar-promociones.pipe';
import { LogoPipe } from './logo.pipe';




@NgModule({
  declarations: [
    ImagenPipe,
    ImgPromocionesPipe,
    ImagenallpromocionPipe,
    FiltrarPromocionesPipe,
    LogoPipe,
 
  ],
  exports: [
    ImagenPipe,
    ImgPromocionesPipe,
    ImagenallpromocionPipe,
    FiltrarPromocionesPipe,
    LogoPipe,
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }
