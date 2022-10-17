import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  readonly usuarios = {
    paty : {password: 'asdfgh'

  }

  };

  constructor() { }

  login(usuarioLogin,passwordLogin){
    const usuario = this.usuarios[usuarioLogin];

    if(!usuario){
      return false;
    }
    if (usuario.password !== passwordLogin){
      return false;
    }
    return true;

  }

}
