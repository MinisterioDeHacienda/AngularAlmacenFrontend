import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoI } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/productos`
  constructor(private http:HttpClient) {  }

  getAllProducto():Observable<{producto:ProductoI[]}>{
    return this.http
      .get<{producto:ProductoI[]}>(this.base_path)
  }
}
