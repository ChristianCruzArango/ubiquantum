import { Component, OnInit, Input } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss'],
})
export class PromocionesComponent implements OnInit {

  @Input() idCliente:string;

  promociones:any[] =  [];

  constructor(private _services:ServicesService) {  }

  ngOnInit() {
      
    this.getPromociones(this.idCliente);
      
  }


  getPromociones(id:string){
    this._services.getPromociones(id).subscribe(resp=>{
      this.promociones = resp;      
    });
  }


}
