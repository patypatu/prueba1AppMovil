import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AppComponent } from '../../app.component';
import { LoginServiceService } from 'src/app/services/login-service.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  name: string;
  pass: string;
  tituloPagina = 'Ingreso Usuario';
  iconoEncabezado = 'enter';

  constructor(private router: Router, private menuCtrl: MenuController, private loginService: LoginServiceService) { }

  ngOnInit() {
  }

  goToHomeParams(): void{
    const respLogin = this.loginService.login(this.name,this.pass); //service login
    console.log('respLogin: '+ respLogin);

    localStorage.setItem('Name',this.name);   // <-- La idea es que antes de esto, se compruebe con la BD si user & pass corresponden

    //Se esta habilitando el menu, la idea es que el menu vuelva a estar habilitado cuando se salga de la pagina de login
    //cuando exista logica de validacion del login solo debe habilitarse si las credenciales estan ok
    //otra opcion es mover la habilitacion del menu a otra vista con la misma funcion ionViewWillEnter (seria el home post login)
    this.menuCtrl.enable(true);

    if(respLogin === true){
      this.router.navigate(['/home']);
    }else{
      alert(`Usuario o Contraseña incorrectos`);
    }
  }

  /**
   * Se ejecuta despues del router, al iniciar la animacion de la pagina, para mas info ver documentacion oficial
   * https://ionicframework.com/docs/angular/lifecycle
   *
   */
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
