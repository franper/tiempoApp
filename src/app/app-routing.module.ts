import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleComponent } from './provincia/pages/detalle/detalle.component';
import { ListadoComponent } from './provincia/pages/listado/listado.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoComponent,
    pathMatch: 'full'
  },
  {
    path: 'detalle/:id',
    component: DetalleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
