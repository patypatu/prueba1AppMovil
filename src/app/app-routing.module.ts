import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CerrarSesionComponent } from './components/cerrar-sesion/cerrar-sesion.component';
import { AuthGuard } from './auth/auth.guard';

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
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'restablecer-contra',
    loadChildren: () => import('./pages/restablecer-contra/restablecer-contra.module').then( m => m.RestablecerContraPageModule)
  },
  {
    path: 'registro-asistencia',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./pages/registro-asistencia/registro-asistencia.module').then( m => m.RegistroAsistenciaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
   {
     path: 'registrarse',
     loadChildren: () => import('./pages/registrarse/registrarse.module').then( m => m.RegistrarsePageModule)
   },
   {
    path: 'cerrar-sesion',
    component: CerrarSesionComponent
    //loadChildren: () => import('./components/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'detalle-usuario',
    loadChildren: () => import('./pages/detalle-usuario/detalle-usuario.module').then( m => m.DetalleUsuarioPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
