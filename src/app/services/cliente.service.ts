import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClienteI } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  api_uri_nodejs = 'http://localhost:4000';
  base_path = `${this.api_uri_nodejs}/clientes`
  constructor(private http:HttpClient) {  }

  getAllCliente():Observable<{cliente:ClienteI[]}>{
    return this.http
      .get<{cliente:ClienteI[]}>(this.base_path)
  }
}
