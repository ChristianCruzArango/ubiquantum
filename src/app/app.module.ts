import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { Geolocation } from '@ionic-native/geolocation/ngx';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

import { AgmCoreModule } from '@agm/core';
import { PipesModule } from './pipe/pipes.module';

import { SocialSharing } from '@ionic-native/social-sharing/ngx';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    HttpClientModule,
    SharedModule,
    PipesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAxLyaBOuEHqSnQLyUposkmfja7beYJOh0'
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation, 
    SocialSharing,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
