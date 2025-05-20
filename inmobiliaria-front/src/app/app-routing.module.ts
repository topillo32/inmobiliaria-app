import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ProyectoListComponent } from './components/proyecto-list/proyecto-list.component';
import { ProyectoFormComponent } from './components/proyecto-form/proyecto-form.component';
import { UnidadListComponent } from './components/unidad-list/unidad-list.component';
import { UnidadFormComponent } from './components/unidad-form/unidad-form.component';
import { ClienteListComponent } from './clientes/cliente-list/cliente-list.component';
import { ClienteFormComponent } from './clientes/cliente-form/cliente-form.component';


import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'proyectos', component: ProyectoListComponent, canActivate: [AuthGuard] },
  { path: 'proyectos/nuevo', component: ProyectoFormComponent, canActivate: [AuthGuard] },
  { path: 'unidades', component: UnidadListComponent, canActivate: [AuthGuard] },
  { path: 'unidades/nuevo', component: UnidadFormComponent, canActivate: [AuthGuard] },
  { path: 'unidades/:id/editar', component: UnidadFormComponent, canActivate: [AuthGuard] },
  { path: 'clientes', component: ClienteListComponent, canActivate: [AuthGuard] },
  { path: 'clientes/nuevo', component: ClienteFormComponent, canActivate: [AuthGuard] },
  { path: 'clientes/:id/editar', component: ClienteFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
