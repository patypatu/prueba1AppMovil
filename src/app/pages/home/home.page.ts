import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public name: string;
  tituloPagina = 'Home';
  iconoEncabezado = 'home';

  constructor(private activatedRoute: ActivatedRoute) { }


  ngOnInit() {
    this.name = localStorage.getItem('Name');       //  <---- Con esta linea, podemos obtener el nombre de usuario desde cualquier modulo.

  }

}
