import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicesService } from '../../services/services.service';
import { environment } from '../../../environments/environment';


const URL = environment.imgPath;

@Component({
  selector: 'app-modal-promociones',
  templateUrl: './modal-promociones.component.html',
  styleUrls: ['./modal-promociones.component.scss'],
})
export class ModalPromocionesComponent implements OnInit {

  @Input() id;
  promocionesIndividuales:string [] = [];
  imagen:string = "";


  constructor(private modalCtrl:ModalController,private _services:ServicesService ) { }

  ngOnInit() {
    this.getPromocionesIndividuales();
  }


  salir(){
    this.modalCtrl.dismiss();
  }

  getPromocionesIndividuales(){

    this._services.getProIndividual(this.id).subscribe(resp=>{
     this.promocionesIndividuales = resp;

     console.log(resp);

     this.imagen = `${URL}/${resp['profile']}/p/${resp['id']}/${resp['image']}`;
     console.log( this.imagen);
    });

  }


}
