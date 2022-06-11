import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Compras } from '../modelos/compras';
@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  compras:Compras;
  historial:Compras[];
  urlPeticionNode="http://localhost:3000/api/compras/";
  constructor(public httpClient:HttpClient) { 
    this.compras=new Compras;
  }

  public Obtenercompras(){
    return this.httpClient.get(this.urlPeticionNode)
}

poscompra(compra:Compras){
    return this.httpClient.post(this.urlPeticionNode,compra)
  }
  
}
