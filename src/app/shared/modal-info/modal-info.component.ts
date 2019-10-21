import { Component, OnInit,Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProfilesAll } from 'src/models/profiles_all.model';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.component.html',
  styleUrls: ['./modal-info.component.scss'],
})
export class ModalInfoComponent implements OnInit {

  constructor(private modalCtrl:ModalController,private iab: InAppBrowser) { }

  @Input() informacion;
  
  profiles_all:ProfilesAll [] = [];
  telefonoCel:string;
  telefono:string;
  correo:string;

  ngOnInit() {
    this.profiles_all = JSON.parse(this.informacion);    
    
    this.telefonoCel = `tel:+${this.profiles_all['mobile']}`; 
    this.telefono    = `tel:+${this.profiles_all['phone']}`; 
    this.correo      =  `mailto:${this.profiles_all['email']}`; 

    console.log()
  }


  salir(){
    this.modalCtrl.dismiss();
  }

  irSitioWeb(){
    const browser = this.iab.create(this.profiles_all['site']);
  }

}
