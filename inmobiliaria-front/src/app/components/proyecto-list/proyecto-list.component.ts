import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 
import { ProyectoService, Proyecto } from 'src/app/services/proyecto.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-proyecto-list',
  templateUrl: './proyecto-list.component.html'
})
export class ProyectoListComponent implements OnInit {
  proyectos: Proyecto[] = [];
  search = '';
  page = 1;
  totalPages = 1;

  constructor(
    private authService: AuthService,
    private router: Router,
    private proyectoService: ProyectoService 
  ) {}

  ngOnInit(): void {
    this.cargarProyectos();
  }

  cargarProyectos(): void {
    this.proyectoService
      .getProyectos(this.search, this.page)
      .subscribe(data => {
        console.log('array recibido:', data);
        this.proyectos = data;
      });
  }

  buscar(): void {
    this.page = 1;
    this.cargarProyectos();
  }

  cambiarPagina(nuevaPagina: number): void {
    this.page = nuevaPagina;
    this.cargarProyectos();
  }

  irANuevoProyecto(): void {
    this.router.navigate(['/proyectos/nuevo']);
  }

  eliminarProyecto(id: string): void {
    if (confirm('¿Estás seguro de que quieres eliminar este proyecto?')) {
      this.proyectoService.eliminarProyecto(id).subscribe(() => {
        this.cargarProyectos();
      });
    }
  }

  editarProyecto(id: string): void {
    this.router.navigate(['/proyectos', id, 'editar']);
  }


}
