import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.page.html',
  styleUrls: ['./ingreso.page.scss'],
})
export class IngresoPage implements OnInit {
  name: string;
  pass: string;
  tituloPagina = 'Ingreso Usuario';
  iconoEncabezado = 'enter';

  constructor(private router: Router) {}

  ngOnInit() {
  }

  goToHomeParams(): void{
    this.router.navigate(['/home',this.name]);
  }
}
