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
    // Nodos con posiciones aleatorias
    for (let i = 0; i < 20; i++) {
      this.nodos.push({
        top: Math.random() * 90,
        left: Math.random() * 90
      });
    }

    // Líneas aleatorias
    for (let i = 0; i < 25; i++) {
      this.lineas.push({
        x1: Math.random() * 300,
        y1: Math.random() * 300,
        x2: Math.random() * 300,
        y2: Math.random() * 300
      });
    }

    // Carga inicial
    setTimeout(() => this.cargando$.next(false), 1000);
  }
}
