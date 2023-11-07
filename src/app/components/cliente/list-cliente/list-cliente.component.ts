import { Component, OnInit } from '@angular/core';
import { ClienteI } from 'src/app/models/cliente';
import { Router } from '@angular/router';
import { ClienteService } from '../../../services/cliente.service'

@Component({
  selector: 'app-list-cliente',
  templateUrl: './list-cliente.component.html',
  styleUrls: ['./list-cliente.component.css']
})
export class ListClienteComponent implements OnInit {
  clientes: ClienteI[] = [];
  public displayedColumns: string[] = ["id", "nombreCliente", "direccionCliente", "telefonoCliente", "correoCliente", "passwordCliente", "estadoCliente"]
  constructor(private clienteService: ClienteService, private router: Router) { }
  ngOnInit(): void {
    this.llernarCliente()
  }
  llernarCliente() {
    this.clienteService.getAllCliente()
      .subscribe({
        next: (data) => {
          this.clientes = data.cliente
          console.log(this.clientes)
        }
      })
  }
}


