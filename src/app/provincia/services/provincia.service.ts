import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Provincia } from '../interfaces/provincia.interfaces';


@Injectable({
  providedIn: 'root'
})


export class ProvinciaService {

  private apiUrl: string = 'https://www.el-tiempo.net/api/json/v2/provincias';

  constructor( private http: HttpClient) { }


  cargarProvincias(): Observable<Provincia[]> {
    //return this.http.get<Provincia[]>(this.apiUrl);
    return this.http.get<Provincia>(this.apiUrl).pipe(map(response => response.provincias));
  }

  cargarDetalles(id: string): Observable<Provincia> {
    const url = `${ this.apiUrl }/${ id }`;
    
    return this.http.get<Provincia>(url);

  }


}
