import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto-form',
  templateUrl: './proyecto-form.component.html',
  styleUrls: ['./proyecto-form.component.scss']
})
export class ProyectoFormComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private proyectoService: ProyectoService,
    private router: Router
  ) {
    this.form = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: [''],
      ubicacion: ['', Validators.required],
      fecha_inicio: ['', Validators.required],
      fecha_final: ['', Validators.required],
      estado: ['', Validators.required]
    });
  }

  guardar(): void {
    if (this.form.valid) {
      this.proyectoService.crearProyecto(this.form.value).subscribe(() => {
        this.router.navigate(['/proyectos']);
      });
    }
  }
}