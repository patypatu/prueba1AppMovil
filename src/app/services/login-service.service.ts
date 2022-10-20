import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  urlBase= "http://127.0.0.1:8000/"

  readonly usuarios = {
    paty : {password: 'asdasd'

  }

  };

  constructor(private httpClient: HttpClient) { }

  //POST login de usuario
  login(usuario:any, password:any): Promise <any>{
    return new Promise ((resolve,reject) =>{
      this.httpClient.post<any>(this.urlBase+'api/login',{
        "username": usuario,
        "password": password
      })
      .subscribe(res =>{
        console.log(res)
        localStorage.setItem('token',res.token);   // <-- La idea es que antes de esto, se compruebe con la BD si user & pass corresponden
        resolve(res);
      } ,(err) => {
        console.log(err)
        console.log(err.error)
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

  

  //POST registro de usuario
  registrarUsuario(usuario:any): Promise <any>{
    return new Promise ((resolve,reject) =>{
      this.httpClient.post(this.urlBase+'api/crea_usuario',usuario )
      .subscribe(res =>{
        resolve(res);
      } ,(err) => {
        reject(err);
      });
    });
  };





  
  
  
  
 // login(usuarioLogin,passwordLogin){
 //   const usuario = this.usuarios[usuarioLogin];
//
//    if(!usuario){
//      return false;
 //   }
 //   if (usuario.password !== passwordLogin){
 //     return false;
 //   }
 //   return true;
//
//  }

}
