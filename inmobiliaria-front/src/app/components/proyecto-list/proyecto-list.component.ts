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
    this.proyectoService.getProyectos(this.search, this.page).subscribe(res => {
      this.proyectos = res.results;
      this.totalPages = Math.ceil(res.count / 10);
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

}
