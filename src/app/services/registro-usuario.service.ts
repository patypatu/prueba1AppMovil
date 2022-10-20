/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistroUsuarioService {

  urlBase= 'http://127.0.0.1:8000/';

  constructor(private httpClient: HttpClient) { }

  //POST registro de usuario
  registrarUsuario(rut: any, nombre: any, apellido: any, correo: any,password: any ): Promise <any>{
    return new Promise ((resolve,reject) =>{
      this.httpClient.post<any>(this.urlBase+'api/crea_usuario',{
        username: rut,
        first_name: nombre,
        last_name: apellido,
        email: correo,
        password
      })
      .subscribe(res =>{
        console.log(res);
        resolve(res);
      } ,(err) => {
        reject(err);
      });
    });
  };
}
