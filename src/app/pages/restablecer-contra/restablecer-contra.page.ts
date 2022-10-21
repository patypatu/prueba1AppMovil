import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RecuperarClaveService } from '../../services/recuperar-clave.service';

@Component({
  selector: 'app-restablecer-contra',
  templateUrl: './restablecer-contra.page.html',
  styleUrls: ['./restablecer-contra.page.scss'],
})
export class RestablecerContraPage implements OnInit {
  rut: string;

  tituloPagina = 'Restablecer Contraseña';
  iconoEncabezado = 'book';

  constructor(private router: Router,private recuperarClaveService: RecuperarClaveService,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  async recuperarContrasena(){

    const respRecuperar = await this.recuperarClaveService.recuperarClave(this.rut).then(a=>true).catch(e=>false);

    if(respRecuperar){
      const alert = await this.alertController.create({
        header: 'Correo Enviado!',
        //subHeader: 'Important message',
        message: 'Se ha enviado su nueva clave a su correo',
        buttons: ['OK'],
      });
      await alert.present();
    }else{
      const alert = await this.alertController.create({
        header: 'No existe el RUT!',
        //subHeader: 'Important message',
        message: 'El rut no está registrado en la aplicación',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

}
