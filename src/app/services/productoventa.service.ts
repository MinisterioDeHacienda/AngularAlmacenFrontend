import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductoVentaI } from '../models/productoventa';

@Injectable({
  providedIn: 'root'
})
export class ProductoVentaService {
  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/productoventas`
  constructor(private http:HttpClient) {  }

  getAllProductoVenta():Observable<{productoVenta:ProductoVentaI[]}>{
    return this.http
      .get<{productoVenta:ProductoVentaI[]}>(this.base_path)
  }
  
  createProductoVenta(data: any):Observable<ProductoVentaI>{
    return this.http.post<ProductoVentaI>(this.base_path, data)
  }
}