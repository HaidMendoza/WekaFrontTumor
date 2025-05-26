import { Component } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-historial',
  imports: [CommonModule],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.scss'
})
export class HistorialComponent {
  pacientes:any[] = [];
  constructor(private personasServices:PersonasService){}

  ngOnInit(): void {
    this.obtenerHistorial()
    
  }

  obtenerHistorial(){
    this.personasServices.getPersonas().subscribe((data) => {
      this.pacientes = data;
      console.log(this.pacientes);
    });
  }

}
