import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListarUsuariosService {

  urlBase= 'http://127.0.0.1:8000/';

  constructor(private httpClient: HttpClient) { }

  obtenerListadoUsuarios(): Promise<any>{
    return new Promise((resolve,reject)=>{
      this.httpClient.get(this.urlBase+'api/lista_usuario')
      .subscribe(res =>{
        resolve(res);
      },(err)=>{
        reject(err);
      });
    });
  }


}
