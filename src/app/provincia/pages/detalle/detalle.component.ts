import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { Provincia } from '../../interfaces/provincia.interfaces';
import { ProvinciaService } from '../../services/provincia.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styles: [
    '.frio{ background-color: #E9FFFF}',
    '.calido{ background-color: #EBFFF5}',
    '.calor{ background-color: #FFF1C9}'
  ]
})
export class DetalleComponent implements OnInit {

  provincia!: Provincia;

  constructor( 
    private activatedRoute: ActivatedRoute, 
    private provinciaService: ProvinciaService
    ) { }

  getClass(valor: any) {
    if(valor < 0){
      return 'frio';
    }else{
      if(valor > 0 && valor < 10){
        return 'calido';
      }else{
        return 'calor';
      }
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.provinciaService.cargarDetalles( id ))
    )
    .subscribe( provincia => {
      this.provincia = provincia;
      console.log(this.provincia);
    });
  }

}
