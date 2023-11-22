import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipoProductoI } from '../models/tipoproducto';

@Injectable({
  providedIn: 'root'
})
export class TipoProductoService {
  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/tipoproductos`
  constructor(private http:HttpClient) {  }

  getAllTipoProducto():Observable<{tipoproducto:TipoProductoI[]}>{
    return this.http
      .get<{tipoproducto:TipoProductoI[]}>(this.base_path)
  }

  createTipoProducto(data: any):Observable<TipoProductoI>{
    return this.http.post<TipoProductoI>(this.base_path, data)
  }
}
