import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restablecer-contra',
  templateUrl: './restablecer-contra.page.html',
  styleUrls: ['./restablecer-contra.page.scss'],
})
export class RestablecerContraPage implements OnInit {
  restablecer: string;

  tituloPagina = 'Registro Asistencia';
  iconoEncabezado = 'book';

  constructor() { }

  ngOnInit() {
  }

}
