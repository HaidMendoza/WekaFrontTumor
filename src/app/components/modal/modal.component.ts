import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  pacienteCompleto: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { diagnostico: string; recomendacion: string },
    private dialogRef: MatDialogRef<ModalComponent>,
    private personasService: PersonasService
  ) {}

  ngOnInit(): void {
    this.obtenerElementoSeleccionado();
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }

  obtenerElementoSeleccionado(): void {
    this.pacienteCompleto = this.personasService.getElementoSeleccionado();
    
    console.log('Paciente completo:', this.pacienteCompleto);
  }
}
