import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  persistirLogin(res: any){
    localStorage.setItem('token',res.token);   // <-- La idea es que antes de esto, se compruebe con la BD si user & pass corresponden
    localStorage.setItem('Name',res.nombre);
  }
  limpiarStorage(){
    console.log('inicio');
    localStorage.removeItem('token');
    localStorage.removeItem('Name');
    console.log('fin');
  }
}
