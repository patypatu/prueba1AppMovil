import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { createAnimation } from '@ionic/angular';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {

  tituloPagina = 'Restablecer Contraseña';
  iconoEncabezado = 'build';

  constructor() {
   }

  ngOnInit() {
  }

}
