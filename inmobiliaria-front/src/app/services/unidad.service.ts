import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Unidad {
  id: string;
  numero: string;
  tipo: string;
  estado: string;
  precio: number;
  proyecto: number; // o string según tu modelo
}

@Injectable({
  providedIn: 'root'
})
export class UnidadService {
  private apiUrl = 'http://localhost:8000/api/unidad-propiedad/';

  constructor(private http: HttpClient) {}

  getUnidades(filtro = '', page = 1): Observable<any> {
    let params = new HttpParams()
      .set('search', filtro)
      .set('page', page.toString());

    return this.http.get<any>(this.apiUrl, { params });
  }

  getUnidad(id: string) {
    return this.http.get<Unidad>(`${this.apiUrl}${id}/`);
  }

  crearUnidad(data: any) {
    return this.http.post(this.apiUrl, data);
  }

  actualizarUnidad(id: string, data: any) {
    return this.http.put(`${this.apiUrl}${id}/`, data);
  }

  eliminarUnidad(id: string) {
    return this.http.delete(`${this.apiUrl}${id}/`);
  }
}
