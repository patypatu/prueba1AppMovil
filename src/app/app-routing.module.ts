import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    //redirectTo: 'home/visita',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'ingreso',
    loadChildren: () => import('./pages/ingreso/ingreso.module').then( m => m.IngresoPageModule)
  },
  {
    path: 'restablecer-contra',
    loadChildren: () => import('./pages/restablecer-contra/restablecer-contra.module').then( m => m.RestablecerContraPageModule)
  },
  {
    path: 'registro-asistencia',
    loadChildren: () => import('./pages/registro-asistencia/registro-asistencia.module').then( m => m.RegistroAsistenciaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
