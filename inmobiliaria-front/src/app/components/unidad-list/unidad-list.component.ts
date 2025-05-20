import { Component, OnInit } from '@angular/core';
import { UnidadService, Unidad } from 'src/app/services/unidad.service';
import { ProyectoService, Proyecto } from 'src/app/services/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unidad-list',
  templateUrl: './unidad-list.component.html'
})
export class UnidadListComponent implements OnInit {
  unidades: Unidad[] = [];
  proyectos: Proyecto[] = [];
  search = '';
  page = 1;
  totalPages = 1;

  constructor(
    public unidadService: UnidadService,
    public proyectoService: ProyectoService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.cargarUnidades();
    this.cargarProyectos();
  }

  cargarUnidades(): void {
    this.unidadService
        .getUnidades(this.search, this.page)
        .subscribe(res => {
      this.unidades = res;
    });
  }

  cargarProyectos(): void {
    this.proyectoService.getProyectos().subscribe(res => {
      this.proyectos = res;
    });
  }

  buscar(): void {
    this.page = 1;
    this.cargarUnidades();
  }

  cambiarPagina(nuevaPagina: number): void {
    this.page = nuevaPagina;
    this.cargarUnidades();
  }

  editarUnidad(id: string): void {
    this.router.navigate([`/unidades/${id}/editar`]);
  }

  eliminarUnidad(id: string): void {
    if (confirm('¿Eliminar esta unidad?')) {
      this.unidadService.eliminarUnidad(id).subscribe(() => {
        this.cargarUnidades();
      });
    }
  }

  getProyectoNombre(id: string | number): string {
    const p = this.proyectos?.find(p => p.id == id);
    return p ? p.nombre : id?.toString();
  }

}
