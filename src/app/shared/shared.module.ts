import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ModalInfoComponent } from './modal-info/modal-info.component';
import { PipesModule } from '../pipe/pipes.module';
import { PromocionesComponent } from './promociones/promociones.component';

import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { ModalPromocionesComponent } from './modal-promociones/modal-promociones.component';
import { PopComponent } from './pop/pop.component';
import { ModalLocationComponent } from './modal-location/modal-location.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  entryComponents:[
    ModalInfoComponent,
    ModalPromocionesComponent,
    ModalLocationComponent,
    PopComponent
  ],
  declarations: [
    HeaderComponent,
    ModalInfoComponent,
    PromocionesComponent,
    ModalPromocionesComponent,
    ModalLocationComponent,    
    PopComponent
  ],
  imports: [
    CommonModule,
    CommonModule,
    IonicModule,
    RouterModule,
    PipesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAxLyaBOuEHqSnQLyUposkmfja7beYJOh0'
    })
  ],
  providers:[
    InAppBrowser,
    CallNumber
  ],
  exports:[
    HeaderComponent,
    ModalInfoComponent,
    PromocionesComponent,
    ModalPromocionesComponent,
    PopComponent   
  ],
})
export class SharedModule { }
