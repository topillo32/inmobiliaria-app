import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Proyecto {
  id: string;
  nombre: string;
  descripcion: string;
  ubicacion: string;
  fecha_inicio: string;
  fecha_finalizacion: string;
  estado: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {
  private apiUrl = 'http://localhost:8000/api/proyectos/';

  constructor(private http: HttpClient) {}

  getProyectos(filtro: string = '', page: number = 1): Observable<any> {
    let params = new HttpParams()
      .set('search', filtro)
      .set('page', page.toString());

    return this.http.get<any>(this.apiUrl, { params });
  }

  crearProyecto(data: any) {
    return this.http.post(this.apiUrl, data);
  }

}
