import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductoI } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit{
  productos: ProductoI[] = [];
  public displayedColumns: string[] = ["id", "nombre", "marca", "precio", "stockMin", "cantidad", "TipoProductoId"]
  constructor(private productoService: ProductoService, private router: Router) { }
  ngOnInit(): void {
    this.llernarProducto()
  }
  llernarProducto() {
    this.productoService.getAllProducto()
      .subscribe({
        next: (data) => {
          this.productos = data.producto
          console.log(this.productos)
        }
      })
  }
}
