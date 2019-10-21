import { Component, OnInit } from '@angular/core';

import { Marcador } from '../classes/marcador.class';
import { ServicesService } from '../services/services.service';
import { ModalController } from '@ionic/angular';
import { ModalLocationComponent } from '../shared/modal-location/modal-location.component';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  marcadores:Marcador[] = [];
  coor:string = "";
  coordenadas:string[] = [];
  
  lng = -76.113281; 
  lat = 5.090944;

  constructor(private _services:ServicesService,private modalCtrl:ModalController) {
      
    this._services.getCoordenadas().subscribe((resp:Marcador[])=>{      

      resp.forEach((item:Marcador)=>{
        this.coor = item.locationCoordinates;
        this.coordenadas = this.coor.split(',',2);
        
         item.lng =  this.coordenadas[0];
         item.lat =  this.coordenadas[1];

         item.locationEmail  =  `mailto:${ item.locationEmail }`;
         item.locationMobile = `tel:+${ item.locationMobile}`; 
         item.locationPhone  = `tel:+${ item.locationPhone}`;         
        
        this.marcadores.push(item);
      });
      

    });  

    console.log(this.marcadores);  
    
  }

  ngOnInit(){
    
  }


  async abrirLocation(lat:string,lng:string,locationId:string){ 

    const modal = await this.modalCtrl.create({
      component: ModalLocationComponent,
      componentProps: {
        locationId,   
        lat,
        lng               
      }
    });

    await modal.present();
  
  }


  buscarMapa(event){

    let buscar = event.detail.value;
    console.log(buscar);

  }




}
