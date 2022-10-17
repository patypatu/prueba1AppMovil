import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { AppComponent } from '../../app.component';

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

  constructor(private router: Router, private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  goToHomeParams(): void{

    //Se esta habilitando el menu, la idea es que el menu vuelva a estar habilitado cuando se salga de la pagina de login
    //cuando exista logica de validacion del login solo debe habilitarse si las credenciales estan ok
    //otra opcion es mover la habilitacion del menu a otra vista con la misma funcion ionViewWillEnter (seria el home post login)

    localStorage.setItem('Name',this.name);   // <-- La idea es que antes de esto, se compruebe con la BD si user & pass corresponden
    this.menuCtrl.enable(true);
    this.router.navigate(['/home']);

  }

  /**
   * Se ejecuta despues del router, al inciar la animacion de la pagina, para mas info ver documentacion oficial
   * https://ionicframework.com/docs/angular/lifecycle
   *
   */
  ionViewWillEnter() {
    this.menuCtrl.enable(false);
  }

}
