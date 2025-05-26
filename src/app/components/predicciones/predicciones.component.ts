import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';
import { PersonasService } from '../../services/personas.service';

function maxTwoMetastasisValidator(metastasisFields: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let count = 0;
    for (const field of metastasisFields) {
      if (control.get(field)?.value === '1') {
        count++;
      }
    }
    return count > 2 ? { maxTwoMetastasis: { message: 'No puede seleccionar más de dos metástasis' } } : null;
  };
}

@Component({
  selector: 'app-predicciones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './predicciones.component.html',
  styleUrls: ['./predicciones.component.scss'],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ],
})
export class PrediccionesComponent {
  formulario: FormGroup;
  enviado = false;
  resultadoDiagnostico: string | null = null;

  metastasisCampos = [
    { label: 'Hueso 🦴', name: 'bone' },
    { label: 'Médula Ósea 🧬', name: 'boneMarrow' },
    { label: 'Pulmón 🫁', name: 'lung' },
    { label: 'Pleura', name: 'pleura' },
    { label: 'Peritoneo', name: 'peritoneum' },
    { label: 'Hígado 🧫', name: 'liver' },
    { label: 'Cerebro 🧠', name: 'brain' },
    { label: 'Piel 🧍‍♀️', name: 'skin' },
    { label: 'Cuello', name: 'neck' },
    { label: 'Supraclavicular', name: 'supraclavicular' },
    { label: 'Axilar', name: 'axillar' },
    { label: 'Mediastino', name: 'mediastinum' },
    { label: 'Abdomen', name: 'abdominal' }
  ];

  constructor(private fb: FormBuilder, private personasServices: PersonasService) {
    this.formulario = this.fb.group({
      age: ['', Validators.required],
      sex: ['', Validators.required],
      bone: ['0', Validators.required],
      boneMarrow: ['0', Validators.required],
      lung: ['0', Validators.required],
      pleura: ['0', Validators.required],
      peritoneum: ['0', Validators.required],
      liver: ['0', Validators.required],
      brain: ['0', Validators.required],
      skin: ['0', Validators.required],
      neck: ['0', Validators.required],
      supraclavicular: ['0', Validators.required],
      axillar: ['0', Validators.required],
      mediastinum: ['0', Validators.required],
      abdominal: ['0', Validators.required],
    }, {
      validators: maxTwoMetastasisValidator(this.metastasisCampos.map(c => c.name))
    });
  }


  onSubmit() {
    if (this.formulario.valid) {
      const datos = this.formulario.value ;
      this.personasServices.predecirPersonas(datos).subscribe({
        next: (data: any) => {
          this.enviado = true;
          this.resultadoDiagnostico = data.resultado || 'Sin resultado';
          alert('Diagnóstico enviado correctamente.');
          this.formulario.reset({
            age: '',
            sex: '',
            bone: '0',
            boneMarrow: '0',
            lung: '0',
            pleura: '0',
            peritoneum: '0',
            liver: '0',
            brain: '0',
            skin: '0',
            neck: '0',
            supraclavicular: '0',
            axillar: '0',
            mediastinum: '0',
            abdominal: '0',
          });
        },
        error: () => alert('Ocurrió un error al enviar el diagnóstico.')
      });
    } else {
      alert('Por favor, completa todos los campos obligatorios.');
    }
  }
}
