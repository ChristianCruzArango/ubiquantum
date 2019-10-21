import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { SharedModule } from '../shared/shared.module';

import { AgmCoreModule } from '@agm/core';



@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    TabsPageRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAigbUqhKuhY4SfjieFMxqsMDepU65Zhk8'
    })    
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
