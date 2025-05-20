import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Cliente {
  id: string;
  rut: string;
  nombre: string;
  apellido: string;
  correo: string;
  telefono: string;
  fecha_creacion: string;
  unidad_id: string | null; 
}

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:8000/api/cliente/';

  constructor(private http: HttpClient) {}

  getClientes(filtro = '', page = 1): Observable<any> {
    let params = new HttpParams()
      .set('search', filtro)
      .set('page', page.toString());

    return this.http.get<any>(this.apiUrl, { params });
  }

  getCliente(id: string) {
    return this.http.get<Cliente>(`${this.apiUrl}${id}/`);
  }

  crearCliente(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  actualizarCliente(id: string, data: any) {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }

  eliminarCliente(id: string) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
