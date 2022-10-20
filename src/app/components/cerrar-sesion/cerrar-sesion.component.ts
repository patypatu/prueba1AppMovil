import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
  template: ''
})
export class CerrarSesionComponent implements OnInit {

  constructor(private router: Router,private localStorageService: LocalStorageService) { }

  ngOnInit() {
    console.log('hola');
    this.localStorageService.limpiarStorage();
    this.router.navigate(['/inicio']);
  }

}
