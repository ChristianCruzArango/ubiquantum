import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const URL    = environment.url;
const app_key = environment.apiKey;


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient) { }

  private info(parametro:string,id?:string){

    const cuerpo = {
      app_key,
      app_task:parametro,
      id:id
    }

    return cuerpo;
  }


  getDirectorio(){  
    return this.http.post(`${ URL }`,this.info("profiles_all"));
  }

  getAllPromociones(){
    return this.http.post(`${ URL }`,this.info("promotions_all")).pipe(
      map(resp=>{
         return resp['data']; 
      })        
    );
  }

  getCoordenadas(){
    return this.http.post(`${ URL }`,this.info("locations_all")).pipe(
        map(resp=>{
           return resp['data']; 
        })        
      );
  }

  getPromociones(id:string){
    return this.http.post(`${ URL }`,this.info("promotions_user",id)).pipe(
      map(resp=>{
         return resp['data']; 
      })        
    );
  }

  getProIndividual(id:string){
    return this.http.post(`${ URL }`,this.info("promotions_read",id)).pipe(
      map(resp=>{
         return resp['data']; 
      })        
    );
  }

  getCoorIndividuales(id:string){
    return this.http.post(`${ URL }`,this.info("locations_show",id)).pipe(
      map(resp=>{
         return resp['data']; 
      })        
    );
  }

}
