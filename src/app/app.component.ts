import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Ingreso', url: '/ingreso', icon: 'enter' },
    { title: 'Restablecer Contraseña', url: '/restablecer-contra', icon: 'build' },
  ];

  constructor() {}
}
