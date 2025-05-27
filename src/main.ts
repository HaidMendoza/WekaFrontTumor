// src/main.ts
import 'zone.js'; // ✅ Necesario para que Angular detecte los eventos y cambios en el DOM
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error('❌ Error al iniciar la app:', err));
