import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  cargando$ = new BehaviorSubject<boolean>(true);

  nodos: { top: number; left: number }[] = [];
  lineas: { x1: number; y1: number; x2: number; y2: number }[] = [];

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.cargando$.next(true);
      }
      if (event instanceof NavigationEnd) {
        setTimeout(() => this.cargando$.next(false), 1000); // carga entre rutas
      }
    });
  }

 ngOnInit() {
  const centerX = 150;
  const centerY = 150;
  const radius = 60;
  const cantidad = 12;

  for (let i = 0; i < cantidad; i++) {
    const angle = (i * 2 * Math.PI) / cantidad;
    const top = centerY + radius * Math.sin(angle);
    const left = centerX + radius * Math.cos(angle);
    this.nodos.push({ top: (top / 300) * 100, left: (left / 300) * 100 });

    // conectar al siguiente nodo (circularmente)
    const nextIndex = (i + 1) % cantidad;
    const nextAngle = ((i + 1) * 2 * Math.PI) / cantidad;
    const x1 = centerX + radius * Math.cos(angle);
    const y1 = centerY + radius * Math.sin(angle);
    const x2 = centerX + radius * Math.cos(nextAngle);
    const y2 = centerY + radius * Math.sin(nextAngle);
    this.lineas.push({ x1, y1, x2, y2 });
  }

  // Simular carga
  setTimeout(() => this.cargando$.next(false), 1000);
}

}
