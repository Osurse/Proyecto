import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Libros } from '../modelos/libros';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
    //public libros:Array<any>;
    selectLibro: Libros;
    libros:Libros[];
    urlPeticionNode="http://localhost:3000/api/libros/";
  constructor(public httpClient:HttpClient) {
      this.selectLibro=new Libros();
  }
  public ObtenLibros(){
    return this.httpClient.get(this.urlPeticionNode)
}

posLibro(libro:Libros){
    return this.httpClient.post(this.urlPeticionNode,libro)
  }
  
  actLibro(libro:Libros){
    return this.httpClient.put(this.urlPeticionNode + libro._id,libro)
  }
  
  deleteLibro(_id:string){
    return this.httpClient.delete(this.urlPeticionNode + _id);
  }


}
