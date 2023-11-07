import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoProductoI } from 'src/app/models/tipoproducto';
import { TipoProductoService } from 'src/app/services/tipoproducto.service';

@Component({
  selector: 'app-list-tipo-producto',
  templateUrl: './list-tipo-producto.component.html',
  styleUrls: ['./list-tipo-producto.component.css']
})
export class ListTipoProductoComponent implements OnInit{
  tipoproductos: TipoProductoI[] = [];
  public displayedColumns: string[] = ["id", "nombre"]
  constructor(private tipoproductoService: TipoProductoService, private router: Router) { }
  ngOnInit(): void {
    this.llernarTipoProducto()
  }
  llernarTipoProducto() {
    this.tipoproductoService.getAllTipoProducto()
      .subscribe({
        next: (data) => {
          this.tipoproductos = data.tipoproducto
          console.log(this.tipoproductos)
        }
      })
  }
}
