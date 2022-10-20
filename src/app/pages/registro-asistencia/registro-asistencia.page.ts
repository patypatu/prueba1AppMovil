import { Component, OnInit } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ListarUsuariosService } from '../../services/listar-usuarios.service';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {

  tituloPagina = 'Clases';
  iconoEncabezado = 'book';

  //listadoUsuarios: any =[this.listarUsuariosService.obtenerListadoUsuarios()];

  constructor() { }

  //  detalleUsuario(lista: any){
  //   const navigationExtras: NavigationExtras = {
  //     queryParams:{
  //       estudiante: JSON.stringify(lista)
  //     }
  //   };
     //this.navCtrl.navigateForward(['detalle/'],navigationExtras);
  //  }

  ngOnInit() {
  }

}
