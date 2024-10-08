import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { FormulariosComponent } from './formularios/formularios.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'componentes', component: ComponentesComponent },
  { path: 'formularios', component: FormulariosComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redireciona para o Dashboard por padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
