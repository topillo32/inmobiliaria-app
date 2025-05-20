import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService, Cliente } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.scss']
})
export class ClienteFormComponent implements OnInit {
  form: FormGroup;
  esEdicion = false;
  clienteId: string | null = null;

  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      rut: ['', Validators.required],
      nombre: ['', Validators.required],
      apellido: [''],
      correo: ['', [Validators.required, Validators.email]],
      telefono: [''],
      unidad_id: ['']
    });
  }

  ngOnInit(): void {
    this.clienteId = this.route.snapshot.paramMap.get('id');
    if (this.clienteId) {
      this.esEdicion = true;
      this.clienteService.getCliente(this.clienteId!).subscribe(cliente => {
        this.form.patchValue(cliente);
      });
    }
  }

  guardar(): void {
    if (this.form.invalid) return;

    const data = this.form.value as Cliente;
    if (this.esEdicion && this.clienteId) {
      this.clienteService.actualizarCliente(this.clienteId, data).subscribe(() => {
        this.router.navigate(['/clientes']);
      });
    } else {
      this.clienteService.crearCliente(data).subscribe(() => {
        this.router.navigate(['/clientes']);
      });
    }
  }

  toggleEdicion(): void {
    this.esEdicion = !this.esEdicion;
  }

}
