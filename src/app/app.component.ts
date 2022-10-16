import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
   // { title: 'Inicio', url: '/inicio', icon: 'home' },
   // { title: 'Invitado', url: '/home/invitado', icon: 'home' },
   // { title: 'Restablecer Contraseña', url: '/restablecer-contra', icon: 'build' },
    { title: 'Registro Asistencia', url: '/registro-asistencia', icon: 'book' },
    { title: 'Cerrar Sesion', url: '/inicio', icon: 'enter' },
  ];

  constructor() {}
}
