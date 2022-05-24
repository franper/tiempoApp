import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ListadoComponent } from './pages/listado/listado.component';
import { DetalleComponent } from './pages/detalle/detalle.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ListadoComponent,
    DetalleComponent
  ],
  exports: [
    ListadoComponent,
    DetalleComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    SharedModule
  ]
})
export class ProvinciaModule { }
