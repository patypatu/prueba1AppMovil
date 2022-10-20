import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, AlertController } from '@ionic/angular';
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

  constructor(private router: Router, private menuCtrl: MenuController, private loginService: LoginServiceService,
     private alertController: AlertController) { }

  ngOnInit() {
  }

  async goToHomeParams(){
    const respLogin = await this.loginService.login(this.name,this.pass).then(a=>true).catch(e=>false); //service login
    console.log('respLogin: '+ respLogin);


    //Se esta habilitando el menu, la idea es que el menu vuelva a estar habilitado cuando se salga de la pagina de login
    //cuando exista logica de validacion del login solo debe habilitarse si las credenciales estan ok
    //otra opcion es mover la habilitacion del menu a otra vista con la misma funcion ionViewWillEnter (seria el home post login)
    this.menuCtrl.enable(true);

    if(respLogin === true){
      this.router.navigate(['/home']);
    }else{
      //alert(`Usuario o Contraseña incorrectos`);

      const alert = await this.alertController.create({
        header: 'Error',
        //subHeader: 'Important message',
        message: 'Usuario o Contraseña incorrectos',
        buttons: ['OK'],
      });

      await alert.present();
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
