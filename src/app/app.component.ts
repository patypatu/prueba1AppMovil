import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
   // { title: 'Inicio', url: '/inicio', icon: 'home' },
    { title: 'Home', url: '/home', icon: 'home' },
   // { title: 'Restablecer Contraseña', url: '/restablecer-contra', icon: 'build' },
    { title: 'Clases', url: '/registro-asistencia', icon: 'book' },
    { title: 'Cerrar Sesion', url: '/cerrar-sesion', icon: 'enter' },
  ];

  constructor() {}
}
