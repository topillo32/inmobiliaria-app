import { Component, OnInit } from '@angular/core';
import { ClienteService, Cliente } from 'src/app/services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss']
})
export class ClienteListComponent implements OnInit {
  clientes: Cliente[] = [];
  search = '';
  page = 1;
  totalPages = 1;

  constructor(
    private clienteService: ClienteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarClientes();
  }

  cargarClientes(): void {
    this.clienteService.getClientes(this.search, this.page)
      .subscribe(res => {
        this.clientes = res;
      });
  }

  buscar(): void {
    this.page = 1;
    this.cargarClientes();
  }

  cambiarPagina(nuevaPagina: number): void {
    if (nuevaPagina < 1 || nuevaPagina > this.totalPages) return;
    this.page = nuevaPagina;
    this.cargarClientes();
  }

  nuevoCliente(): void {
    this.router.navigate(['/clientes/nuevo']);
  }

  editarCliente(id: string): void {
    this.router.navigate(['/clientes', id, 'editar']);
  }

  eliminarCliente(id: string): void {
    if (confirm('¿Eliminar este cliente?')) {
      this.clienteService.eliminarCliente(id).subscribe(() => {
        this.cargarClientes();
      });
    }
  }
}
