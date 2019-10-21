import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ServicesService } from '../../services/services.service';
import { ProfilesAll } from 'src/models/profiles_all.model';

@Component({
  selector: 'app-modal-location',
  templateUrl: './modal-location.component.html',
  styleUrls: ['./modal-location.component.scss'],
})
export class ModalLocationComponent implements OnInit {

  @Input() locationId;
  @Input() lat;
  @Input() lng;

  locations_show:string [] = [];
  telefonoCel:string;
  telefono:string;
  correo:string;

  latd:number;
  lngo:number; 

  constructor(private modalCtrl:ModalController,private _services:ServicesService) { 
    
  }

  ngOnInit() {
    this.latd = parseFloat(this.lat);
    this.lngo = parseFloat(this.lng);
    this.getCorIndividuales();

    this.telefonoCel = `tel:+${this.locations_show['locationMobile']}`; 
    this.telefono    = `tel:+${this.locations_show['locationPhone']}`; 
    this.correo      =  `mailto:${this.locations_show['locationEmail']}`; 
  }

  getCorIndividuales(){
    this._services.getCoorIndividuales(this.locationId).subscribe(resp=>{
        this.locations_show = resp;
        console.log(this.locations_show);
    });
  }

  salir(){
    this.modalCtrl.dismiss();
  }
  
}
