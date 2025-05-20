import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';

import { ProyectoListComponent } from './components/proyecto-list/proyecto-list.component';

import { ProyectoFormComponent } from './components/proyecto-form/proyecto-form.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'proyectos', component: ProyectoListComponent, canActivate: [AuthGuard] },
  { path: 'proyectos/nuevo', component: ProyectoFormComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
