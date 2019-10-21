import { Component, OnInit,ViewChild } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { IonSegment, ModalController } from '@ionic/angular';


import { ModalPromocionesComponent } from '../shared/modal-promociones/modal-promociones.component';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  @ViewChild(IonSegment,{static:true}) segment:IonSegment;

  promocionesAll:any[] = [];
  f:Date = new Date();
  publisher = '';
  

  constructor(private _services:ServicesService,
              private modalCtrl:ModalController) {}

  ngOnInit(){
    this.getAllPromociones();
    this.segment.value = 'Activos'; 
    this.publisher = 'Activos';

   }


   getAllPromociones(){      
    this._services.getAllPromociones().subscribe(resp=>{
      this.promocionesAll = resp;
    });
   }

   segmentChanged( event ) {

      const valorSegmento = event.detail.value;
      this.publisher = valorSegmento;

    }

    async abrirModal(informacion:any){

      let id = informacion['promotionId'];

      console.log(id);       
  
      const modal = await this.modalCtrl.create({
        component: ModalPromocionesComponent,
        componentProps: {
        'id': id,            
        }
      });
  
      await modal.present();
    
    }



   /*validarPromociones(infor:any[]){

    let fechaValidar:string = this.f.getFullYear() + "-" + this.f.getMonth() + "-" + this.f.getDate();
    
     infor.forEach(resp=>{
  
        if(fechaValidar >= resp['promotionEnd']){
          this.mostrarInactivas(resp);
        }else{
          //his.mostrarActivas(resp);
        }
       
     });

   }*/

 

}
