import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UnidadService } from 'src/app/services/unidad.service';
import { ProyectoService, Proyecto } from 'src/app/services/proyecto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-unidad-form',
  templateUrl: './unidad-form.component.html',
  styleUrls: ['./unidad-form.component.scss']
})
export class UnidadFormComponent implements OnInit {
  form: FormGroup;
  id: string | null = null;
  proyectos: Proyecto[] = [];

  constructor(
    private fb: FormBuilder,
    private unidadService: UnidadService,
    private proyectoService: ProyectoService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      numero_unidad: ['', Validators.required],
      tipo: ['', Validators.required],
      estado: ['', Validators.required],
      precio_venta: [0, Validators.required],
      proyecto: ['', Validators.required],
      metraje_cuadrado : [0, Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.proyectoService.getProyectos()
    .subscribe(arr => {
      console.log('Proyectos recibidos:', arr);
      this.proyectos = arr;
    });

    if (this.id) {
      this.unidadService.getUnidad(this.id).subscribe(data => {
        this.form.patchValue(data);
      });
    }
  }

  guardar(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const accion = this.id
      ? this.unidadService.actualizarUnidad(this.id, this.form.value)
      : this.unidadService.crearUnidad(this.form.value);

    accion.subscribe(() => this.router.navigate(['/unidades']));
  }
}
