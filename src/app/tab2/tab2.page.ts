import { ProfilesAll } from './../../models/profiles_all.model';
import { ServicesService } from './../services/services.service';
import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { ModalInfoComponent } from '../shared/modal-info/modal-info.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  implements OnInit{

  profiles_all:ProfilesAll [] = [];

  constructor(private _services:ServicesService,private modalCtrl:ModalController) {}


  ngOnInit(){
    
   this.cargarInformacion();
   console.log(this.profiles_all);

  }

  cargarInformacion(){

    this._services.getDirectorio().subscribe((resp:ProfilesAll[])=>{      
      this.profiles_all = resp['data'];   
     });


  }

  async abrirModal(informacion:any){

    let infoString = JSON.stringify(informacion);   

    const modal = await this.modalCtrl.create({
      component: ModalInfoComponent,
      componentProps: {
      'informacion': infoString,            
      }
    });

    await modal.present();
  
  }

  buscar(event){
    
    let buscar = event.detail.value;

    /*se utiliza para buscar por la inicial del nombre de la empresa pero no es lo ideal */
    
    /*this.profiles_all.forEach(resp=>{
      let nombre = resp['name'].trim();
      let buscarNo = nombre.toLowerCase();

      let n = buscarNo.indexOf(buscar);
  
     

      if(n !== -1){
        
        this.profiles_all = [];        
        return this.profiles_all.push(resp);
      }    
      
      return this.profiles_all = [];   

    });*/
    
  
  }

}
