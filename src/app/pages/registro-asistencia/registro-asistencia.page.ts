import { Component, OnInit } from '@angular/core';
import { Animation, AnimationController } from '@ionic/angular';
import { createAnimation } from '@ionic/angular';

@Component({
  selector: 'app-registro-asistencia',
  templateUrl: './registro-asistencia.page.html',
  styleUrls: ['./registro-asistencia.page.scss'],
})
export class RegistroAsistenciaPage implements OnInit {

  constructor(private animationCtrl: AnimationController) {
    const squareA = createAnimation()
  .addElement(document.querySelector('.square-a'))
  .keyframes([
    { offset: 0, transform: 'scale(1) rotate(0)' },
    { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
    { offset: 1, transform: 'scale(1) rotate(0) '}
  ]);
   }

  ngOnInit() {
  }

}
