import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { RegistroUsuarioService } from '../../services/registro-usuario.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.page.html',
  styleUrls: ['./registrarse.page.scss'],
})
export class RegistrarsePage implements OnInit {

  correo: string;
  pass: string;
  pass2: string;
  apellido: string;
  nombre: string;
  rut: string;
  tituloPagina = 'Ingreso Usuario';
  iconoEncabezado = 'enter';

  constructor(private router: Router, private registroUsuarioService: RegistroUsuarioService,
    private alertController: AlertController) { }

  ngOnInit() {
  }

  async registroUsuario(){

    // eslint-disable-next-line eqeqeq
    if (this.pass == this.pass2) {

      const respResgistro = await this.registroUsuarioService.registrarUsuario(this.rut,this.nombre,
        this.apellido,this.correo,this.pass).then(a=>true).catch(e=>false);

        if(respResgistro){
          const alert = await this.alertController.create({
            header: 'Usuario Creado!',
            //subHeader: 'Important message',
            message: 'Se ha creado correctamente su usuario',
            buttons: ['OK'],
          });
          await alert.present();
        }else{
          const alert = await this.alertController.create({
            header: 'Usuario ya existe!',
            //subHeader: 'Important message',
            message: 'El rut ya está registrado en la aplicación',
            buttons: ['OK'],
          });
          await alert.present();
        }

      console.log('respuesta:'+ respResgistro);


    }else{

      const alert = await this.alertController.create({
        header: 'Contraseñas incorrectas!',
        //subHeader: 'Important message',
        message: 'Las contraseñas no coinciden',
        buttons: ['OK'],
      });
      await alert.present();

    }


  }

}
