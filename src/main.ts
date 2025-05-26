import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

// 👉 Aquí defines tus rutas o las importas si están en otro archivo
const routes: Routes = [
  // Ejemplo de ruta básica
  {
    path: '',
    loadComponent: () => import('./app/app.component').then(m => m.AppComponent)
  }
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations() // ✅ Habilita las animaciones
  ]
};
