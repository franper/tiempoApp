import { Component, OnInit } from '@angular/core';
import { reduce } from 'rxjs';

import { Provincia } from '../../interfaces/provincia.interfaces';
import { ProvinciaService } from '../../services/provincia.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    '.impar { background-color: #1b3959; }',
    'a {color: #ffff}',
    'td{border: solid 1px;}'
            
  ]
})
export class ListadoComponent implements OnInit {

  provincias: Provincia[] = [];

  constructor( private provinciaService: ProvinciaService) {}

  load(){
    this.provinciaService.cargarProvincias().subscribe( (provincias) => {
      this.provincias = provincias;
      console.log(provincias);  
    }, (error) =>{
      this.provincias = [];
    });
  }

  ngOnInit(): void {
    this.load();
    
  }

}
