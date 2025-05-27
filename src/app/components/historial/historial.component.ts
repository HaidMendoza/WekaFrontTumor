import { Component } from '@angular/core';
import { PersonasService } from '../../services/personas.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [CommonModule, MatDialogModule],
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent {
  pacientes: any[] = [];

  constructor(
    private personasService: PersonasService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.obtenerHistorial();
  }

  obtenerHistorial() {
    this.personasService.getPersonas().subscribe((data) => {
      this.pacientes = data;
    });
  }

  enviarDatos(paciente: any) {
  this.personasService.setElementoSeleccionado(paciente);

 this.dialog.open(ModalComponent, {

});

}

}

