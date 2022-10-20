import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  urlBase= 'http://127.0.0.1:8000/';

  constructor(private httpClient: HttpClient) { }

  //POST login de usuario
  login(usuario: any, password: any): Promise <any>{
    return new Promise ((resolve,reject) =>{
      this.httpClient.post<any>(this.urlBase+'api/login',{
        username: usuario,
        password
      })
      .subscribe(res =>{
        console.log(res);
        localStorage.setItem('token',res.token);   // <-- La idea es que antes de esto, se compruebe con la BD si user & pass corresponden
        localStorage.setItem('Name',res.nombre);
        resolve(res);
      } ,(err) => {
        console.log(err);
        console.log(err.error);
        reject(err);
      });
    });
  };


  //GET
  obtenerUsuario(rut: any): Promise <any>{
    return new Promise ((resolve, reject)=>{
      this.httpClient.get(this.urlBase+'api/detalle_usuario/<'+rut+'>',rut)
      .subscribe(res =>{
        resolve(res);
      } ,(err) =>{
        reject(err);
      });
    });
  };



}
