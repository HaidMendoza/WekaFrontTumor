import { Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PrediccionesComponent } from './components/predicciones/predicciones.component';
import { HistorialComponent } from './components/historial/historial.component';
import { WekaComponent } from './components/weka/weka.component';
import { InformacionCodigoComponent } from './components/informacion-codigo/informacion-codigo.component';
import { TumoresComponent } from './components/tumores/tumores.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full' 
  },
  {
    path: 'inicio',
    component: InicioComponent
  },
  {
    path: 'predicciones',
    component: PrediccionesComponent
  },
  {
    path: 'historial',
    component:HistorialComponent  
  },
  {
    path: 'weka',
    component: WekaComponent
  },
  {
    path: 'codigo',
    component: InformacionCodigoComponent
  },
  {
    path: 'tumores',
    component:TumoresComponent 
  }
];
