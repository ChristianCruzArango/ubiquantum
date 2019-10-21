import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { SharedModule } from '../shared/shared.module';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAigbUqhKuhY4SfjieFMxqsMDepU65Zhk8'
    })
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
