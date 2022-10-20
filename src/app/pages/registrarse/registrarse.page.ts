import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private registroUsuarioService: RegistroUsuarioService) { }

  ngOnInit() {
  }

  async registroUsuario(){

    const respResgistro = await this.registroUsuarioService.registrarUsuario(this.rut,this.nombre,
      this.apellido,this.correo,this.pass).then(a=>true).catch(e=>false);
    console.log('respuesta:'+ respResgistro);
  }

}
