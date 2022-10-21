import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecuperarClaveService {

  urlBase= 'http://127.0.0.1:8000/';

  constructor(private httpClient: HttpClient) { }

  recuperarClave(rut: any): Promise<any>{
    return new Promise ((resolve,reject)=>{
      this.httpClient.post<any>(this.urlBase + 'api/enviar_email',{
        username: rut
      })
      .subscribe(res =>{
        console.log(res);
        resolve(res);
      },(err)=>{
        reject(err);
      });
    });

  }


}
